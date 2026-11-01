import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn(
        "[Contact Dispatch - Dev Fallback]: DISCORD_WEBHOOK_URL is not configured. Logging payload locally:",
        { name, email, message }
      );
      return NextResponse.json({ success: true, simulated: true });
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `📨 **New Portfolio Inquiry from ${name}**`,
        embeds: [
          {
            title: "Direct Dispatch Received",
            color: 0x9e3d2b,
            fields: [
              { name: "Author", value: name, inline: true },
              { name: "Return Address", value: email, inline: true },
              { name: "Message", value: message, inline: false },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (!res.ok) {
      console.error("Discord webhook returned non-OK status:", res.status);
      // Log payload to prevent message loss
      console.log("[Contact Fallback Payload]:", { name, email, message });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to dispatch message" }, { status: 500 });
  }
}
