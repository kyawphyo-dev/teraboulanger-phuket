"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

/**
 * The Art Behind Our Creations — craftsmanship-focused full-bleed image.
 *
 * A wide horizontal photograph of pastry lamination fills the section; the
 * headline and copy sit on the left over a graduated dark overlay. No
 * ingredient-origin or recipe claims are made — the copy speaks only to
 * attention, preparation and creativity.
 */
const CRAFT_IMAGE =
  "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&fm=jpg&q=85&w=2400";

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

export default function ArtBehindCreations() {
  return (
    <section
      id="our-craft"
      aria-labelledby="craft-heading"
      className="scroll-mt-20 relative isolate overflow-hidden bg-inverse text-inverse-text sm:scroll-mt-24"
    >
      {/* Wide horizontal process photograph */}
      <div className="relative h-[60vh] min-h-[460px] w-full sm:h-[68vh] lg:h-[78vh]">
        <Image
          src={CRAFT_IMAGE}
          alt="Laminated dough being folded and prepared for pastry"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark graduated overlay for legibility — heavier on the left */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/45 to-black/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20"
        />
      </div>

      {/* Overlaid content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal
            effect="fade-up"
            distance={24}
            duration={0.9}
            className="max-w-xl"
          >
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream sm:text-xs">
              <span
                aria-hidden="true"
                className="inline-block h-px w-10 bg-cream/70"
              />
              Our Craftsmanship
            </p>

            <h2
              id="craft-heading"
              className="font-serif text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.02] tracking-tight text-cream"
            >
              The Art Behind
              <br />
              Our Creations.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/85 sm:text-base sm:leading-7">
              From carefully selected ingredients to precise techniques, every
              step is a celebration of craftsmanship and detail.
            </p>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70 sm:text-[15px] sm:leading-7">
              Patience shapes the dough, creativity shapes the result — and
              care connects it all to the people we bake for.
            </p>

            <div className="mt-8">
              <a
                href="#tera-experience"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-cream transition-colors duration-200 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-[15px]"
              >
                Our Craftsmanship
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
