/** Official LinkedIn properties — company page + ecommerce showcase. */
export const linkedIn = {
  /** Main Buildaze company page (pk.linkedin.com/company/buildaze). */
  company: "https://www.linkedin.com/company/buildaze",
  /** Showcase for Shopify / ecommerce growth — pairs with /shopify-growth-agency. */
  ecommerceGrowth: "https://www.linkedin.com/showcase/buildaze-ecommerce-growth/",
} as const;

export const site = {
  name: "Buildaze",
  tagline: "Design, Development & Digital Growth Agency",
  description:
    "Buildaze is a digital agency bringing design, development, AI, digital marketing and Shopify services together to help businesses launch, improve and grow — with clear scope, practical handover and optional ongoing support.",
  url: "https://www.buildaze.com",
  email: "team@buildaze.com",
  socials: [
    { label: "LinkedIn", href: linkedIn.company },
    { label: "Instagram", href: "https://www.instagram.com/buildaze" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Buildaze/61590512365408/",
    },
    { label: "Clutch", href: "https://clutch.co/profile/buildaze" },
  ],
} as const;

export const products = [
  {
    id: "voice-agent",
    index: "01",
    label: "Voice Agent",
    href: "/voice-agent",
    oneLiner:
      "Custom AI voice agent for business — try the live browser demo, then scope a Buildaze build.",
  },
] as const;

export const nav = {
  links: [
    { label: "Services", href: "/services", menu: "services" as const },
    { label: "Our Products", href: "/voice-agent", menu: "products" as const },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Start a Project", href: "/contact" },
} as const;
