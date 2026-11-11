"use client";

import Image from "next/image";
import { MENU_CONFIG } from "@/lib/menu-config";
import TextReveal from "./animations/TextReveal";

export default function MenuHero() {
  const { heading, subtitle, image } = MENU_CONFIG.hero;

  return (
    <section className="relative w-full bg-bg overflow-hidden border-b border-border/50">
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
        {/* Background Image — object-cover + object-center mirrors
            background-size: cover / background-position: center */}
        <Image
          src={image}
          alt="Fresh croissants on the bakery counter"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/50" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-8">
          <TextReveal
            as="h1"
            effect="fade-up"
            duration={0.9}
            distance={32}
            className="font-serif text-[48px] sm:text-[72px] lg:text-[96px] leading-tight tracking-tight text-[#FFF1CC] drop-shadow-lg"
          >
            {heading}
          </TextReveal>
          <TextReveal
            as="p"
            effect="fade-up"
            duration={0.9}
            distance={24}
            delay={0.2}
            className="mt-4 font-sans text-[16px] sm:text-[20px] lg:text-[24px] text-[#FFF1CC] italic tracking-wide"
          >
            {subtitle}
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
