"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Database,
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
      return side === "left" ? <OverviewLeft /> : <OverviewRight />;
    case 1:
      return side === "left" ? <PrinciplesLeft /> : <PrinciplesRight />;
    case 2:
      return side === "left" ? (
        <ProjectLeft project={PROJECTS[0]} chapter="Chapter 03" />
      ) : (
        <ProjectRight
          project={PROJECTS[0]}
          topology="Checkout → Sync API → HMAC Webhook → AES-256-GCM Decryption → Asset Storage"
          tradeoff="Dual verification prevents client bypass and webhook race conditions. Encrypted storage with randomized IVs prevents data leakage at rest."
          onInspect={() => onInspectProject?.(PROJECTS[0].id)}
        />
      );
    case 3:
      return side === "left" ? (
        <ProjectLeft project={PROJECTS[1]} chapter="Chapter 04" />
      ) : (
        <ProjectRight
          project={PROJECTS[1]}
          topology="HTTP Request → Next.js Edge Isolate → Matrix Math Transform → Stateless SVG Response"
          tradeoff="Pure mathematical rendering at the edge eliminates headless browsers (Puppeteer), memory bloat, and cold starts."
          onInspect={() => onInspectProject?.(PROJECTS[1].id)}
        />
      );
    case 4:
      return side === "left" ? (
        <ProjectLeft project={PROJECTS[2]} chapter="Chapter 05" />
      ) : (
        <ProjectRight
          project={PROJECTS[2]}
          topology="Natural Language → Local Ollama LLM → Action Validator → Sandboxed Execution"
          tradeoff="Completely local inference operates with zero internet dependency, prevents data leaks, and avoids recurring cloud API costs."
          onInspect={() => onInspectProject?.(PROJECTS[2].id)}
        />
      );
    case 5:
      return side === "left" ? (
        <ProjectLeft project={PROJECTS[3]} chapter="Chapter 06" />
      ) : (
        <ProjectRight
          project={PROJECTS[3]}
          topology="SMS Ingest → Regex Parser → Room SQLite Persistence → Idempotent Supabase Sync"
          tradeoff="Offline-first SQLite architecture prevents data loss in unstable connectivity while background cloud sync preserves idempotency."
          onInspect={() => onInspectProject?.(PROJECTS[3].id)}
        />
      );
    case 6:
      return side === "left" ? (
        <ProjectLeft project={PROJECTS[4]} chapter="Chapter 07" />
      ) : (
        <ProjectRight
          project={PROJECTS[4]}
          topology="GitHub Webhook → Markdown Compiler → Edge Cache Key → Sub-30ms HTML Response"
          tradeoff="Compiling markdown directly from Git commits eliminates static rebuild pipelines and achieves sub-30ms TTFB worldwide."
          onInspect={() => onInspectProject?.(PROJECTS[4].id)}
        />
      );
    case 7:
      return side === "left" ? <SkillsLeft /> : <SkillsRight />;
    case 8:
      return side === "left" ? <ExperienceLeft /> : <ExperienceRight />;
    case 9:
      return side === "left" ? <EducationLeft /> : <ContactRight />;
    default:
      return side === "left" ? <OverviewLeft /> : <OverviewRight />;
  }
}

export function DesktopSpread({
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
   Chapter 01: Overview
───────────────────────────────────────────────────────────── */
function OverviewLeft() {
  return (
    <div className="h-full w-full p-6 sm:p-7 border-r border-[#EDE4D9] flex flex-col justify-between bg-[#FAF6F1] text-[#2C2825] select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#566449] animate-pulse" />
          <span className="text-[#1A1816] font-medium">Systems Engineer</span>
        </span>
        <span>Mumbai, India</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4 my-2">
        <div>
          <span className="text-xs uppercase font-mono text-[#9E3D2B] font-semibold block mb-1">
            Backend &amp; Distributed Systems
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1816] tracking-tight">
            Om Thakur
          </h2>
          <p className="font-mono text-xs text-[#5E5854] mt-1">
            omthakur2366@gmail.com · omthakur.in
          </p>
        </div>

        <p className="text-sm text-[#4A4541] leading-relaxed">
          Backend engineer building low-latency WebSocket pipelines, event-driven message queues,
          and robust database architectures with strict data safety.
        </p>

        {/* 3 Key Verified Metrics */}
        <div className="grid grid-cols-3 gap-2.5 pt-1">
          <div className="p-2.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] text-center">
            <span className="font-serif text-lg sm:text-xl font-bold text-[#9E3D2B] block">
              15m → 4s
            </span>
            <span className="text-[11px] font-mono text-[#5E5854] block mt-1 leading-snug">
              Queue sync speedup
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] text-center">
            <span className="font-serif text-lg sm:text-xl font-bold text-[#1A1816] block">
              ~700 ms
            </span>
            <span className="text-[11px] font-mono text-[#5E5854] block mt-1 leading-snug">
              GPU WebSocket pipeline
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] text-center">
            <span className="font-serif text-lg sm:text-xl font-bold text-[#566449] block">
              &lt; 10 ms
            </span>
            <span className="text-[11px] font-mono text-[#5E5854] block mt-1 leading-snug">
              Stateless Edge API
            </span>
          </div>
        </div>

        {/* Core Stack */}
        <div className="p-3 rounded-lg bg-[#F3ECE4]/80 border border-[#EDE4D9]">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#5E5854] block mb-2 font-semibold">
            Primary Stack:
          </span>
          <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[#1A1816]">
            {["TypeScript", "Python", "PostgreSQL", "WebSockets", "Flexbase Queues", "Docker"].map((tech) => (
              <span key={tech} className="px-2.5 py-0.5 rounded bg-[#FAF6F1] border border-[#D4C3AF]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#EDE4D9] flex items-center justify-between text-xs text-[#5E5854] font-mono">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#566449]" />
          <span>Available for Roles · 2026</span>
        </span>
        <span className="text-[#9E3D2B] font-semibold">Page 01</span>
      </div>
    </div>
  );
}

function OverviewRight() {
  const sections = [
    { title: "Chapter 02: Principles & Case Study", tag: "Architecture", page: "03–04" },
    { title: "Chapter 03: Digital Commerce Platform", tag: "Payments & Crypto", page: "05–06" },
    { title: "Chapter 04: devpic SVG API", tag: "Edge Computing", page: "07–08" },
    { title: "Chapter 05: Agni AI Agent", tag: "Local AI & Automation", page: "09–10" },
    { title: "Chapter 06: Fin Read Android", tag: "Offline Storage", page: "11–12" },
    { title: "Chapter 07: GitFool Engine", tag: "Distributed Web", page: "13–14" },
    { title: "Chapter 08: Technical Skills & Stack", tag: "Taxonomy", page: "15–16" },
    { title: "Chapter 09: Work Experience", tag: "Career History", page: "17–18" },
    { title: "Chapter 10: Credentials & Contact", tag: "Education & Links", page: "19–20" },
  ];

  return (
    <div className="h-full w-full p-6 sm:p-7 flex flex-col justify-between bg-[#FDFCFA] text-[#2C2825] select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="text-[#1A1816] font-semibold">Table of Contents</span>
        <span className="text-[#9E3D2B] font-mono">10 Chapters</span>
      </div>

      {/* Chapter List */}
      <div className="flex-1 flex flex-col justify-center space-y-1.5 my-2">
        {sections.map((s, idx) => (
          <div
            key={idx}
            className="px-3 py-1.5 rounded-md bg-[#FAF6F1] border border-[#EDE4D9] flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-[#9E3D2B] font-semibold shrink-0">
                {String(idx + 2).padStart(2, "0")}
              </span>
              <span className="text-[#1A1816] font-medium truncate">
                {s.title.replace(/^Chapter \d+: /, "")}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#7A746D] shrink-0 ml-2">
              p. {s.page}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#EDE4D9] flex items-center justify-between text-xs text-[#5E5854] font-mono">
        <span className="text-[#9E3D2B]">Flip with arrow keys (← / →)</span>
        <span>Page 02</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 02: Principles & Case Study
───────────────────────────────────────────────────────────── */
function PrinciplesLeft() {
  return (
    <div className="h-full w-full p-6 sm:p-7 border-r border-[#EDE4D9] flex flex-col justify-between bg-[#FAF6F1] text-[#2C2825] select-none">
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="text-[#1A1816] font-medium">Core Principles</span>
        <span className="text-[#9E3D2B]">Chapter 02</span>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-3.5 my-2">
        <div className="p-3.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-1">
          <span className="text-[11px] uppercase font-mono text-[#566449] font-semibold block">
            Principle 01 · Concurrency &amp; Event Queues
          </span>
          <h3 className="font-serif text-base font-bold text-[#1A1816]">
            Asynchronous Queues over Polling Loops
          </h3>
          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
            Cron polling introduces latency spikes and saturates database connection pools.
            Event-driven queues process tasks immediately with exponential backoff and dead-letter routing,
            cutting synchronization latency from 15 minutes to 4 seconds (~99.5% faster).
          </p>
        </div>

        <div className="p-3.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-1">
          <span className="text-[11px] uppercase font-mono text-[#9E3D2B] font-semibold block">
            Principle 02 · Webhook Security &amp; Idempotency
          </span>
          <h3 className="font-serif text-base font-bold text-[#1A1816]">
            Zero-Trust Payloads &amp; Idempotency Keys
          </h3>
          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
            External callbacks require timing-safe HMAC-SHA256 signature checks before touching the database.
            Combining verified signatures with unique transaction keys ensures duplicate webhook retries
            never cause race conditions or double entitlements.
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#EDE4D9] flex items-center justify-between text-xs text-[#5E5854] font-mono">
        <span>Architecture Philosophy</span>
        <span>Page 03</span>
      </div>
    </div>
  );
}

function PrinciplesRight() {
  return (
    <div className="h-full w-full p-6 sm:p-7 flex flex-col justify-between bg-[#FDFCFA] text-[#2C2825] select-none">
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="text-[#1A1816] font-medium">Production Case Study</span>
        <span className="text-[#9E3D2B]">RCA &amp; Optimization</span>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-3.5 my-2">
        <div className="p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-[#9E3D2B] uppercase">
              Database Outage Prevention
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#566449]/10 text-[#566449] font-medium">
              Resolved in Prod
            </span>
          </div>

          <h4 className="font-serif text-base font-bold text-[#1A1816]">
            Eliminating Retry Storms via Persistent Message Queues
          </h4>

          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
            During an incident at Sumeru Technology Solutions, an unthrottled payment retry cron repeatedly
            saturated PostgreSQL connection pools under load. Replacing the cron with an event-driven Flexbase queue
            eliminated connection exhaustion crashes entirely.
          </p>

          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed border-t border-[#EDE4D9] pt-2">
            For entitlement verification, replacing sequential scans with partial covering B-Tree indexes dropped
            execution time from <strong>840.2 ms</strong> to <strong>0.11 ms</strong> (99.98% latency reduction)
            with heap fetches = 0.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#F3ECE4]/80 border border-[#EDE4D9]">
          <p className="font-serif italic text-xs text-[#2C2825] leading-relaxed">
            &ldquo;Software architecture is not about avoiding failure; it is about setting boundaries so recovery is deterministic and latency remains predictable.&rdquo;
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#EDE4D9] flex items-center justify-between text-xs text-[#5E5854] font-mono">
        <span>Case Studies</span>
        <span>Page 04</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapters 03–07: Project Spreads
───────────────────────────────────────────────────────────── */
function ProjectLeft({
  project,
  chapter,
}: {
  project: (typeof PROJECTS)[0];
  chapter: string;
}) {
  return (
    <div className="h-full w-full p-6 sm:p-7 border-r border-[#EDE4D9] flex flex-col justify-between bg-[#FAF6F1] text-[#2C2825] select-none">
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="text-[#9E3D2B] font-semibold">{chapter}</span>
        <span className="text-[#1A1816] font-medium">{project.category}</span>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-3.5 my-2">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-[#7A746D] font-mono font-medium block">
            {project.edition}
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#1A1816] tracking-tight mt-0.5">
            {project.name}
          </h3>
        </div>

        <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
          {project.purpose}
        </p>

        {/* Challenge & Architecture */}
        <div className="p-3 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-1">
          <span className="text-[11px] font-mono uppercase text-[#9E3D2B] font-semibold block">
            Core Engineering Challenge:
          </span>
          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2">
          {project.stats.map((s) => (
            <div key={s.label} className="p-2 rounded-lg bg-[#F3ECE4] border border-[#EDE4D9] text-center">
              <span className="text-[11px] font-mono text-[#7A746D] block leading-tight">
                {s.label}
              </span>
              <span className="font-serif text-sm sm:text-base font-bold text-[#1A1816] block mt-1 leading-tight">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-[#EDE4D9] flex items-center justify-between text-xs text-[#5E5854] font-mono">
        <span>Project Overview</span>
        <span>Specs</span>
      </div>
    </div>
  );
}

function ProjectRight({
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
    <div className="h-full w-full p-6 sm:p-7 flex flex-col justify-between bg-[#FDFCFA] text-[#2C2825] select-none">
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="text-[#1A1816] font-medium">Implementation &amp; Architecture</span>
        <span className="text-[#9E3D2B]">Systems</span>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-3.5 my-2">
        {/* Tech Stack */}
        <div>
          <span className="text-[11px] uppercase tracking-wider font-mono text-[#7A746D] block mb-1.5 font-semibold">
            Technology Stack:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#F3ECE4] text-[#1A1816] border border-[#D4C3AF]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Data Pipeline Diagram */}
        <div className="p-3 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] font-mono">
          <span className="text-[11px] uppercase font-semibold text-[#566449] tracking-wider block mb-1">
            Data Flow Pipeline:
          </span>
          <p className="text-xs text-[#9E3D2B] leading-relaxed font-medium">
            {topology}
          </p>
        </div>

        {/* Tradeoffs */}
        <div className="p-3 rounded-lg bg-[#F3ECE4]/80 border border-[#EDE4D9] space-y-1">
          <span className="text-[11px] uppercase font-semibold text-[#1A1816] font-mono block">
            Architecture Tradeoffs:
          </span>
          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
            {tradeoff}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="pt-3 border-t border-[#EDE4D9] flex items-center justify-between gap-3">
        <button
          onClick={onInspect}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#9E3D2B] text-white text-xs font-medium hover:bg-[#852C1B] transition-colors cursor-pointer shadow-xs"
        >
          <span>Inspect Blueprint</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-[#5E5854] hover:text-[#1A1816] inline-flex items-center gap-1 cursor-pointer"
        >
          <span>Live Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 08: Skills & Stack
───────────────────────────────────────────────────────────── */
function SkillsLeft() {
  return (
    <div className="h-full w-full p-6 sm:p-7 border-r border-[#EDE4D9] flex flex-col justify-between bg-[#FAF6F1] text-[#2C2825] select-none">
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="text-[#1A1816] font-medium">Backend &amp; Concurrency</span>
        <span className="text-[#9E3D2B]">Chapter 08 · Part I</span>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-3 my-2">
        <div className="p-3 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9]">
          <div className="flex items-center justify-between text-xs">
            <span className="font-serif font-bold text-[#1A1816]">TypeScript, Node.js &amp; Deno</span>
            <span className="font-mono text-xs text-[#9E3D2B] font-medium">Edge &amp; APIs</span>
          </div>
          <p className="text-xs text-[#4A4541] mt-1 leading-relaxed">
            Next.js Edge Runtime, Deno Deploy, asynchronous I/O, REST APIs, and PM2 process clustering.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9]">
          <div className="flex items-center justify-between text-xs">
            <span className="font-serif font-bold text-[#1A1816]">Python, WebSockets &amp; Audio Pipelines</span>
            <span className="font-mono text-xs text-[#566449] font-medium">~700 ms Turnaround</span>
          </div>
          <p className="text-xs text-[#4A4541] mt-1 leading-relaxed">
            Real-time bidirectional audio streams, Pipecat integration, Exotel WebSockets, and GPU pipeline tuning.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9]">
          <div className="flex items-center justify-between text-xs">
            <span className="font-serif font-bold text-[#1A1816]">Flexbase Message Queues</span>
            <span className="font-mono text-xs text-[#7A3B3B] font-medium">15m → 4s Sync</span>
          </div>
          <p className="text-xs text-[#4A4541] mt-1 leading-relaxed">
            Worker queues with exponential backoff and dead-letter routing to eliminate polling overhead and connection pool exhaustion.
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#EDE4D9] text-xs text-[#5E5854] flex justify-between font-mono">
        <span>Runtimes &amp; Streaming</span>
        <span>Page 15</span>
      </div>
    </div>
  );
}

function SkillsRight() {
  return (
    <div className="h-full w-full p-6 sm:p-7 flex flex-col justify-between bg-[#FDFCFA] text-[#2C2825] select-none">
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="text-[#1A1816] font-medium">Databases &amp; Infrastructure</span>
        <span className="text-[#9E3D2B]">Chapter 08 · Part II</span>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-3 my-2">
        <div className="p-3 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9]">
          <div className="flex items-center justify-between text-xs">
            <span className="font-serif font-bold text-[#1A1816]">PostgreSQL &amp; Supabase</span>
            <span className="font-mono text-xs text-[#9E3D2B] font-medium">Drizzle &amp; RLS</span>
          </div>
          <p className="text-xs text-[#4A4541] mt-1 leading-relaxed">
            Relational schema design, Row-Level Security (RLS) policies, partial covering indexes, and connection pooling.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9]">
          <div className="flex items-center justify-between text-xs">
            <span className="font-serif font-bold text-[#1A1816]">Qdrant Vector Database</span>
            <span className="font-mono text-xs text-[#566449] font-medium">Semantic Search</span>
          </div>
          <p className="text-xs text-[#4A4541] mt-1 leading-relaxed">
            Dense vector embeddings with nomic-embed-text, cosine similarity search, and citation-grounded RAG pipelines.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9]">
          <div className="flex items-center justify-between text-xs">
            <span className="font-serif font-bold text-[#1A1816]">Linux &amp; Self-Hosted Infrastructure</span>
            <span className="font-mono text-xs text-[#5E5854] font-medium">Docker &amp; Nginx</span>
          </div>
          <p className="text-xs text-[#4A4541] mt-1 leading-relaxed">
            Docker Compose, Nginx reverse proxies, Cloudflare SSL, automated backups, and self-hosted mail/monitoring servers.
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#EDE4D9] text-xs text-[#5E5854] flex justify-between font-mono">
        <span>Databases &amp; Cloud</span>
        <span>Page 16</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 09: Work Experience
───────────────────────────────────────────────────────────── */
function ExperienceLeft() {
  return (
    <div className="h-full w-full p-6 sm:p-7 border-r border-[#EDE4D9] flex flex-col justify-between bg-[#FAF6F1] text-[#2C2825] select-none">
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="text-[#9E3D2B] font-semibold">Chapter 09</span>
        <span className="text-[#1A1816] font-medium">Recent Experience</span>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-3.5 my-2">
        {/* Krishora */}
        <div className="p-3.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#9E3D2B]/10 text-[#9E3D2B] font-semibold uppercase">
              Founding Engineer
            </span>
            <span className="font-mono text-xs text-[#7A746D]">Apr 2026 – Present</span>
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-[#1A1816]">
              Krishora Technologies
            </h4>
            <p className="font-mono text-xs text-[#566449]">Founding Software Engineer · Mumbai</p>
          </div>
          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
            Architected real-time WebSocket pipelines with ~700 ms turnaround; built Node.js routing layer with Qdrant vector retrieval for voice AI agent.
          </p>
        </div>

        {/* CIARL */}
        <div className="p-3.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EDE4D9] text-[#1A1816] font-semibold uppercase">
              Research Developer
            </span>
            <span className="font-mono text-xs text-[#7A746D]">Aug 2025 – Apr 2026</span>
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-[#1A1816]">
              Cyber Intelligence &amp; Research Lab (CIARL)
            </h4>
            <p className="font-mono text-xs text-[#566449]">Software Developer · Thane</p>
          </div>
          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
            Built Android background services with encrypted SQLite queues to ensure zero field data loss; developed React/PostgreSQL apps with RBAC and legal search.
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#EDE4D9] text-xs text-[#5E5854] flex justify-between font-mono">
        <span>Production History</span>
        <span>Page 17</span>
      </div>
    </div>
  );
}

function ExperienceRight() {
  return (
    <div className="h-full w-full p-6 sm:p-7 flex flex-col justify-between bg-[#FDFCFA] text-[#2C2825] select-none">
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="text-[#1A1816] font-medium">Internship &amp; Academic</span>
        <span className="text-[#9E3D2B]">Chapter 09 · Part II</span>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-3.5 my-2">
        {/* Sumeru */}
        <div className="p-3.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#566449]/10 text-[#566449] font-semibold uppercase">
              SDE Intern
            </span>
            <span className="font-mono text-xs text-[#7A746D]">Aug 2024 – Feb 2025</span>
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-[#1A1816]">
              Sumeru Technology Solutions
            </h4>
            <p className="font-mono text-xs text-[#566449]">Software Engineering Intern · Bengaluru</p>
          </div>
          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
            Replaced polling cron jobs with Flexbase queues, reducing sync from 15m to 4s (~99.5% speedup); resolved database connection exhaustion and migrated legacy PHP endpoints to TypeScript.
          </p>
        </div>

        {/* Academic Mentorship */}
        <div className="p-3.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#E2D5C6] text-[#1A1816] font-semibold uppercase">
              Teaching &amp; Mentorship
            </span>
            <span className="font-mono text-xs text-[#7A746D]">Jun – Aug 2024</span>
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-[#1A1816]">
              University of Mumbai Affiliate College
            </h4>
            <p className="font-mono text-xs text-[#566449]">Volunteer Assistant Professor · Shahapur</p>
          </div>
          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
            Taught database normalization, SQL indexing, and relational schemas to B.Sc. IT undergraduates; mentored final-year project teams.
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#EDE4D9] text-xs text-[#5E5854] flex justify-between font-mono">
        <span>Work History</span>
        <span>Page 18</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 10: Education & Direct Contact
───────────────────────────────────────────────────────────── */
function EducationLeft() {
  return (
    <div className="h-full w-full p-6 sm:p-7 border-r border-[#EDE4D9] flex flex-col justify-between bg-[#FAF6F1] text-[#2C2825] select-none">
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="text-[#9E3D2B] font-semibold">Chapter 10</span>
        <span className="text-[#1A1816] font-medium">Education &amp; Honors</span>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-3.5 my-2">
        {/* Degree */}
        <div className="p-3.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#566449]/10 text-[#566449] font-semibold">
              First Rank in College
            </span>
            <span className="font-mono text-xs text-[#9E3D2B] font-bold">CGPA: 8.55 / 10.0</span>
          </div>
          <h4 className="font-serif text-base font-bold text-[#1A1816]">
            B.Sc. in Information Technology
          </h4>
          <p className="font-mono text-xs text-[#566449]">University of Mumbai · 2021 – 2024</p>
          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
            Graduated with First Rank across the cohort. Core focus in database architecture, operating systems, networking protocols, and distributed algorithms.
          </p>
        </div>

        {/* Training */}
        <div className="p-3.5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-serif font-bold text-sm text-[#1A1816]">Data Science &amp; Python Training</span>
            <span className="font-mono text-[11px] text-[#566449] font-medium">Verified</span>
          </div>
          <p className="font-mono text-xs text-[#7A746D]">Internshala Trainings · Oct 2023</p>
          <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
            Practical coursework in data manipulation, array processing with NumPy/Pandas, and statistical data pipelines.
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#EDE4D9] text-xs text-[#5E5854] flex justify-between font-mono">
        <span>Education</span>
        <span>Page 19</span>
      </div>
    </div>
  );
}

function ContactRight() {
  return (
    <div className="h-full w-full p-6 sm:p-7 flex flex-col justify-between bg-[#FDFCFA] text-[#2C2825] select-none">
      <div className="flex items-center justify-between text-xs font-mono text-[#7A746D] pb-3 border-b border-[#EDE4D9]">
        <span className="text-[#1A1816] font-medium">Contact &amp; Links</span>
        <span className="text-[#9E3D2B]">Available 2026</span>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-4 my-2">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#1A1816]">
            Om Thakur
          </h3>
          <p className="font-mono text-xs text-[#9E3D2B] font-medium mt-0.5">
            Backend &amp; Distributed Systems Engineer
          </p>
          <p className="text-xs sm:text-[13px] text-[#4A4541] mt-1.5 leading-relaxed">
            Available for full-time backend engineering roles, concurrency consulting, and distributed systems architecture.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <a
            href="mailto:omthakur2366@gmail.com"
            className="p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#9E3D2B] transition-colors flex items-center gap-2 text-[#1A1816]"
          >
            <Mail className="w-4 h-4 text-[#9E3D2B] shrink-0" />
            <span className="truncate">Email Me</span>
          </a>

          <a
            href="tel:+917756898550"
            className="p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#9E3D2B] transition-colors flex items-center gap-2 text-[#1A1816]"
          >
            <Phone className="w-4 h-4 text-[#566449] shrink-0" />
            <span className="truncate">+91 7756898550</span>
          </a>

          <a
            href="https://github.com/MonsterFlick"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#9E3D2B] transition-colors flex items-center gap-2 text-[#1A1816]"
          >
            <Github className="w-4 h-4 text-[#1A1816] shrink-0" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/omthakur2366"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#9E3D2B] transition-colors flex items-center gap-2 text-[#1A1816]"
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2] shrink-0" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Resume Button */}
        <div>
          <Link
            href="/resume"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1A1816] text-[#FAF6F1] text-xs font-semibold hover:bg-[#9E3D2B] transition-colors shadow-xs"
          >
            <span>View Full Resume / CV →</span>
          </Link>
        </div>
      </div>

      <div className="pt-3 border-t border-[#EDE4D9] flex items-center justify-between text-xs text-[#5E5854] font-mono">
        <span className="text-[#9E3D2B]">End of Portfolio</span>
        <span>Page 20</span>
      </div>
    </div>
  );
}
