"use client";

import ImageReveal from "@/components/animations/ImageReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

/**
 * The Tera Experience — warm lifestyle-focused section.
 *
 * Text sits on the left; the right holds a two-image editorial collage of the
 * café atmosphere (one large, one smaller offset) so the section reads as a
 * lifestyle feature rather than a single product shot.
 */
const EXPERIENCE_PRIMARY =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&fm=jpg&q=85&w=1200";

const EXPERIENCE_SECONDARY =
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&fm=jpg&q=85&w=900";

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

export default function TeraExperience() {
  return (
    <section
      id="tera-experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 bg-bg py-16 text-text sm:scroll-mt-24 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* ——— LEFT: experience copy ——— */}
          <div className="lg:col-span-5">
            <StaggerContainer>
              <StaggerItem>
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs">
                  The Tera Experience
                  <span
                    aria-hidden="true"
                    className="inline-block h-px w-9 bg-brand/50"
                  />
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2
                  id="experience-heading"
                  className="mt-5 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight"
                >
                  A Place to Connect.
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-7">
                  Whether you&apos;re enjoying a coffee, sharing pastries with
                  loved ones, or taking a break in our cozy caf&eacute;, Tera
                  is here to make your day a little brighter.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-7">
                  Good food and warm hospitality have a way of bringing people
                  together — and that is exactly the feeling we hope to share
                  with every visit.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-8">
                  <a
                    href="#our-community"
                    className="group inline-flex items-center gap-2 text-[14px] font-semibold text-brand transition-colors duration-200 hover:text-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:text-[15px]"
                  >
                    Visit Our Store
                    <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* ——— RIGHT: two-image café collage ——— */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              {/* Large primary image */}
              <div className="col-span-12 sm:col-span-7">
                <ImageReveal
                  src={EXPERIENCE_PRIMARY}
                  alt="People enjoying coffee and pastries in a warm café atmosphere"
                  effect="clip"
                  zoom
                  sizes="(max-width: 639px) 100vw, 34vw"
                  className="aspect-[4/5] w-full bg-surface"
                  imageClassName="object-cover object-center"
                />
              </div>

              {/* Smaller offset secondary image */}
              <div className="col-span-12 sm:col-span-5 sm:pt-10">
                <ImageReveal
                  src={EXPERIENCE_SECONDARY}
                  alt="A cozy café table set with coffee and fresh pastries"
                  effect="clip"
                  delay={0.12}
                  zoom
                  sizes="(max-width: 639px) 100vw, 24vw"
                  className="aspect-square w-full bg-surface"
                  imageClassName="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
