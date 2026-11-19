"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServiceWhyContent } from "@/lib/data/services";

const JOURNEY = [
  { id: "browse", label: "Browse" },
  { id: "discover", label: "Discover" },
  { id: "pdp", label: "Product" },
  { id: "cart", label: "Cart" },
  { id: "buy", label: "Buy" },
] as const;

/** Map each differentiator to which journey node feels most relevant. */
const JOURNEY_FOCUS: Record<string, number> = {
  "ecommerce-thinking": 1,
  "custom-simple": 2,
  "cro-dev": 4,
  "clean-builds": 2,
  communication: 0,
  "what-comes-next": 4,
};

function JourneyVisual({
  activeId,
  reduced,
}: {
  activeId: string;
  reduced: boolean | null;
}) {
  const focus = JOURNEY_FOCUS[activeId] ?? 2;

  return (
    <div aria-hidden className="relative pt-2 pb-1">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="t-label text-mist-2">Customer journey</p>
        <p className="t-label text-accent-soft">{JOURNEY[focus]?.label}</p>
      </div>

      <div className="relative">
        <div className="absolute top-[4px] right-[8px] left-[8px] h-px bg-line" />
        <motion.div
          className="absolute top-[4px] left-[8px] h-px origin-left bg-accent/80"
          initial={false}
          animate={{
            width:
              JOURNEY.length <= 1
                ? "0%"
                : `${(focus / (JOURNEY.length - 1)) * 100}%`,
          }}
          transition={
            reduced ? { duration: 0 } : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
          }
        />
        <div className="relative flex justify-between">
          {JOURNEY.map((node, i) => {
            const isFocus = i === focus;
            const isPast = i < focus;
            return (
              <div key={node.id} className="flex flex-col items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full border ${
                    isFocus
                      ? "border-accent bg-accent"
                      : isPast
                        ? "border-accent bg-accent/40"
                        : "border-line-strong bg-ink"
                  }`}
                />
                <span
                  className={`t-label text-[9px] ${
                    isFocus
                      ? "text-accent-soft"
                      : isPast
                        ? "text-mist"
                        : "text-mist-2/70"
                  }`}
                >
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PanelNote({ note }: { note: string }) {
  if (note.startsWith("http://") || note.startsWith("https://")) {
    return (
      <Link
        href={note}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block max-w-[420px] text-[15px] leading-relaxed text-accent-soft underline-offset-2 hover:underline"
      >
        {note.replace(/^https?:\/\//, "")}
      </Link>
    );
  }
  return (
    <p className="mt-5 max-w-[420px] text-[15px] leading-relaxed text-mist">
      {note}
    </p>
  );
}

export function ServiceWhy({
  why,
  sectionIndex = "07",
}: {
  why: ServiceWhyContent;
  sectionIndex?: string;
}) {
  const items = why.differentiators;
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((d) => d.id === activeId) ?? items[0];
  const reduced = useReducedMotion();

  if (!active) return null;

  return (
    <section
      aria-labelledby="service-why-heading"
      className="surface-page relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Why Buildaze" />
        <p className="t-label mt-8 text-accent-soft">{why.eyebrow}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-10">
          <RevealText
            as="h2"
            id="service-why-heading"
            text={why.headline}
            className="text-h2 max-w-[860px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="max-w-[400px] space-y-4">
              {why.intro.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Single content tree for all breakpoints — no duplicated why copy. */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <div
            role="tablist"
            aria-label="What makes Buildaze different"
            className="flex flex-col"
          >
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`why-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls="why-panel"
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => {
                    if (
                      typeof window !== "undefined" &&
                      window.matchMedia("(min-width: 1024px)").matches
                    ) {
                      setActiveId(item.id);
                    }
                  }}
                  data-analytics={`shopify-why-${item.id}`}
                  className={`group relative w-full border-b border-line py-6 text-left transition-colors ${
                    isActive ? "text-white" : "text-mist-2 hover:text-mist"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="why-indicator"
                      aria-hidden
                      className="absolute top-0 left-0 h-full w-px bg-accent"
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <div className="flex items-baseline gap-4 pl-5">
                    <span
                      className={`t-label ${isActive ? "text-accent-soft" : ""}`}
                    >
                      {item.index}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[16px] font-medium tracking-tight md:text-[17px]">
                        {item.name}
                      </p>
                      <p
                        className={`mt-2 text-[14px] leading-snug transition-colors ${
                          isActive ? "text-mist" : "text-mist-2"
                        }`}
                      >
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div
            id="why-panel"
            role="tabpanel"
            aria-labelledby={`why-tab-${active.id}`}
            className="media-frame build-grid relative min-h-[420px] border border-line md:min-h-[560px]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(200,245,66,0.12), transparent 70%)",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex h-full min-h-[420px] flex-col p-8 md:min-h-[560px] md:p-10 xl:p-12"
              >
                <p className="t-label text-accent-soft">
                  {active.index} — {active.name}
                </p>
                <h3 className="mt-8 max-w-[520px] text-[24px] leading-[1.15] font-semibold tracking-tight text-white md:text-[28px] xl:text-[34px]">
                  {active.panelStatement}
                </h3>
                {active.panelNote && <PanelNote note={active.panelNote} />}

                <div className="mt-10 border-t border-line pt-8">
                  <JourneyVisual activeId={active.id} reduced={reduced} />
                </div>

                <div className="mt-auto border-t border-line pt-8">
                  <p className="t-label text-mist-2">In practice</p>
                  <p className="mt-3 max-w-[480px] text-[14.5px] leading-relaxed text-mist">
                    {active.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal
          y={28}
          className="relative mt-20 overflow-hidden rounded-panel border border-line p-8 md:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 90% 30%, rgba(200,245,66,0.12), transparent 65%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="text-h3 max-w-[640px] font-semibold text-white">
                {why.closingTitle}
              </h3>
              <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-mist">
                {why.closingBody}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
                {why.pillars.map((pillar, i) => (
                  <span key={pillar} className="flex items-center gap-3">
                    {i > 0 && (
                      <span aria-hidden className="h-1 w-1 bg-accent" />
                    )}
                    <span className="t-label text-white">{pillar}</span>
                  </span>
                ))}
              </div>
              <p className="mt-6 text-[15px] text-mist-2">{why.closingNote}</p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <MagneticButton href={why.ctaHref} analytics="shopify-why-cta">
                {why.ctaLabel}
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
