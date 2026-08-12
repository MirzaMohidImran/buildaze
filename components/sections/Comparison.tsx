"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { comparison, comparisonRows } from "@/lib/data/process";

/**
 * Side-by-side working-model comparison.
 * Desktop: full matrix. Mobile: horizontal scroll, Buildaze column first.
 */
export function Comparison() {
  return (
    <section
      aria-labelledby="comparison-heading"
      className="relative overflow-hidden py-20 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 35% at 18% 20%, rgba(37,99,235,0.1), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="07" label="Comparison" />
        <RevealText
          as="h2"
          id="comparison-heading"
          text="Same budget. Very different outcomes."
          className="text-h2 mt-8 max-w-[860px] font-semibold text-white md:mt-10"
        />
        <Reveal delay={0.15} className="mt-5 max-w-[520px]">
          <p className="text-[15px] leading-relaxed text-mist md:text-[15.5px]">
            Two ways to spend the same money. Line up the models — then decide
            which one actually ships.
          </p>
        </Reveal>

        {/* Mobile scroll cue */}
        <Reveal delay={0.2} className="mt-8 flex items-center gap-3 md:hidden">
          <span className="t-label text-accent-soft">Swipe</span>
          <span aria-hidden className="h-px flex-1 bg-line" />
          <span className="t-label text-mist-2">Buildaze first → agency next</span>
        </Reveal>

        <Reveal delay={0.2} className="relative mt-6 md:mt-14">
          {/* Edge fades — signals more content on mobile */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-6 bg-gradient-to-r from-ink to-transparent md:hidden"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-10 bg-gradient-to-l from-ink to-transparent md:hidden"
          />

          <div className="overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-line-strong [&::-webkit-scrollbar-track]:bg-transparent">
            <div className="min-w-[720px] md:min-w-0">
              {/* Column headers */}
              <div className="grid grid-cols-[7.5rem_minmax(16rem,1.15fr)_minmax(16rem,1fr)] border-b border-line md:grid-cols-[9rem_minmax(0,1.15fr)_minmax(0,1fr)]">
                <div className="sticky left-0 z-[1] bg-ink px-3 py-4 md:static md:bg-transparent md:px-0 md:py-5">
                  <span className="t-label text-mist-2">Model</span>
                </div>
                <div className="relative border-x border-accent/35 bg-accent-dim/40 px-5 py-4 md:px-8 md:py-5">
                  <p className="t-label flex items-center gap-2.5 text-accent-soft">
                    <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
                    {comparison.buildaze.title}
                  </p>
                </div>
                <div className="px-5 py-4 md:px-8 md:py-5">
                  <p className="t-label text-mist-2">{comparison.traditional.title}</p>
                </div>
              </div>

              {/* Comparison rows */}
              <ul>
                {comparisonRows.map((row, i) => (
                  <li
                    key={row.axis}
                    className="grid grid-cols-[7.5rem_minmax(16rem,1.15fr)_minmax(16rem,1fr)] border-b border-line last:border-b-0 md:grid-cols-[9rem_minmax(0,1.15fr)_minmax(0,1fr)]"
                  >
                    <div className="sticky left-0 z-[1] flex items-start bg-ink px-3 py-5 md:static md:bg-transparent md:px-0 md:py-6">
                      <div>
                        <span className="font-mono text-[10px] text-mist-2">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-1.5 text-[13px] font-medium tracking-tight text-white md:text-[14px]">
                          {row.axis}
                        </p>
                      </div>
                    </div>

                    <div className="relative border-x border-accent/25 bg-accent-dim/20 px-5 py-5 md:px-8 md:py-6">
                      <div className="flex items-start gap-3">
                        <svg
                          aria-hidden
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="mt-1 shrink-0 text-accent"
                        >
                          <path
                            d="M2 7.5 5.5 11 12 3.5"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-[14px] leading-relaxed text-white md:text-[15px]">
                          {row.buildaze}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 py-5 md:px-8 md:py-6">
                      <div className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-2.5 block h-px w-3 shrink-0 bg-white/25"
                        />
                        <p className="text-[14px] leading-relaxed text-mist-2 md:text-[15px]">
                          {row.traditional}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Footer strip */}
              <div className="grid grid-cols-[7.5rem_minmax(16rem,1.15fr)_minmax(16rem,1fr)] border-t border-line md:grid-cols-[9rem_minmax(0,1.15fr)_minmax(0,1fr)]">
                <div className="sticky left-0 z-[1] bg-ink px-3 py-4 md:static md:bg-transparent md:px-0" />
                <div className="border-x border-accent/25 bg-accent-dim/30 px-5 py-4 md:px-8">
                  <p className="t-label text-accent-soft">Ships on a fixed model</p>
                </div>
                <div className="px-5 py-4 md:px-8">
                  <p className="t-label text-mist-2">Often bills the friction</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
