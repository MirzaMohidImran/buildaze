"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ServiceLogoStrip } from "@/components/services/ServiceLogoStrip";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  buildContactHref,
  contactServiceParamForId,
} from "@/lib/contact/paths";
import type { Service } from "@/lib/data/services";
import { getServiceById } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";

export function ServiceHero({ service }: { service: Service }) {
  const isMarketingLeaf = service.id.startsWith("dm-");
  const isAiLeaf = service.id.startsWith("ai-") && service.id !== "ai-voice";
  const isDesignLeaf = service.id.startsWith("design-");
  const isShopifyLeaf =
    service.id.startsWith("shopify-") && service.id !== "shopify";
  const marketingHub = getServiceById("digital-marketing");
  const aiHub = getServiceById("ai");
  const designHub = getServiceById("design");
  const shopifyHub = getServiceById("shopify");
  const secondaryHref =
    service.id === "shopify"
      ? "#shopify-work"
      : service.id === "development"
        ? "#development-work"
        : service.id === "digital-marketing"
          ? "#marketing-services"
          : service.id === "ai"
            ? "#ai-services"
            : service.id === "design"
              ? "#design-services"
              : isMarketingLeaf
                ? getServicePath(marketingHub!)
                : isAiLeaf
                  ? getServicePath(aiHub!)
                  : isDesignLeaf
                    ? getServicePath(designHub!)
                    : isShopifyLeaf
                      ? getServicePath(shopifyHub!)
                      : "/work";

  return (
    <section
      aria-labelledby="service-hero-heading"
      className="surface-ink relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div aria-hidden className="build-grid fade-edges absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 35%, rgba(37,99,235,0.14), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 text-center md:px-10">
        <nav aria-label="Breadcrumb" className="mb-10 w-full">
          <ol className="t-label flex flex-wrap items-center justify-center gap-2 text-mist-2">
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
            {isMarketingLeaf && marketingHub ? (
              <>
                <li>
                  <Link
                    href={getServicePath(marketingHub)}
                    className="transition-colors hover:text-white"
                  >
                    {marketingHub.name}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-accent-soft" aria-current="page">
                  {service.shortName}
                </li>
              </>
            ) : isAiLeaf && aiHub ? (
              <>
                <li>
                  <Link
                    href={getServicePath(aiHub)}
                    className="transition-colors hover:text-white"
                  >
                    {aiHub.name}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-accent-soft" aria-current="page">
                  {service.shortName}
                </li>
              </>
            ) : isDesignLeaf && designHub ? (
              <>
                <li>
                  <Link
                    href={getServicePath(designHub)}
                    className="transition-colors hover:text-white"
                  >
                    {designHub.name}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-accent-soft" aria-current="page">
                  {service.shortName}
                </li>
              </>
            ) : (
              <li className="text-accent-soft" aria-current="page">
                {service.name}
              </li>
            )}
          </ol>
        </nav>

        {service.page.eyebrow && (
          <Reveal className="mb-6 flex justify-center">
            <p className="t-label inline-flex items-center gap-2.5 border border-accent/40 bg-accent-dim px-3.5 py-2 text-accent-soft">
              <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
              {service.page.eyebrow}
            </p>
          </Reveal>
        )}

        <RevealText
          as="h1"
          id="service-hero-heading"
          text={service.page.headline}
          className="text-display mx-auto mt-8 max-w-[920px] text-center text-white"
          stagger={0.04}
        />

        <Reveal delay={0.2} className="mt-8 w-full">
          <p className="text-lead mx-auto max-w-[560px] text-mist">
            {service.page.subheadline}
          </p>
        </Reveal>

        <Reveal
          delay={0.3}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href={buildContactHref({
              service: contactServiceParamForId(service.id),
              capability:
                service.id.startsWith("dm-") ||
                service.id.startsWith("ai-") ||
                service.id.startsWith("design-")
                  ? service.name
                  : undefined,
            })}
            analytics={`service-hero-cta-${service.id}`}
          >
            {service.page.ctaLabel}
          </MagneticButton>
          <MagneticButton
            href={secondaryHref}
            variant="ghost"
            analytics={`service-hero-work-${service.id}`}
          >
            {service.page.secondaryCtaLabel ?? "See related work"}
          </MagneticButton>
        </Reveal>

        {service.id === "digital-marketing" && (
          <Reveal delay={0.35} className="mt-6 w-full">
            <p className="mx-auto max-w-[640px] text-[14px] leading-relaxed text-mist-2">
              Prefer a specialist page? Explore{" "}
              <Link
                href={getServicePath(getServiceById("dm-seo")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                SEO
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("dm-meta-ads")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Meta Ads
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("dm-google-ads")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Google Ads
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("dm-social")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Social Media
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("dm-analytics")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Analytics
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("dm-ecommerce-growth")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Ecommerce Growth
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("dm-email-sms")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Email &amp; SMS
              </Link>
              , or{" "}
              <Link
                href={getServicePath(getServiceById("dm-content-strategy")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Content Strategy
              </Link>
              .
            </p>
          </Reveal>
        )}

        {service.id === "ai" && (
          <Reveal delay={0.35} className="mt-6 w-full">
            <p className="mx-auto max-w-[640px] text-[14px] leading-relaxed text-mist-2">
              Prefer a specialist page? Explore{" "}
              <Link
                href={getServicePath(getServiceById("ai-applications")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                AI Applications
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("ai-chatbots")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                AI Chatbots
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("ai-voice")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Voice Agents
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("ai-solutions")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Custom AI Solutions
              </Link>
              , or{" "}
              <Link
                href={getServicePath(getServiceById("ai-automation")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Business Automation
              </Link>
              .
            </p>
          </Reveal>
        )}

        {service.id === "design" && (
          <Reveal delay={0.35} className="mt-6 w-full">
            <p className="mx-auto max-w-[640px] text-[14px] leading-relaxed text-mist-2">
              Prefer a specialist page? Explore{" "}
              <Link
                href={getServicePath(getServiceById("design-graphic")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Graphic Design
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("design-illustration")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Illustration
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("design-app")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                App Design
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("design-uiux")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                UI/UX Design
              </Link>
              , or{" "}
              <Link
                href={getServicePath(getServiceById("design-branding")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Branding
              </Link>
              .
            </p>
          </Reveal>
        )}

        {service.id === "development" && (
          <Reveal delay={0.35} className="mt-6 w-full">
            <p className="mx-auto max-w-[640px] text-[14px] leading-relaxed text-mist-2">
              Prefer a specialist page? Explore{" "}
              <Link
                href={getServicePath(getServiceById("web")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
                data-analytics="dev-hero-to-web"
              >
                Web Development
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("saas")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
                data-analytics="dev-hero-to-saas"
              >
                SaaS Development
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("ecommerce")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
                data-analytics="dev-hero-to-ecommerce"
              >
                Ecommerce Development
              </Link>
              , or{" "}
              <Link
                href={getServicePath(getServiceById("shopify")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
                data-analytics="dev-hero-to-shopify"
              >
                Shopify design &amp; development
              </Link>
              .
            </p>
          </Reveal>
        )}

        {service.id === "shopify" && (
          <Reveal delay={0.35} className="mt-6 w-full">
            <p className="mx-auto max-w-[560px] text-[14px] leading-relaxed text-mist-2">
              Looking for broader ecommerce platform work beyond Shopify?{" "}
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

        {service.id === "ai" && (
          <Reveal delay={0.35} className="mt-6 w-full">
            <p className="mx-auto max-w-[560px] text-[14px] leading-relaxed text-mist-2">
              Looking for a spoken conversation agent?{" "}
              <Link
                href="/voice-agent"
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
                data-analytics="ai-to-voice-agent"
              >
                Explore Voice Agent
              </Link>
              .
            </p>
          </Reveal>
        )}

        {service.id === "development" && (
          <Reveal delay={0.35} className="mt-6 w-full">
            <p className="mx-auto max-w-[640px] text-[14px] leading-relaxed text-mist-2">
              Specialist paths:{" "}
              <Link
                href={getServicePath(getServiceById("web")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Web
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("saas")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                SaaS
              </Link>
              ,{" "}
              <Link
                href={getServicePath(getServiceById("ecommerce")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Ecommerce
              </Link>
              , and{" "}
              <Link
                href={getServicePath(getServiceById("shopify")!)}
                className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Shopify
              </Link>
              .
            </p>
          </Reveal>
        )}

        {service.page.logoStrip && (
          <ServiceLogoStrip
            logoStrip={service.page.logoStrip}
            variant="hero"
          />
        )}
      </div>
    </section>
  );
}
