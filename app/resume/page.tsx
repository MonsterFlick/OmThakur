import type { Metadata } from "next";
import { ResumeView } from "@/components/resume/ResumeView";

export const metadata: Metadata = {
  title: "Resume & CV — Om Thakur | Backend Engineer",
  description:
    "Official resume of Om Thakur, Backend Engineer specializing in high-performance backend systems, real-time message queues, microservices, RAG AI pipelines, and Deno/TypeScript APIs.",
  keywords: [
    "Om Thakur Resume",
    "Om Thakur CV",
    "Backend Engineer Resume",
    "Software Developer Thane",
    "System Architect CV",
    "TypeScript Backend Developer",
    "Node.js Deno Developer",
    "Supabase PostgreSQL Engineer",
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
    title: "Om Thakur — Resume / Curriculum Vitae",
    description:
      "Backend Engineer specializing in scalable message-queue systems, real-time Matrix protocols, RAG AI integration, and high-speed Deno/Supabase APIs.",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Om Thakur — Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Thakur — Resume / CV",
    description:
      "Backend Engineer focused on high-speed scalable systems, message-queue architecture, and AI integrations.",
    creator: "@omthakur2366",
    images: ["/icon.svg"],
  },
};

export default function ResumePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Om Thakur",
    url: "https://omthakur.in/resume",
    jobTitle: "Software Developer / Backend Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Cyber Intelligence and Research Lab (CIARL)",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Sonubhau Baswant College, Mumbai University",
    },
    knowsAbout: [
      "Backend Engineering",
      "Distributed Systems",
      "Message Queue Architectures",
      "TypeScript & Deno",
      "Supabase & PostgreSQL",
      "RAG AI Models",
      "Matrix Communication Protocol",
      "Android Background Services",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResumeView />
    </>
  );
}
