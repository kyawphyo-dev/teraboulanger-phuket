/**
 * Menu configuration for Tera Boulanger Phuket.
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20classic%20french%20croissant%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20almond%20croissant%20with%20powdered%20sugar%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20pain%20au%20chocolat%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20raisin%20danish%20pastry%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20cinnamon%20roll%20with%20glaze%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20berry%20danish%20pastry%20with%20fresh%20fruits%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20strawberry%20shortcake%20slice%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20rich%20chocolate%20mousse%20cake%20slice%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20japanese%20matcha%20green%20tea%20cake%20slice%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20hot%20cafe%20latte%20with%20art%20in%20glass%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20iced%20americano%20coffee%20in%20glass%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20iced%20matcha%20latte%20in%20glass%20on%20marble%20table%20high%20end%20bakery%20photography&image_size=landscape_4_3",
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
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ultra%20premium%20croissant%20close%20up%20on%20marble%20table%20warm%20lighting%20french%20bakery%20atmosphere&image_size=landscape_16_9",
  },
  categories: ["All", "Croissant", "Pastry", "Cake", "Beverage"] as MenuCategory[],
  items: MENU_ITEMS,
  sections: MENU_SECTIONS,
};
