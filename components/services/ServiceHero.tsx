"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { Service } from "@/lib/data/services";
import { getServiceById } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";

function ServiceFlow({ flow }: { flow: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-y-4">
      {flow.map((node, i) => (
        <div key={node} className="flex items-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 + i * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={`t-label border px-3.5 py-2.5 whitespace-nowrap ${
              i === flow.length - 1
                ? "border-accent bg-accent-dim text-accent-soft"
                : "border-line-strong text-mist"
            }`}
          >
            {node}
          </motion.span>
          {i < flow.length - 1 && (
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.42 + i * 0.1, duration: 0.35 }}
              className="relative mx-1 h-px w-6 origin-left bg-accent/50 md:w-9"
            >
              <span className="absolute top-1/2 right-0 h-[5px] w-[5px] -translate-y-1/2 rotate-45 border-t border-r border-accent/70" />
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section
      aria-labelledby="service-hero-heading"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div aria-hidden className="build-grid fade-edges absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 70% 30%, rgba(37,99,235,0.14), transparent 70%)",
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
            <li>
              <Link href="/services" className="transition-colors hover:text-white">
                Services
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-accent-soft" aria-current="page">
              {service.name}
            </li>
          </ol>
        </nav>

        {service.page.eyebrow && (
          <Reveal className="mb-6">
            <p className="t-label inline-flex items-center gap-2.5 border border-accent/40 bg-accent-dim px-3.5 py-2 text-accent-soft">
              <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
              {service.page.eyebrow}
            </p>
          </Reveal>
        )}

        <p className="t-label flex items-center gap-3 text-mist-2">
          <span aria-hidden className="inline-block h-1.5 w-1.5 bg-accent" />
          <span className="text-accent-soft">{service.index}</span>
          <span aria-hidden className="inline-block h-px w-8 bg-line-strong" />
          {service.page.entityLabel ?? service.name}
        </p>

        <RevealText
          as="h1"
          id="service-hero-heading"
          text={service.page.headline}
          className="text-display mt-8 max-w-[920px] font-semibold text-white"
          stagger={0.04}
        />

        <Reveal delay={0.2} className="mt-8">
          <p className="max-w-[560px] text-lead text-mist">{service.page.subheadline}</p>
        </Reveal>

        {service.page.entityDefinition && (
          <Reveal delay={0.25} className="mt-6">
            <p className="max-w-[640px] text-[15.5px] leading-relaxed text-mist md:text-[16px]">
              {service.page.entityDefinition}
            </p>
          </Reveal>
        )}

        <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton href="#contact" analytics={`service-hero-cta-${service.id}`}>
            {service.page.ctaLabel}
          </MagneticButton>
          <MagneticButton
            href={service.id === "shopify" ? "/work/shopify-performance-optimization" : "/work"}
            variant="ghost"
            analytics={`service-hero-work-${service.id}`}
          >
            {service.page.secondaryCtaLabel ?? "See related work"}
          </MagneticButton>
        </Reveal>

        {service.id === "shopify" && (
          <Reveal delay={0.35} className="mt-6">
            <p className="max-w-[560px] text-[14px] leading-relaxed text-mist-2">
              Looking for broader platform work across Shopify, WooCommerce, and
              headless commerce?{" "}
              <Link
                href={getServicePath(getServiceById("ecommerce")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Explore Ecommerce Development
              </Link>
              .
            </p>
          </Reveal>
        )}

        <Reveal delay={0.4} className="mt-16">
          <p className="t-label mb-5 text-mist-2">
            {service.flowLabel ?? "How it flows"}
          </p>
          <ServiceFlow flow={service.flow} />
        </Reveal>
      </div>
    </section>
  );
}
