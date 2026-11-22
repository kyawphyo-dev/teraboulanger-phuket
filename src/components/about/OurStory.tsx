"use client";

import Image from "next/image";
import ImageReveal from "@/components/animations/ImageReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

/**
 * Our Story — editorial two-column composition.
 *
 * A warm bakery-counter photograph sits on the left; the storytelling copy
 * (eyebrow, heading, paragraphs, Discover Our Story link) occupies the right
 * column with comfortable spacing.
 *
 * The Phuket Old Town building illustration is no longer a standalone sticker
 * under the copy. It is now a large, low-opacity architectural watermark
 * anchored to the bottom-right of the SECTION background, sitting behind the
 * content (z-0 vs z-10) with `pointer-events-none`, subtle cropping at the
 * section boundary and no card, container or border of its own. Its original
 * design and proportions are preserved — only its placement and opacity
 * change, and the opacity is tuned per theme so the asset stays a subtle
 * signature rather than a decoration.
 *
 * The founding narrative is intentionally generic until the owner supplies
 * verified dates, founder biographies and milestones — a visible placeholder
 * note flags exactly what is still missing.
 */

/**
 * Temporary editorial photograph — croissants and pastries on a bakery
 * counter. Supplied by the reference art direction and served straight from
 * source; swap this single constant when official Tera photography arrives.
 */
const STORY_IMAGE = "/images/menu/hero/croissants-counter.jpg";

const BUILDING_ILLUSTRATION =
  "/Brand_Identity/Key_Visual/Tera_Phuket_Yellow_Building.png";

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

export default function OurStory() {
  return (
    <section
      id="our-story"
      aria-labelledby="our-story-heading"
      className="relative isolate scroll-mt-20 overflow-hidden bg-bg py-16 text-text sm:scroll-mt-24 sm:py-20 lg:py-24"
    >
      {/* ——— Phuket Old Town building — decorative architectural watermark ———
          Absolutely positioned behind the content, aligned to the bottom-right.
          The section clips it so it can crop softly at the boundary without
          ever causing horizontal overflow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src={BUILDING_ILLUSTRATION}
          alt=""
          width={1194}
          height={1317}
          sizes="(max-width: 639px) 86vw, (max-width: 1023px) 64vw, 640px"
          draggable={false}
          className="absolute -right-[12%] bottom-0 w-[86%] max-w-[480px] select-none opacity-[0.08] sm:w-[62%] sm:max-w-[540px] lg:-right-[4%] lg:bottom-[6%] lg:w-[50%] lg:max-w-[640px] dark:opacity-[0.12]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* ——— LEFT: bakery-counter photograph ——— */}
          <div className="lg:col-span-7">
            <ImageReveal
              src={STORY_IMAGE}
              alt="Croissants and fresh pastries arranged on a warm bakery counter"
              effect="clip"
              zoom
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[4/3] w-full bg-surface"
              imageClassName="object-cover object-center"
            />
          </div>

          {/* ——— RIGHT: story copy ——— */}
          <div className="lg:col-span-5">
            <StaggerContainer>
              <StaggerItem>
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs">
                  Our Story
                  <span
                    aria-hidden="true"
                    className="inline-block h-px w-9 bg-brand/50"
                  />
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2
                  id="our-story-heading"
                  className="mt-5 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight"
                >
                  Where It All Begins.
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-7">
                  Tera was born from a simple passion — to bring the art of
                  French baking to Phuket, with care, creativity and a love for
                  good food.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-7">
                  Every croissant, cake and cup of coffee is made with the same
                  intention: to offer a little more than just a bakery — a place
                  where craftsmanship and everyday moments meet.
                </p>
              </StaggerItem>

              {/* Placeholder note — verified founding details not yet supplied */}
              <StaggerItem>
                <div className="mt-6 rounded-sm border border-dashed border-border bg-surface-alt/60 px-4 py-3">
                  <p className="text-[12px] leading-relaxed text-subtle">
                    <span className="font-semibold text-brand">
                      Note for the owner:
                    </span>{" "}
                    The full founding story (founder background, opening date
                    and key milestones) is awaiting your verified details and
                    will be added here once confirmed.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-8">
                  <a
                    href="#our-philosophy"
                    className="group inline-flex items-center gap-2 text-[14px] font-semibold text-brand transition-colors duration-200 hover:text-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:text-[15px]"
                  >
                    Discover Our Story
                    <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
