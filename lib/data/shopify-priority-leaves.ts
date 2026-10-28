import { buildContactHref } from "../contact/paths";
import type { Service, ServicePageContent } from "./services";

const HUB = "/shopify-growth-agency";

function enquiry(capability: string, problem?: string) {
  return buildContactHref({ service: "shopify", capability, problem });
}

function base(
  partial: Omit<ServicePageContent, "relatedWorkIds"> & {
    relatedWorkIds?: string[];
  },
): ServicePageContent {
  return { ...partial, relatedWorkIds: partial.relatedWorkIds ?? [] };
}

const croPath = `${HUB}/conversion-rate-optimization`;
const checkoutPath = `${HUB}/checkout-optimization`;
const seoPath = `${HUB}/seo`;

/**
 * Phase 5 Batch A — P1 Shopify commercial pages (28 Oct 2026 research).
 * Distinct buyer intents from Store Design / Performance / general SEO.
 */
export const shopifyPriorityLeaves: Service[] = [
  {
    id: "shopify-cro",
    slug: "conversion-rate-optimization",
    path: croPath,
    role: "detail",
    index: "07",
    name: "Shopify Conversion Rate Optimization",
    shortName: "Shopify CRO",
    oneLiner:
      "Diagnose why Shopify traffic does not purchase — then prioritize storefront fixes you can ship.",
    description:
      "Shopify CRO and conversion audits covering funnel diagnosis, product and cart friction, and an implementation backlog — without promising a specific conversion lift.",
    capabilities: [
      "Funnel diagnosis",
      "UX and offer review",
      "Prioritized hypotheses",
      "Implementation backlog",
      "Suitable experimentation",
    ],
    flow: ["Diagnose", "Prioritize", "Implement", "Review"],
    cta: "Discuss Shopify CRO",
    relatedServiceIds: [
      "shopify",
      "shopify-checkout",
      "shopify-store-design",
      "shopify-performance",
      "shopify-seo",
      "dm-analytics",
      "dm-email-sms",
    ],
    page: base({
      metaTitle: "Shopify CRO & Conversion Optimization | Buildaze",
      metaDescription:
        "Diagnose why traffic does not purchase — funnel research, UX friction and an implementation backlog. No guaranteed lift.",
      eyebrow: "Shopify conversion",
      headline: "Shopify CRO that starts with the real funnel problem.",
      subheadline:
        "Traffic, product pages, cart behaviour and checkout can each look like “low conversion.” We establish what is failing before prescribing a redesign, app or discount — and we do not promise a specific lift.",
      ctaLabel: "Discuss Shopify CRO",
      secondaryCtaLabel: "Back to Shopify services",
      problems: {
        eyebrow: "Conversion starting points",
        headline: "When visitors browse but do not buy",
        intro: [
          "Use this engagement when the storefront receives traffic that does not turn into product engagement, carts or paid orders — and you need a prioritized plan, not another generic theme tweak.",
        ],
        problems: [
          {
            id: "traffic-no-buy",
            index: "01",
            name: "Sessions arrive but few product views or purchases",
            title: "Match landing message, navigation and device paths first.",
            description:
              "Wrong intent, weak message match or slow discovery can look like a conversion problem when the issue starts earlier in the journey.",
            enquiryHref: enquiry(
              "Shopify Conversion Rate Optimization",
              "Traffic without purchases",
            ),
          },
          {
            id: "pdp-friction",
            index: "02",
            name: "Product views rarely become add-to-cart",
            title: "Clarify offer, variants, delivery and proof on the PDP.",
            description:
              "Imagery, sizing, stock, shipping visibility and trust signals are reviewed before assuming the theme is the only issue.",
            enquiryHref: enquiry(
              "Shopify Conversion Rate Optimization",
              "Product page conversion friction",
            ),
          },
          {
            id: "cart-exit",
            index: "03",
            name: "Shoppers add to cart then leave",
            title: "Separate cart friction from checkout and payment failure.",
            description:
              "Unexpected costs, unclear totals and mobile cart behaviour need a different response than payment-stage errors.",
            enquiryHref: enquiry(
              "Shopify Conversion Rate Optimization",
              "Cart abandonment before checkout",
            ),
          },
          {
            id: "no-evidence",
            index: "04",
            name: "The team changes pages without reliable evidence",
            title: "Hypotheses with traffic and sample realism.",
            description:
              "A/B testing is only suitable when volume and measurement support it. Otherwise we use qualitative research, technical fixes and clearly labelled observational comparisons.",
            enquiryHref: enquiry(
              "Shopify Conversion Rate Optimization",
              "Testing without reliable evidence",
            ),
          },
        ],
        closingTitle: "Checkout or payment failing specifically?",
        closingBody:
          "Cart-to-checkout and payment-stage diagnosis sits on Shopify Checkout Optimization. Lifecycle recovery messages sit on Email & SMS Marketing when those flows are in scope.",
        ctaLabel: "Discuss conversion work",
        ctaHref: enquiry("Shopify Conversion Rate Optimization"),
      },
      overviewTitle: "What Shopify CRO includes",
      overview: [
        "We diagnose the purchase journey with consistent session or shopper cohorts where data allows: product engagement, add-to-cart, checkout start and paid orders. Event counts are not substituted for unique sessions.",
        "Deliverables centre on a funnel diagnosis, UX and offer review, prioritized hypotheses and an implementation backlog your team — or Buildaze — can ship. Store Design implements larger theme work; Performance owns speed bottlenecks; Checkout Optimization owns cart-to-checkout and payment-stage detail.",
        "Experimentation is scoped only when baseline conversion, traffic and a stopping rule make a fair test possible. We do not describe a before-and-after comparison as a causal A/B result when it is not.",
      ],
      solutionsTitle: "CRO work we prioritize",
      solutions: [
        "Funnel and device-segment diagnosis",
        "Landing, collection and product-page friction review",
        "Cart behaviour and total-cost clarity checks",
        "Hypothesis backlog with effort and risk notes",
        "Implementation of agreed storefront changes",
        "Experiment design when traffic supports it",
      ],
      deliverables: [
        "Documented funnel baseline and definitions",
        "Prioritized conversion hypotheses",
        "Implementation backlog with owners",
        "Agreed storefront changes in scope",
        "Review of what changed and what remains open",
      ],
      included: [
        "Discovery against current analytics and storefront",
        "Scoped research and recommendations",
        "Implementation within the written engagement",
        "Handover notes for ongoing backlog items",
      ],
      stackTags: [
        "Shopify",
        "CRO",
        "UX research",
        "GA4 / Shopify analytics",
        "Theme improvements",
      ],
      process: [
        {
          index: "01",
          name: "Diagnose",
          duration: "Scoped",
          description:
            "Reconcile available analytics with the live journey; name the stage that fails first.",
        },
        {
          index: "02",
          name: "Prioritize",
          duration: "Scoped",
          description:
            "Rank hypotheses by evidence, effort and risk — including when not to A/B test.",
        },
        {
          index: "03",
          name: "Implement",
          duration: "Scoped",
          description:
            "Ship agreed storefront, content or configuration changes; hand larger builds to Store Design.",
        },
        {
          index: "04",
          name: "Review",
          duration: "Scoped",
          description:
            "Compare the same definitions before and after; separate observation from causal claims.",
        },
      ],
      relatedWorkIds: ["shopify-performance", "catalog-intelligence"],
      faqs: [
        {
          question: "Do you guarantee a conversion rate increase?",
          answer:
            "No. Conversion depends on traffic quality, offer, price, shipping, trust and technical reliability. We prioritize evidence-led changes and measure honestly — we do not sell a fixed lift.",
        },
        {
          question: "Is this the same as Shopify Performance?",
          answer:
            "No. Performance work targets speed and front-end bottlenecks. CRO diagnoses buying friction across the journey. They often link, but they own different primary problems.",
        },
        {
          question: "Will you run A/B tests on every store?",
          answer:
            "Only when traffic, baseline conversion and a minimum detectable effect make a fair test realistic. Otherwise we use research, technical fixes and clearly labelled observational comparisons.",
        },
        {
          question: "Where does checkout recovery sit?",
          answer:
            "Eligible recovery messaging is planned with Checkout Optimization and Email & SMS Marketing. Anonymous cart visitors cannot all be emailed; consent and suppression rules apply.",
        },
      ],
      faqEyebrow: "Shopify CRO FAQs",
      faqHeadline: "Practical questions before a conversion engagement",
      faqCtaLabel: "Discuss Shopify CRO",
      faqCtaHref: enquiry("Shopify Conversion Rate Optimization"),
    }),
  },
  {
    id: "shopify-checkout",
    slug: "checkout-optimization",
    path: checkoutPath,
    role: "detail",
    index: "08",
    name: "Shopify Checkout Optimization",
    shortName: "Checkout",
    oneLiner:
      "Diagnose cart-to-checkout and payment-stage drop-off with plan-aware Shopify fixes.",
    description:
      "Shopify checkout optimization covering cart clarity, checkout progression, payment and shipping checks, and recovery handoff — respecting Shopify plan limits.",
    capabilities: [
      "Cart-to-checkout diagnosis",
      "Payment and shipping checks",
      "Plan-aware checkout fixes",
      "Recovery handoff",
      "Mobile checkout QA",
    ],
    flow: ["Inspect", "Fix", "Verify", "Recover"],
    cta: "Discuss checkout issues",
    relatedServiceIds: [
      "shopify",
      "shopify-cro",
      "shopify-store-design",
      "shopify-apps",
      "dm-email-sms",
      "dm-analytics",
    ],
    page: base({
      metaTitle: "Shopify Checkout Optimization | Buildaze",
      metaDescription:
        "Cart-to-checkout friction, payment and shipping checks, and recovery handoff — plan-aware, including Shopify Plus limits.",
      eyebrow: "Cart and checkout",
      headline: "Fix checkout drop-off without ignoring plan limits.",
      subheadline:
        "Cart exits, checkout starts without payment and failed payments are different problems. We inspect the journey your plan actually supports — including Shopify Plus constraints on checkout UI extensions — before promising custom checkout UI.",
      ctaLabel: "Discuss Checkout Issues",
      secondaryCtaLabel: "Back to Shopify services",
      problems: {
        eyebrow: "Checkout starting points",
        headline: "When carts do not become paid orders",
        intro: [
          "Use this page when the primary failure is after add-to-cart: unclear totals, checkout starts that stall, payment errors or recovery for identifiable shoppers.",
        ],
        problems: [
          {
            id: "cart-clarity",
            index: "01",
            name: "Shoppers leave the cart before checkout",
            title: "Clarify totals, shipping and the path into checkout.",
            description:
              "Unexpected costs, weak CTAs and mobile cart friction are reviewed before assuming checkout itself is broken.",
            enquiryHref: enquiry(
              "Shopify Checkout Optimization",
              "Cart exit before checkout",
            ),
          },
          {
            id: "checkout-stall",
            index: "02",
            name: "Checkout starts but payment never completes",
            title: "Separate information, shipping and payment failures.",
            description:
              "Address, rate, market eligibility and payment-provider errors need log-backed diagnosis — not another discount code as the first fix.",
            enquiryHref: enquiry(
              "Shopify Checkout Optimization",
              "Checkout starts without payment",
            ),
          },
          {
            id: "plus-custom",
            index: "03",
            name: "You need checkout UI changes on Plus",
            title: "Scope extensions only where the plan allows.",
            description:
              "Checkout UI extensions on the information, shipping and payment steps require Shopify Plus. Basic checkout settings and styling are a different capability.",
            enquiryHref: enquiry(
              "Shopify Checkout Optimization",
              "Shopify Plus checkout customization",
            ),
          },
          {
            id: "recovery",
            index: "04",
            name: "Known shoppers abandon before purchase",
            title: "Eligible recovery with suppression after purchase.",
            description:
              "Recovery needs an identifiable recipient, consent and purchase suppression. We hand lifecycle design to Email & SMS when flows are part of the engagement.",
            enquiryHref: enquiry(
              "Shopify Checkout Optimization",
              "Abandoned checkout recovery",
            ),
          },
        ],
        closingTitle: "Broader funnel diagnosis needed?",
        closingBody:
          "Product-page and journey-wide conversion research sits on Shopify CRO. Storefront redesign sits on Store Design & Development.",
        ctaLabel: "Discuss checkout",
        ctaHref: enquiry("Shopify Checkout Optimization"),
      },
      overviewTitle: "What checkout optimization covers",
      overview: [
        "We distinguish cart-to-checkout progression from payment-stage failure and from eligible abandoned-checkout recovery. Metrics use matched cohorts where reporting allows.",
        "Shopify plan limits matter. Official Shopify documentation restricts checkout UI extensions on the information, shipping and payment steps to Shopify Plus. We confirm plan, extension targets and market settings before quoting checkout UI work.",
        "Tax, legal policy wording and payment-provider decisions remain merchant-led. We help surface friction and supported configuration — we do not replace legal or tax advice.",
      ],
      solutionsTitle: "Checkout work we deliver",
      solutions: [
        "Cart and total-cost clarity review",
        "Mobile cart and checkout path QA",
        "Payment and shipping error diagnosis",
        "Market and payment eligibility checks",
        "Plan-aware checkout configuration or Plus extensions",
        "Recovery requirements handoff to Email & SMS",
      ],
      deliverables: [
        "Checkout diagnosis notes with stage definitions",
        "Prioritized fix list with plan constraints",
        "Implemented configuration or extension work in scope",
        "QA checklist for critical purchase paths",
        "Recovery eligibility notes when requested",
      ],
      included: [
        "Review of live cart and checkout settings",
        "Scoped remediation within plan limits",
        "Verification on agreed devices and markets",
        "Handover of open merchant-led decisions",
      ],
      stackTags: [
        "Shopify Checkout",
        "Shopify Plus (when required)",
        "Payments",
        "Shipping rates",
        "Checkout UI extensions",
      ],
      process: [
        {
          index: "01",
          name: "Inspect",
          duration: "Scoped",
          description:
            "Reproduce cart and checkout paths; review errors, rates and plan features.",
        },
        {
          index: "02",
          name: "Fix",
          duration: "Scoped",
          description:
            "Apply supported settings, theme or Plus extension changes agreed in scope.",
        },
        {
          index: "03",
          name: "Verify",
          duration: "Scoped",
          description:
            "Retest critical markets, payment methods and mobile paths.",
        },
        {
          index: "04",
          name: "Recover",
          duration: "Scoped",
          description:
            "Define eligible recovery requirements; implement flows with Email & SMS when included.",
        },
      ],
      relatedWorkIds: ["shopify-performance"],
      faqs: [
        {
          question: "Can you customize checkout on every Shopify plan?",
          answer:
            "No. Checkout UI extensions for the information, shipping and payment steps are available on Shopify Plus. Other plans rely on supported checkout settings, apps and theme-side cart improvements. We confirm eligibility before quoting.",
        },
        {
          question: "Can you email every abandoned cart?",
          answer:
            "No. Recovery needs an identifiable and eligible recipient plus consent and suppression after purchase. Anonymous visitors cannot all be emailed.",
        },
        {
          question: "Is checkout optimization the same as CRO?",
          answer:
            "Checkout work is a specialist slice of conversion. Shopify CRO covers wider funnel diagnosis including product pages and experimentation fitness. Use both when the problems span stages.",
        },
      ],
      faqEyebrow: "Checkout FAQs",
      faqHeadline: "Plan limits and recovery — answered plainly",
      faqCtaLabel: "Discuss Checkout Issues",
      faqCtaHref: enquiry("Shopify Checkout Optimization"),
    }),
  },
  {
    id: "shopify-seo",
    slug: "seo",
    path: seoPath,
    role: "detail",
    index: "09",
    name: "Shopify SEO",
    shortName: "Shopify SEO",
    oneLiner:
      "Organic discovery for Shopify products and collections — technical constraints included.",
    description:
      "Shopify SEO for product and collection search intent, technical store constraints, schema and internal links — without ranking guarantees.",
    capabilities: [
      "Shopify technical SEO",
      "Product and collection intent",
      "Schema and internal links",
      "Organic discovery measurement",
    ],
    flow: ["Audit", "Map", "Improve", "Measure"],
    cta: "Discuss Shopify SEO",
    relatedServiceIds: [
      "shopify",
      "shopify-store-design",
      "shopify-cro",
      "shopify-migrations",
      "dm-seo",
      "dm-content-strategy",
      "dm-analytics",
    ],
    page: base({
      metaTitle: "Shopify SEO Services | Buildaze",
      metaDescription:
        "Technical store constraints, product and collection intent, schema and internal links — measured as organic discovery, not vanity ranks.",
      eyebrow: "Shopify organic search",
      headline: "Shopify SEO for products and collections that can rank.",
      subheadline:
        "Store SEO is not a generic agency SEO checklist. We map commercial intent to collections and products, respect Shopify architecture and measure discovery without promising a ranking date.",
      ctaLabel: "Discuss Shopify SEO",
      secondaryCtaLabel: "Back to Shopify services",
      problems: {
        eyebrow: "Shopify SEO starting points",
        headline: "When the catalogue does not earn qualified organic demand",
        intro: [
          "Use this service when Shopify products, collections or the Online Store need organic search work. Sitewide agency SEO for non-Shopify properties stays on the Digital Marketing SEO page.",
        ],
        problems: [
          {
            id: "thin-collections",
            index: "01",
            name: "Collections are thin or compete with each other",
            title: "Intent mapping before more product copy.",
            description:
              "Prioritize collection architecture and unique useful content over mass-generated descriptions.",
            enquiryHref: enquiry("Shopify SEO", "Thin or competing collections"),
          },
          {
            id: "index-bloat",
            index: "02",
            name: "Filtered or duplicate URLs clutter discovery",
            title: "Technical review of crawl and index signals.",
            description:
              "Shopify facets, tags and app-generated paths need deliberate indexation decisions.",
            enquiryHref: enquiry("Shopify SEO", "Indexation and duplicate URLs"),
          },
          {
            id: "product-copy",
            index: "03",
            name: "Products do not answer buying questions in search",
            title: "Useful product information — not keyword stuffing.",
            description:
              "Titles, descriptions and structured data should help shoppers and search systems understand the offer.",
            enquiryHref: enquiry("Shopify SEO", "Product page search relevance"),
          },
          {
            id: "after-migration",
            index: "04",
            name: "Organic visibility slipped after a replatform",
            title: "Redirects, metadata and landing intent after cutover.",
            description:
              "Migrations reduce avoidable risk; rankings can still fluctuate. Post-launch SEO review pairs with the Migrations page.",
            enquiryHref: enquiry("Shopify SEO", "SEO after Shopify migration"),
          },
        ],
        closingTitle: "Need SEO outside Shopify?",
        closingBody:
          "General website and multi-property SEO lives under Digital Marketing → Search Engine Optimization. Content briefs and commercial copy can be scoped under Content Strategy.",
        ctaLabel: "Discuss Shopify SEO",
        ctaHref: enquiry("Shopify SEO"),
      },
      overviewTitle: "What Shopify SEO includes",
      overview: [
        "We audit technical store constraints, map commercial queries to products and collections, improve on-page clarity and internal links, and set measurement around organic landing pages and relevant revenue or enquiry signals where tracking exists.",
        "Ranking guarantees, fixed keyword volumes and “#1 in 30 days” claims are not part of this offer. International Markets work is a separate specialist when localization is the primary problem.",
        "Theme and information-architecture changes that require design/development are coordinated with Store Design. Conversion friction after discovery is handed to Shopify CRO when needed.",
      ],
      solutionsTitle: "Shopify SEO focus areas",
      solutions: [
        "Technical and indexation review for Online Store",
        "Collection and product intent mapping",
        "On-page improvements for priority templates",
        "Internal linking and navigation support",
        "Structured data aligned to visible content",
        "Organic performance review with honest definitions",
      ],
      deliverables: [
        "Shopify SEO audit with prioritized actions",
        "Intent-to-URL map for agreed catalogue areas",
        "Implemented on-page and technical fixes in scope",
        "Measurement notes for organic discovery",
      ],
      included: [
        "Storefront and Search Console review where access is provided",
        "Scoped implementation or recommendations-only (confirmed upfront)",
        "Handover of remaining content and app decisions",
      ],
      stackTags: [
        "Shopify SEO",
        "Collections",
        "Product pages",
        "Schema",
        "Search Console",
      ],
      process: [
        {
          index: "01",
          name: "Audit",
          duration: "Scoped",
          description:
            "Review crawl/index signals, templates and major organic landing pages.",
        },
        {
          index: "02",
          name: "Map",
          duration: "Scoped",
          description:
            "Assign commercial intent to collections and products; flag cannibalization.",
        },
        {
          index: "03",
          name: "Improve",
          duration: "Scoped",
          description:
            "Implement agreed technical and on-page changes; brief content where needed.",
        },
        {
          index: "04",
          name: "Measure",
          duration: "Scoped",
          description:
            "Track organic landing pages and business outcomes — not vanity ranks alone.",
        },
      ],
      relatedWorkIds: ["shopify-performance", "catalog-intelligence"],
      faqs: [
        {
          question: "How is this different from your SEO services page?",
          answer:
            "The Digital Marketing SEO page covers general websites and multi-channel organic strategy. This page owns Shopify Online Store constraints, catalogue architecture and product/collection intent.",
        },
        {
          question: "Do you guarantee first-page rankings?",
          answer:
            "No. We improve the store’s ability to compete for relevant queries and measure discovery and business outcomes. Rankings vary by market, device and competition.",
        },
        {
          question: "Can thin product descriptions be mass-generated?",
          answer:
            "We do not treat scaled thin or duplicated copy as a sound strategy. Useful product information and clear collection pages come first.",
        },
      ],
      faqEyebrow: "Shopify SEO FAQs",
      faqHeadline: "Organic discovery without ranking theatre",
      faqCtaLabel: "Discuss Shopify SEO",
      faqCtaHref: enquiry("Shopify SEO"),
    }),
  },
];
