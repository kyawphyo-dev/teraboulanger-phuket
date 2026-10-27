export interface Partner {
  id: string;
  name: string;
  logo: string;
  image: string;
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
  },
  cta: {
    tagline: "WORK WITH US",
    heading: "Interested in being part of our network?",
    description:
      "We're always looking to partner with like-minded businesses and brands. Whether you're a café, restaurant, hotel or retail concept — let's create something special together.",
    buttonLabel: "ENQUIRE ABOUT WHOLESALE",
    buttonUrl: "/contact", // Assuming /contact exists or is the standard route
    sideImage: {
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Editorial+photography+of+freshly+baked+croissants+on+a+cooling+rack+in+a+professional+bakery+setting+natural+light+warm+tones&image_size=landscape_16_9",
      alt: "Freshly baked croissants in bakery",
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
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Editorial+photography+of+a+chic+modern+cafe+entrance+in+Phuket+Old+Town+with+outdoor+seating+and+plants&image_size=landscape_4_3",
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
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Luxury+restaurant+interior+with+warm+lighting+a+fresh+croissant+on+a+plate+with+coffee+on+a+wooden+table&image_size=landscape_4_3",
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
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Boutique+hotel+poolside+view+at+dusk+with+elegant+architecture+and+tropical+plants&image_size=landscape_4_3",
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
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Premium+lifestyle+concept+store+interior+display+with+pastry+boxes+and+minimalist+design&image_size=landscape_4_3",
      category: "Brand Collaboration",
      type: "LIFESTYLE & RETAIL",
      location: "Bangkok, Thailand",
      description:
        "A lifestyle concept store that values quality and design. We collaborate on seasonal pastry boxes and special events.",
      websiteUrl: "https://example.com",
    },
  ] as Partner[],
};
