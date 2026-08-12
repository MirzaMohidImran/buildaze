"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";

const outcomes = [
  {
    index: "01",
    title: "Faster time to market",
    detail:
      "Most projects reach a working v1 in 4–8 weeks. Scoping takes days, not months — and building starts the moment scope is signed.",
    evidence: "MVP to production in 6–10 weeks",
  },
  {
    index: "02",
    title: "Clear project scope",
    detail:
      "A fixed scope document defines what ships, when, and for how much — approved by you before a single line of code is written.",
    evidence: "Fixed scope in 3–5 days",
  },
  {
    index: "03",
    title: "Weekly visibility",
    detail:
      "Every sprint ends with a live demo of working software. Course corrections happen while they cost hours, not budgets.",
    evidence: "A live demo every week",
  },
  {
    index: "04",
    title: "Full code ownership",
    detail:
      "The day we ship, you hold the repo, the infrastructure and the documentation. No retainers to keep the lights on. No lock-in, ever.",
    evidence: "100% ownership at handoff",
  },
];

/** Editorial outcome rows — business results, not a card grid of technologies. */
export function Outcomes() {
  return (
    <section aria-labelledby="outcomes-heading" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="03" label="Outcomes" />
        <RevealText
          as="h2"
          id="outcomes-heading"
          text="Built around outcomes, not billable hours."
          className="text-h2 mt-10 max-w-[900px] font-semibold text-white"
        />

        <div className="mt-16 md:mt-24">
          {outcomes.map((outcome, i) => (
            <Reveal key={outcome.index} delay={0.05 * i} y={36} amount={0.35}>
              <div className="group grid grid-cols-1 gap-4 border-t border-line py-10 transition-colors hover:bg-white/[0.015] md:grid-cols-12 md:gap-8 md:py-14">
                <div className="md:col-span-1">
                  <span className="t-label text-accent-soft">{outcome.index}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-h3 font-medium text-white transition-transform duration-500 ease-out group-hover:translate-x-2">
                    {outcome.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="max-w-[440px] text-[15.5px] leading-relaxed text-mist">
                    {outcome.detail}
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <span className="t-label inline-flex items-center gap-2.5 text-mist-2">
                    <span aria-hidden className="h-1 w-1 bg-accent" />
                    {outcome.evidence}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
