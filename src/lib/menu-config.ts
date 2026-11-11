/**
 * Menu configuration for Tera Boulanger Phuket.
 *
 * NOTE: All product photography lives in `/public/images/menu/` and is
 * TEMPORARY stock imagery used as a visual reference only. It must never be
 * presented as actual Tera Boulanger product photography. Swap each `image.src`
 * for the official photograph once it is available — no component changes are
 * needed.
 *
 * Product names, descriptions and prices are placeholder content awaiting
 * confirmation from the owner.
 */

export type MenuCategory = "All" | "Croissant" | "Pastry" | "Cake" | "Beverage";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
  category: MenuCategory;
};

export type MenuSectionConfig = {
  id: MenuCategory;
  label: string;
  heading: string;
  description: string;
  viewAllLabel: string;
};

const MENU_ITEMS: MenuItem[] = [
  // Croissants
  {
    id: "classic-croissant",
    name: "Classic Croissant",
    description: "Flaky, buttery, and golden brown.",
    price: "120.-",
    image: {
      src: "/images/menu/croissant-classic.jpg",
      alt: "Classic Croissant",
    },
    category: "Croissant",
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    description: "Twice-baked with almond cream and sliced almonds.",
    price: "160.-",
    image: {
      src: "/images/menu/croissant-almond.jpg",
      alt: "Almond Croissant",
    },
    category: "Croissant",
  },
  {
    id: "pain-au-chocolat",
    name: "Pain au Chocolat",
    description: "Classic buttery pastry with rich chocolate center.",
    price: "140.-",
    image: {
      src: "/images/menu/croissant-pain-au-chocolat.jpg",
      alt: "Pain au Chocolat",
    },
    category: "Croissant",
  },
  // Pastries
  {
    id: "raisin-danish",
    name: "Raisin Danish",
    description: "Sweet pastry swirl with plump raisins.",
    price: "150.-",
    image: {
      src: "/images/menu/pastry-raisin-danish.jpg",
      alt: "Raisin Danish",
    },
    category: "Pastry",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    description: "Spiced cinnamon filling with light glaze.",
    price: "150.-",
    image: {
      src: "/images/menu/pastry-cinnamon-roll.jpg",
      alt: "Cinnamon Roll",
    },
    category: "Pastry",
  },
  {
    id: "berry-danish",
    name: "Berry Danish",
    description: "Buttery pastry with fresh seasonal berries.",
    price: "160.-",
    image: {
      src: "/images/menu/pastry-berry-danish.jpg",
      alt: "Berry Danish",
    },
    category: "Pastry",
  },
  // Cakes
  {
    id: "strawberry-shortcake",
    name: "Strawberry Shortcake",
    description: "Light sponge with fresh cream and strawberries.",
    price: "180.-",
    image: {
      src: "/images/menu/cake-strawberry-shortcake.jpg",
      alt: "Strawberry Shortcake",
    },
    category: "Cake",
  },
  {
    id: "chocolate-delice",
    name: "Chocolate Délice",
    description: "Rich dark chocolate mousse cake.",
    price: "180.-",
    image: {
      src: "/images/menu/cake-chocolate.jpg",
      alt: "Chocolate Délice",
    },
    category: "Cake",
  },
  {
    id: "matcha-cake",
    name: "Matcha Cake",
    description: "Premium Japanese matcha green tea cake.",
    price: "170.-",
    image: {
      src: "/images/menu/cake-matcha.jpg",
      alt: "Matcha Cake",
    },
    category: "Cake",
  },
  // Beverages
  {
    id: "latte",
    name: "Latte",
    description: "Smooth espresso with steamed milk.",
    price: "120.-",
    image: {
      src: "/images/menu/beverage-latte.jpg",
      alt: "Latte",
    },
    category: "Beverage",
  },
  {
    id: "iced-americano",
    name: "Iced Americano",
    description: "Refreshing chilled espresso with water.",
    price: "100.-",
    image: {
      src: "/images/menu/beverage-iced-americano.jpg",
      alt: "Iced Americano",
    },
    category: "Beverage",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    description: "Premium matcha with creamy milk.",
    price: "170.-",
    image: {
      src: "/images/menu/beverage-matcha-latte.jpg",
      alt: "Matcha Latte",
    },
    category: "Beverage",
  },
];

export const MENU_SECTIONS: MenuSectionConfig[] = [
  {
    id: "Croissant",
    label: "CROISSANTS",
    heading: "Buttery Perfection",
    description: "Flaky layers, golden crust, made with care.",
    viewAllLabel: "View All Croissants",
  },
  {
    id: "Pastry",
    label: "PASTRIES",
    heading: "Sweet Moments",
    description: "A delightful selection of French pastries.",
    viewAllLabel: "View All Pastries",
  },
  {
    id: "Cake",
    label: "CAKES",
    heading: "A Slice of Happiness",
    description: "Elegant cakes for life's sweet moments.",
    viewAllLabel: "View All Cakes",
  },
  {
    id: "Beverage",
    label: "BEVERAGES",
    heading: "Perfect Pair",
    description: "Coffee, tea and more, to complete your experience.",
    viewAllLabel: "View All Beverages",
  },
];

export const MENU_CONFIG = {
  hero: {
    heading: "Our Menu",
    subtitle: "A taste of Paris, in Phuket.",
    image: "/images/menu/hero/menu_hero.jpg",
  },
  categories: [
    "All",
    "Croissant",
    "Pastry",
    "Cake",
    "Beverage",
  ] as MenuCategory[],
  items: MENU_ITEMS,
  sections: MENU_SECTIONS,
};
