"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle, Activity, CheckCircle2, FileText, ArrowUpRight } from "lucide-react";
import { ARCHITECTURE_BENCHMARKS, ENGINEERING_FAQS } from "@/data/portfolio-data";

export function EngineeringFaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-[#FDFCFA]"
    >
      <div className="w-full max-w-7xl xl:max-w-[1360px] mx-auto">
        {/* ── Section Masthead with Freshness Signal ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#EDE4D9]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#9E3D2B] font-semibold mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>Systems Benchmarks &amp; Technical Reference</span>
            </div>
            <h2
              id="faq-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1816] tracking-tight"
            >
              Architecture Comparisons &amp; Engineering FAQ
            </h2>
            <p className="text-sm sm:text-base text-[#4A4541] mt-2 max-w-2xl leading-relaxed">
              Production latency benchmarks, architectural trade-offs, and direct technical answers regarding distributed systems, message queues, and real-time pipelines built by Om Thakur.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FAF6F1] border border-[#EDE4D9] font-mono text-xs text-[#383432]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#566449]" />
              <span>Last updated: <time dateTime="2026-10-29">October 2026</time></span>
            </span>
          </div>
        </div>

        {/* ── 1. Production Architecture Comparison Table (AEO / GEO Table Pattern) ── */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1816]">
              Conventional Approaches vs. Engineered Production Architecture
            </h3>
            <span className="hidden sm:inline font-mono text-xs text-[#4A4541] uppercase tracking-wider">
              Verified Production Telemetry
            </span>
          </div>

          <div
            tabIndex={0}
            role="region"
            aria-label="Production Systems Architecture Benchmarks"
            className="overflow-x-auto rounded-lg border border-[#EDE4D9] bg-[#FAF6F1] shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#9E3D2B]"
          >
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#EDE4D9] bg-[#F3ECE4] font-mono text-xs uppercase tracking-wider text-[#1A1816]">
                  <th scope="col" className="py-3.5 px-4 font-bold">Engineering Domain</th>
                  <th scope="col" className="py-3.5 px-4 font-bold text-[#7A3B3B]">Conventional Bottleneck</th>
                  <th scope="col" className="py-3.5 px-4 font-bold text-[#566449]">Engineered Solution</th>
                  <th scope="col" className="py-3.5 px-4 font-bold text-[#9E3D2B]">Measured Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDE4D9] bg-[#FDFCFA]">
                {ARCHITECTURE_BENCHMARKS.map((row) => (
                  <tr key={row.domain} className="hover:bg-[#FAF6F1]/80 transition-colors">
                    <td className="py-3.5 px-4 align-top font-serif font-bold text-[#1A1816] text-sm sm:text-base">
                      {row.domain}
                      <span className="block font-mono text-[11px] font-normal text-[#4A4541] mt-0.5">
                        {row.verificationContext}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 align-top text-[#383432] leading-relaxed">
                      {row.conventionalApproach}
                    </td>
                    <td className="py-3.5 px-4 align-top text-[#2C2825] font-medium leading-relaxed">
                      {row.engineeredArchitecture}
                    </td>
                    <td className="py-3.5 px-4 align-top font-mono font-bold text-[#9E3D2B] whitespace-nowrap">
                      {row.measuredOutcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 2. Self-Contained Engineering FAQ Grid (AEO / GEO Answer Blocks) ── */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-4 h-4 text-[#9E3D2B]" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1816]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {ENGINEERING_FAQS.map((faq, idx) => (
              <article
                key={faq.question}
                className="p-5 sm:p-6 rounded-md bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#D4C3AF] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-[#EDE4D9]">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#9E3D2B]/10 text-[#9E3D2B]">
                      {faq.category}
                    </span>
                    <span className="font-mono text-xs text-[#4A4541]">
                      Q0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1A1816] mb-2.5 leading-snug">
                    {faq.question}
                  </h4>

                  <p className="text-sm sm:text-base text-[#2C2825] leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Callout Bar */}
          <div className="mt-8 p-4 sm:p-5 rounded-md bg-[#F3ECE4]/80 border border-[#EDE4D9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#1A1816] block">
                Machine-Readable Dossiers &amp; Full Curriculum Vitae
              </span>
              <p className="text-xs sm:text-sm text-[#383432]">
                Inspect the printable ATS resume or access structured markdown context files for AI agents and technical evaluators.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <Link
                href="/resume"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#1A1816] text-[#FAF6F1] hover:bg-[#9E3D2B] transition-colors text-xs font-mono font-semibold"
              >
                <FileText className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>Full Resume (/resume)</span>
              </Link>
              <a
                href="/llms-full.txt"
                className="inline-flex items-center gap-1 px-3 py-2 rounded bg-[#FDFCFA] border border-[#D4C3AF] text-[#1A1816] hover:border-[#9E3D2B] transition-colors text-xs font-mono font-medium"
              >
                <span>llms-full.txt</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9E3D2B]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

