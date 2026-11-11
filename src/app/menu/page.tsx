"use client";

import { useState } from "react";
import MenuHero from "@/components/MenuHero";
import CategoryNav from "@/components/CategoryNav";
import MenuGrid from "@/components/MenuGrid";
import VisitStore from "@/components/VisitStore";
import { MenuCategory } from "@/lib/menu-config";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      {/* Hero Section */}
      <MenuHero />

      {/* Category Navigation */}
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Menu Sections Grid */}
      <main className="flex-1">
        <MenuGrid activeCategory={activeCategory} />

        {/* Temporary photography notice — remove once official product photography is in place. */}
        <p className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 text-center text-[12px] leading-relaxed text-muted">
          Product photography is shown for illustration purposes only. Menu
          items and pricing are subject to change.
        </p>
      </main>

      {/* Visit Store Section - Reused from homepage if appropriate */}
      {/* According to the mockup, there's a transition to "Visit Our Store" */}
      <VisitStore />
    </div>
  );
}
