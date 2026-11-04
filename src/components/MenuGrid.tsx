"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuItem, MenuSectionConfig, MENU_CONFIG } from "@/lib/menu-config";

interface ProductCardProps {
  product: MenuItem;
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

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface mb-6 border border-border/30">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="font-serif text-[20px] sm:text-[22px] font-medium text-text mb-2 transition-colors duration-200 group-hover:text-brand">
          {product.name}
        </h3>
        <p className="text-[14px] leading-relaxed text-muted line-clamp-2 mb-4">
          {product.description}
        </p>
        <span className="text-[16px] font-semibold text-text">
          {product.price}
        </span>
      </div>
    </div>
  );
}

interface MenuSectionProps {
  section: MenuSectionConfig;
  items: MenuItem[];
}

function MenuSection({ section, items }: MenuSectionProps) {
  return (
    <section id={section.id} className="py-16 sm:py-20 lg:py-24 border-b border-border/50 last:border-0">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section Info */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand font-bold mb-6">
              {section.label}
            </span>
            <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight font-medium text-text mb-6">
              {section.heading}
            </h2>
            <p className="text-[15px] leading-relaxed text-muted mb-8 max-w-xs">
              {section.description}
            </p>
            <button className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.15em] font-bold text-brand hover:text-brand transition-colors">
              {section.viewAllLabel}
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {items.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MenuGridProps {
  activeCategory: string;
}

export default function MenuGrid({ activeCategory }: MenuGridProps) {
  const filteredSections = MENU_CONFIG.sections.filter(
    (section) => activeCategory === "All" || section.id === activeCategory
  );

  return (
    <div className="bg-bg">
      {filteredSections.map((section) => {
        const items = MENU_CONFIG.items.filter((item) => item.category === section.id);
        return <MenuSection key={section.id} section={section} items={items} />;
      })}
    </div>
  );
}
