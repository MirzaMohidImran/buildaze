import type { Metadata } from "next";
import Link from "next/link";
import { ContactInvite } from "@/components/contact/ContactInvite";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: { absolute: "Page not found — Buildaze" },
  robots: { index: false, follow: true },
};

const recoveryLinks = [
  { label: "Services", href: "/services", description: "Development, Shopify, design, AI, and marketing" },
  { label: "Work", href: "/work", description: "Selected case studies and outcomes" },
  { label: "Voice Agent", href: "/voice-agent", description: "Live demo and capabilities" },
  { label: "About", href: "/about", description: "How Buildaze works with clients" },
  { label: "Contact", href: "/contact", description: "Start a project conversation" },
] as const;

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="surface-ink relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
          <div aria-hidden className="build-grid fade-edges absolute inset-0" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 50% 30%, rgba(37,99,235,0.14), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[1600px] px-5 text-center md:px-10">
            <p className="t-label text-accent-soft">404</p>
            <h1 className="text-display mt-6 font-semibold text-white">
              This page is not available.
            </h1>
            <p className="mx-auto mt-6 max-w-[480px] text-lead text-mist">
              The link may be outdated, or the page may have moved. Use the
              routes below to continue.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href="/" analytics="404-home">
                Back to homepage
              </MagneticButton>
              <MagneticButton
                href="/contact"
                variant="ghost"
                analytics="404-contact"
              >
                Contact Buildaze
              </MagneticButton>
            </div>
          </div>
        </section>

        <section
          aria-label="Helpful links"
          className="surface-soft relative border-t border-line py-16 md:py-24"
        >
          <div className="mx-auto max-w-[960px] px-5 md:px-10">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {recoveryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-analytics={`404-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="surface-card group flex h-full flex-col rounded-card border border-line bg-white p-6 transition-colors hover:border-line-strong"
                  >
                    <span className="text-[18px] font-semibold text-white transition-colors group-hover:text-accent-soft">
                      {link.label}
                    </span>
                    <span className="mt-2 text-[14.5px] leading-relaxed text-mist">
                      {link.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactInvite
          sectionIndex="01"
          heading="Need a hand finding the right path?"
          intro="Tell us what you were looking for and we will point you to the right service or start a project conversation."
          source="404"
        />
      </main>
      <Footer />
    </>
  );
}
