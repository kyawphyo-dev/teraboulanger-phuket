"use client";

import ImageReveal from "@/components/animations/ImageReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

/**
 * Our Philosophy — immersive asymmetric composition.
 *
 * Text sits on the left with generous whitespace; a large pastry photograph
 * bleeds to the right viewport edge so the section reads as an editorial
 * feature rather than a balanced two-column card. Values are woven into the
 * copy instead of listed as bullet points.
 */
const PHILOSOPHY_IMAGE =
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&fm=jpg&q=85&w=1600";

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

export default function OurPhilosophy() {
  return (
    <section
      id="our-philosophy"
      aria-labelledby="philosophy-heading"
      className="scroll-mt-20 overflow-hidden bg-bg py-16 text-text sm:scroll-mt-24 sm:py-20 lg:py-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* ——— LEFT: philosophy copy ——— */}
        <div className="order-2 px-5 sm:px-8 lg:order-1 lg:col-span-5 lg:pl-12 lg:pr-6 xl:pl-[calc((100vw-80rem)/2+3rem)]">
          <StaggerContainer>
            <StaggerItem>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs">
                Our Philosophy
                <span
                  aria-hidden="true"
                  className="inline-block h-px w-9 bg-brand/50"
                />
              </p>
            </StaggerItem>

            <StaggerItem>
              <h2
                id="philosophy-heading"
                className="mt-5 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight"
              >
                What We Believe.
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-7">
                We believe in craftsmanship, quality and the joy of sharing
                good food. Every creation is made with care, using the finest
                ingredients and a thoughtful touch.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-7">
                Creativity guides what we bake, but it is patience and
                attention to detail that make each piece worthy of your table.
                For us, baking is never just a process — it is a way of
                welcoming people in.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-8">
                <a
                  href="#what-we-do"
                  className="group inline-flex items-center gap-2 text-[14px] font-semibold text-brand transition-colors duration-200 hover:text-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:text-[15px]"
                >
                  Our Philosophy
                  <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* ——— RIGHT: large bleeding pastry photograph ——— */}
        <div className="order-1 lg:order-2 lg:col-span-7">
          <div className="relative">
            <ImageReveal
              src={PHILOSOPHY_IMAGE}
              alt="Golden croissants and artisan breads arranged on a bakery counter"
              effect="clip"
              zoom
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="aspect-[4/3] w-full bg-surface sm:aspect-[16/10] lg:aspect-[5/4] lg:rounded-l-2xl"
              imageClassName="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
