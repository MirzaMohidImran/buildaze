import type { Service } from "./services";
import { designPageContent } from "./design-page";
import { developmentPageContent } from "./development-page";
import { digitalMarketingPageContent } from "./digital-marketing-page";

/**
 * New primary category overviews (Design, Development, Digital Marketing).
 * AI and Shopify remain in services.ts and are renamed there.
 * Design / Development / Digital Marketing overview bodies live in dedicated modules.
 */

export const categoryOverviews: Service[] = [
  {
    id: "design",
    slug: "design",
    role: "category",
    index: "01",
    name: "Design",
    shortName: "Design",
    oneLiner:
      "Visual identity, graphics and experience design that help your business communicate clearly.",
    description:
      "Branding, graphic design, illustration and interface design that help businesses communicate clearly and create usable digital experiences.",
    capabilities: [
      "Graphic Design",
      "Illustration",
      "App Design",
      "UI/UX Design",
      "Branding",
    ],
    flow: ["Discover", "Concept", "Design", "Handover"],
    flowLabel: "Brief · Scope · Review · Handoff",
    cta: "Explore Design Services",
    relatedServiceIds: [
      "design-graphic",
      "design-illustration",
      "design-app",
      "design-uiux",
      "design-branding",
    ],
    page: designPageContent,
  },
  {
    id: "development",
    slug: "development",
    role: "category",
    index: "02",
    name: "Development",
    shortName: "Dev",
    oneLiner:
      "Websites, apps and business software built around how your customers and team work.",
    description:
      "Websites, applications, ecommerce platforms and business systems built around the way your customers and team work.",
    capabilities: [
      "Web Development",
      "App Development",
      "Ecommerce Development",
      "Software Development",
      "Dashboards",
      "Web Applications",
      "Management Systems",
    ],
    flow: ["Scope", "Build", "Review", "Launch"],
    flowLabel: "Clear scope · Progress reviews · Practical handover",
    cta: "Explore Development Services",
    relatedServiceIds: ["web", "saas", "ecommerce", "shopify"],
    page: developmentPageContent,
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    role: "category",
    index: "04",
    name: "Digital Marketing",
    shortName: "Marketing",
    oneLiner:
      "Search, paid advertising and measurement to reach relevant customers and understand what drives enquiries.",
    description:
      "SEO, paid advertising, social media and measurement that help businesses reach relevant audiences and understand performance.",
    capabilities: [
      "Search Engine Optimization",
      "Meta Ads",
      "Google Ads",
      "Social Media Marketing",
      "Web Analytics & Data Tracking",
      "Ecommerce Growth Marketing",
    ],
    flow: ["Goals", "Channels", "Campaigns", "Measure"],
    flowLabel: "Choose a channel · Scope clearly · Measure honestly",
    cta: "Explore Digital Marketing",
    relatedServiceIds: [
      "dm-seo",
      "dm-meta-ads",
      "dm-google-ads",
      "dm-social",
      "dm-analytics",
      "dm-ecommerce-growth",
    ],
    page: digitalMarketingPageContent,
  },
];
