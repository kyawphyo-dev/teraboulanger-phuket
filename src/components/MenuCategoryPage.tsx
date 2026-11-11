import Image from "next/image";
import Link from "next/link";
import type { MenuItem } from "@/lib/menu-config";
import type { MenuCategoryPageConfig } from "@/lib/menu-category-config";
import VisitStore from "@/components/VisitStore";

type MenuCategoryPageProps = {
  config: MenuCategoryPageConfig;
  items: MenuItem[];
};

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CategoryHero({ config }: { config: MenuCategoryPageConfig }) {
  return (
    <section
      aria-labelledby="category-hero-title"
      className="relative isolate w-full overflow-hidden bg-bg"
    >
      <div className="relative h-[300px] min-h-[300px] max-h-[440px] w-full sm:h-[36vh] lg:h-[400px]">
        <Image
          src={config.hero.image.src}
          alt={config.hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[55%_54%] sm:object-[center_50%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/5"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl text-left text-cream">
            <h1
              id="category-hero-title"
              className="font-serif text-[48px] leading-[1.05] tracking-tight drop-shadow sm:text-[64px] lg:text-[76px]"
            >
              {config.hero.title}
            </h1>
            <p className="mt-4 font-sans text-[16px] italic tracking-wide text-cream sm:text-[19px] lg:text-[21px]">
              {config.hero.subtitle}
            </p>
            <div className="mt-6 h-px w-14 bg-cream/70" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto w-full max-w-7xl border-b border-border/60 px-5 py-4 text-[13px] sm:px-8 lg:px-12"
    >
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <li>
          <Link
            href="/"
            className="text-muted transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-subtle">
          /
        </li>
        <li>
          <Link
            href="/menu"
            className="text-muted transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Menu
          </Link>
        </li>
        <li aria-hidden="true" className="text-subtle">
          /
        </li>
        <li aria-current="page" className="text-brand">
          {current}
        </li>
      </ol>
    </nav>
  );
}

function ProductCard({ product }: { product: MenuItem }) {
  return (
    <article className="group min-w-0">
      <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-sm border border-border/30 bg-surface sm:mb-4">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(max-width: 767px) 46vw, (max-width: 1279px) 22vw, 270px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="font-serif text-[16px] leading-snug text-text sm:text-[18px] lg:text-[20px]">
        {product.name}
      </h3>
      <p className="mt-1 text-[12px] leading-relaxed text-muted sm:text-[13px]">
        {product.description}
      </p>
      <p className="mt-1.5 text-[14px] font-medium text-text sm:text-[15px]">
        {product.price}
      </p>
    </article>
  );
}

function CategoryEditorial({
  config,
  items,
}: MenuCategoryPageProps) {
  return (
    <section
      aria-labelledby="category-introduction-heading"
      className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
        <div className="flex flex-col items-start md:col-span-3">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-brand">
            {config.introduction.label}
          </p>
          <h2
            id="category-introduction-heading"
            className="mt-5 max-w-[15ch] font-serif text-[34px] leading-[1.12] tracking-tight text-text sm:text-[40px] lg:text-[42px]"
          >
            {config.introduction.heading}
          </h2>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
            {config.introduction.description}
          </p>
          <Link
            href="/menu"
            className="group mt-7 inline-flex min-h-11 items-center gap-3 rounded-full border border-brand/70 px-6 text-[13px] font-medium text-text transition-colors hover:bg-brand hover:text-brand-contrast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Back to Menu
            <ArrowRightIcon className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1 group-hover:text-brand-contrast" />
          </Link>
          <div className="relative mt-8 hidden h-40 w-full max-w-[250px] md:mt-auto md:block lg:h-44">
            <Image
              src="/Brand_Identity/Key_Visual/10_building_green.png"
              alt="Tera Boulanger Phuket Old Town building illustration"
              fill
              sizes="(max-width: 1023px) 20vw, 250px"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="min-w-0 md:col-span-9">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 md:gap-x-5 md:gap-y-10 lg:gap-x-8">
            {items.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
          <p className="mt-8 border-t border-border/50 pt-4 text-[11px] leading-relaxed text-muted">
            Product photography, descriptions and prices are temporary
            placeholders for illustration. Please confirm current menu items
            and pricing in store.
          </p>
        </div>

        <div className="relative mx-auto h-32 w-full max-w-[240px] md:hidden">
          <Image
            src="/Brand_Identity/Key_Visual/10_building_green.png"
            alt="Tera Boulanger Phuket Old Town building illustration"
            fill
            sizes="240px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

function CoffeePromotion({ config }: { config: MenuCategoryPageConfig }) {
  return (
    <section
      aria-labelledby="coffee-promotion-heading"
      className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12"
    >
      <div className="relative isolate flex min-h-[270px] items-center overflow-hidden rounded-sm bg-surface sm:min-h-[300px] lg:min-h-[320px]">
        <Image
          src={config.promotion.image.src}
          alt={config.promotion.image.alt}
          fill
          sizes="(max-width: 1280px) calc(100vw - 2.5rem), 1280px"
          className="object-cover object-[center_53%] sm:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/5"
        />
        <div className="relative z-10 max-w-xl px-7 py-10 text-cream sm:px-10 lg:px-12">
          <h2
            id="coffee-promotion-heading"
            className="font-serif text-[34px] leading-tight tracking-tight sm:text-[42px] lg:text-[48px]"
          >
            {config.promotion.heading}
          </h2>
          <p className="mt-3 max-w-md font-sans text-[14px] italic leading-relaxed text-cream/90 sm:text-[16px]">
            {config.promotion.description}
          </p>
          <Link
            href="#visit-our-store"
            className="group mt-6 inline-flex min-h-11 items-center gap-3 rounded-full border border-cream/80 px-6 text-[12px] font-medium text-cream transition-colors hover:bg-cream hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Visit Our Store
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function MenuCategoryPage({
  config,
  items,
}: MenuCategoryPageProps) {
  return (
    <div className="bg-bg">
      <CategoryHero config={config} />
      <Breadcrumbs current={config.hero.title} />
      <CategoryEditorial config={config} items={items} />
      <CoffeePromotion config={config} />
      <div id="visit-our-store" className="scroll-mt-24">
        <VisitStore />
      </div>
    </div>
  );
}
