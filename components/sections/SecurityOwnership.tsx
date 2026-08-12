"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";

const manifest = [
  { item: "Full Git repository", status: "transferred" },
  { item: "Deployment & infrastructure access", status: "transferred" },
  { item: "Documentation & runbooks", status: "delivered" },
  { item: "SSO / SAML & role-based access control", status: "configured" },
  { item: "PII handling & encryption", status: "built in" },
  { item: "Secrets management", status: "configured" },
  { item: "Audit trails", status: "enabled" },
  { item: "Proprietary platform dependencies", status: "none" },
];

const guarantees = [
  {
    title: "Ownership is the default",
    description:
      "The repo, the infra and the docs are yours the day we ship. No retainer required to keep your own product running.",
  },
  {
    title: "Security is architectural",
    description:
      "PII handling, RBAC, encryption and audit trails are designed in at the architecture stage — not bolted on before launch.",
  },
  {
    title: "Compliance-aware by experience",
    description:
      "We've shipped PHI-safe retrieval and HIPAA-aligned workflows to production. Sensitive data isn't new territory.",
  },
];

/**
 * The Handoff Manifest: what actually transfers to the client at ship —
 * Buildaze's ownership philosophy rendered as a technical artifact.
 */
export function SecurityOwnership() {
  return (
    <section aria-labelledby="ownership-heading" className="relative overflow-hidden border-y border-line py-28 md:py-40">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(37,99,235,0.08), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionLabel index="10" label="Security & ownership" />
            <RevealText
              as="h2"
              id="ownership-heading"
              text="Your product. Your infrastructure. Your code."
              className="text-h2 mt-10 font-semibold text-white"
            />
            <Reveal delay={0.2} className="mt-8">
              <p className="max-w-[500px] text-lead text-mist">
                High-ticket software fails when agencies keep the keys. Every
                Buildaze engagement ends with a complete handoff — verified
                item by item.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              {guarantees.map((guarantee, i) => (
                <Reveal key={guarantee.title} delay={0.1 + i * 0.08} y={26}>
                  <div className="border-l border-accent/50 pl-6">
                    <h3 className="text-[18px] font-medium tracking-tight text-white">
                      {guarantee.title}
                    </h3>
                    <p className="mt-2.5 max-w-[460px] text-[14.5px] leading-relaxed text-mist">
                      {guarantee.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* The Handoff Manifest */}
          <div className="lg:col-span-6">
            <Reveal y={40} className="lg:sticky lg:top-32">
              <div className="border border-line bg-ink-2">
                <div className="flex items-center justify-between border-b border-line px-6 py-4">
                  <span className="t-label text-mist-2">handoff-manifest · day of ship</span>
                  <span className="t-label flex items-center gap-2 text-accent-soft">
                    <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
                    Complete
                  </span>
                </div>
                <ul className="p-6 font-mono text-[13px] md:p-8">
                  {manifest.map((entry, i) => (
                    <motion.li
                      key={entry.item}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ delay: 0.15 + i * 0.09, duration: 0.45 }}
                      className="flex items-baseline justify-between gap-4 border-b border-white/[0.05] py-3.5 last:border-b-0"
                    >
                      <span className="flex items-baseline gap-3 text-mist">
                        <span aria-hidden className={entry.status === "none" ? "text-mist-2" : "text-accent"}>
                          {entry.status === "none" ? "×" : "✓"}
                        </span>
                        {entry.item}
                      </span>
                      <span
                        className={`t-label shrink-0 text-[10px] ${
                          entry.status === "none" ? "text-mist-2" : "text-accent-soft"
                        }`}
                      >
                        {entry.status}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
