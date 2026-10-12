"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { nav, products } from "@/lib/data/site";
import {
  getServiceById,
  serviceCategories,
  type Service,
} from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";
import { Logo } from "@/components/ui/Logo";

type OpenMenu = "services" | "products" | null;
type MobileSection = "services" | "products" | null;

type NavChild = { id: string; name: string; href: string };

function categoryChildren(category: Service): NavChild[] {
  return (category.relatedServiceIds ?? [])
    .map((id) => getServiceById(id))
    .filter((service): service is Service => Boolean(service))
    .filter((service) => {
      // Shopify is its own top-level category — keep Development focused.
      if (category.id === "development" && service.id === "shopify") {
        return false;
      }
      return service.id !== category.id;
    })
    .map((service) => ({
      id: service.id,
      name: service.name,
      href: getServicePath(service),
    }));
}

function Chevron({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg
      aria-hidden
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} ${className}`}
    >
      <path
        d="M2 3.5 5 6.5 8 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M1 7h11M8 2.5 12.5 7 8 11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar({
  showShopifyPartnerBadge = false,
  tone = "dark",
}: {
  /** Shopify service page only — official Select Partner badge. */
  showShopifyPartnerBadge?: boolean;
  /** Ink heroes use dark chrome (transparent → sticky ink). Light is reserved for rare light heroes. */
  tone?: "dark" | "light";
} = {}) {
  const isLight = tone === "light";
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MobileSection>(null);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const servicesPanelId = useId();
  const productsPanelId = useId();

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

  useEffect(() => {
    if (!mobileOpen) {
      setMobileSection(null);
      setMobileCategory(null);
    }
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [openMenu]);

  const openPanel = (menu: Exclude<OpenMenu, null>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };

  const scheduleClosePanel = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };

  const closePanel = () => setOpenMenu(null);
  const closeMobile = () => setMobileOpen(false);

  const toggleMobileSection = (section: Exclude<MobileSection, null>) => {
    setMobileSection((current) => (current === section ? null : section));
    if (section !== "services") setMobileCategory(null);
  };

  const toggleMobileCategory = (id: string) => {
    setMobileCategory((current) => (current === id ? null : id));
  };

  const panelOpen = openMenu !== null;

  return (
    <>
      {/* Desktop menu dimmer — keeps hero from competing under the panel */}
      <AnimatePresence>
        {panelOpen && (
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closePanel}
            className={`fixed inset-0 top-[72px] z-40 hidden cursor-default lg:block ${
              isLight ? "bg-[rgb(12_16_23/0.28)]" : "bg-black/55"
            }`}
          />
        )}
      </AnimatePresence>

      <header
        ref={headerRef}
        onMouseEnter={() => {
          if (closeTimer.current) clearTimeout(closeTimer.current);
        }}
        onMouseLeave={scheduleClosePanel}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          isLight
            ? scrolled || panelOpen || mobileOpen
              ? "border-b border-line bg-white/95 backdrop-blur-xl"
              : "border-b border-line bg-white"
            : scrolled || panelOpen || mobileOpen
              ? "border-b border-line bg-[var(--brand-ink,var(--color-ink))]/95 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between gap-3 px-5 md:px-10">
          <div className="flex min-w-0 items-center gap-3 md:gap-4">
            <Link
              href="/"
              aria-label="Buildaze — home"
              className="flex shrink-0 items-center"
              onClick={() => {
                closePanel();
                closeMobile();
              }}
            >
              <Logo variant="mark" tone={tone} />
            </Link>

            {showShopifyPartnerBadge && (
              <>
                <span
                  aria-hidden
                  className="hidden h-5 w-px shrink-0 bg-line-strong sm:block"
                />
                <a
                  href="https://www.shopify.com/partners"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="nav-shopify-partners"
                  aria-label="Shopify Partners"
                  className="shrink-0 transition-opacity hover:opacity-85"
                >
                  <img
                    src="/brands/shopify-partners.png"
                    alt="Shopify Partners"
                    width={180}
                    height={40}
                    className="h-6 w-auto md:h-7"
                  />
                </a>
              </>
            )}
          </div>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.links.map((link) =>
              "menu" in link && link.menu ? (
                <div key={link.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={openMenu === link.menu}
                    aria-haspopup="true"
                    aria-controls={
                      link.menu === "services" ? servicesPanelId : productsPanelId
                    }
                    onMouseEnter={() => openPanel(link.menu)}
                    onClick={() => openPanel(link.menu)}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        closePanel();
                        return;
                      }
                      if (event.key === "ArrowDown") {
                        event.preventDefault();
                        openPanel(link.menu);
                      }
                    }}
                    className={`group relative inline-flex items-center gap-1.5 px-4 py-2 text-base font-semibold transition-colors ${
                      openMenu === link.menu
                        ? isLight
                          ? "text-[var(--brand-black,#0C1017)]"
                          : "text-white"
                        : isLight
                          ? "text-[var(--text-secondary,#475569)] hover:text-[var(--brand-blue,#2563EB)]"
                          : "text-mist hover:text-white"
                    }`}
                  >
                    {link.label}
                    <Chevron
                      open={openMenu === link.menu}
                      className={
                        openMenu === link.menu ? "text-accent" : "text-mist-2"
                      }
                    />
                    <span
                      className={`absolute inset-x-4 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ${
                        openMenu === link.menu
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closePanel}
                  className={`group relative px-4 py-2 text-base font-semibold transition-colors ${
                    isLight
                      ? "text-[var(--text-secondary,#475569)] hover:text-[var(--brand-blue,#2563EB)]"
                      : "text-mist hover:text-white"
                  }`}
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
              onClick={closePanel}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition-colors hover:bg-accent-bright"
            >
              {nav.cta.label}
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className={`h-px w-5 transition-transform duration-300 ${
                isLight ? "bg-[var(--brand-black,#0C1017)]" : "bg-white"
              } ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 transition-transform duration-300 ${
                isLight ? "bg-[var(--brand-black,#0C1017)]" : "bg-white"
              } ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Services mega-menu */}
        <AnimatePresence>
          {openMenu === "services" && (
            <motion.div
              id={servicesPanelId}
              role="region"
              aria-label="Services"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => openPanel("services")}
              className={`absolute inset-x-0 top-full hidden border-b border-line lg:block ${
                isLight
                  ? "bg-white shadow-[0_16px_40px_rgba(12,16,23,0.08)]"
                  : "bg-ink shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
              }`}
            >
              <div className="mx-auto max-w-[1600px] px-10 pt-7 pb-0">
                <div className="mb-5 flex items-end justify-between gap-6">
                  <div>
                    <p className="t-label text-accent-soft">Services</p>
                    <p className="mt-1 max-w-xl text-[14px] leading-relaxed text-mist-2">
                      Choose a category, then a specialist service — or open the
                      full overview.
                    </p>
                  </div>
                  <Link
                    href="/services"
                    onClick={closePanel}
                    data-analytics="nav-services-hub"
                    className="group inline-flex shrink-0 items-center gap-2 text-[13.5px] font-semibold text-white transition-colors hover:text-accent-soft"
                  >
                    View all services
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-5 lg:gap-x-4">
                  {serviceCategories.map((service) => {
                    const children = categoryChildren(service);
                    return (
                      <div key={service.id} className="min-w-0">
                        <Link
                          href={getServicePath(service)}
                          onClick={closePanel}
                          data-analytics={`nav-service-${service.id}`}
                          className="group block border-t border-line pt-4 transition-colors hover:border-accent"
                        >
                          <span className="t-label block text-accent-soft">
                            {service.index}
                          </span>
                          <span className="mt-2 flex items-center gap-1.5 text-[15px] font-semibold text-white">
                            {service.name}
                            <ArrowRight className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                          </span>
                          <span className="mt-1.5 block text-[12.5px] leading-snug text-mist-2 line-clamp-2">
                            {service.oneLiner}
                          </span>
                        </Link>

                        {children.length > 0 ? (
                          <ul className="mt-3 space-y-0.5 border-t border-line/70 pt-3">
                            {children.map((child) => (
                              <li key={child.id}>
                                <Link
                                  href={child.href}
                                  onClick={closePanel}
                                  data-analytics={`nav-service-${child.id}`}
                                  className="block rounded-sm px-0 py-1.5 text-[13.5px] font-medium text-mist transition-colors hover:text-accent-soft"
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <ul className="mt-3 space-y-0.5 border-t border-line/70 pt-3">
                            {service.capabilities.slice(0, 4).map((cap) => (
                              <li
                                key={cap}
                                className="py-1.5 text-[13px] font-medium text-mist-2"
                              >
                                {cap}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className={`mt-7 border-t border-line ${
                  isLight ? "bg-[var(--section-soft,#F7F8FA)]" : "bg-ink-2"
                }`}
              >
                <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-10 py-4">
                  <p className="text-[13.5px] text-mist-2">
                    Not sure where to start? Tell us the outcome you need.
                  </p>
                  <Link
                    href={nav.cta.href}
                    onClick={closePanel}
                    data-analytics="nav-services-cta"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-accent-bright"
                  >
                    {nav.cta.label}
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Our Products menu */}
        <AnimatePresence>
          {openMenu === "products" && (
            <motion.div
              id={productsPanelId}
              role="region"
              aria-label="Our Products"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => openPanel("products")}
              className={`absolute inset-x-0 top-full hidden border-b border-line lg:block ${
                isLight
                  ? "bg-white shadow-[0_16px_40px_rgba(12,16,23,0.08)]"
                  : "bg-ink shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
              }`}
            >
              <div className="mx-auto max-w-[1600px] px-10 py-7">
                <div className="mb-5">
                  <p className="t-label text-accent-soft">Our Products</p>
                  <p className="mt-1 max-w-xl text-[14px] leading-relaxed text-mist-2">
                    Try a live product demo, then scope a Buildaze build for your
                    business.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href={product.href}
                      onClick={closePanel}
                      data-analytics={`nav-product-${product.id}`}
                      className={`group flex flex-col rounded-card border border-line p-4 transition-colors hover:border-accent ${
                        isLight ? "bg-[var(--section-soft,#F7F8FA)]" : "bg-ink-2"
                      }`}
                    >
                      <span className="t-label text-accent-soft">
                        {product.index}
                      </span>
                      <span className="mt-2 text-[16px] font-semibold text-white">
                        {product.label}
                      </span>
                      <span className="mt-2 flex-1 text-[13.5px] leading-relaxed text-mist-2 transition-colors group-hover:text-mist">
                        {product.oneLiner}
                      </span>
                      <span className="t-label mt-4 inline-flex items-center gap-2 text-accent-soft">
                        Try the demo
                        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu — outside header so backdrop-filter does not trap fixed layout. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[72px] bottom-0 z-[60] flex flex-col lg:hidden ${
              isLight ? "bg-white" : "bg-ink"
            }`}
          >
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-28 pt-2">
              {nav.links.map((link, i) => {
                const hasMenu = "menu" in link && link.menu;
                const sectionOpen =
                  hasMenu && mobileSection === link.menu;

                if (hasMenu && link.menu === "services") {
                  return (
                    <div key={link.label} className="border-b border-line">
                      <button
                        type="button"
                        aria-expanded={sectionOpen}
                        onClick={() => toggleMobileSection("services")}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="t-label text-accent-soft">
                            0{i + 1}
                          </span>
                          <span className="text-[22px] font-medium tracking-tight text-white">
                            {link.label}
                          </span>
                        </span>
                        <Chevron
                          open={Boolean(sectionOpen)}
                          className="text-mist-2"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {sectionOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-9">
                              <Link
                                href="/services"
                                onClick={closeMobile}
                                data-analytics="mobile-nav-services-hub"
                                className="mb-3 flex min-h-11 items-center text-[14px] font-semibold text-accent-soft"
                              >
                                View all services
                              </Link>

                              <ul className="space-y-1">
                                {serviceCategories.map((service) => {
                                  const children = categoryChildren(service);
                                  const catOpen = mobileCategory === service.id;
                                  const hasChildren = children.length > 0;

                                  return (
                                    <li key={service.id}>
                                      {hasChildren ? (
                                        <>
                                          <div className="flex items-stretch gap-1">
                                            <Link
                                              href={getServicePath(service)}
                                              onClick={closeMobile}
                                              data-analytics={`mobile-nav-service-${service.id}`}
                                              className="flex min-h-11 flex-1 items-center text-[16px] font-semibold text-white"
                                            >
                                              {service.name}
                                            </Link>
                                            <button
                                              type="button"
                                              aria-expanded={catOpen}
                                              aria-label={`${catOpen ? "Hide" : "Show"} ${service.name} services`}
                                              onClick={() =>
                                                toggleMobileCategory(service.id)
                                              }
                                              className="flex min-h-11 min-w-11 items-center justify-center text-mist-2"
                                            >
                                              <Chevron open={catOpen} />
                                            </button>
                                          </div>
                                          <AnimatePresence initial={false}>
                                            {catOpen && (
                                              <motion.ul
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                  height: "auto",
                                                  opacity: 1,
                                                }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                  duration: 0.2,
                                                  ease: [0.16, 1, 0.3, 1],
                                                }}
                                                className="overflow-hidden pl-3"
                                              >
                                                {children.map((child) => (
                                                  <li key={child.id}>
                                                    <Link
                                                      href={child.href}
                                                      onClick={closeMobile}
                                                      data-analytics={`mobile-nav-service-${child.id}`}
                                                      className="flex min-h-11 items-center border-l border-line pl-3 text-[15px] font-medium text-white/80 transition-colors hover:text-white"
                                                    >
                                                      {child.name}
                                                    </Link>
                                                  </li>
                                                ))}
                                              </motion.ul>
                                            )}
                                          </AnimatePresence>
                                        </>
                                      ) : (
                                        <Link
                                          href={getServicePath(service)}
                                          onClick={closeMobile}
                                          data-analytics={`mobile-nav-service-${service.id}`}
                                          className="flex min-h-11 items-center text-[16px] font-semibold text-white"
                                        >
                                          {service.name}
                                        </Link>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (hasMenu && link.menu === "products") {
                  return (
                    <div key={link.label} className="border-b border-line">
                      <button
                        type="button"
                        aria-expanded={sectionOpen}
                        onClick={() => toggleMobileSection("products")}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="t-label text-accent-soft">
                            0{i + 1}
                          </span>
                          <span className="text-[22px] font-medium tracking-tight text-white">
                            {link.label}
                          </span>
                        </span>
                        <Chevron
                          open={Boolean(sectionOpen)}
                          className="text-mist-2"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {sectionOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-1 pb-4 pl-9">
                              {products.map((product) => (
                                <li key={product.id}>
                                  <Link
                                    href={product.href}
                                    onClick={closeMobile}
                                    data-analytics={`mobile-nav-product-${product.id}`}
                                    className="flex min-h-11 flex-col justify-center py-2"
                                  >
                                    <span className="text-[16px] font-semibold text-white">
                                      {product.label}
                                    </span>
                                    <span className="mt-1 text-[13px] leading-snug text-mist-2">
                                      {product.oneLiner}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMobile}
                    className="flex items-baseline gap-3 border-b border-line py-4"
                  >
                    <span className="t-label text-accent-soft">0{i + 1}</span>
                    <span className="text-[22px] font-medium tracking-tight text-white">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div
              className={`absolute inset-x-0 bottom-0 z-10 border-t border-line px-5 py-4 ${
                isLight ? "bg-white" : "bg-ink"
              }`}
            >
              <Link
                href={nav.cta.href}
                onClick={closeMobile}
                data-analytics="mobile-nav-start-project"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-base font-semibold text-white"
              >
                {nav.cta.label}
                <ArrowRight />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
