"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";

export function ServicesHub() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section
          aria-labelledby="services-hub-heading"
          className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        >
          <div aria-hidden className="build-grid fade-edges absolute inset-0" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 65% 35%, rgba(37,99,235,0.13), transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="t-label flex flex-wrap items-center gap-2 text-mist-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-accent-soft" aria-current="page">
                  Services
                </li>
              </ol>
            </nav>

            <SectionLabel index="00" label="Services" />
            <RevealText
              as="h1"
              id="services-hub-heading"
              text="Five disciplines. One production standard."
              className="text-display mt-10 max-w-[920px] font-semibold text-white"
            />
            <Reveal delay={0.2} className="mt-8">
              <p className="max-w-[540px] text-lead text-mist">
                Custom software from scratch — no templates, no lock-in. Pick one
                discipline or combine them under a single fixed scope.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10">
              <MagneticButton href="#contact" analytics="services-hub-cta">
                Start a Project
              </MagneticButton>
            </Reveal>
          </div>
        </section>

        <section aria-label="All services" className="relative pb-28 md:pb-40">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
              {services.map((service, i) => (
                <Reveal key={service.id} delay={i * 0.05} y={28} className="bg-ink">
                  <Link
                    href={getServicePath(service)}
                    data-analytics={`services-hub-${service.id}`}
                    className="group relative flex h-full flex-col p-9 transition-colors hover:bg-ink-2 md:p-12"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(37,99,235,0.1), transparent 70%)",
                      }}
                    />
                    <div className="relative">
                      <span className="t-label text-accent-soft">{service.index}</span>
                      <h2 className="mt-6 text-[clamp(1.75rem,2.4vw,2.5rem)] font-semibold tracking-tight text-white">
                        {service.name}
                      </h2>
                      <p className="mt-4 max-w-[420px] text-[15.5px] leading-relaxed text-mist">
                        {service.description}
                      </p>
                      <ul className="mt-8 space-y-2.5">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-3 text-[14px] text-mist-2">
                            <span aria-hidden className="h-1 w-1 shrink-0 bg-accent" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-10 inline-flex items-center gap-2.5 text-[15px] font-medium text-white">
                        <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
                          {service.cta}
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
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA sectionIndex="01" />
      </main>
      <Footer />
    </>
  );
}
