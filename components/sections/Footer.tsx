import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";

const companyLinks = [
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "Team", href: "/#team" },
  { label: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-[1600px] px-5 pt-20 pb-10 md:px-10 md:pt-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-[360px] text-[15px] leading-relaxed text-mist">
              AI-native software development studio. We turn ambitious ideas
              into production-ready digital products — and hand you the keys.
            </p>
            <a
              href={`mailto:${site.email}`}
              data-analytics="footer-email-click"
              className="mt-8 inline-block font-mono text-[15px] text-mist transition-colors hover:text-accent-soft"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Services" className="md:col-span-3">
            <h3 className="t-label mb-6 text-mist-2">Services</h3>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={getServicePath(service)}
                    className="text-[14.5px] text-mist transition-colors hover:text-white"
                  >
                    {service.id === "shopify"
                      ? "Shopify Development Agency"
                      : service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="md:col-span-2">
            <h3 className="t-label mb-6 text-mist-2">Company</h3>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14.5px] text-mist transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social" className="md:col-span-2">
            <h3 className="t-label mb-6 text-mist-2">Connect</h3>
            <ul className="space-y-3.5">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14.5px] text-mist transition-colors hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Closing brand moment: the wordmark dissolving into the Build Grid */}
        <div aria-hidden className="group relative mt-24 select-none">
          <p className="text-center font-sans text-[clamp(4rem,15vw,15rem)] leading-[0.95] font-semibold tracking-[-0.04em] whitespace-nowrap text-white/[0.05] transition-colors duration-700 group-hover:text-white/[0.09]">
            Buildaze
          </p>
          <div className="build-grid-blue pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-50" style={{ maskImage: "linear-gradient(to top, black, transparent)" }} />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="t-label text-[10.5px] text-mist-2">
            © {new Date().getFullYear()} Buildaze. All rights reserved.
          </p>
          <p className="t-label flex items-center gap-2.5 text-[10.5px] text-mist-2">
            <span aria-hidden className="h-1 w-1 bg-accent" />
            We build. You own. It ships.
          </p>
        </div>
      </div>
    </footer>
  );
}
