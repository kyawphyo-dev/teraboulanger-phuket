"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import Reveal from "./animations/Reveal";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

interface Slide {
  id: string;
  src: string;
  alt: string;
  label: string;
  caption: string;
}

/**
 * Temporary external reference photography for the hero carousel. The client
 * will supply official Tera Boulanger shots later — swapping each `src` is all
 * that is required, the branded fallback keeps the frame intact meanwhile.
 */
const SLIDES: Slide[] = [
  {
    id: "croissants",
    src: "https://images.unsplash.com/photo-1763207291707-e2cf471ed72b?auto=format&fit=crop&w=1800&q=85",
    alt: "Freshly baked butter croissants with golden laminated layers",
    label: "Signature Croissants",
    caption: "Buttery layers, golden crusts and the art of French lamination.",
  },
  {
    id: "artisan-breads",
    src: "https://images.unsplash.com/photo-1562099870-a3c3f2f3b44d?auto=format&fit=crop&w=1800&q=85",
    alt: "Artisan sourdough and freshly baked bread loaves",
    label: "Artisan Breads",
    caption:
      "From naturally fermented sourdough to soft brioche and Japanese shokupan.",
  },
  {
    id: "pastries-cookies",
    src: "https://images.unsplash.com/photo-1769138885126-701ffae94ee3?auto=format&fit=crop&w=1800&q=85",
    alt: "Assorted pastries and freshly baked cookies",
    label: "Pastries & Cookies",
    caption: "A collection of freshly baked treats for every occasion.",
  },
  {
    id: "coffee-cafe",
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1800&q=85",
    alt: "Freshly prepared coffee served at the café",
    label: "Coffee & Café",
    caption: "Thoughtfully prepared coffee and refreshing beverages.",
  },
];

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeftIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M19 12H5M5 12L11 6M5 12L11 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 22C12 22 7 15.5 7 11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11C17 15.5 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const count = SLIDES.length;

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + count) % count);
  }, [count]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  /** Reveal the branded fallback if a reference photo fails to load. */
  const markFailed = useCallback((id: string) => {
    setFailedImages((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    },
    [goNext, goPrev],
  );

  const activeSlide = SLIDES[current];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-bg text-text"
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-12 pb-14 sm:px-8 sm:pt-16 sm:pb-16 lg:px-12 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ——— LEFT: brand introduction ——— */}
          <StaggerContainer className="flex flex-col items-start lg:col-span-5">
            <StaggerItem className="mb-7 sm:mb-9" distance={16}>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand sm:text-xs">
                <span
                  aria-hidden="true"
                  className="inline-block h-px w-10 bg-brand"
                />
                Artisan French Bakery · Phuket
              </span>
            </StaggerItem>

            <StaggerItem distance={28} duration={0.9}>
              <h1
                id="hero-heading"
                className="font-serif font-medium tracking-tight text-text text-[clamp(2.125rem,9.5vw,2.5rem)] leading-[1.08] sm:text-[clamp(2.5rem,5vw,3rem)] sm:leading-[1.06] lg:text-[clamp(2.375rem,3.4vw,2.625rem)] lg:leading-[1.05] xl:text-[3.125rem]"
              >
                A Taste of <br />
                France,
                <span className="mt-1.5 block text-[0.9em] italic text-brand whitespace-nowrap sm:mt-2">
                  Made in Phuket.
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem className="mt-7 sm:mt-8" distance={16}>
              <p className="max-w-xl text-[15px] leading-[1.75] text-muted sm:text-[16px]">
                Discover the art of baking through handcrafted croissants,
                artisan breads, delicate pastries and freshly prepared coffee.
                From everyday café favourites to thoughtfully prepared treats
                for businesses and special occasions.
              </p>
            </StaggerItem>

            <StaggerItem
              className="mt-9 w-full sm:mt-11 sm:w-auto"
              distance={16}
            >
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/menu"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-[14px] font-semibold text-brand-contrast transition-all duration-200 hover:bg-brand-hover active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:text-[15px]"
                >
                  Explore Our Menu
                  <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 text-[14px] font-semibold text-text transition-all duration-200 hover:border-border-strong hover:bg-surface-alt active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:text-[15px]"
                >
                  <MapPinIcon className="text-brand" />
                  Find Our Bakery
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* ——— RIGHT: product carousel ——— */}
          <div className="relative lg:col-span-7">
            <Reveal effect="fade" delay={0.3}>
              <div
                role="region"
                aria-roledescription="carousel"
                aria-label="Tera Boulanger product highlights"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="rounded-[20px] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <figure className="relative w-full">
                  <div className="relative aspect-4/5 w-full overflow-hidden rounded-[20px] border border-border bg-surface sm:aspect-4/3">
                    {SLIDES.map((slide, index) => {
                      const isActive = index === current;
                      const hasFailed = failedImages[slide.id];
                      return (
                        <div
                          key={slide.id}
                          aria-hidden={!isActive}
                          className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${
                            isActive
                              ? "scale-100 opacity-100"
                              : "pointer-events-none scale-[1.03] opacity-0"
                          }`}
                        >
                          {/* Branded fallback — shown when the photo fails to load */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface-alt bg-gradient-to-b from-brand/10 to-transparent px-8 text-center"
                          >
                            <span className="h-px w-10 bg-brand" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
                              {slide.label}
                            </span>
                          </div>

                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                            onError={() => markFailed(slide.id)}
                            className={`select-none object-cover object-center transition-opacity duration-500 ${
                              hasFailed ? "opacity-0" : "opacity-100"
                            }`}
                            draggable={false}
                          />
                        </div>
                      );
                    })}

                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="Show previous product"
                      className="absolute left-3 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-text backdrop-blur-sm transition-all duration-200 hover:border-border-strong hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    >
                      <ArrowLeftIcon />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      aria-label="Show next product"
                      className="absolute right-3 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-text backdrop-blur-sm transition-all duration-200 hover:border-border-strong hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    >
                      <ArrowRightIcon />
                    </button>
                  </div>

                  <figcaption className="mt-4 flex items-start justify-between gap-4 sm:mt-5">
                    <div aria-live="polite" className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                        {activeSlide.label}
                      </p>
                      <p className="mt-1 text-[14px] leading-snug text-text sm:text-[15px]">
                        {activeSlide.caption}
                      </p>
                    </div>
                    <div
                      role="group"
                      aria-label="Slide navigation"
                      className="flex shrink-0 items-center gap-2 pt-1.5"
                    >
                      {SLIDES.map((slide, index) => {
                        const isActive = index === current;
                        return (
                          <button
                            key={`dot-${slide.id}`}
                            type="button"
                            aria-label={`Show slide ${index + 1}: ${slide.label}`}
                            aria-current={isActive ? "true" : undefined}
                            onClick={() => goTo(index)}
                            className={`h-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                              isActive
                                ? "w-7 bg-brand"
                                : "w-2 bg-border-strong hover:bg-subtle"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
