"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Award,
  Check,
  Copy,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
  Layers,
  Shield,
  BookOpen,
  Sparkles,
} from "lucide-react";

export function ResumeView() {
  const [copied, setCopied] = useState(false);

  const plainTextResume = `OM THAKUR
Backend Engineer | Distributed Systems | Scalable APIs
Mumbai, India
Email: omthakur2366@gmail.com | Phone: +91 7756898550
Portfolio: https://omthakur.in | GitHub: https://github.com/MonsterFlick | LinkedIn: https://linkedin.com/in/omthakur2366

PROFESSIONAL SUMMARY
Backend engineer focused on distributed, database-backed systems and production reliability. Reduced a data synchronization workflow from 15 minutes to 4 seconds by replacing cron polling with message-queue processing, and took part in the root cause analysis of a production database outage. Experience spans low-latency WebSocket pipelines, offline-first background services, role-based access control, payment-webhook verification, and self-hosted infrastructure, built mainly with TypeScript, Python, and PostgreSQL.

KEY METRICS
- 15 min -> 4 s: Sync time after replacing cron polling with a message queue (~99.5% reduction)
- ~700 ms: Turnaround of a Python WebSocket pipeline on self-hosted GPUs
- < 10 ms: Response time of a stateless open-source SVG API

EXPERIENCE

Founding Software Engineer | May 2026 - Present
Krishora Technologies · Mumbai, India
- Engineered a low-latency Python processing pipeline integrating Pipecat, Exotel WebSockets, model inference, and CUDA-accelerated processing, achieving approximately 700 ms turnaround.
- Built the Node.js/PM2 service router for Sevak AI, using Qdrant and the nomic-embed-text embedding model for retrieval.
- Deployed and maintained infrastructure including Dograh, Mailcow, Nginx, Cloudflare SSL, and a ProGuard-protected Expo application.

Software Developer | Aug 2025 - May 2026
Cyber Intelligence and Research Lab (CIARL) · Thane, India
(NDA-bound role; limited details disclosed)
- Developed Kotlin/Java Android background services with encrypted SQLite queues to prevent field data loss during intermittent connectivity.
- Implemented secure backend integrations for managed environments.
- Developed React/PostgreSQL applications with authentication, role-based access control (RBAC), and user management.
- Built a legal-domain RAG pipeline with document ingestion, semantic retrieval, and citation-backed responses.
- Developed Matrix-based real-time communication applications supporting chat, voice, and video.

Software Development Engineer Intern | Aug 2024 - Feb 2025
Sumeru Technology Solutions Pvt. Ltd. · Bengaluru, India
- Replaced polling-based cron workflows with the Flexbase message-queue service, reducing synchronization time from 15 minutes to 4 seconds (approximately 99.5%).
- Participated in the root cause analysis of a production database crash, helping identify that a payment-related cron job repeatedly retried failed requests, producing simultaneous request bursts that overwhelmed the database.
- Migrated legacy PHP functionality to JavaScript and TypeScript; developed and tested backend APIs using Deno Edge Functions and Postman.
- Debugged and resolved Deno/TypeScript type-inference problems.
- Investigated Drizzle ORM integration with Supabase Row-Level Security (RLS).
- Led a team of four in evaluating Novu against a custom notification-system implementation.

TECHNICAL SKILLS
- Languages & Runtimes: TypeScript, JavaScript, Python, SQL, Bash, Node.js, Deno
- Backend & Distributed Systems: REST APIs, WebSockets, Microservices, Flexbase Message Queues, Webhooks, Asynchronous Processing, Background Services, Deno Edge Functions, Next.js Edge Runtime
- Databases & Data Systems: PostgreSQL, Supabase, MySQL, Redis, SQLite, Qdrant, Row-Level Security (RLS)
- Infrastructure & Tooling: Docker, Linux, Nginx, Cloudflare SSL, PM2, Git, GitHub, Postman, PowerShell
- Additional Technologies: Drizzle ORM, RAG Pipelines, Semantic Retrieval, Vector Embeddings, Ollama, Prompt Orchestration

SELECTED PROJECTS

Digital Commerce & Entitlement Platform | store.sowebuild.in
Next.js 15 · TypeScript · Supabase · Razorpay
- Built a digital commerce platform with payment verification and asset-access control.
- Implemented dual-verification checkout combining synchronous API verification with HMAC-SHA256 webhook verification.
- Encrypted digital products at rest using AES-256-GCM authenticated encryption, utilizing SHA-256 key derivation and randomized IVs to prevent plaintext exposure.

devpic — Stateless Mathematical SVG API | github.com/MonsterFlick/devpic
TypeScript · Next.js Edge Runtime
- Built an open-source, stateless REST API that generates deterministic SVG patterns, geometric meshes, and UI assets using mathematical algorithms.
- Achieved sub-10 ms response times with no database or persistent storage dependencies.

Agni — Local AI Automation Agent | github.com/MonsterFlick/Agni
Python · Ollama · PowerShell · Windows APIs
- Developed an offline automation agent that translates natural-language instructions into structured Windows actions.
- Built an authenticated API that processes user intent and executes permitted local commands.
- Implemented command blacklisting, protection against destructive operations, execution logging, script caching, and an automated repair loop driven by execution errors.

Fin Read — Offline-First Finance Tracker | github.com/MonsterFlick/Fin-Read
Kotlin · Android SDK · Room Database · Supabase · Material 3
- Built an Android finance application that extracts transaction information from SMS and payment notifications to automate expense categorization.
- Implemented offline-first persistence with Room Database and cloud synchronization with Supabase.
- Developed the interface using Material 3.

GitFool — Edge-Runtime Markdown Publication Engine | blogs.omthakur.in
Next.js Edge Runtime · TypeScript · Tailwind CSS · MDX
- Built a high-performance edge-rendered publication platform compiling markdown directly from GitHub repositories via webhooks with sub-30ms TTFB.
- Engineered on-the-fly syntax highlighting and automated SEO tag generation with zero database dependencies and 100/100 Lighthouse scores.

EDUCATION
Bachelor of Science in Information Technology (B.Sc. IT) | Aug 2021 - Apr 2024
Sonubhau Baswant College, University of Mumbai
- CGPA: 8.55/10; graduated with First Rank in the college. Led the final-year project team as project head.

CERTIFICATION
Data Science Training | Oct 2023
Internshala · Certificate ID 263gl7b3rur

VOLUNTEERING
Assistant Professor (Volunteer) | Jun - Aug 2024
Bhimrao Pradhan College, University of Mumbai
- Taught core subjects to B.Sc. IT students; mentored students and created structured educational content.
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
            width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            background: #ffffff !important;
          }
          .print-grid {
            display: block !important;
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
      <div className="no-print sticky top-0 z-50 bg-[#FAF6F1]/95 backdrop-blur-md border-b border-[#EDE4D9] py-3 px-4 sm:px-8 lg:px-12 shadow-xs">
        <div className="w-full max-w-7xl xl:max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F3ECE4] hover:bg-[#E2D5C6] text-[#1A1816] font-medium transition-colors border border-[#EDE4D9]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-[#928B87]" aria-hidden="true">/</span>
            <span className="text-[#C4604A] font-semibold" aria-current="page">Resume &amp; CV</span>
          </nav>

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

      {/* ── Main Full-Screen Resume Container ── */}
      <main
        id="main-content"
        className="py-6 sm:py-10 px-4 sm:px-8 lg:px-12 w-full max-w-7xl xl:max-w-[1440px] mx-auto print-container"
      >
        <article className="p-5 sm:p-8 lg:p-10 bg-[#FDFCFA] border border-[#EDE4D9] rounded-xl shadow-paper relative overflow-hidden print-container">
          {/* Top Decorative Colophon Stripe (Web View Only) */}
          <div className="no-print h-1.5 w-full bg-gradient-to-r from-[#C4604A] via-[#D4C3AF] to-[#566449] absolute top-0 left-0 right-0" />

          {/* ── HEADER & PROFESSIONAL SUMMARY ── */}
          <header className="pb-6 mb-8 border-b border-[#EDE4D9]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column (8 Cols): Identity, Subtitle & Professional Summary */}
              <div className="lg:col-span-8 space-y-3 min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1816] tracking-tight leading-tight print-header-name">
                    Om Thakur
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF6F1] border border-[#EDE4D9] text-xs font-mono text-[#5E5854]">
                    <MapPin className="w-3.5 h-3.5 text-[#C4604A] shrink-0 no-print" />
                    <strong className="text-[#1A1816]">Mumbai, India</strong>
                  </span>
                </div>

                <p className="font-mono text-xs sm:text-sm md:text-base text-[#C4604A] font-bold tracking-tight leading-snug break-words print-header-subtitle">
                  Backend Engineer · Distributed Systems · Scalable APIs
                </p>

                {/* Professional Summary */}
                <div className="pt-2">
                  <h2 className="font-serif text-xs sm:text-sm font-bold text-[#7A746D] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 print-section-heading">
                    <Sparkles className="w-3.5 h-3.5 text-[#C4604A] no-print" />
                    <span>Professional Summary</span>
                  </h2>
                  <p className="text-xs sm:text-sm md:text-[15px] text-[#4A4541] leading-relaxed">
                    Backend engineer focused on distributed, database-backed systems and production reliability. Reduced a data synchronization workflow from <strong>15 minutes to 4 seconds</strong> by replacing cron polling with message-queue processing, and took part in the root cause analysis of a production database outage. Experience spans low-latency WebSocket pipelines, offline-first background services, role-based access control, payment-webhook verification, and self-hosted infrastructure, built mainly with <strong>TypeScript, Python, and PostgreSQL</strong>.
                  </p>
                </div>
              </div>

              {/* Right Column (4 Cols): Contact & Profiles Box */}
              <div className="lg:col-span-4 w-full p-4 sm:p-5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-[#5E5854] print-contact-bar">
                <span className="text-[11px] uppercase tracking-wider text-[#7A746D] font-bold border-b border-[#EDE4D9] pb-1.5 mb-0.5 no-print">
                  Direct Coordinates &amp; Profiles
                </span>

                <a
                  href="mailto:omthakur2366@gmail.com"
                  className="inline-flex items-center gap-2.5 hover:text-[#C4604A] transition-colors break-all"
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
                  className="inline-flex items-center gap-2.5 hover:text-[#1A1816] transition-colors break-all"
                >
                  <Github className="w-4 h-4 text-[#1A1816] shrink-0 no-print" />
                  <span className="font-medium text-[#1A1816]">github.com/MonsterFlick</span>
                </a>

                <a
                  href="https://linkedin.com/in/omthakur2366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#0A66C2] transition-colors break-all"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2] shrink-0 no-print" />
                  <span className="font-medium text-[#1A1816]">linkedin.com/in/omthakur2366</span>
                </a>
              </div>
            </div>

            {/* 3 Headline Resume Metrics (Full Width 3-Column Strip) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
              <div className="p-3.5 sm:p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9]">
                <span className="font-serif text-xl sm:text-2xl font-black text-[#C4604A] block">
                  15 min → 4 s
                </span>
                <span className="text-xs sm:text-sm text-[#4A4541] leading-relaxed block mt-1">
                  Sync time after replacing cron polling with a message queue (~99.5% reduction)
                </span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9]">
                <span className="font-serif text-xl sm:text-2xl font-black text-[#1A1816] block">
                  ~700 ms
                </span>
                <span className="text-xs sm:text-sm text-[#4A4541] leading-relaxed block mt-1">
                  Turnaround of a Python WebSocket pipeline on self-hosted GPUs
                </span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9]">
                <span className="font-serif text-xl sm:text-2xl font-black text-[#566449] block">
                  &lt; 10 ms
                </span>
                <span className="text-xs sm:text-sm text-[#4A4541] leading-relaxed block mt-1">
                  Response time of a stateless open-source SVG API
                </span>
              </div>
            </div>
          </header>

          {/* ── MAIN 12-COLUMN FULL-SCREEN BODY GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start print-grid">
            {/* LEFT / MAIN COLUMN (8 Cols): Experience & Selected Projects */}
            <div className="lg:col-span-8 space-y-8 min-w-0">
              {/* ── WORK EXPERIENCE ── */}
              <section>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816] uppercase tracking-wider pb-2 mb-5 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
                  <Briefcase className="w-4 h-4 text-[#C4604A] no-print" />
                  <span>Experience</span>
                </h2>

                <div className="space-y-6">
                  {/* Job 1: Krishora Technologies */}
                  <div className="page-break-inside-avoid p-4 sm:p-5 rounded-lg bg-[#FAF6F1]/70 border border-[#EDE4D9] space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                      <div className="min-w-0">
                        <h3 className="font-serif font-bold text-base sm:text-lg text-[#1A1816]">
                          Founding Software Engineer
                        </h3>
                        <p className="font-mono text-xs sm:text-sm text-[#566449] font-semibold">
                          Krishora Technologies · <span className="text-[#7A746D] font-normal">Mumbai, India</span>
                        </p>
                      </div>
                      <span className="font-mono text-xs sm:text-sm text-[#C4604A] font-semibold shrink-0">
                        May 2026 – Present
                      </span>
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-[#2C2825] leading-relaxed print-bullet-list">
                      <li>
                        Engineered a low-latency Python processing pipeline integrating Pipecat, Exotel WebSockets, model inference, and CUDA-accelerated processing, achieving approximately <strong>700 ms turnaround</strong>.
                      </li>
                      <li>
                        Built the Node.js/PM2 service router for Sevak AI, using Qdrant and the <code className="font-mono text-xs bg-[#EDE4D9] px-1.5 py-0.5 rounded text-[#1A1816]">nomic-embed-text</code> embedding model for retrieval.
                      </li>
                      <li>
                        Deployed and maintained infrastructure including Dograh, Mailcow, Nginx, Cloudflare SSL, and a ProGuard-protected Expo application.
                      </li>
                    </ul>
                  </div>

                  {/* Job 2: CIARL */}
                  <div className="page-break-inside-avoid p-4 sm:p-5 rounded-lg bg-[#FAF6F1]/70 border border-[#EDE4D9] space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                      <div className="min-w-0">
                        <h3 className="font-serif font-bold text-base sm:text-lg text-[#1A1816]">
                          Software Developer
                        </h3>
                        <p className="font-mono text-xs sm:text-sm text-[#566449] font-semibold">
                          Cyber Intelligence and Research Lab (CIARL) · <span className="text-[#7A746D] font-normal">Thane, India</span>
                        </p>
                      </div>
                      <span className="font-mono text-xs sm:text-sm text-[#C4604A] font-semibold shrink-0">
                        Aug 2025 – May 2026
                      </span>
                    </div>

                    <div className="no-print inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#EDE4D9]/60 text-xs font-mono text-[#5E5854] border border-[#D4C3AF]">
                      <Shield className="w-3 h-3 text-[#C4604A] shrink-0" />
                      <span>NDA-bound role; limited details disclosed</span>
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-[#2C2825] leading-relaxed print-bullet-list">
                      <li>
                        Developed Kotlin/Java Android background services with encrypted SQLite queues to prevent field data loss during intermittent connectivity.
                      </li>
                      <li>
                        Implemented secure backend integrations for managed environments.
                      </li>
                      <li>
                        Developed React/PostgreSQL applications with authentication, role-based access control (RBAC), and user management.
                      </li>
                      <li>
                        Built a legal-domain RAG pipeline with document ingestion, semantic retrieval, and citation-backed responses.
                      </li>
                      <li>
                        Developed Matrix-based real-time communication applications supporting chat, voice, and video.
                      </li>
                    </ul>
                  </div>

                  {/* Job 3: Sumeru Technology Solutions */}
                  <div className="page-break-inside-avoid p-4 sm:p-5 rounded-lg bg-[#FAF6F1]/70 border border-[#EDE4D9] space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                      <div className="min-w-0">
                        <h3 className="font-serif font-bold text-base sm:text-lg text-[#1A1816]">
                          Software Development Engineer Intern
                        </h3>
                        <p className="font-mono text-xs sm:text-sm text-[#566449] font-semibold">
                          Sumeru Technology Solutions Pvt. Ltd. · <span className="text-[#7A746D] font-normal">Bengaluru, India</span>
                        </p>
                      </div>
                      <span className="font-mono text-xs sm:text-sm text-[#C4604A] font-semibold shrink-0">
                        Aug 2024 – Feb 2025
                      </span>
                    </div>

                    {/* Key Impact Metric Pill */}
                    <div className="no-print inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#C4604A]/10 text-xs font-mono text-[#C4604A] font-bold border border-[#C4604A]/20">
                      <span>⚡ Performance Milestone: 15-min cron reduced to 4-second sync (~99.5%)</span>
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-[#2C2825] leading-relaxed print-bullet-list">
                      <li>
                        Replaced polling-based cron workflows with the Flexbase message-queue service, reducing synchronization time from <strong>15 minutes to 4 seconds</strong> (approximately 99.5%).
                      </li>
                      <li>
                        Participated in the root cause analysis of a production database crash, helping identify that a payment-related cron job repeatedly retried failed requests, producing simultaneous request bursts that overwhelmed the database.
                      </li>
                      <li>
                        Migrated legacy PHP functionality to JavaScript and TypeScript; developed and tested backend APIs using Deno Edge Functions and Postman.
                      </li>
                      <li>
                        Debugged and resolved Deno/TypeScript type-inference problems.
                      </li>
                      <li>
                        Investigated Drizzle ORM integration with Supabase Row-Level Security (RLS).
                      </li>
                      <li>
                        Led a team of four in evaluating Novu against a custom notification-system implementation.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ── SELECTED PROJECTS (2-Column Grid on XL) ── */}
              <section>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816] uppercase tracking-wider pb-2 mb-5 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
                  <Layers className="w-4 h-4 text-[#566449] no-print" />
                  <span>Selected Projects</span>
                </h2>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 print-grid">
                  {/* Project 1: Digital Commerce & Entitlement Platform */}
                  <div className="page-break-inside-avoid p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-2 xl:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                      <div className="min-w-0">
                        <h3 className="font-serif font-bold text-base text-[#1A1816]">
                          Digital Commerce &amp; Entitlement Platform
                        </h3>
                        <p className="font-mono text-xs text-[#566449] font-medium">
                          Next.js 15 · TypeScript · Supabase · Razorpay
                        </p>
                      </div>
                      <a
                        href="https://store.sowebuild.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#C4604A] hover:underline inline-flex items-center gap-1 shrink-0"
                      >
                        <span>store.sowebuild.in</span>
                        <ExternalLink className="w-3 h-3 no-print" />
                      </a>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-[#4A4541] leading-relaxed print-bullet-list">
                      <li>
                        Built a digital commerce platform with payment verification and asset-access control.
                      </li>
                      <li>
                        Implemented dual-verification checkout combining synchronous API verification with HMAC-SHA256 webhook verification.
                      </li>
                      <li>
                        Encrypted digital products at rest using AES-256-GCM authenticated encryption, utilizing SHA-256 key derivation and randomized IVs to prevent plaintext exposure.
                      </li>
                    </ul>
                  </div>

                  {/* Project 2: devpic */}
                  <div className="page-break-inside-avoid p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-2">
                    <div className="flex flex-col justify-between gap-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-serif font-bold text-base text-[#1A1816]">
                          devpic — Stateless Mathematical SVG API
                        </h3>
                        <a
                          href="https://github.com/MonsterFlick/devpic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-[#C4604A] hover:underline inline-flex items-center gap-1 shrink-0"
                        >
                          <span>GitHub</span>
                          <ExternalLink className="w-3 h-3 no-print" />
                        </a>
                      </div>
                      <p className="font-mono text-xs text-[#566449] font-medium">
                        TypeScript · Next.js Edge Runtime
                      </p>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-[#4A4541] leading-relaxed print-bullet-list">
                      <li>
                        Built an open-source, stateless REST API that generates deterministic SVG patterns, geometric meshes, and UI assets using mathematical algorithms.
                      </li>
                      <li>
                        Achieved sub-10 ms response times with no database or persistent storage dependencies.
                      </li>
                    </ul>
                  </div>

                  {/* Project 3: Agni */}
                  <div className="page-break-inside-avoid p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-2">
                    <div className="flex flex-col justify-between gap-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-serif font-bold text-base text-[#1A1816]">
                          Agni — Local AI Automation Agent
                        </h3>
                        <a
                          href="https://github.com/MonsterFlick/Agni"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-[#C4604A] hover:underline inline-flex items-center gap-1 shrink-0"
                        >
                          <span>GitHub</span>
                          <ExternalLink className="w-3 h-3 no-print" />
                        </a>
                      </div>
                      <p className="font-mono text-xs text-[#566449] font-medium">
                        Python · Ollama · PowerShell · Windows APIs
                      </p>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-[#4A4541] leading-relaxed print-bullet-list">
                      <li>
                        Developed an offline automation agent that translates natural-language instructions into structured Windows actions.
                      </li>
                      <li>
                        Implemented command blacklisting, protection against destructive operations, execution logging, script caching, and an automated repair loop.
                      </li>
                    </ul>
                  </div>

                  {/* Project 4: Fin Read */}
                  <div className="page-break-inside-avoid p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-2">
                    <div className="flex flex-col justify-between gap-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-serif font-bold text-base text-[#1A1816]">
                          Fin Read — Offline-First Finance Tracker
                        </h3>
                        <a
                          href="https://github.com/MonsterFlick/Fin-Read"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-[#C4604A] hover:underline inline-flex items-center gap-1 shrink-0"
                        >
                          <span>GitHub</span>
                          <ExternalLink className="w-3 h-3 no-print" />
                        </a>
                      </div>
                      <p className="font-mono text-xs text-[#566449] font-medium">
                        Kotlin · Android SDK · Room DB · Supabase
                      </p>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-[#4A4541] leading-relaxed print-bullet-list">
                      <li>
                        Built an Android finance application that extracts transaction information from SMS and payment notifications to automate expense categorization.
                      </li>
                      <li>
                        Implemented offline-first persistence with Room Database, Material 3 UI, and cloud synchronization with Supabase.
                      </li>
                    </ul>
                  </div>

                  {/* Project 5: GitFool */}
                  <div className="page-break-inside-avoid p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-2">
                    <div className="flex flex-col justify-between gap-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-serif font-bold text-base text-[#1A1816]">
                          GitFool — Edge Markdown Engine
                        </h3>
                        <a
                          href="https://blogs.omthakur.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-[#C4604A] hover:underline inline-flex items-center gap-1 shrink-0"
                        >
                          <span>blogs.omthakur.in</span>
                          <ExternalLink className="w-3 h-3 no-print" />
                        </a>
                      </div>
                      <p className="font-mono text-xs text-[#566449] font-medium">
                        Next.js Edge Runtime · TypeScript · MDX
                      </p>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-[#4A4541] leading-relaxed print-bullet-list">
                      <li>
                        Engineered an edge-rendered publication platform pulling markdown source files directly from GitHub repositories via webhooks with sub-30ms TTFB worldwide.
                      </li>
                      <li>
                        Built on-the-fly syntax highlighting and automated SEO tag compilation with zero database dependencies and a 100/100 Google Lighthouse score.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT SIDEBAR COLUMN (4 Cols): Technical Skills, Education, Honors, Volunteering */}
            <div className="lg:col-span-4 space-y-8 min-w-0">
              {/* ── TECHNICAL SKILLS MATRIX ── */}
              <section className="page-break-inside-avoid">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816] uppercase tracking-wider pb-2 mb-4 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
                  <Code2 className="w-4 h-4 text-[#566449] no-print" />
                  <span>Technical Skills</span>
                </h2>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
                    <span className="font-mono text-xs font-bold text-[#C4604A] uppercase tracking-wider block">
                      Languages &amp; Runtimes
                    </span>
                    <p className="text-[#4A4541] leading-relaxed">
                      TypeScript, JavaScript, Python, SQL, Bash, Node.js, Deno
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
                    <span className="font-mono text-xs font-bold text-[#566449] uppercase tracking-wider block">
                      Backend &amp; Distributed Systems
                    </span>
                    <p className="text-[#4A4541] leading-relaxed">
                      REST APIs, WebSockets, Microservices, Flexbase Message Queues, Webhooks, Asynchronous Processing, Background Services, Deno Edge Functions, Next.js Edge Runtime
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
                    <span className="font-mono text-xs font-bold text-[#1A1816] uppercase tracking-wider block">
                      Databases &amp; Data Systems
                    </span>
                    <p className="text-[#4A4541] leading-relaxed">
                      PostgreSQL, Supabase, MySQL, Redis, SQLite, Qdrant, Row-Level Security (RLS)
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
                    <span className="font-mono text-xs font-bold text-[#7A746D] uppercase tracking-wider block">
                      Infrastructure &amp; Tooling
                    </span>
                    <p className="text-[#4A4541] leading-relaxed">
                      Docker, Linux, Nginx, Cloudflare SSL, PM2, Git, GitHub, Postman, PowerShell
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1">
                    <span className="font-mono text-xs font-bold text-[#C4604A] uppercase tracking-wider block">
                      Additional Technologies
                    </span>
                    <p className="text-[#4A4541] leading-relaxed">
                      Drizzle ORM, RAG Pipelines, Semantic Retrieval, Vector Embeddings, Ollama, Prompt Orchestration
                    </p>
                  </div>
                </div>
              </section>

              {/* ── EDUCATION ── */}
              <section className="page-break-inside-avoid">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816] uppercase tracking-wider pb-2 mb-4 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
                  <GraduationCap className="w-4 h-4 text-[#C4604A] no-print" />
                  <span>Education</span>
                </h2>

                <div className="p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-2">
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#1A1816]">
                      Bachelor of Science in Information Technology (B.Sc. IT)
                    </h3>
                    <p className="font-mono text-xs text-[#566449] font-semibold">
                      Sonubhau Baswant College, University of Mumbai
                    </p>
                    <span className="font-mono text-xs text-[#C4604A] font-semibold block">
                      Aug 2021 – Apr 2024
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="font-mono text-xs font-bold text-[#1A1816] px-2.5 py-0.5 rounded bg-[#E2D5C6] border border-[#D4C3AF]">
                      CGPA: 8.55/10
                    </span>
                    <span className="font-mono text-xs font-bold text-[#566449] px-2.5 py-0.5 rounded bg-[#566449]/15 border border-[#566449]/30">
                      🏆 First Rank
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A4541] pt-1 leading-relaxed">
                    Graduated with First Rank in the college. Led the final-year project team as project head.
                  </p>
                </div>
              </section>

              {/* ── CERTIFICATION & ACADEMIC HONORS ── */}
              <section className="page-break-inside-avoid">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816] uppercase tracking-wider pb-2 mb-4 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
                  <Award className="w-4 h-4 text-[#C4604A] no-print" />
                  <span>Certifications &amp; Honors</span>
                </h2>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#C4604A] font-serif font-bold text-sm">
                      <Award className="w-4 h-4 shrink-0 no-print" />
                      <span>First Rank – B.Sc. IT (CGPA: 8.55/10)</span>
                    </div>
                    <p className="font-mono text-xs text-[#7A746D]">
                      Sonubhau Baswant College, University of Mumbai · Apr 2024
                    </p>
                    <p className="text-[#4A4541] text-xs sm:text-sm leading-relaxed">
                      Graduated with First Rank in the college. Led the final-year project team as project head.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-[#566449] font-serif font-bold text-sm">
                        <BookOpen className="w-4 h-4 shrink-0 no-print" />
                        <span>Data Science Training</span>
                      </div>
                      <span className="font-mono text-xs text-[#7A746D]">Oct 2023</span>
                    </div>
                    <p className="font-mono text-xs text-[#7A746D]">
                      Internshala · Certificate ID 263gl7b3rur
                    </p>
                    <a
                      href="https://trainings.internshala.com/verify-certificate/?certificate_number=263gl7b3rur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#C4604A] hover:underline inline-flex items-center gap-1 pt-0.5"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3 no-print" />
                    </a>
                  </div>
                </div>
              </section>

              {/* ── VOLUNTEERING ── */}
              <section className="page-break-inside-avoid">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816] uppercase tracking-wider pb-2 mb-4 border-b border-[#EDE4D9] flex items-center gap-2 print-section-heading">
                  <BookOpen className="w-4 h-4 text-[#566449] no-print" />
                  <span>Volunteering</span>
                </h2>

                <div className="p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5">
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#1A1816]">
                      Assistant Professor (Volunteer)
                    </h3>
                    <p className="font-mono text-xs text-[#566449] font-semibold">
                      Bhimrao Pradhan College, University of Mumbai
                    </p>
                    <span className="font-mono text-xs text-[#C4604A] font-semibold block">
                      Jun – Aug 2024
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4541] pt-1 leading-relaxed">
                    Taught core subjects to B.Sc. IT students; mentored students and created structured educational content.
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* ── FOOTER COLOPHON (Web View Only) ── */}
          <footer className="no-print mt-10 pt-6 border-t border-[#EDE4D9] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#7A746D] gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/#projects" className="hover:text-[#C4604A] transition-colors">
                ← Project Blueprints
              </Link>
              <span>•</span>
              <Link href="/#faq" className="hover:text-[#C4604A] transition-colors">
                Architecture FAQ
              </Link>
              <span>•</span>
              <a href="/llms-full.txt" className="hover:text-[#C4604A] transition-colors">
                llms-full.txt
              </a>
            </div>
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
