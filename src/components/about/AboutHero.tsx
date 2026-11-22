"use client";

import Image from "next/image";
import Link from "next/link";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

/**
 * About page hero — immersive full-width bakery photograph with left-aligned
 * editorial headline. Text sits over a graduated dark overlay so it stays
 * legible in both themes; the image itself is never colour-shifted.
 */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&fm=jpg&q=85&w=2400";

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative isolate flex min-h-[82vh] w-full items-end overflow-hidden bg-inverse text-inverse-text sm:min-h-[88vh] lg:min-h-[92vh]"
    >
      {/* Background photograph */}
      <Image
        src={HERO_IMAGE}
        alt="Freshly baked golden croissants arranged on a bakery counter"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Legibility overlays — kept subtle so the photograph still reads */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <StaggerContainer className="max-w-2xl">
          <StaggerItem distance={16}>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream sm:text-xs">
              <span
                aria-hidden="true"
                className="inline-block h-px w-10 bg-cream/70"
              />
              About Tera
            </p>
          </StaggerItem>

          <StaggerItem distance={28} duration={0.9}>
            <h1
              id="about-hero-heading"
              className="font-serif text-[clamp(2.6rem,8vw,5.5rem)] font-medium leading-[0.98] tracking-tight text-cream"
            >
              A Little More
              <br />
              Than Just a{" "}
              <span className="italic text-brand">Bakery.</span>
            </h1>
          </StaggerItem>

          <StaggerItem className="mt-7" distance={16}>
            <p className="max-w-xl text-sm leading-relaxed text-cream/85 sm:text-base sm:leading-7">
              Tera Boulanger is a French-inspired bakery and caf&eacute; in the
              heart of Phuket Old Town, where great food, warm hospitality and
              beautiful moments come together.
            </p>
          </StaggerItem>

          <StaggerItem className="mt-9" distance={16}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#our-story"
                className="group inline-flex items-center gap-2.5 rounded-full border border-cream/40 bg-transparent px-7 py-3.5 text-[13px] font-semibold text-cream transition-all duration-200 hover:border-cream hover:bg-cream/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cream/15 text-cream">
                  <PlayIcon className="h-3 w-3" />
                </span>
                Our Story
              </Link>

              <a
                href="#visit-tera"
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-cream/75 transition-colors duration-200 hover:text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Scroll to explore
                <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
