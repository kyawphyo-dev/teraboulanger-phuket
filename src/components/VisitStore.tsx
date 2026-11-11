"use client";

import { useState } from "react";
import Image from "next/image";
import { STORE_CONFIG, type StoreBranch } from "@/lib/store-config";
import Reveal from "./animations/Reveal";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

const BRAND_SYMBOL = "/Brand_Identity/Logo/logo_symbol_orange.png";

/**
 * VisitStore — "Visit Our Stores" section.
 *
 * Fully data-driven: the branch collection lives in `STORE_CONFIG.branches`
 * and this component only handles presentation. Grid behaviour scales with the
 * number of branches — one centred featured card, two columns, or a 3-column
 * grid — while every card keeps identical photo proportions.
 */
export default function VisitStore() {
  const { label, heading, description, social, branches } = STORE_CONFIG;

  const branchCount = branches.length;
  const isSingleBranch = branchCount === 1;
  const isBranchPair = branchCount === 2;

  // One branch: a centred featured card so it never stretches awkwardly.
  // Two: side by side. Three or more: a responsive grid.
  const gridClassName = [
    "grid grid-cols-1 gap-8 sm:gap-10",
    isSingleBranch
      ? "mx-auto max-w-xl"
      : isBranchPair
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3",
  ].join(" ");

  const imageSizes = isSingleBranch
    ? "(min-width: 640px) 576px, 100vw"
    : isBranchPair
      ? "(min-width: 640px) 50vw, 100vw"
      : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

  return (
    <section
      aria-labelledby="visit-stores-heading"
      className="w-full bg-bg py-16 text-text transition-colors duration-500 sm:py-12 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ——— Introduction ——— */}
        <Reveal effect="fade-up" className="flex flex-col items-start">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.3em] text-brand uppercase sm:text-xs">
              {label}
            </span>
            <div className="h-px w-8 bg-brand/40" aria-hidden="true" />
          </div>

          <h2
            id="visit-stores-heading"
            className="font-serif text-[30px] leading-[1.15] tracking-tight sm:text-[38px] lg:text-[44px]"
          >
            {heading}
          </h2>

          <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
            {description}
          </p>
        </Reveal>

        {/* ——— Branches ——— */}
        <StaggerContainer className={`mt-10 sm:mt-12 lg:mt-14 ${gridClassName}`}>
          {branches.map((branch) => (
            <StaggerItem key={branch.id} className="h-full">
              <BranchCard branch={branch} sizes={imageSizes} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ——— Follow us ——— */}
        <Reveal
          effect="fade-up"
          className={`mt-10 flex ${
            isSingleBranch
              ? "justify-center"
              : "justify-center sm:justify-start"
          }`}
        >
          <a
            href={social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-sm text-[13px] text-muted transition-colors duration-200 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:text-sm"
          >
            <InstagramIcon className="h-4 w-4 shrink-0" />
            <span className="tracking-wide border-b border-border pb-0.5 group-hover:border-brand">
              {social.instagram.label}
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ——— Branch card ———

function BranchCard({ branch, sizes }: { branch: StoreBranch; sizes: string }) {
  const { name, locationLabel, address, openingHours, image, mapsUrl } = branch;
  const { description, isPlaceholder } = branch;

  // Empty fields are never rendered — a half-filled branch shows only what it has.
  const addressLines = [address.line1, address.line2].filter(
    (line): line is string => Boolean(line && line.trim()),
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border/60 bg-surface transition-colors duration-300 hover:border-brand/40">
      {/* ——— Photograph ——— */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-alt">
        <BranchPhoto image={image} sizes={sizes} name={name} />

        {isPlaceholder && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-cream uppercase backdrop-blur-sm">
            Placeholder photo
          </span>
        )}
      </div>

      {/* ——— Branch details ——— */}
      <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
        {locationLabel && (
          <p className="mb-3 text-[10px] font-bold tracking-[0.3em] text-brand uppercase">
            {locationLabel}
          </p>
        )}

        <h3 className="font-serif text-[22px] leading-tight tracking-tight text-text sm:text-[26px]">
          {name}
        </h3>

        {description && (
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
            {description}
          </p>
        )}

        <dl className="mt-6 flex flex-1 flex-col gap-6 border-t border-border/40 pt-6">
          {addressLines.length > 0 && (
            <div>
              <dt className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-brand uppercase">
                <MapPinIcon className="h-4 w-4 shrink-0" />
                Location
              </dt>
              <dd className="font-sans text-sm leading-relaxed text-muted sm:text-[15px]">
                <address className="not-italic">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </dd>
            </div>
          )}

          {openingHours.schedule && (
            <div>
              <dt className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-brand uppercase">
                <ClockIcon className="h-4 w-4 shrink-0" />
                Hours
              </dt>
              <dd className="font-sans text-sm leading-relaxed text-muted sm:text-[15px]">
                {openingHours.schedule}
              </dd>
            </div>
          )}
        </dl>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get directions to ${name} on Google Maps`}
          className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-8 text-[12px] font-bold tracking-[0.15em] text-brand-contrast uppercase whitespace-nowrap shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-hover active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:h-14 sm:text-[13px] sm:tracking-[0.2em]"
        >
          {STORE_CONFIG.cta.label}
          <ExternalLinkIcon className="h-4 w-4 shrink-0" />
        </a>
      </div>
    </article>
  );
}

// ——— Photograph with graceful fallback ———

function BranchPhoto({
  image,
  sizes,
  name,
}: {
  image: StoreBranch["image"];
  sizes: string;
  name: string;
}) {
  const [hasFailed, setHasFailed] = useState(false);

  if (hasFailed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-surface-alt">
        <Image
          src={BRAND_SYMBOL}
          alt=""
          width={220}
          height={80}
          className="h-8 w-auto object-contain opacity-50 sm:h-10"
        />
        <span className="font-sans text-[10px] tracking-[0.2em] text-subtle uppercase">
          {name}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      onError={() => setHasFailed(true)}
      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
  );
}

// ——— Internal Icons ———

function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
