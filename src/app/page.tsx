import Hero from "../components/Hero";
import BrandIntro from "../components/BrandIntro";
import SignatureProducts from "../components/SignatureProducts";
import CraftIngredients from "../components/CraftIngredients";

export default function Home() {
  return (
    <div className="flex flex-col min-h-0">
      <Hero />
      <BrandIntro />
      <SignatureProducts />
      <CraftIngredients />
    </div>
  );
}
