"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Shield,
  Layers,
  Database,
  Cpu,
  Terminal,
  Zap,
} from "lucide-react";
import { PROJECTS, MONOGRAPH_PLATES } from "@/data/portfolio-data";

interface BookPageProps {
  plateIndex: number;
  side: "left" | "right";
  onInspectProject?: (projectId: string) => void;
}

export function BookPage({ plateIndex, side, onInspectProject }: BookPageProps) {
  const boundedIndex = Math.max(0, Math.min(plateIndex, MONOGRAPH_PLATES.length - 1));

  switch (boundedIndex) {
    case 0:
      return side === "left" ? <FrontispieceLeft /> : <FrontispieceRight />;
    case 1:
      return side === "left" ? <ManifestoLeft /> : <ManifestoRight />;
    case 2:
      return side === "left" ? (
        <ProjectBlueprintLeft project={PROJECTS[0]} plateNumber="Chapter 03" />
      ) : (
        <ProjectBlueprintRight
          project={PROJECTS[0]}
          topology="Client Checkout ──> Sync API ──> HMAC Webhook ──> AES-256-GCM ──> Instant Asset Entitlement"
          tradeoff="Dual-verification checkout eliminates client-side bypass and webhook drop race conditions, while AES-256-GCM guarantees digital assets remain encrypted at rest with zero plaintext exposure."
          onInspect={() => onInspectProject?.(PROJECTS[0].id)}
        />
      );
    case 3:
      return side === "left" ? (
        <ProjectBlueprintLeft project={PROJECTS[1]} plateNumber="Chapter 04" />
      ) : (
        <ProjectBlueprintRight
          project={PROJECTS[1]}
          topology="HTTP Request ──> Next.js Edge Isolate ──> Algorithmic Matrix Transform ──> Stateless SVG Output"
          tradeoff="Pure mathematical SVG generation at the Edge eliminates headless browser (Puppeteer) memory bloat, database cold-starts, and expensive cloud asset storage buckets."
          onInspect={() => onInspectProject?.(PROJECTS[1].id)}
        />
      );
    case 4:
      return side === "left" ? (
        <ProjectBlueprintLeft project={PROJECTS[2]} plateNumber="Chapter 05" />
      ) : (
        <ProjectBlueprintRight
          project={PROJECTS[2]}
          topology="Natural Language ──> Local Ollama LLM ──> Structured Action JSON ──> Sandboxed PowerShell Execution"
          tradeoff="Completely offline local model inference eliminates cloud API token costs, operates with zero internet connectivity, and guarantees zero leakage of private filesystem data."
          onInspect={() => onInspectProject?.(PROJECTS[2].id)}
        />
      );
    case 5:
      return side === "left" ? (
        <ProjectBlueprintLeft project={PROJECTS[3]} plateNumber="Chapter 06" />
      ) : (
        <ProjectBlueprintRight
          project={PROJECTS[3]}
          topology="Expense Mutation ──> Room SQLite DB (Zero Latency) ──> Encrypted Queue ──> Supabase Sync"
          tradeoff="Offline-first architecture guarantees zero field data loss during intermittent mobile connectivity, decoupling user interaction from network round-trips."
          onInspect={() => onInspectProject?.(PROJECTS[3].id)}
        />
      );
    case 6:
      return side === "left" ? (
        <ProjectBlueprintLeft project={PROJECTS[4]} plateNumber="Chapter 07" />
      ) : (
        <ProjectBlueprintRight
          project={PROJECTS[4]}
          topology="Markdown Route ──> GitHub REST API ──> Edge Isolate Sanitization ──> Instant Cached Documentation"
          tradeoff="Using GitHub repositories directly as the headless CMS eliminates custom database infrastructure and keeps documentation strictly synchronized with git commits."
          onInspect={() => onInspectProject?.(PROJECTS[4].id)}
        />
      );
    case 7:
      return side === "left" ? <TaxonomyLeft /> : <TaxonomyRight />;
    case 8:
      return side === "left" ? <ChronologyLeft /> : <ChronologyRight />;
    case 9:
    default:
      return side === "left" ? <ColophonLeft /> : <ColophonRight />;
  }
}

export function BookSpread({
  plateIndex,
  onInspectProject,
}: {
  plateIndex: number;
  onInspectProject?: (projectId: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 h-full w-full">
      <BookPage plateIndex={plateIndex} side="left" onInspectProject={onInspectProject} />
      <BookPage plateIndex={plateIndex} side="right" onInspectProject={onInspectProject} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 01: Overview & Table of Contents
───────────────────────────────────────────────────────────── */
function FrontispieceLeft() {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 border-r border-[#EDE4D9] flex flex-col justify-between relative bg-[#FAF6F1] text-[#2C2825] overflow-hidden select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-mono uppercase tracking-widest text-[#7A746D] pb-2.5 border-b border-[#EDE4D9]">
        <span className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#566449] animate-pulse" />
          <span className="font-bold text-[#1A1816]">Systems Architecture</span>
        </span>
        <span className="font-semibold text-[#7A746D]">Mumbai, India</span>
      </div>

      {/* Main Content Flow */}
      <div className="space-y-3.5 sm:space-y-4 my-auto">
        <div>
          <span className="text-xs sm:text-sm uppercase font-mono tracking-wider text-[#C4604A] font-bold block mb-1">
            Backend Engineer · Distributed Systems · Scalable APIs
          </span>
          <p className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1A1816] tracking-tight leading-tight">
            Om Thakur
          </p>
          <p className="font-mono text-xs sm:text-sm text-[#5E5854] mt-1 font-medium">
            omthakur2366@gmail.com · omthakur.in · github.com/MonsterFlick
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#2C2825] leading-relaxed font-normal">
          Backend engineer focused on distributed, database-backed architectures and production reliability. Experience spans low-latency WebSocket streaming pipelines, offline-first background services, message-queue-driven workflows, role-based access control (RBAC), and automated webhook verification systems.
        </p>

        {/* 3 Headline Resume Metrics */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-3 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] shadow-2xs">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#C4604A] block leading-tight">
              15m → 4s
            </span>
            <span className="text-xs sm:text-sm text-[#3A3532] font-medium leading-snug block mt-1">
              Sync speedup via queue (~99.5% reduction)
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] shadow-2xs">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#1A1816] block leading-tight">
              ~700 ms
            </span>
            <span className="text-xs sm:text-sm text-[#3A3532] font-medium leading-snug block mt-1">
              WebSocket GPU pipeline turnaround
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] shadow-2xs">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#566449] block leading-tight">
              &lt; 10 ms
            </span>
            <span className="text-xs sm:text-sm text-[#3A3532] font-medium leading-snug block mt-1">
              Stateless SVG Edge API response time
            </span>
          </div>
        </div>

        {/* Core Technical Highlights Box */}
        <div className="p-3 sm:p-3.5 rounded-lg bg-[#F3ECE4]/90 border border-[#EDE4D9] space-y-2">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-[#1A1816] block">
            Core Production Technologies:
          </span>
          <div className="flex flex-wrap gap-2 font-mono text-xs sm:text-sm text-[#1A1816]">
            <span className="px-2.5 py-1 rounded bg-[#FAF6F1] border border-[#D4C3AF] font-bold">TypeScript</span>
            <span className="px-2.5 py-1 rounded bg-[#FAF6F1] border border-[#D4C3AF] font-bold">Python</span>
            <span className="px-2.5 py-1 rounded bg-[#FAF6F1] border border-[#D4C3AF] font-bold">PostgreSQL</span>
            <span className="px-2.5 py-1 rounded bg-[#FAF6F1] border border-[#D4C3AF] font-bold">Flexbase Queues</span>
            <span className="px-2.5 py-1 rounded bg-[#FAF6F1] border border-[#D4C3AF] font-bold">WebSockets</span>
            <span className="px-2.5 py-1 rounded bg-[#FAF6F1] border border-[#D4C3AF] font-bold">Supabase RLS</span>
            <span className="px-2.5 py-1 rounded bg-[#FAF6F1] border border-[#D4C3AF] font-bold">Qdrant Vector DB</span>
            <span className="px-2.5 py-1 rounded bg-[#FAF6F1] border border-[#D4C3AF] font-bold">Docker &amp; Linux</span>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <div className="pt-2.5 border-t border-[#EDE4D9] flex items-center justify-between text-xs sm:text-sm text-[#7A746D] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#566449]" />
          <span className="font-medium text-[#1A1816]">Available for Production Roles · 2026</span>
        </div>
        <span className="text-[#C4604A] font-bold">Chapter 01 · Page 01</span>
      </div>
    </div>
  );
}

function FrontispieceRight() {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 flex flex-col justify-between relative bg-[#FDFCFA] text-[#2C2825] overflow-hidden select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-mono uppercase tracking-widest text-[#7A746D] pb-2.5 border-b border-[#EDE4D9]">
        <span className="font-bold text-[#1A1816]">Table of Contents</span>
        <span className="text-[#C4604A] font-bold">10 Chapters</span>
      </div>

      {/* Dense, Clean Chapter Index List */}
      <div className="space-y-2 my-auto">
        <div className="space-y-1.5">
          {MONOGRAPH_PLATES.slice(1).map((plate) => (
            <div
              key={plate.id}
              className="px-3.5 py-1.5 rounded-lg bg-[#FAF6F1]/90 hover:bg-[#F3ECE4] border border-[#EDE4D9] transition-colors flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-mono text-xs sm:text-sm text-[#C4604A] font-bold shrink-0">
                  {plate.plateNumber}
                </span>
                <span className="font-serif font-bold text-sm sm:text-base text-[#1A1816] truncate">
                  {plate.title}
                </span>
              </div>
              <span className="text-xs uppercase font-mono tracking-wider px-2.5 py-0.5 rounded bg-[#EDE4D9] text-[#1A1816] shrink-0 font-semibold">
                {plate.category}
              </span>
            </div>
          ))}
        </div>

        {/* Reading Guide Box */}
        <div className="p-3 rounded-lg bg-[#F3ECE4]/90 border border-[#EDE4D9] text-xs sm:text-sm text-[#3A3532] space-y-1">
          <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#1A1816] block">
            Navigation Directives:
          </span>
          <p className="leading-relaxed">
            Flip through with cursor drags or keyboard arrow keys (← / →). Chapters 03–07 present production systems &amp; data flow blueprints, Chapter 08 breaks down the full architectural stack, Chapter 09 records career appointments, and Chapter 10 provides academic distinctions and verified contacts.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2.5 border-t border-[#EDE4D9] flex items-center justify-between text-xs sm:text-sm text-[#5E5854] font-mono">
        <span className="text-[#C4604A] font-bold">
          Flip to proceed to Engineering Principles →
        </span>
        <span className="text-[#7A746D] font-medium">Page 02</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 02: Core Engineering Principles
───────────────────────────────────────────────────────────── */
function ManifestoLeft() {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 border-r border-[#EDE4D9] flex flex-col justify-between bg-[#FAF6F1] text-[#2C2825] overflow-hidden select-none">
      <div className="flex items-center justify-between text-xs sm:text-sm font-mono uppercase tracking-widest text-[#7A746D] pb-2.5 border-b border-[#EDE4D9]">
        <span className="font-bold text-[#1A1816]">Core Architectural Principles</span>
        <span className="text-[#C4604A] font-bold">Chapter 02 · Part I</span>
      </div>

      <div className="space-y-3.5 sm:space-y-4 my-auto">
        {/* Principle I */}
        <div className="space-y-1.5 p-3 sm:p-3.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9]">
          <span className="text-xs uppercase font-mono tracking-wider text-[#566449] font-bold block">
            Principle I · Concurrency &amp; Event Loops
          </span>
          <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816]">
            Asynchronous Queues over Polling Overhead
          </h2>
          <p className="text-sm sm:text-base text-[#2C2825] leading-relaxed">
            Cron-based database polling at scheduled intervals produces artificial latency and dangerous request bursts that overwhelm connection pools. Replacing cron polling with asynchronous message queues (such as Flexbase) processes mutations continuously in near real-time, reducing sync latency from <strong>15 minutes to 4 seconds</strong> (~99.5% reduction) while flattening database load spikes.
          </p>
        </div>

        {/* Principle II */}
        <div className="space-y-1.5 p-3 sm:p-3.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9]">
          <span className="text-xs uppercase font-mono tracking-wider text-[#C4604A] font-bold block">
            Principle II · Fault Boundaries &amp; Data Preservation
          </span>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816]">
            Offline-First Persistence with Zero Field Loss
          </h3>
          <p className="text-sm sm:text-base text-[#2C2825] leading-relaxed">
            Mobile and edge endpoints operate in unpredictable network conditions. Services must never assume persistent connectivity. By buffering operations in encrypted local SQLite queues and syncing upstream once network stability is verified, systems prevent critical field data loss under network drops.
          </p>
        </div>

        {/* Visual Architectural Pipeline Diagram */}
        <div className="p-3 rounded-lg bg-[#F3ECE4]/90 border border-[#EDE4D9] space-y-1.5 font-mono">
          <span className="text-xs uppercase font-bold text-[#1A1816] tracking-wider block">
            Asynchronous Event Pipeline Data Flow:
          </span>
          <div className="p-2.5 rounded bg-[#FAF6F1] border border-[#D4C3AF] text-xs sm:text-sm leading-relaxed text-[#1A1816]">
            <p className="font-bold text-[#C4604A]">[Client Mutation] → [API Gateway + Rate Limiter]</p>
            <p className="text-[#5E5854] pl-3 sm:pl-4 font-medium">↳ Enqueue Task into Flexbase Message Queue (Zero Lock Delay)</p>
            <p className="text-[#566449] pl-6 sm:pl-8 font-semibold">↳ Asynchronous Worker Pool Consumer (Idempotent Execution)</p>
            <p className="text-[#1A1816] pl-9 sm:pl-12 font-bold">↳ PostgreSQL (ACID Write) + Redis Cache Invalidation (4s Total)</p>
          </div>
        </div>
      </div>

      <div className="pt-2.5 border-t border-[#EDE4D9] text-xs sm:text-sm text-[#7A746D] flex justify-between font-mono">
        <span>Architectural Manifesto</span>
        <span className="font-bold">Page 03</span>
      </div>
    </div>
  );
}

function ManifestoRight() {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 flex flex-col justify-between bg-[#FDFCFA] text-[#2C2825] overflow-hidden select-none">
      <div className="flex items-center justify-between text-xs sm:text-sm font-mono uppercase tracking-widest text-[#7A746D] pb-2.5 border-b border-[#EDE4D9]">
        <span className="font-bold text-[#1A1816]">Reliability &amp; Outage Prevention</span>
        <span className="text-[#C4604A] font-bold">Chapter 02 · Part II</span>
      </div>

      <div className="space-y-3.5 sm:space-y-4 my-auto">
        {/* Principle III */}
        <div className="space-y-1.5 p-3 sm:p-3.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9]">
          <span className="text-xs uppercase font-mono tracking-wider text-[#C4604A] font-bold block">
            Principle III · Cryptographic Verification &amp; Idempotency
          </span>
          <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816]">
            Defensive Webhooks &amp; Strict State Verification
          </h2>
          <p className="text-sm sm:text-base text-[#2C2825] leading-relaxed">
            Never trust unverified payloads. Every payment confirmation and external webhook must undergo cryptographic HMAC-SHA256 signature verification combined with server-side API validation, backed by unique idempotency keys to guarantee duplicate delivery prevention.
          </p>
        </div>

        {/* RCA Case Study Box */}
        <div className="p-3 sm:p-3.5 rounded-lg bg-[#FAF6F1] border-l-4 border-l-[#C4604A] border border-[#EDE4D9] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#C4604A]">
              Production RCA Case Study:
            </span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#C4604A]/10 text-[#C4604A]">
              Resolved
            </span>
          </div>
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1816]">
            Database Outage Prevention via Cron Elimination
          </h3>
          <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
            <strong>Incident Finding:</strong> Root-cause analysis of a production database crash where a payment retry cron repeatedly executed failed requests every 60 seconds, creating cascading simultaneous request bursts that saturated database connection pools.
          </p>
          <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
            <strong>Resolution:</strong> Replaced the polling cron with a persistent queue featuring exponential backoff with jitter, dead-letter queuing (DLQ), and PgBouncer connection pooling to guarantee system survival under third-party downtime.
          </p>
        </div>

        {/* Architectural Tenet Quote */}
        <div className="p-3 rounded-lg bg-[#F3ECE4]/80 border border-[#EDE4D9]">
          <p className="font-serif italic text-xs sm:text-sm text-[#1A1816] leading-relaxed">
            &ldquo;Software architecture is not about avoiding failures; it is about building boundaries so that when failure occurs, data is preserved, recovery is deterministic, and latency remains bound.&rdquo;
          </p>
        </div>
      </div>

      <div className="pt-2.5 border-t border-[#EDE4D9] flex items-center justify-between text-xs sm:text-sm text-[#5E5854] font-mono">
        <span className="text-[#C4604A] font-bold">Flip to inspect Project Blueprints →</span>
        <span className="font-medium">Page 04</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapters 03–07: Project Blueprints (Left & Right Spreads)
   Right page has NO raw code block! Pure architectural blueprint.
───────────────────────────────────────────────────────────── */
function ProjectBlueprintLeft({
  project,
  plateNumber,
}: {
  project: (typeof PROJECTS)[0];
  plateNumber: string;
}) {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 border-r border-[#EDE4D9] flex flex-col justify-between bg-[#FAF6F1] text-[#2C2825] overflow-hidden select-none">
      <div className="flex items-center justify-between text-xs sm:text-sm font-mono uppercase tracking-widest text-[#7A746D] pb-2.5 border-b border-[#EDE4D9]">
        <span className="text-[#C4604A] font-bold">{plateNumber}</span>
        <span className="font-bold text-[#1A1816]">{project.category}</span>
      </div>

      <div className="space-y-3.5 sm:space-y-4 my-auto">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#7A746D] font-mono font-bold block mb-1">
            {project.edition}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight leading-tight">
            {project.name}
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#1A1816] leading-relaxed font-normal">
          {project.purpose}
        </p>

        {/* Problem Statement Box */}
        <div className="p-3 sm:p-3.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-1.5">
          <span className="text-xs uppercase tracking-wider font-mono font-bold text-[#7A3B3B] block">
            Production Challenge / Problem Statement:
          </span>
          <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed font-normal">
            {project.problemStatement}
          </p>
        </div>

        {/* Key Architectural Solutions */}
        <div className="p-3 sm:p-3.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-2">
          <span className="text-xs uppercase tracking-wider font-mono font-bold text-[#566449] block">
            Architectural Implementation &amp; Safeguards:
          </span>
          <ul className="space-y-1.5 text-xs sm:text-sm text-[#2C2825]">
            {project.solutionDetails.slice(0, 3).map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C4604A] mt-1.5 shrink-0" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2.5 pt-1">
          {project.stats.map((s) => (
            <div key={s.label} className="p-2.5 sm:p-3 rounded-lg bg-[#F3ECE4] border border-[#EDE4D9] text-center">
              <span className="text-xs uppercase tracking-wider text-[#7A746D] font-mono font-medium block">
                {s.label}
              </span>
              <span className="font-serif text-lg sm:text-xl font-bold text-[#1A1816] mt-1 block leading-tight">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2.5 border-t border-[#EDE4D9] text-xs sm:text-sm text-[#7A746D] flex justify-between font-mono">
        <span className="font-medium">System Specification</span>
        <span className="font-bold">Plate Overview</span>
      </div>
    </div>
  );
}

function ProjectBlueprintRight({
  project,
  topology,
  tradeoff,
  onInspect,
}: {
  project: (typeof PROJECTS)[0];
  topology: string;
  tradeoff: string;
  onInspect?: () => void;
}) {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 flex flex-col justify-between bg-[#FDFCFA] text-[#2C2825] overflow-hidden select-none">
      <div className="flex items-center justify-between text-xs sm:text-sm font-mono uppercase tracking-widest text-[#7A746D] pb-2.5 border-b border-[#EDE4D9]">
        <span className="font-bold text-[#1A1816]">Architecture Blueprint &amp; Topology</span>
        <span className="text-[#C4604A] font-bold">Systems Design</span>
      </div>

      <div className="space-y-3.5 sm:space-y-4 my-auto">
        {/* Tech Stack Tags */}
        <div>
          <span className="text-xs uppercase tracking-wider font-mono text-[#7A746D] block mb-2 font-bold">
            Technology Stack &amp; Protocols:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs sm:text-sm font-mono font-bold bg-[#F3ECE4] text-[#1A1816] border border-[#D4C3AF]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Feature Highlight Callout */}
        <div className="p-3 sm:p-3.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5">
          <span className="text-xs uppercase tracking-wider font-bold text-[#C4604A] block font-mono">
            Core Architectural Breakthrough:
          </span>
          <p className="text-sm sm:text-base text-[#1A1816] font-semibold leading-relaxed">
            {project.feature}
          </p>
        </div>

        {/* System Topology Diagram Box */}
        <div className="p-3 sm:p-3.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-2 font-mono">
          <span className="text-xs uppercase font-bold text-[#566449] tracking-wider block">
            Data Flow &amp; System Topology:
          </span>
          <div className="p-2.5 rounded bg-[#FDFCFA] border border-[#D4C3AF] text-xs sm:text-sm text-[#1A1816] leading-relaxed font-medium">
            <p className="text-[#C4604A] font-bold">{topology}</p>
          </div>
        </div>

        {/* Engineering Tradeoffs & Decisions Card */}
        <div className="p-3 sm:p-3.5 rounded-lg bg-[#F3ECE4]/90 border border-[#EDE4D9] space-y-1.5">
          <span className="text-xs uppercase font-bold text-[#1A1816] tracking-wider font-mono block">
            Engineering Tradeoffs &amp; Decisions:
          </span>
          <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
            {tradeoff}
          </p>
        </div>
      </div>

      {/* Interactive Actions Footer */}
      <div className="pt-2.5 border-t border-[#EDE4D9] flex items-center justify-between gap-3">
        <button
          onClick={onInspect}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#C4604A] text-white text-xs sm:text-sm font-bold hover:bg-[#A8493A] transition-colors shadow-2xs"
        >
          <span>Inspect Architecture Dossier</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-mono text-[#5E5854] hover:text-[#1A1816] inline-flex items-center gap-1.5 font-bold"
        >
          <span>Live Deployment</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 08: Technical Architecture Stack
───────────────────────────────────────────────────────────── */
function TaxonomyLeft() {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 border-r border-[#EDE4D9] flex flex-col justify-between bg-[#FAF6F1] text-[#2C2825] overflow-hidden select-none">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#7A746D] pb-2 border-b border-[#EDE4D9]">
        <span className="font-bold text-[#1A1816]">Core Engineering Taxonomy</span>
        <span className="text-[#C4604A] font-bold">Chapter 08 · Runtimes</span>
      </div>

      <div className="space-y-2.5 my-auto">
        <div>
          <span className="text-[11px] uppercase font-mono tracking-wider text-[#C4604A] font-bold block mb-0.5">
            Runtimes, APIs &amp; Concurrency
          </span>
          <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816]">
            Distributed Execution Engines
          </h2>
        </div>

        {/* 4 Rich Stack Cards */}
        <div className="space-y-2">
          <div className="p-2 sm:p-2.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm text-[#1A1816]">TypeScript, Node.js &amp; Deno</span>
              <span className="font-mono text-xs font-mono font-bold text-[#C4604A]">Strict Type Safety</span>
            </div>
            <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
              Deno Edge Functions, Next.js Edge Runtime, asynchronous I/O, REST APIs, PM2 daemon process orchestration, and zero-downtime cluster reloads.
            </p>
          </div>

          <div className="p-2 sm:p-2.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm text-[#1A1816]">Python, WebSockets &amp; CUDA</span>
              <span className="font-mono text-xs font-mono font-bold text-[#566449]">~700 ms Turnaround</span>
            </div>
            <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
              Pipecat streaming integration, Exotel bidirectional audio WebSockets, local LLM orchestration with Ollama, and CUDA GPU inference pipelines.
            </p>
          </div>

          <div className="p-2 sm:p-2.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm text-[#1A1816]">Flexbase Message Queues</span>
              <span className="font-mono text-xs font-mono font-bold text-[#7A3B3B]">15m → 4s (~99.5%)</span>
            </div>
            <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
              Asynchronous worker pipelines eliminating cron polling overhead, database lock contention, and connection-pool request burst crashes.
            </p>
          </div>

          <div className="p-2 sm:p-2.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm text-[#1A1816]">Edge APIs &amp; Security Protocols</span>
              <span className="font-mono text-xs font-mono font-bold text-[#7A746D]">&lt; 10 ms Stateless</span>
            </div>
            <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
              Stateless mathematical REST APIs on Edge runtimes, HMAC-SHA256 authenticated webhooks, AES-256-GCM encryption, and Matrix protocols.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#EDE4D9] text-xs text-[#7A746D] flex justify-between font-mono">
        <span>Runtimes &amp; Concurrency</span>
        <span className="font-bold">Page 15</span>
      </div>
    </div>
  );
}

function TaxonomyRight() {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 flex flex-col justify-between bg-[#FDFCFA] text-[#2C2825] overflow-hidden select-none">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#7A746D] pb-2 border-b border-[#EDE4D9]">
        <span className="font-bold text-[#1A1816]">Storage, Vector Stores &amp; Infra</span>
        <span className="text-[#C4604A] font-bold">Chapter 08 · Infrastructure</span>
      </div>

      <div className="space-y-2.5 my-auto">
        <div>
          <span className="text-[11px] uppercase font-mono tracking-wider text-[#C4604A] font-bold block mb-0.5">
            Databases &amp; AI Retrieval
          </span>
          <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816]">
            Persistent, Cache &amp; Vector Stores
          </h2>
        </div>

        {/* 4 Rich Storage Cards */}
        <div className="space-y-2">
          <div className="p-2 sm:p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm text-[#1A1816]">PostgreSQL &amp; Supabase</span>
              <span className="font-mono text-xs font-mono font-bold text-[#C4604A]">Drizzle &amp; RLS</span>
            </div>
            <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
              Production schema design, Row-Level Security (RLS) policies, multi-tenant isolation, index tuning, and connection pooling.
            </p>
          </div>

          <div className="p-2 sm:p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm text-[#1A1816]">Qdrant Vector DB &amp; RAG</span>
              <span className="font-mono text-xs font-mono font-bold text-[#566449]">Semantic Search</span>
            </div>
            <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
              Semantic retrieval pipelines utilizing nomic-embed-text embeddings, document ingestion chunking, and citation-backed legal responses.
            </p>
          </div>

          <div className="p-2 sm:p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm text-[#1A1816]">Redis, MySQL &amp; SQLite</span>
              <span className="font-mono text-xs font-mono font-bold text-[#7A3B3B]">Encrypted Queues</span>
            </div>
            <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
              In-memory cache layers, Room Database synchronization, and Android encrypted SQLite queues preventing field packet loss.
            </p>
          </div>

          <div className="p-2 sm:p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm text-[#1A1816]">Linux &amp; Self-Hosted Infra</span>
              <span className="font-mono text-xs font-mono font-bold text-[#7A746D]">Production Ops</span>
            </div>
            <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
              Linux daemons, Docker containers, Mailcow, Dograh, Nginx reverse proxy, Cloudflare SSL, PM2 process clusters, and ProGuard.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#EDE4D9] text-xs text-[#7A746D] flex justify-between font-mono">
        <span>Databases &amp; Cloud</span>
        <span className="font-bold">Page 16</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 09: Work Experience & History
───────────────────────────────────────────────────────────── */
function ChronologyLeft() {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 border-r border-[#EDE4D9] flex flex-col justify-between bg-[#FAF6F1] text-[#2C2825] overflow-hidden select-none">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#7A746D] pb-2 border-b border-[#EDE4D9]">
        <span className="text-[#C4604A] font-bold">Chapter 09</span>
        <span className="font-bold text-[#1A1816]">Recent Production Roles</span>
      </div>

      <div className="space-y-2.5 sm:space-y-3 my-auto">
        {/* Role 1: Krishora */}
        <div className="space-y-1.5 p-2.5 sm:p-3 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9]">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#C4604A]/15 text-[#C4604A] uppercase tracking-wider">
              Founding Role
            </span>
            <span className="font-mono text-xs text-[#C4604A] font-bold">May 2026 – Present</span>
          </div>
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1816]">
              Krishora Technologies
            </h3>
            <p className="font-mono text-xs text-[#566449] font-bold">Founding Software Engineer · Mumbai, India</p>
          </div>
          <ul className="space-y-1 text-xs sm:text-sm text-[#2C2825] pt-0.5">
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4604A] mt-1.5 shrink-0" />
              <span>Engineered low-latency Python pipeline (Pipecat, Exotel WebSockets, CUDA GPUs) with ~700 ms turnaround.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4604A] mt-1.5 shrink-0" />
              <span>Built Node.js/PM2 service router for Sevak AI using Qdrant vector retrieval.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4604A] mt-1.5 shrink-0" />
              <span>Deployed Dograh, Mailcow, Nginx, Cloudflare SSL, and ProGuard Expo apps.</span>
            </li>
          </ul>
        </div>

        {/* Role 2: CIARL */}
        <div className="space-y-1.5 p-2.5 sm:p-3 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9]">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EDE4D9] text-[#1A1816] uppercase tracking-wider">
              Defense &amp; Intelligence Lab
            </span>
            <span className="font-mono text-xs text-[#5E5854] font-semibold">Aug 2025 – May 2026</span>
          </div>
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1816]">
              Cyber Intelligence and Research Lab (CIARL)
            </h3>
            <p className="font-mono text-xs text-[#566449] font-bold">Software Developer · Thane, India</p>
          </div>
          <ul className="space-y-1 text-xs sm:text-sm text-[#2C2825] pt-0.5">
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4604A] mt-1.5 shrink-0" />
              <span>Developed Kotlin/Java Android background services with encrypted SQLite queues preventing field loss.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4604A] mt-1.5 shrink-0" />
              <span>Built React/PostgreSQL apps with authentication, RBAC, and legal-domain RAG.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-2 border-t border-[#EDE4D9] text-xs text-[#7A746D] flex justify-between font-mono">
        <span>Production Experience</span>
        <span className="font-bold">Page 17</span>
      </div>
    </div>
  );
}

function ChronologyRight() {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 flex flex-col justify-between bg-[#FDFCFA] text-[#2C2825] overflow-hidden select-none">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#7A746D] pb-2 border-b border-[#EDE4D9]">
        <span className="font-bold text-[#1A1816]">Internship &amp; Mentorship</span>
        <span className="text-[#C4604A] font-bold">Chapter 09 · Part II</span>
      </div>

      <div className="space-y-2.5 sm:space-y-3 my-auto">
        {/* Role 3: Sumeru */}
        <div className="space-y-1.5 p-2.5 sm:p-3 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9]">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#566449]/15 text-[#566449] uppercase tracking-wider">
              Performance Milestone
            </span>
            <span className="font-mono text-xs text-[#566449] font-bold">Aug 2024 – Feb 2025</span>
          </div>
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1816]">
              Sumeru Technology Solutions Pvt. Ltd.
            </h3>
            <p className="font-mono text-xs text-[#566449] font-bold">SDE Intern · Bengaluru, India</p>
          </div>
          <ul className="space-y-1 text-xs sm:text-sm text-[#2C2825] pt-0.5">
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4604A] mt-1.5 shrink-0" />
              <span>Replaced cron polling with Flexbase queues, reducing sync from 15m to 4s (~99.5%).</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4604A] mt-1.5 shrink-0" />
              <span>Root cause analysis of production DB crash caused by payment cron retry bursts.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4604A] mt-1.5 shrink-0" />
              <span>Migrated PHP to TypeScript and Deno Edge Functions; evaluated Novu notification system.</span>
            </li>
          </ul>
        </div>

        {/* Role 4: Bhimrao Pradhan College */}
        <div className="space-y-1.5 p-2.5 sm:p-3 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9]">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#E2D5C6] text-[#1A1816] uppercase tracking-wider">
              Academic Faculty Service
            </span>
            <span className="font-mono text-xs text-[#7A746D] font-semibold">Jun – Aug 2024</span>
          </div>
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1816]">
              Bhimrao Pradhan College, University of Mumbai
            </h3>
            <p className="font-mono text-xs text-[#566449] font-bold">Assistant Professor (Volunteer) · Shahapur, India</p>
          </div>
          <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed pt-0.5 font-normal">
            Taught core subjects to B.Sc. IT undergraduate students, mentored final-year project teams, and created structured curriculum to build industry readiness in database systems and backend architecture.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-[#EDE4D9] text-xs text-[#7A746D] flex justify-between font-mono">
        <span>Historical Record</span>
        <span className="font-bold">Page 18</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 10: Academic Honors & Contact
───────────────────────────────────────────────────────────── */
function ColophonLeft() {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 border-r border-[#EDE4D9] flex flex-col justify-between bg-[#FAF6F1] text-[#2C2825] overflow-hidden select-none">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#7A746D] pb-2 border-b border-[#EDE4D9]">
        <span className="text-[#C4604A] font-bold">Chapter 10</span>
        <span className="font-bold text-[#1A1816]">Education &amp; Credentials</span>
      </div>

      <div className="space-y-2.5 sm:space-y-3 my-auto">
        {/* Degree Card */}
        <div className="p-2.5 sm:p-3 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-1">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#566449]/15 text-[#566449]">
              🏆 First Rank in College
            </span>
            <span className="font-mono text-xs text-[#C4604A] font-bold">CGPA: 8.55 / 10.0</span>
          </div>
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1816]">
            Bachelor of Science in Information Technology (B.Sc. IT)
          </h3>
          <p className="font-mono text-xs text-[#566449] font-bold">Sonubhau Baswant College, University of Mumbai · 2021 – 2024</p>
          <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
            Graduated with First Rank in the college across the entire cohort. Led the final-year project team as project head. Built core foundations in relational algebra, operating systems, and distributed system design.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="p-2.5 sm:p-3 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#C4604A]" />
              <span className="font-serif font-bold text-sm sm:text-base text-[#1A1816]">Data Science Training</span>
            </div>
            <span className="font-mono text-[10px] font-bold text-[#566449]">VERIFIED</span>
          </div>
          <p className="font-mono text-xs text-[#7A746D] font-bold">Internshala Trainings · Oct 2023 · Cert ID: 263gl7b3rur</p>
          <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed">
            Hands-on training covering statistical data processing, vector datasets, Python scientific tooling, and data pipeline fundamentals.
          </p>
        </div>

        {/* Theoretical Competencies Box */}
        <div className="p-2.5 rounded-lg bg-[#F3ECE4]/90 border border-[#EDE4D9] space-y-0.5 text-xs">
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#1A1816] block">
            Academic &amp; Systems Foundation:
          </span>
          <p className="text-[#2C2825] leading-relaxed font-medium">
            Database normalization, ACID transaction guarantees, Row-Level Security, asynchronous event loops, WebSocket protocol lifecycles, and cryptographic authentication.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-[#EDE4D9] text-xs text-[#7A746D] flex justify-between font-mono">
        <span>Verified Credentials</span>
        <span className="font-bold">Page 19</span>
      </div>
    </div>
  );
}

function ColophonRight() {
  return (
    <div className="h-full w-full p-5 sm:p-6 md:p-7 flex flex-col justify-between bg-[#FDFCFA] text-[#2C2825] overflow-hidden select-none">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#7A746D] pb-2 border-b border-[#EDE4D9]">
        <span className="font-bold text-[#1A1816]">Direct Contact &amp; Connect</span>
        <span className="text-[#C4604A] font-bold">Available 2026</span>
      </div>

      <div className="space-y-2.5 sm:space-y-3 my-auto">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1A1816]">
            Om Thakur
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#C4604A] font-bold mt-1">
            Backend Engineer | Distributed Systems | Scalable APIs
          </p>
          <p className="text-sm sm:text-base text-[#2C2825] mt-2 leading-relaxed font-normal">
            Open for backend engineering appointments, scalable systems architecture consulting, and high-concurrency real-time infrastructure projects.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
          <a
            href="mailto:omthakur2366@gmail.com"
            className="p-2 sm:p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#C4604A] transition-colors flex items-center gap-2 text-[#1A1816] font-bold"
          >
            <Mail className="w-3.5 h-3.5 text-[#C4604A] shrink-0" />
            <span className="truncate">omthakur2366@gmail.com</span>
          </a>

          <a
            href="tel:+917756898550"
            className="p-2 sm:p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#C4604A] transition-colors flex items-center gap-2 text-[#1A1816] font-bold"
          >
            <Phone className="w-3.5 h-3.5 text-[#566449] shrink-0" />
            <span>+91 7756898550</span>
          </a>

          <a
            href="https://github.com/MonsterFlick"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#C4604A] transition-colors flex items-center gap-2 text-[#1A1816] font-bold"
          >
            <Github className="w-3.5 h-3.5 text-[#1A1816] shrink-0" />
            <span>github.com/MonsterFlick</span>
          </a>

          <a
            href="https://linkedin.com/in/omthakur2366"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#C4604A] transition-colors flex items-center gap-2 text-[#1A1816] font-bold"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2] shrink-0" />
            <span>linkedin.com/in/omthakur2366</span>
          </a>
        </div>

        {/* Direct Action Box */}
        <div className="p-2.5 sm:p-3 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] flex items-center justify-between gap-3">
          <div>
            <span className="font-mono text-xs uppercase font-bold text-[#1A1816] block">
              Curriculum Vitae / Resume
            </span>
            <span className="text-xs text-[#5E5854] font-medium">
              Clean ATS-ready print &amp; PDF version
            </span>
          </div>
          <Link
            href="/resume"
            className="px-3 py-1.5 rounded-md bg-[#1A1816] text-[#FAF6F1] text-xs font-bold hover:bg-[#C4604A] transition-colors shrink-0 shadow-2xs"
          >
            Open /resume →
          </Link>
        </div>
      </div>

      <div className="pt-2 border-t border-[#EDE4D9] flex items-center justify-between text-xs text-[#5E5854] font-mono">
        <span className="text-[#C4604A] font-bold">End of Volume I</span>
        <span className="font-semibold">Page 20</span>
      </div>
    </div>
  );
}
