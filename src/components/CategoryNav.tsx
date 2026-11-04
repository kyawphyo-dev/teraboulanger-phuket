"use client";

import { MenuCategory, MENU_CONFIG } from "@/lib/menu-config";

interface CategoryNavProps {
  activeCategory: MenuCategory;
  onCategoryChange: (category: MenuCategory) => void;
}

export default function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <nav className="sticky top-[var(--navbar-height,72px)] z-30 w-full bg-bg/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center sm:justify-start gap-8 sm:gap-12 overflow-x-auto no-scrollbar py-6 sm:py-8">
          {MENU_CONFIG.categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`relative whitespace-nowrap text-[12px] sm:text-[14px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
                activeCategory === category ? "text-brand" : "text-muted hover:text-text"
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand animate-in fade-in zoom-in duration-300" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
