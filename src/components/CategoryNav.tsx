"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { MenuCategory, MENU_CONFIG } from "@/lib/menu-config";
import ActiveUnderline from "./navigation/ActiveUnderline";

interface CategoryNavProps {
  activeCategory: MenuCategory;
  onCategoryChange: (category: MenuCategory) => void;
}

export default function CategoryNav({
  activeCategory,
  onCategoryChange,
}: CategoryNavProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  /**
   * Keeps the selected category in view on narrow screens. Only the rail is
   * scrolled — never the page — so the rest of the layout stays put and the
   * user is never thrown back to the start of the list.
   */
  useEffect(() => {
    const rail = railRef.current;
    const item = activeItemRef.current;
    if (!rail || !item) return;

    const centered = item.offsetLeft - (rail.clientWidth - item.clientWidth) / 2;
    const maxScroll = rail.scrollWidth - rail.clientWidth;

    rail.scrollTo({
      left: Math.max(0, Math.min(centered, maxScroll)),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeCategory, reduceMotion]);

  return (
    <nav className="sticky top-[var(--navbar-height,72px)] z-30 w-full bg-bg/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          ref={railRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* `w-max` + `mx-auto` centres the list while it fits and still lets
              the rail scroll from the very first item once it does not. */}
          <div className="mx-auto flex w-max items-center gap-8 sm:gap-12 py-6 sm:py-8">
            {MENU_CONFIG.categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  ref={active ? activeItemRef : undefined}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onCategoryChange(category)}
                  className={`relative whitespace-nowrap text-[12px] sm:text-[14px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
                    active ? "text-brand" : "text-muted hover:text-text"
                  }`}
                >
                  {category}
                  {active && (
                    <ActiveUnderline
                      group="menu-categories"
                      className="inset-x-0 -bottom-2 h-0.5"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
