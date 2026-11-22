"use client";

import Link from "next/link";
import ImageReveal from "@/components/animations/ImageReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

/**
 * What We Do — communicates Tera's three business dimensions.
 *
 * A large café photograph on the left anchors the section; the right column
 * introduces the heading and three editorial categories (The Bakery, The
 * Café, Beyond the Counter) with delicate line icons. Categories avoid
 * dashboard-style cards — they read as a typographic list with hairline
 * dividers.
 */
const WHAT_WE_DO_IMAGE =
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&fm=jpg&q=85&w=1400";

type Category = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "bakery" | "cafe" | "beyond";
};

const CATEGORIES: Category[] = [
  {
    id: "bakery",
    title: "The Bakery",
    description: "Croissants, pastries, cakes & cookies.",
    href: "/menu",
    icon: "bakery",
  },
  {
    id: "cafe",
    title: "The Café",
    description: "Coffee, beverages & breakfast.",
    href: "/menu/beverages",
    icon: "cafe",
  },
  {
    id: "beyond",
    title: "Beyond the Counter",
    description: "Wholesale, events & custom creations.",
    href: "/contact",
    icon: "beyond",
  },
];

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

function CategoryIcon({
  name,
  className = "",
}: {
  name: Category["icon"];
  className?: string;
}) {
  const shared = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "bakery":
      return (
        <svg {...shared}>
          <path d="M3 14c0-4.4 3.6-8 8-8s8 3.6 8 8v3H3v-3Z" />
          <path d="M3 17h18M6 11l1-2m3 2 1-3m3 3 1-2" />
        </svg>
      );
    case "cafe":
      return (
        <svg {...shared}>
          <path d="M4 9h12v5.5A3.5 3.5 0 0 1 12.5 18h-5A3.5 3.5 0 0 1 4 14.5V9Z" />
          <path d="M16 10h1.5a2 2 0 0 1 0 4H16M7 4.5c0-1 1-1 1-2m4 2c0-1 1-1 1-2m4 2c0-1 1-1 1-2" />
        </svg>
      );
    case "beyond":
      return (
        <svg {...shared}>
          <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11Z" />
          <path d="M9 11h6M12 8v6" />
        </svg>
      );
  }
}

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="scroll-mt-20 bg-surface-alt py-16 text-text sm:scroll-mt-24 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* ——— LEFT: café photograph ——— */}
          <div className="lg:col-span-6">
            <ImageReveal
              src={WHAT_WE_DO_IMAGE}
              alt="A marble café table with croissants, coffee, cake and cookies"
              effect="clip"
              zoom
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="aspect-[4/3] w-full bg-surface sm:aspect-[5/4]"
              imageClassName="object-cover object-center"
            />
          </div>

          {/* ——— RIGHT: heading + categories ——— */}
          <div className="lg:col-span-6">
            <StaggerContainer>
              <StaggerItem>
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs">
                  What We Do
                  <span
                    aria-hidden="true"
                    className="inline-block h-px w-9 bg-brand/50"
                  />
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2
                  id="what-we-do-heading"
                  className="mt-5 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight"
                >
                  More Than a Bakery.
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-7">
                  From freshly baked croissants to specialty coffee, Tera
                  offers a complete experience — in our bakery, caf&eacute;,
                  and beyond.
                </p>
              </StaggerItem>

              <StaggerItem className="mt-8">
                <ul className="divide-y divide-border/70">
                  {CATEGORIES.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={category.href}
                        className="group flex items-center gap-4 py-5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-alt sm:gap-5"
                      >
                        <span
                          aria-hidden="true"
                          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/70 text-brand transition-colors duration-200 group-hover:border-brand group-hover:bg-brand group-hover:text-brand-contrast"
                        >
                          <CategoryIcon name={category.icon} className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-serif text-lg font-medium text-text transition-colors duration-200 group-hover:text-brand">
                            {category.title}
                          </span>
                          <span className="mt-0.5 block text-sm text-muted">
                            {category.description}
                          </span>
                        </span>
                        <ArrowRightIcon className="h-4 w-4 shrink-0 text-subtle transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-2">
                  <Link
                    href="/menu"
                    className="group inline-flex items-center gap-2 text-[14px] font-semibold text-brand transition-colors duration-200 hover:text-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-alt sm:text-[15px]"
                  >
                    Explore Our Offerings
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
