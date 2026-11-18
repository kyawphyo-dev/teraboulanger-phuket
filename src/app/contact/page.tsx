import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import VisitStore from "@/components/VisitStore";
import ContactMessageForm from "@/components/ContactMessageForm";
import ContactScrollCue from "@/components/ContactScrollCue";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tera Boulanger in Phuket for visits, wholesale, catering, events, and collaborations.",
};

const CONTACT_METHODS = [
  {
    name: "Phone",
    detail: "[Phone number pending confirmation]",
    action: "Call",
    icon: "phone",
  },
  {
    name: "Email",
    detail: "[Email address pending confirmation]",
    action: "Email",
    icon: "mail",
  },
  {
    name: "Instagram",
    detail: "[@Instagram handle pending confirmation]",
    action: "Follow",
    icon: "instagram",
  },
] as const;

const ENQUIRIES = [
  {
    title: "Wholesale & Business Partnerships",
    icon: "bread",
  },
  {
    title: "Catering & Event Orders",
    icon: "coffee",
  },
  {
    title: "Custom Croissant & Special Requests",
    icon: "sparkles",
  },
] as const;

const INSTAGRAM_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1758634553713-8130e8a5761d?auto=format&fit=crop&fm=jpg&q=85&w=900",
    alt: "Golden croissant and pastry served on a plate",
  },
  {
    src: "https://images.unsplash.com/photo-1763683944413-731050054d3a?auto=format&fit=crop&fm=jpg&q=85&w=900",
    alt: "Croissant with berries arranged for a café treat",
  },
  {
    src: "https://images.unsplash.com/photo-1769138886199-7cc55bf86da5?auto=format&fit=crop&fm=jpg&q=85&w=900",
    alt: "Croissant and coffee on a café table",
  },
  {
    src: "https://images.unsplash.com/photo-1761065110228-803e1fbc3d0a?auto=format&fit=crop&fm=jpg&q=85&w=900",
    alt: "Welcoming café storefront with baked goods inside",
  },
  {
    src: "https://images.unsplash.com/photo-1769138886199-7cc55bf86da5?auto=format&fit=crop&fm=jpg&q=85&w=900",
    alt: "Coffee and pastry in a relaxed café setting",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section
        aria-labelledby="contact-hero-heading"
        className="relative isolate flex min-h-[470px] items-end overflow-hidden bg-inverse sm:min-h-[540px] lg:min-h-[620px]"
      >
        <Image
          src="https://images.unsplash.com/photo-1761065110228-803e1fbc3d0a?auto=format&fit=crop&fm=jpg&q=85&w=2400"
          alt="Warmly lit café storefront framed by leafy greenery"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <Reveal effect="fade-up" distance={18} duration={0.8}>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream sm:text-xs">
              Get in touch
              <span aria-hidden="true" className="h-px w-10 bg-cream/70" />
            </p>
            <h1
              id="contact-hero-heading"
              className="max-w-3xl font-serif text-[clamp(2.8rem,8vw,5.75rem)] leading-[0.98] tracking-tight text-cream"
            >
              We&apos;d Love to Hear From You.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/90 sm:text-base sm:leading-7">
              Whether you&apos;re planning a visit, enquiring about our
              products, or looking to work together, we&apos;d be delighted to
              hear from you.
            </p>
            <ContactScrollCue targetId="contact-information" />
          </Reveal>
        </div>
      </section>

      <section
        id="contact-information"
        aria-labelledby="contact-information-heading"
        className="relative scroll-mt-20 overflow-hidden bg-bg py-16 text-text sm:scroll-mt-24 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12">
          <Reveal
            effect="fade"
            className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
          >
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[440px] sm:aspect-square">
              <div
                aria-hidden="true"
                className="absolute bottom-[5%] left-[2%] h-[74%] w-[78%] rounded-full bg-brand"
              />
              <div
                aria-hidden="true"
                className="absolute right-[2%] top-[5%] h-20 w-20 rounded-full border border-brand/50 sm:h-28 sm:w-28"
              />
              <Image
                src="/Brand_Identity/Key_Visual/03_cherub.png"
                alt="Tera Boulanger cherub illustration"
                fill
                sizes="(max-width: 1024px) 80vw, 38vw"
                className="relative z-10 object-contain object-bottom"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal effect="fade-up">
              <Eyebrow>Contact Information</Eyebrow>
              <h2
                id="contact-information-heading"
                className="mt-5 max-w-xl font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[0.98] tracking-tight"
              >
                Let&apos;s Stay
                <span className="block">Connected</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                Feel free to reach out to us through any of the channels below.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-0 border-y border-border sm:grid-cols-3 sm:border-y-0">
              {CONTACT_METHODS.map((method, index) => (
                <Reveal
                  key={method.name}
                  effect="fade-up"
                  delay={index * 0.08}
                  className={`py-5 sm:py-0 sm:pr-5 ${
                    index > 0
                      ? "border-t border-border sm:border-l sm:border-t-0 sm:pl-5"
                      : ""
                  }`}
                >
                  <Icon name={method.icon} className="h-5 w-5 text-text" />
                  <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.16em]">
                    {method.name}
                  </h3>
                  <p className="mt-2 break-words text-xs leading-relaxed text-muted sm:text-[13px]">
                    {method.detail}
                  </p>
                  <span
                    aria-disabled="true"
                    title="This contact detail is awaiting confirmation."
                    className="mt-3 inline-flex cursor-not-allowed items-center gap-1 text-xs text-subtle"
                  >
                    {method.action}
                    <Icon name="arrow" className="h-3 w-3" />
                  </span>
                </Reveal>
              ))}
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-subtle">
              Contact details are temporary placeholders until confirmed.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Business enquiries and message form"
        className="relative isolate overflow-hidden bg-surface-alt py-16 text-text sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-1/2 hidden h-[27rem] w-[27rem] -translate-y-1/2 rounded-full bg-brand/10 lg:block"
        />
        <Image
          src="/Brand_Identity/Key_Visual/01_vase_flowers.png"
          alt=""
          aria-hidden="true"
          width={330}
          height={430}
          className="pointer-events-none absolute -right-7 top-1/2 hidden h-[25rem] w-auto -translate-y-1/2 object-contain opacity-40 xl:block"
        />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12">
          <div className="lg:col-span-5 lg:pt-5">
            <Reveal effect="fade-up">
              <Eyebrow>Business Enquiries</Eyebrow>
              <h2 className="mt-5 max-w-md font-serif text-[clamp(2.75rem,5vw,4.25rem)] leading-[0.96] tracking-tight">
                Let&apos;s Work Together
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base sm:leading-7">
                We welcome collaborations, wholesale orders, and special
                requests. Get in touch with us for:
              </p>
            </Reveal>

            <ul className="mt-8 space-y-5">
              {ENQUIRIES.map((enquiry, index) => (
                <Reveal
                  key={enquiry.title}
                  effect="fade-up"
                  delay={index * 0.07}
                >
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center text-brand">
                      <Icon name={enquiry.icon} className="h-6 w-6" />
                    </span>
                    <span className="pt-1 text-sm leading-relaxed text-text sm:text-[15px]">
                      {enquiry.title}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <Reveal effect="fade-up" delay={0.08}>
              <ContactMessageForm />
            </Reveal>
          </div>
        </div>
      </section>

      <VisitStore />

      <section
        aria-labelledby="follow-journey-heading"
        className="relative overflow-hidden bg-bg py-16 text-text sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12">
          <Reveal effect="fade-up" className="lg:col-span-4">
            <Eyebrow>Follow Our Journey</Eyebrow>
            <h2
              id="follow-journey-heading"
              className="mt-5 font-serif text-[clamp(2.5rem,5vw,3.75rem)] leading-[1] tracking-tight"
            >
              A Little More Tera.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
              Follow us for new creations and moments.
            </p>
            <button
              type="button"
              disabled
              title="The official Instagram profile is awaiting confirmation."
              className="mt-7 inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-subtle disabled:opacity-70"
            >
              <Icon name="instagram" className="h-4 w-4" />
              Follow on Instagram
              <span className="text-[10px] uppercase tracking-wider">
                (Coming soon)
              </span>
            </button>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-8 xl:grid-cols-5">
            {INSTAGRAM_IMAGES.map((image, index) => (
              <Reveal
                key={`${image.src}-${index}`}
                effect="fade"
                delay={index * 0.06}
                className={`group relative aspect-square overflow-hidden rounded-sm bg-surface ${
                  index === 4 ? "hidden xl:block" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 44vw, (max-width: 1024px) 28vw, 16vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs">
      {children}
      <span aria-hidden="true" className="h-px w-9 bg-brand/50" />
    </p>
  );
}

type IconName =
  | "phone"
  | "mail"
  | "instagram"
  | "bread"
  | "coffee"
  | "sparkles"
  | "arrow"
  | "down";

function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const shared = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...shared}>
          <path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.65-3.08 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.07 3.7 2 2 0 0 1 3.06 1.5h3a2 2 0 0 1 2 1.72c.12.96.35 1.91.7 2.82a2 2 0 0 1-.45 2.11L7.04 9.42a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.86.58 2.82.7A2 2 0 0 1 21 16.5Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...shared}>
          <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
          <path d="m3.5 6 8.5 7 8.5-7" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...shared}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
        </svg>
      );
    case "bread":
      return (
        <svg {...shared}>
          <path d="M3 13.5c0-4.7 3.8-8.5 9-8.5s9 3.8 9 8.5H3Z" />
          <path d="M5 13.5v4h14v-4M8 10l1-2m3 2 1-3m3 3 1-2" />
        </svg>
      );
    case "coffee":
      return (
        <svg {...shared}>
          <path d="M4 9h13v6.5A4.5 4.5 0 0 1 12.5 20h-4A4.5 4.5 0 0 1 4 15.5V9Z" />
          <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M7 5c0-1 1-1 1-2m4 2c0-1 1-1 1-2m3 2c0-1 1-1 1-2" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...shared}>
          <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
          <path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16ZM5 2l.6 1.4L7 4l-1.4.6L5 6l-.6-1.4L3 4l1.4-.6L5 2Z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...shared}>
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      );
    case "down":
      return (
        <svg {...shared}>
          <path d="M12 4v15m-6-6 6 6 6-6" />
        </svg>
      );
  }
}
