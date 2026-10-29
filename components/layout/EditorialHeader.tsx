"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, FileText, Menu, X } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6F1]/95 backdrop-blur-md border-b border-[#EDE4D9] shadow-xs py-3"
          : "bg-[#FAF6F1]/70 backdrop-blur-xs py-4"
      }`}
    >
      <div className="w-full max-w-7xl xl:max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate("sketchbook")}
            className="text-left group flex items-baseline gap-1"
            aria-label="Om Thakur - Back to top"
          >
            <span className="font-serif text-xl sm:text-2xl font-black text-[#1A1816] tracking-tight group-hover:text-[#C4604A] transition-colors">
              Om Thakur
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4604A]" />
          </button>

          {/* Clean Concise Navigation Links (Semantic crawlable anchors) */}
          <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5E5854]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                }}
                className="hover:text-[#1A1816] transition-colors py-1 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Tools - Clean & Minimal */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-1.5 rounded-md border border-[#EDE4D9] bg-[#FDFCFA] text-[#5E5854] hover:text-[#1A1816] hover:border-[#D4C3AF] transition-colors inline-flex items-center gap-2 text-xs sm:text-sm shadow-2xs font-medium"
              title="Search (⌘K)"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 text-[#C4604A]" />
              <kbd className="hidden sm:inline font-mono text-xs text-[#928B87]">⌘K</kbd>
            </button>

            {/* Terminal REPL Icon Trigger */}
            <button
              onClick={onOpenTerminal}
              className="p-2 sm:p-2 rounded-md border border-[#EDE4D9] bg-[#FDFCFA] text-[#5E5854] hover:text-[#1A1816] hover:border-[#D4C3AF] transition-colors shadow-2xs"
              title="Terminal Console (⌘`)"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4 text-[#566449]" />
            </button>

            {/* Resume Button */}
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#1A1816] text-[#FAF6F1] hover:bg-[#C4604A] transition-colors text-xs sm:text-sm font-semibold shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#C4604A]" />
              <span>Resume</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="p-1.5 text-[#1A1816] md:hidden rounded-md hover:bg-[#F3ECE4]"
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
              className="fixed inset-0 top-[57px] bg-black/25 backdrop-blur-xs z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="relative z-50 md:hidden bg-[#FAF6F1] border-b border-[#EDE4D9] px-5 py-4 shadow-lg"
            >
              {/* Navigation Links (Semantic crawlable anchors) */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-[#2C2825] hover:text-[#C4604A] hover:bg-[#F3ECE4] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              {/* Mobile Quick Actions */}
              <div className="pt-3 mt-2 border-t border-[#EDE4D9] flex items-center gap-2">
                <button
                  onClick={() => {
                    onOpenSearch();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md border border-[#D4C3AF] bg-[#FDFCFA] text-xs font-medium text-[#5E5854]"
                >
                  <Search className="w-3.5 h-3.5 text-[#C4604A]" />
                  <span>Search</span>
                  <kbd className="font-mono text-xs text-[#928B87]">⌘K</kbd>
                </button>

                <button
                  onClick={() => {
                    onOpenTerminal();
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-md border border-[#D4C3AF] bg-[#FDFCFA] text-xs font-medium text-[#5E5854]"
                  title="Terminal"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#566449]" />
                </button>

                <Link
                  href="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-[#1A1816] text-[#FAF6F1] text-xs font-semibold"
                >
                  <FileText className="w-3.5 h-3.5 text-[#C4604A]" />
                  <span>Resume</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

