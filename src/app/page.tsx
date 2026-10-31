import Hero from "../components/Hero";
import BrandIntro from "../components/BrandIntro";
import SignatureProducts from "../components/SignatureProducts";
import CraftIngredients from "../components/CraftIngredients";
import PartnersSection from "../components/PartnersSection";
import TestimonialsSection from "../components/TestimonialsSection";
import VisitStore from "../components/VisitStore";

export default function Home() {
  return (
    <div className="flex flex-col min-h-0">
      <Hero />
      <BrandIntro />
      <SignatureProducts />
      <CraftIngredients />
      <PartnersSection />
      <TestimonialsSection />
      <VisitStore />
    </div>
  );
}
