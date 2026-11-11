import type { MenuCategory } from "@/lib/menu-config";

export type MenuCategoryPageConfig = {
  category: Exclude<MenuCategory, "All">;
  hero: {
    title: string;
    subtitle: string;
    image: {
      src: string;
      alt: string;
    };
  };
  introduction: {
    label: string;
    heading: string;
    description: string;
  };
  promotion: {
    heading: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
};

export const CROISSANTS_PAGE_CONFIG: MenuCategoryPageConfig = {
  category: "Croissant",
  hero: {
    title: "Croissants",
    subtitle: "Buttery layers, golden crust.",
    image: {
      src: "/images/menu/hero/croissants-counter.jpg",
      alt: "Freshly baked croissants arranged along a bakery counter",
    },
  },
  introduction: {
    label: "OUR CROISSANTS",
    heading: "A Classic French Delight",
    description: "Flaky layers, rich butter, made with care.",
  },
  promotion: {
    heading: "Perfect with Coffee",
    description: "Enjoy our croissants with a cup of coffee.",
    image: {
      src: "/images/partners/demo-restaurant-croissant.jpg",
      alt: "A croissant served beside a cup of coffee",
    },
  },
};

export const PASTRIES_PAGE_CONFIG: MenuCategoryPageConfig = {
  category: "Pastry",
  hero: {
    title: "Pastries",
    subtitle: "Delicate layers, delightful moments.",
    image: {
      src: "/images/menu/pastry-berry-danish.jpg",
      alt: "A tray of freshly baked fruit-topped Danish pastries",
    },
  },
  introduction: {
    label: "OUR PASTRIES",
    heading: "Sweet Moments",
    description: "A delightful selection of French pastries.",
  },
  promotion: {
    heading: "A Little Moment of Sweetness",
    description: "Discover our delightful selection of freshly baked pastries.",
    image: {
      src: "/images/menu/pastry-raisin-danish.jpg",
      alt: "Golden raisin Danish pastries on a light linen surface",
    },
  },
};

export const CAKES_PAGE_CONFIG: MenuCategoryPageConfig = {
  category: "Cake",
  hero: {
    title: "Cakes",
    subtitle: "A little sweetness in every slice.",
    image: {
      src: "/images/menu/cake-strawberry-shortcake.jpg",
      alt: "A slice of strawberry shortcake with fresh berries and cream",
    },
  },
  introduction: {
    label: "OUR CAKES",
    heading: "A Slice of Happiness",
    description: "Elegant cakes for life's sweet moments.",
  },
  promotion: {
    heading: "Celebrate Every Sweet Moment",
    description: "Beautifully crafted cakes for every occasion.",
    image: {
      src: "/images/menu/cake-chocolate.jpg",
      alt: "A slice of chocolate cake topped with fresh fruit",
    },
  },
};

export const BEVERAGES_PAGE_CONFIG: MenuCategoryPageConfig = {
  category: "Beverage",
  hero: {
    title: "Beverages",
    subtitle: "The perfect companion to every moment.",
    image: {
      src: "/images/menu/beverage-iced-americano.jpg",
      alt: "Iced coffee and a latte on a warm wooden cafe table",
    },
  },
  introduction: {
    label: "OUR BEVERAGES",
    heading: "Perfect Pair",
    description: "Coffee, tea and more, to complete your experience.",
  },
  promotion: {
    heading: "Your Perfect Coffee Moment",
    description:
      "Discover the perfect drink to accompany your favorite treats.",
    image: {
      src: "/images/menu/beverage-latte.jpg",
      alt: "Freshly prepared latte with delicate latte art",
    },
  },
};
