"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp, Mail } from "lucide-react";

interface EditorialFooterProps {
  onNavigatePlate?: (plateIndex: number) => void;
}

export function EditorialFooter({ onNavigatePlate }: EditorialFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="bg-[#FAF6F1] border-t border-[#EDE4D9] text-[#2C2825] font-sans pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto">
        
        {/* ── Engineering Reflection Card ── */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#FDFCFA] border border-[#EDE4D9] shadow-2xs mb-10 sm:mb-12">
          <div className="max-w-4xl space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#9E3D2B] font-mono font-semibold block">
              Engineering Philosophy
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1816]">
              Building for Longevity &amp; Production Reliability
            </h3>
            <p className="text-sm sm:text-base text-[#4A4541] leading-relaxed">
              Software is most resilient when built with clear architectural boundaries, strict data validation,
              and deep respect for the hardware beneath it. Whether constructing an idempotent payment verification pipeline,
              indexing PostgreSQL for index-only scans, or tuning low-latency WebSocket streams, my focus is always on reliability, security, and measurable performance.
            </p>

            <div className="pt-2 flex items-center justify-between">
              <div>
                <span className="font-serif text-lg font-bold text-[#1A1816]">
                  Om Thakur
                </span>
                <span className="text-xs font-mono text-[#5E5854] block mt-0.5">
                  Backend Systems Engineer · Mumbai, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Directory Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pb-10 border-b border-[#EDE4D9] text-xs sm:text-sm">
          {/* Identity & About */}
          <div className="space-y-2.5">
            <span className="font-serif text-lg font-bold text-[#1A1816] block">
              Om Thakur<span className="text-[#9E3D2B]">.</span>
            </span>
            <p className="text-xs sm:text-sm text-[#5E5854] leading-relaxed">
              Interactive technical portfolio and engineering records for distributed systems, real-time pipelines, and developer tooling.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#566449] animate-pulse" />
              <span className="text-xs font-mono text-[#4A4541]">Available for full-time roles</span>
            </div>
          </div>

          {/* Writing & Resources */}
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#4A4541] font-semibold block">
              Resources &amp; Specs
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#4A4541]">
              <li>
                <a
                  href="https://blogs.omthakur.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9E3D2B] transition-colors font-medium"
                >
                  GitFool Tech Blog ↗
                </a>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="hover:text-[#9E3D2B] transition-colors font-semibold"
                >
                  Resume / Curriculum Vitae →
                </Link>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  className="hover:text-[#9E3D2B] transition-colors font-mono text-xs"
                >
                  llms.txt (AI Discovery)
                </a>
              </li>
              <li>
                <a
                  href="/llms-full.txt"
                  className="hover:text-[#9E3D2B] transition-colors font-mono text-xs"
                >
                  llms-full.txt (Full Dossier)
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="hover:text-[#9E3D2B] transition-colors font-mono text-xs"
                >
                  sitemap.xml
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#4A4541] font-semibold block">
              Connect
            </span>
            <a
              href="mailto:omthakur2366@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-[#9E3D2B] hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>omthakur2366@gmail.com</span>
            </a>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/MonsterFlick"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#F3ECE4] hover:bg-[#E2D5C6] text-[#1A1816] transition-colors cursor-pointer"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/omthakur2366"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#F3ECE4] hover:bg-[#E2D5C6] text-[#1A1816] transition-colors cursor-pointer"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/omthakur2366"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#F3ECE4] hover:bg-[#E2D5C6] text-[#1A1816] transition-colors cursor-pointer"
                title="Twitter / X"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-[#7A746D] pt-1">
              Mumbai, India (IST · UTC+5:30)
            </p>
          </div>
        </div>

        {/* ── Bottom Strip ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5E5854]">
          <span>© 2026 Om Thakur. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#383432] hover:text-[#1A1816] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#9E3D2B]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
