/** Official LinkedIn properties — company page + ecommerce showcase. */
export const linkedIn = {
  /** Main Buildaze company page (pk.linkedin.com/company/buildaze). */
  company: "https://www.linkedin.com/company/buildaze",
  /** Showcase for Shopify / ecommerce growth — pairs with /shopify-growth-agency. */
  ecommerceGrowth: "https://www.linkedin.com/showcase/buildaze-ecommerce-growth/",
} as const;

export const site = {
  name: "Buildaze",
  tagline: "AI-Native Software Development Studio",
  description:
    "Buildaze is an AI-native software development studio. Custom AI products, SaaS platforms, web applications and ecommerce experiences — designed, engineered and shipped by one senior team. Fixed-scope sprints, weekly demos, 100% code ownership.",
  url: "https://www.buildaze.com",
  email: "team@buildaze.com",
  socials: [
    { label: "Twitter (X)", href: "https://x.com/buildaze" },
    { label: "Dribbble", href: "https://dribbble.com/buildaze" },
    { label: "LinkedIn", href: linkedIn.company },
  ],
} as const;

export const nav = {
  links: [
    { label: "Services", href: "/services", megaMenu: true },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/#team" },
  ],
  cta: { label: "Start a Project", href: "/#contact" },
} as const;

/** Verified numbers from the existing Buildaze site. Do not add unverified metrics. */
export const stats = [
  { value: 50, suffix: "+", label: "Projects shipped" },
  { value: 99, suffix: "%", label: "On-time delivery" },
  { value: 95, suffix: "%", label: "Uptime for key flows" },
] as const;

export const heroProof = [
  "50+ projects shipped",
  "Weekly live demos",
  "100% code ownership",
] as const;
