import type { Metadata } from "next";
import MenuCategoryPage from "@/components/MenuCategoryPage";
import { BEVERAGES_PAGE_CONFIG } from "@/lib/menu-category-config";
import { MENU_CONFIG } from "@/lib/menu-config";

export const metadata: Metadata = {
  title: {
    absolute: "Beverages | Tera Boulanger Phuket",
  },
  description:
    "Discover coffee, tea, and more at Tera Boulanger Phuket, a perfect companion to every visit.",
  alternates: {
    canonical: "/menu/beverages",
  },
  openGraph: {
    title: "Beverages | Tera Boulanger Phuket",
    description:
      "Find a favorite coffee or matcha to complete your experience at Tera Boulanger Phuket.",
    url: "/menu/beverages",
    images: [
      {
        url: BEVERAGES_PAGE_CONFIG.hero.image.src,
        alt: BEVERAGES_PAGE_CONFIG.hero.image.alt,
      },
    ],
  },
};

export default function BeveragesPage() {
  const beverages = MENU_CONFIG.items.filter(
    (item) => item.category === BEVERAGES_PAGE_CONFIG.category,
  );

  return <MenuCategoryPage config={BEVERAGES_PAGE_CONFIG} items={beverages} />;
}
