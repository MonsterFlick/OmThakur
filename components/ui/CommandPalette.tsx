"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Terminal, FileText, Radio } from "lucide-react";
import { PROJECTS, SKILL_SPECIMENS } from "@/data/portfolio-data";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
  onOpenTerminal?: () => void;
  onNavigate?: (id: string) => void;
}

export function CommandPalette({
  open,
  onClose,
  onSelectProject,
  onOpenTerminal,
  onNavigate,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const filteredProjects = PROJECTS.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.purpose.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSkills = SKILL_SPECIMENS.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-14 sm:pt-28 px-3 sm:px-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-xl bg-[#FAF6F1] text-[#2C2825] rounded-lg border border-[#EDE4D9] shadow-2xl overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 px-3.5 py-3 sm:px-4 sm:py-3.5 border-b border-[#EDE4D9] bg-[#FDFCFA]">
            <Search className="w-4 h-4 text-[#9E3D2B]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, skills, or actions..."
              className="flex-1 bg-transparent text-base sm:text-sm text-[#1A1816] placeholder-[#4A4541] focus:outline-none font-sans"
            />
            <button
              onClick={onClose}
              className="p-1 rounded text-[#4A4541] hover:text-[#1A1816]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Command Items */}
          <div className="max-h-96 overflow-y-auto p-3 space-y-4 no-scrollbar">
            {/* Quick Actions */}
            <div>
              <span className="text-xs uppercase tracking-wider font-mono text-[#4A4541] px-2 block mb-1">
                Quick Actions
              </span>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    onOpenTerminal?.();
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-2 rounded text-left hover:bg-[#F3ECE4] transition-colors text-xs text-[#1A1816]"
                >
                  <div className="flex items-center gap-2.5">
                    <Terminal className="w-3.5 h-3.5 text-[#9E3D2B]" />
                    <span>Open Terminal REPL</span>
                  </div>
                  <span className="font-mono text-xs text-[#4A4541]">Terminal</span>
                </button>

                <Link
                  href="/resume"
                  onClick={onClose}
                  className="w-full flex items-center justify-between p-2 rounded text-left hover:bg-[#F3ECE4] transition-colors text-xs text-[#1A1816]"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-3.5 h-3.5 text-[#566449]" />
                    <span>View Resume</span>
                  </div>
                  <span className="font-mono text-xs text-[#566449] font-bold">/resume</span>
                </Link>

                <button
                  onClick={() => {
                    onNavigate?.("workbench");
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-2 rounded text-left hover:bg-[#F3ECE4] transition-colors text-xs text-[#1A1816]"
                >
                  <div className="flex items-center gap-2.5">
                    <Radio className="w-3.5 h-3.5 text-[#9E3D2B]" />
                    <span>Live Activity Feed</span>
                  </div>
                  <span className="font-mono text-xs text-[#4A4541]">Stream</span>
                </button>
              </div>
            </div>

            {/* Projects */}
            {filteredProjects.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-wider font-mono text-[#4A4541] px-2 block mb-1">
                  Projects ({filteredProjects.length})
                </span>
                <div className="space-y-1">
                  {filteredProjects.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        onSelectProject?.(p.id);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between p-2 rounded text-left hover:bg-[#F3ECE4] transition-colors text-xs text-[#1A1816]"
                    >
                      <div>
                        <p className="font-medium text-[#1A1816]">{p.name}</p>
                        <p className="text-xs text-[#4A4541]">{p.purpose}</p>
                      </div>
                      <span className="font-mono text-xs text-[#9E3D2B] shrink-0 ml-2">
                        {p.category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {filteredSkills.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-wider font-mono text-[#4A4541] px-2 block mb-1">
                  Skills &amp; Stack ({filteredSkills.length})
                </span>
                <div className="grid grid-cols-2 gap-1">
                  {filteredSkills.slice(0, 6).map((s) => (
                    <div
                      key={s.name}
                      className="p-2 rounded bg-[#FDFCFA] border border-[#EDE4D9] text-xs sm:text-sm"
                    >
                      <span className="font-medium text-[#1A1816] block truncate">{s.name}</span>
                      <span className="text-xs font-mono text-[#9E3D2B]">{s.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-2.5 bg-[#F3ECE4] border-t border-[#EDE4D9] flex items-center justify-between text-xs font-mono text-[#4A4541]">
            <span>Navigate with arrows · Esc to exit</span>
            <span>Om Thakur · Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

