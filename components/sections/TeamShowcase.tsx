"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { team, type TeamMember } from "@/lib/data/team";

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group h-full bg-ink p-7 transition-colors duration-500 hover:bg-ink-2 md:p-8">
      <div className="build-grid relative mb-7 flex aspect-[4/3] items-end overflow-hidden border border-line bg-ink-2 p-5">
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(37,99,235,0.16), transparent 70%)",
          }}
        />
        <span
          aria-hidden
          className="font-mono text-[52px] leading-none font-medium tracking-tight text-white/20 transition-colors duration-500 group-hover:text-accent-soft"
        >
          {member.initials}
        </span>
        <span
          aria-hidden
          className="absolute top-4 right-4 h-1.5 w-1.5 bg-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <h3 className="text-[18px] font-medium tracking-tight text-white">
        {member.name}
      </h3>
      <p className="t-label mt-2 text-accent-soft">{member.role}</p>
      <p className="mt-4 text-[14px] leading-relaxed text-mist">{member.bio}</p>
    </div>
  );
}

/**
 * The actual Buildaze team, presented editorially.
 * Mobile: snap carousel. Desktop: grid.
 */
export function TeamShowcase() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = team.length;

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
    setIndex(nearest);
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

  const go = (dir: -1 | 1) => {
    goTo(Math.min(Math.max(index + dir, 0), total - 1));
  };

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="relative scroll-mt-20 py-20 md:py-40"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="13" label="The team" />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8 md:mt-10">
          <RevealText
            as="h2"
            id="team-heading"
            text="Senior people. Close to the work."
            className="text-h2 max-w-[760px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <p className="max-w-[380px] text-[15.5px] leading-relaxed text-mist">
              The people you meet on the first call are the people building
              your product. No account layers, no junior handoffs.
            </p>
          </Reveal>
        </div>

        {/* Mobile: snap carousel */}
        <div className="mt-12 md:hidden">
          <div className="mb-5 flex items-center justify-between gap-4">
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
                aria-label="Previous team member"
                onClick={() => go(-1)}
                disabled={index === 0}
                className="inline-flex h-10 w-10 items-center justify-center border border-line-strong text-mist transition-colors hover:border-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
              >
                <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-180">
                  <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next team member"
                onClick={() => go(1)}
                disabled={index === total - 1}
                className="inline-flex h-10 w-10 items-center justify-center border border-line-strong text-mist transition-colors hover:border-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
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
                className="w-[min(100%,340px)] shrink-0 snap-start border border-line"
              >
                <TeamCard member={member} />
              </article>
            ))}
          </div>

          <div
            role="tablist"
            aria-label="Team members"
            className="mt-6 flex gap-2"
          >
            {team.map((member, i) => {
              const active = i === index;
              return (
                <button
                  key={member.name}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Show ${member.name}`}
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

        {/* Desktop / tablet: grid */}
        <div className="mt-16 hidden gap-px border border-line bg-line md:grid md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08} y={30}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
