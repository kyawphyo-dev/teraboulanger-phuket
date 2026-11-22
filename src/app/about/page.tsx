import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurPhilosophy from "@/components/about/OurPhilosophy";
import WhatWeDo from "@/components/about/WhatWeDo";
import ArtBehindCreations from "@/components/about/ArtBehindCreations";
import TeraExperience from "@/components/about/TeraExperience";
import OurCommunity from "@/components/about/OurCommunity";
import VisitTera from "@/components/about/VisitTera";

export const metadata: Metadata = {
  title: "About & Our Story",
  description:
    "Discover Tera Boulanger — a French-inspired bakery and café in Phuket Old Town. Learn about our story, craftsmanship, philosophy and the experiences we create.",
};

/**
 * About & Our Story page.
 *
 * A single editorial experience composed of eight sections, each with a
 * deliberately different layout so the page has visual rhythm rather than a
 * repeating two-column template. All section components live in
 * `@/components/about/`.
 */
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-0">
      <AboutHero />
      <OurStory />
      <OurPhilosophy />
      <WhatWeDo />
      <ArtBehindCreations />
      <TeraExperience />
      <OurCommunity />
      <VisitTera />
    </div>
  );
}
