"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { CAREER_CHRONOLOGY } from "@/data/portfolio-data";

export function CareerChronology() {
  return (
    <section id="experience" className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-[#FAF6F1]">
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-5 border-b border-[#EDE4D9]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#9E3D2B] font-mono font-semibold mb-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight">
              Experience &amp; Career History
            </h2>
            <p className="text-sm text-[#4A4541] mt-1.5 max-w-xl leading-relaxed">
              Professional history building mission-critical backend systems, distributed pipelines, and production services.
            </p>
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 w-full">
          {CAREER_CHRONOLOGY.map((entry) => (
            <div
              key={entry.company}
              className="p-4 sm:p-6 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] hover:border-[#D4C3AF] hover:shadow-2xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-[#EDE4D9]">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="px-2.5 py-1 rounded text-xs sm:text-sm font-mono font-medium bg-[#9E3D2B]/10 text-[#9E3D2B] uppercase tracking-wider">
                      {entry.classification}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-[#5E5854] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {entry.period}
                    </span>
                  </div>

                  <span className="font-mono text-xs sm:text-sm text-[#5E5854] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {entry.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1A1816]">
                    {entry.company}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#9E3D2B] mt-0.5 mb-2">
                    {entry.role}
                  </p>
                  <p className="text-xs sm:text-sm text-[#2C2825] leading-relaxed mb-3 font-normal">
                    {entry.description}
                  </p>
                </div>

                {/* Key Deliverables List */}
                <div className="p-3.5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-1.5 mb-3.5">
                  <span className="text-xs sm:text-sm font-mono font-medium text-[#7A746D] uppercase tracking-wider block">
                    Key Impact &amp; Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#2C2825] leading-relaxed">
                    {entry.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#9E3D2B] mt-2 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#EDE4D9]/60">
                {entry.techUsed.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#F3ECE4] text-[#4A4541] border border-[#D4C3AF]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

