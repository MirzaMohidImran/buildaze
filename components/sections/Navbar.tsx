"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav, products } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";
import { Logo } from "@/components/ui/Logo";

type OpenMenu = "services" | "products" | null;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openPanel = (menu: Exclude<OpenMenu, null>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };
  const scheduleClosePanel = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };
  const closePanel = () => setOpenMenu(null);

  const panelOpen = openMenu !== null;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || panelOpen || mobileOpen
            ? "border-b border-line bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-5 md:px-10">
          <Link href="/" aria-label="Buildaze — home" className="flex items-center gap-2.5">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.links.map((link) =>
              "menu" in link && link.menu ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => openPanel(link.menu)}
                  onMouseLeave={scheduleClosePanel}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === link.menu}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenMenu((current) => (current === link.menu ? null : link.menu))
                    }
                    className="group relative px-4 py-2 text-[14.5px] text-mist transition-colors hover:text-white"
                  >
                    {link.label}
                    <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative px-4 py-2 text-[14.5px] text-mist transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <Link
              href={nav.cta.href}
              data-analytics="nav-start-project"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[14px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition-colors hover:bg-accent-bright"
            >
              {nav.cta.label}
              <svg aria-hidden width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`h-px w-5 bg-white transition-transform duration-300 ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-white transition-transform duration-300 ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Services mega-menu */}
        <AnimatePresence>
          {openMenu === "services" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => openPanel("services")}
              onMouseLeave={scheduleClosePanel}
              className="absolute inset-x-0 top-full hidden border-b border-line bg-ink/95 backdrop-blur-xl lg:block"
            >
              <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-px px-10 py-8 xl:grid-cols-5">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={getServicePath(service)}
                    onClick={closePanel}
                    data-analytics={`nav-service-${service.id}`}
                    className="group border-l border-line px-6 py-2 transition-colors hover:border-accent"
                  >
                    <span className="t-label block text-accent-soft">{service.index}</span>
                    <span className="mt-2 block text-[16px] font-medium text-white">
                      {service.id === "shopify"
                        ? "Shopify Growth Agency"
                        : service.name}
                    </span>
                    <span className="mt-2 block text-[13.5px] leading-relaxed text-mist-2 transition-colors group-hover:text-mist">
                      {service.oneLiner}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Our Products menu */}
        <AnimatePresence>
          {openMenu === "products" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => openPanel("products")}
              onMouseLeave={scheduleClosePanel}
              className="absolute inset-x-0 top-full hidden border-b border-line bg-ink/95 backdrop-blur-xl lg:block"
            >
              <div className="mx-auto max-w-[1600px] px-10 py-8">
                <p className="t-label mb-5 text-mist-2">Our Products</p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href={product.href}
                      onClick={closePanel}
                      data-analytics={`nav-product-${product.id}`}
                      className="group border border-line bg-ink-2 px-6 py-5 transition-colors hover:border-accent/50"
                    >
                      <span className="t-label block text-accent-soft">{product.index}</span>
                      <span className="mt-2 block text-[16px] font-medium text-white">
                        {product.label}
                      </span>
                      <span className="mt-2 block text-[13.5px] leading-relaxed text-mist-2 transition-colors group-hover:text-mist">
                        {product.oneLiner}
                      </span>
                      <span className="t-label mt-4 inline-flex items-center gap-2 text-accent-soft">
                        Try the demo
                        <svg aria-hidden width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                          <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu — rendered outside the header because its backdrop-filter
          would otherwise become the containing block for this fixed panel. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 flex flex-col overflow-y-auto bg-ink lg:hidden"
          >
            <div className="build-grid flex-1 px-6 py-8">
              {nav.links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line py-5"
                  >
                    <span className="t-label text-accent-soft">0{i + 1}</span>
                    <span className="text-h3 font-medium tracking-tight text-white">{link.label}</span>
                  </Link>
                  {"menu" in link && link.menu === "services" && (
                    <ul className="mb-2 ml-11 space-y-3 border-b border-line pb-5">
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={getServicePath(service)}
                            onClick={() => setMobileOpen(false)}
                            className="text-[15px] text-mist transition-colors hover:text-white"
                          >
                            {service.id === "shopify"
                              ? "Shopify Growth Agency"
                              : service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {"menu" in link && link.menu === "products" && (
                    <ul className="mb-2 ml-11 space-y-3 border-b border-line pb-5">
                      {products.map((product) => (
                        <li key={product.id}>
                          <Link
                            href={product.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-[15px] text-mist transition-colors hover:text-white"
                          >
                            {product.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.35 }}
                className="mt-10"
              >
                <Link
                  href={nav.cta.href}
                  onClick={() => setMobileOpen(false)}
                  data-analytics="mobile-nav-start-project"
                  className="flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 text-[16px] font-medium text-white"
                >
                  {nav.cta.label}
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
