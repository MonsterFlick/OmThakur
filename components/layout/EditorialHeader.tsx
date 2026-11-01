"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Menu, X } from "lucide-react";

interface EditorialHeaderProps {
  onOpenSearch: () => void;
  onOpenTerminal?: () => void;
  onNavigate: (sectionId: string) => void;
  currentPlate?: number;
}

export function EditorialHeader({
  onOpenSearch,
  onNavigate,
  currentPlate = 0,
}: EditorialHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", id: "overview", isMatch: currentPlate === 0 || currentPlate === 1 },
    { label: "Projects", id: "projects", isMatch: currentPlate >= 2 && currentPlate <= 6 },
    { label: "Skills", id: "skills", isMatch: currentPlate === 7 },
    { label: "Experience", id: "experience", isMatch: currentPlate === 8 },
    { label: "Live Activity", id: "workbench", isMatch: false },
    { label: "Contact", id: "contact", isMatch: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6F1]/95 backdrop-blur-md border-b border-[#EDE4D9] shadow-xs py-2.5 sm:py-3"
          : "bg-[#FAF6F1]/80 backdrop-blur-xs py-3.5 sm:py-4"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand identity */}
          <button
            onClick={() => onNavigate("overview")}
            className="text-left group flex items-baseline gap-1.5 focus:outline-hidden cursor-pointer"
            aria-label="Om Thakur - Portfolio Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-black text-[#1A1816] tracking-tight group-hover:text-[#9E3D2B] transition-colors">
              Om Thakur
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E3D2B]" />
            <span className="hidden sm:inline font-mono text-xs text-[#7A746D] ml-2 tracking-normal">
              Backend Systems
            </span>
          </button>

          {/* Clean Concise Navigation Links */}
          <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#4A4541]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                }}
                className={`relative hover:text-[#1A1816] transition-colors py-1 tracking-wide ${
                  link.isMatch ? "text-[#1A1816] font-bold" : ""
                }`}
              >
                <span>{link.label}</span>
                {link.isMatch && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9E3D2B] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg border border-[#EDE4D9] bg-[#FDFCFA] text-[#383432] hover:text-[#1A1816] hover:border-[#D4C3AF] transition-colors inline-flex items-center gap-2 text-xs sm:text-sm shadow-2xs font-medium cursor-pointer"
              title="Search (⌘K)"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 text-[#9E3D2B]" />
              <kbd className="hidden sm:inline font-mono text-xs text-[#5E5854]">⌘K</kbd>
            </button>

            {/* Resume Button */}
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1A1816] text-[#FAF6F1] hover:bg-[#9E3D2B] transition-colors text-xs sm:text-sm font-semibold shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#E07A5F]" />
              <span>Resume</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="p-1.5 text-[#1A1816] md:hidden rounded-lg hover:bg-[#F3ECE4] cursor-pointer"
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
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                      link.isMatch
                        ? "bg-[#F3ECE4] text-[#9E3D2B] font-bold"
                        : "text-[#2C2825] hover:text-[#9E3D2B] hover:bg-[#F3ECE4] font-medium"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.isMatch && (
                      <span className="w-2 h-2 rounded-full bg-[#9E3D2B]" />
                    )}
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
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-[#D4C3AF] bg-[#FDFCFA] text-xs font-medium text-[#383432]"
                >
                  <Search className="w-3.5 h-3.5 text-[#9E3D2B]" />
                  <span>Search</span>
                  <kbd className="font-mono text-xs text-[#5E5854]">⌘K</kbd>
                </button>

                <button
                  onClick={() => {
                    onOpenTerminal();
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg border border-[#D4C3AF] bg-[#FDFCFA] text-xs font-medium text-[#383432]"
                  title="Terminal"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#566449]" />
                </button>

                <Link
                  href="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#1A1816] text-[#FAF6F1] text-xs font-semibold"
                >
                  <FileText className="w-3.5 h-3.5 text-[#E07A5F]" />
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
