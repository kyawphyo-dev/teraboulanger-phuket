import type { Metadata } from "next";
import MenuCategoryPage from "@/components/MenuCategoryPage";
import { CROISSANTS_PAGE_CONFIG } from "@/lib/menu-category-config";
import { MENU_CONFIG } from "@/lib/menu-config";

export const metadata: Metadata = {
  title: {
    absolute: "Croissants | Tera Boulanger Phuket",
  },
  description:
    "Explore the croissant selection at Tera Boulanger Phuket, with delicate buttery layers and a golden crust.",
  alternates: {
    canonical: "/menu/croissants",
  },
  openGraph: {
    title: "Croissants | Tera Boulanger Phuket",
    description:
      "Buttery layers, golden crust. Discover the croissant menu at Tera Boulanger Phuket.",
    url: "/menu/croissants",
    images: [
      {
        url: CROISSANTS_PAGE_CONFIG.hero.image.src,
        alt: CROISSANTS_PAGE_CONFIG.hero.image.alt,
      },
    ],
  },
};

export default function CroissantsPage() {
  const croissants = MENU_CONFIG.items.filter(
    (item) => item.category === CROISSANTS_PAGE_CONFIG.category,
  );

  return (
    <MenuCategoryPage config={CROISSANTS_PAGE_CONFIG} items={croissants} />
  );
}
