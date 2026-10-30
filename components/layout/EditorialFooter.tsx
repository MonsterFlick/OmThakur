"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

export function EditorialFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF6F1] border-t border-[#EDE4D9] text-[#2C2825] font-sans pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl xl:max-w-[1360px] mx-auto">
        
        {/* ── Personal Reflection Card ── */}
        <div className="p-5 sm:p-8 md:p-10 rounded-md bg-[#FDFCFA] border border-[#EDE4D9] shadow-paper mb-12 sm:mb-16 relative overflow-hidden">
          <div className="max-w-5xl space-y-3 sm:space-y-4">
            <span className="text-xs uppercase tracking-[0.22em] text-[#9E3D2B] font-semibold block">
              Engineering Mission
            </span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1816]">
              Building for Longevity &amp; Production Reliability
            </h3>
            <p className="text-base sm:text-lg text-[#2C2825] leading-relaxed font-normal">
              Software is most resilient when built with clear architecture, boundary isolation,
              and deep respect for the hardware beneath it. Whether constructing a multi-tenant PostgreSQL schema
              or building low-latency WebSocket pipelines, my commitment is to software that is reliable and performant.
            </p>

            <div className="pt-4 flex items-center justify-between">
              <div>
                <p className="font-script text-2xl sm:text-3xl text-[#9E3D2B]">
                  Om Thakur
                </p>
                <span className="text-xs sm:text-sm uppercase tracking-wider font-mono text-[#383432] font-semibold">
                  Backend Engineer · Mumbai, India
                </span>
              </div>

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dashed border-[#9E3D2B]/60 flex items-center justify-center p-1 shrink-0">
                <span className="text-[7px] sm:text-[8px] font-mono text-[#9E3D2B] font-bold text-center leading-none">
                  VERIFIED<br />SYSTEM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Directory Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-12 border-b border-[#EDE4D9] text-xs sm:text-sm">
          {/* Identity */}
          <div className="space-y-2">
            <span className="font-serif text-lg font-black text-[#1A1816] block">
              Om Thakur<span className="text-[#9E3D2B]">.</span>
            </span>
            <p className="text-sm sm:text-base text-[#2C2825] leading-relaxed font-normal">
              Engineering portfolio and project records for scalable backend architectures, real-time pipelines, and developer tooling.
            </p>
          </div>

          {/* Directory Links */}
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#4A4541] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-[#2C2825] font-medium">
              <li><a href="#sketchbook" className="hover:text-[#9E3D2B] transition-colors">Interactive Book</a></li>
              <li><a href="#workbench" className="hover:text-[#9E3D2B] transition-colors">Live Activity Stream</a></li>
              <li><a href="#projects" className="hover:text-[#9E3D2B] transition-colors">Featured Projects</a></li>
              <li><a href="#skills" className="hover:text-[#9E3D2B] transition-colors">Skills &amp; Technologies</a></li>
              <li><a href="#experience" className="hover:text-[#9E3D2B] transition-colors">Work Experience</a></li>
              <li><a href="#honors" className="hover:text-[#9E3D2B] transition-colors">Honors &amp; Credentials</a></li>
              <li><a href="#faq" className="hover:text-[#9E3D2B] transition-colors">Benchmarks &amp; FAQ</a></li>
            </ul>
          </div>

          {/* Publications & Articles */}
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#4A4541] font-semibold block">
              Writing &amp; Links
            </span>
            <ul className="space-y-2 text-sm text-[#2C2825] font-medium">
              <li>
                <a href="https://blogs.omthakur.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#9E3D2B] transition-colors">
                  GitFool Tech Blog ↗
                </a>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[#9E3D2B] transition-colors font-semibold">
                  Curriculum Vitae (Resume) →
                </Link>
              </li>
              <li>
                <a href="/llms.txt" className="hover:text-[#9E3D2B] transition-colors font-mono text-xs">
                  llms.txt (AI Discovery)
                </a>
              </li>
              <li>
                <a href="/llms-full.txt" className="hover:text-[#9E3D2B] transition-colors font-mono text-xs">
                  llms-full.txt (Full Dossier)
                </a>
              </li>
              <li>
                <a href="/okf/index.md" className="hover:text-[#9E3D2B] transition-colors font-mono text-xs">
                  okf/index.md (OKF Bundle)
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-[#9E3D2B] transition-colors font-mono text-xs">
                  sitemap.xml
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#4A4541] font-semibold block">
              Connect &amp; Code
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/MonsterFlick"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#F3ECE4] hover:bg-[#E2D5C6] text-[#1A1816] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/omthakur2366"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#F3ECE4] hover:bg-[#E2D5C6] text-[#1A1816] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/omthakur2366"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#F3ECE4] hover:bg-[#E2D5C6] text-[#1A1816] transition-colors"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs font-mono text-[#4A4541] pt-2">
              omthakur2366@gmail.com
            </p>
          </div>
        </div>

        {/* ── Bottom Strip ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#4A4541]">
          <span>© 2026 Om Thakur. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#383432] hover:text-[#1A1816] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#9E3D2B]" />
          </button>
        </div>
      </div>
    </footer>
  );
}



