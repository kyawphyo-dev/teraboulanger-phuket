"use client";

import Link from "next/link";
import { MENU_CONFIG } from "@/lib/menu-config";
import type {
  MenuCategory,
  MenuItem,
  MenuSectionConfig,
} from "@/lib/menu-config";
import ImageReveal from "./animations/ImageReveal";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

const CATEGORY_PAGE_ROUTES: Partial<Record<MenuCategory, string>> = {
  Croissant: "/menu/croissants",
  Pastry: "/menu/pastries",
  Cake: "/menu/cakes",
  Beverage: "/menu/beverages",
};

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
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface mb-4 sm:mb-5 lg:mb-6 border border-border/30">
        <ImageReveal
          src={product.image.src}
          alt={product.image.alt}
          effect="clip"
          sizes="(max-width: 767px) 46vw, (max-width: 1023px) 22vw, 24vw"
          className="h-full w-full"
          imageClassName="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="font-serif text-[15px] sm:text-[18px] md:text-[17px] lg:text-[22px] font-medium text-text mb-1.5 sm:mb-2 transition-colors duration-200 group-hover:text-brand">
          {product.name}
        </h3>
        <p className="text-[12px] sm:text-[14px] md:text-[12px] lg:text-[14px] leading-relaxed text-muted line-clamp-2 mb-2.5 sm:mb-4">
          {product.description}
        </p>
        <span className="text-[14px] sm:text-[16px] md:text-[14px] lg:text-[16px] font-semibold text-text">
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
  const categoryPageHref = CATEGORY_PAGE_ROUTES[section.id];

  return (
    <section
      id={section.id}
      className="py-16 sm:py-20 lg:py-24 border-b border-border/50 last:border-0"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-16">
          {/* Section Info */}
          <StaggerContainer className="md:col-span-4 lg:col-span-3 flex flex-col items-start">
            <StaggerItem className="mb-5 sm:mb-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand font-bold">
                {section.label}
              </span>
            </StaggerItem>
            <StaggerItem className="mb-5 sm:mb-6">
              <h2 className="font-serif text-[32px] sm:text-[42px] md:text-[32px] lg:text-[42px] leading-tight font-medium text-text">
                {section.heading}
              </h2>
            </StaggerItem>
            <StaggerItem className="mb-6 sm:mb-8">
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-muted max-w-xs">
                {section.description}
              </p>
            </StaggerItem>
            <StaggerItem>
              {categoryPageHref ? (
                <Link
                  href={categoryPageHref}
                  className="group inline-flex items-center gap-2 text-[12px] sm:text-[13px] uppercase tracking-[0.15em] font-bold text-brand hover:text-brand transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {section.viewAllLabel}
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <button className="group inline-flex items-center gap-2 text-[12px] sm:text-[13px] uppercase tracking-[0.15em] font-bold text-brand hover:text-brand transition-colors">
                  {section.viewAllLabel}
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </StaggerItem>
          </StaggerContainer>

          {/* Product Grid */}
          <div className="md:col-span-8 lg:col-span-9">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-5 lg:gap-x-8 gap-y-10 lg:gap-y-12">
              {items.map((item) => (
                <StaggerItem key={item.id}>
                  <ProductCard product={item} />
                </StaggerItem>
              ))}
            </StaggerContainer>
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
    (section) => activeCategory === "All" || section.id === activeCategory,
  );

  return (
    <div className="bg-bg">
      {filteredSections.map((section) => {
        const items = MENU_CONFIG.items.filter(
          (item) => item.category === section.id,
        );
        return <MenuSection key={section.id} section={section} items={items} />;
      })}
    </div>
  );
}
