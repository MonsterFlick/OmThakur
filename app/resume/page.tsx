import type { Metadata } from "next";
import { ResumeView } from "@/components/resume/ResumeView";

export const metadata: Metadata = {
  title: {
    absolute: "Om Thakur Resume — Backend & Distributed Systems Engineer",
  },
  description:
    "Official CV & Resume of Om Thakur: Backend Engineer in Mumbai building 15m→4s message queues, ~700ms CUDA WebSocket pipelines, and sub-10ms Edge APIs.",
  keywords: [
    "Om Thakur Resume",
    "Om Thakur CV",
    "Backend Engineer Resume Mumbai",
    "Distributed Systems Engineer CV",
    "TypeScript Python Backend Developer",
    "Node.js Deno Developer",
    "Supabase PostgreSQL Qdrant Engineer",
  ],
  authors: [{ name: "Om Thakur", url: "https://omthakur.in" }],
  creator: "Om Thakur",
  publisher: "Om Thakur",
  metadataBase: new URL("https://omthakur.in"),
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://omthakur.in/resume",
    siteName: "Om Thakur — Backend Engineer Resume",
    title: "Om Thakur Resume — Backend & Distributed Systems Engineer",
    description:
      "Backend Engineer specializing in scalable message-queue systems (15m→4s sync), ~700ms Python/CUDA WebSocket pipelines, Qdrant RAG, and Deno/Supabase APIs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Om Thakur — Backend & Distributed Systems Engineer Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Thakur — Resume / Curriculum Vitae",
    description:
      "Backend Engineer focused on high-speed scalable systems, message-queue architecture, and real-time AI pipelines.",
    creator: "@omthakur2366",
    images: ["/og-image.png"],
  },
};

export default function ResumePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://omthakur.in/resume#profilepage",
        "url": "https://omthakur.in/resume",
        "name": "Om Thakur — Resume / Curriculum Vitae",
        "datePublished": "2025-01-01T00:00:00+05:30",
        "dateModified": "2026-10-29T18:00:00+05:30",
        "isPartOf": {
          "@id": "https://omthakur.in/#website",
        },
        "mainEntity": {
          "@id": "https://omthakur.in/#person",
        },
        "breadcrumb": {
          "@id": "https://omthakur.in/resume#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://omthakur.in/resume#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://omthakur.in",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resume & CV",
            "item": "https://omthakur.in/resume",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ResumeView />
    </>
  );
}
