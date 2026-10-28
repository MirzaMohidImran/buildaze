import { buildContactHref } from "../contact/paths";
import type { ServicePageContent } from "./services";

/** Established Digital Marketing hub route in this repository. */
const HUB_PATH = "/services/digital-marketing";

const LEAF = {
  seo: `${HUB_PATH}/seo`,
  meta: `${HUB_PATH}/meta-ads`,
  google: `${HUB_PATH}/google-ads`,
  social: `${HUB_PATH}/social-media-marketing`,
  analytics: `${HUB_PATH}/web-analytics-data-tracking`,
  ecommerce: `${HUB_PATH}/ecommerce-growth-marketing`,
  email: `${HUB_PATH}/email-sms-marketing`,
  content: `${HUB_PATH}/content-strategy`,
} as const;

function enquiry(service: string, problem?: string) {
  return buildContactHref({
    service: "digital-marketing",
    capability: service,
    problem,
  });
}

/**
 * Digital Marketing hub body for `/services/digital-marketing`.
 * Copy direction from Buildaze Digital Marketing SEO research (11 Oct 2026).
 * Leaf commercial intents live on nested service routes (including Email/SMS and Content Strategy).
 */
export const digitalMarketingPageContent: ServicePageContent = {
  metaTitle: "Digital Marketing Services & Strategy | Buildaze",
  metaDescription:
    "SEO, paid social, Google Ads, organic social, analytics, ecommerce growth, email/SMS and content strategy — pick the channel problem to solve first.",
  eyebrow: "SEO, paid media, social and measurement",
  headline: "Digital marketing services for your next stage of growth.",
  subheadline:
    "Not sure whether you need more visibility, better campaigns, clearer reporting or stronger lifecycle messaging? Identify the right starting point, then connect the work to business goals.",
  ctaLabel: "Discuss Your Marketing Goals",
  secondaryCtaLabel: "Explore Marketing Services",

  problems: {
    eyebrow: "Starting points",
    headline: "Which marketing problem should we solve first?",
    intro: [
      "You do not need a finished channel plan to start. Match the problem below to a useful service, then discuss scope, budget and measurement together.",
    ],
    problems: [
      {
        id: "search-visibility",
        index: "01",
        name: "Relevant customers cannot find us in search",
        title: "Organic search work around pages, intent and enquiries.",
        description:
          "Start with website issues, search intent and content priorities — not a promise of rankings or a fixed traffic date.",
        serviceLabel: "Search Engine Optimization",
        enquiryHref: enquiry(
          "Search Engine Optimization",
          "Relevant customers cannot find us in search",
        ),
      },
      {
        id: "meta-paid",
        index: "02",
        name: "We want to test or improve paid Facebook/Instagram campaigns",
        title: "Meta Ads shaped around offer, audience and conversion goals.",
        description:
          "Plan and manage paid Facebook and Instagram campaigns. Organic posting belongs on the Social Media Marketing page.",
        serviceLabel: "Meta Ads",
        enquiryHref: enquiry(
          "Meta Ads",
          "Improve paid Facebook/Instagram campaigns",
        ),
      },
      {
        id: "google-paid",
        index: "03",
        name: "We want to reach buyers already searching for our offer",
        title: "Google Ads connected to landing pages and defined conversions.",
        description:
          "Review campaign structure, targeting and what happens after the click. Media spend and management fees are discussed separately.",
        serviceLabel: "Google Ads",
        enquiryHref: enquiry(
          "Google Ads",
          "Reach buyers already searching for our offer",
        ),
      },
      {
        id: "organic-social",
        index: "04",
        name: "Our organic social presence is inconsistent",
        title: "A clear organic content plan and publishing process.",
        description:
          "Build brand voice, themes and a manageable cadence. Paid Meta campaigns remain a separate engagement.",
        serviceLabel: "Social Media Marketing",
        enquiryHref: enquiry(
          "Social Media Marketing",
          "Organic social presence is inconsistent",
        ),
      },
      {
        id: "tracking-unclear",
        index: "05",
        name: "Our reports disagree or conversions are unclear",
        title: "Measurement and tracking you can trust enough to decide.",
        description:
          "Review tracking, conversion definitions and reporting before scaling spend or changing channels.",
        serviceLabel: "Web Analytics & Data Tracking",
        enquiryHref: enquiry(
          "Web Analytics & Data Tracking",
          "Reports disagree or conversions are unclear",
        ),
      },
      {
        id: "store-growth",
        index: "06",
        name: "Our store needs a coordinated acquisition and conversion plan",
        title: "Ecommerce growth priorities across channels — not another rebuild.",
        description:
          "Connect acquisition and store conversion in one prioritized plan. Shopify builds and migrations stay on the Shopify page.",
        serviceLabel: "Ecommerce Growth Marketing",
        enquiryHref: enquiry(
          "Ecommerce Growth Marketing",
          "Store needs coordinated acquisition and conversion plan",
        ),
      },
    ],
    closingTitle: "Not sure which channel fits?",
    closingBody:
      "Describe the business goal and current setup. We will suggest a practical starting point without forcing a multi-channel package.",
    ctaLabel: "Discuss your marketing goals",
    ctaHref: enquiry("Not Sure Yet", "Not sure which marketing channel fits"),
  },

  capabilities: {
    eyebrow: "Marketing services",
    headline: "Choose the digital marketing service that fits",
    intro: [
      "Focused engagements across search, paid, social, analytics, ecommerce growth, email/SMS and content. Start with one, or combine them when the work genuinely connects.",
    ],
    capabilities: [
      {
        id: "seo",
        index: "01",
        name: "Search Engine Optimization",
        title: "Help the right customers discover your business through organic search.",
        bestFor:
          "Businesses that need organic visibility improvements tied to useful pages and enquiries — not paid search management.",
        boundaries:
          "Paid Google campaigns belong on the Google Ads page. We do not guarantee rankings, traffic or a results date.",
        description:
          "Start with website issues, search intent and content priorities. SEO work covers audits, on-page improvements, technical fixes within agreed scope and measurement alongside relevant enquiries where tracking exists.",
        items: [
          "Audit and priorities",
          "Intent and page mapping",
          "On-page improvements",
          "Technical fixes in scope",
          "Content and measurement plan",
        ],
        cta: "Discuss SEO Priorities",
        href: enquiry("Search Engine Optimization"),
        detailHref: LEAF.seo,
        detailLabel: "Explore SEO services",
      },
      {
        id: "meta-ads",
        index: "02",
        name: "Meta Ads",
        title: "Reach potential customers on Facebook and Instagram.",
        bestFor:
          "Teams testing or improving paid Meta campaigns for leads or ecommerce purchases.",
        boundaries:
          "Organic posting is covered under Social Media Marketing. Management fees and media spend are separate. Creative production and Pixel/CAPI work are scoped when needed — not assumed.",
        description:
          "Campaigns shaped around your offer, audience and conversion goals, with clear reporting windows and creative learnings.",
        items: [
          "Account and campaign review",
          "Audience and offer strategy",
          "Creative testing plan",
          "Optimization and reporting",
        ],
        cta: "Discuss Meta Ads Goals",
        href: enquiry("Meta Ads"),
        detailHref: LEAF.meta,
        detailLabel: "Explore Meta Ads",
      },
      {
        id: "google-ads",
        index: "03",
        name: "Google Ads",
        title: "Connect with people actively searching for your products or services.",
        bestFor:
          "Lead generation and ecommerce advertisers who need clearer Google Ads structure and conversion measurement.",
        boundaries:
          "This service focuses on Google Ads — not every paid platform. Shopping, product feeds and Performance Max are discussed only when delivery capability is confirmed.",
        description:
          "Review campaign structure, targeting and what happens after the click. Budget and agency fees are discussed separately from media spend.",
        items: [
          "Account audit",
          "Keyword and intent research",
          "Ads and search-term review",
          "Budget and conversion review",
        ],
        cta: "Discuss Google Ads Account",
        href: enquiry("Google Ads"),
        detailHref: LEAF.google,
        detailLabel: "Explore Google Ads management",
      },
      {
        id: "social-media",
        index: "04",
        name: "Social Media Marketing",
        title: "Build a consistent organic presence with a clear content plan.",
        bestFor:
          "Brands that need organic planning, publishing support and community handling within an agreed process.",
        boundaries:
          "Paid Facebook and Instagram advertising is a separate Meta Ads engagement. Posting volume and response expectations are agreed per engagement.",
        description:
          "Brand voice, content themes, calendar and approval workflow, with reporting focused on useful learning — not vanity metrics alone.",
        items: [
          "Channel and content review",
          "Voice and themes",
          "Calendar and approvals",
          "Publishing and review",
        ],
        cta: "Discuss Social Media Plan",
        href: enquiry("Social Media Marketing"),
        detailHref: LEAF.social,
        detailLabel: "Explore social media management",
      },
      {
        id: "analytics",
        index: "05",
        name: "Web Analytics & Data Tracking",
        title: "Understand which actions and channels matter.",
        bestFor:
          "Teams whose reports disagree, miss conversions or cannot answer basic business questions.",
        boundaries:
          "Advanced items such as server-side GTM, BigQuery or offline CRM joins are only included when confirmed. We do not claim 100% accurate tracking or legal compliance as a product.",
        description:
          "Review tracking, conversion definitions and reporting before making bigger channel decisions. Deliverables include event inventory, measurement plan, QA evidence and handover notes.",
        items: [
          "Tracking audit",
          "KPI and event plan",
          "GA4 / GTM configuration",
          "QA and reporting definitions",
        ],
        cta: "Discuss Tracking Setup",
        href: enquiry("Web Analytics & Data Tracking"),
        detailHref: LEAF.analytics,
        detailLabel: "Explore analytics and tracking",
      },
      {
        id: "ecommerce-growth",
        index: "06",
        name: "Ecommerce Growth Marketing",
        title: "Connect acquisition and store conversion in one prioritized plan.",
        bestFor:
          "Stores that need coordinated marketing priorities — not a Shopify rebuild sold as growth.",
        boundaries:
          "Store design, migrations and custom builds belong on Shopify pages. Platform CRO and checkout diagnosis sit on Shopify specialists. Lifecycle flows sit on Email & SMS.",
        description:
          "Assess the store and channels, prioritize bottlenecks, align campaigns and landing pages, and report using agreed revenue and cost definitions.",
        items: [
          "Store and channel assessment",
          "Acquisition priorities",
          "Conversion recommendations",
          "Agreed testing and reporting",
        ],
        cta: "Discuss Ecommerce Growth Plan",
        href: enquiry("Ecommerce Growth Marketing"),
        detailHref: LEAF.ecommerce,
        detailLabel: "Explore ecommerce growth marketing",
      },
      {
        id: "email-sms",
        index: "07",
        name: "Email & SMS Marketing",
        title: "Lifecycle messaging for eligible customers — welcome to win-back.",
        bestFor:
          "Ecommerce teams missing recovery, post-purchase or retention flows, or running non-compliant recovery.",
        boundaries:
          "Anonymous cart visitors cannot all be emailed. SMS only when lawful and operationally ready. No guaranteed email revenue.",
        description:
          "Design and build core flows with consent, suppression and deliverability considered upfront — especially for Shopify stores.",
        items: [
          "Lifecycle audit",
          "Core flow design",
          "Campaigns and segmentation",
          "Measurement and deliverability",
        ],
        cta: "Discuss Email & SMS",
        href: enquiry("Email & SMS Marketing"),
        detailHref: LEAF.email,
        detailLabel: "Explore Email & SMS marketing",
      },
      {
        id: "content-strategy",
        index: "08",
        name: "Content Strategy",
        title: "Intent research, briefs and original commercial copy.",
        bestFor:
          "Teams whose service pages overlap, stay generic or lack research-backed rewrites.",
        boundaries:
          "No ranking guarantees. Case metrics are never invented. Technical SEO and Shopify catalogue SEO stay on their specialist pages.",
        description:
          "Map buyer intent to page owners, brief distinct jobs and write original commercial copy with natural internal links.",
        items: [
          "Intent research",
          "Content briefs",
          "Commercial page copy",
          "Maintenance priorities",
        ],
        cta: "Discuss Content Strategy",
        href: enquiry("Content Strategy"),
        detailHref: LEAF.content,
        detailLabel: "Explore content strategy",
      },
    ],
    closingTitle: "Need more than one service?",
    closingBody:
      "Start with the bottleneck. Channels can be combined when measurement, creative and landing pages genuinely share dependencies.",
    ctaLabel: "Discuss your marketing needs",
    ctaHref: enquiry("Not Sure Yet"),
  },

  deliveryProcess: {
    eyebrow: "How we work",
    headline: "From business goals to measured marketing work",
    intro: [
      "Understand the business → Review the current position → Prioritize the work → Implement and measure. Cadence and deliverables are confirmed before promises.",
    ],
    steps: [
      {
        id: "understand",
        index: "01",
        shortName: "Understand",
        name: "Understand the business",
        title: "Goals, offer, audience and what success looks like.",
        description:
          "We clarify who you serve, which enquiries or sales matter and what constraints shape channel choices.",
        itemsLabel: "What we review",
        items: [
          "Business goals and offers",
          "Audience and markets",
          "Current channels and assets",
          "Success signals you can review",
        ],
        outcome: "A shared definition of the problem to solve.",
      },
      {
        id: "review",
        index: "02",
        shortName: "Review",
        name: "Review the current position",
        title: "What is working, what is unclear and what is wasted.",
        description:
          "We look at existing campaigns, search presence, social activity and measurement gaps before recommending spend or build work.",
        itemsLabel: "What we examine",
        items: [
          "Channel performance signals",
          "Tracking and conversion definitions",
          "Landing-page and offer fit",
          "Obvious waste or blockers",
        ],
        outcome: "A realistic view of the starting point.",
      },
      {
        id: "prioritize",
        index: "03",
        shortName: "Prioritize",
        name: "Prioritize the work",
        title: "Deliverables, responsibilities and how progress is reviewed.",
        description:
          "Scope, milestones and ownership are written down so marketing work stays intentional — not an open-ended channel list.",
        itemsLabel: "What we agree",
        items: [
          "Priority channel or bottleneck",
          "Deliverables and boundaries",
          "Dependencies (creative, site, tracking)",
          "Reporting cadence",
        ],
        outcome: "A written plan you can approve before execution.",
      },
      {
        id: "implement",
        index: "04",
        shortName: "Implement",
        name: "Implement and measure",
        title: "Agreed work with honest reporting.",
        description:
          "We implement the scoped marketing work and review evidence against the goals you defined — without inventing ROAS or ranking guarantees.",
        itemsLabel: "What happens",
        items: [
          "Agreed implementation",
          "Defined review points",
          "Measurement against agreed metrics",
          "Next-step recommendations",
        ],
        outcome: "Progress you can inspect against the written scope.",
      },
    ],
    closingTitle: "Ready to choose a starting point?",
    closingBody:
      "Share the goal and the channel you are considering. We will confirm fit and what needs to be true for useful measurement.",
    ctaLabel: "Discuss your marketing goals",
    ctaHref: "/contact?service=digital-marketing",
  },

  why: {
    eyebrow: "Reporting principles",
    headline: "Measurement that supports decisions",
    intro: [
      "Useful marketing reporting explains definitions, windows and limitations — not vanity charts that cannot be acted on.",
    ],
    differentiators: [
      {
        id: "define-actions",
        index: "01",
        name: "Defined actions",
        summary: "Agree what counts before scaling spend.",
        title: "Define the actions that matter.",
        description:
          "Enquiries, qualified leads, purchases or other outcomes are agreed up front so campaigns and SEO work are not judged on clicks alone.",
        panelStatement: "Clicks are diagnostic. Business actions are the goal.",
        panelNote: "Definitions before dashboards.",
      },
      {
        id: "separate-fees",
        index: "02",
        name: "Clear commercial lines",
        summary: "Fees, media spend and build work stay distinct.",
        title: "Management fees and media spend stay separate.",
        description:
          "Proposals should distinguish agency work, platform media spend and any creative or development dependencies.",
        panelStatement: "Do not assume media budget is included in management.",
        panelNote: "Honest commercial scope.",
      },
      {
        id: "channel-boundaries",
        index: "03",
        name: "Clear channel ownership",
        summary: "Paid, organic and analytics stay distinct.",
        title: "Each service owns a distinct engagement.",
        description:
          "Meta owns paid Facebook/Instagram; Social owns organic; Google Ads owns Google campaigns; Analytics owns tracking implementation; Ecommerce Growth owns store-wide priorities.",
        panelStatement: "Shared vocabulary is fine. Duplicate primary intent is not.",
        panelNote: "Hub helps you choose; leaves go deep.",
      },
      {
        id: "honest-limits",
        index: "04",
        name: "Honest limits",
        summary: "No ranking or ROAS guarantees.",
        title: "No fabricated certainty.",
        description:
          "Competition, creative, offer, seasonality and data limits affect outcomes. We report what the evidence shows within agreed windows.",
        panelStatement: "Progress is reviewed — not promised as a fixed result date.",
        panelNote: "Evidence over slogans.",
      },
    ],
    closingTitle: "Ready to describe the goal?",
    closingBody:
      "Tell us what needs to improve. We will suggest a practical marketing starting point.",
    pillars: ["Goals", "Channels", "Scope", "Measurement"],
    closingNote: "One clear engagement at a time.",
    ctaLabel: "Discuss Your Marketing Goals",
    ctaHref: "/contact?service=digital-marketing",
  },

  overviewTitle: "What digital marketing includes",
  overview: [
    "Digital marketing covers SEO, paid media, organic social, analytics and ecommerce growth planning.",
    "Projects often start with one channel or a measurement problem. Shopify builds and product development remain separate specialist services.",
  ],
  solutionsTitle: "Marketing services",
  solutions: [
    "Search Engine Optimization",
    "Meta Ads",
    "Google Ads",
    "Social Media Marketing",
    "Web Analytics & Data Tracking",
    "Ecommerce Growth Marketing",
  ],
  deliverables: [
    "Scoped channel plan and agreed deliverables",
    "Implementation of agreed marketing work",
    "Measurement definitions and reporting cadence",
    "Recommendations for next priorities",
  ],
  included: [
    "Goal and audience clarification",
    "Channel fit discussion tied to budget reality",
    "Written scope before execution",
    "Honest reporting with stated limitations",
  ],
  stackTags: [
    "Google Ads",
    "Meta Ads",
    "GA4",
    "Search Console",
    "Tag Manager",
  ],
  process: [
    {
      index: "01",
      name: "Understand",
      duration: "Scoped",
      description:
        "Clarify business goals, current channels and what you need to learn from the data.",
    },
    {
      index: "02",
      name: "Review",
      duration: "Scoped",
      description:
        "Examine the current position across visibility, campaigns, social and measurement.",
    },
    {
      index: "03",
      name: "Prioritize",
      duration: "Scoped",
      description:
        "Agree the starting channel or bottleneck, deliverables and reporting cadence.",
    },
    {
      index: "04",
      name: "Implement and measure",
      duration: "Scoped",
      description:
        "Execute agreed work and review evidence against the goals you defined.",
    },
  ],
  relatedWorkIds: [],
  faqEyebrow: "Marketing FAQs",
  faqHeadline: "Questions before choosing a marketing service",
  faqIntro: [
    "Short answers about channel choice, pricing discussions, guarantees and how marketing relates to Shopify or Development.",
  ],
  faqs: [
    {
      question: "Which marketing channel is right for my business?",
      answer:
        "It depends on whether you need organic discovery, paid demand capture, organic social consistency, clearer measurement or a store-wide growth plan. Use the problem guide above, or describe the goal and we will suggest a starting point.",
    },
    {
      question: "How does digital marketing agency pricing work?",
      answer:
        "Scope, channel complexity, creative needs and measurement work affect cost. Media spend on Google or Meta is separate from management fees. We discuss commercial terms after requirements are clear — we do not publish a one-size package price here.",
    },
    {
      question: "Do you guarantee rankings, ROAS or lead counts?",
      answer:
        "No. Competition, offer, creative, seasonality and data limits affect outcomes. An engagement should define the work, priorities and how progress will be reviewed.",
    },
    {
      question: "Is this the same as Shopify development?",
      answer:
        "No. Digital marketing focuses on acquisition, campaigns, organic presence and measurement. Shopify design, migrations and custom builds are covered on the Shopify service page.",
    },
    {
      question: "Can marketing work with Development?",
      answer:
        "Yes. Tracking, landing pages or site changes sometimes need development support. We explain that combined scope when it applies.",
    },
  ],
  faqClosingTitle: "Still choosing a starting point?",
  faqClosingBody:
    "Include the goal in the enquiry form and we will answer in the context of your business.",
  faqCtaLabel: "Discuss your marketing goals",
  faqCtaHref: "/contact?service=digital-marketing",
};

export const DIGITAL_MARKETING_LEAF_PATHS = LEAF;
