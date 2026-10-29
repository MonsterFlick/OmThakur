"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { CAREER_CHRONOLOGY } from "@/data/portfolio-data";

export function CareerChronology() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-[#FAF6F1]">
      <div className="w-full max-w-7xl xl:max-w-[1360px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#EDE4D9]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C4604A] font-semibold mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1816] tracking-tight">
              Experience &amp; Career History
            </h2>
            <p className="text-sm sm:text-base text-[#4A4541] mt-2 max-w-xl leading-relaxed">
              Professional history building mission-critical backend systems, distributed pipelines, and production services.
            </p>
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 w-full">
          {CAREER_CHRONOLOGY.map((entry, idx) => (
            <motion.div
              key={entry.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 sm:p-7 md:p-8 rounded-md bg-[#FDFCFA] border border-[#EDE4D9] hover:border-[#D4C3AF] hover:shadow-paper transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-[#EDE4D9]">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="px-2.5 py-1 rounded text-xs sm:text-sm font-mono font-bold bg-[#C4604A]/10 text-[#C4604A] uppercase tracking-wider">
                      {entry.classification}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-[#5E5854] flex items-center gap-1.5 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {entry.period}
                    </span>
                  </div>

                  <span className="font-mono text-xs sm:text-sm text-[#5E5854] flex items-center gap-1.5 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    {entry.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1A1816]">
                    {entry.company}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-[#C4604A] mt-1 mb-2.5">
                    {entry.role}
                  </p>
                  <p className="text-base text-[#2C2825] leading-relaxed mb-4 font-normal">
                    {entry.description}
                  </p>
                </div>

                {/* Key Deliverables List */}
                <div className="p-4 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] space-y-2 mb-4">
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#1A1816] uppercase tracking-wider block">
                    Key Impact &amp; Deliverables:
                  </span>
                  <ul className="space-y-2 text-sm sm:text-base text-[#2C2825] leading-relaxed">
                    {entry.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#C4604A] mt-2 shrink-0" />
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
                    className="px-3 py-1 rounded text-xs sm:text-sm font-mono font-medium bg-[#F3ECE4] text-[#1A1816] border border-[#D4C3AF]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
