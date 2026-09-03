"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { type Project } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9995] flex items-center justify-center p-2.5 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl bg-[#FAF6F1] text-[#2C2825] rounded-lg border border-[#EDE4D9] shadow-2xl overflow-hidden my-2 sm:my-8 flex flex-col max-h-[92vh]"
        >
          {/* Top Bar (Sticky) */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-[#EDE4D9] bg-[#FDFCFA] shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 truncate">
              <span className="px-2 sm:px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-semibold bg-[#C4604A]/10 text-[#C4604A] uppercase tracking-wider truncate">
                {project.category}
              </span>
              <span className="font-mono text-[11px] sm:text-xs text-[#7A746D] truncate">
                {project.edition}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#7A746D] hover:text-[#1A1816] hover:bg-[#F3ECE4] transition-colors shrink-0 ml-2"
              aria-label="Close Blueprint Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 sm:p-8 space-y-5 sm:space-y-6 overflow-y-auto no-scrollbar">
            {/* Title Header */}
            <div>
              <h2 className="font-serif text-2xl sm:text-4xl font-black text-[#1A1816] tracking-tight">
                {project.name}
              </h2>
              <p className="text-sm sm:text-base text-[#5E5854] mt-1.5 sm:mt-2 leading-relaxed">
                {project.purpose}
              </p>
            </div>

            {/* Banner Image & Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
              <div className="md:col-span-7 relative aspect-video rounded-md overflow-hidden border border-[#EDE4D9] bg-[#EDE4D9]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-5 space-y-3">
                <span className="text-xs uppercase tracking-wider font-mono text-[#7A746D] block">
                  Observed System Metrics:
                </span>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 gap-2">
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between p-2.5 sm:p-3 rounded bg-[#FDFCFA] border border-[#EDE4D9]"
                    >
                      <span className="text-xs text-[#5E5854] font-medium">{s.label}</span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#1A1816]">{s.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider font-mono text-[#7A746D] block mb-2">
                    Core Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] sm:text-xs font-mono font-medium bg-[#F3ECE4] text-[#4A4541] border border-[#E2D5C6]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2 border-t border-[#EDE4D9]">
              <div className="p-4 sm:p-5 rounded-md bg-[#FDFCFA] border border-[#EDE4D9]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A3B3B] block mb-2">
                  The Problem & Challenge:
                </span>
                <p className="text-xs sm:text-sm text-[#5E5854] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-md bg-[#FDFCFA] border border-[#EDE4D9]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#566449] block mb-2">
                  Engineering Architecture & Solution:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#5E5854]">
                  {project.solutionDetails.map((sol, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4604A] mt-1.5 shrink-0" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Code Specimen Block */}
            {project.codeSpecimen && (
              <div className="rounded-md border border-[#EDE4D9] bg-[#1A1816] text-[#FAF6F1] p-3 sm:p-4 overflow-hidden">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#383432] text-xs font-mono text-[#928B87]">
                  <span className="truncate max-w-[200px]">{project.codeSpecimen.filename}</span>
                  <span>{project.codeSpecimen.language}</span>
                </div>
                <pre className="font-mono text-xs leading-relaxed overflow-x-auto text-[#EDE4D9]">
                  <code>{project.codeSpecimen.code}</code>
                </pre>
              </div>
            )}

            {/* Action Buttons Footer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[#EDE4D9]">
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded bg-[#C4604A] text-white font-medium text-xs hover:bg-[#A8493A] transition-colors"
                >
                  <span>Launch Live Blueprint</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#F3ECE4] text-[#1A1816] border border-[#E2D5C6] font-medium text-xs hover:bg-[#E2D5C6] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

              <span className="text-[11px] font-mono text-[#928B87] text-center sm:text-right">
                Archival Blueprint ID: {project.id}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
