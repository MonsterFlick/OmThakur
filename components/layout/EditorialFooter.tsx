"use client";

import React from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUp, Sparkles, Heart } from "lucide-react";

export function EditorialFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF6F1] border-t border-[#EDE4D9] text-[#2C2825] font-sans pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ── Curator Letter & Personal Reflection Card ── */}
        <div className="p-5 sm:p-8 md:p-10 rounded-md bg-[#FDFCFA] border border-[#EDE4D9] shadow-paper mb-12 sm:mb-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-xs uppercase tracking-[0.22em] text-[#C4604A] font-semibold block">
              Author&apos;s Epilogue & Mission
            </span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1816]">
              Building for Longevity in an Era of Transient SaaS
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5854] leading-relaxed">
              Software is most resilient when built with mathematical simplicity, rigorous boundary isolation,
              and deep respect for the hardware beneath it. Whether constructing a multi-tenant PostgreSQL schema
              or tuning low-level operating system frame pacing, my commitment is to software that stands the test of time.
            </p>

            <div className="pt-4 flex items-center justify-between">
              <div>
                <p className="font-script text-2xl sm:text-3xl text-[#C4604A]">
                  Om Thakur
                </p>
                <span className="text-[10px] uppercase tracking-wider font-mono text-[#928B87]">
                  Backend Engineer & System Architect · Mumbai, 2026
                </span>
              </div>

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dashed border-[#C4604A]/60 flex items-center justify-center p-1 shrink-0">
                <span className="text-[7px] sm:text-[8px] font-mono text-[#C4604A] font-bold text-center leading-none">
                  COLOPHON<br />SEAL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Directory & Colophon Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-12 border-b border-[#EDE4D9] text-xs">
          {/* Identity */}
          <div className="space-y-2">
            <span className="font-serif text-lg font-black text-[#1A1816] block">
              Om Thakur<span className="text-[#C4604A]">.</span>
            </span>
            <p className="text-[#5E5854] leading-relaxed">
              The Author&apos;s Engineering Monograph. Registered digital publication recording scalable architectures,
              systems research, and open-source tooling.
            </p>
          </div>

          {/* Directory Links */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#928B87] font-semibold block">
              Volume Directory
            </span>
            <ul className="space-y-1.5 text-[#5E5854]">
              <li><a href="#sketchbook" className="hover:text-[#C4604A] transition-colors">3D Physical Monograph</a></li>
              <li><a href="#workbench" className="hover:text-[#C4604A] transition-colors">Live Telemetry Station</a></li>
              <li><a href="#projects" className="hover:text-[#C4604A] transition-colors">Featured Blueprints</a></li>
              <li><a href="#skills" className="hover:text-[#C4604A] transition-colors">Technical Specimen Matrix</a></li>
              <li><a href="#experience" className="hover:text-[#C4604A] transition-colors">Chronology of Appointments</a></li>
            </ul>
          </div>

          {/* Publications & Articles */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#928B87] font-semibold block">
              External Dispatches
            </span>
            <ul className="space-y-1.5 text-[#5E5854]">
              <li>
                <a href="https://blogs.omthakur.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4604A] transition-colors">
                  GitFool Tech Publication ↗
                </a>
              </li>
              <li>
                <a href="https://rxresu.me/omthakur2366/om" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4604A] transition-colors">
                  Curriculum Vitae (PDF) ↗
                </a>
              </li>
              <li>
                <a href="https://trainings.internshala.com/verify-certificate/?certificate_number=263gl7b3rur" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4604A] transition-colors">
                  Data Science Certification ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#928B87] font-semibold block">
              Public Ledger
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
            <p className="text-[11px] font-mono text-[#928B87] pt-2">
              omthakur2366@gmail.com
            </p>
          </div>
        </div>

        {/* ── Bottom Colophon ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#928B87]">
          <span>© 2026 Om Thakur. Typeset in Playfair Display, Inter &amp; Caveat.</span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#5E5854] hover:text-[#1A1816] transition-colors"
          >
            <span>Return to Masthead</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C4604A]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
