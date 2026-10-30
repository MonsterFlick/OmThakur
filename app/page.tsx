"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { EditorialHeader } from "@/components/layout/EditorialHeader";
import { EngineeringBook } from "@/components/book/EngineeringBook";
import { LiveDeviceStation } from "@/components/station/LiveDeviceStation";
import { ProjectsDossier } from "@/components/dossier/ProjectsDossier";
import { SkillsSpecimen } from "@/components/specimen/SkillsSpecimen";
import { CareerChronology } from "@/components/chronology/CareerChronology";
import { AcademicHonors } from "@/components/honors/AcademicHonors";
import { EngineeringFaqSection } from "@/components/faq/EngineeringFaqSection";
import { PostalContactStation } from "@/components/contact/PostalContactStation";
import { EditorialFooter } from "@/components/layout/EditorialFooter";
import { PROJECTS, ENGINEERING_FAQS, type Project } from "@/data/portfolio-data";
import { Terminal } from "lucide-react";

const ProjectModal = dynamic(
  () => import("@/components/dossier/ProjectModal").then((m) => m.ProjectModal),
  { ssr: false }
);
const TelemetryConsole = dynamic(
  () => import("@/components/terminal/TelemetryConsole").then((m) => m.TelemetryConsole),
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
      "dateModified": "2026-10-29T18:00:00+05:30",
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
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // ⌘K keyboard shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "`") {
        e.preventDefault();
        setTerminalOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
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

      {/* Editorial Navigation Header */}
      <EditorialHeader
        onOpenSearch={() => setSearchOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 1. Hero: 3D Physical Engineering Monograph */}
      <div id="sketchbook">
        <EngineeringBook
          onInspectProject={handleInspectProjectById}
          onNavigateSection={handleNavigate}
        />
      </div>

      {/* 2. Editorial Status Strip */}
      <div className="py-2.5 px-4 bg-[#F3ECE4]/80 border-y border-[#EDE4D9] text-xs sm:text-sm font-mono text-[#383432] overflow-hidden select-none">
        <div className="w-full max-w-7xl xl:max-w-[1360px] mx-auto px-2 sm:px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#566449] animate-pulse shrink-0" />
            <span className="text-[#1A1816] text-xs sm:text-sm font-medium">
              Available for backend &amp; distributed systems roles · Mumbai, India
            </span>
          </div>

          <button
            onClick={() => setTerminalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#9E3D2B] hover:underline font-mono font-medium"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Open REPL (⌘`)</span>
          </button>
        </div>
      </div>

      {/* 3. Live Cross-Device & Discord Gateway Signal Station */}
      <LiveDeviceStation />

      {/* 4. Complete Project Blueprint Archives (Dossier) */}
      <ProjectsDossier onSelectProject={(p) => setSelectedProject(p)} />

      {/* 5. Technical Specimen Taxonomy Matrix */}
      <SkillsSpecimen />

      {/* 6. Chronology of Appointments & Career History */}
      <CareerChronology />

      {/* 7. Academic Distinctions & Verified Certifications */}
      <AcademicHonors />

      {/* 8. Production Architecture Benchmarks & Engineering FAQ (AEO / GEO) */}
      <EngineeringFaqSection />

      {/* 9. Postal Airmail Correspondence Station */}
      <PostalContactStation />

      {/* 10. Grand Colophon, Curator Letter & Directory */}
      <EditorialFooter />

      {/* Floating REPL Console Trigger Badge */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          onClick={() => setTerminalOpen(true)}
          className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#1A1816]/95 backdrop-blur text-[#FAF6F1] hover:bg-[#9E3D2B] transition-all shadow-xl border border-[#4A4541] font-mono text-xs font-semibold active:scale-95"
          title="Open Telemetry Terminal Console (⌘`)"
        >
          <Terminal className="w-3.5 h-3.5 text-[#E07A5F]" />
          <span>REPL Console</span>
        </button>
      </div>

      {/* Global Command Palette */}
      {searchOpen && (
        <CommandPalette
          open={searchOpen}
          onClose={() => setSearchOpen(false)}
          onSelectProject={handleInspectProjectById}
          onOpenTerminal={() => setTerminalOpen(true)}
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

      {/* Live Terminal REPL Console Drawer */}
      {terminalOpen && (
        <TelemetryConsole
          open={terminalOpen}
          onClose={() => setTerminalOpen(false)}
        />
      )}
    </main>
  );
}
