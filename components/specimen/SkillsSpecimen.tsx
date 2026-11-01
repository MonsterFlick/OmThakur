"use client";

import React, { useState } from "react";
import { Layers } from "lucide-react";
import { SKILL_SPECIMENS } from "@/data/portfolio-data";

const CATEGORIES = [
  "All",
  "Backend & Concurrency",
  "Databases & Storage",
  "Infrastructure & Cloud",
  "Languages & Protocols",
] as const;

export function SkillsSpecimen() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills =
    activeCategory === "All"
      ? SKILL_SPECIMENS
      : SKILL_SPECIMENS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-[#FDFCFA]">
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-5 border-b border-[#EDE4D9]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#9E3D2B] font-mono font-semibold mb-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Expertise</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm text-[#4A4541] mt-1.5 max-w-xl leading-relaxed">
              Languages, database engines, concurrency patterns, and cloud platforms tested under production workloads.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center sm:flex-wrap gap-2 mb-8 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all shrink-0 ${
                activeCategory === cat
                  ? "bg-[#1A1816] text-[#FAF6F1] font-semibold shadow-sm"
                  : "bg-[#F3ECE4] text-[#383432] hover:bg-[#E2D5C6] hover:text-[#1A1816]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 sm:p-5 rounded-lg bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#D4C3AF] hover:shadow-2xs transition-all flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#7A746D]">
                  {skill.category}
                </span>
                <span className="font-mono text-xs font-medium text-[#9E3D2B]">
                  {skill.experience}
                </span>
              </div>

              <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1A1816] mb-1.5">
                {skill.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#4A4541] leading-relaxed font-normal">
                {skill.specimenNote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

