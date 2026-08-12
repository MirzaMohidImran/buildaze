"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type {
  ServiceClientProof as ClientProofContent,
  ServiceClientReview,
  ServiceReviewSource,
} from "@/lib/data/services";

const SOURCE_LABEL: Record<ServiceReviewSource, string> = {
  upwork: "Upwork review",
  linkedin: "LinkedIn recommendation",
  direct: "Client feedback",
};

function SourceBadge({ source }: { source: ServiceReviewSource }) {
  return (
    <span className="t-label inline-flex items-center gap-2.5 text-accent-soft">
      <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
      {SOURCE_LABEL[source]}
    </span>
  );
}

function ReviewEvidence({ review }: { review: ServiceClientReview }) {
  if (review.imageSrc) {
    return (
      <div className="relative h-full min-h-[320px] overflow-hidden border border-line bg-ink-2">
        <Image
          src={review.imageSrc}
          alt={
            review.imageAlt ??
            `Verified review from ${review.name} at ${review.brand}`
          }
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent"
        />
      </div>
    );
  }

  // Stylized review artifact when a real screenshot hasn't been added yet.
  return (
    <div className="relative flex h-full min-h-[320px] flex-col overflow-hidden border border-line bg-ink-2 p-6 md:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(37,99,235,0.1), transparent 65%)",
        }}
      />
      <div className="relative flex items-center justify-between gap-4 border-b border-line pb-5">
        <SourceBadge source={review.source} />
        <span className="t-label text-mist-2">Authenticity</span>
      </div>
      <div className="relative mt-6 flex-1">
        <div className="space-y-2.5">
          {[100, 92, 88, 76, 64, 52].map((w, i) => (
            <div
              key={i}
              className="h-[7px] bg-white/[0.1]"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
        <p className="mt-8 text-[14px] leading-relaxed text-mist">
          <span className="text-accent-soft">&ldquo;</span>
          {review.quote.slice(0, 120)}
          {review.quote.length > 120 ? "…" : ""}
          <span className="text-accent-soft">&rdquo;</span>
        </p>
      </div>
      <div className="relative mt-8 flex items-end justify-between gap-4 border-t border-line pt-5">
        <div>
          <p className="text-[14px] font-medium text-white">{review.name}</p>
          <p className="mt-1 text-[12px] text-mist-2">
            {review.role}, {review.brand}
          </p>
        </div>
        <span className="t-label text-mist-2">Client feedback</span>
      </div>
    </div>
  );
}

function SupportingReview({
  review,
  index,
}: {
  review: ServiceClientReview;
  index: string;
}) {
  return (
    <Reveal y={24} className="group border-t border-line pt-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="t-label text-mist-2">
          <span className="text-accent-soft">{index}</span>
          <span aria-hidden className="mx-3 inline-block h-px w-6 bg-line-strong align-middle" />
          {review.project}
        </p>
        <SourceBadge source={review.source} />
      </div>
      <blockquote className="mt-6">
        <p className="max-w-[520px] text-[18px] leading-snug font-medium tracking-tight text-white md:text-[20px]">
          <span aria-hidden className="text-accent-soft">
            &ldquo;
          </span>
          {review.quote}
          <span aria-hidden className="text-accent-soft">
            &rdquo;
          </span>
        </p>
      </blockquote>
      <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="text-[14px] font-medium text-white">{review.name}</span>
        <span className="text-[13px] text-mist-2">{review.brand}</span>
      </div>
    </Reveal>
  );
}

export function ServiceClientProof({
  clientProof,
  sectionIndex = "08",
}: {
  clientProof: ClientProofContent;
  sectionIndex?: string;
}) {
  const featured = clientProof.featured;

  return (
    <section
      aria-labelledby="service-proof-heading"
      className="relative border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Client proof" />
        <p className="t-label mt-8 text-accent-soft">{clientProof.eyebrow}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-10">
          <RevealText
            as="h2"
            id="service-proof-heading"
            text={clientProof.headline}
            className="text-h2 max-w-[720px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="max-w-[400px] space-y-4">
              {clientProof.intro.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Featured proof: readable quote + authenticity evidence */}
        <Reveal y={28} className="mt-16 border border-line">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative flex flex-col p-8 md:p-10 lg:col-span-7 lg:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 55% at 10% 0%, rgba(37,99,235,0.1), transparent 65%)",
                }}
              />
              <div className="relative">
                <SourceBadge source={featured.source} />
                <blockquote className="mt-8">
                  <p className="max-w-[560px] text-[22px] leading-[1.35] font-medium tracking-tight text-white md:text-[26px] lg:text-[28px]">
                    <span aria-hidden className="text-accent-soft">
                      &ldquo;
                    </span>
                    {featured.quote}
                    <span aria-hidden className="text-accent-soft">
                      &rdquo;
                    </span>
                  </p>
                </blockquote>
                <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
                  <div>
                    <p className="text-[16px] font-medium text-white">
                      {featured.name}
                    </p>
                    <p className="mt-1.5 text-[14px] text-mist">
                      {featured.role}
                      <span className="text-mist-2"> · {featured.brand}</span>
                    </p>
                    <p className="t-label mt-5 text-mist-2">
                      Project
                      <span aria-hidden className="mx-3 inline-block h-px w-6 bg-line-strong align-middle" />
                      <span className="text-white">{featured.project}</span>
                    </p>
                  </div>
                  {featured.href && (
                    <Link
                      href={featured.href}
                      data-analytics="shopify-proof-featured"
                      className="group inline-flex items-center gap-2.5 text-[15px] font-medium text-white"
                    >
                      <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
                        Discuss a similar project
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
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-line">
              <ReviewEvidence review={featured} />
            </div>
          </div>
        </Reveal>

        {/* Supporting reviews — editorial wall, not cards */}
        <div className="mt-4 grid grid-cols-1 gap-x-16 gap-y-4 md:grid-cols-2">
          {clientProof.reviews.map((review, i) => (
            <SupportingReview
              key={review.id}
              review={review}
              index={String(i + 2).padStart(2, "0")}
            />
          ))}
        </div>

        {/* Categories + CTA */}
        <Reveal y={28} className="relative mt-20 overflow-hidden border border-line p-8 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 85% 20%, rgba(37,99,235,0.1), transparent 65%)",
            }}
          />
          <div className="relative">
            <p className="t-label text-accent-soft">{clientProof.categoriesLabel}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
              {clientProof.categories.map((category, i) => (
                <span key={category} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden className="h-1 w-1 bg-accent" />}
                  <span className="t-label text-white">{category}</span>
                </span>
              ))}
            </div>
            <div className="mt-12 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h3 className="text-h3 max-w-[560px] font-semibold text-white">
                  {clientProof.closingTitle}
                </h3>
                <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-mist">
                  {clientProof.closingBody}
                </p>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <MagneticButton
                  href={clientProof.ctaHref}
                  analytics="shopify-proof-cta"
                >
                  {clientProof.ctaLabel}
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
