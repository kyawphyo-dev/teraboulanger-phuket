/**
 * Centralized store information for Tera Boulanger Phuket.
 *
 * The "Visit Our Stores" section is data-driven: it renders one featured card,
 * two columns, or a 3-column grid based on how many objects live in
 * `STORE_CONFIG.branches`. Add or remove branches here — never inside the
 * presentation component.
 *
 * All content below is placeholder demo content awaiting verified details
 * from the owner. Never invent branch names, addresses, opening hours or
 * Google Maps URLs.
 */

export type StoreBranch = {
  /** Stable unique id — also used as the React key. */
  id: string;
  name: string;
  /** Short neighbourhood / area label, e.g. "Phuket Old Town". */
  locationLabel?: string;
  address: {
    line1: string;
    line2?: string;
  };
  openingHours: {
    schedule: string;
  };
  image: {
    src: string;
    alt: string;
  };
  /** Google Maps deep link for this exact branch — never shared between branches. */
  mapsUrl: string;
  /** Optional short branch description. Omit rather than inventing copy. */
  description?: string;
  /** Marks temporary demo content so it is badged as a placeholder in the UI. */
  isPlaceholder?: boolean;
};

const BRANCHES: StoreBranch[] = [
  // ——— Branch 01 — current confirmed store (existing verified information) ———
  {
    id: "phuket-old-town",
    name: "Tera Boulanger Phuket",
    locationLabel: "Phuket Old Town",
    address: {
      line1: "123/45 Phuket Old Town",
      line2: "Phuket 83000, Thailand",
    },
    openingHours: {
      schedule: "Mon – Sun · 7:00 AM – 8:00 PM",
    },
    image: {
      src: "/Brand_Identity/Key_Visual/visit_store_storefront.jpg",
      alt: "Tera Boulanger Phuket storefront in Phuket Old Town",
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Phuket+Old+Town", // Placeholder
    description:
      "Step into our bakery and experience the true taste of French craftsmanship in the heart of Phuket.",
  },

  // ——— Branch 02 — DEMO branch at Central Phuket ———
  // Rendered with the "Placeholder photo" badge. Replace every bracket value
  // with verified information and delete `isPlaceholder` once confirmed.
  {
    id: "central-phuket",
    name: "Tera Boulanger Central Phuket",
    locationLabel: "Central Phuket",
    address: {
      line1: "[Unit number], Central Phuket",
      line2: "[District], Phuket [postcode], Thailand",
    },
    openingHours: {
      schedule: "[Mon – Sun · 0:00 AM – 0:00 PM]",
    },
    image: {
      src: "/images/partners/demo-cafe-exterior.jpg",
      alt: "Placeholder storefront photograph — not an actual Tera Boulanger branch",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Tera+Boulanger+Central+Phuket", // Placeholder
    isPlaceholder: true,
  },

  // ——— TEMPLATE — additional branch ———
  // Uncomment, then replace every bracket value with *verified* information and
  // delete `isPlaceholder` once the branch is confirmed. Temporary demo photos
  // live in `/public/images/partners/` and must never be presented as a real
  // Tera Boulanger branch. Each branch must keep its own `mapsUrl`.
  //
  // {
  //   id: "second-branch",
  //   name: "[Branch name]",
  //   locationLabel: "[Neighbourhood]",
  //   address: {
  //     line1: "[Street address]",
  //     line2: "[City, postcode, country]",
  //   },
  //   openingHours: {
  //     schedule: "[Mon – Sun · 0:00 AM – 0:00 PM]",
  //   },
  //   image: {
  //     src: "/images/partners/demo-cafe-exterior.jpg",
  //     alt: "Placeholder storefront photograph — not an actual Tera Boulanger branch",
  //   },
  //   mapsUrl: "https://www.google.com/maps/search/?api=1&query=[Branch+name+Phuket]",
  //   isPlaceholder: true,
  // },
];

export const STORE_CONFIG = {
  label: "FIND US",
  heading: "Visit Our Stores",
  description:
    "Discover your nearest Tera Boulanger for freshly baked croissants, good coffee, and a warm welcome.",
  cta: {
    label: "Get Directions",
  },
  social: {
    instagram: {
      label: "Follow us on Instagram",
      url: "https://www.instagram.com/", // Placeholder
    },
  },
  branches: BRANCHES,
};
