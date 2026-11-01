"use client";

import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { ACADEMIC_HONORS } from "@/data/portfolio-data";

export function AcademicHonors() {
  return (
    <section id="honors" className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-[#FDFCFA]">
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-5 border-b border-[#EDE4D9]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#9E3D2B] font-mono font-semibold mb-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Academic Distinctions</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight">
              Honors &amp; Certified Attestations
            </h2>
            <p className="text-sm text-[#4A4541] mt-1.5 max-w-xl leading-relaxed">
              Academic excellence recognition from Mumbai University and professional verified credentials.
            </p>
          </div>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {ACADEMIC_HONORS.map((honor) => (
            <div
              key={honor.id}
              className="p-4 sm:p-5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#D4C3AF] hover:shadow-2xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EDE4D9]">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#9E3D2B]/10 text-[#9E3D2B]">
                    {honor.badge}
                  </span>
                  <span className="font-mono text-xs font-medium text-[#4A4541]">
                    {honor.date}
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1A1816] mb-1">
                  {honor.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#566449] mb-2">
                  {honor.organization}
                </p>
                <p className="text-xs sm:text-sm text-[#4A4541] leading-relaxed font-normal">
                  {honor.description}
                </p>
              </div>

              {honor.link && (
                <div className="pt-4 mt-4 border-t border-[#EDE4D9]">
                  <a
                    href={honor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-[#9E3D2B] hover:underline"
                  >
                    <span>{honor.linkText || "Verify Credential"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

