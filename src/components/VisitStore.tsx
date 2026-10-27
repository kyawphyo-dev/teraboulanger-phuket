"use client";

import Image from "next/image";
import Link from "next/link";
import { STORE_CONFIG } from "@/lib/store-config";

/**
 * VisitStore Component - Concept 02: Image + Overlay Info
 * Implements a full-width bakery storefront photograph with an elegant
 * information overlay on the right side.
 */
export default function VisitStore() {
  return (
    <section
      aria-labelledby="visit-store-heading"
      className="relative w-full overflow-hidden bg-bg py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ——— Brand Frame ——— */}
        <div className="relative w-full overflow-hidden rounded-sm bg-black shadow-2xl lg:rounded-md">
          {/* Media frame — height is content-driven on mobile so nothing can
              be clipped; from sm up it becomes the original fixed-ratio
              cinematic frame. */}
          <div className="relative w-full sm:aspect-[16/9] sm:min-h-[600px] lg:min-h-[700px]">
            {/* ——— Background Image ——— */}
            {/* The original bakery storefront photograph is preserved */}
            <div className="absolute inset-0 z-0">
              <Image
                src={STORE_CONFIG.storefrontImage.src}
                alt={STORE_CONFIG.storefrontImage.alt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
            </div>

            {/* ——— Gradient Overlay ——— */}
            {/* The original cinematic dark overlay is preserved */}
            <div
              className="absolute inset-0 z-10 bg-black/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-black/40 sm:to-black/80"
              aria-hidden="true"
            />

            {/* ——— Information Block ——— */}
            {/* In normal flow on mobile (the section grows to fit); becomes the
                full-height overlay from the sm breakpoint up. */}
            <div className="relative z-20 flex min-h-[520px] flex-col justify-center px-6 py-12 text-center sm:absolute sm:inset-0 sm:min-h-0 sm:items-end sm:px-12 sm:py-12 sm:text-right lg:px-20">
              <div className="mx-auto flex w-full max-w-md flex-col items-center sm:mx-0 sm:items-end">
                <h2
                  id="visit-store-heading"
                  className="font-serif text-[26px] leading-[1.15] tracking-[0.03em] sm:text-[42px] sm:leading-[1.05] sm:tracking-[0.05em] lg:text-[56px] uppercase text-cream mb-5 sm:mb-6"
                >
                  {STORE_CONFIG.heading}
                </h2>

                <p className="font-serif italic text-[15px] leading-relaxed sm:text-[21px] lg:text-[24px] text-cream/90 mb-8 sm:mb-10 max-w-sm">
                  {STORE_CONFIG.description}
                </p>

                {/* Store Details */}
                <div className="flex flex-col gap-6 mb-8 text-cream/80 w-full items-center sm:gap-10 sm:mb-12 sm:items-end">
                  {/* Address */}
                  <div className="flex flex-col items-center sm:items-end group">
                    <div className="flex items-center gap-3 mb-2 sm:mb-3 text-brand">
                      <span className="text-[10px] tracking-[0.3em] sm:text-xs sm:tracking-[0.35em] uppercase font-bold">
                        Location
                      </span>
                      <MapPinIcon className="w-4 h-4 shrink-0" />
                    </div>
                    <address className="not-italic text-[14px] leading-relaxed sm:text-[17px] text-cream/70 font-sans">
                      {STORE_CONFIG.address.line1}
                      <br />
                      {STORE_CONFIG.address.line2}
                    </address>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex flex-col items-center sm:items-end group">
                    <div className="flex items-center gap-3 mb-2 sm:mb-3 text-brand">
                      <span className="text-[10px] tracking-[0.3em] sm:text-xs sm:tracking-[0.35em] uppercase font-bold">
                        Hours
                      </span>
                      <ClockIcon className="w-4 h-4 shrink-0" />
                    </div>
                    <div className="text-[14px] leading-relaxed sm:text-[17px] text-cream/70 font-sans">
                      <p>{STORE_CONFIG.openingHours.schedule}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col items-center gap-5 sm:gap-8 sm:items-end w-full">
                  <Link
                    href={STORE_CONFIG.cta.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 w-full px-8 sm:px-12 sm:w-auto bg-brand text-black font-bold text-[13px] tracking-[0.15em] sm:text-[15px] sm:tracking-[0.2em] uppercase transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full shadow-xl whitespace-nowrap"
                  >
                    {STORE_CONFIG.cta.label}
                    <ExternalLinkIcon className="w-4 h-4 shrink-0" />
                  </Link>

                  <Link
                    href={STORE_CONFIG.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[13px] sm:text-[14px] text-cream/60 hover:text-brand transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand rounded-sm"
                  >
                    <InstagramIcon className="w-4 h-4 shrink-0" />
                    <span className="border-b border-cream/20 group-hover:border-brand pb-0.5 tracking-wide font-sans">
                      {STORE_CONFIG.social.instagram.label}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ——— Internal Icons ———

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
      aria-hidden="true"
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
