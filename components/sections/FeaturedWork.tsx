"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseVisual } from "@/components/work/CaseVisual";
import { caseStudies } from "@/lib/data/work";

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      aria-hidden
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={direction === "prev" ? "rotate-180" : undefined}
    >
      <path
        d="M1 7h11M8 2.5 12.5 7 8 11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeaturedWork() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = caseStudies.length;
  const study = caseStudies[index];

  const goTo = useCallback(
    (next: number, dir?: number) => {
      const wrapped = ((next % total) + total) % total;
      setDirection(dir ?? (wrapped > index ? 1 : -1));
      setIndex(wrapped);
    },
    [index, total],
  );

  const go = useCallback(
    (dir: -1 | 1) => {
      goTo(index + dir, dir);
    },
    [goTo, index],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable]")) return;
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (reduced) return;
    const threshold = 60;
    if (info.offset.x < -threshold) go(1);
    else if (info.offset.x > threshold) go(-1);
  };

  const slideVariants = {
    enter: (dir: number) =>
      reduced
        ? { opacity: 0 }
        : { x: dir > 0 ? 72 : -72, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: (dir: number) =>
      reduced
        ? { opacity: 0 }
        : { x: dir > 0 ? -72 : 72, opacity: 0 },
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      aria-roledescription="carousel"
      className="relative scroll-mt-20 py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="04" label="Featured work" />

        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <RevealText
            as="h2"
            id="work-heading"
            text="Real products. Measured results."
            className="text-h2 max-w-[760px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="flex w-full flex-col gap-5 sm:w-auto sm:items-end">
              <p className="max-w-[380px] text-[15.5px] leading-relaxed text-mist sm:text-right">
                Every engagement below shipped to production and moved a number
                the client cared about.
              </p>
              <div className="flex items-center justify-between gap-6 sm:justify-end">
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 text-[14.5px] font-medium text-mist transition-colors hover:text-white"
                >
                  <span className="border-b border-line-strong pb-0.5 group-hover:border-accent">
                    View all work
                  </span>
                  <svg
                    aria-hidden
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-accent transition-transform group-hover:translate-x-0.5"
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

                <div className="flex items-center gap-3">
                  <p className="t-label tabular-nums text-mist-2" aria-live="polite">
                    <span className="text-accent-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mx-2 text-line-strong">/</span>
                    {String(total).padStart(2, "0")}
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      aria-label="Previous case study"
                      onClick={() => go(-1)}
                      className="inline-flex h-10 w-10 items-center justify-center border border-line-strong text-mist transition-colors hover:border-accent hover:text-white"
                    >
                      <ArrowIcon direction="prev" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next case study"
                      onClick={() => go(1)}
                      className="inline-flex h-10 w-10 items-center justify-center border border-line-strong text-mist transition-colors hover:border-accent hover:text-white"
                    >
                      <ArrowIcon direction="next" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-14 md:mt-20">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.article
              key={study.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduced ? 0.2 : 0.45, ease: [0.16, 1, 0.3, 1] }}
              drag={reduced ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={onDragEnd}
              aria-label={`${study.name} (${index + 1} of ${total})`}
              aria-roledescription="slide"
              className="grid cursor-grab grid-cols-1 items-center gap-10 active:cursor-grabbing lg:grid-cols-12 lg:gap-14"
            >
              <div className="lg:col-span-7">
                <Link
                  href={`/work/${study.slug}`}
                  data-analytics={`work-visual-${study.id}`}
                  data-cursor="view"
                  className="block overflow-hidden border border-transparent transition-colors hover:border-line-strong"
                  aria-label={`${study.name} — view case study`}
                  draggable={false}
                >
                  <CaseVisual study={study} />
                </Link>
              </div>

              <div className="lg:col-span-5">
                <p className="t-label flex items-center gap-3 text-mist-2">
                  <span className="text-accent-soft">{study.index}</span>
                  <span aria-hidden className="h-px w-8 bg-line-strong" />
                  {study.industry}
                </p>
                <h3 className="text-h3 mt-5 font-semibold text-white">
                  <Link
                    href={`/work/${study.slug}`}
                    className="transition-colors hover:text-accent-soft"
                  >
                    {study.name}
                  </Link>
                </h3>

                <dl className="mt-8 space-y-6">
                  <div>
                    <dt className="t-label mb-2 text-mist-2">Challenge</dt>
                    <dd className="text-[15px] leading-relaxed text-mist">
                      {study.challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="t-label mb-2 text-mist-2">What we shipped</dt>
                    <dd className="text-[15px] leading-relaxed text-mist">
                      {study.solution}
                    </dd>
                  </div>
                </dl>

                <div className="mt-9 flex items-baseline gap-4 border-l-2 border-accent pl-5">
                  <span className="text-[clamp(2.2rem,3vw,3rem)] leading-none font-semibold tracking-tight text-accent-soft">
                    {study.outcome.value}
                  </span>
                  <span className="text-[14px] text-mist">{study.outcome.label}</span>
                </div>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {study.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="t-label border border-line px-3 py-1.5 text-[10px] text-mist-2"
                    >
                      {deliverable}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/work/${study.slug}`}
                  data-analytics={`work-cta-${study.id}`}
                  className="group mt-9 inline-flex items-center gap-2.5 text-[15px] font-medium text-white"
                >
                  <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
                    View case study
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
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Segment progress rail — clickable positions */}
        <div
          role="tablist"
          aria-label="Featured case studies"
          className="mt-12 flex gap-2 md:mt-14"
        >
          {caseStudies.map((item, i) => {
            const active = i === index;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Show ${item.name}`}
                onClick={() => goTo(i)}
                className="group relative h-8 flex-1"
              >
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-1/2 h-px -translate-y-1/2 transition-colors ${
                    active ? "bg-accent" : "bg-line group-hover:bg-line-strong"
                  }`}
                />
                <span
                  aria-hidden
                  className={`absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 transition-colors ${
                    active ? "bg-accent" : "bg-mist-2 group-hover:bg-mist"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
