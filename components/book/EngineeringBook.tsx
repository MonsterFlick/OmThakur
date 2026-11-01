"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { MONOGRAPH_PLATES } from "@/data/portfolio-data";
import { BookPage } from "./BookSpreads";

const TOTAL_PLATES = MONOGRAPH_PLATES.length;

interface EngineeringBookProps {
  onInspectProject?: (projectId: string) => void;
  onNavigateSection?: (sectionId: string) => void;
  requestedPlate?: number | null;
  onPlateChange?: (plateIndex: number) => void;
}

export function EngineeringBook({
  onInspectProject,
  onNavigateSection,
  requestedPlate,
  onPlateChange,
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
          onPlateChange?.(toIndex);
          setTargetIdx(null);
          setIsFlipping(false);
          flipAngle.set(0);
        },
      });

      return () => controls.stop();
    },
    [isFlipping, currentIdx, flipAngle, onPlateChange]
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

  // External plate navigation request
  useEffect(() => {
    if (
      requestedPlate !== undefined &&
      requestedPlate !== null &&
      requestedPlate !== currentIdx &&
      !isFlipping
    ) {
      jumpToPlate(requestedPlate);
    }
  }, [requestedPlate, currentIdx, isFlipping, jumpToPlate]);

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
      const progress = Math.max(0, Math.min(1, -deltaX / (halfW * 0.9)));
      flipAngle.set(-progress * 180);
    } else {
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
        animate(flipAngle, -180, {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          onComplete: () => {
            setCurrentIdx(destIdx);
            onPlateChange?.(destIdx);
            setTargetIdx(null);
            setIsFlipping(false);
            flipAngle.set(0);
          },
        });
      } else {
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
        animate(flipAngle, 180, {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          onComplete: () => {
            setCurrentIdx(destIdx);
            onPlateChange?.(destIdx);
            setTargetIdx(null);
            setIsFlipping(false);
            flipAngle.set(0);
          },
        });
      } else {
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
    tiltY.set(Math.max(-4, Math.min(4, nx * 4)));
    tiltX.set(Math.max(-3, Math.min(3, -ny * 3)));
  };

  const handleStagePointerLeave = () => {
    stageRectRef.current = null;
    animate(tiltX, 0, { duration: 0.5 });
    animate(tiltY, 0, { duration: 0.5 });
  };

  const activePlate = MONOGRAPH_PLATES[currentIdx];
  const nextTargetPlate = targetIdx !== null ? targetIdx : currentIdx;

  return (
    <section
      id="sketchbook"
      className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-[#FAF6F1] overflow-hidden"
    >
      <div className="relative w-full max-w-[1400px] mx-auto">
        {/* ── 3D Physical Book Stage (Dual Mode: Desktop 3D Spread / Mobile Single-Page Leaf) ── */}
        <div className="flex flex-col items-center gap-6 w-full">
          
          {/* 1. DESKTOP STAGE (≥ md: Dual-Page 3D Open Book with Full-Width Studio Canvas) */}
          <div
            className="hidden md:flex items-center justify-center w-full relative select-none gap-3 lg:gap-6"
            onPointerMove={handleStagePointerMove}
            onPointerLeave={handleStagePointerLeave}
          >
            {/* Left Page Turn Button */}
            <button
              onClick={prevPage}
              disabled={isFlipping}
              className="group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full text-[#4A4541] hover:text-[#1A1816] disabled:opacity-25 transition-all hover:bg-[#F3ECE4] z-30 shrink-0 shadow-xs hover:shadow-md border border-[#EDE4D9] bg-[#FDFCFA] active:scale-95 cursor-pointer"
              aria-label="Previous Chapter"
              title="Previous Chapter (← Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5 text-[#9E3D2B] group-hover:-translate-x-0.5 transition-transform" />
              <span className="font-mono text-xs font-semibold hidden xl:inline">
                Prev
              </span>
            </button>

            {/* The Hardcover Open Book Container (Expanded to eliminate empty bars) */}
            <div className="w-full max-w-[1040px] xl:max-w-[1160px] 2xl:max-w-[1240px] [perspective:2000px]">
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
                className="relative h-[560px] lg:h-[600px] xl:h-[630px] w-full rounded-xl shadow-paper-lg border border-[#EDE4D9] bg-[#FAF6F1] overflow-hidden cursor-grab active:cursor-grabbing select-none"
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

                {/* ── 2. DYNAMIC TURNING LEAF (3D FLIPPING PAGE FORWARD) ── */}
                {isFlipping && flipDir === "next" && (
                  <motion.div
                    style={{
                      rotateY: flipAngle,
                      transformOrigin: "left center",
                      transformStyle: "preserve-3d",
                    }}
                    className="absolute top-0 bottom-0 left-1/2 w-1/2 z-20 shadow-2xl overflow-visible pointer-events-none"
                  >
                    {/* Front Face of Turning Leaf */}
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

                    {/* Back Face of Turning Leaf */}
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
                    {/* Front Face of Turning Leaf */}
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

                    {/* Back Face of Turning Leaf */}
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

            {/* Right Page Turn Button */}
            <button
              onClick={nextPage}
              disabled={isFlipping}
              className="group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full text-[#4A4541] hover:text-[#1A1816] disabled:opacity-25 transition-all hover:bg-[#F3ECE4] z-30 shrink-0 shadow-xs hover:shadow-md border border-[#EDE4D9] bg-[#FDFCFA] active:scale-95 cursor-pointer"
              aria-label="Next Chapter"
              title="Next Chapter (→ Right Arrow)"
            >
              <span className="font-mono text-xs font-semibold hidden xl:inline">
                Next
              </span>
              <ChevronRight className="w-5 h-5 text-[#9E3D2B] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* 2. MOBILE STAGE (< md: Single-Page Leaf Presentation with Touch Swiping) */}
          <div className="block md:hidden w-full max-w-md mx-auto">
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
                    className={`px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer ${
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
                    className={`px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer ${
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
              <div className="min-h-[470px] sm:min-h-[490px] flex flex-col justify-between">
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
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#F3ECE4] hover:bg-[#E2D5C6] active:bg-[#D4C3AF] text-[#1A1816] border border-[#EDE4D9] text-xs font-mono font-semibold transition-colors disabled:opacity-40 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 text-[#9E3D2B]" />
                <span>Previous</span>
              </button>

              <div className="px-3 py-2 rounded-md bg-[#FAF6F1] border border-[#EDE4D9] text-center shrink-0">
                <span className="font-mono text-xs font-medium text-[#9E3D2B]">
                  {String(currentIdx + 1).padStart(2, "0")} / {TOTAL_PLATES}
                </span>
              </div>

              <button
                onClick={nextPage}
                disabled={isFlipping}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#F3ECE4] hover:bg-[#E2D5C6] active:bg-[#D4C3AF] text-[#1A1816] border border-[#EDE4D9] text-xs font-mono font-semibold transition-colors disabled:opacity-40 cursor-pointer"
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
            <p className="font-serif font-semibold text-lg sm:text-xl text-[#1A1816] mt-1">
              {activePlate.title}
            </p>
            <p className="text-xs sm:text-sm text-[#5E5854] mt-1 max-w-lg">
              {activePlate.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
