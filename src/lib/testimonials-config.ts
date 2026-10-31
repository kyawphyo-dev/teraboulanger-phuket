export interface TestimonialSlide {
  id: string;
  quote: string;
  partnerName: string;
  partnerType: string;
  location?: string;
  image: string;
  imageAlt: string;
  logo?: string;
}

export const TESTIMONIALS_CONFIG = {
  section: {
    tagline: "Testimonials",
    heading: "What Our\nPartners Say",
    description:
      "We’re grateful for the trust and support from our partners. Their words inspire us to keep delivering the best, every day.",
  },
  slides: [
    {
      id: "01",
      quote:
        "Tera’s croissants have added something special to our menu. The quality is exceptional, and the team is always professional and supportive.",
      partnerName: "THE PORTRAIT",
      partnerType: "Hotel & Hospitality Partner",
      location: "Phuket, Thailand",
      image: "/images/partners/demo-hospitality-patio.jpg",
      imageAlt: "Freshly baked croissants in a sunlit cafe setting",
      logo: "/Brand_Identity/Logo/logo_symbol_orange.png", // Using brand symbol as placeholder logo
    },
    {
      id: "02",
      quote:
        "The consistency and flaky texture of Tera's pastries are unmatched. Our guests frequently comment on how they feel transported to Paris.",
      partnerName: "OLD TOWN BISTRO",
      partnerType: "Culinary Partner",
      location: "Phuket Old Town",
      image: "/images/partners/demo-cafe-exterior.jpg",
      imageAlt: "Luxury cafe interior in Phuket Old Town",
      logo: "/Brand_Identity/Logo/logo_symbol_orange.png",
    },
    {
      id: "03",
      quote:
        "Working with Tera Boulanger has elevated our breakfast experience. Their commitment to artisanal methods is evident in every bite.",
      partnerName: "AZURE RESORT",
      partnerType: "Wholesale Partner",
      location: "Bang Tao Beach",
      image: "/images/partners/demo-restaurant-croissant.jpg",
      imageAlt: "Croissant and latte art coffee on a marble table",
      logo: "/Brand_Identity/Logo/logo_symbol_orange.png",
    },
  ] as TestimonialSlide[],
};
