import Hero from "../components/Hero";
import BrandIntro from "../components/BrandIntro";

export default function Home() {
  return (
    <div className="flex flex-col min-h-0">
      <Hero />
      <BrandIntro />
    </div>
  );
}
