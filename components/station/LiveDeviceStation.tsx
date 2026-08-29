"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Laptop,
  Server,
  Radio,
  Music,
  Code2,
  Disc,
  Power,
  Moon,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
} from "lucide-react";

interface DeviceData {
  realme: {
    online: boolean;
    track?: {
      title: string;
      artist: string;
      album: string;
      duration: number;
      initialSeconds: number;
    };
  };
  gamingPc: {
    online: boolean;
    project?: string;
    file?: string;
    branch?: string;
    action?: string;
  };
  veteranPc: {
    online: boolean;
    task?: string;
    services?: string;
    uptime?: string;
  };
  discord: {
    statusText: string;
    state: "online" | "idle" | "offline";
  };
}

interface Scenario {
  id: string;
  label: string;
  desc: string;
  data: DeviceData;
}

const SCENARIOS: Scenario[] = [
  {
    id: "pc-only",
    label: "💻 Workstation Only (1 Active)",
    desc: "Active coding session at the desk, phone screen is locked, and veteran server is sleeping.",
    data: {
      realme: { online: false },
      gamingPc: {
        online: true,
        project: "MonsterFlick / omthakur",
        file: "components/station/LiveDeviceStation.tsx",
        branch: "main",
        action: "Crafting React 19 & Next.js Editorial Theme",
      },
      veteranPc: { online: false },
      discord: {
        statusText: "Deep in the codebase · Building scalable frontend & backend architectures",
        state: "online",
      },
    },
  },
  {
    id: "phone-only",
    label: "🎧 Mobile on the Go (1 Active)",
    desc: "Away from the desk, listening to synthwave on the realme 11 Pro 5G via Metrolist.",
    data: {
      realme: {
        online: true,
        track: {
          title: "Resonance",
          artist: "HOME",
          album: "Odyssey",
          duration: 212,
          initialSeconds: 145,
        },
      },
      gamingPc: { online: false },
      veteranPc: { online: false },
      discord: {
        statusText: "Out & about · Streaming audio via Metrolist Method A RPC",
        state: "online",
      },
    },
  },
  {
    id: "pc-and-phone",
    label: "⚡ Coding + Music (2 Active)",
    desc: "Coding on the Gaming PC while streaming audio simultaneously on realme 11 Pro 5G.",
    data: {
      realme: {
        online: true,
        track: {
          title: "Midnight City",
          artist: "M83",
          album: "Hurry Up, We're Dreaming",
          duration: 243,
          initialSeconds: 98,
        },
      },
      gamingPc: {
        online: true,
        project: "MonsterFlick / MonsterFPS",
        file: "src/kernel/RegistrySnapshot.cs",
        branch: "release-v2",
        action: "Benchmarking 1% low frame latency & kernel registry snapshots",
      },
      veteranPc: { online: false },
      discord: {
        statusText: "Optimizing low-level system latency & listening to M83",
        state: "online",
      },
    },
  },
  {
    id: "all-offline",
    label: "🌙 Recharging / Away (0 Active)",
    desc: "All devices are powered down or in standby. Zero active heartbeats.",
    data: {
      realme: { online: false },
      gamingPc: { online: false },
      veteranPc: { online: false },
      discord: {
        statusText: "Recharging batteries · Away from all screens",
        state: "offline",
      },
    },
  },
  {
    id: "full-rig",
    label: "🚀 Full Rig Active (3 Active)",
    desc: "Rare full setup: Gaming rig coding, realme streaming, and veteran server processing jobs.",
    data: {
      realme: {
        online: true,
        track: {
          title: "Nightcall",
          artist: "Kavinsky",
          album: "OutRun",
          duration: 259,
          initialSeconds: 180,
        },
      },
      gamingPc: {
        online: true,
        project: "MonsterFlick / gitfool",
        file: "app/api/webhook/route.ts",
        branch: "production",
        action: "Testing automated Markdown sync pipelines",
      },
      veteranPc: {
        online: true,
        task: "Docker Engine & Redis Streams",
        services: "PostgreSQL 16 · BullMQ Workers · Cloudflare Sync",
        uptime: "482 Days Unbroken Uptime",
      },
      discord: {
        statusText: "Full distributed pipeline active across all 3 nodes",
        state: "online",
      },
    },
  },
];

export function LiveDeviceStation() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("pc-only");
  const [seconds, setSeconds] = useState(145);
  const [isPlaying, setIsPlaying] = useState(true);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];
  const { realme, gamingPc, veteranPc, discord } = scenario.data;

  // Calculate active device count
  const activeCount =
    (realme.online ? 1 : 0) + (gamingPc.online ? 1 : 0) + (veteranPc.online ? 1 : 0);

  // Track ticker for realme
  useEffect(() => {
    if (realme.track) {
      setSeconds(realme.track.initialSeconds);
    }
  }, [realme.track]);

  useEffect(() => {
    if (!isPlaying || !realme.online || !realme.track) return;
    const interval = setInterval(() => {
      setSeconds((prev) => (prev >= (realme.track?.duration ?? 200) ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, realme]);

  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = Math.floor(totalSec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const progressPercent = realme.track ? (seconds / realme.track.duration) * 100 : 0;

  return (
    <section id="workbench" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-[#FAF6F1]">
      <div className="max-w-6xl mx-auto">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3ECE4] border border-[#E2D5C6] text-xs font-semibold text-[#7A746D] mb-4">
            <Radio className="w-3.5 h-3.5 text-[#C4604A] animate-pulse" />
            <span>Cross-Device Discord Presence Telemetry</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1816] tracking-tight">
            Live Device Activity Station
          </h2>

          <p className="text-sm sm:text-base text-[#5E5854] mt-3 leading-relaxed">
            Real-time status aggregated from my personal hardware via{" "}
            <strong className="text-[#1A1816]">Discord Gateway WebSocket (Method A)</strong>.
            Dynamically reflects whether 0, 1, 2, or all devices are active.
          </p>

          {/* Scenario Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {SCENARIOS.map((s) => {
              const active = s.id === activeScenarioId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveScenarioId(s.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    active
                      ? "bg-[#1A1816] text-[#FAF6F1] shadow-sm ring-2 ring-[#C4604A]"
                      : "bg-[#FDFCFA] text-[#5E5854] border border-[#EDE4D9] hover:bg-[#F3ECE4] hover:text-[#1A1816]"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Discord Central Presence Banner ── */}
        <div className="mb-8 p-4 sm:p-5 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative shrink-0">
              <div className="w-11 h-11 rounded-full bg-[#1A1816] text-[#FAF6F1] font-serif font-black flex items-center justify-center text-base border-2 border-[#D4C3AF]">
                OT
              </div>
              <span
                className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${
                  discord.state === "online"
                    ? "bg-[#566449]"
                    : discord.state === "idle"
                    ? "bg-[#D97706]"
                    : "bg-[#928B87]"
                }`}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base text-[#1A1816]">Om Thakur</span>
                <span className="text-xs font-mono text-[#7A746D]">@MonsterFlick</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase ${
                    discord.state === "online"
                      ? "bg-[#566449]/10 text-[#566449]"
                      : discord.state === "idle"
                      ? "bg-[#D97706]/10 text-[#D97706]"
                      : "bg-[#928B87]/10 text-[#928B87]"
                  }`}
                >
                  {discord.state}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5E5854] mt-0.5 italic">
                &ldquo;{discord.statusText}&rdquo;
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#1A1816] bg-[#F3ECE4] px-3.5 py-1.5 rounded-full border border-[#EDE4D9] self-start sm:self-auto shrink-0">
            <span
              className={`w-2 h-2 rounded-full ${
                activeCount > 0 ? "bg-[#566449] animate-pulse" : "bg-[#928B87]"
              }`}
            />
            <span className="font-semibold">
              {activeCount === 0
                ? "All Devices in Standby"
                : `${activeCount} of 3 Devices Active`}
            </span>
          </div>
        </div>

        {/* ── 3 Physical Hardware Device Cards ── */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* ── 1. REALME 11 PRO 5G ── */}
          <div
            className={`p-6 rounded-lg border shadow-sm flex flex-col justify-between transition-all ${
              realme.online
                ? "bg-[#FDFCFA] border-[#EDE4D9] hover:border-[#D4C3AF]"
                : "bg-[#F7F2EB]/60 border-[#E8DFC8] opacity-75"
            }`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#EDE4D9]">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded flex items-center justify-center ${
                      realme.online
                        ? "bg-[#C4604A]/10 text-[#C4604A]"
                        : "bg-[#928B87]/10 text-[#928B87]"
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1A1816]">
                      realme 11 Pro 5G
                    </h3>
                    <p className="text-xs text-[#7A746D]">
                      Dimensity 7050 · Android 14
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-4">
                {realme.online ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#C4604A]/10 text-[#C4604A] text-xs font-semibold">
                    <Music className="w-3.5 h-3.5" />
                    <span>Streaming via Metrolist</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#928B87]/15 text-[#7A746D] text-xs font-medium">
                    <Moon className="w-3 h-3" />
                    <span>Standby · Screen Locked</span>
                  </span>
                )}
              </div>

              {/* Body Card */}
              {realme.online && realme.track ? (
                <div className="mt-4 p-4 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-3">
                  <div className="flex items-center gap-3">
                    {/* Spinning Vinyl */}
                    <div className="relative w-12 h-12 rounded-full bg-[#1A1816] flex items-center justify-center shadow shrink-0 border border-[#D4C3AF]">
                      <Disc
                        className={`w-7 h-7 text-[#C4604A] ${isPlaying ? "animate-spin" : ""}`}
                        style={{ animationDuration: "6s" }}
                      />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FAF6F1] absolute" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-sm text-[#1A1816] truncate">
                        {realme.track.title}
                      </h4>
                      <p className="text-xs text-[#5E5854] truncate">
                        {realme.track.artist}
                      </p>
                      <p className="text-[11px] text-[#928B87] truncate">
                        {realme.track.album}
                      </p>
                    </div>
                  </div>

                  {/* Scrubber */}
                  <div className="space-y-1">
                    <div className="w-full h-1.5 rounded-full bg-[#EDE4D9] overflow-hidden">
                      <div
                        className="h-full bg-[#C4604A] rounded-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[11px] font-mono text-[#7A746D]">
                      <span>{formatTime(seconds)}</span>
                      <span>{formatTime(realme.track.duration)}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-4 p-4 rounded bg-[#FAF6F1]/50 border border-[#EDE4D9]/60 text-xs text-[#7A746D] space-y-1">
                  <p className="font-medium text-[#5E5854]">No active audio stream.</p>
                  <p className="text-[11.5px]">Device will automatically broadcast when Metrolist or Discord opens.</p>
                </div>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-[#EDE4D9] text-xs text-[#7A746D] flex justify-between">
              <span>{realme.online ? "● Gateway Active" : "○ Disconnected"}</span>
              <span className="font-mono text-[11px]">Mobile Node</span>
            </div>
          </div>

          {/* ── 2. GAMING & DEV RIG ── */}
          <div
            className={`p-6 rounded-lg border shadow-sm flex flex-col justify-between transition-all ${
              gamingPc.online
                ? "bg-[#FDFCFA] border-[#EDE4D9] hover:border-[#D4C3AF]"
                : "bg-[#F7F2EB]/60 border-[#E8DFC8] opacity-75"
            }`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#EDE4D9]">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded flex items-center justify-center ${
                      gamingPc.online
                        ? "bg-[#1A1816] text-[#FAF6F1]"
                        : "bg-[#928B87]/10 text-[#928B87]"
                    }`}
                  >
                    <Laptop className="w-4 h-4 text-[#C4604A]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1A1816]">
                      Gaming &amp; Dev PC
                    </h3>
                    <p className="text-xs text-[#7A746D]">
                      RTX 2060S · 32GB RAM · Ryzen 7 2600X
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-4">
                {gamingPc.online ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#566449]/10 text-[#566449] text-xs font-semibold">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Active Coding in VS Code</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#928B87]/15 text-[#7A746D] text-xs font-medium">
                    <Moon className="w-3 h-3" />
                    <span>Standby · Desk Rig Asleep</span>
                  </span>
                )}
              </div>

              {/* Body Card */}
              {gamingPc.online ? (
                <div className="mt-4 p-4 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-2.5 text-xs">
                  <div>
                    <span className="text-[#928B87] block text-[11px] uppercase tracking-wider font-mono">
                      Workspace Repo
                    </span>
                    <span className="font-serif font-bold text-sm text-[#1A1816]">
                      {gamingPc.project}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#928B87] block text-[11px] uppercase tracking-wider font-mono">
                      Active File
                    </span>
                    <span className="font-mono text-[#C4604A] font-semibold text-[11.5px] block truncate">
                      {gamingPc.file}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#EDE4D9]/80 text-[#5E5854]">
                    {gamingPc.action}
                  </div>
                </div>
              ) : (
                <div className="mt-4 p-4 rounded bg-[#FAF6F1]/50 border border-[#EDE4D9]/60 text-xs text-[#7A746D] space-y-1">
                  <p className="font-medium text-[#5E5854]">Workstation is powered down.</p>
                  <p className="text-[11.5px]">VS Code RPC broadcasts automatically when opened.</p>
                </div>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-[#EDE4D9] flex items-center justify-between text-xs text-[#7A746D]">
              <span>{gamingPc.online ? `Branch: ${gamingPc.branch}` : "○ Off"}</span>
              <span className="font-mono text-[11px]">Primary Node</span>
            </div>
          </div>

          {/* ── 3. THE VETERAN PC ── */}
          <div
            className={`p-6 rounded-lg border shadow-sm flex flex-col justify-between transition-all ${
              veteranPc.online
                ? "bg-[#FDFCFA] border-[#EDE4D9] hover:border-[#D4C3AF]"
                : "bg-[#F7F2EB]/60 border-[#E8DFC8] opacity-75"
            }`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#EDE4D9]">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded flex items-center justify-center ${
                      veteranPc.online
                        ? "bg-[#7A3B3B]/10 text-[#7A3B3B]"
                        : "bg-[#928B87]/10 text-[#928B87]"
                    }`}
                  >
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1A1816]">
                      Veteran PC
                    </h3>
                    <p className="text-xs text-[#7A3B3B] font-medium">
                      &quot;i better not say it, it&apos;s very old&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-4">
                {veteranPc.online ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#566449]/10 text-[#566449] text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{veteranPc.uptime}</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#928B87]/15 text-[#7A746D] text-xs font-medium">
                    <Moon className="w-3 h-3" />
                    <span>Resting / On-Demand Standby</span>
                  </span>
                )}
              </div>

              {/* Body Card */}
              {veteranPc.online ? (
                <div className="mt-4 p-4 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-2.5 text-xs">
                  <div>
                    <span className="text-[#928B87] block text-[11px] uppercase tracking-wider font-mono">
                      Primary Role
                    </span>
                    <span className="font-serif font-bold text-sm text-[#1A1816]">
                      {veteranPc.task}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#928B87] block text-[11px] uppercase tracking-wider font-mono">
                      Active Services
                    </span>
                    <span className="font-mono text-[#5E5854] text-[11.5px] block leading-snug">
                      {veteranPc.services}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#EDE4D9]/80 text-[#7A746D] italic">
                    Running on 100% pure willpower and Linux kernel resilience.
                  </div>
                </div>
              ) : (
                <div className="mt-4 p-4 rounded bg-[#FAF6F1]/50 border border-[#EDE4D9]/60 text-xs text-[#7A746D] space-y-1">
                  <p className="font-medium text-[#5E5854]">Resting after 482 days.</p>
                  <p className="text-[11.5px]">Spins up on-demand when heavy build pipelines or backup cron jobs run.</p>
                </div>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-[#EDE4D9] text-xs text-[#7A746D] flex justify-between">
              <span>{veteranPc.online ? "● Active Daemon" : "○ Low-Power"}</span>
              <span className="font-mono text-[11px]">Veteran Node</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
