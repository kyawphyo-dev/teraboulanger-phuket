"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PARTNERS_CONFIG } from "@/lib/partners-config";

export default function PartnersSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPartners = PARTNERS_CONFIG.partners.filter((partner) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "wholesale")
      return partner.category === "Wholesale Partner";
    if (activeCategory === "collaboration")
      return partner.category === "Brand Collaboration";
    return true;
  });

  return (
    <section
      aria-labelledby="partners-heading"
      className="w-full bg-bg text-text py-20 lg:py-32 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ——— Editorial Introduction ——— */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-32">
          <div className="lg:col-span-7">
            <span className="block text-[10px] sm:text-xs tracking-[0.3em] font-bold text-brand mb-6 uppercase">
              {PARTNERS_CONFIG.section.tagline}
            </span>
            <h2
              id="partners-heading"
              className="font-serif text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.1] tracking-tight mb-8 whitespace-pre-line"
            >
              {PARTNERS_CONFIG.section.heading}
            </h2>
            <p className="font-sans text-base sm:text-lg lg:text-xl text-text/70 max-w-2xl leading-relaxed">
              {PARTNERS_CONFIG.section.description}
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between items-end text-right">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-8 hidden lg:block bg-surface">
              <Image
                src={PARTNERS_CONFIG.section.heroImage.src}
                alt={PARTNERS_CONFIG.section.heroImage.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                }}
                className="object-cover"
              />
              <div className="absolute top-6 right-6 text-cream text-right">
                <p className="font-serif italic text-lg sm:text-xl leading-snug">
                  Better together
                  <br />
                  for a tastier
                  <br />
                  tomorrow.
                </p>
                <div className="h-px w-8 bg-cream/40 mt-4 ml-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* ——— Category Filter ——— */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border/10 pb-8 mb-12 gap-8">
          <nav
            className="flex flex-wrap gap-x-8 gap-y-4"
            aria-label="Partner categories"
          >
            {PARTNERS_CONFIG.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[10px] sm:text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 relative pb-2 ${
                  activeCategory === cat.id
                    ? "text-brand"
                    : "text-text/40 hover:text-text/70"
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand" />
                )}
              </button>
            ))}
          </nav>

          {/* Slider Controls (Visual only for now) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center text-text/40 hover:text-brand hover:border-brand transition-all duration-300"
              aria-label="Previous partners"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center text-text/40 hover:text-brand hover:border-brand transition-all duration-300"
              aria-label="Next partners"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ——— Partner Showcase Grid ——— */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 mb-32">
          {filteredPartners.map((partner) => (
            <div key={partner.id} className="group flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface mb-8 rounded-sm">
                <Image
                  src={partner.image}
                  alt={partner.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Partner Info */}
              <div className="flex flex-col flex-grow px-2">
                <div className="h-16 flex items-center mb-6">
                  {/* Logo or Wordmark */}
                  <div className="relative h-10 w-32">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain object-left dark:invert"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <span className="block text-[10px] tracking-[0.15em] font-bold text-brand uppercase mb-2">
                    {partner.type}
                  </span>
                  <div className="flex items-center gap-2 text-text/40 mb-4">
                    <MapPinIcon className="w-3 h-3" />
                    <span className="text-[11px] tracking-wide uppercase font-sans">
                      {partner.location}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-text/60 leading-relaxed line-clamp-3">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    href={partner.websiteUrl || "#"}
                    className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold uppercase text-text/40 group-hover:text-brand transition-colors duration-300"
                  >
                    View Website
                    <ArrowRightIcon className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ——— Business Enquiry CTA ——— */}
        <div className="relative w-full overflow-hidden rounded-sm bg-surface shadow-lg lg:rounded-md border border-border/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            {/* Left Content */}
            <div className="relative z-20 flex flex-col justify-center p-8 sm:p-12 lg:p-20 order-2 lg:order-1">
              <span className="block text-[10px] sm:text-xs tracking-[0.3em] font-bold text-brand mb-6 uppercase">
                {PARTNERS_CONFIG.cta.tagline}
              </span>
              <h3 className="font-serif text-[32px] sm:text-[42px] leading-[1.1] tracking-tight mb-6">
                {PARTNERS_CONFIG.cta.heading}
              </h3>
              <p className="font-sans text-base text-text/70 mb-10 max-w-md leading-relaxed">
                {PARTNERS_CONFIG.cta.description}
              </p>
              <div>
                <Link
                  href={PARTNERS_CONFIG.cta.buttonUrl}
                  className="inline-flex items-center justify-center gap-3 h-14 px-12 bg-brand text-black font-bold text-[13px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-full shadow-xl whitespace-nowrap"
                >
                  {PARTNERS_CONFIG.cta.buttonLabel}
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>

              {/* Decorative Brand Artwork (Inspired by Phoenix/Building) */}
              <div className="absolute bottom-0 left-0 p-8 opacity-10 pointer-events-none hidden sm:block">
                <Image
                  src="/Brand_Identity/logo_symbol_orange.png"
                  alt=""
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[300px] lg:min-h-0 order-1 lg:order-2 bg-surface">
              <Image
                src={PARTNERS_CONFIG.cta.sideImage.src}
                alt={PARTNERS_CONFIG.cta.sideImage.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                }}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 right-6 text-cream text-right">
                <p className="font-serif italic text-sm sm:text-base opacity-90">
                  {PARTNERS_CONFIG.cta.sideImage.caption}
                </p>
                <div className="h-px w-6 bg-cream/40 mt-3 ml-auto" />
              </div>
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

function MapPinIcon({ className = "" }: { className?: string }) {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
