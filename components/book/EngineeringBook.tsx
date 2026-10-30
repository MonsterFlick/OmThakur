"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import { MONOGRAPH_PLATES } from "@/data/portfolio-data";
import { BookPage } from "./BookSpreads";

const TOTAL_PLATES = MONOGRAPH_PLATES.length;

interface EngineeringBookProps {
  onInspectProject?: (projectId: string) => void;
  onNavigateSection?: (sectionId: string) => void;
}

export function EngineeringBook({
  onInspectProject,
  onNavigateSection,
}: EngineeringBookProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState<"next" | "prev">("next");
  const [targetIdx, setTargetIdx] = useState<number | null>(null);
  const [mobileSide, setMobileSide] = useState<"left" | "right">("left");
  const [hasTurned, setHasTurned] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Sync mobile side back to left when turning plate
  useEffect(() => {
    setMobileSide("left");
  }, [currentIdx]);

  const handleMobileTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleMobileTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (deltaX < -45) {
      setHasTurned(true);
      if (mobileSide === "left") {
        setMobileSide("right");
      } else {
        nextPage();
      }
    } else if (deltaX > 45) {
      setHasTurned(true);
      if (mobileSide === "right") {
        setMobileSide("left");
      } else {
        prevPage();
      }
    }
  };

  // Motion values for physical 3D rotation
  const flipAngle = useMotionValue(0); // 0 to -180 for next, 0 to 180 for prev
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragRectRef = useRef<{ left: number; width: number; top: number; height: number } | null>(null);
  const bookContainerRef = useRef<HTMLDivElement | null>(null);

  // Parallax tilt motion values
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  // Dynamic shadow opacities during page lift
  const leafShadowNext = useTransform(flipAngle, [0, -90, -180], [0, 0.45, 0]);
  const leafShadowPrev = useTransform(flipAngle, [0, 90, 180], [0, 0.45, 0]);
  const spineShade = useTransform(
    flipAngle,
    [-180, -90, 0, 90, 180],
    [0.1, 0.5, 0.15, 0.5, 0.1]
  );

  /* ─────────────────────────────────────────────────────────────
     Orchestrated Page Turn Execution
  ───────────────────────────────────────────────────────────── */
  const turnToPage = useCallback(
    (toIndex: number, dir: "next" | "prev") => {
      if (isFlipping || toIndex === currentIdx) return;
      setHasTurned(true);
      setIsFlipping(true);
      setFlipDir(dir);
      setTargetIdx(toIndex);

      const targetAngle = dir === "next" ? -180 : 180;
      flipAngle.set(0);

      const controls = animate(flipAngle, targetAngle, {
        duration: 0.72,
        ease: [0.22, 1, 0.36, 1], // Smooth physical editorial cubic-bezier
        onComplete: () => {
          setCurrentIdx(toIndex);
          setTargetIdx(null);
          setIsFlipping(false);
          flipAngle.set(0);
        },
      });

      return () => controls.stop();
    },
    [isFlipping, currentIdx, flipAngle]
  );

  const nextPage = useCallback(() => {
    const next = (currentIdx + 1) % TOTAL_PLATES;
    turnToPage(next, "next");
  }, [currentIdx, turnToPage]);

  const prevPage = useCallback(() => {
    const prev = (currentIdx - 1 + TOTAL_PLATES) % TOTAL_PLATES;
    turnToPage(prev, "prev");
  }, [currentIdx, turnToPage]);

  const jumpToPlate = useCallback(
    (target: number) => {
      if (target === currentIdx || isFlipping) return;
      const dir = target > currentIdx ? "next" : "prev";
      turnToPage(target, dir);
    },
    [currentIdx, isFlipping, turnToPage]
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      e.preventDefault();
      if (e.key === "ArrowRight") nextPage();
      else prevPage();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextPage, prevPage]);

  /* ─────────────────────────────────────────────────────────────
     Interactive Drag to Turn Gesture
  ───────────────────────────────────────────────────────────── */
  const handlePointerDown = (e: React.PointerEvent) => {
    if (isFlipping || e.button !== 0 || !bookContainerRef.current) return;
    const rect = bookContainerRef.current.getBoundingClientRect();
    dragRectRef.current = rect;
    const isRightHalf = e.clientX - rect.left > rect.width * 0.5;

    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    const dir = isRightHalf ? "next" : "prev";
    const dest = isRightHalf
      ? (currentIdx + 1) % TOTAL_PLATES
      : (currentIdx - 1 + TOTAL_PLATES) % TOTAL_PLATES;

    setFlipDir(dir);
    setTargetIdx(dest);
    setIsFlipping(true);
    flipAngle.set(0);

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !bookContainerRef.current) return;
    const rect = dragRectRef.current || bookContainerRef.current.getBoundingClientRect();
    const deltaX = e.clientX - dragStartXRef.current;
    const halfW = rect.width * 0.5;

    if (flipDir === "next") {
      // Dragging left (negative deltaX)
      const progress = Math.max(0, Math.min(1, -deltaX / (halfW * 0.9)));
      flipAngle.set(-progress * 180);
    } else {
      // Dragging right (positive deltaX)
      const progress = Math.max(0, Math.min(1, deltaX / (halfW * 0.9)));
      flipAngle.set(progress * 180);
    }
  };

  const handlePointerUp = () => {
    dragRectRef.current = null;
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const cur = flipAngle.get();
    const destIdx = targetIdx ?? currentIdx;

    if (flipDir === "next") {
      if (cur < -55) {
        // Complete flip forward
        animate(flipAngle, -180, {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          onComplete: () => {
            setCurrentIdx(destIdx);
            setTargetIdx(null);
            setIsFlipping(false);
            flipAngle.set(0);
          },
        });
      } else {
        // Cancel and snap back
        animate(flipAngle, 0, {
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
          onComplete: () => {
            setTargetIdx(null);
            setIsFlipping(false);
            flipAngle.set(0);
          },
        });
      }
    } else {
      if (cur > 55) {
        // Complete flip backward
        animate(flipAngle, 180, {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          onComplete: () => {
            setCurrentIdx(destIdx);
            setTargetIdx(null);
            setIsFlipping(false);
            flipAngle.set(0);
          },
        });
      } else {
        // Cancel and snap back
        animate(flipAngle, 0, {
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
          onComplete: () => {
            setTargetIdx(null);
            setIsFlipping(false);
            flipAngle.set(0);
          },
        });
      }
    }
  };

  const stageRectRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

  // Subtle Mouse Parallax Hover
  const handleStagePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType === "touch" || isDraggingRef.current || !bookContainerRef.current) return;
    if (!stageRectRef.current) {
      stageRectRef.current = bookContainerRef.current.getBoundingClientRect();
    }
    const r = stageRectRef.current;
    if (!r || !r.width) return;
    const nx = (e.clientX - (r.left + r.width / 2)) / (r.width * 0.5);
    const ny = (e.clientY - (r.top + r.height / 2)) / (r.height * 0.5);
    tiltY.set(Math.max(-5, Math.min(5, nx * 5)));
    tiltX.set(Math.max(-3.5, Math.min(3.5, -ny * 3.5)));
  };

  const handleStagePointerLeave = () => {
    stageRectRef.current = null;
    animate(tiltX, 0, { duration: 0.5 });
    animate(tiltY, 0, { duration: 0.5 });
  };

  const activePlate = MONOGRAPH_PLATES[currentIdx];
  const nextTargetPlate = targetIdx !== null ? targetIdx : currentIdx;

  return (
    <section className="relative pt-20 md:pt-24 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-gradient-to-b from-[#FAF6F1] via-[#FDFCFA] to-[#FAF6F1]">
      <div className="w-full max-w-7xl xl:max-w-[1360px] mx-auto">
        {/* ── Top Masthead Information Bar ── */}
        <div className="flex items-center justify-between pb-3.5 mb-6 border-b border-[#EDE4D9] text-xs font-mono text-[#4A4541]">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#566449] animate-pulse shrink-0" />
            <span className="font-medium text-[#1A1816] tracking-wide whitespace-nowrap">
              Production Architecture &amp; Systems
            </span>
            <span className="hidden sm:inline text-[#544E49]">/</span>
            <span className="hidden sm:inline text-[#4A4541] text-xs whitespace-nowrap">
              Low-Latency APIs · Distributed Queues · Real-Time Pipelines
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#9E3D2B] shrink-0 whitespace-nowrap">
            <span className="hidden sm:inline text-[#4A4541]">Interactive Volume</span>
            <span className="hidden sm:inline text-[#544E49]">·</span>
            <span className="font-semibold">{TOTAL_PLATES} Chapters</span>
          </div>
        </div>

        {/* ── Book Hero Title ── */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#F3ECE4] border border-[#E2D5C6] text-xs font-semibold text-[#4A4541] mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#9E3D2B]" />
            <span>Interactive Engineering Volume</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1816] tracking-tight leading-tight">
            Om Thakur — Scalable Backends &amp;{" "}
            <span className="italic font-serif font-normal text-[#9E3D2B] block sm:inline">
              Distributed Systems
            </span>
          </h1>

          <p className="text-xs font-mono text-[#383432] mt-2">
            Flip through the pages or press arrow keys (← / →)
          </p>
        </div>

        {/* ── 3D Physical Book Stage (Dual Mode: Desktop 3D Spread / Mobile Single-Page Leaf) ── */}
        <div className="flex flex-col items-center gap-5 w-full">
          
          {/* 1. DESKTOP STAGE (≥ md: Dual-Page 3D Open Book) */}
          <div
            className="hidden md:flex items-center justify-center w-full max-w-[1360px] relative select-none"
            onPointerMove={handleStagePointerMove}
            onPointerLeave={handleStagePointerLeave}
          >
            {/* Left Chevron Button */}
            <button
              onClick={prevPage}
              disabled={isFlipping}
              className="p-2.5 sm:p-3 text-[#4A4541] hover:text-[#1A1816] disabled:opacity-30 transition-all rounded-full hover:bg-[#F3ECE4] z-30 mr-2 md:mr-3 shrink-0 shadow-xs border border-[#EDE4D9] bg-[#FDFCFA]"
              aria-label="Previous Page"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* The Hardcover Open Book Container */}
            <div className="w-full max-w-[1240px] xl:max-w-[1320px] [perspective:2000px]">
              <motion.div
                ref={bookContainerRef}
                style={{
                  rotateX: tiltX,
                  rotateY: tiltY,
                  transformStyle: "preserve-3d",
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="relative aspect-[16/10.4] min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] max-h-[660px] w-full rounded-lg shadow-paper-lg border border-[#EDE4D9] bg-[#FAF6F1] overflow-hidden cursor-grab active:cursor-grabbing select-none"
              >
                {/* ── 1. STATIC UNDERNEATH SPREAD ── */}
                <div className="absolute inset-0 grid grid-cols-2 z-0">
                  {/* Left Slot */}
                  <div className="h-full w-full overflow-hidden">
                    <BookPage
                      plateIndex={isFlipping && flipDir === "prev" ? nextTargetPlate : currentIdx}
                      side="left"
                      onInspectProject={onInspectProject}
                    />
                  </div>

                  {/* Right Slot */}
                  <div className="h-full w-full overflow-hidden">
                    <BookPage
                      plateIndex={isFlipping && flipDir === "next" ? nextTargetPlate : currentIdx}
                      side="right"
                      onInspectProject={onInspectProject}
                    />
                  </div>
                </div>

                {/* ── 2. DYNAMIC TURNING LEAF (3D FLIPPING PAGE) ── */}
                {isFlipping && flipDir === "next" && (
                  <motion.div
                    style={{
                      rotateY: flipAngle,
                      transformOrigin: "left center",
                      transformStyle: "preserve-3d",
                    }}
                    className="absolute top-0 bottom-0 left-1/2 w-1/2 z-20 shadow-2xl overflow-visible pointer-events-none"
                  >
                    {/* Front Face of Turning Leaf (Right half of Current Spread) */}
                    <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden bg-[#FDFCFA]">
                      <BookPage
                        plateIndex={currentIdx}
                        side="right"
                        onInspectProject={onInspectProject}
                      />
                      <motion.div
                        style={{ opacity: leafShadowNext }}
                        className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none"
                      />
                    </div>

                    {/* Back Face of Turning Leaf (Left half of Target Spread) */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden bg-[#FAF6F1]">
                      <BookPage
                        plateIndex={nextTargetPlate}
                        side="left"
                        onInspectProject={onInspectProject}
                      />
                      <motion.div
                        style={{ opacity: leafShadowNext }}
                        className="absolute inset-0 bg-gradient-to-l from-white/30 via-transparent to-black/20 pointer-events-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* ── 3. DYNAMIC TURNING LEAF (PREVIOUS PAGE) ── */}
                {isFlipping && flipDir === "prev" && (
                  <motion.div
                    style={{
                      rotateY: flipAngle,
                      transformOrigin: "right center",
                      transformStyle: "preserve-3d",
                    }}
                    className="absolute top-0 bottom-0 left-0 w-1/2 z-20 shadow-2xl overflow-visible pointer-events-none"
                  >
                    {/* Front Face of Turning Leaf (Left half of Current Spread) */}
                    <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden bg-[#FAF6F1]">
                      <BookPage
                        plateIndex={currentIdx}
                        side="left"
                        onInspectProject={onInspectProject}
                      />
                      <motion.div
                        style={{ opacity: leafShadowPrev }}
                        className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/10 to-transparent pointer-events-none"
                      />
                    </div>

                    {/* Back Face of Turning Leaf (Right half of Target Spread) */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(-180deg)] overflow-hidden bg-[#FDFCFA]">
                      <BookPage
                        plateIndex={nextTargetPlate}
                        side="right"
                        onInspectProject={onInspectProject}
                      />
                      <motion.div
                        style={{ opacity: leafShadowPrev }}
                        className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-black/20 pointer-events-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* ── 4. CENTER SPINE CREASE & SHADOW ── */}
                <motion.div
                  style={{ opacity: spineShade }}
                  className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 z-25 pointer-events-none bg-gradient-to-r from-black/20 via-black/40 to-black/20"
                />
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px z-30 pointer-events-none bg-[#D4C3AF]" />
              </motion.div>
            </div>

            {/* Right Chevron Button */}
            <button
              onClick={nextPage}
              disabled={isFlipping}
              className="p-2.5 sm:p-3 text-[#4A4541] hover:text-[#1A1816] disabled:opacity-30 transition-all rounded-full hover:bg-[#F3ECE4] z-30 ml-2 md:ml-3 shrink-0 shadow-xs border border-[#EDE4D9] bg-[#FDFCFA]"
              aria-label="Next Page"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* 2. MOBILE STAGE (< md: Single-Page Leaf Presentation with Touch Swiping) */}
          <div className="block md:hidden w-full max-w-xl mx-auto">
            <div
              className="w-full rounded-lg shadow-paper-lg border-2 border-[#D4C3AF] bg-[#FAF6F1] overflow-hidden"
              onTouchStart={handleMobileTouchStart}
              onTouchEnd={handleMobileTouchEnd}
            >
              {/* Top Mobile Plate Bar with Side Toggle Switch */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#F3ECE4] border-b border-[#EDE4D9] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9E3D2B] animate-pulse" />
                  <span className="font-bold text-[#1A1816] text-xs">
                    {activePlate.plateNumber}
                  </span>
                </div>

                {/* Page Switcher Pill */}
                <div className="inline-flex rounded-full bg-[#EDE4D9] p-0.5 text-xs">
                  <button
                    onClick={() => {
                      setHasTurned(true);
                      setMobileSide("left");
                    }}
                    className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                      mobileSide === "left"
                        ? "bg-[#1A1816] text-[#FAF6F1] shadow-xs"
                        : "text-[#383432] hover:text-[#1A1816]"
                    }`}
                  >
                    Side A
                  </button>
                  <button
                    onClick={() => {
                      setHasTurned(true);
                      setMobileSide("right");
                    }}
                    className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                      mobileSide === "right"
                        ? "bg-[#1A1816] text-[#FAF6F1] shadow-xs"
                        : "text-[#383432] hover:text-[#1A1816]"
                    }`}
                  >
                    Side B
                  </button>
                </div>
              </div>

              {/* Mobile Page Content Leaf with Smooth Transition */}
              <div className="min-h-[580px] sm:min-h-[640px] flex flex-col justify-between">
                {hasTurned ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentIdx}-${mobileSide}`}
                      initial={{ opacity: 0, x: mobileSide === "right" ? 12 : -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: mobileSide === "right" ? -12 : 12 }}
                      transition={{ duration: 0.22 }}
                      className="flex-1 flex flex-col justify-between"
                    >
                      <BookPage
                        plateIndex={currentIdx}
                        side={mobileSide}
                        onInspectProject={onInspectProject}
                      />
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="flex-1 flex flex-col justify-between">
                    <BookPage
                      plateIndex={currentIdx}
                      side={mobileSide}
                      onInspectProject={onInspectProject}
                    />
                  </div>
                )}
              </div>

              {/* Touch Swipe and Nav Tip */}
              <div className="px-3 py-2 bg-[#F3ECE4]/80 border-t border-[#EDE4D9] flex items-center justify-between text-xs font-mono text-[#4A4541]">
                <span>← Swipe to turn →</span>
                <span className="text-[#9E3D2B] font-medium">
                  {mobileSide === "left" ? "Side A" : "Side B"} of Chapter {currentIdx + 1}
                </span>
              </div>
            </div>

            {/* Mobile Controls: Previous / Counter / Next */}
            <div className="flex items-center justify-between gap-3 mt-4 w-full">
              <button
                onClick={prevPage}
                disabled={isFlipping}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#F3ECE4] hover:bg-[#E2D5C6] active:bg-[#D4C3AF] text-[#1A1816] border border-[#EDE4D9] text-xs font-mono font-semibold transition-colors disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4 text-[#9E3D2B]" />
                <span>Previous</span>
              </button>

              <div className="px-3 py-2 rounded-md bg-[#FAF6F1] border border-[#EDE4D9] text-center shrink-0">
                <span className="font-mono text-xs font-bold text-[#9E3D2B]">
                  {String(currentIdx + 1).padStart(2, "0")} / {TOTAL_PLATES}
                </span>
              </div>

              <button
                onClick={nextPage}
                disabled={isFlipping}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#F3ECE4] hover:bg-[#E2D5C6] active:bg-[#D4C3AF] text-[#1A1816] border border-[#EDE4D9] text-xs font-mono font-semibold transition-colors disabled:opacity-40"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 text-[#9E3D2B]" />
              </button>
            </div>
          </div>

          {/* ── Active Plate Title & Position ── */}
          <div className="flex flex-col items-center justify-center text-center mt-2 px-4">
            <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#9E3D2B]">
              {activePlate.plateNumber} · {activePlate.category}
            </span>
            <p className="font-serif font-black text-xl sm:text-2xl text-[#1A1816] mt-1">
              {activePlate.title}
            </p>
            <p className="text-xs sm:text-sm text-[#4A4541] mt-1 max-w-lg">
              {activePlate.subtitle}
            </p>
          </div>

          {/* ── Plate Index Navigation Tabs (Scrollable on Mobile, Centered on Desktop) ── */}
          <div className="flex items-center justify-start md:justify-center gap-1.5 max-w-6xl 2xl:max-w-7xl mx-auto pt-2 overflow-x-auto no-scrollbar w-full px-2 py-1">
            {MONOGRAPH_PLATES.map((p, idx) => {
              const isActive = idx === currentIdx;
              return (
                <button
                  key={p.id}
                  onClick={() => jumpToPlate(idx)}
                  disabled={isFlipping}
                  className={`px-3.5 py-2 rounded text-xs sm:text-sm font-mono transition-all shrink-0 ${
                    isActive
                      ? "bg-[#1A1816] text-[#FAF6F1] font-bold shadow-sm ring-1 ring-[#9E3D2B]"
                      : "bg-[#F3ECE4] text-[#383432] hover:bg-[#E2D5C6] hover:text-[#1A1816] font-medium"
                  }`}
                >
                  <span className={`${isActive ? "text-[#E07A5F]" : "text-[#9E3D2B]"} font-bold mr-1.5`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{p.slug.toUpperCase()}</span>
                </button>
              );
            })}
          </div>

          {/* ── SSR-Accessible 10-Chapter Monograph Index & Case Studies (AR-READ-01) ── */}
          <details className="w-full max-w-5xl mx-auto mt-2 rounded-md border border-[#EDE4D9] bg-[#FDFCFA] px-4 py-3 text-left shadow-2xs group">
            <summary className="cursor-pointer font-mono text-xs uppercase tracking-wider text-[#383432] hover:text-[#9E3D2B] font-semibold flex items-center justify-between select-none">
              <span>Full 10-Chapter Monograph Index &amp; Database RCA Case Studies (Complete Text Archive)</span>
              <span className="text-[#9E3D2B] group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <div className="mt-4 pt-4 border-t border-[#EDE4D9] space-y-5 text-xs sm:text-sm text-[#4A4541] leading-relaxed">
              <div className="grid sm:grid-cols-2 gap-4">
                {MONOGRAPH_PLATES.map((plate, idx) => (
                  <div key={plate.id} className="p-3 rounded bg-[#FAF6F1] border border-[#EDE4D9]">
                    <div className="flex items-center justify-between font-mono text-xs text-[#9E3D2B] font-bold mb-1">
                      <span>{plate.plateNumber} · {plate.category}</span>
                      <button
                        type="button"
                        onClick={() => jumpToPlate(idx)}
                        className="underline hover:text-[#1A1816]"
                      >
                        Open Chapter →
                      </button>
                    </div>
                    <p className="font-serif font-bold text-[#1A1816] text-sm">{plate.title}</p>
                    <p className="text-xs text-[#383432] mt-0.5">{plate.subtitle}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded bg-[#FAF6F1] border border-[#EDE4D9] space-y-2">
                <p className="font-mono text-xs uppercase tracking-wider font-bold text-[#9E3D2B]">
                  Chapter 02 &amp; 09 Case Study — Production Database Outage RCA &amp; Indexing Optimization
                </p>
                <p>
                  During a production database incident at Sumeru Technology Solutions, Om Thakur identified that a legacy
                  payment-related cron job was repeatedly retrying failed HTTP requests every 15 minutes without backoff or
                  idempotency locks, generating simultaneous request bursts that exhausted PostgreSQL connections. Replacing
                  the cron polling loop with an event-driven <strong>Flexbase message queue</strong> with exponential backoff
                  and dead-letter routing reduced synchronization latency from <strong>15 minutes to 4 seconds (99.5% faster)</strong>{" "}
                  and eliminated retry-storm crashes.
                </p>
                <p>
                  For entitlement verification queries under burst webhook load, replacing sequential table scans{" "}
                  (<code>Seq Scan on orders · Execution Time: 840.2 ms</code>) with a partial covering B-Tree index{" "}
                  (<code>CREATE INDEX CONCURRENTLY idx_orders_entitlement_covering ON orders (user_id, payment_status) INCLUDE (asset_id, hmac_verified_at) WHERE payment_status = &apos;captured&apos;;</code>){" "}
                  achieved an <strong>Index-Only Scan</strong> with heap fetches = 0 and execution time reduced to{" "}
                  <strong>0.11 ms (99.98% latency reduction)</strong>.
                </p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

