"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { team, testimonials, type TeamMember } from "@/lib/data/team";

type SectionTone = "dark" | "light";

function TeamCard({
  member,
  tone = "dark",
}: {
  member: TeamMember;
  tone?: SectionTone;
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`group h-full p-7 transition-colors duration-500 md:p-8 ${
        isLight
          ? "home-card border border-line bg-white hover:border-[var(--border-hover,#CBD5E1)]"
          : "bg-ink hover:bg-ink-2"
      }`}
    >
      <div
        className={`build-grid relative mb-7 flex aspect-[4/3] items-end overflow-hidden border border-line p-5 ${
          isLight ? "bg-[var(--section-soft,#f7f8fa)]" : "bg-ink-2"
        }`}
      >
        {!isLight ? (
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(37,99,235,0.16), transparent 70%)",
            }}
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(37,99,235,0.08), transparent 70%)",
            }}
          />
        )}
        <span
          aria-hidden
          className={`font-mono text-[52px] leading-none font-medium tracking-tight transition-colors duration-500 ${
            isLight
              ? "text-[var(--text-primary,#0C1017)]/15 group-hover:text-accent"
              : "text-white/20 group-hover:text-accent-soft"
          }`}
        >
          {member.initials}
        </span>
      </div>
      <h3 className="text-[18px] font-medium tracking-tight text-white">
        {member.name}
      </h3>
      <p className="t-label mt-2 text-accent-soft">{member.role}</p>
      <p className="mt-4 text-[14px] leading-relaxed text-mist">{member.bio}</p>
    </div>
  );
}

/** Consolidated team + client feedback under a single #team anchor. */
export function TeamAndProof({ tone = "dark" }: { tone?: SectionTone }) {
  const isLight = tone === "light";
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [teamIndex, setTeamIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = team.length;
  const active = testimonials[quoteIndex];

  const syncIndex = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const slides = Array.from(el.querySelectorAll<HTMLElement>("[data-team-slide]"));
    if (!slides.length) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let best = Number.POSITIVE_INFINITY;
    slides.forEach((slide, i) => {
      const center = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < best) {
        best = dist;
        nearest = i;
      }
    });
    setTeamIndex(nearest);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncIndex();
    el.addEventListener("scroll", syncIndex, { passive: true });
    window.addEventListener("resize", syncIndex);
    return () => {
      el.removeEventListener("scroll", syncIndex);
      window.removeEventListener("resize", syncIndex);
    };
  }, [syncIndex]);

  const goTo = (next: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelectorAll<HTMLElement>("[data-team-slide]")[next];
    slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const goTeam = (dir: -1 | 1) => {
    goTo(Math.min(Math.max(teamIndex + dir, 0), total - 1));
  };

  const goQuote = (dir: number) => {
    setDirection(dir);
    setQuoteIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className={`relative scroll-mt-20 py-20 md:py-40${isLight ? " surface-soft" : ""}`}
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="06" label="Team and client proof" />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8 md:mt-10">
          <RevealText
            as="h2"
            id="team-heading"
            text="The people behind the work."
            className="text-h2 max-w-[760px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <p className="max-w-[380px] text-[15.5px] leading-relaxed text-mist">
              Short introductions to the Buildaze team, with project feedback
              from past engagements.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 md:hidden">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="t-label tabular-nums text-mist-2" aria-live="polite">
              <span className="text-accent-soft">
                {String(teamIndex + 1).padStart(2, "0")}
              </span>
              <span className="mx-2 text-line-strong">/</span>
              {String(total).padStart(2, "0")}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous team member"
                onClick={() => goTeam(-1)}
                disabled={teamIndex === 0}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-mist transition-colors hover:border-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
              >
                <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-180">
                  <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next team member"
                onClick={() => goTeam(1)}
                disabled={teamIndex === total - 1}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-mist transition-colors hover:border-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
              >
                <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Team members"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {team.map((member) => (
              <article
                key={member.name}
                data-team-slide
                aria-label={member.name}
                className={`w-[min(100%,340px)] shrink-0 snap-start${isLight ? "" : " border border-line"}`}
              >
                <TeamCard member={member} tone={tone} />
              </article>
            ))}
          </div>
        </div>

        <div
          className={
            isLight
              ? "mt-16 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4"
              : "mt-16 hidden gap-px border border-line bg-line md:grid md:grid-cols-2 lg:grid-cols-4"
          }
        >
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08} y={30}>
              <TeamCard member={member} tone={tone} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-line pt-16 md:mt-24 md:pt-20">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="t-label text-accent-soft">Client feedback</p>
            <div className="flex items-center gap-5">
              <span className="t-label text-mist-2">
                <span className="text-accent-soft">0{quoteIndex + 1}</span> / 0{testimonials.length}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => goQuote(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-mist transition-colors hover:border-accent hover:text-white"
                >
                  <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 7H2M6 2.5 1.5 7 6 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => goQuote(1)}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-mist transition-colors hover:border-accent hover:text-white"
                >
                  <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 min-h-[200px] md:min-h-[220px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={quoteIndex}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote>
                  <p className="max-w-[1000px] text-[clamp(1.25rem,2.6vw,2rem)] leading-[1.3] font-medium tracking-[-0.02em] text-white">
                    <span aria-hidden className="text-accent-soft">&ldquo;</span>
                    {active.quote}
                    <span aria-hidden className="text-accent-soft">&rdquo;</span>
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <span>
                    <span className="block text-[15px] font-medium text-white">{active.name}</span>
                    <span className="block text-[13px] text-mist-2">{active.role}</span>
                  </span>
                  <span className="t-label flex items-center gap-2.5 text-mist-2">
                    <span aria-hidden className="h-1 w-1 bg-accent" />
                    {active.context}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
