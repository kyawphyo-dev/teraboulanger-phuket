"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    category: "Croissants",
    name: "Classic Croissant",
    description:
      "Buttery, flaky, and timeless. Our signature croissant, made with French butter.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80&auto=format&fit=crop",
    href: "/menu#viennoiserie",
  },
  {
    id: 2,
    category: "Artisan Breads",
    name: "Sourdough Loaf",
    description:
      "Naturally fermented, with a crisp crust and soft, airy crumb.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80&auto=format&fit=crop",
    href: "/menu#bread",
  },
  {
    id: 3,
    category: "Pastries",
    name: "Kouign-Amann",
    description: "A perfect balance of caramel, butter and layers.",
    image:
      "https://images.unsplash.com/photo-1626803777605-ee59c595019c?w=800&q=80&auto=format&fit=crop",
    href: "/menu#pastries",
  },
  {
    id: 4,
    category: "Tarts & Desserts",
    name: "Soft Cookies",
    description: "A light, soft cookies with a rich butter flavor.",
    image:
      "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=800&q=80&auto=format&fit=crop",
    href: "/menu#cakes",
  },
  {
    id: 5,
    category: "Croissant Waffles",
    name: "Croissant Waffle",
    description: "A light, soft waffle made with a rich butter flavor.",
    image:
      "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=800&q=80&auto=format&fit=crop",
    href: "/menu#waffles",
  },
  {
    id: 5,
    category: "Croissant Waffles",
    name: "Croissant Waffle",
    description: "A light, soft waffle made with a rich butter flavor.",
    image:
      "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=800&q=80&auto=format&fit=crop",
    href: "/menu#waffles",
  },
];

function ArrowLeftIcon({ className = "" }: { className?: string }) {
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
        d="M19 12H5M5 12L11 6M5 12L11 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12h14m-6-6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SignatureProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pitchRef = useRef(0);
  const [imageBandHeight, setImageBandHeight] = useState(0);
  const [browse, setBrowse] = useState({ atStart: true, atEnd: true });

  /**
   * Keeps the arrows in step with the strip. `remeasure` re-reads the card
   * pitch and image-band height (mount + resize); plain scroll syncing reuses
   * the cached geometry so scrolling stays cheap.
   */
  const syncLayout = useCallback((remeasure: boolean) => {
    const el = scrollRef.current;
    if (!el) return;

    if (remeasure || pitchRef.current === 0) {
      const first = el.children[0] as HTMLElement | undefined;
      const second = el.children[1] as HTMLElement | undefined;
      pitchRef.current =
        first && second
          ? Math.abs(
              second.getBoundingClientRect().left -
                first.getBoundingClientRect().left,
            )
          : el.clientWidth;

      const imageBand = first?.firstElementChild as HTMLElement | undefined;
      setImageBandHeight(imageBand?.offsetHeight ?? 0);
    }

    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const pitch = pitchRef.current || el.clientWidth;
    /* Steps available in each direction, derived from the real scroll range so
       the arrows disappear exactly where nothing further can be reached. */
    const maxIndex = pitch > 0 ? Math.round(maxScroll / pitch) : 0;
    const index = Math.min(
      maxIndex,
      Math.max(0, Math.round(el.scrollLeft / pitch)),
    );

    const atStart = maxScroll <= 1 || index <= 0;
    const atEnd = maxScroll <= 1 || index >= maxIndex;
    setBrowse((prev) =>
      prev.atStart === atStart && prev.atEnd === atEnd
        ? prev
        : { atStart, atEnd },
    );
  }, []);

  useEffect(() => {
    syncLayout(true);
    const handleResize = () => syncLayout(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [syncLayout]);

  const handleScroll = useCallback(() => syncLayout(false), [syncLayout]);

  /** Advance by exactly one card, clamped to the scrollable range. */
  const scrollTo = useCallback((direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const pitch = pitchRef.current || el.clientWidth;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const target = Math.min(
      Math.max(el.scrollLeft + direction * pitch, 0),
      maxScroll,
    );
    el.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  const goPrev = useCallback(() => scrollTo(-1), [scrollTo]);
  const goNext = useCallback(() => scrollTo(1), [scrollTo]);

  return (
    <section
      aria-labelledby="signature-heading"
      className="bg-bg py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ——— LEFT: Introduction ——— */}
          <div className="lg:col-span-4 flex flex-col items-start relative">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-6">
              Signature Products
            </span>

            <h2
              id="signature-heading"
              className="font-serif text-[36px] leading-[1.1] sm:text-[44px] lg:text-[52px] font-medium text-text tracking-tight"
            >
              Crafted with Passion,
              <br className="hidden sm:block" /> Baked for You
            </h2>

            <p className="mt-8 text-[15px] sm:text-[16px] leading-[1.75] text-muted max-w-md">
              From our buttery croissants to artisanal breads and delicate
              pastries, every item is made with care, using the finest
              ingredients and time-honored French techniques.
            </p>

            <div className="mt-6 sm:mt-8 flex items-center gap-4 sm:gap-6 group">
              {/* Cherub Decoration */}
              <div className="relative w-24 sm:w-28 lg:w-32 aspect-square opacity-90 dark:opacity-80 shrink-0">
                <Image
                  src="/Brand_Identity/Key_Visual/03_cherub.png"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
                  className="object-contain object-left select-none"
                  draggable={false}
                />
              </div>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-semibold text-brand transition-colors duration-200 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
              >
                Explore Our Menu
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* ——— RIGHT: Product Gallery ——— */}
          <div className="relative lg:col-span-8 flex flex-col">
            {/* Edge arrows — centred on the product images, and rendered only
                while there is still somewhere further to scroll. */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10"
              style={
                imageBandHeight > 0 ? { height: imageBandHeight } : undefined
              }
            >
              {!browse.atStart && (
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Show previous signature products"
                  className="pointer-events-auto absolute left-0 top-1/2 -ml-5 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-text shadow-sm transition-all duration-200 hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-95 sm:-ml-6 lg:-ml-5"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </button>
              )}
              {!browse.atEnd && (
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Show next signature products"
                  className="pointer-events-auto absolute right-0 top-1/2 -mr-5 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-text shadow-sm transition-all duration-200 hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-95 sm:-mr-6 lg:-mr-5"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Cards Scroll Container */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-0 lg:px-0 gap-6 sm:gap-8"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="flex-none w-[280px] sm:w-[calc(50%-16px)] lg:w-[calc(25%-18px)] snap-start group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[4px] bg-surface mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 45vw, 20vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                  </div>

                  <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand font-bold mb-2">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-[20px] sm:text-[22px] font-medium text-text mb-2 transition-colors duration-200 group-hover:text-brand">
                      {product.name}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-muted line-clamp-2">
                      {product.description}
                    </p>

                    <Link
                      href={product.href}
                      className="mt-4 inline-flex items-center justify-center h-8 w-8 rounded-full border border-border text-text transition-all duration-200 group-hover:bg-brand group-hover:border-brand group-hover:text-brand-contrast focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      aria-label={`View details for ${product.name}`}
                    >
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
