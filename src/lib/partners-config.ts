/**
 * Demo photography sources (temporary placeholders).
 *
 * These images are illustrative only — they do NOT depict Tera Boulanger or any
 * confirmed business partner. All files live in `public/images/partners/` so they
 * can be replaced 1:1 with official photography later (keep the same filenames).
 *
 * Source: Unsplash (https://unsplash.com) under the Unsplash License
 * (https://unsplash.com/license) — free to use, no attribution required.
 *
 * - demo-partner-hero.jpg       https://unsplash.com/photos/person-selecting-croissants-from-a-tray-vAwuQ7s79Zo
 * - demo-cafe-exterior.jpg      https://unsplash.com/photos/coffee-shop-and-cafe-storefront-with-plants-JQgWhib1FA0
 * - demo-restaurant-croissant.jpg https://unsplash.com/photos/a-cup-of-coffee-and-a-croissant-on-a-table-RJCODpGceTQ
 * - demo-hospitality-patio.jpg  https://unsplash.com/photos/outdoor-cafe-seating-with-umbrellas-and-plants-eCj0ENlsklI
 * - demo-retail-pastries.jpg    https://unsplash.com/photos/a-display-case-filled-with-lots-of-different-types-of-pastries-raQr4ScbK2o
 * - demo-wholesale-bakery.jpg   https://unsplash.com/photos/freshly-baked-croissants-sit-on-a-tray-7Yl_Qhxfgok
 */

export interface Partner {
  id: string;
  name: string;
  logo: string;
  image: string;
  imageAlt: string;
  category: "Wholesale Partner" | "Brand Collaboration";
  type: string;
  location: string;
  description: string;
  websiteUrl?: string;
}

export const PARTNERS_CONFIG = {
  section: {
    tagline: "OUR PARTNERS",
    heading: "Good Company.\nMade to be Shared.",
    description:
      "We're proud to work alongside exceptional cafés, restaurants, hotels and lifestyle brands that share our appreciation for quality, craftsmanship and good food.",
    quote: "Better together for a tastier tomorrow.",
    heroImage: {
      src: "/images/partners/demo-partner-hero.jpg",
      alt: "Hands selecting freshly baked golden croissants from a tray",
    },
  },
  cta: {
    tagline: "WORK WITH US",
    heading: "Interested in being part of our network?",
    description:
      "We're always looking to partner with like-minded businesses and brands. Whether you're a café, restaurant, hotel or retail concept — let's create something special together.",
    buttonLabel: "ENQUIRE ABOUT WHOLESALE",
    buttonUrl: "/contact", // Assuming /contact exists or is the standard route
    sideImage: {
      src: "/images/partners/demo-wholesale-bakery.jpg",
      alt: "Freshly baked croissants resting on a bakery tray",
      caption: "Quality products for great businesses.",
    },
  },
  categories: [
    { id: "all", label: "ALL PARTNERS" },
    { id: "wholesale", label: "WHOLESALE PARTNERS" },
    { id: "collaboration", label: "BRAND COLLABORATIONS" },
  ],
  // Sample data inspired by the user's provided image
  partners: [
    {
      id: "little-market",
      name: "LITTLE MARKET",
      logo: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Minimalist+black+wordmark+logo+for+Little+Market+Cafe+clean+typography&image_size=square",
      image: "/images/partners/demo-cafe-exterior.jpg",
      imageAlt: "Café storefront surrounded by greenery and potted plants",
      category: "Wholesale Partner",
      type: "CAFÉ & KITCHEN",
      location: "Phuket, Thailand",
      description:
        "A cozy café known for its specialty coffee and fresh pastries. We supply their daily selection of croissants and viennoiseries.",
      websiteUrl: "https://example.com",
    },
    {
      id: "the-salt",
      name: "THE SALT",
      logo: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Elegant+serif+wordmark+logo+for+The+Salt+Restaurant+minimalist&image_size=square",
      image: "/images/partners/demo-restaurant-croissant.jpg",
      imageAlt: "A cup of coffee served beside a golden croissant on a table",
      category: "Wholesale Partner",
      type: "RESTAURANT & DINING",
      location: "Phuket, Thailand",
      description:
        "A modern European restaurant with a focus on seasonal ingredients. We partnered to provide their signature pastries and breads.",
      websiteUrl: "https://example.com",
    },
    {
      id: "the-portrait",
      name: "THE PORTRAIT",
      logo: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Sophisticated+sans-serif+logo+for+The+Portrait+Phuket+hotel&image_size=square",
      image: "/images/partners/demo-hospitality-patio.jpg",
      imageAlt: "Outdoor café seating with umbrellas and tropical plants",
      category: "Wholesale Partner",
      type: "HOTEL & HOSPITALITY",
      location: "Phuket, Thailand",
      description:
        "A boutique hotel offering a refined guest experience. Our bakery products are part of their breakfast and in-room dining service.",
      websiteUrl: "https://example.com",
    },
    {
      id: "laneige",
      name: "LANEIGE",
      logo: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern+minimalist+brand+logo+for+Laneige+lifestyle+retail&image_size=square",
      image: "/images/partners/demo-retail-pastries.jpg",
      imageAlt: "A display case filled with an assortment of fresh pastries",
      category: "Brand Collaboration",
      type: "LIFESTYLE & RETAIL",
      location: "Bangkok, Thailand",
      description:
        "A lifestyle concept store that values quality and design. We collaborate on seasonal pastry boxes and special events.",
      websiteUrl: "https://example.com",
    },
  ] as Partner[],
};
