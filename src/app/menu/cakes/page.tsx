import type { Metadata } from "next";
import MenuCategoryPage from "@/components/MenuCategoryPage";
import { CAKES_PAGE_CONFIG } from "@/lib/menu-category-config";
import { MENU_CONFIG } from "@/lib/menu-config";

export const metadata: Metadata = {
  title: {
    absolute: "Cakes | Tera Boulanger Phuket",
  },
  description:
    "Explore cakes at Tera Boulanger Phuket, with elegant slices for life's sweet moments.",
  alternates: {
    canonical: "/menu/cakes",
  },
  openGraph: {
    title: "Cakes | Tera Boulanger Phuket",
    description:
      "A little sweetness in every slice. Discover cakes at Tera Boulanger Phuket.",
    url: "/menu/cakes",
    images: [
      {
        url: CAKES_PAGE_CONFIG.hero.image.src,
        alt: CAKES_PAGE_CONFIG.hero.image.alt,
      },
    ],
  },
};

export default function CakesPage() {
  const cakes = MENU_CONFIG.items.filter(
    (item) => item.category === CAKES_PAGE_CONFIG.category,
  );

  return <MenuCategoryPage config={CAKES_PAGE_CONFIG} items={cakes} />;
}
