"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Printer,
  Copy,
  Check,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Code2,
  Sparkles,
  Layers,
  Shield,
  Download,
} from "lucide-react";

export function ResumeView() {
  const [copied, setCopied] = useState(false);

  const plainTextResume = `OM THAKUR
Backend Engineer | Scalable Systems | Real-time APIs | AI
Email: omthakur2366@gmail.com | Phone: +91 7756898550 | Location: Mumbai, India
Website: https://omthakur.in | GitHub: https://github.com/MonsterFlick | LinkedIn: https://linkedin.com/in/omthakur2366

SUMMARY
Backend Engineer with 1 year of industry experience, focused on high-speed, scalable systems and real-time APIs. Boosted system performance by replacing cron workflows with a message-queue architecture. Strong proficiency in TypeScript, Deno, Supabase, Node.js, and microcontroller integrations.

EXPERIENCE

Cyber Intelligence and Research Lab (CIARL) — Thane, Maharashtra
Software Developer | Aug 2025 - Present (NDA-bound role)
- Developed Android and device-level applications for managed environments, focusing on background services and secure data exchange.
- Trained and integrated legal-domain AI models, building context-aware pipelines for structured query handling and reference-backed outputs.
- Built RAG-based systems combining document ingestion, semantic retrieval, and prompt orchestration for legal knowledge workflows.
- Developed internal web dashboards with authentication, RBAC, and user management for enterprise tooling.
- Implemented secure backend integrations enabling controlled interaction between internal platforms and managed endpoint environments.
- Built real-time communication Android applications (chat, voice, video) using Matrix-based infrastructure.
- Created document automation systems for agreement generation using templates and dynamic form-based inputs.

Sumeru Technology Solutions Pvt. Ltd. — Bengaluru, Karnataka
SDE Intern | Aug 2024 - Feb 2025
- Replaced 15-minute cron jobs with Flexbase message queue service, reducing sync time to 4 seconds.
- Migrated legacy PHP code to modern JavaScript and TypeScript.
- Developed and tested backend APIs using Deno edge functions and Postman.
- Researched Drizzle ORM integration with Supabase Row-Level Security (RLS).
- Led a team of 4 in evaluating Novu (open-source notification system) vs custom solutions; proposed future dashboard applications.
- Part of Root Cause Analysis (RCA) team: Diagnosed Supabase crash caused by payment cron script; resolved Deno + TypeScript type inference issues through in-depth debugging.

EDUCATION

Sonubhau Baswant College, Mumbai University
Bachelor of Science in Information Technology (B.Sc. IT) | Aug 2021 - Apr 2024
- Grade / CGPA: 8.55 / 10.0 (First Rank)
- Graduated with top rank in college. Led final-year project team as project head. Built strong foundations in backend systems and real-world tech stacks.

PROJECTS

Fin Read (2026) | Android & Cloud Finance Automation
- Developed automated personal finance tracker for Android parsing real-time transaction data from SMS and payment notifications (Google Pay, UPI) to automatically categorize expenses.
- Engineered offline-first architecture using Room Database for local storage and Supabase for real-time cloud synchronization.
- Built modern UI using Material 3.
- GitHub: https://github.com/MonsterFlick/Fin-Read

Agni (2025) | Local AI Automation & Execution Agent
- Designed local automation system converting natural language into safe Windows actions using an AI planning model and secure execution agent.
- Built authenticated API to send user intent to AI, receive structured JSON commands, execute them locally via PowerShell/CMD/VBS, and return real-time logs.
- Implemented automatic script caching & reuse via dedicated C:\\Agni_scripts library.
- Added safety layers to block destructive operations and integrated a repair-loop where AI fixes invalid commands using execution logs. Full offline operation with local Ollama models.
- GitHub: https://github.com/MonsterFlick/Agni

devpic (2026) | Open-Source Stateless Image & SVG Generation Engine API
- Built an open-source, stateless image generation engine and REST API that dynamically generates vector placeholders, geometric patterns, and UI assets via mathematical SVG algorithms.
- Designed zero-side-effect, high-throughput API endpoints optimized for instant HTTP response times without external database dependencies.
- GitHub: https://github.com/MonsterFlick/devpic

GitFool (2026) | Edge-Rendered Tech Blog Platform
- Built high-performance tech blog platform using Next.js 16 with Edge Runtime, fetching and rendering markdown content live from GitHub repos.
- Implemented full SEO optimization (JSON-LD, dynamic OG tags, sitemap, SSR), dark-first UI with syntax highlighting and table of contents generation.
- URL: https://blogs.omthakur.in

SKILLS
- Languages: TypeScript, JavaScript, Deno, Node.js, Python, Go, SQL, HTML/CSS
- Backend & Systems: REST APIs, Microservices, Message Queues (Flexbase), WebSockets, Background Services, Matrix Protocol, Deno Functions
- Databases & Cloud: Supabase, PostgreSQL, Drizzle ORM, Room DB, Redis, Row-Level Security (RLS)
- AI & Automation: RAG Pipelines, Vector Ingestion, Semantic Retrieval, Ollama, Prompt Orchestration, Windows Script Automation
- Tools & Utilities: Git, GitHub, Docker, Postman, Linux, PowerShell, CMD

VOLUNTEERING
Assistant Professor (Volunteer) — Bhimrao Pradhan College, Mumbai University | Jun 2024 - Aug 2024
- Taught core subjects to B.Sc. IT students, mentored students, and created structured educational content to enhance technical understanding and industry readiness.

CERTIFICATIONS & AWARDS
- First Rank - B.Sc. IT | Sonubhau Baswant College, Mumbai University (April 2024)
- Data Science Training | Internshala (October 2023) - Certificate: 263gl7b3rur
`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FAF6F1] text-[#2C2825] font-sans antialiased selection:bg-[#C4604A]/20">
      {/* ── Print Styles Overlay ── */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 12mm 15mm 12mm 15mm;
            size: A4 portrait;
          }
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
            font-family: Arial, Helvetica, sans-serif !important;
            font-size: 10pt !important;
            line-height: 1.35 !important;
          }
          .no-print,
          .grain-layer,
          header,
          footer {
            display: none !important;
          }
          .print-container {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            background: #ffffff !important;
          }
          .print-header-name {
            font-size: 22pt !important;
            font-weight: bold !important;
            text-transform: uppercase;
            letter-spacing: 0.5pt;
            color: #000000 !important;
            margin-bottom: 2pt !important;
          }
          .print-header-subtitle {
            font-size: 10.5pt !important;
            font-weight: bold !important;
            color: #333333 !important;
            margin-bottom: 6pt !important;
          }
          .print-contact-bar {
            font-size: 9pt !important;
            border-bottom: 1.5pt solid #000000 !important;
            padding-bottom: 6pt !important;
            margin-bottom: 10pt !important;
            color: #222222 !important;
          }
          .print-section-heading {
            font-size: 11pt !important;
            font-weight: bold !important;
            text-transform: uppercase !important;
            border-bottom: 1pt solid #000000 !important;
            padding-bottom: 2pt !important;
            margin-top: 10pt !important;
            margin-bottom: 6pt !important;
            color: #000000 !important;
            letter-spacing: 0.5pt !important;
          }
          .print-bullet-list {
            margin-top: 3pt !important;
            margin-bottom: 6pt !important;
            padding-left: 14pt !important;
          }
          .print-bullet-list li {
            margin-bottom: 2.5pt !important;
            font-size: 9.5pt !important;
          }
          .print-[#C4604A],
          .print-badge {
            background: none !important;
            border: none !important;
            color: #000000 !important;
            padding: 0 !important;
            font-weight: bold !important;
          }
          a {
            color: #000000 !important;
            text-decoration: none !important;
          }
          .page-break-inside-avoid {
            page-break-inside: avoid;
          }
        }
      `}</style>

      {/* ── Top Floating Action Toolbar (Web View Only) ── */}
      <div className="no-print sticky top-0 z-50 bg-[#FAF6F1]/90 backdrop-blur-md border-b border-[#EDE4D9] py-3 px-4 sm:px-6 shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F3ECE4] hover:bg-[#E2D5C6] text-[#1A1816] text-xs font-mono font-medium transition-colors border border-[#EDE4D9]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to</span> Portfolio
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FDFCFA] hover:bg-[#F3ECE4] text-[#1A1816] text-xs font-mono font-medium transition-colors border border-[#D4C3AF] shadow-xs"
              title="Copy plain-text ATS version to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#566449]" />
                  <span className="text-[#566449]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#C4604A]" />
                  <span>Copy ATS Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#1A1816] text-[#FAF6F1] hover:bg-[#C4604A] text-xs font-mono font-semibold transition-colors shadow-xs"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#C4604A]" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Resume Document Container ── */}
      <main className="py-8 sm:py-12 px-3 sm:px-6 max-w-4xl mx-auto print-container">
        <article className="p-6 sm:p-10 bg-[#FDFCFA] border border-[#EDE4D9] rounded-xl shadow-paper relative overflow-hidden print-container">
          
          {/* Top Decorative Colophon Stripe (Web View Only) */}
          <div className="no-print h-1.5 w-full bg-gradient-to-r from-[#C4604A] via-[#D4C3AF] to-[#566449] absolute top-0 left-0 right-0" />

          {/* ── HEADER ── */}
          <header className="pb-3 mb-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              {/* Left Column: Identity, Subtitle & Location */}
              <div className="space-y-2 flex-1 min-w-0">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1816] tracking-tight print-header-name">
                  Om Thakur
                </h1>
                <p className="font-mono text-[11.5px] sm:text-xs md:text-[13.5px] text-[#C4604A] font-bold tracking-tight print-header-subtitle whitespace-normal sm:whitespace-nowrap">
                  Backend Engineer | Scalable Systems | Real-time APIs | AI
                </p>

                <div className="flex items-center gap-1.5 text-xs font-mono pt-1 text-[#5E5854]">
                  <MapPin className="w-3.5 h-3.5 text-[#C4604A] shrink-0 no-print" />
                  <span className="font-bold text-[#1A1816]">Mumbai, India</span>
                  <span className="text-[#7A746D] font-normal">(Ready to Relocate)</span>
                </div>
              </div>

              {/* Right Column: Clean Vertically Aligned Contact Stack */}
              <div className="flex flex-col gap-2 text-xs font-mono text-[#5E5854] print-contact-bar md:border-l md:border-[#EDE4D9] md:pl-6 shrink-0">
                <a
                  href="mailto:omthakur2366@gmail.com"
                  className="inline-flex items-center gap-2.5 hover:text-[#C4604A] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C4604A] shrink-0 no-print" />
                  <span className="font-medium text-[#1A1816]">omthakur2366@gmail.com</span>
                </a>

                <a
                  href="tel:+917756898550"
                  className="inline-flex items-center gap-2.5 hover:text-[#C4604A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#566449] shrink-0 no-print" />
                  <span className="font-medium text-[#1A1816]">+91 7756898550</span>
                </a>

                <a
                  href="https://omthakur.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#C4604A] transition-colors"
                >
                  <Globe className="w-4 h-4 text-[#C4604A] shrink-0 no-print" />
                  <span className="font-bold text-[#1A1816]">omthakur.in</span>
                </a>

                <a
                  href="https://github.com/MonsterFlick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#1A1816] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#1A1816] shrink-0 no-print" />
                  <span className="font-medium text-[#1A1816]">github.com/MonsterFlick</span>
                </a>

                <a
                  href="https://linkedin.com/in/omthakur2366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#0A66C2] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2] shrink-0 no-print" />
                  <span className="font-medium text-[#1A1816]">linkedin.com/in/omthakur2366</span>
                </a>
              </div>
            </div>
          </header>

          {/* ── PROFESSIONAL SUMMARY ── */}
          <section className="mb-7 page-break-inside-avoid">
            <h2 className="font-serif text-base sm:text-lg font-bold text-[#1A1816] uppercase tracking-wider pb-1 mb-2.5 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
              <Sparkles className="w-4 h-4 text-[#C4604A] no-print" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4541] leading-relaxed">
              Backend Engineer with <strong>1 year of industry experience</strong>, focused on high-speed, scalable systems and real-time APIs.
              Boosted system performance by replacing legacy cron workflows with a high-throughput message-queue architecture.
              Strong technical proficiency with <strong>TypeScript, Deno, Supabase, Node.js, Python, Go</strong>, and microcontroller &amp; mobile integrations.
            </p>
          </section>

          {/* ── TECHNICAL SKILLS MATRIX ── */}
          <section className="mb-7 page-break-inside-avoid">
            <h2 className="font-serif text-base sm:text-lg font-bold text-[#1A1816] uppercase tracking-wider pb-1 mb-3 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
              <Code2 className="w-4 h-4 text-[#566449] no-print" />
              <span>Technical Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
                <span className="font-mono text-[11px] font-bold text-[#C4604A] uppercase tracking-wider block">
                  Backend &amp; Systems Architecture
                </span>
                <p className="text-[#4A4541] leading-snug">
                  TypeScript, Node.js, Deno, Python, Go, REST APIs, GraphQL, Message Queues (Flexbase/RabbitMQ), Microservices, WebSockets, Background Services
                </p>
              </div>

              <div className="p-3 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
                <span className="font-mono text-[11px] font-bold text-[#566449] uppercase tracking-wider block">
                  Databases &amp; Storage
                </span>
                <p className="text-[#4A4541] leading-snug">
                  Supabase, PostgreSQL, Drizzle ORM, Room Database, Redis, SQL Tuning, Row-Level Security (RLS)
                </p>
              </div>

              <div className="p-3 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
                <span className="font-mono text-[11px] font-bold text-[#1A1816] uppercase tracking-wider block">
                  AI &amp; Knowledge Workflows
                </span>
                <p className="text-[#4A4541] leading-snug">
                  RAG Pipelines, Vector Search, LLM Integration, Document Ingestion, Semantic Retrieval, Local Ollama, Prompt Orchestration
                </p>
              </div>

              <div className="p-3 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
                <span className="font-mono text-[11px] font-bold text-[#7A746D] uppercase tracking-wider block">
                  Infrastructure &amp; Tooling
                </span>
                <p className="text-[#4A4541] leading-snug">
                  Git, GitHub, Docker, Linux, Matrix Protocol, Postman, Next.js Edge Runtime, PowerShell Automation
                </p>
              </div>
            </div>
          </section>

          {/* ── WORK EXPERIENCE ── */}
          <section className="mb-7">
            <h2 className="font-serif text-base sm:text-lg font-bold text-[#1A1816] uppercase tracking-wider pb-1 mb-4 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
              <Briefcase className="w-4 h-4 text-[#C4604A] no-print" />
              <span>Work Experience</span>
            </h2>

            <div className="space-y-6">
              {/* Job 1 */}
              <div className="page-break-inside-avoid space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#1A1816]">
                      Software Developer
                    </h3>
                    <p className="font-mono text-xs text-[#566449] font-semibold">
                      CIARL – Cyber Intelligence and Research Lab · <span className="text-[#7A746D] font-normal">Thane, Maharashtra (On-Site)</span>
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#C4604A] font-semibold">
                    Aug 2025 – Present
                  </span>
                </div>

                <div className="no-print inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#EDE4D9]/60 text-[10.5px] font-mono text-[#5E5854] border border-[#D4C3AF]">
                  <Shield className="w-3 h-3 text-[#C4604A]" />
                  <span>NDA-bound role; limited details disclosed</span>
                </div>

                <ul className="list-disc list-outside pl-4 space-y-2 text-xs text-[#4A4541] leading-relaxed print-bullet-list">
                  <li>
                    <strong>Legal AI &amp; RAG Architecture</strong>: Trained legal-domain AI models and built RAG systems combining document ingestion, semantic retrieval, and prompt orchestration for context-aware, reference-backed outputs.
                  </li>
                  <li>
                    <strong>Android &amp; Real-Time Systems</strong>: Developed device-level Android apps for managed environments focusing on background services, process lifecycles, and real-time chat, voice, and video via Matrix protocol.
                  </li>
                  <li>
                    <strong>Enterprise Tooling &amp; Endpoint Control</strong>: Built internal web dashboards featuring RBAC, user management, and secure backend integrations for controlled interaction with endpoint environments.
                  </li>
                  <li>
                    <strong>Document Automation Engine</strong>: Created automated agreement generation systems driven by dynamic form inputs and template parsing.
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="page-break-inside-avoid space-y-2 pt-2 border-t border-[#EDE4D9]/60">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#1A1816]">
                      SDE Intern
                    </h3>
                    <p className="font-mono text-xs text-[#566449] font-semibold">
                      Sumeru Technology Solutions Pvt. Ltd. · <span className="text-[#7A746D] font-normal">Bengaluru, Karnataka (On-Site)</span>
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#C4604A] font-semibold">
                    Aug 2024 – Feb 2025
                  </span>
                </div>

                {/* Key Impact Metric Pill */}
                <div className="no-print inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#C4604A]/10 text-[10.5px] font-mono text-[#C4604A] font-bold border border-[#C4604A]/20">
                  <span>⚡ Performance Milestone: 15-min cron reduced to 4-second sync</span>
                </div>

                <ul className="list-disc list-outside pl-4 space-y-2 text-xs text-[#4A4541] leading-relaxed print-bullet-list">
                  <li>
                    <strong>Message Queue Architecture</strong>: Replaced legacy 15-minute cron jobs with Flexbase message queue service, reducing data sync latency from 15 minutes to <strong>4 seconds</strong>.
                  </li>
                  <li>
                    <strong>Codebase Modernization &amp; APIs</strong>: Migrated legacy PHP services to TypeScript and Deno edge functions; researched Drizzle ORM integration with Supabase Row-Level Security (RLS).
                  </li>
                  <li>
                    <strong>Technical Leadership</strong>: Led a 4-engineer team evaluating Novu open-source notification infrastructure vs custom event dashboards.
                  </li>
                  <li>
                    <strong>Root Cause Analysis (RCA)</strong>: Diagnosed critical Supabase database crashes caused by payment cron scripts and resolved complex Deno type-inference bugs.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── FEATURED PROJECTS ── */}
          <section className="mb-7">
            <h2 className="font-serif text-base sm:text-lg font-bold text-[#1A1816] uppercase tracking-wider pb-1 mb-4 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
              <Layers className="w-4 h-4 text-[#566449] no-print" />
              <span>Key Projects</span>
            </h2>

            <div className="space-y-4">
              {/* Project 1 */}
              <div className="page-break-inside-avoid p-3.5 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-sm text-[#1A1816]">Fin Read</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#566449]/15 text-[#566449] font-bold">
                      2026
                    </span>
                  </div>
                  <a
                    href="https://github.com/MonsterFlick/Fin-Read"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#C4604A] hover:underline inline-flex items-center gap-1"
                  >
                    <span>github.com/MonsterFlick/Fin-Read</span>
                    <ExternalLink className="w-3 h-3 no-print" />
                  </a>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#4A4541] print-bullet-list">
                  <li>
                    Developed an automated personal finance tracker for Android parsing real-time transaction SMS &amp; UPI notifications (Google Pay, PhonePe) to automatically categorize expenses.
                  </li>
                  <li>
                    Engineered offline-first architecture using Room Database for local storage and Supabase for real-time cloud synchronization, ensuring multi-device consistency.
                  </li>
                  <li>Built responsive UI using Android Material 3 design tokens.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="page-break-inside-avoid p-3.5 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-sm text-[#1A1816]">Agni</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C4604A]/15 text-[#C4604A] font-bold">
                      2025
                    </span>
                  </div>
                  <a
                    href="https://github.com/MonsterFlick/Agni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#C4604A] hover:underline inline-flex items-center gap-1"
                  >
                    <span>github.com/MonsterFlick/Agni</span>
                    <ExternalLink className="w-3 h-3 no-print" />
                  </a>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#4A4541] print-bullet-list">
                  <li>
                    Designed local automation system converting natural language into safe Windows actions using an AI planning model and secure execution agent.
                  </li>
                  <li>
                    Built authenticated API to send user intent to AI, receive structured JSON commands, execute them locally via PowerShell/CMD/VBS, and return real-time results.
                  </li>
                  <li>
                    Implemented automatic script caching &amp; reuse via dedicated <code className="font-mono text-[11px] bg-[#EDE4D9] px-1 rounded text-[#1A1816]">C:\Agni_scripts</code> library.
                  </li>
                  <li>
                    Added safety layers to block destructive operations and integrated a repair-loop where AI fixes invalid commands using execution logs. Full offline operation with local Ollama models.
                  </li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="page-break-inside-avoid p-3.5 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-sm text-[#1A1816]">devpic</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C4604A]/15 text-[#C4604A] font-bold">
                      2026
                    </span>
                  </div>
                  <a
                    href="https://github.com/MonsterFlick/devpic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#C4604A] hover:underline inline-flex items-center gap-1"
                  >
                    <span>github.com/MonsterFlick/devpic</span>
                    <ExternalLink className="w-3 h-3 no-print" />
                  </a>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#4A4541] print-bullet-list">
                  <li>
                    Built an open-source, stateless image generation engine &amp; REST API that dynamically generates vector placeholders, geometric patterns, and UI assets via mathematical SVG algorithms.
                  </li>
                  <li>
                    Designed zero-side-effect, high-throughput API endpoints optimized for instant HTTP response times without external database dependencies.
                  </li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="page-break-inside-avoid p-3.5 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-sm text-[#1A1816]">GitFool</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#566449]/15 text-[#566449] font-bold">
                      2026
                    </span>
                  </div>
                  <a
                    href="https://blogs.omthakur.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#C4604A] hover:underline inline-flex items-center gap-1"
                  >
                    <span>blogs.omthakur.in</span>
                    <ExternalLink className="w-3 h-3 no-print" />
                  </a>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#4A4541] print-bullet-list">
                  <li>
                    Built high-performance tech blog platform using Next.js 16 with Edge Runtime, fetching and rendering markdown content live from GitHub repositories.
                  </li>
                  <li>
                    Implemented comprehensive SEO optimization (JSON-LD, dynamic OG tags, sitemaps, SSR), dark-first UI with syntax highlighting and table of contents generation.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── EDUCATION ── */}
          <section className="mb-7 page-break-inside-avoid">
            <h2 className="font-serif text-base sm:text-lg font-bold text-[#1A1816] uppercase tracking-wider pb-1 mb-3 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
              <GraduationCap className="w-4 h-4 text-[#C4604A] no-print" />
              <span>Education</span>
            </h2>

            <div className="p-3.5 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#1A1816]">
                    Bachelor of Science in Information Technology (B.Sc. IT)
                  </h3>
                  <p className="font-mono text-xs text-[#566449] font-semibold">
                    Sonubhau Baswant College, Mumbai University
                  </p>
                </div>
                <span className="font-mono text-xs text-[#C4604A] font-semibold">
                  Aug 2021 – Apr 2024
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="font-mono text-xs font-bold text-[#1A1816] px-2 py-0.5 rounded bg-[#E2D5C6] border border-[#D4C3AF]">
                  CGPA: 8.55 / 10.0
                </span>
                <span className="font-mono text-xs font-bold text-[#566449] px-2 py-0.5 rounded bg-[#566449]/15 border border-[#566449]/30">
                  🏆 First Rank
                </span>
              </div>

              <p className="text-xs text-[#4A4541] pt-1 leading-relaxed">
                Graduated with top rank in college. Led the final-year project team as project head. Built strong foundations in backend development, systems architecture, and collaborative technical problem-solving.
              </p>
            </div>
          </section>

          {/* ── VOLUNTEERING ── */}
          <section className="mb-7 page-break-inside-avoid">
            <h2 className="font-serif text-base sm:text-lg font-bold text-[#1A1816] uppercase tracking-wider pb-1 mb-3 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
              <BookOpen className="w-4 h-4 text-[#566449] no-print" />
              <span>Volunteering &amp; Mentorship</span>
            </h2>

            <div className="p-3.5 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#1A1816]">
                    Assistant Professor (Volunteer)
                  </h3>
                  <p className="font-mono text-xs text-[#566449] font-semibold">
                    Bhimrao Pradhan College, Mumbai University · <span className="text-[#7A746D] font-normal">Shahapur, Maharashtra</span>
                  </p>
                </div>
                <span className="font-mono text-xs text-[#C4604A] font-semibold">
                  Jun 2024 – Aug 2024
                </span>
              </div>
              <p className="text-xs text-[#4A4541] pt-1 leading-relaxed">
                Volunteered as an Assistant Professor for B.Sc. IT undergraduates. Responsible for teaching core subjects, mentoring students, and creating structured educational content to enhance technical understanding and industry readiness.
              </p>
            </div>
          </section>

          {/* ── CERTIFICATIONS & AWARDS ── */}
          <section className="page-break-inside-avoid">
            <h2 className="font-serif text-base sm:text-lg font-bold text-[#1A1816] uppercase tracking-wider pb-1 mb-3 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
              <Award className="w-4 h-4 text-[#C4604A] no-print" />
              <span>Certifications &amp; Academic Honors</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
                <div className="flex items-center gap-1.5 text-[#C4604A] font-serif font-bold text-xs">
                  <Award className="w-4 h-4 shrink-0 no-print" />
                  <span>First Rank – B.Sc. IT</span>
                </div>
                <p className="font-mono text-[11px] text-[#7A746D]">Sonubhau Baswant College, Mumbai University · Apr 2024</p>
                <p className="text-[#4A4541] text-[11.5px] leading-snug">
                  Awarded 1st Rank in the B.Sc. IT program for outstanding academic performance across the graduating class.
                </p>
              </div>

              <div className="p-3 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#566449] font-serif font-bold text-xs">
                    <BookOpen className="w-4 h-4 shrink-0 no-print" />
                    <span>Data Science Certification</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#7A746D]">Oct 2023</span>
                </div>
                <p className="font-mono text-[11px] text-[#7A746D]">Internshala Training · Cert: 263gl7b3rur</p>
                <a
                  href="https://trainings.internshala.com/verify-certificate/?certificate_number=263gl7b3rur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#C4604A] hover:underline inline-flex items-center gap-1 pt-0.5"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3 h-3 no-print" />
                </a>
              </div>
            </div>
          </section>

          {/* ── FOOTER COLOPHON (Web View Only) ── */}
          <footer className="no-print mt-10 pt-6 border-t border-[#EDE4D9] flex items-center justify-end text-xs font-mono text-[#7A746D] gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyText}
                className="hover:text-[#1A1816] transition-colors"
              >
                Copy Text
              </button>
              <span>•</span>
              <button
                onClick={handlePrint}
                className="hover:text-[#C4604A] transition-colors font-semibold"
              >
                Print / Save PDF
              </button>
            </div>
          </footer>

        </article>
      </main>
    </div>
  );
}
