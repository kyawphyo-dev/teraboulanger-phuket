"use client";

import Link from "next/link";
import ImageReveal from "@/components/animations/ImageReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

/**
 * Our Community & Partners — celebrates Tera's relationships.
 *
 * A bakery-products photograph on the left and the community copy on the
 * right, including a clearly-labeled placeholder row for approved partner
 * logos. No partner names, logos or testimonials are fabricated.
 */
const COMMUNITY_IMAGE =
  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&fm=jpg&q=85&w=1200";

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

export default function OurCommunity() {
  return (
    <section
      id="our-community"
      aria-labelledby="community-heading"
      className="scroll-mt-20 bg-surface-alt py-16 text-text sm:scroll-mt-24 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* ——— LEFT: bakery products photograph ——— */}
          <div className="lg:col-span-6">
            <ImageReveal
              src={COMMUNITY_IMAGE}
              alt="Assorted bakery products and pastries prepared for customers"
              effect="clip"
              zoom
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="aspect-[4/3] w-full bg-surface sm:aspect-[5/4]"
              imageClassName="object-cover object-center"
            />
          </div>

          {/* ——— RIGHT: community copy ——— */}
          <div className="lg:col-span-6">
            <StaggerContainer>
              <StaggerItem>
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs">
                  Our Community
                  <span
                    aria-hidden="true"
                    className="inline-block h-px w-9 bg-brand/50"
                  />
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2
                  id="community-heading"
                  className="mt-5 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight"
                >
                  Our Partners &amp; Friends.
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-7">
                  We&apos;re proud to work with local businesses, collaborate
                  with creative partners, and be part of the Phuket community.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-7">
                  From wholesale orders to event collaborations, every
                  partnership is built on the same care we put into our baking.
                </p>
              </StaggerItem>

              {/* Partner logo placeholder row */}
              <StaggerItem className="mt-8">
                <div
                  aria-label="Partner logos — awaiting approved assets"
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3"
                >
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex aspect-[3/2] items-center justify-center rounded-sm border border-dashed border-border/70 bg-bg/40"
                    >
                      <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-subtle">
                        Partner
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-subtle">
                  Approved partner logos will be displayed here once provided.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-[14px] font-semibold text-brand transition-colors duration-200 hover:text-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-alt sm:text-[15px]"
                  >
                    Our Community
                    <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
