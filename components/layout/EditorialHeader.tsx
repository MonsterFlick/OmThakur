"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, FileText, Menu, X, BookOpen, Clock, Sparkles } from "lucide-react";

interface EditorialHeaderProps {
  onOpenSearch: () => void;
  onOpenTerminal: () => void;
  onNavigate: (sectionId: string) => void;
}

export function EditorialHeader({
  onOpenSearch,
  onOpenTerminal,
  onNavigate,
}: EditorialHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { label: "Monograph", id: "sketchbook" },
    { label: "Live Telemetry", id: "workbench" },
    { label: "Blueprints", id: "projects" },
    { label: "Taxonomy", id: "skills" },
    { label: "Chronology", id: "experience" },
    { label: "Dispatches", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6F1]/90 backdrop-blur-md border-b border-[#EDE4D9] shadow-sm py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Colophon Mark */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate("sketchbook")}
              className="text-left group"
            >
              <span className="font-serif text-xl sm:text-2xl font-black text-[#1A1816] tracking-tight group-hover:text-[#C4604A] transition-colors">
                Om Thakur<span className="text-[#C4604A]">.</span>
              </span>
              <span className="hidden sm:block text-[9px] uppercase font-mono tracking-[0.2em] text-[#928B87]">
                Architect &amp; Backend Engineer
              </span>
            </button>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-[#5E5854]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="hover:text-[#1A1816] transition-colors relative py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live IST clock badge */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F3ECE4] border border-[#EDE4D9] text-[10px] font-mono text-[#7A746D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#566449] animate-pulse" />
              <span>IST {istTime || "14:00 PM"}</span>
            </div>

            {/* ⌘K Search trigger */}
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#D4C3AF] bg-[#FDFCFA] text-xs text-[#5E5854] hover:text-[#1A1816] hover:border-[#C4604A] transition-all shadow-sm"
              title="Search Archives (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-[#C4604A]" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline font-mono text-[9px] px-1 py-0.5 bg-[#EDE4D9] rounded text-[#7A746D]">
                ⌘K
              </kbd>
            </button>

            {/* Live Terminal REPL trigger */}
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1A1816] text-[#FAF6F1] hover:bg-[#C4604A] transition-colors text-xs font-mono font-semibold"
              title="Launch Live Telemetry Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-[#C4604A]" />
              <span className="hidden sm:inline">REPL</span>
            </button>

            {/* Resume button */}
            <Link
              href="/resume"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#F3ECE4] text-[#1A1816] border border-[#E2D5C6] hover:bg-[#E2D5C6] transition-colors text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-[#566449]" />
              <span>Resume</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="p-2 text-[#1A1816] lg:hidden rounded hover:bg-[#F3ECE4]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[60px] bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative z-50 lg:hidden bg-[#FAF6F1] border-b border-[#EDE4D9] px-4 py-5 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto"
            >
              {/* Mobile IST Clock Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EDE4D9] text-xs font-mono text-[#7A746D]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#566449] animate-pulse" />
                  <span className="font-semibold text-[#1A1816]">IST {istTime || "Active"}</span>
                </div>
                <span className="text-[10px] text-[#928B87]">Mumbai Hub</span>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-md text-sm font-serif font-bold text-[#2C2825] hover:text-[#C4604A] hover:bg-[#F3ECE4] active:bg-[#EDE4D9] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-[#928B87]">#</span>
                  </button>
                ))}
              </div>

              {/* Search & Terminal Quick Triggers */}
              <div className="pt-4 mt-3 border-t border-[#EDE4D9] space-y-2">
                <button
                  onClick={() => {
                    onOpenSearch();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-md border border-[#D4C3AF] bg-[#FDFCFA] text-xs text-[#5E5854] hover:text-[#1A1816]"
                >
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#C4604A]" />
                    <span>Search Archives</span>
                  </div>
                  <kbd className="font-mono text-[10px] px-1.5 py-0.5 bg-[#EDE4D9] rounded text-[#7A746D]">
                    ⌘K
                  </kbd>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => {
                      onOpenTerminal();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded bg-[#1A1816] text-[#FAF6F1] text-xs font-mono font-semibold"
                  >
                    <Terminal className="w-3.5 h-3.5 text-[#C4604A]" />
                    <span>REPL Terminal</span>
                  </button>

                  <Link
                    href="/resume"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded bg-[#F3ECE4] text-[#1A1816] border border-[#E2D5C6] text-xs font-semibold hover:bg-[#E2D5C6]"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#566449]" />
                    <span>CV (Resume)</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
