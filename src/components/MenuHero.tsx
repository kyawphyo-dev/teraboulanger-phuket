"use client";

import Image from "next/image";
import { MENU_CONFIG } from "@/lib/menu-config";

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
          <h1 className="font-serif text-[48px] sm:text-[72px] lg:text-[96px] text-[#FFF1CC] leading-tight tracking-tight drop-shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {heading}
          </h1>
          <p className="mt-4 font-sans text-[16px] sm:text-[20px] lg:text-[24px] text-[#FFF1CC] italic tracking-wide animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
