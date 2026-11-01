"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, ShieldAlert } from "lucide-react";
import { type Project } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[9995] flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 14 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl bg-[#FAF6F1] text-[#2C2825] rounded-2xl border border-[#EDE4D9] shadow-2xl overflow-hidden flex flex-col max-h-[88vh] my-auto"
        >
          {/* Top Bar (Sticky) */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EDE4D9] bg-[#FDFCFA] shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-[#9E3D2B]/10 text-[#9E3D2B] uppercase tracking-wider">
                {project.category}
              </span>
              <span className="font-mono text-xs text-[#5E5854] hidden sm:inline">
                {project.edition}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#5E5854] hover:text-[#1A1816] hover:bg-[#F3ECE4] transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="p-6 sm:p-7 space-y-5 overflow-y-auto">
            {/* Title & Description */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight">
                {project.name}
              </h2>
              <p className="text-sm text-[#4A4541] mt-1.5 leading-relaxed">
                {project.purpose}
              </p>
            </div>

            {/* 3 Symmetrical Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.stats.map((s) => (
                <div
                  key={s.label}
                  className="p-3 rounded-xl bg-[#FDFCFA] border border-[#EDE4D9] text-center flex flex-col justify-center min-h-[68px]"
                >
                  <span className="text-[11px] font-mono text-[#7A746D] block leading-tight">
                    {s.label}
                  </span>
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1A1816] block mt-1 leading-tight">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div>
              <span className="text-[11px] uppercase font-mono tracking-wider text-[#7A746D] font-semibold block mb-2">
                Technologies &amp; Protocols:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F3ECE4] text-[#1A1816] border border-[#D4C3AF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem & Architecture Breakdown (Symmetrical 2-Column Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {/* Challenge */}
              <div className="p-4 rounded-xl bg-[#FDFCFA] border border-[#EDE4D9] flex flex-col justify-start h-full space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#9E3D2B]">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>The Challenge:</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-xl bg-[#FDFCFA] border border-[#EDE4D9] flex flex-col justify-start h-full space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#566449]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Architecture Solution:</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#4A4541] leading-relaxed">
                  {project.solutionDetails.map((sol, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#566449] mt-1.5 shrink-0" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Modal Footer (Sticky Actions) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-6 py-3.5 border-t border-[#EDE4D9] bg-[#FDFCFA] shrink-0">
            <div className="flex items-center gap-2.5">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#9E3D2B] text-white font-medium text-xs hover:bg-[#852C1B] transition-colors cursor-pointer shadow-xs"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#FAF6F1] text-[#1A1816] border border-[#EDE4D9] font-medium text-xs hover:bg-[#EDE4D9] transition-colors cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-mono text-[#5E5854] hover:text-[#1A1816] transition-colors cursor-pointer"
            >
              Close Blueprint ✕
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
