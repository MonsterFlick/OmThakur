"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, Sparkles, Github, Code2 } from "lucide-react";
import { PROJECTS, type Project } from "@/data/portfolio-data";

interface ProjectsDossierProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ["All", "Distributed Web", "Low-Level Tools", "Autonomous AI", "Mobile Systems"] as const;

export function ProjectsDossier({ onSelectProject }: ProjectsDossierProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  // Partition cards across independent vertical columns so opening a card only pushes down cards directly below it in the same column
  const columns = Array.from({ length: 3 }, (_, colIdx) =>
    filteredProjects
      .map((project, originalIdx) => ({ project, originalIdx }))
      .filter((_, idx) => idx % 3 === colIdx)
  ).filter((col) => col.length > 0);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-[#FAF6F1]"
    >
      <div className="w-full max-w-7xl xl:max-w-[1360px] mx-auto">
        {/* ── Section Masthead ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#EDE4D9]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#9E3D2B] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2
              id="projects-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1816] tracking-tight"
            >
              Featured Projects &amp; Systems
            </h2>
            <p className="text-sm text-[#383432] mt-2 max-w-xl">
              Production systems ranging from cryptographic digital commerce platforms to sub-10ms stateless mathematical Edge APIs, offline AI agents, and Android finance engines.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72">
            <label htmlFor="project-filter-input" className="sr-only">
              Filter projects by title or technology
            </label>
            <input
              id="project-filter-input"
              name="projectFilter"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by title or technology..."
              aria-label="Filter projects by title or technology"
              className="w-full px-3.5 py-2 text-base sm:text-xs rounded border border-[#D4C3AF] bg-[#FDFCFA] text-[#1A1816] placeholder-[#4A4541] focus:outline-none focus:border-[#9E3D2B]"
            />
          </div>
        </div>

        {/* ── Category Filter Pills ── */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="flex items-center sm:flex-wrap gap-2 mb-8 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {CATEGORIES.map((cat) => {
            const count = cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all shrink-0 ${
                  isActive
                    ? "bg-[#1A1816] text-[#FAF6F1] font-semibold shadow-sm"
                    : "bg-[#F3ECE4] text-[#383432] hover:bg-[#E2D5C6] hover:text-[#1A1816]"
                }`}
              >
                <span>{cat}</span>
                <span className={`text-xs font-semibold ${isActive ? "text-[#E07A5F]" : "text-[#4A4541]"}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Independent Column Masonry Grid (opening a card only moves cards directly below it in its column) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {columns.map((colItems, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-6 sm:gap-8 min-w-0">
              {colItems.map(({ project }) => (
                <article
                  key={project.id}
                  className="group relative bg-[#FDFCFA] border border-[#EDE4D9] rounded-md overflow-hidden hover:border-[#D4C3AF] hover:shadow-paper-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail Banner */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[#F3ECE4] border-b border-[#EDE4D9]">
                      <Image
                        src={project.image}
                        alt={`${project.name} — ${project.category} system architecture by Om Thakur`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#FAF6F1]/90 backdrop-blur text-[#9E3D2B] border border-[#EDE4D9]">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4 sm:p-6 space-y-3">
                        <div>
                          <span className="text-xs uppercase font-mono text-[#4A4541] block">
                            {project.edition}
                          </span>
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1816] mt-0.5">
                            {project.name}
                          </h3>
                        </div>

                        <p className="text-sm sm:text-base text-[#2C2825] leading-relaxed font-normal">
                          {project.purpose}
                        </p>

                        {/* Key Metrics Strip (Visible in SSR HTML for AEO/GEO) */}
                        <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                          {project.stats.map((s) => (
                            <div
                              key={s.label}
                              className="p-2 rounded bg-[#FAF6F1] border border-[#EDE4D9] text-center"
                            >
                              <span className="text-[10px] uppercase font-mono text-[#4A4541] block truncate">
                                {s.label}
                              </span>
                              <span className="font-mono text-xs font-bold text-[#1A1816] block truncate mt-0.5">
                                {s.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="p-3.5 rounded bg-[#FAF6F1] border border-[#EDE4D9]">
                          <span className="text-xs uppercase tracking-wider font-bold text-[#9E3D2B] block mb-1">
                            Key Architecture:
                          </span>
                          <p className="text-sm sm:text-base text-[#1A1816] font-semibold leading-relaxed">
                            {project.feature}
                          </p>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-[#F3ECE4] text-[#1A1816] border border-[#D4C3AF]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Crawlable Architecture & Fenced Code Specimen (AR-READ-01 compliant) */}
                        <details className="group/spec rounded border border-[#EDE4D9] bg-[#FAF6F1] text-xs">
                          <summary className="cursor-pointer select-none px-3 py-2 font-mono font-semibold text-[#383432] hover:text-[#1A1816] flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5">
                              <Code2 className="w-3.5 h-3.5 text-[#566449]" />
                              <span>Architecture Spec &amp; Code Specimen</span>
                            </span>
                            <span className="text-[#9E3D2B] group-open/spec:rotate-180 transition-transform">▾</span>
                          </summary>
                          <div className="p-3 pt-2 border-t border-[#EDE4D9] space-y-2.5 text-[#2C2825]">
                            <p className="leading-relaxed">
                              <strong className="text-[#7A3B3B] font-mono uppercase text-[11px]">Challenge: </strong>
                              {project.problemStatement}
                            </p>
                            <ul className="list-disc pl-4 space-y-1 leading-snug">
                              {project.solutionDetails.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>
                            {project.codeSpecimen && (
                              <div className="rounded bg-[#1A1816] text-[#FAF6F1] p-2.5 overflow-x-auto">
                                <div className="flex justify-between text-[10px] font-mono text-[#D6D3D1] pb-1 mb-1 border-b border-[#383432]">
                                  <span>{project.codeSpecimen.filename}</span>
                                  <span>{project.codeSpecimen.language}</span>
                                </div>
                                <pre className="font-mono text-[11px] leading-relaxed overflow-x-auto text-[#EDE4D9]">
                                  <code className={`language-${project.codeSpecimen.language}`}>
                                    {project.codeSpecimen.code}
                                  </code>
                                </pre>
                              </div>
                            )}
                          </div>
                        </details>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="p-4 sm:p-6 pt-3 flex items-center justify-between border-t border-[#EDE4D9]/60 mt-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#9E3D2B] hover:text-[#852C1B] transition-colors"
                      >
                        <span>Full Blueprint</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-3">
                        {project.github && project.github !== project.url && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-[#383432] hover:text-[#1A1816] inline-flex items-center gap-1 font-medium"
                            title={`View ${project.name} source code on GitHub`}
                            aria-label={`View ${project.name} source code on GitHub`}
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        )}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[#383432] hover:text-[#1A1816] inline-flex items-center gap-1 font-medium"
                          title={project.url.includes("github.com") ? `Open ${project.name} GitHub repository` : `Visit ${project.name} live site`}
                          aria-label={project.url.includes("github.com") ? `Open ${project.name} GitHub repository` : `Visit ${project.name} live site`}
                        >
                          <span>{project.url.includes("github.com") ? "Repository" : "Live Site"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
