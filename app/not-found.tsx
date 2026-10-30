import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, FolderGit2, HelpCircle, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Monograph Plate Not Found | Om Thakur",
  description:
    "The requested page or architectural blueprint could not be located. Return to Om Thakur's backend & distributed systems portfolio or resume.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-[#FAF6F1] text-[#2C2825] font-sans flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="w-full max-w-3xl mx-auto my-auto">
        <div className="p-6 sm:p-10 rounded-lg bg-[#FDFCFA] border border-[#EDE4D9] shadow-paper relative overflow-hidden">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#9E3D2B] via-[#D4C3AF] to-[#566449] absolute top-0 left-0 right-0" />

          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#9E3D2B] font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>HTTP 404 · Unindexed Archive Coordinate</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1A1816] tracking-tight">
            Monograph Plate Not Found
          </h1>

          <p className="text-sm sm:text-base text-[#4A4541] mt-3 leading-relaxed max-w-xl">
            The route you requested does not correspond to an active blueprint or publication in Om Thakur&apos;s
            engineering portfolio. Use the verified directory coordinates below to navigate directly to the
            live systems archive, architecture benchmarks, or curriculum vitae.
          </p>

          <nav aria-label="404 Recovery Navigation" className="grid sm:grid-cols-2 gap-3 mt-8">
            <Link
              href="/"
              className="flex items-center gap-3 p-3.5 rounded-md bg-[#1A1816] text-[#FAF6F1] hover:bg-[#9E3D2B] transition-colors text-xs sm:text-sm font-mono font-semibold"
            >
              <ArrowLeft className="w-4 h-4 text-[#9E3D2B] shrink-0" />
              <span>Return to Portfolio Home (/)</span>
            </Link>

            <Link
              href="/resume"
              className="flex items-center gap-3 p-3.5 rounded-md bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#9E3D2B] text-[#1A1816] transition-colors text-xs sm:text-sm font-mono font-semibold"
            >
              <FileText className="w-4 h-4 text-[#9E3D2B] shrink-0" />
              <span>View Resume &amp; CV (/resume)</span>
            </Link>

            <Link
              href="/#projects"
              className="flex items-center gap-3 p-3.5 rounded-md bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#9E3D2B] text-[#1A1816] transition-colors text-xs sm:text-sm font-mono font-semibold"
            >
              <FolderGit2 className="w-4 h-4 text-[#566449] shrink-0" />
              <span>Featured Systems &amp; Projects (/#projects)</span>
            </Link>

            <Link
              href="/#faq"
              className="flex items-center gap-3 p-3.5 rounded-md bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#9E3D2B] text-[#1A1816] transition-colors text-xs sm:text-sm font-mono font-semibold"
            >
              <HelpCircle className="w-4 h-4 text-[#566449] shrink-0" />
              <span>Architecture Benchmarks &amp; FAQ (/#faq)</span>
            </Link>
          </nav>

          <div className="mt-8 pt-4 border-t border-[#EDE4D9] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#4A4541]">
            <span>Agent &amp; Crawler Discovery:</span>
            <div className="flex items-center gap-4">
              <a href="/llms.txt" className="hover:text-[#9E3D2B] underline">
                /llms.txt
              </a>
              <a href="/llms-full.txt" className="hover:text-[#9E3D2B] underline">
                /llms-full.txt
              </a>
              <a href="/okf/index.md" className="hover:text-[#9E3D2B] underline">
                /okf/index.md
              </a>
              <a href="/sitemap.xml" className="hover:text-[#9E3D2B] underline">
                /sitemap.xml
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

