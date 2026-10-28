import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/lib/data/site";
import { serviceCategories } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";

const companyLinks = [
  { label: "Work", href: "/work" },
  { label: "Resources", href: "/resources" },
  { label: "Voice Agent", href: "/voice-agent" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Website Terms", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
] as const;

export function Footer({ tone = "dark" }: { tone?: "dark" | "light" } = {}) {
  const year = new Date().getFullYear();
  const isLight = tone === "light";

  return (
    <footer
      className={`relative overflow-hidden border-t border-line ${
        isLight ? "surface-page bg-white" : "surface-ink"
      }`}
    >
      {!isLight && (
        <>
          <div
            aria-hidden
            className="build-grid fade-edges pointer-events-none absolute inset-0 opacity-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 15% 0%, rgba(37,99,235,0.12), transparent 60%)",
            }}
          />
        </>
      )}

      <div className="relative mx-auto max-w-[1600px] px-5 pt-16 pb-10 md:px-10 md:pt-20 md:pb-12">
        {/* Closing CTA */}
        <div className="flex flex-col gap-8 border-b border-line pb-14 md:flex-row md:items-end md:justify-between md:pb-16">
          <div className="max-w-[640px]">
            <p className="t-label text-accent-soft">Start a project</p>
            <h2 className="text-h2 mt-4 tracking-tight text-white md:mt-5">
              Let’s build the next thing — clearly scoped, properly shipped.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton
              href="/contact"
              analytics="footer-cta-start"
              tone={tone}
            >
              Start a Project
            </MagneticButton>
            <MagneticButton
              href={`mailto:${site.email}`}
              variant="ghost"
              analytics="footer-cta-email"
              tone={tone}
            >
              {site.email}
            </MagneticButton>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-1 gap-12 pt-14 md:grid-cols-12 md:gap-10 md:pt-16">
          <div className="md:col-span-5 lg:col-span-4">
            <Logo tone={tone} />
            <p className="mt-5 max-w-[340px] text-[15px] leading-relaxed text-mist md:mt-6">
              Design, development, AI, digital marketing and Shopify — scoped
              clearly and handed over so your team can keep moving.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                data-analytics="footer-email-click"
                className="group inline-flex items-center gap-3 text-[15px] font-medium text-white"
              >
                <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
                  {site.email}
                </span>
                <span
                  aria-hidden
                  className="text-accent transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
              <p className="t-label text-mist-2">
                Remote · Clear scope · Practical handover
              </p>
            </div>
          </div>

          <nav aria-label="Services" className="md:col-span-3 lg:col-span-3">
            <h3 className="t-label mb-5 flex items-center gap-3 text-mist-2">
              <span className="text-accent-soft">01</span>
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              Services
            </h3>
            <ul className="space-y-3">
              {serviceCategories.map((service) => (
                <li key={service.id}>
                  <Link
                    href={getServicePath(service)}
                    className="group inline-flex items-center gap-2 text-[14.5px] text-mist transition-colors hover:text-white"
                  >
                    <span
                      aria-hidden
                      className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="md:col-span-2 lg:col-span-2">
            <h3 className="t-label mb-5 flex items-center gap-3 text-mist-2">
              <span className="text-accent-soft">02</span>
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[14.5px] text-mist transition-colors hover:text-white"
                  >
                    <span
                      aria-hidden
                      className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social" className="md:col-span-2 lg:col-span-3">
            <h3 className="t-label mb-5 flex items-center gap-3 text-mist-2">
              <span className="text-accent-soft">03</span>
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              Connect
            </h3>
            <ul className="space-y-3">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[14.5px] text-mist transition-colors hover:text-white"
                  >
                    <span
                      aria-hidden
                      className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3"
                    />
                    {social.label}
                    <span
                      aria-hidden
                      className="text-[11px] text-mist-2 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[220px] text-[13px] leading-relaxed text-mist-2">
              Prefer Shopify specifically?{" "}
              <Link
                href="/shopify-growth-agency"
                className="text-accent-soft underline-offset-2 hover:underline"
              >
                Shopify design &amp; development
              </Link>
            </p>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-5 border-t border-line pt-8 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="t-label text-[10.5px] text-mist-2">
              © {year} {site.name}. All rights reserved.
            </p>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-mist-2 transition-colors hover:text-accent-soft"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <p className="t-label flex items-center gap-2.5 text-[10.5px] tracking-[0.14em] text-mist-2 uppercase">
            <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
            Clear scope. Practical handover.
          </p>
        </div>
      </div>
    </footer>
  );
}
