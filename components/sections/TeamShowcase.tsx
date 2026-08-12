"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { team } from "@/lib/data/team";

/**
 * The actual Buildaze team, presented editorially. Monogram tiles are used
 * because verified photography isn't available in this project — swap the
 * tile for a real portrait when assets exist.
 */
export function TeamShowcase() {
  return (
    <section id="team" aria-labelledby="team-heading" className="relative scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="13" label="The team" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
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

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08} y={30}>
              <div className="group h-full bg-ink p-7 transition-colors duration-500 hover:bg-ink-2 md:p-8">
                <div className="build-grid relative mb-7 flex aspect-[4/3] items-end overflow-hidden border border-line bg-ink-2 p-5">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(37,99,235,0.16), transparent 70%)",
                    }}
                  />
                  <span
                    aria-hidden
                    className="font-mono text-[52px] leading-none font-medium tracking-tight text-white/20 transition-colors duration-500 group-hover:text-accent-soft"
                  >
                    {member.initials}
                  </span>
                  <span aria-hidden className="absolute top-4 right-4 h-1.5 w-1.5 bg-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <h3 className="text-[18px] font-medium tracking-tight text-white">{member.name}</h3>
                <p className="t-label mt-2 text-accent-soft">{member.role}</p>
                <p className="mt-4 text-[14px] leading-relaxed text-mist">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
