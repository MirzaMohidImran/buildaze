"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type {
  ServiceEcosystem as EcosystemContent,
  ServiceEcosystemGroup,
} from "@/lib/data/services";

/** Desktop hub positions: Shopify center, categories around it. */
const HUB_LAYOUT: Record<string, { x: number; y: number }> = {
  "shopify-core": { x: 50, y: 14 },
  marketing: { x: 86, y: 38 },
  analytics: { x: 78, y: 78 },
  cx: { x: 22, y: 78 },
  custom: { x: 14, y: 38 },
};

function EcosystemHub({
  groups,
  activeId,
  onSelect,
  reduced,
}: {
  groups: ServiceEcosystemGroup[];
  activeId: string;
  onSelect: (id: string) => void;
  reduced: boolean | null;
}) {
  const center = { x: 50, y: 48 };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* Soft orbit rings */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line"
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/70"
      />

      {/* Connection lines */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        {groups.map((group) => {
          const pos = HUB_LAYOUT[group.id] ?? center;
          const isActive = group.id === activeId;
          return (
            <motion.line
              key={`line-${group.id}`}
              x1={center.x}
              y1={center.y}
              x2={pos.x}
              y2={pos.y}
              stroke={isActive ? "rgba(37,99,235,0.7)" : "rgba(255,255,255,0.1)"}
              strokeWidth={isActive ? 0.45 : 0.3}
              initial={false}
              animate={{
                stroke: isActive
                  ? "rgba(37,99,235,0.7)"
                  : "rgba(255,255,255,0.1)",
              }}
              transition={{ duration: 0.35 }}
            />
          );
        })}
      </svg>

      {/* Center Shopify hub */}
      <div className="absolute top-1/2 left-1/2 z-10 w-[132px] -translate-x-1/2 -translate-y-1/2 border border-accent/50 bg-ink px-4 py-5 text-center shadow-[0_0_40px_rgba(37,99,235,0.15)]">
        <span
          aria-hidden
          className="mx-auto mb-3 block h-1.5 w-1.5 bg-accent"
        />
        <p className="t-label text-accent-soft">Hub</p>
        <p className="mt-2 text-[15px] font-medium tracking-tight text-white">
          Shopify
        </p>
      </div>

      {/* Orbiting category nodes */}
      {groups.map((group) => {
        const pos = HUB_LAYOUT[group.id] ?? center;
        const isActive = group.id === activeId;
        return (
          <button
            key={group.id}
            type="button"
            onClick={() => onSelect(group.id)}
            onMouseEnter={() => onSelect(group.id)}
            data-analytics={`shopify-ecosystem-hub-${group.id}`}
            className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 border px-3.5 py-3 text-left transition-colors duration-300 ${
              isActive
                ? "border-accent bg-ink text-white"
                : "border-line bg-ink/90 text-mist-2 hover:border-line-strong hover:text-mist"
            }`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          >
            <span
              className={`t-label block text-[9px] ${
                isActive ? "text-accent-soft" : ""
              }`}
            >
              {group.index}
            </span>
            <span className="mt-1 block text-[13px] font-medium tracking-tight whitespace-nowrap">
              {group.shortName}
            </span>
            {isActive && !reduced && (
              <motion.span
                aria-hidden
                layoutId="ecosystem-node-glow"
                className="absolute inset-0 -z-10 bg-accent/10"
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

export function ServiceEcosystem({
  ecosystem,
  sectionIndex = "09",
}: {
  ecosystem: EcosystemContent;
  sectionIndex?: string;
}) {
  const groups = ecosystem.groups;
  const [activeId, setActiveId] = useState(groups[0]?.id ?? "");
  const active = groups.find((g) => g.id === activeId) ?? groups[0];
  const reduced = useReducedMotion();

  if (!active) return null;

  return (
    <section
      aria-labelledby="service-ecosystem-heading"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Shopify ecosystem" />
        <p className="t-label mt-8 text-accent-soft">{ecosystem.eyebrow}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-10">
          <RevealText
            as="h2"
            id="service-ecosystem-heading"
            text={ecosystem.headline}
            className="text-h2 max-w-[820px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="max-w-[400px] space-y-4">
              {ecosystem.intro.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Desktop: hub network + active group detail */}
        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:items-center">
          <Reveal y={28}>
            <EcosystemHub
              groups={groups}
              activeId={activeId}
              onSelect={setActiveId}
              reduced={reduced}
            />
          </Reveal>

          <div
            id="ecosystem-panel"
            role="tabpanel"
            aria-labelledby={`ecosystem-tab-${active.id}`}
            className="build-grid relative min-h-[420px] overflow-hidden border border-line p-10 xl:p-12"
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at 15% 10%, rgba(37,99,235,0.1), transparent 70%)",
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex h-full flex-col"
              >
                <p className="t-label text-accent-soft">
                  {active.index} — {active.name}
                </p>
                <h3 className="mt-6 text-h3 font-semibold text-white">
                  {active.name}
                </h3>
                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  {active.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-line pb-3 text-[14.5px] text-mist"
                    >
                      <span aria-hidden className="h-1 w-1 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Also keep a compact category rail under the hub for keyboard/clarity */}
        <div
          role="tablist"
          aria-label="Shopify ecosystem groups"
          className="mt-10 hidden border border-line lg:grid lg:grid-cols-5"
        >
          {groups.map((group) => {
            const isActive = group.id === activeId;
            return (
              <button
                key={group.id}
                type="button"
                role="tab"
                id={`ecosystem-tab-${group.id}`}
                aria-selected={isActive}
                aria-controls="ecosystem-panel"
                onClick={() => setActiveId(group.id)}
                onMouseEnter={() => setActiveId(group.id)}
                className={`relative border-r border-line px-5 py-5 text-left transition-colors last:border-r-0 ${
                  isActive ? "bg-ink-2 text-white" : "text-mist-2 hover:text-mist"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="ecosystem-rail"
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-accent"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span
                  className={`t-label block text-[10px] ${
                    isActive ? "text-accent-soft" : ""
                  }`}
                >
                  {group.index}
                </span>
                <span className="mt-2 block text-[14px] font-medium tracking-tight">
                  {group.shortName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile: expandable groups */}
        <div className="mt-12 lg:hidden">
          {groups.map((group) => {
            const isOpen = group.id === activeId;
            return (
              <div key={group.id} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setActiveId(isOpen ? "" : group.id)}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`t-label ${isOpen ? "text-accent-soft" : "text-mist-2"}`}
                  >
                    {group.index}
                  </span>
                  <span
                    className={`flex-1 text-[16px] font-medium tracking-tight ${
                      isOpen ? "text-white" : "text-mist"
                    }`}
                  >
                    {group.name}
                  </span>
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3 pb-7">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-[14.5px] text-mist"
                          >
                            <span
                              aria-hidden
                              className="h-1 w-1 shrink-0 bg-accent"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <Reveal y={28} className="relative mt-20 overflow-hidden border border-line p-8 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 10% 20%, rgba(37,99,235,0.1), transparent 65%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="text-h3 max-w-[560px] font-semibold text-white">
                {ecosystem.closingTitle}
              </h3>
              <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-mist">
                {ecosystem.closingBody}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <MagneticButton
                href={ecosystem.ctaHref}
                analytics="shopify-ecosystem-cta"
              >
                {ecosystem.ctaLabel}
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
