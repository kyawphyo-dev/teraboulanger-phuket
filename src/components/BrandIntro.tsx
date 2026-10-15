import Image from "next/image";
import Link from "next/link";

/**
 * Brand Introduction / Philosophy section.
 *
 * The photographic collage reproduces the exact 3-column, 5-slot asymmetric
 * composition from the supplied reference:
 *   Column 1 — one tall image spanning the full height.
 *   Column 2 — two stacked images (top taller, bottom shorter).
 *   Column 3 — two stacked images (top shorter, bottom taller).
 *
 * At desktop widths the collage is placed on the LEFT and the text on the
 * RIGHT (the reference's overall sides are reversed). The internal image
 * order and arrangement are NOT reversed or mirrored.
 */

interface CollageSlot {
  src: string;
  alt: string;
  width: number;
  height: number;
  col: number;
  row: string;
  objectPosition?: string;
}

const COLLAGE_SLOTS: CollageSlot[] = [
  // Column 1 — large tall image, spans the full section height
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop",
    alt: "Artisan bread loaves and croissants on a bakery counter",
    width: 1200,
    height: 1500,
    col: 1,
    row: "1 / span 10",
    objectPosition: "center 30%",
  },
  // Column 2 — top (taller)
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80&auto=format&fit=crop",
    alt: "Freshly baked butter croissants",
    width: 1200,
    height: 1500,
    col: 2,
    row: "1 / span 6",
    objectPosition: "center 35%",
  },
  // Column 2 — bottom (shorter)
  {
    src: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=1200&q=80&auto=format&fit=crop",
    alt: "Golden fruit tart on a bakery shelf",
    width: 1200,
    height: 800,
    col: 2,
    row: "7 / span 4",
    objectPosition: "center center",
  },
  // Column 3 — top (shorter)
  {
    src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1200&q=80&auto=format&fit=crop",
    alt: "Crusty sourdough bread loaves",
    width: 1200,
    height: 800,
    col: 3,
    row: "1 / span 4",
    objectPosition: "center center",
  },
  // Column 3 — bottom (taller)
  {
    src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80&auto=format&fit=crop",
    alt: "Bakery storefront with fresh bread and pastries",
    width: 1200,
    height: 1500,
    col: 3,
    row: "5 / span 6",
    objectPosition: "center 25%",
  },
];

export default function BrandIntro() {
  return (
    <section
      aria-labelledby="brand-intro-heading"
      className="bg-bg py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* ——— LEFT: photographic collage (faithful to reference) ——— */}
          <div className="lg:col-span-7">
            <div
              className="grid grid-cols-3 grid-rows-10 gap-1.5 bg-bg sm:gap-2 aspect-[4/5] sm:aspect-[5/6]"
              role="img"
              aria-label="Teraboulanger brand collage"
            >
              {COLLAGE_SLOTS.map((slot) => (
                <div
                  key={slot.src}
                  className="relative overflow-hidden"
                  style={{
                    gridColumn: slot.col,
                    gridRow: slot.row,
                  }}
                >
                  <Image
                    src={slot.src}
                    alt={slot.alt}
                    fill
                    sizes="(max-width: 1024px) 33vw, 30vw"
                    className="object-cover"
                    style={{ objectPosition: slot.objectPosition }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ——— RIGHT: text content ——— */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand sm:text-xs">
              The Teraboulanger Philosophy
            </p>

            <h2
              id="brand-intro-heading"
              className="mt-4 font-serif text-3xl font-semibold leading-[1.08] text-text sm:text-4xl lg:text-[2.75rem]"
            >
              The art of everyday baking.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
              A thoughtful approach to baking, where craftsmanship and
              life&apos;s everyday moments come together.
            </p>

            <div className="mt-8">
              <Link
                href="/our-story"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-[14px] font-semibold text-brand-contrast transition-all duration-200 hover:bg-brand-hover active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:text-[15px]"
              >
                Discover Our Story
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path
                    d="M5 12h14m-6-6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
