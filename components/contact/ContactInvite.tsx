import { Suspense } from "react";
import Link from "next/link";
import { ContactInquiryForm } from "@/components/contact/ContactInquiryForm";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/data/site";

type SectionTone = "dark" | "light";

function ContactFormFallback() {
  return (
    <div
      className="min-h-[280px] rounded-panel border border-white/15 bg-gradient-to-b from-white/[0.12] to-white/[0.04] backdrop-blur-2xl"
      aria-hidden
    />
  );
}

/**
 * Shared contact section: heading + the single ContactInquiryForm.
 * Use on hubs and service pages so every page reuses one form component
 * (Web3Forms) instead of duplicating form markup.
 */
export function ContactInvite({
  sectionIndex = "09",
  heading = "Tell us what you need to build or improve.",
  intro = "Share a few project details. You do not need a finished specification to start.",
  service,
  capability,
  source = "contact-invite",
  tone = "dark",
}: {
  sectionIndex?: string;
  heading?: string;
  intro?: string;
  /** @deprecated Kept for call-site compatibility; CTA now embeds the form. */
  ctaLabel?: string;
  service?: string;
  capability?: string;
  source?: string;
  tone?: SectionTone;
}) {
  const isLight = tone === "light";

  return (
    <section
      id="contact"
      aria-labelledby="contact-invite-heading"
      className={`relative scroll-mt-20 overflow-hidden border-t border-line py-20 md:py-28${
        isLight ? " surface-soft" : " surface-ink"
      }`}
    >
      {isLight ? (
        <div
          aria-hidden
          className="build-grid pointer-events-none absolute inset-0 opacity-35"
        />
      ) : (
        <div aria-hidden className="build-grid fade-edges absolute inset-0" />
      )}
      <div className="relative mx-auto max-w-[720px] px-5 md:px-10">
        <div className="text-center">
          <SectionLabel index={sectionIndex} label="Contact" />
          <h2
            id="contact-invite-heading"
            className="text-h2 mt-8 font-semibold text-white"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[15.5px] leading-relaxed text-mist">
            {intro}
          </p>
        </div>

        <div className="mt-10">
          <Suspense fallback={<ContactFormFallback />}>
            <ContactInquiryForm
              initialService={service}
              initialCapability={capability}
              source={source}
            />
          </Suspense>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <p className="text-[14px] text-mist-2">
            Or email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent-soft underline-offset-2 hover:underline"
            >
              {site.email}
            </a>
          </p>
          <Link
            href="/work"
            className="text-[14px] font-medium text-accent-soft underline-offset-2 hover:underline"
          >
            Want to see how we work? Explore our projects.
          </Link>
        </div>
      </div>
    </section>
  );
}
