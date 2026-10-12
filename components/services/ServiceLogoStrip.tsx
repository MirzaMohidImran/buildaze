"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { ServiceLogoStripContent } from "@/lib/data/services";

function LogoMark({
  name,
  src,
  mark = "icon",
}: {
  name: string;
  src?: string;
  mark?: "icon" | "wordmark";
}) {
  if (!src) {
    return (
      <span className="sr-only">{name}</span>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      width={mark === "wordmark" ? 180 : 48}
      height={48}
      className={
        mark === "wordmark"
          ? "h-9 w-auto max-w-[160px] object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100 md:h-11"
          : "h-10 w-10 object-contain opacity-95 transition-opacity duration-300 group-hover:opacity-100 md:h-12 md:w-12"
      }
    />
  );
}

export function ServiceLogoStrip({
  logoStrip,
  variant = "section",
}: {
  logoStrip: ServiceLogoStripContent;
  /** `hero` sits inside the hero; `section` is a standalone band. */
  variant?: "section" | "hero";
}) {
  const items = logoStrip.items;
  if (items.length === 0) return null;

  const row = (ariaHidden: boolean) => (
    <ul aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {items.map((item) => {
        const inner = (
          <span className="group flex items-center gap-10 pr-10 md:gap-14 md:pr-14">
            <LogoMark name={item.name} src={item.src} mark={item.mark} />
            <span
              aria-hidden
              className="inline-block h-2 w-2 rotate-45 border border-accent/50"
            />
          </span>
        );

        return (
          <li key={`${ariaHidden ? "dup-" : ""}${item.name}`}>
            {item.href ? (
              <Link
                href={item.href}
                className="block"
                data-analytics={`logo-strip-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {inner}
              </Link>
            ) : (
              inner
            )}
          </li>
        );
      })}
    </ul>
  );

  const marquee = (
    <div
      className="flex w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="animate-marquee flex">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );

  if (variant === "hero") {
    return (
      <div
        aria-label={logoStrip.label}
        className="mt-16 w-full border-t border-line/80 pt-10 md:mt-20 md:pt-12"
      >
        <Reveal y={10}>
          <p className="t-label mb-7 text-center text-mist-2">
            {logoStrip.label}
          </p>
        </Reveal>
        {marquee}
      </div>
    );
  }

  return (
    <section
      aria-label={logoStrip.label}
      className="surface-blue relative border-b border-line py-12 md:py-14"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal y={10}>
          <p className="t-label mb-8 text-center text-mist-2">
            {logoStrip.label}
          </p>
        </Reveal>
      </div>
      {marquee}
    </section>
  );
}
