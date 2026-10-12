"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type {
  ServiceProblem,
  ServiceProblemsContent,
} from "@/lib/data/services";

function ProblemCardBody({ problem }: { problem: ServiceProblem }) {
  return (
    <>
      <p className="t-label flex items-center gap-3 text-mist-2">
        <span className="text-accent-soft">{problem.index}</span>
        <span aria-hidden className="h-px w-6 bg-line-strong" />
        {problem.name}
      </p>
      <h3 className="mt-5 text-[18px] font-medium tracking-tight text-white md:text-[19px]">
        {problem.title}
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-mist">
        {problem.description}
      </p>
      {problem.serviceLabel && (
        <p className="mt-5 text-[13px] leading-relaxed text-mist-2">
          <span className="t-label text-accent-soft">Relevant service</span>
          <span className="mt-1.5 block text-mist">{problem.serviceLabel}</span>
        </p>
      )}
      {problem.enquiryHref && (
        <Link
          href={problem.enquiryHref}
          data-analytics={`shopify-problem-${problem.id ?? problem.index}`}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-medium text-accent-soft transition-colors hover:text-white"
        >
          Discuss this situation
          <span aria-hidden>→</span>
        </Link>
      )}
    </>
  );
}

function ProblemCard({ problem }: { problem: ServiceProblem }) {
  return (
    <article className="flex h-full w-[min(82vw,360px)] shrink-0 flex-col border border-line bg-ink p-7 md:w-[380px] md:p-8">
      <ProblemCardBody problem={problem} />
    </article>
  );
}

function ProblemsHeader({
  problems,
  sectionIndex,
}: {
  problems: ServiceProblemsContent;
  sectionIndex: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[1600px] shrink-0 px-5 md:px-10">
      <SectionLabel index={sectionIndex} label="Starting points" />
      <p className="t-label mt-6 text-accent-soft md:mt-8">{problems.eyebrow}</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-8 md:mt-5 md:gap-10">
        <h2
          id="service-problems-heading"
          className="text-h2 max-w-[780px] font-semibold text-white"
        >
          {problems.headline}
        </h2>
        <div className="max-w-[400px] space-y-3">
          {problems.intro.map((paragraph) => (
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
  );
}

function ClosingBlock({ problems }: { problems: ServiceProblemsContent }) {
  return (
    <div className="relative overflow-hidden rounded-panel border border-line p-8 md:p-12">
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
          <h3 className="text-h3 max-w-[720px] font-semibold text-white">
            {problems.closingTitle}
          </h3>
          <p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-mist">
            {problems.closingBody}
          </p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <MagneticButton
            href={problems.ctaHref}
            analytics="shopify-problems-cta"
          >
            {problems.ctaLabel}
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}

function StackedFallback({
  problems,
  sectionIndex,
  sectionId = "starting-points",
}: {
  problems: ServiceProblemsContent;
  sectionIndex: string;
  sectionId?: string;
}) {
  return (
    <section
      id={sectionId}
      aria-labelledby="service-problems-heading"
      className="surface-soft relative scroll-mt-20 border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Starting points" />
        <p className="t-label mt-8 text-accent-soft">{problems.eyebrow}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-10">
          <RevealText
            as="h2"
            id="service-problems-heading"
            text={problems.headline}
            className="text-h2 max-w-[780px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="max-w-[400px] space-y-4">
              {problems.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[15px] leading-relaxed text-mist"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
          {problems.problems.map((problem, i) => (
            <Reveal
              key={problem.id ?? problem.index}
              delay={Math.min(i * 0.04, 0.24)}
              y={28}
              className="flex flex-col bg-ink p-7 md:p-8"
            >
              <ProblemCardBody problem={problem} />
            </Reveal>
          ))}
        </div>

        <Reveal y={32} className="relative mt-20">
          <ClosingBlock problems={problems} />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Pinned horizontal gallery: vertical scroll drives cards left-to-right,
 * then the page continues into the closing CTA.
 */
export function ServiceProblems({
  problems,
  sectionIndex = "01",
  sectionId = "starting-points",
}: {
  problems: ServiceProblemsContent;
  sectionIndex?: string;
  sectionId?: string;
}) {
  const reduced = useReducedMotion();
  const pinRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // Estimate until measure runs — avoids a short pin track on first paint
  const [scrollDistance, setScrollDistance] = useState(
    () => Math.max(0, (problems.problems.length - 1) * 400)
  );

  useEffect(() => {
    if (reduced) return;

    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      const overflow = track.scrollWidth - viewport.clientWidth;
      setScrollDistance(Math.max(0, overflow));
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [reduced, problems.problems.length]);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (reduced) {
    return (
      <StackedFallback
        problems={problems}
        sectionIndex={sectionIndex}
        sectionId={sectionId}
      />
    );
  }

  // One viewport of scroll plus distance matched to horizontal travel
  const trackHeight = `calc(100svh + ${Math.max(scrollDistance, 1)}px)`;

  return (
    <section
      id={sectionId}
      aria-labelledby="service-problems-heading"
      className="surface-soft relative scroll-mt-20 border-y border-line"
    >
      <div ref={pinRef} className="relative" style={{ height: trackHeight }}>
        <div className="sticky top-[72px] flex h-[calc(100svh-72px)] flex-col overflow-hidden bg-ink">
          <div className="pt-8 md:pt-10">
            <ProblemsHeader
              problems={problems}
              sectionIndex={sectionIndex}
            />
          </div>

          <div
            ref={viewportRef}
            className="relative mt-8 min-h-0 flex-1 overflow-hidden md:mt-10"
          >
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex h-full items-stretch gap-4 px-5 will-change-transform md:gap-5 md:px-10"
            >
              {problems.problems.map((problem) => (
                <ProblemCard
                  key={problem.id ?? problem.index}
                  problem={problem}
                />
              ))}
            </motion.div>
          </div>

          <div className="mx-auto mt-5 w-full max-w-[1600px] shrink-0 px-5 pb-6 md:mt-6 md:px-10 md:pb-8">
            <div className="flex items-center justify-between gap-4">
              <p className="t-label text-mist-2">Scroll to explore</p>
              <p className="t-label tabular-nums text-mist-2">
                {String(problems.problems.length).padStart(2, "0")} situations
              </p>
            </div>
            <div className="mt-3 h-px overflow-hidden bg-line">
              <motion.div
                className="h-full origin-left bg-accent"
                style={{ width: progressWidth }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <ClosingBlock problems={problems} />
        </div>
      </div>
    </section>
  );
}
