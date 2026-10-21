import Image from "next/image";
import Link from "next/link";

/**
 * Our Craft & Ingredients — editorial photo collage.
 *
 * A two-column editorial section: the photographic collage sits on the left and
 * the philosophy copy on the right. The collage is anchored by one prominent
 * photograph, with two smaller supporting photographs stacked in a column that
 * is deliberately offset downwards — so the arrangement reads as an editorial
 * composition rather than a generic three-card grid. The images never overlap.
 *
 * All colour comes from the semantic theme tokens (`bg-bg`, `text-text`,
 * `text-muted`, `text-brand`, `bg-surface`), so light mode stays on warm bakery
 * paper with black ink and dark mode stays black-and-cream with restrained
 * burnt-orange accents. No colours are hardcoded per theme.
 */

/** Deep-link into the detailed craft section of the About page. */
const ABOUT_CRAFT_HREF = "/about#our-craft";

interface CollagePhoto {
  src: string;
  alt: string;
  sizes: string;
}

/** Main visual anchor — the working bakery. */
const PRIMARY_PHOTO: CollagePhoto = {
  src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&q=80&auto=format&fit=crop",
  alt: "Trays of freshly baked pastries inside the bakery kitchen",
  sizes: "(max-width: 639px) 100vw, 34vw",
};

/** Supporting photographs, stacked and offset beside the anchor. */
const SUPPORTING_PHOTOS: CollagePhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80&auto=format&fit=crop",
    alt: "Close-up of fresh butter croissants showing their flaky laminated layers",
    sizes: "(max-width: 639px) 48vw, 24vw",
  },
  {
    src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1200&q=80&auto=format&fit=crop",
    alt: "Crusty sourdough loaves after baking",
    sizes: "(max-width: 639px) 48vw, 24vw",
  },
];

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12h14m-6-6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CraftIngredients() {
  return (
    <section
      aria-labelledby="craft-heading"
      className="bg-bg py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* ——— LEFT: editorial photo collage ——— */}
          <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:col-span-7">
            {/* Primary anchor photograph */}
            <div className="col-span-12 sm:col-span-7">
              <div className="relative aspect-4/5 overflow-hidden bg-surface">
                <Image
                  src={PRIMARY_PHOTO.src}
                  alt={PRIMARY_PHOTO.alt}
                  fill
                  sizes={PRIMARY_PHOTO.sizes}
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Supporting pair — side by side on mobile, stacked and offset on
                wider screens */}
            <div className="col-span-12 grid grid-cols-2 gap-3 sm:col-span-5 sm:grid-cols-1 sm:gap-4 sm:pt-8 lg:pt-12">
              {SUPPORTING_PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-4/3 overflow-hidden bg-surface"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={photo.sizes}
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ——— RIGHT: editorial copy ——— */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs">
              Our Craft & Ingredients
            </p>

            <h2
              id="craft-heading"
              className="mt-5 font-serif text-[32px] font-medium leading-[1.14] tracking-tight text-text sm:text-[38px] lg:text-[44px]"
            >
              The Art Behind
              <br className="hidden sm:block" /> Every Bake
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-[1.75] text-muted sm:text-[16px]">
              From carefully selected ingredients to the patience of working
              with dough, every detail is part of our approach to French baking.
            </p>

            <div className="mt-8">
              <Link
                href={ABOUT_CRAFT_HREF}
                className="group inline-flex items-center gap-2 rounded-sm text-[14px] font-semibold text-brand transition-colors duration-200 hover:text-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:text-[15px]"
              >
                Discover Our Craft
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
