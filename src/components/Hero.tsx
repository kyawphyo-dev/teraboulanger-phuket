import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full bg-bg text-text overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.55">
            <circle cx="1450" cy="140" r="220" fill="#F77908" />
            <circle cx="70" cy="720" r="160" fill="#FFF1CC" />
          </g>
          <g opacity="0.8" stroke="#F77908" strokeWidth="1">
            <path d="M80 140 Q 280 80 480 180 T 880 160 T 1280 200 T 1680 160" />
            <path d="M60 220 Q 260 160 460 260 T 860 240 T 1260 280 T 1660 240" opacity="0.55" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-28 pb-20 sm:pb-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.28em] text-brand font-semibold mb-7 sm:mb-9">
              <span
                aria-hidden="true"
                className="inline-block w-8 h-px bg-brand"
              />
              Est. Maison Boulangère
            </span>

            <h1
              id="hero-heading"
              className="font-serif font-semibold text-text tracking-tight text-[44px] leading-[0.98] sm:text-[64px] sm:leading-[0.96] lg:text-[92px] lg:leading-[0.92]"
            >
              The art of
              <span className="block text-brand italic"> French baking</span>
              <span className="block"> in Phuket.</span>
            </h1>

            <p className="mt-7 sm:mt-8 max-w-xl text-[15px] sm:text-[16px] leading-[1.75] text-muted">
              Slow-fermented artisan breads, hand-laminated viennoiserie, and
              the unmistakable warmth of a true French maison — crafted every
              morning, from our oven in Phuket to your table.
            </p>

            <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-[14px] sm:text-[15px] font-semibold text-brand-contrast transition-all duration-200 hover:bg-brand-hover active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Discover Our Menu
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/our-story"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 text-[14px] sm:text-[15px] font-semibold text-text transition-all duration-200 hover:border-border-strong hover:bg-surface-alt active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Our Story
              </Link>
            </div>

            <dl className="mt-14 sm:mt-16 grid grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-6 w-full max-w-lg border-t border-border pt-8">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.24em] text-subtle font-semibold">
                  Oven
                </dt>
                <dd className="mt-2 font-serif text-2xl sm:text-[28px] leading-none text-text">
                  06<span className="text-brand">.</span>30
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.24em] text-subtle font-semibold">
                  Ferment
                </dt>
                <dd className="mt-2 font-serif text-2xl sm:text-[28px] leading-none text-text">
                  72<span className="text-brand">h</span>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.24em] text-subtle font-semibold">
                  Flour
                </dt>
                <dd className="mt-2 font-serif text-2xl sm:text-[28px] leading-none text-text">
                  T<span className="text-brand">65</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div
              aria-hidden="true"
              className="absolute -inset-x-6 -top-6 -bottom-10 sm:-inset-x-10 sm:-top-8 sm:-bottom-12 border border-border rounded-[28px] opacity-70"
            />
            <figure className="relative aspect-[4/5] sm:aspect-[5/6] w-full rounded-[24px] overflow-hidden bg-surface-alt border border-border">
              <picture className="block w-full h-full">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Editorial%20photography%20of%20French%20bakery%20artisan%20baguette%20and%20croissant%20on%20dark%20textured%20stone%20counter%2C%20warm%20morning%20light%20from%20a%20window%2C%20dusting%20of%20flour%2C%20crusty%20golden%20crust%2C%20shallow%20depth%20of%20field%2C%20moody%20luxury%20editorial%20food%20photography%2C%20phuket%20teraboulanger&image_size=portrait_4_3"
                  alt="Artisan baguette, croissant and house-made pastries fresh from the Teraboulanger oven"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </picture>
              <figcaption className="absolute left-5 right-5 bottom-5 sm:left-6 sm:right-6 sm:bottom-6 rounded-2xl bg-bg/85 backdrop-blur-md border border-border px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-brand font-semibold">
                    Signature
                  </p>
                  <p className="mt-1.5 font-serif text-[18px] sm:text-[22px] leading-tight text-text font-medium">
                    La Baguette Tradition
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-contrast"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </figcaption>
            </figure>

            <div className="hidden sm:flex absolute -left-2 lg:-left-6 top-1/3 -translate-y-1/2 z-10 w-52 sm:w-60 flex-col gap-3 rounded-2xl bg-surface border border-border p-4 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.55)]">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-subtle font-semibold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
                Today&apos;s Batch
              </div>
              <p className="font-serif text-lg leading-snug text-text">
                Croissants au beurre
              </p>
              <p className="text-[13px] text-muted leading-relaxed">
                AOP butter · 24 folds · baked 06:45
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
