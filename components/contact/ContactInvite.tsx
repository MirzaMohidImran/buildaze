import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { buildContactHref } from "@/lib/contact/paths";
import { site } from "@/lib/data/site";

type SectionTone = "dark" | "light";

/**
 * Compact CTA that routes visitors to the dedicated /contact inquiry page.
 * Use on hubs and service pages instead of embedding a second full form.
 */
export function ContactInvite({
  sectionIndex = "09",
  heading = "Tell us what you need to build or improve.",
  intro = "Share a few project details on the contact page. You do not need a finished specification to start.",
  ctaLabel = "Discuss Your Project",
  service,
  capability,
  source = "contact-invite",
  tone = "dark",
}: {
  sectionIndex?: string;
  heading?: string;
  intro?: string;
  ctaLabel?: string;
  service?: string;
  capability?: string;
  source?: string;
  tone?: SectionTone;
}) {
  const isLight = tone === "light";
  const href = buildContactHref({ service, capability });

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
      <div className="relative mx-auto max-w-[800px] px-5 text-center md:px-10">
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
        <div className="mt-10 flex flex-col items-center gap-4">
          <MagneticButton
            href={href}
            analytics={`${source}-discuss`}
            tone={tone}
          >
            {ctaLabel}
          </MagneticButton>
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
