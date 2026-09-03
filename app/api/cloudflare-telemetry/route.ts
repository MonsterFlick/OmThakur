import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request) {
  const startTime = Date.now();
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !token) {
    return NextResponse.json({ error: "Missing credentials" }, { status: 500 });
  }

  let traffic = null;
  let pages = null;

  try {
    // 1. Real Traffic Overview from Cloudflare GraphQL (Last 24h)
    const since24h = new Date(Date.now() - 24 * 3600000).toISOString();
    const gqlRes = await fetch("https://api.cloudflare.com/client/v4/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
          viewer {
            accounts(filter: { accountTag: "${accountId}" }) {
              overview: httpRequestsAdaptiveGroups(
                filter: { datetime_geq: "${since24h}" }
                limit: 1
              ) {
                count
                sum { visits edgeResponseBytes }
              }
              byHost: httpRequestsAdaptiveGroups(
                filter: { datetime_geq: "${since24h}" }
                limit: 4
                orderBy: [count_DESC]
              ) {
                count
                dimensions { clientRequestHTTPHost }
              }
              byDevice: httpRequestsAdaptiveGroups(
                filter: { datetime_geq: "${since24h}" }
                limit: 3
                orderBy: [count_DESC]
              ) {
                count
                dimensions { clientDeviceType }
              }
              byCountry: httpRequestsAdaptiveGroups(
                filter: { datetime_geq: "${since24h}" }
                limit: 5
                orderBy: [count_DESC]
              ) {
                count
                dimensions { clientCountryName }
              }
            }
          }
        }`,
      }),
      cache: "no-store",
    });

    const gqlJson = await gqlRes.json();
    const acc = gqlJson.data?.viewer?.accounts?.[0];

    if (acc) {
      const totalReq = acc.overview?.[0]?.count || 0;
      const totalVis = acc.overview?.[0]?.sum?.visits || 0;
      const bytes = acc.overview?.[0]?.sum?.edgeResponseBytes || 0;
      const mb = (bytes / (1024 * 1024)).toFixed(1);

      const formatCount = (n: number) =>
        n >= 1000 ? `${(n / 1000).toFixed(2)}k` : `${n}`;

      let desktopReq = "0";
      let mobileReq = "0";
      (acc.byDevice || []).forEach((d: any) => {
        const t = d.dimensions?.clientDeviceType;
        if (t === "desktop") desktopReq = formatCount(d.count);
        else if (t === "mobile") mobileReq = `${d.count}`;
      });

      const countryMeta: Record<string, { name: string }> = {
        NL: { name: "Netherlands" },
        US: { name: "United States" },
        KR: { name: "South Korea" },
        FI: { name: "Finland" },
        IN: { name: "India" },
        CA: { name: "Canada" },
        GB: { name: "United Kingdom" },
        DE: { name: "Germany" },
        FR: { name: "France" },
        TW: { name: "Taiwan" },
        AU: { name: "Australia" },
        JP: { name: "Japan" },
        SG: { name: "Singapore" },
        BR: { name: "Brazil" },
        CN: { name: "China" },
        RU: { name: "Russia" },
      };

      traffic = {
        totalRequests: formatCount(totalReq),
        totalVisits: `${totalVis}`,
        bandwidthMb: `${mb} MB`,
        desktopRequests: desktopReq,
        mobileRequests: mobileReq,
        topHosts: (acc.byHost || []).map((h: any) => ({
          host: h.dimensions?.clientRequestHTTPHost,
          requests: formatCount(h.count),
        })),
        topCountries: (acc.byCountry || []).map((c: any) => {
          const code = c.dimensions?.clientCountryName || "??";
          const meta = countryMeta[code] || { name: code };
          return { code, name: meta.name, requests: formatCount(c.count) };
        }),
      };
    }
  } catch (err) {
    console.error("Cloudflare GraphQL error:", err);
  }

  try {
    // 2. Real Pages Deployment from Cloudflare REST API
    const pagesRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/omthakur`,
      {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      }
    );
    const pagesJson = await pagesRes.json();

    if (pagesJson.success && pagesJson.result) {
      const proj = pagesJson.result;
      const dep = proj.latest_deployment || proj.canonical_deployment;
      if (dep) {
        const buildStart = dep.stages?.find((s: any) => s.name === "build")?.started_on;
        const deployEnd = dep.stages?.find((s: any) => s.name === "deploy")?.ended_on;
        let duration = 0;
        if (buildStart && deployEnd) {
          duration = Math.round(
            (new Date(deployEnd).getTime() - new Date(buildStart).getTime()) / 1000
          );
        }

        pages = {
          shortId: dep.short_id,
          commitHash: dep.deployment_trigger?.metadata?.commit_hash?.slice(0, 7),
          commitMessage: dep.deployment_trigger?.metadata?.commit_message,
          branch: dep.deployment_trigger?.metadata?.branch,
          buildDurationSec: duration,
          framework: proj.build_config?.build_command?.includes("next") ? "Next.js" : "Unknown",
          updatedAt: dep.modified_on || dep.created_on,
          environment: dep.environment,
          status: dep.latest_stage?.status,
        };
      }
    }
  } catch (err) {
    console.error("Cloudflare Pages API error:", err);
  }

  // Edge headers (real when deployed on Cloudflare)
  const cfRay = req.headers.get("cf-ray") || "";
  const popCode = cfRay.includes("-") ? cfRay.split("-").pop() : null;
  const cfCountry = req.headers.get("cf-ipcountry") || null;
  const latencyMs = Date.now() - startTime;

  return NextResponse.json({
    traffic,
    pages,
    edge: {
      pop: popCode,
      country: cfCountry,
      ray: cfRay || null,
      protocol: req.headers.get("cf-visitor") || null,
      latencyMs,
    },
    timestamp: new Date().toISOString(),
  });
}
