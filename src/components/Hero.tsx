"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

interface Slide {
  src: string;
  alt: string;
  category: string;
  caption: string;
}

const SLIDES: Slide[] = [
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80&auto=format&fit=crop",
    alt: "Freshly baked butter croissants on a wooden board",
    category: "Signature Pastry",
    caption: "Butter croissant — a French bakery classic.",
  },
  {
    src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&q=80&auto=format&fit=crop",
    alt: "Inside a French bakery with pastries on display",
    category: "Inside Tera",
    caption: "A closer look at our bakery in Phuket.",
  },
  {
    src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80&auto=format&fit=crop",
    alt: "Bakery storefront with fresh bread and pastries",
    category: "Visit Us",
    caption: "Explore our bakery in the heart of Phuket.",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop",
    alt: "Artisan sourdough bread loaves cooling on a rack",
    category: "Artisan Breads",
    caption: "Slow-fermented breads, baked fresh daily.",
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
  const count = SLIDES.length;
  const regionRef = useRef<HTMLDivElement>(null);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + count) % count);
  }, [count]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
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
      className="relative w-full bg-bg text-text overflow-hidden"
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start">
            <span
              className="hero-fade-up inline-flex items-center gap-2.5 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-7 sm:mb-9"
              style={{ animationDelay: "0.1s" }}
            >
              <span
                aria-hidden="true"
                className="inline-block w-10 h-px bg-brand"
              />
              Artisan French Bakery · Phuket
            </span>

            <h1
              id="hero-heading"
              className="hero-reveal font-serif font-medium text-text tracking-tight text-[40px] leading-[1.04] sm:text-[56px] sm:leading-1.0 lg:text-[68px] lg:leading-[0.98]"
              style={{ animationDelay: "0.22s" }}
            >
              A Taste of France,
              <span className="block text-brand italic mt-1">
                Made in Phuket.
              </span>
            </h1>

            <p
              className="hero-fade-up mt-7 sm:mt-8 max-w-xl text-[15px] sm:text-[16px] leading-[1.75] text-muted"
              style={{ animationDelay: "0.42s" }}
            >
              Discover the craft of French baking through artisan breads and
              delicate pastries — baked fresh every morning from our oven in the
              heart of Phuket.
            </p>

            <div
              className="hero-fade-up mt-9 sm:mt-11 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
              style={{ animationDelay: "0.58s" }}
            >
              <Link
                href="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-[14px] sm:text-[15px] font-semibold text-brand-contrast transition-all duration-200 hover:bg-brand-hover active:translate-y-1px focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Explore Our Menu
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 text-[14px] sm:text-[15px] font-semibold text-text transition-all duration-200 hover:border-border-strong hover:bg-surface-alt active:translate-y-1px focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <MapPinIcon className="text-brand" />
                Find Our Bakery
              </Link>
            </div>

            {/* <dl
              className="hero-fade-up mt-12 sm:mt-14 grid grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-6 w-full max-w-lg border-t border-border pt-7"
              style={{ animationDelay: "0.72s" }}
            >
              <div>
                <dt className="text-[11px] uppercase tracking-[0.24em] text-subtle font-semibold">
                  Oven
                </dt>
                <dd className="mt-2 font-serif text-2xl sm:text-[28px] leading-none text-text">
                  06<span className="text-brand">.</span>30
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.24em] text-subtle font-semibold">
                  Ferment
                </dt>
                <dd className="mt-2 font-serif text-2xl sm:text-[28px] leading-none text-text">
                  72<span className="text-brand">h</span>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.24em] text-subtle font-semibold">
                  Flour
                </dt>
                <dd className="mt-2 font-serif text-2xl sm:text-[28px] leading-none text-text">
                  T<span className="text-brand">65</span>
                </dd>
              </div>
            </dl> */}
          </div>

          <div className="lg:col-span-7 xl:col-span-7 relative">
            <div
              ref={regionRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Teraboulanger brand imagery"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className="hero-fade-in focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-[20px]"
              style={{ animationDelay: "0.3s" }}
            >
              <figure className="relative w-full">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-[20px] border border-border bg-surface">
                  {SLIDES.map((slide, index) => {
                    const isActive = index === current;
                    return (
                      <div
                        key={slide.src}
                        data-slide={isActive}
                        aria-hidden={!isActive}
                        className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          priority={index === 0}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="object-cover object-center select-none"
                          draggable={false}
                        />
                      </div>
                    );
                  })}

                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous slide"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/80 text-text backdrop-blur-sm transition-all duration-200 hover:bg-surface-alt hover:border-border-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  >
                    <ArrowLeftIcon />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/80 text-text backdrop-blur-sm transition-all duration-200 hover:bg-surface-alt hover:border-border-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  >
                    <ArrowRightIcon />
                  </button>
                </div>

                <figcaption className="mt-4 flex items-start justify-between gap-4">
                  <div aria-live="polite" className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-brand font-semibold">
                      {activeSlide.category}
                    </p>
                    <p className="mt-1 text-[14px] sm:text-[15px] text-text leading-snug">
                      {activeSlide.caption}
                    </p>
                  </div>
                  <div
                    role="tablist"
                    aria-label="Slide navigation"
                    className="flex shrink-0 items-center gap-2 pt-1"
                  >
                    {SLIDES.map((slide, index) => {
                      const isActive = index === current;
                      return (
                        <button
                          key={`dot-${slide.src}`}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-label={`Go to slide ${index + 1}`}
                          onClick={() => goTo(index)}
                          className={`h-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                            isActive
                              ? "w-6 bg-brand"
                              : "w-2 bg-border-strong hover:bg-subtle"
                          }`}
                        />
                      );
                    })}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
