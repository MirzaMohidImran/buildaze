"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ShopifyWorkVisual } from "@/components/services/ShopifyWorkVisual";
import type {
  ServiceSelectedCase,
  ServiceSelectedWork,
} from "@/lib/data/services";

function CaseContent({
  study,
  compact = false,
}: {
  study: ServiceSelectedCase;
  compact?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
        compact ? "h-full min-h-0" : ""
      }`}
    >
      <div className={`lg:col-span-7 min-h-0 ${compact ? "lg:h-full" : ""}`}>
        <Link
          href={study.href}
          data-analytics={`shopify-work-visual-${study.id}`}
          aria-label={`${study.cta}: ${study.title}`}
          className={`block rounded-panel border border-transparent transition-colors hover:border-line-strong ${
            compact ? "h-full max-h-[42vh] lg:max-h-none" : ""
          }`}
        >
          <ShopifyWorkVisual
            visual={study.visual}
            image={study.image}
            imageAlt={study.imageAlt}
            className={
              compact
                ? "media-frame relative h-full min-h-[200px] border border-line bg-ink-2 aspect-[16/11] lg:aspect-auto"
                : undefined
            }
          />
        </Link>
      </div>

      <div
        className={`lg:col-span-5 min-h-0 ${compact ? "overflow-y-auto overscroll-contain pr-1" : ""}`}
      >
        <p className="t-label flex items-center gap-3 text-mist-2">
          <span className="text-accent-soft">{study.index}</span>
          <span aria-hidden className="h-px w-8 bg-line-strong" />
          {study.category}
        </p>
        <h3
          className={`font-semibold text-white ${
            compact
              ? "mt-3 text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug"
              : "text-h3 mt-4 md:mt-5"
          }`}
        >
          {study.title}
        </h3>
        {study.relevance && (
          <p
            className={`font-medium text-accent-soft ${
              compact ? "mt-2 text-[13px]" : "mt-3 text-[14px]"
            }`}
          >
            {study.relevance}
          </p>
        )}
        <p
          className={`leading-relaxed text-mist ${
            compact
              ? "mt-3 text-[14px] md:text-[15px]"
              : "mt-4 text-[15px] md:mt-5 md:text-[15.5px]"
          }`}
        >
          {study.description}
        </p>

        {study.outcome && (
          <div
            className={`flex items-baseline gap-4 border-l-2 border-accent pl-5 ${
              compact ? "mt-4 md:mt-5" : "mt-6 md:mt-8"
            }`}
          >
            <span className="text-[clamp(1.35rem,2.2vw,2rem)] leading-none font-semibold tracking-tight text-accent-soft">
              {study.outcome.value}
            </span>
            <span className="text-[12.5px] text-mist md:text-[13.5px]">
              {study.outcome.label}
            </span>
          </div>
        )}

        <ul className={`flex flex-wrap gap-2 ${compact ? "mt-4" : "mt-6 md:mt-8"}`}>
          {study.tags.map((tag) => (
            <li
              key={tag}
              className="t-label border border-line px-3 py-1.5 text-[10px] text-mist-2"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Link
          href={study.href}
          data-analytics={`shopify-work-cta-${study.id}`}
          className={`group inline-flex items-center gap-2.5 text-[15px] font-medium text-white ${
            compact ? "mt-5 md:mt-6" : "mt-7 md:mt-9"
          }`}
        >
          <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
            {study.cta}
          </span>
          <svg
            aria-hidden
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            className="text-accent transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M1 7h11M8 2.5 12.5 7 8 11.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function StackedFallback({
  selectedWork,
  sectionIndex,
  sectionId = "selected-work",
}: {
  selectedWork: ServiceSelectedWork;
  sectionIndex: string;
  sectionId?: string;
}) {
  return (
    <section
      id={sectionId}
      aria-labelledby="service-selected-work-heading"
      className="surface-ink relative scroll-mt-20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Selected work" />
        <p className="t-label mt-8 text-accent-soft">{selectedWork.eyebrow}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-8">
          <RevealText
            as="h2"
            id="service-selected-work-heading"
            text={selectedWork.headline}
            className="text-h2 max-w-[760px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="max-w-[380px] space-y-4">
              {selectedWork.intro.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          {selectedWork.cases.map((study) => (
            <article
              key={study.id}
              aria-label={study.title}
              className="border-t border-line pt-14 md:pt-16"
            >
              <CaseContent study={study} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Pinned scroll portfolio: section stays in view while scroll advances
 * through each case, then the page continues normally.
 */
export function ServiceSelectedWorkSection({
  selectedWork,
  sectionIndex = "03",
  sectionId = "selected-work",
}: {
  selectedWork: ServiceSelectedWork;
  sectionIndex?: string;
  sectionId?: string;
}) {
  const reduced = useReducedMotion();
  const cases = selectedWork.cases;
  const count = cases.length;
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (count <= 1) return;
    const next = Math.min(count - 1, Math.max(0, Math.floor(value * count)));
    setActiveIndex((prev) => {
      if (next === prev) return prev;
      setDirection(next > prev ? 1 : -1);
      return next;
    });
  });

  if (reduced || count <= 1) {
    return (
      <StackedFallback
        selectedWork={selectedWork}
        sectionIndex={sectionIndex}
        sectionId={sectionId}
      />
    );
  }

  const active = cases[activeIndex] ?? cases[0];

  return (
    <section
      id={sectionId}
      aria-labelledby="service-selected-work-heading"
      aria-roledescription="carousel"
      className="surface-ink relative scroll-mt-20"
    >
      {/* Scroll track: one viewport of scroll per portfolio item */}
      <div
        ref={pinRef}
        className="relative"
        style={{ height: `${count * 100}vh` }}
      >
        <div className="sticky top-[72px] flex h-[calc(100svh-72px)] flex-col overflow-hidden border-b border-line bg-ink">
          <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-5 pt-8 pb-6 md:px-10 md:pt-10 md:pb-8">
            <div className="shrink-0">
              <SectionLabel index={sectionIndex} label="Selected work" />
              <p className="t-label mt-6 text-accent-soft md:mt-8">
                {selectedWork.eyebrow}
              </p>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-6 md:mt-5">
                <h2
                  id="service-selected-work-heading"
                  className="text-h2 max-w-[760px] font-semibold text-white"
                >
                  {selectedWork.headline}
                </h2>
                <div className="flex max-w-[380px] flex-col gap-3">
                  {selectedWork.intro.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[14.5px] leading-relaxed text-mist md:text-[15.5px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-8 min-h-0 flex-1 md:mt-10">
              {/* Crawlable copy for every case (not hover/scroll dependent) */}
              <div className="sr-only">
                {cases.map((study) => (
                  <article key={study.id}>
                    <h3>{study.title}</h3>
                    {study.relevance && <p>{study.relevance}</p>}
                    <p>{study.description}</p>
                    {study.outcome && (
                      <p>
                        {study.outcome.value} {study.outcome.label}
                      </p>
                    )}
                    <ul>
                      {study.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <a href={study.href}>{study.cta}</a>
                  </article>
                ))}
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.article
                  key={active.id}
                  custom={direction}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${active.title} (${activeIndex + 1} of ${count})`}
                  initial={{ opacity: 0, y: direction > 0 ? 36 : -36 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: direction > 0 ? -28 : 28 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 overflow-y-auto border-t border-line pt-8 md:pt-10"
                >
                  <CaseContent study={active} compact />
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex shrink-0 items-center justify-between gap-4 border-t border-line pt-5">
              <p
                className="t-label tabular-nums text-mist-2"
                aria-live="polite"
              >
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </p>
              <div
                role="tablist"
                aria-label="Portfolio projects"
                className="flex items-center gap-2"
              >
                {cases.map((study, i) => {
                  const selected = i === activeIndex;
                  return (
                    <button
                      key={study.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-label={`Show ${study.title}`}
                      data-analytics={`shopify-work-dot-${study.id}`}
                      onClick={() => {
                        const el = pinRef.current;
                        if (!el) return;
                        const rect = el.getBoundingClientRect();
                        const absoluteTop = window.scrollY + rect.top;
                        const track = el.offsetHeight - window.innerHeight;
                        const target =
                          absoluteTop +
                          (count <= 1 ? 0 : (i / count) * track) +
                          1;
                        window.scrollTo({ top: target, behavior: "smooth" });
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        selected
                          ? "w-8 bg-accent"
                          : "w-2 bg-line-strong hover:bg-mist-2"
                      }`}
                    />
                  );
                })}
              </div>
              <p className="t-label hidden text-mist-2 sm:block">
                Scroll to next
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav
        aria-label="Selected project links"
        className="mx-auto max-w-[1600px] px-5 py-8 md:px-10"
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {cases.map((study) => (
            <li key={`link-${study.id}`}>
              <Link
                href={study.href}
                data-analytics={`service-work-link-${study.id}`}
                className="text-[13.5px] text-mist transition-colors hover:text-white"
              >
                {study.category}: {study.cta}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
