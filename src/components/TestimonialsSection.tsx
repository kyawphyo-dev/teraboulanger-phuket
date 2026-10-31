"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { TESTIMONIALS_CONFIG } from "@/lib/testimonials-config";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = TESTIMONIALS_CONFIG.slides;
  const currentSlide = slides[currentIndex];

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 400);
  }, [isAnimating, slides.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 400);
  }, [isAnimating, slides.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="w-full bg-bg text-text py-20 lg:py-32 overflow-hidden transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ——— Level 1: Introduction ——— */}
        <div className="w-full pb-10 lg:pb-14 mb-8 lg:mb-10 border-b border-border/10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] sm:text-xs tracking-[0.3em] font-bold text-brand uppercase">
              {TESTIMONIALS_CONFIG.section.tagline}
            </span>
            <div className="h-px w-8 bg-brand/40" />
          </div>

          <h2
            id="testimonials-heading"
            className="w-full font-serif text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.15] tracking-tight"
          >
            {TESTIMONIALS_CONFIG.section.heading}
          </h2>

          <p className="w-full font-sans text-sm sm:text-base text-muted leading-relaxed mt-6">
            {TESTIMONIALS_CONFIG.section.description}
          </p>
        </div>

        {/* ——— Level 2: Testimonial content ——— */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Quote, attribution & controls */}
          <div className="lg:col-span-7">
            <div
              className={`transition-all duration-500 ease-in-out ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {/* Large Quotation Mark */}
              <span className="block text-brand text-5xl lg:text-6xl font-serif leading-none mb-4 select-none">
                “
              </span>

              {/* Testimonial Quote */}
              <blockquote className="mb-8 max-w-2xl">
                <p className="font-serif text-lg sm:text-xl lg:text-[28px] lg:leading-[1.4] text-text italic">
                  {currentSlide.quote}
                </p>
              </blockquote>

              {/* Divider */}
              <div className="w-10 h-px bg-brand/30 mb-8" />

              {/* Partner Attribution */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
                {currentSlide.logo && (
                  <div className="relative w-24 h-8">
                    <Image
                      src={currentSlide.logo}
                      alt={`${currentSlide.partnerName} logo`}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                )}

                <div className="flex flex-col border-l border-border/20 pl-6">
                  <span className="font-sans font-bold text-[11px] tracking-[0.2em] uppercase text-text mb-1">
                    {currentSlide.partnerName}
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] tracking-wide uppercase text-muted">
                    <span>{currentSlide.partnerType}</span>
                    {currentSlide.location && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-border/40" />
                        <span>{currentSlide.location}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    disabled={isAnimating}
                    className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center text-text/40 hover:text-brand hover:border-brand focus-visible:ring-2 focus-visible:ring-brand transition-all duration-300 disabled:opacity-50"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeftIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={isAnimating}
                    className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center text-text/40 hover:text-brand hover:border-brand focus-visible:ring-2 focus-visible:ring-brand transition-all duration-300 disabled:opacity-50"
                    aria-label="Next testimonial"
                  >
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>

                {/* Slide Counter */}
                <div className="font-sans text-[10px] tracking-[0.3em] font-bold text-brand uppercase">
                  {currentSlide.id}{" "}
                  <span className="text-muted/30 mx-1">/</span>{" "}
                  {slides.length.toString().padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Featured Photograph */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-surface group">
              <div
                className={`w-full h-full transition-all duration-700 ease-in-out ${
                  isAnimating
                    ? "opacity-0 scale-105 blur-sm"
                    : "opacity-100 scale-100 blur-0"
                }`}
              >
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Subtle decorative overlay */}
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ——— Internal Icons ———

function ArrowLeftIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 12H5" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
