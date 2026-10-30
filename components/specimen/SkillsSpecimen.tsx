"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-[#FDFCFA]">
      <div className="w-full max-w-7xl xl:max-w-[1360px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#EDE4D9]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#9E3D2B] font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Expertise</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1816] tracking-tight">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm sm:text-base text-[#4A4541] mt-2 max-w-xl leading-relaxed">
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
              className={`px-3.5 py-2 rounded text-xs sm:text-sm font-mono transition-all shrink-0 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-5 sm:p-6 rounded-md bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#D4C3AF] hover:shadow-paper transition-all flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#4A4541] font-semibold">
                  {skill.category}
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#9E3D2B]">
                  {skill.experience}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1816] mb-2">
                {skill.name}
              </h3>

              <p className="text-sm sm:text-base text-[#2C2825] leading-relaxed font-normal">
                {skill.specimenNote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
