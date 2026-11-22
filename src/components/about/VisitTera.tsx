"use client";

import Image from "next/image";
import { STORE_CONFIG } from "@/lib/store-config";
import Reveal from "@/components/animations/Reveal";

/**
 * Visit Tera — visually strong closing section.
 *
 * Uses the verified Phuket Old Town branch from `STORE_CONFIG` (never
 * invents an address, hours or map URL). The storefront photograph fills
 * the section with a dark atmospheric overlay; the brand symbol adds a
 * subtle signature touch.
 */
const BRAND_SYMBOL = "/Brand_Identity/Logo/logo_symbol_orange.png";

const branch = STORE_CONFIG.branches[0];

function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7V12L15.5 14" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14m-6-6l6 6-6 6" />
    </svg>
  );
}

export default function VisitTera() {
  const addressLines = [branch.address.line1, branch.address.line2].filter(
    (line): line is string => Boolean(line && line.trim()),
  );

  return (
    <section
      id="visit-tera"
      aria-labelledby="visit-tera-heading"
      className="scroll-mt-20 relative isolate overflow-hidden bg-inverse text-inverse-text sm:scroll-mt-24"
    >
      {/* Storefront photograph */}
      <div className="relative h-[72vh] min-h-[520px] w-full sm:h-[80vh] lg:h-[88vh]">
        <Image
          src={branch.image.src}
          alt={branch.image.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Atmospheric dark overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal
            effect="fade-up"
            distance={24}
            duration={0.9}
            className="max-w-xl"
          >
            {/* Brand symbol signature */}
            <Image
              src={BRAND_SYMBOL}
              alt=""
              aria-hidden="true"
              width={64}
              height={64}
              className="mb-7 h-10 w-auto select-none sm:h-12"
              draggable={false}
            />

            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream sm:text-xs">
              <span
                aria-hidden="true"
                className="inline-block h-px w-10 bg-cream/70"
              />
              Visit Tera
            </p>

            <h2
              id="visit-tera-heading"
              className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.98] tracking-tight text-cream"
            >
              We&apos;d Love to
              <br />
              Welcome You.
            </h2>

            {/* Verified store details */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center text-brand"
                >
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <address className="not-italic text-sm leading-relaxed text-cream/90 sm:text-[15px]">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center text-brand"
                >
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div className="text-sm leading-relaxed text-cream/90 sm:text-[15px]">
                  {branch.openingHours.schedule}
                </div>
              </div>
            </div>

            {/* Get Directions button */}
            <div className="mt-9">
              <a
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get directions to ${branch.name} on Google Maps`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-[14px] font-semibold text-brand-contrast transition-all duration-200 hover:bg-brand-hover active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-[15px]"
              >
                Get Directions
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
