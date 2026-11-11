import type { Metadata } from "next";
import MenuCategoryPage from "@/components/MenuCategoryPage";
import { PASTRIES_PAGE_CONFIG } from "@/lib/menu-category-config";
import { MENU_CONFIG } from "@/lib/menu-config";

export const metadata: Metadata = {
  title: {
    absolute: "Pastries | Tera Boulanger Phuket",
  },
  description:
    "Explore the pastry selection at Tera Boulanger Phuket, from delicate Danish pastries to freshly baked favorites.",
  alternates: {
    canonical: "/menu/pastries",
  },
  openGraph: {
    title: "Pastries | Tera Boulanger Phuket",
    description:
      "Delicate layers, delightful moments. Discover the pastry menu at Tera Boulanger Phuket.",
    url: "/menu/pastries",
    images: [
      {
        url: PASTRIES_PAGE_CONFIG.hero.image.src,
        alt: PASTRIES_PAGE_CONFIG.hero.image.alt,
      },
    ],
  },
};

export default function PastriesPage() {
  const pastries = MENU_CONFIG.items.filter(
    (item) => item.category === PASTRIES_PAGE_CONFIG.category,
  );

  return <MenuCategoryPage config={PASTRIES_PAGE_CONFIG} items={pastries} />;
}
