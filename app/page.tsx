"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { EditorialHeader } from "@/components/layout/EditorialHeader";
import { EngineeringBook } from "@/components/book/EngineeringBook";
import { PostalContactStation } from "@/components/contact/PostalContactStation";
import { EditorialFooter } from "@/components/layout/EditorialFooter";
import { PROJECTS, ENGINEERING_FAQS, type Project } from "@/data/portfolio-data";

const ProjectModal = dynamic(
  () => import("@/components/dossier/ProjectModal").then((m) => m.ProjectModal),
  { ssr: false }
);
const LiveDeviceStation = dynamic(
  () => import("@/components/station/LiveDeviceStation").then((m) => m.LiveDeviceStation),
  { ssr: false }
);
const CommandPalette = dynamic(
  () => import("@/components/ui/CommandPalette").then((m) => m.CommandPalette),
  { ssr: false }
);

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://omthakur.in/#profilepage",
      "url": "https://omthakur.in",
      "name": "Om Thakur — Backend & Distributed Systems Engineer",
      "datePublished": "2025-01-01T00:00:00+05:30",
      "dateModified": "2026-11-13T09:00:00+05:30",
      "isPartOf": {
        "@id": "https://omthakur.in/#website",
      },
      "mainEntity": {
        "@id": "https://omthakur.in/#person",
      },
      "breadcrumb": {
        "@id": "https://omthakur.in/#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://omthakur.in/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://omthakur.in",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://omthakur.in/#projects",
      "name": "Featured Production Engineering Projects by Om Thakur",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Digital Commerce & Entitlement Platform",
            "url": "https://store.sowebuild.in",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "author": { "@id": "https://omthakur.in/#person" },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
            },
            "description":
              "Digital commerce platform with dual payment verification (synchronous API + timing-safe HMAC-SHA256 webhook) and AES-256-GCM encrypted asset access control at rest.",
          },
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareSourceCode",
            "name": "devpic — Stateless Mathematical SVG API",
            "codeRepository": "https://github.com/MonsterFlick/devpic",
            "programmingLanguage": "TypeScript",
            "runtimePlatform": "Next.js Edge Runtime",
            "author": { "@id": "https://omthakur.in/#person" },
            "description":
              "Open-source, sub-10ms stateless REST API generating deterministic vector geometry and UI meshes on Next.js Edge Runtime with zero database dependencies.",
          },
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "SoftwareSourceCode",
            "name": "Agni — Local AI Automation Agent",
            "codeRepository": "https://github.com/MonsterFlick/Agni",
            "programmingLanguage": "Python",
            "runtimePlatform": "Windows / Ollama",
            "author": { "@id": "https://omthakur.in/#person" },
            "description":
              "Offline Windows AI automation agent powered by local Ollama models with regex command blacklisting, destructive operation safeguards, and an automated error-driven repair loop.",
          },
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Fin Read — Offline-First Expense Tracker",
            "url": "https://github.com/MonsterFlick/Fin-Read",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Android",
            "author": { "@id": "https://omthakur.in/#person" },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
            "description":
              "Offline-first Android finance application built in Kotlin with Room Database local persistence, automated SMS transaction extraction, Material 3 UI, and idempotent Supabase cloud synchronization.",
          },
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "SoftwareApplication",
            "name": "GitFool — Edge-Runtime Markdown Publication Engine",
            "url": "https://blogs.omthakur.in",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web",
            "author": { "@id": "https://omthakur.in/#person" },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
            "description":
              "High-performance edge-rendered publication platform compiling markdown directly from GitHub repositories via webhooks with sub-30ms TTFB and 100/100 Lighthouse scores.",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://omthakur.in/#faq",
      "mainEntity": ENGINEERING_FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [requestedPlate, setRequestedPlate] = useState<number | null>(null);
  const [currentPlate, setCurrentPlate] = useState(0);

  // ⌘K keyboard shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNavigate = (target: string) => {
    if (target === "workbench" || target === "activity" || target === "status" || target === "telemetry") {
      document.getElementById("workbench")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (target === "contact" || target === "enquiry") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (target === "footer" || target === "colophon") {
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (target === "overview" || target === "sketchbook" || target === "book") {
      setRequestedPlate(0);
      document.getElementById("sketchbook")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (target === "principles") {
      setRequestedPlate(1);
      document.getElementById("sketchbook")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (target === "projects") {
      setRequestedPlate(2); // Project 01: Digital Commerce
      document.getElementById("sketchbook")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (target === "skills") {
      setRequestedPlate(7); // Skills Matrix
      document.getElementById("sketchbook")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (target === "experience") {
      setRequestedPlate(8); // Career Chronology
      document.getElementById("sketchbook")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (target === "honors" || target === "credentials") {
      setRequestedPlate(9); // Education & Contact
      document.getElementById("sketchbook")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // Fallback: smooth scroll by ID
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleInspectProjectById = (projectId: string) => {
    const p = PROJECTS.find((item) => item.id === projectId);
    if (p) setSelectedProject(p);
  };

  return (
    <main
      id="main-content"
      className="relative min-h-screen bg-[#FAF6F1] text-[#2C2825] font-sans selection:bg-[#F3CCC2] selection:text-[#1A1816]"
    >
      {/* Homepage-specific JSON-LD (ProfilePage, BreadcrumbList, ItemList, FAQPage) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1. Navigation Header */}
      <EditorialHeader
        onOpenSearch={() => setSearchOpen(true)}
        onNavigate={handleNavigate}
        currentPlate={currentPlate}
      />

      {/* 2. Hero: 3D Engineering Portfolio Book */}
      <div id="sketchbook">
        <EngineeringBook
          requestedPlate={requestedPlate}
          onPlateChange={(idx) => {
            setCurrentPlate(idx);
            setRequestedPlate(null);
          }}
          onInspectProject={handleInspectProjectById}
          onNavigateSection={handleNavigate}
        />
      </div>

      {/* Live Activity & Telemetry Workstations */}
      <LiveDeviceStation />

      {/* 5. Contact & Inquiries Section */}
      <PostalContactStation />

      {/* 6. Footer & Directory */}
      <EditorialFooter
        onNavigatePlate={(plateIdx) => {
          setRequestedPlate(plateIdx);
          document.getElementById("sketchbook")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />

      {/* Global Command Palette */}
      {searchOpen && (
        <CommandPalette
          open={searchOpen}
          onClose={() => setSearchOpen(false)}
          onSelectProject={handleInspectProjectById}
          onNavigate={handleNavigate}
        />
      )}

      {/* Project Blueprint Inspection Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}
