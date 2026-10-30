"use client";

import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { ACADEMIC_HONORS } from "@/data/portfolio-data";

export function AcademicHonors() {
  return (
    <section id="honors" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-[#FDFCFA]">
      <div className="w-full max-w-7xl xl:max-w-[1360px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#EDE4D9]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#9E3D2B] font-semibold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Academic Distinctions</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1816] tracking-tight">
              Honors &amp; Certified Attestations
            </h2>
            <p className="text-sm sm:text-base text-[#4A4541] mt-2 max-w-xl leading-relaxed">
              Academic excellence recognition from Mumbai University and professional verified credentials.
            </p>
          </div>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {ACADEMIC_HONORS.map((honor) => (
            <div
              key={honor.id}
              className="p-4 sm:p-6 rounded-md bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#D4C3AF] hover:shadow-paper transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EDE4D9]">
                  <span className="px-2.5 py-1 rounded text-xs sm:text-sm font-mono font-bold bg-[#9E3D2B]/10 text-[#9E3D2B]">
                    {honor.badge}
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-medium text-[#4A4541]">
                    {honor.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1816] mb-1.5">
                  {honor.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#566449] mb-3">
                  {honor.organization}
                </p>
                <p className="text-sm sm:text-base text-[#2C2825] leading-relaxed font-normal">
                  {honor.description}
                </p>
              </div>

              {honor.link && (
                <div className="pt-4 mt-4 border-t border-[#EDE4D9]">
                  <a
                    href={honor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#9E3D2B] hover:underline"
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
