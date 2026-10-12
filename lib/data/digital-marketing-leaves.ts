import { buildContactHref } from "../contact/paths";
import type { Service, ServicePageContent } from "./services";

const HUB = "/services/digital-marketing";

function leafEnquiry(_path: string, service: string, problem?: string) {
  return buildContactHref({
    service: "digital-marketing",
    capability: service,
    problem,
  });
}

function baseFields(
  partial: Omit<
    ServicePageContent,
    | "overviewTitle"
    | "overview"
    | "solutionsTitle"
    | "solutions"
    | "deliverables"
    | "included"
    | "stackTags"
    | "process"
    | "relatedWorkIds"
  > & {
    overviewTitle: string;
    overview: string[];
    solutionsTitle: string;
    solutions: string[];
    deliverables: string[];
    included: string[];
    stackTags: string[];
    process: ServicePageContent["process"];
  },
): ServicePageContent {
  return {
    ...partial,
    relatedWorkIds: [],
  };
}

const seoPath = `${HUB}/seo`;
const metaPath = `${HUB}/meta-ads`;
const googlePath = `${HUB}/google-ads`;
const socialPath = `${HUB}/social-media-marketing`;
const analyticsPath = `${HUB}/web-analytics-data-tracking`;
const ecommercePath = `${HUB}/ecommerce-growth-marketing`;

/** Six Digital Marketing leaf services — nested under the hub. */
export const digitalMarketingLeaves: Service[] = [
  {
    id: "dm-seo",
    slug: "seo",
    path: seoPath,
    role: "detail",
    index: "01",
    name: "Search Engine Optimization",
    shortName: "SEO",
    oneLiner:
      "Organic search strategy, audits and implementation tied to business goals.",
    description:
      "SEO services that connect search visibility to the pages and enquiries that matter — without ranking guarantees.",
    capabilities: [
      "SEO audit",
      "Technical SEO",
      "On-page SEO",
      "Content priorities",
      "Search reporting",
    ],
    flow: ["Goals", "Audit", "Implement", "Review"],
    cta: "Explore SEO Services",
    relatedServiceIds: [
      "digital-marketing",
      "dm-analytics",
      "dm-google-ads",
      "dm-ecommerce-growth",
    ],
    page: baseFields({
      metaTitle: "SEO Services & Search Strategy | Buildaze",
      metaDescription:
        "Build an SEO plan around your customers, website and business goals. Explore technical audits, on-page improvements, content priorities and reporting.",
      eyebrow: "Organic search",
      headline: "SEO Services That Connect Search Visibility to Business Goals",
      subheadline:
        "Organic traffic is useful when it brings the right people to the right pages. We shape SEO work around what your customers search for, what your website needs and which enquiries or sales matter to your business.",
      ctaLabel: "Discuss Your SEO Priorities",
      secondaryCtaLabel: "Back to Digital Marketing",
      problems: {
        eyebrow: "Common SEO problems",
        headline: "When search visibility is not helping the business",
        intro: [
          "SEO should improve the chance that relevant people find useful pages — not chase rankings for their own sake.",
        ],
        problems: [
          {
            id: "low-visibility",
            index: "01",
            name: "Important pages receive little relevant visibility",
            title: "Pages that matter are hard to discover.",
            description:
              "We review indexing, architecture and intent fit so priority pages can compete for the queries that match your offer.",
            serviceLabel: "Search Engine Optimization",
            enquiryHref: leafEnquiry(
              seoPath,
              "Search Engine Optimization",
              "Important pages receive little relevant visibility",
            ),
          },
          {
            id: "traffic-no-clarity",
            index: "02",
            name: "Visitors arrive but do not understand the offer",
            title: "Traffic without a clear next step.",
            description:
              "On-page structure, titles and copy should help visitors understand the offer and find the enquiry or purchase path.",
            enquiryHref: leafEnquiry(
              seoPath,
              "Search Engine Optimization",
              "Visitors arrive but do not understand the offer",
            ),
          },
          {
            id: "crawl-issues",
            index: "03",
            name: "Crawl or indexing issues prevent discovery",
            title: "Technical blockers ahead of content work.",
            description:
              "Crawlability, indexability and rendering issues are identified and prioritized before large content investments.",
            enquiryHref: leafEnquiry(
              seoPath,
              "Search Engine Optimization",
              "Crawl or indexing issues prevent discovery",
            ),
          },
          {
            id: "unclear-content",
            index: "04",
            name: "Content priorities are unclear",
            title: "A practical order of what to improve first.",
            description:
              "We map commercial queries to pages and identify supporting topics worth creating or improving — without inventing fixed content volumes.",
            enquiryHref: leafEnquiry(
              seoPath,
              "Search Engine Optimization",
              "Content priorities are unclear",
            ),
          },
        ],
        closingTitle: "Need paid search instead?",
        closingBody:
          "Google Ads covers paid search campaigns. SEO and Google Ads can support the same goals with different work and budgets.",
        ctaLabel: "Discuss SEO priorities",
        ctaHref: leafEnquiry(seoPath, "Search Engine Optimization"),
      },
      capabilities: {
        eyebrow: "SEO scope",
        headline: "What an SEO engagement can include",
        intro: [
          "Confirm whether the engagement includes implementation or recommendations only before work starts. Link-building packages and fixed content volumes are not assumed.",
        ],
        capabilities: [
          {
            id: "audit",
            index: "01",
            name: "Audit and priorities",
            title: "Crawlability, indexability, architecture and technical issues.",
            description:
              "A prioritized fix list based on how search systems access your site and which pages should matter most.",
            items: [
              "Crawl and index review",
              "Architecture and overlap",
              "Technical issue list",
              "Priority recommendations",
            ],
            cta: "Discuss an SEO audit",
            href: leafEnquiry(seoPath, "Search Engine Optimization", "SEO audit"),
          },
          {
            id: "intent",
            index: "02",
            name: "Keyword and intent mapping",
            title: "Assign commercial queries to pages that can satisfy them.",
            description:
              "Map search intent to existing or planned pages and identify useful supporting topics.",
            items: [
              "Commercial query themes",
              "Page-to-intent mapping",
              "Supporting topic ideas",
              "Cannibalization risks",
            ],
            cta: "Discuss intent mapping",
            href: leafEnquiry(
              seoPath,
              "Search Engine Optimization",
              "Keyword and intent mapping",
            ),
          },
          {
            id: "onpage",
            index: "03",
            name: "On-page improvements",
            title: "Headings, titles, descriptions, copy and internal links.",
            description:
              "Improve how priority pages communicate relevance and guide visitors to the next step.",
            items: [
              "Titles and descriptions",
              "Heading structure",
              "Copy clarity",
              "Internal links",
            ],
            cta: "Discuss on-page work",
            href: leafEnquiry(
              seoPath,
              "Search Engine Optimization",
              "On-page improvements",
            ),
          },
          {
            id: "technical",
            index: "04",
            name: "Technical implementation",
            title: "Fixes within the agreed website scope.",
            description:
              "Implement agreed technical changes and verify rendered pages. Complex development dependencies may need the Development team.",
            items: [
              "Agreed technical fixes",
              "Rendered-page checks",
              "Handover notes",
            ],
            cta: "Discuss technical SEO",
            href: leafEnquiry(
              seoPath,
              "Search Engine Optimization",
              "Technical SEO implementation",
            ),
          },
          {
            id: "measure",
            index: "05",
            name: "Content plan and measurement",
            title: "Decide what to improve first and how progress is reviewed.",
            description:
              "Report organic visibility alongside relevant enquiries or sales where tracking exists. Rankings alone are not the final business outcome.",
            items: [
              "Content priorities",
              "Search Console review",
              "Enquiry or sales signals",
              "Indexation issues",
            ],
            cta: "Discuss SEO measurement",
            href: leafEnquiry(
              seoPath,
              "Search Engine Optimization",
              "SEO measurement",
            ),
          },
        ],
        closingTitle: "Related measurement work",
        closingBody:
          "If conversions are unclear, start with Web Analytics & Data Tracking before scaling SEO investment.",
        ctaLabel: "Discuss SEO priorities",
        ctaHref: leafEnquiry(seoPath, "Search Engine Optimization"),
      },
      deliveryProcess: {
        eyebrow: "SEO process",
        headline: "From baseline to priority fixes",
        intro: [
          "Establish goals and baseline → audit and map → implement priority fixes → review query, page and enquiry evidence.",
        ],
        steps: [
          {
            id: "baseline",
            index: "01",
            shortName: "Baseline",
            name: "Goals and baseline",
            title: "What success means for organic search.",
            description:
              "Define the pages, enquiries or sales that matter and capture the current search evidence available.",
            itemsLabel: "Inputs",
            items: [
              "Business goals",
              "Priority pages",
              "Existing Search Console access",
              "Tracking limitations",
            ],
            outcome: "A shared baseline before recommendations.",
          },
          {
            id: "audit-map",
            index: "02",
            shortName: "Audit",
            name: "Audit and map",
            title: "Technical, on-page and intent priorities.",
            description:
              "Produce a prioritized list of fixes and content decisions tied to commercial intent.",
            itemsLabel: "Outputs",
            items: [
              "Issue and opportunity list",
              "Intent-to-page map",
              "Implementation vs recommendation split",
            ],
            outcome: "A written priority plan.",
          },
          {
            id: "implement",
            index: "03",
            shortName: "Implement",
            name: "Implement priority fixes",
            title: "Agreed changes with verification.",
            description:
              "Ship the scoped work and verify important pages still render and communicate correctly.",
            itemsLabel: "Work",
            items: [
              "Technical and on-page fixes in scope",
              "Content updates agreed",
              "Rendered checks",
            ],
            outcome: "Changes you can inspect on the live or staging site.",
          },
          {
            id: "review",
            index: "04",
            shortName: "Review",
            name: "Review evidence",
            title: "Queries, pages and relevant enquiries.",
            description:
              "Review Search Console signals and business outcomes where tracking supports it — without promising a rank date.",
            itemsLabel: "Evidence",
            items: [
              "Impressions and clicks by query/page",
              "Indexation issues",
              "Relevant organic enquiries when available",
            ],
            outcome: "A clear view of what to do next.",
          },
        ],
        closingTitle: "Ecommerce SEO detail",
        closingBody:
          "Product and category SEO can sit inside this engagement. Store-wide acquisition planning belongs on Ecommerce Growth Marketing.",
        ctaLabel: "Discuss SEO priorities",
        ctaHref: "/contact?service=digital-marketing",
      },
      why: {
        eyebrow: "How success is assessed",
        headline: "Measurement for SEO work",
        intro: [
          "Use search evidence and business actions together. Rankings are not the final outcome.",
        ],
        differentiators: [
          {
            id: "gsc",
            index: "01",
            name: "Search Console evidence",
            summary: "Queries and landing pages.",
            title: "Impressions and clicks by query and landing page.",
            description:
              "We review how priority pages appear for relevant queries when Search Console access is available.",
            panelStatement: "Visibility without relevant demand is not success.",
            panelNote: "Query and page context matters.",
          },
          {
            id: "enquiries",
            index: "02",
            name: "Relevant enquiries",
            summary: "Organic outcomes when tracked.",
            title: "Enquiries or sales from organic landing pages.",
            description:
              "Where tracking exists, we look at whether organic visits lead to useful business actions.",
            panelStatement: "Traffic is a means — not the goal.",
            panelNote: "Qualified lead outcomes when CRM evidence exists.",
          },
          {
            id: "indexation",
            index: "03",
            name: "Indexation health",
            summary: "Discovery blockers.",
            title: "Indexation and crawl issues that block discovery.",
            description:
              "Unresolved technical blockers can waste content investment. They stay on the review list until addressed or scoped out.",
            panelStatement: "Fix discovery before scaling content volume.",
            panelNote: "Technical and content work stay connected.",
          },
        ],
        closingTitle: "Ready to prioritize SEO?",
        closingBody:
          "Share your site and the pages or markets that matter most.",
        pillars: ["Goals", "Audit", "Fixes", "Evidence"],
        closingNote: "No first-page guarantees.",
        ctaLabel: "Discuss Your SEO Priorities",
        ctaHref: "/contact?service=digital-marketing",
      },
      overviewTitle: "What SEO services include",
      overview: [
        "SEO covers audit, intent mapping, on-page improvements, agreed technical work and measurement.",
        "Paid search is covered on the Google Ads page. Store-wide channel planning sits under Ecommerce Growth Marketing.",
      ],
      solutionsTitle: "SEO focus areas",
      solutions: [
        "Technical SEO audits",
        "On-page SEO",
        "Intent mapping",
        "Content priorities",
        "Organic reporting",
      ],
      deliverables: [
        "Prioritized audit findings",
        "Intent-to-page recommendations",
        "Agreed on-page and technical changes",
        "Reporting approach for organic evidence",
      ],
      included: [
        "Goal and baseline discussion",
        "Written priorities before larger work",
        "Implementation or recommendations as scoped",
        "Review cadence agreed in the proposal",
      ],
      stackTags: ["Search Console", "GA4", "Technical SEO", "On-page SEO"],
      process: [
        {
          index: "01",
          name: "Baseline",
          duration: "Scoped",
          description: "Goals, priority pages and available search evidence.",
        },
        {
          index: "02",
          name: "Audit and map",
          duration: "Scoped",
          description: "Technical, on-page and intent priorities.",
        },
        {
          index: "03",
          name: "Implement",
          duration: "Scoped",
          description: "Agreed fixes with verification.",
        },
        {
          index: "04",
          name: "Review",
          duration: "Scoped",
          description: "Query, page and enquiry evidence.",
        },
      ],
      faqEyebrow: "SEO FAQs",
      faqHeadline: "Questions about SEO services",
      faqs: [
        {
          question: "Can you guarantee first-page rankings?",
          answer:
            "No. Competition, website history and search systems affect rankings. An SEO engagement should define the work, priorities and how progress will be reviewed.",
        },
        {
          question: "Do I need an audit or ongoing SEO?",
          answer:
            "An audit can identify priorities. Ongoing work is useful when implementation, content and review need continuous attention. The right scope depends on your current position.",
        },
        {
          question: "Is SEO the same as Google Ads?",
          answer:
            "SEO concerns organic search visibility. Google Ads uses paid campaigns. They can support the same business goals but involve different work and budgets.",
        },
        {
          question: "Do you offer link-building packages?",
          answer:
            "Link-building packages and fixed content volumes are not assumed. If outreach or content production is needed, it is scoped and confirmed separately.",
        },
      ],
      faqCtaLabel: "Discuss SEO priorities",
      faqCtaHref: "/contact?service=digital-marketing",
    }),
  },
  {
    id: "dm-meta-ads",
    slug: "meta-ads",
    path: metaPath,
    role: "detail",
    index: "02",
    name: "Meta Ads",
    shortName: "Meta Ads",
    oneLiner:
      "Facebook and Instagram ads management for leads and ecommerce goals.",
    description:
      "Meta Ads agency work for Facebook and Instagram — campaign planning, creative testing and measurement with clear commercial boundaries.",
    capabilities: [
      "Meta ads management",
      "Facebook ads",
      "Instagram ads",
      "Creative testing",
      "Conversion reporting",
    ],
    flow: ["Offer", "Track", "Test", "Review"],
    cta: "Explore Meta Ads",
    relatedServiceIds: [
      "digital-marketing",
      "dm-analytics",
      "dm-social",
      "dm-ecommerce-growth",
    ],
    page: baseFields({
      metaTitle: "Meta Ads Agency for Facebook & Instagram | Buildaze",
      metaDescription:
        "Plan and manage Facebook and Instagram campaigns with Buildaze. Explore audience strategy, creative testing, lead generation and ecommerce advertising.",
      eyebrow: "Facebook and Instagram advertising",
      headline: "Meta Ads Management for Facebook and Instagram",
      subheadline:
        "Facebook and Instagram campaigns need a clear offer, relevant creative and a useful destination after the click. We connect campaign planning to the actions your business wants customers to take.",
      ctaLabel: "Discuss Your Meta Ads Goals",
      secondaryCtaLabel: "Back to Digital Marketing",
      problems: {
        eyebrow: "Common Meta Ads problems",
        headline: "When paid social spends without clear outcomes",
        intro: [
          "Useful Meta campaigns start with the offer and the conversion definition — not only targeting settings.",
        ],
        problems: [
          {
            id: "clicks-no-leads",
            index: "01",
            name: "Many clicks but few useful enquiries",
            title: "Traffic that does not become pipeline.",
            description:
              "We review offer clarity, audience fit, creative and the destination experience before scaling spend.",
            enquiryHref: leafEnquiry(
              metaPath,
              "Meta Ads",
              "Clicks but few useful enquiries",
            ),
          },
          {
            id: "creative-fatigue",
            index: "02",
            name: "Unclear creative testing or ad fatigue",
            title: "Creative that stops teaching you anything.",
            description:
              "A testing plan should define what changes, what stays constant and how learnings are recorded.",
            enquiryHref: leafEnquiry(
              metaPath,
              "Meta Ads",
              "Unclear creative testing or ad fatigue",
            ),
          },
          {
            id: "lead-quality",
            index: "03",
            name: "Weak lead quality",
            title: "Volume without qualification.",
            description:
              "Lead generation success depends on how a qualified lead is defined — not form fills alone.",
            enquiryHref: leafEnquiry(metaPath, "Meta Ads", "Weak lead quality"),
          },
          {
            id: "reporting",
            index: "04",
            name: "Uncertain conversion reporting",
            title: "Numbers that cannot guide the next test.",
            description:
              "We clarify event definitions, reporting windows and whether Analytics work is needed before judging ROAS.",
            enquiryHref: leafEnquiry(
              metaPath,
              "Meta Ads",
              "Uncertain conversion reporting",
            ),
          },
        ],
        closingTitle: "Need organic social instead?",
        closingBody:
          "Organic planning and publishing are covered on Social Media Marketing. Paid Meta remains this page.",
        ctaLabel: "Discuss Meta Ads goals",
        ctaHref: leafEnquiry(metaPath, "Meta Ads"),
      },
      capabilities: {
        eyebrow: "Meta Ads scope",
        headline: "What Meta Ads management can include",
        intro: [
          "Confirm whether ad creative production, landing-page implementation, Pixel/CAPI work and account recovery are included or separate. They are not claimed by default.",
        ],
        capabilities: [
          {
            id: "review",
            index: "01",
            name: "Account and campaign review",
            title: "Structure, audiences and conversion setup.",
            description:
              "Examine how campaigns are organized and whether tracking can support useful optimization.",
            items: [
              "Account access review",
              "Campaign structure",
              "Conversion definitions",
              "Quick win and risk list",
            ],
            cta: "Discuss a Meta Ads audit",
            href: leafEnquiry(metaPath, "Meta Ads", "Meta ads audit"),
          },
          {
            id: "strategy",
            index: "02",
            name: "Offer and audience strategy",
            title: "Who we reach and why they should care.",
            description:
              "Align targeting and messaging with the offer and the action you want after the click.",
            items: [
              "Offer clarity",
              "Audience hypotheses",
              "Placement decisions",
              "Lead vs purchase goals",
            ],
            cta: "Discuss audience strategy",
            href: leafEnquiry(metaPath, "Meta Ads", "Offer and audience strategy"),
          },
          {
            id: "creative",
            index: "03",
            name: "Creative testing plan",
            title: "Structured experiments, not endless variants.",
            description:
              "Define test hypotheses, creative responsibilities and how fatigue is handled.",
            items: [
              "Test hypotheses",
              "Creative responsibilities",
              "Iteration cadence",
              "Learning log",
            ],
            cta: "Discuss creative testing",
            href: leafEnquiry(metaPath, "Meta Ads", "Creative testing"),
          },
          {
            id: "optimize",
            index: "04",
            name: "Setup, optimization and reporting",
            title: "Ongoing management with clear commercial lines.",
            description:
              "Campaign setup and optimization within agreed budgets. Management fees and media spend stay separate in the proposal.",
            items: [
              "Campaign setup",
              "Budget recommendations",
              "Optimization actions",
              "Reporting windows",
            ],
            cta: "Discuss ongoing management",
            href: leafEnquiry(metaPath, "Meta Ads", "Meta ads management"),
          },
        ],
        closingTitle: "Two common use cases",
        closingBody:
          "Service-business lead generation and ecommerce purchases need different success definitions. We document which you are optimizing for before judging results.",
        ctaLabel: "Discuss Meta Ads goals",
        ctaHref: leafEnquiry(metaPath, "Meta Ads"),
      },
      deliveryProcess: {
        eyebrow: "Meta Ads process",
        headline: "From offer clarity to reviewed outcomes",
        intro: [
          "Agree offer and goals → review tracking and assets → plan and test campaigns → review outcomes and next actions. Test duration and spend levels are not promised without an approved commercial policy.",
        ],
        steps: [
          {
            id: "goals",
            index: "01",
            shortName: "Goals",
            name: "Agree offer and goals",
            title: "What a successful conversion means.",
            description:
              "Define qualified leads or purchase outcomes before campaign build.",
            itemsLabel: "Align",
            items: ["Offer", "Audience", "Conversion definition", "Budget context"],
            outcome: "Shared success criteria.",
          },
          {
            id: "assets",
            index: "02",
            shortName: "Assets",
            name: "Review tracking and assets",
            title: "Can we measure and message correctly?",
            description:
              "Check conversion events, creative assets and landing destinations.",
            itemsLabel: "Check",
            items: ["Tracking readiness", "Creative assets", "Landing pages"],
            outcome: "Known dependencies before spend.",
          },
          {
            id: "test",
            index: "03",
            shortName: "Test",
            name: "Plan and test campaigns",
            title: "Structured launch and iteration.",
            description:
              "Implement agreed campaigns and creative tests within the written scope.",
            itemsLabel: "Run",
            items: ["Campaign setup", "Creative tests", "Optimization actions"],
            outcome: "Live work you can review.",
          },
          {
            id: "review",
            index: "04",
            shortName: "Review",
            name: "Review outcomes",
            title: "Spend, learnings and next actions.",
            description:
              "Report qualified outcomes where available. Platform-reported ROAS is not profit.",
            itemsLabel: "Review",
            items: [
              "Qualified leads or attributed purchases",
              "Spend and creative learnings",
              "Reporting source and window",
            ],
            outcome: "A clear next-step recommendation.",
          },
        ],
        closingTitle: "Measurement dependencies",
        closingBody:
          "If events are missing or duplicated, Web Analytics & Data Tracking should come first or run in parallel.",
        ctaLabel: "Discuss Meta Ads goals",
        ctaHref: "/contact?service=digital-marketing",
      },
      why: {
        eyebrow: "How success is assessed",
        headline: "Measurement for Meta Ads",
        intro: [
          "Judge campaigns on qualified outcomes and agreed windows — not clicks alone.",
        ],
        differentiators: [
          {
            id: "qualified",
            index: "01",
            name: "Qualified outcomes",
            summary: "Leads or purchases with definitions.",
            title: "Qualified leads and attributed purchases when available.",
            description:
              "Cost per qualified lead or purchase context depends on how qualification is defined and tracked.",
            panelStatement: "Form fills are not automatically qualified leads.",
            panelNote: "Define quality before optimizing volume.",
          },
          {
            id: "spend",
            index: "02",
            name: "Spend clarity",
            summary: "Fees versus media.",
            title: "Spend and commercial scope stay visible.",
            description:
              "Reports should separate media spend from management work and note creative or landing-page dependencies.",
            panelStatement: "ROAS is not the same as profit.",
            panelNote: "Window and source matter.",
          },
          {
            id: "learnings",
            index: "03",
            name: "Creative learnings",
            summary: "What to try next.",
            title: "Documented creative and audience learnings.",
            description:
              "Useful management produces decisions for the next test — not only a performance screenshot.",
            panelStatement: "Learning compounds when it is written down.",
            panelNote: "Avoid endless unstructured variants.",
          },
        ],
        closingTitle: "Ready to discuss Meta Ads?",
        closingBody: "Share the offer, goal and whether you already run campaigns.",
        pillars: ["Offer", "Tracking", "Tests", "Outcomes"],
        closingNote: "No guaranteed lead counts.",
        ctaLabel: "Discuss Your Meta Ads Goals",
        ctaHref: "/contact?service=digital-marketing",
      },
      overviewTitle: "What Meta Ads management includes",
      overview: [
        "Meta Ads covers paid Facebook and Instagram campaign planning, testing and optimization.",
        "Organic social management is a separate service. Analytics implementation may be required for trustworthy conversion data.",
      ],
      solutionsTitle: "Meta Ads focus areas",
      solutions: [
        "Lead generation campaigns",
        "Ecommerce campaigns",
        "Creative testing",
        "Account optimization",
        "Conversion reporting",
      ],
      deliverables: [
        "Campaign review or setup as scoped",
        "Audience and creative test plan",
        "Optimization actions within agreed budgets",
        "Reporting with stated windows and limitations",
      ],
      included: [
        "Goal and offer clarification",
        "Commercial distinction of fees vs media spend",
        "Agreed optimization cadence",
        "Honest reporting",
      ],
      stackTags: ["Meta Ads", "Facebook", "Instagram", "Conversion API (when scoped)"],
      process: [
        {
          index: "01",
          name: "Goals",
          duration: "Scoped",
          description: "Offer, audience and conversion definition.",
        },
        {
          index: "02",
          name: "Assets",
          duration: "Scoped",
          description: "Tracking, creative and landing readiness.",
        },
        {
          index: "03",
          name: "Test",
          duration: "Scoped",
          description: "Campaign setup and structured tests.",
        },
        {
          index: "04",
          name: "Review",
          duration: "Scoped",
          description: "Outcomes, spend and next actions.",
        },
      ],
      faqEyebrow: "Meta Ads FAQs",
      faqHeadline: "Questions about Meta Ads",
      faqs: [
        {
          question: "Are Facebook and Instagram ads both covered?",
          answer:
            "Meta Ads refers to paid advertising across Facebook and Instagram. Placements and campaign scope should be selected for your audience and goals.",
        },
        {
          question: "Does management include ad spend?",
          answer:
            "The proposal should distinguish management fees, platform media spend and any creative or landing-page work. Do not assume these are bundled.",
        },
        {
          question: "Do I also need organic social media?",
          answer:
            "Organic social can support brand familiarity and trust. Paid campaigns and organic management are different engagements; choose the mix that fits your goals.",
        },
      ],
      faqCtaLabel: "Discuss Meta Ads goals",
      faqCtaHref: "/contact?service=digital-marketing",
    }),
  },
  {
    id: "dm-google-ads",
    slug: "google-ads",
    path: googlePath,
    role: "detail",
    index: "03",
    name: "Google Ads",
    shortName: "Google Ads",
    oneLiner:
      "Google Ads management for lead generation and ecommerce search demand.",
    description:
      "Google Ads management services focused on account structure, intent, landing-page fit and conversion measurement.",
    capabilities: [
      "Google Ads management",
      "PPC management",
      "Search campaigns",
      "Conversion review",
      "Account audits",
    ],
    flow: ["Intent", "Audit", "Optimize", "Review"],
    cta: "Explore Google Ads",
    relatedServiceIds: [
      "digital-marketing",
      "dm-analytics",
      "dm-seo",
      "dm-ecommerce-growth",
    ],
    page: baseFields({
      metaTitle: "Google Ads Management Services | Buildaze",
      metaDescription:
        "Explore Google Ads management for lead generation and ecommerce. Buildaze connects campaign research, account optimization and conversion measurement.",
      eyebrow: "Google paid search and campaigns",
      headline: "Google Ads Management Built Around Your Business Goals",
      subheadline:
        "Reach people looking for what you sell with Google Ads campaigns connected to a relevant landing page and a defined conversion goal. Start with a clearer account structure and a practical plan for improving performance.",
      ctaLabel: "Discuss Your Google Ads Account",
      secondaryCtaLabel: "Back to Digital Marketing",
      problems: {
        eyebrow: "Common Google Ads problems",
        headline: "When paid search spend is hard to trust",
        intro: [
          "Useful Google Ads work reduces waste and connects clicks to defined business actions.",
        ],
        problems: [
          {
            id: "irrelevant",
            index: "01",
            name: "Paying for irrelevant searches",
            title: "Queries that cannot convert.",
            description:
              "Search-term review and negatives help stop spend on matches that do not fit the offer.",
            enquiryHref: leafEnquiry(
              googlePath,
              "Google Ads",
              "Paying for irrelevant searches",
            ),
          },
          {
            id: "no-conversions",
            index: "02",
            name: "Clicks without useful conversions",
            title: "Traffic that does not become enquiries or sales.",
            description:
              "We review ads, landing pages and conversion definitions together.",
            enquiryHref: leafEnquiry(
              googlePath,
              "Google Ads",
              "Clicks without useful conversions",
            ),
          },
          {
            id: "structure",
            index: "03",
            name: "Confusing account structure",
            title: "Campaigns that are hard to diagnose.",
            description:
              "Clearer structure makes budget, messaging and search-term decisions practical.",
            enquiryHref: leafEnquiry(
              googlePath,
              "Google Ads",
              "Confusing account structure",
            ),
          },
          {
            id: "ecommerce-disconnect",
            index: "04",
            name: "Ecommerce decisions disconnected from product economics",
            title: "Campaign choices without margin context.",
            description:
              "When you supply margin or contribution context, we can discuss campaign priorities more honestly than ROAS alone.",
            enquiryHref: leafEnquiry(
              googlePath,
              "Google Ads",
              "Ecommerce campaign economics unclear",
            ),
          },
        ],
        closingTitle: "Need organic search instead?",
        closingBody:
          "SEO covers organic visibility. PPC here means Google Ads — Meta campaigns are separate.",
        ctaLabel: "Discuss Google Ads account",
        ctaHref: leafEnquiry(googlePath, "Google Ads"),
      },
      capabilities: {
        eyebrow: "Google Ads scope",
        headline: "What Google Ads management can include",
        intro: [
          "Supported campaign types are confirmed during scoping. Shopping, product-feed work and Performance Max are discussed only when delivery capability exists. We do not invent partner badges or certifications.",
        ],
        capabilities: [
          {
            id: "audit",
            index: "01",
            name: "Account audit",
            title: "Structure, ads, search terms and conversions.",
            description:
              "Review an existing account before larger budget changes. Access requirements are agreed first.",
            items: [
              "Structure review",
              "Search-term samples",
              "Ad and asset review",
              "Conversion definitions",
            ],
            cta: "Discuss an account audit",
            href: leafEnquiry(googlePath, "Google Ads", "Google Ads account audit"),
          },
          {
            id: "research",
            index: "02",
            name: "Keyword and intent research",
            title: "Match language to buyer intent.",
            description:
              "Map search themes to campaigns and landing pages for lead generation or ecommerce needs.",
            items: [
              "Intent themes",
              "Match-type approach",
              "Negative keyword plan",
              "Landing-page gaps",
            ],
            cta: "Discuss keyword research",
            href: leafEnquiry(
              googlePath,
              "Google Ads",
              "Keyword and intent research",
            ),
          },
          {
            id: "optimize",
            index: "03",
            name: "Campaign and budget optimization",
            title: "Improve the account within agreed constraints.",
            description:
              "Optimize campaigns, budgets and assets. Media spend remains the advertiser’s platform cost.",
            items: [
              "Budget recommendations",
              "Ad copy and assets",
              "Search-term hygiene",
              "Landing-page recommendations",
            ],
            cta: "Discuss optimization",
            href: leafEnquiry(
              googlePath,
              "Google Ads",
              "Google Ads optimization",
            ),
          },
          {
            id: "conversion",
            index: "04",
            name: "Conversion review and reporting",
            title: "Defined conversions with diagnostic context.",
            description:
              "Clicks and CTR help diagnosis. Success is judged on defined conversions and cost per qualified enquiry where available.",
            items: [
              "Conversion definitions",
              "Lead quality signals",
              "Attributed sales when reliable",
              "Reporting cadence",
            ],
            cta: "Discuss conversion review",
            href: leafEnquiry(
              googlePath,
              "Google Ads",
              "Conversion review and reporting",
            ),
          },
        ],
        closingTitle: "Lead generation versus ecommerce",
        closingBody:
          "Lead gen and ecommerce campaigns need different conversion definitions and landing experiences. We document which model you are running.",
        ctaLabel: "Discuss Google Ads account",
        ctaHref: leafEnquiry(googlePath, "Google Ads"),
      },
      deliveryProcess: {
        eyebrow: "Google Ads process",
        headline: "From valuable actions to reviewed outcomes",
        intro: [
          "Define valuable actions → audit account and tracking → implement agreed campaign work → review search terms, lead quality and outcomes.",
        ],
        steps: [
          {
            id: "define",
            index: "01",
            shortName: "Define",
            name: "Define valuable actions",
            title: "What a conversion is worth measuring.",
            description:
              "Agree enquiry, purchase or other outcomes before changing bids or structure.",
            itemsLabel: "Define",
            items: ["Conversion events", "Qualification rules", "Budget context"],
            outcome: "Shared success criteria.",
          },
          {
            id: "audit",
            index: "02",
            shortName: "Audit",
            name: "Audit account and tracking",
            title: "Find waste and measurement gaps.",
            description:
              "Review structure, search terms, ads and whether tracking can support decisions.",
            itemsLabel: "Audit",
            items: ["Account structure", "Tracking readiness", "Quick wins and risks"],
            outcome: "A prioritized action list.",
          },
          {
            id: "implement",
            index: "03",
            shortName: "Implement",
            name: "Implement agreed work",
            title: "Campaign changes within written scope.",
            description:
              "Apply agreed optimizations and document ownership of the Google Ads account.",
            itemsLabel: "Implement",
            items: ["Campaign changes", "Negatives and assets", "Landing recommendations"],
            outcome: "Changes you can inspect in the account.",
          },
          {
            id: "review",
            index: "04",
            shortName: "Review",
            name: "Review outcomes",
            title: "Search terms, quality and cost.",
            description:
              "Review defined conversions, spend and conversion-rate context. CTR alone is not proof of success.",
            itemsLabel: "Review",
            items: [
              "Defined conversions",
              "Cost per qualified enquiry when available",
              "Search-term hygiene",
            ],
            outcome: "Next-step recommendations.",
          },
        ],
        closingTitle: "Need cleaner tracking first?",
        closingBody:
          "GA4 and conversion tracking issues are handled on Web Analytics & Data Tracking.",
        ctaLabel: "Discuss Google Ads account",
        ctaHref: "/contact?service=digital-marketing",
      },
      why: {
        eyebrow: "How success is assessed",
        headline: "Measurement for Google Ads",
        intro: [
          "Judge paid search on defined conversions and economics — not clicks alone.",
        ],
        differentiators: [
          {
            id: "conversions",
            index: "01",
            name: "Defined conversions",
            summary: "Business actions over CTR.",
            title: "Conversions with agreed definitions.",
            description:
              "We report the conversions you defined, with cost context where available.",
            panelStatement: "CTR is diagnostic, not success.",
            panelNote: "Lead quality matters for lead gen.",
          },
          {
            id: "waste",
            index: "02",
            name: "Waste reduction",
            summary: "Irrelevant queries.",
            title: "Search-term hygiene and structure.",
            description:
              "Reducing irrelevant spend is often the first practical win in an existing account.",
            panelStatement: "Not every click deserves budget.",
            panelNote: "Negatives and structure work together.",
          },
          {
            id: "commercial",
            index: "03",
            name: "Commercial clarity",
            summary: "Fees versus media.",
            title: "Management fees and media spend stay separate.",
            description:
              "Budget guidance depends on market, offer and conversion economics. Fees are discussed separately from platform spend.",
            panelStatement: "There is no universal minimum budget claim here.",
            panelNote: "Discuss economics honestly.",
          },
        ],
        closingTitle: "Ready to review your Google Ads account?",
        closingBody: "Share access constraints and the conversions that matter.",
        pillars: ["Actions", "Audit", "Optimize", "Evidence"],
        closingNote: "No invented partner status.",
        ctaLabel: "Discuss Your Google Ads Account",
        ctaHref: "/contact?service=digital-marketing",
      },
      overviewTitle: "What Google Ads management includes",
      overview: [
        "Google Ads management covers account audits, intent research, optimization and conversion review.",
        "PPC is used here as a supporting synonym for paid search on Google — not a claim to manage every ad platform.",
      ],
      solutionsTitle: "Google Ads focus areas",
      solutions: [
        "Lead generation campaigns",
        "Ecommerce Google Ads",
        "Account audits",
        "Search-term management",
        "Conversion reporting",
      ],
      deliverables: [
        "Account audit or optimization plan",
        "Agreed campaign changes",
        "Landing-page recommendations",
        "Reporting on defined conversions",
      ],
      included: [
        "Goal and conversion clarification",
        "Access and ownership discussion",
        "Written scope before larger changes",
        "Honest performance review",
      ],
      stackTags: ["Google Ads", "Search", "Conversion tracking", "GA4"],
      process: [
        {
          index: "01",
          name: "Define",
          duration: "Scoped",
          description: "Valuable actions and budget context.",
        },
        {
          index: "02",
          name: "Audit",
          duration: "Scoped",
          description: "Account structure and tracking readiness.",
        },
        {
          index: "03",
          name: "Implement",
          duration: "Scoped",
          description: "Agreed campaign work.",
        },
        {
          index: "04",
          name: "Review",
          duration: "Scoped",
          description: "Outcomes, waste and next steps.",
        },
      ],
      faqEyebrow: "Google Ads FAQs",
      faqHeadline: "Questions about Google Ads management",
      faqs: [
        {
          question: "Is PPC the same as Google Ads?",
          answer:
            "PPC describes a paid advertising model used across platforms. This service focuses on Google Ads; Meta campaigns are covered separately.",
        },
        {
          question: "Can you review an existing account?",
          answer:
            "An account review can examine structure, search terms, ads and conversion definitions. Access requirements and the implementation scope should be agreed before work starts.",
        },
        {
          question: "What budget do I need?",
          answer:
            "The appropriate budget depends on the market, offer, goals and conversion economics. Media spend and agency fees should be discussed separately.",
        },
      ],
      faqCtaLabel: "Discuss Google Ads account",
      faqCtaHref: "/contact?service=digital-marketing",
    }),
  },
  {
    id: "dm-social",
    slug: "social-media-marketing",
    path: socialPath,
    role: "detail",
    index: "04",
    name: "Social Media Marketing",
    shortName: "Social",
    oneLiner:
      "Organic social media marketing and management with a clear brand voice.",
    description:
      "Social media marketing services for organic planning, content management and community support — separate from paid Meta ads.",
    capabilities: [
      "Social media management",
      "Content planning",
      "Publishing workflow",
      "Community support",
      "Social reporting",
    ],
    flow: ["Audience", "Plan", "Publish", "Review"],
    cta: "Explore Social Media",
    relatedServiceIds: [
      "digital-marketing",
      "dm-meta-ads",
      "design",
      "dm-analytics",
    ],
    page: baseFields({
      metaTitle: "Social Media Marketing & Management | Buildaze",
      metaDescription:
        "Build a consistent organic social presence with Buildaze. Explore content planning, publishing, community support and reporting tailored to your brand.",
      eyebrow: "Organic social strategy and management",
      headline: "Social Media Marketing That Gives Your Brand a Clear Voice",
      subheadline:
        "A useful social presence starts with knowing what your audience needs to hear and how your brand should show up. Build an organic content plan that your team can review, publish and improve consistently.",
      ctaLabel: "Discuss Your Social Media Plan",
      secondaryCtaLabel: "Back to Digital Marketing",
      problems: {
        eyebrow: "Common social problems",
        headline: "When organic social feels inconsistent",
        intro: [
          "This page concerns organic social strategy and management. Paid Facebook and Instagram campaigns are available through Meta Ads.",
        ],
        problems: [
          {
            id: "inconsistent",
            index: "01",
            name: "Inconsistent posting",
            title: "No sustainable publishing rhythm.",
            description:
              "A calendar and ownership model make consistency possible without inventing a post quota.",
            enquiryHref: leafEnquiry(
              socialPath,
              "Social Media Marketing",
              "Inconsistent posting",
            ),
          },
          {
            id: "voice",
            index: "02",
            name: "Unclear voice or content themes",
            title: "Posts that do not sound like the brand.",
            description:
              "We define themes and voice guidance your reviewers can apply before publishing.",
            enquiryHref: leafEnquiry(
              socialPath,
              "Social Media Marketing",
              "Unclear voice or content themes",
            ),
          },
          {
            id: "approvals",
            index: "03",
            name: "No approval process",
            title: "Publishing without clear responsibility.",
            description:
              "Agree who supplies assets, who approves and who handles replies before work starts.",
            enquiryHref: leafEnquiry(
              socialPath,
              "Social Media Marketing",
              "No approval process",
            ),
          },
          {
            id: "vanity",
            index: "04",
            name: "Vanity metrics without useful learning",
            title: "Numbers that do not change decisions.",
            description:
              "Reporting should highlight content performance and useful next priorities — followers alone are not revenue.",
            enquiryHref: leafEnquiry(
              socialPath,
              "Social Media Marketing",
              "Vanity metrics without useful learning",
            ),
          },
        ],
        closingTitle: "Need paid social?",
        closingBody:
          "See Meta Ads for Facebook and Instagram advertising. Organic engagements do not automatically include paid promotions.",
        ctaLabel: "Discuss social media plan",
        ctaHref: leafEnquiry(socialPath, "Social Media Marketing"),
      },
      capabilities: {
        eyebrow: "Social media scope",
        headline: "What organic social management can include",
        intro: [
          "Confirm whether original graphics, video, photography, copywriting and customer-service responses are included. Monthly post counts, platform lists and response SLAs are not invented here.",
        ],
        capabilities: [
          {
            id: "review",
            index: "01",
            name: "Channel and content review",
            title: "Where you are and what is worth keeping.",
            description:
              "Review existing channels, content quality and whether each platform deserves attention.",
            items: [
              "Channel audit",
              "Content themes",
              "Audience fit",
              "Priority platforms",
            ],
            cta: "Discuss a social review",
            href: leafEnquiry(
              socialPath,
              "Social Media Marketing",
              "Channel and content review",
            ),
          },
          {
            id: "voice",
            index: "02",
            name: "Brand voice and themes",
            title: "A voice your reviewers can apply.",
            description:
              "Document voice, themes and examples so approvals stay consistent.",
            items: [
              "Voice guidance",
              "Theme pillars",
              "Do and do-not examples",
            ],
            cta: "Discuss brand voice",
            href: leafEnquiry(
              socialPath,
              "Social Media Marketing",
              "Brand voice and themes",
            ),
          },
          {
            id: "calendar",
            index: "03",
            name: "Calendar and approvals",
            title: "A manageable publishing process.",
            description:
              "Plan content with a review workflow. Responsibilities are written into the proposal.",
            items: [
              "Content calendar",
              "Approval workflow",
              "Asset responsibilities",
              "Publishing cadence",
            ],
            cta: "Discuss content calendar",
            href: leafEnquiry(
              socialPath,
              "Social Media Marketing",
              "Content calendar services",
            ),
          },
          {
            id: "community",
            index: "04",
            name: "Publishing and community support",
            title: "Agreed publishing and reply handling.",
            description:
              "Publishing and community support stay within the written scope — not an implied 24/7 helpdesk.",
            items: [
              "Publishing in scope",
              "Community handling in scope",
              "Escalation rules",
              "Performance review",
            ],
            cta: "Discuss community support",
            href: leafEnquiry(
              socialPath,
              "Social Media Marketing",
              "Publishing and community support",
            ),
          },
        ],
        closingTitle: "Design support",
        closingBody:
          "When brand systems or creative assets need dedicated design work, we link to Buildaze Design rather than inventing an in-page studio package.",
        ctaLabel: "Discuss social media plan",
        ctaHref: leafEnquiry(socialPath, "Social Media Marketing"),
      },
      deliveryProcess: {
        eyebrow: "Social process",
        headline: "From brand understanding to reviewed publishing",
        intro: [
          "Understand brand and audience → agree channels and content responsibilities → plan, approve and publish → review audience response and next priorities.",
        ],
        steps: [
          {
            id: "understand",
            index: "01",
            shortName: "Understand",
            name: "Understand brand and audience",
            title: "What the brand should sound like.",
            description:
              "Clarify audience needs, offer and constraints before choosing platforms.",
            itemsLabel: "Understand",
            items: ["Audience", "Brand voice", "Offer", "Capacity"],
            outcome: "Shared voice and goals.",
          },
          {
            id: "agree",
            index: "02",
            shortName: "Agree",
            name: "Agree channels and responsibilities",
            title: "Who does what before publishing.",
            description:
              "Choose platforms deliberately. Being active everywhere is not automatically best.",
            itemsLabel: "Agree",
            items: [
              "Platform selection",
              "Asset ownership",
              "Approval owners",
              "Reply ownership",
            ],
            outcome: "A written operating model.",
          },
          {
            id: "publish",
            index: "03",
            shortName: "Publish",
            name: "Plan, approve and publish",
            title: "Consistent execution within scope.",
            description:
              "Run the calendar and publishing process you approved.",
            itemsLabel: "Execute",
            items: ["Calendar", "Approvals", "Publishing", "Community in scope"],
            outcome: "A visible publishing rhythm.",
          },
          {
            id: "review",
            index: "04",
            shortName: "Review",
            name: "Review and prioritize",
            title: "Learning over vanity totals.",
            description:
              "Review engagement quality, profile or website visits and content performance. Followers alone are not revenue.",
            itemsLabel: "Review",
            items: [
              "Meaningful engagement",
              "Content performance",
              "Assisted enquiries when measurable",
            ],
            outcome: "Next content priorities.",
          },
        ],
        closingTitle: "Paid social stays separate",
        closingBody:
          "Boosting or always-on paid Meta campaigns are scoped under Meta Ads.",
        ctaLabel: "Discuss social media plan",
        ctaHref: "/contact?service=digital-marketing",
      },
      why: {
        eyebrow: "How success is assessed",
        headline: "Measurement for organic social",
        intro: [
          "Measure whether content helps the brand show up clearly — not follower count alone.",
        ],
        differentiators: [
          {
            id: "engagement",
            index: "01",
            name: "Meaningful engagement",
            summary: "Quality over empty reach.",
            title: "Engagement that reflects real interest.",
            description:
              "We look at whether people interact in ways that relate to your themes and offer.",
            panelStatement: "Vanity metrics need interpretation.",
            panelNote: "Context beats raw totals.",
          },
          {
            id: "visits",
            index: "02",
            name: "Useful visits",
            summary: "Profile and site signals.",
            title: "Profile and website visits when measurable.",
            description:
              "Where analytics support it, we review whether social activity contributes to useful visits or enquiries.",
            panelStatement: "Followers are not revenue.",
            panelNote: "Assisted enquiries need tracking.",
          },
          {
            id: "process",
            index: "03",
            name: "Process health",
            summary: "Approvals that work.",
            title: "A publishing process your team can sustain.",
            description:
              "Missed approvals and unclear ownership usually break consistency before creative quality does.",
            panelStatement: "Operations enable consistency.",
            panelNote: "Write responsibilities down.",
          },
        ],
        closingTitle: "Ready to plan organic social?",
        closingBody: "Share the platforms you use and who currently approves content.",
        pillars: ["Voice", "Plan", "Publish", "Learn"],
        closingNote: "No invented post quotas.",
        ctaLabel: "Discuss Your Social Media Plan",
        ctaHref: "/contact?service=digital-marketing",
      },
      overviewTitle: "What social media marketing includes",
      overview: [
        "Organic social media marketing covers planning, voice, publishing process and community support within scope.",
        "Paid Meta advertising is covered on the Meta Ads page.",
      ],
      solutionsTitle: "Social media focus areas",
      solutions: [
        "Content planning",
        "Organic social management",
        "Approval workflows",
        "Community support in scope",
        "Social reporting",
      ],
      deliverables: [
        "Channel and content recommendations",
        "Voice and theme guidance",
        "Calendar and approval process",
        "Publishing support as scoped",
      ],
      included: [
        "Audience and brand discussion",
        "Platform selection rationale",
        "Written responsibilities",
        "Performance review cadence",
      ],
      stackTags: [
        "Organic social",
        "Content calendar",
        "Community management",
        "Reporting",
      ],
      process: [
        {
          index: "01",
          name: "Understand",
          duration: "Scoped",
          description: "Brand, audience and capacity.",
        },
        {
          index: "02",
          name: "Agree",
          duration: "Scoped",
          description: "Channels and responsibilities.",
        },
        {
          index: "03",
          name: "Publish",
          duration: "Scoped",
          description: "Plan, approve and publish.",
        },
        {
          index: "04",
          name: "Review",
          duration: "Scoped",
          description: "Audience response and next priorities.",
        },
      ],
      faqEyebrow: "Social FAQs",
      faqHeadline: "Questions about social media management",
      faqs: [
        {
          question: "Does this include paid ads?",
          answer:
            "Organic social management and paid campaigns are separate scopes. See our Meta Ads service for Facebook and Instagram advertising.",
        },
        {
          question: "Which platforms should we use?",
          answer:
            "Choose platforms around your audience, offer and ability to produce useful content. Being active on every platform is not automatically the best plan.",
        },
        {
          question: "Who approves content?",
          answer:
            "Agree the review process and responsibilities before publishing. The proposal should specify who supplies assets, approves posts and handles customer responses.",
        },
      ],
      faqCtaLabel: "Discuss social media plan",
      faqCtaHref: "/contact?service=digital-marketing",
    }),
  },
  {
    id: "dm-analytics",
    slug: "web-analytics-data-tracking",
    path: analyticsPath,
    role: "detail",
    index: "05",
    name: "Web Analytics & Data Tracking",
    shortName: "Analytics",
    oneLiner:
      "GA4, Tag Manager and conversion tracking that answers business questions.",
    description:
      "Web analytics services for GA4 setup, Google Tag Manager, conversion tracking audits and reporting definitions.",
    capabilities: [
      "GA4 setup",
      "Google Tag Manager",
      "Conversion tracking",
      "Analytics audit",
      "Reporting definitions",
    ],
    flow: ["Questions", "Audit", "Implement", "Handover"],
    cta: "Explore Analytics",
    relatedServiceIds: [
      "digital-marketing",
      "dm-meta-ads",
      "dm-google-ads",
      "dm-ecommerce-growth",
      "development",
    ],
    page: baseFields({
      metaTitle: "Web Analytics, GA4 & Conversion Tracking | Buildaze",
      metaDescription:
        "Understand what your website and campaigns are delivering. Explore GA4, Google Tag Manager, conversion tracking audits and reporting with Buildaze.",
      eyebrow: "Measurement and conversion tracking",
      headline: "Web Analytics and Data Tracking for Better Decisions",
      subheadline:
        "When reports disagree or conversions are unclear, spending more can make decisions harder. Start with a measurement plan that defines the actions you need to understand, then review how your website records and reports them.",
      ctaLabel: "Discuss Your Tracking Setup",
      secondaryCtaLabel: "Back to Digital Marketing",
      problems: {
        eyebrow: "Common tracking problems",
        headline: "When measurement cannot guide decisions",
        intro: [
          "Analytics work starts with the questions you need answered — not installing another tag by default.",
        ],
        problems: [
          {
            id: "duplicate",
            index: "01",
            name: "Duplicate or missing conversion events",
            title: "Events that inflate or hide results.",
            description:
              "We inventory events and validate what fires on real journeys before trusting reports.",
            enquiryHref: leafEnquiry(
              analyticsPath,
              "Web Analytics & Data Tracking",
              "Duplicate or missing conversion events",
            ),
          },
          {
            id: "click-as-lead",
            index: "02",
            name: "Enquiry clicks counted as completed leads",
            title: "Intent mistaken for completion.",
            description:
              "A click expresses intent. A completed enquiry should use an accepted submission where implementation supports it.",
            enquiryHref: leafEnquiry(
              analyticsPath,
              "Web Analytics & Data Tracking",
              "Enquiry clicks counted as completed leads",
            ),
          },
          {
            id: "purchase-gaps",
            index: "03",
            name: "Purchases not measured consistently",
            title: "Ecommerce tracking that does not match reality.",
            description:
              "GA4 ecommerce events need appropriate implementation. A basic analytics tag does not prove purchase tracking is correct.",
            enquiryHref: leafEnquiry(
              analyticsPath,
              "Web Analytics & Data Tracking",
              "Purchases not measured consistently",
            ),
          },
          {
            id: "platform-mismatch",
            index: "04",
            name: "Analytics and ad-platform totals differ",
            title: "Reports that disagree by design.",
            description:
              "Different attribution rules, windows and consent limits often explain gaps. Compare definitions before assuming one tool is wrong.",
            enquiryHref: leafEnquiry(
              analyticsPath,
              "Web Analytics & Data Tracking",
              "Analytics and ad-platform totals differ",
            ),
          },
        ],
        closingTitle: "Complex implementation dependencies",
        closingBody:
          "When site changes are required, Development may be involved. Advanced items such as server-side GTM, BigQuery or offline CRM joins are only included when confirmed.",
        ctaLabel: "Discuss tracking setup",
        ctaHref: leafEnquiry(analyticsPath, "Web Analytics & Data Tracking"),
      },
      capabilities: {
        eyebrow: "Analytics scope",
        headline: "What web analytics work can include",
        intro: [
          "Deliverables should be understandable: event inventory, measurement plan, implementation changes, QA evidence, reporting definitions and handover. We do not sell 100% accurate tracking, complete attribution or automatic legal compliance.",
        ],
        capabilities: [
          {
            id: "audit",
            index: "01",
            name: "Tracking audit",
            title: "What is installed and what is broken.",
            description:
              "Review tags, triggers and conversion definitions against the journeys that matter.",
            items: [
              "Tag inventory",
              "Duplicate/missing events",
              "Consent interaction notes",
              "Priority fixes",
            ],
            cta: "Discuss a tracking audit",
            href: leafEnquiry(
              analyticsPath,
              "Web Analytics & Data Tracking",
              "GA4 tracking audit",
            ),
          },
          {
            id: "plan",
            index: "02",
            name: "KPI and event plan",
            title: "Define the actions before changing tags.",
            description:
              "Map business questions to events and reports so implementation has a purpose.",
            items: [
              "Business questions",
              "Event definitions",
              "Lead vs click distinctions",
              "Ecommerce event needs",
            ],
            cta: "Discuss a measurement plan",
            href: leafEnquiry(
              analyticsPath,
              "Web Analytics & Data Tracking",
              "KPI and event plan",
            ),
          },
          {
            id: "implement",
            index: "03",
            name: "GA4 / GTM configuration",
            title: "Implement and validate agreed tracking.",
            description:
              "Configure GA4 and Google Tag Manager within scope. Respect existing consent choices and avoid sending personal form data into analytics.",
            items: [
              "GA4 configuration",
              "GTM changes in scope",
              "Form and ecommerce QA",
              "Documented limitations",
            ],
            cta: "Discuss GA4 setup",
            href: leafEnquiry(
              analyticsPath,
              "Web Analytics & Data Tracking",
              "GA4 setup services",
            ),
          },
          {
            id: "handover",
            index: "04",
            name: "Reporting and handover",
            title: "Definitions your team can reuse.",
            description:
              "Dashboards or reporting views as scoped, plus documentation of what each metric means.",
            items: [
              "Reporting definitions",
              "QA evidence",
              "Handover notes",
              "Known limitations",
            ],
            cta: "Discuss reporting setup",
            href: leafEnquiry(
              analyticsPath,
              "Web Analytics & Data Tracking",
              "Reporting and handover",
            ),
          },
        ],
        closingTitle: "Campaign reporting vs implementation",
        closingBody:
          "Meta Ads and Google Ads pages describe campaign measurement. This page owns tracking implementation and metric definitions.",
        ctaLabel: "Discuss tracking setup",
        ctaHref: leafEnquiry(analyticsPath, "Web Analytics & Data Tracking"),
      },
      deliveryProcess: {
        eyebrow: "Analytics process",
        headline: "From questions to documented measurement",
        intro: [
          "Define questions and actions → audit current tags → implement and validate → document and report.",
        ],
        steps: [
          {
            id: "questions",
            index: "01",
            shortName: "Questions",
            name: "Define questions and actions",
            title: "What decisions should the data support?",
            description:
              "List the business questions and the events that would answer them.",
            itemsLabel: "Define",
            items: ["Decisions", "Key journeys", "Success events"],
            outcome: "A measurement brief.",
          },
          {
            id: "audit",
            index: "02",
            shortName: "Audit",
            name: "Audit current tags",
            title: "Find gaps, duplicates and definition drift.",
            description:
              "Inspect the current implementation against the brief.",
            itemsLabel: "Audit",
            items: ["Tag inventory", "Broken paths", "Consent notes"],
            outcome: "A prioritized fix list.",
          },
          {
            id: "implement",
            index: "03",
            shortName: "Implement",
            name: "Implement and validate",
            title: "Change tags with QA evidence.",
            description:
              "Implement agreed changes and validate journeys. Ecommerce purchase tracking is verified — not assumed from a base tag.",
            itemsLabel: "Implement",
            items: ["Configuration changes", "Journey QA", "Issue log"],
            outcome: "Validated setup with known limits.",
          },
          {
            id: "document",
            index: "04",
            shortName: "Handover",
            name: "Document and report",
            title: "Definitions and evidence your team can keep.",
            description:
              "Hand over documentation, QA notes and reporting definitions.",
            itemsLabel: "Handover",
            items: ["Event dictionary", "QA evidence", "Report definitions"],
            outcome: "Measurement you can operate.",
          },
        ],
        closingTitle: "Not a revenue guarantee",
        closingBody:
          "Better measurement improves decisions. It does not guarantee additional revenue by itself.",
        ctaLabel: "Discuss tracking setup",
        ctaHref: "/contact?service=digital-marketing",
      },
      why: {
        eyebrow: "How success is assessed",
        headline: "Measurement quality — not vanity certainty",
        intro: [
          "Success means reports answer agreed questions with documented limitations.",
        ],
        differentiators: [
          {
            id: "qa",
            index: "01",
            name: "QA evidence",
            summary: "Tested journeys.",
            title: "Test results for critical paths.",
            description:
              "We validate that agreed events fire — and do not double-fire — on the journeys that matter.",
            panelStatement: "Installation is not validation.",
            panelNote: "Keep QA notes.",
          },
          {
            id: "definitions",
            index: "02",
            name: "Clear definitions",
            summary: "Shared metric language.",
            title: "Metric definitions everyone can reuse.",
            description:
              "Teams should know whether a metric is a click, a submit or a purchase before arguing about performance.",
            panelStatement: "Definition drift creates false emergencies.",
            panelNote: "Write the dictionary down.",
          },
          {
            id: "limits",
            index: "03",
            name: "Documented limits",
            summary: "Consent and platform gaps.",
            title: "Known limitations stay visible.",
            description:
              "Consent, browsers, devices and implementation limits affect completeness. We do not claim every customer is tracked.",
            panelStatement: "Honesty beats false precision.",
            panelNote: "No 100% tracking claim.",
          },
        ],
        closingTitle: "Ready to fix measurement?",
        closingBody: "Share which reports disagree and which actions matter most.",
        pillars: ["Questions", "Audit", "QA", "Handover"],
        closingNote: "Respect consent choices.",
        ctaLabel: "Discuss Your Tracking Setup",
        ctaHref: "/contact?service=digital-marketing",
      },
      overviewTitle: "What web analytics services include",
      overview: [
        "Web analytics work covers audits, measurement planning, GA4/GTM configuration, QA and handover.",
        "Advanced capabilities are confirmed before publication in a proposal — not assumed from this page.",
      ],
      solutionsTitle: "Analytics focus areas",
      solutions: [
        "GA4 setup",
        "Google Tag Manager",
        "Conversion tracking",
        "Ecommerce tracking QA",
        "Reporting definitions",
      ],
      deliverables: [
        "Event inventory and measurement plan",
        "Implementation changes in scope",
        "QA evidence",
        "Reporting definitions and handover",
      ],
      included: [
        "Business-question workshop",
        "Audit of current tags",
        "Agreed implementation",
        "Documented limitations",
      ],
      stackTags: ["GA4", "Google Tag Manager", "Conversion tracking", "Search Console"],
      process: [
        {
          index: "01",
          name: "Questions",
          duration: "Scoped",
          description: "Actions and decisions to support.",
        },
        {
          index: "02",
          name: "Audit",
          duration: "Scoped",
          description: "Current tags and gaps.",
        },
        {
          index: "03",
          name: "Implement",
          duration: "Scoped",
          description: "Configure and validate.",
        },
        {
          index: "04",
          name: "Handover",
          duration: "Scoped",
          description: "Definitions, QA and documentation.",
        },
      ],
      faqEyebrow: "Analytics FAQs",
      faqHeadline: "Questions about analytics and tracking",
      faqs: [
        {
          question: "Why do GA4 and ad reports differ?",
          answer:
            "They can use different attribution rules, reporting windows and event definitions. Consent and tracking limitations also affect the data. Compare definitions before assuming one report is wrong.",
        },
        {
          question: "Is a button click a completed lead?",
          answer:
            "A click expresses intent. A completed enquiry should be defined separately, using an actual accepted submission where the implementation supports it.",
        },
        {
          question: "Can you guarantee every customer is tracked?",
          answer:
            "No. Consent, browsers, devices and implementation limitations affect measurement. The aim is a validated setup with clearly documented limitations.",
        },
      ],
      faqCtaLabel: "Discuss tracking setup",
      faqCtaHref: "/contact?service=digital-marketing",
    }),
  },
  {
    id: "dm-ecommerce-growth",
    slug: "ecommerce-growth-marketing",
    path: ecommercePath,
    role: "detail",
    index: "06",
    name: "Ecommerce Growth Marketing",
    shortName: "Ecommerce Growth",
    oneLiner:
      "Ecommerce marketing strategy across acquisition, conversion and measurement.",
    description:
      "Ecommerce growth marketing for existing or launch-ready stores — channel priorities, conversion recommendations and reporting with honest ROAS context.",
    capabilities: [
      "Ecommerce marketing strategy",
      "Acquisition planning",
      "Conversion recommendations",
      "Channel prioritization",
      "Growth reporting",
    ],
    flow: ["Assess", "Prioritize", "Execute", "Review"],
    cta: "Explore Ecommerce Growth",
    relatedServiceIds: [
      "digital-marketing",
      "dm-seo",
      "dm-meta-ads",
      "dm-google-ads",
      "dm-analytics",
      "shopify",
    ],
    page: baseFields({
      metaTitle: "Ecommerce Marketing & Growth Strategy | Buildaze",
      metaDescription:
        "Connect ecommerce acquisition, conversion and measurement with Buildaze. Prioritize SEO, paid media and store improvements around your growth goals.",
      eyebrow: "Acquisition and conversion for stores",
      headline: "Ecommerce Growth Marketing Across Acquisition and Conversion",
      subheadline:
        "More store traffic is not always the first problem to solve. Connect customer acquisition, product-page conversion and measurement in a prioritized ecommerce marketing plan built around your store's current position.",
      ctaLabel: "Discuss Your Ecommerce Growth Plan",
      secondaryCtaLabel: "Back to Digital Marketing",
      problems: {
        eyebrow: "Common ecommerce growth problems",
        headline: "When store marketing work pulls in different directions",
        intro: [
          "This is marketing for an existing or launch-ready ecommerce store. Shopify store design, migrations and custom builds are separate specialist services.",
        ],
        problems: [
          {
            id: "rising-cac",
            index: "01",
            name: "Acquisition costs rising",
            title: "Spend growing faster than contribution.",
            description:
              "We assess channel mix and conversion bottlenecks before recommending more budget.",
            enquiryHref: leafEnquiry(
              ecommercePath,
              "Ecommerce Growth Marketing",
              "Acquisition costs rising",
            ),
          },
          {
            id: "traffic-no-purchases",
            index: "02",
            name: "Traffic without enough purchases",
            title: "Visits that do not become orders.",
            description:
              "Product-page journeys, offer clarity and measurement often matter before another campaign launch.",
            enquiryHref: leafEnquiry(
              ecommercePath,
              "Ecommerce Growth Marketing",
              "Traffic without enough purchases",
            ),
          },
          {
            id: "silos",
            index: "03",
            name: "Paid and organic teams work in isolation",
            title: "Channels without a shared priority list.",
            description:
              "A growth plan should sequence SEO, paid media and conversion work instead of treating each as a separate project.",
            enquiryHref: leafEnquiry(
              ecommercePath,
              "Ecommerce Growth Marketing",
              "Paid and organic teams work in isolation",
            ),
          },
          {
            id: "roas-only",
            index: "04",
            name: "ROAS discussed without margins",
            title: "Efficiency metrics mistaken for profit.",
            description:
              "ROAS compares attributed revenue with ad spend. Product costs, fees and repeat-customer context affect profitability.",
            enquiryHref: leafEnquiry(
              ecommercePath,
              "Ecommerce Growth Marketing",
              "ROAS discussed without margins",
            ),
          },
        ],
        closingTitle: "Need the store rebuilt?",
        closingBody:
          "Shopify design, migrations and apps live on the Shopify page. Ecommerce Development covers broader platform builds.",
        ctaLabel: "Discuss ecommerce growth plan",
        ctaHref: leafEnquiry(ecommercePath, "Ecommerce Growth Marketing"),
      },
      capabilities: {
        eyebrow: "Ecommerce growth scope",
        headline: "What ecommerce growth marketing can include",
        intro: [
          "Implementation of store changes should link to Shopify or Development and be scoped separately when appropriate. Email/SMS retention, influencer work and other unapproved categories are not automatic inclusions.",
        ],
        capabilities: [
          {
            id: "assess",
            index: "01",
            name: "Store and channel assessment",
            title: "Baseline before more spend.",
            description:
              "Review acquisition, conversion signals and measurement readiness around the store’s current position.",
            items: [
              "Channel baseline",
              "Conversion signals",
              "Tracking readiness",
              "Obvious bottlenecks",
            ],
            cta: "Discuss a growth audit",
            href: leafEnquiry(
              ecommercePath,
              "Ecommerce Growth Marketing",
              "Ecommerce growth audit",
            ),
          },
          {
            id: "acquire",
            index: "02",
            name: "Acquisition priorities",
            title: "SEO and paid media sequenced sensibly.",
            description:
              "Prioritize channels with leaf-page specialists for deep execution. A multi-channel plan is not required for every store.",
            items: [
              "SEO priorities",
              "Meta and Google priorities",
              "Landing-page alignment",
              "Budget sequencing",
            ],
            cta: "Discuss acquisition priorities",
            href: leafEnquiry(
              ecommercePath,
              "Ecommerce Growth Marketing",
              "Ecommerce customer acquisition strategy",
            ),
          },
          {
            id: "convert",
            index: "03",
            name: "Conversion recommendations",
            title: "Journey improvements with an agreed testing plan.",
            description:
              "Recommend conversion work and testing priorities. Unlimited experimentation is not implied.",
            items: [
              "Product/landing recommendations",
              "Testing plan",
              "Dependencies on store changes",
              "Success criteria",
            ],
            cta: "Discuss conversion priorities",
            href: leafEnquiry(
              ecommercePath,
              "Ecommerce Growth Marketing",
              "Ecommerce conversion optimization",
            ),
          },
          {
            id: "report",
            index: "04",
            name: "Reporting with agreed definitions",
            title: "Revenue and cost with clear denominators.",
            description:
              "Report conversion rate, acquisition cost and spend by agreed sources. Avoid summing overlapping platform conversions.",
            items: [
              "Defined denominators",
              "Revenue and spend by source",
              "Margin context when supplied",
              "Platform vs store performance",
            ],
            cta: "Discuss growth reporting",
            href: leafEnquiry(
              ecommercePath,
              "Ecommerce Growth Marketing",
              "Ecommerce growth reporting",
            ),
          },
        ],
        closingTitle: "Detailed channel execution",
        closingBody:
          "Deep SEO, Meta Ads, Google Ads and Analytics work link to those specialist pages rather than duplicating every leaf here.",
        ctaLabel: "Discuss ecommerce growth plan",
        ctaHref: leafEnquiry(ecommercePath, "Ecommerce Growth Marketing"),
      },
      deliveryProcess: {
        eyebrow: "Growth process",
        headline: "From baseline economics to reviewed marketing changes",
        intro: [
          "Assess baseline and economics → prioritize bottlenecks and channels → implement agreed marketing changes → review business and channel evidence.",
        ],
        steps: [
          {
            id: "assess",
            index: "01",
            shortName: "Assess",
            name: "Assess baseline",
            title: "Position, economics and measurement.",
            description:
              "Understand current performance and what data can support decisions.",
            itemsLabel: "Assess",
            items: ["Store baseline", "Channel mix", "Measurement gaps"],
            outcome: "A realistic starting diagnosis.",
          },
          {
            id: "prioritize",
            index: "02",
            shortName: "Prioritize",
            name: "Prioritize bottlenecks",
            title: "One sensible starting point is enough.",
            description:
              "Sequence work so the first engagement attacks the constraint that matters most.",
            itemsLabel: "Prioritize",
            items: ["Bottleneck", "Channel choice", "Dependencies"],
            outcome: "A written priority plan.",
          },
          {
            id: "implement",
            index: "03",
            shortName: "Implement",
            name: "Implement agreed marketing changes",
            title: "Execution with specialist links as needed.",
            description:
              "Run the marketing work in scope and route store build needs to Shopify or Development.",
            itemsLabel: "Implement",
            items: [
              "Agreed marketing changes",
              "Campaign/landing alignment",
              "Store-change referrals when needed",
            ],
            outcome: "Progress against the written plan.",
          },
          {
            id: "review",
            index: "04",
            shortName: "Review",
            name: "Review evidence",
            title: "Business and channel signals together.",
            description:
              "Review conversion rate, acquisition cost and revenue/spend with agreed definitions. ROAS is not profit.",
            itemsLabel: "Review",
            items: [
              "Conversion rate context",
              "Acquisition cost scope",
              "Source-level revenue and spend",
            ],
            outcome: "Next growth priorities.",
          },
        ],
        closingTitle: "Shopify remains the build specialist",
        closingBody:
          "Growth marketing does not replace storefront engineering. Use the Shopify hub when the store itself needs to change.",
        ctaLabel: "Discuss ecommerce growth plan",
        ctaHref: "/contact?service=digital-marketing",
      },
      why: {
        eyebrow: "How success is assessed",
        headline: "Measurement for ecommerce growth",
        intro: [
          "Compare the right numbers. Platform ROAS is not total store profit.",
        ],
        differentiators: [
          {
            id: "cvr",
            index: "01",
            name: "Defined conversion rate",
            summary: "Denominator matters.",
            title: "Conversion rate with a defined denominator.",
            description:
              "We state what is being divided by what so conversion conversations stay comparable.",
            panelStatement: "Undefined CVR invites confusion.",
            panelNote: "Write the formula down.",
          },
          {
            id: "cac",
            index: "02",
            name: "Acquisition cost scope",
            summary: "Know what costs are included.",
            title: "Acquisition cost with a defined cost scope.",
            description:
              "Media-only cost and fully loaded cost answer different questions. The proposal should say which is used.",
            panelStatement: "Cost scope changes the story.",
            panelNote: "Be explicit.",
          },
          {
            id: "roas",
            index: "03",
            name: "ROAS context",
            summary: "Not profit.",
            title: "ROAS versus profitability.",
            description:
              "ROAS compares attributed revenue with ad spend. Margins, fees and overlapping platform conversions need separate treatment.",
            panelStatement: "Higher ROAS is not automatically more profit.",
            panelNote: "Avoid double-counting platforms.",
          },
        ],
        closingTitle: "Ready to prioritize store growth?",
        closingBody:
          "Share the store URL, current channels and the constraint you feel most.",
        pillars: ["Assess", "Prioritize", "Execute", "Review"],
        closingNote: "No unlimited experimentation claim.",
        ctaLabel: "Discuss Your Ecommerce Growth Plan",
        ctaHref: "/contact?service=digital-marketing",
      },
      overviewTitle: "What ecommerce growth marketing includes",
      overview: [
        "Ecommerce growth marketing connects acquisition priorities, conversion recommendations and measurement for stores.",
        "It is not Shopify development. Deep SEO and paid media execution link to specialist pages.",
      ],
      solutionsTitle: "Ecommerce growth focus areas",
      solutions: [
        "Ecommerce marketing strategy",
        "Acquisition prioritization",
        "Conversion recommendations",
        "Channel coordination",
        "Growth reporting",
      ],
      deliverables: [
        "Growth assessment and priorities",
        "Channel and conversion recommendations",
        "Agreed testing plan",
        "Reporting with defined metrics",
      ],
      included: [
        "Baseline assessment",
        "Written priority plan",
        "Links to specialist channel execution",
        "Honest commercial and measurement framing",
      ],
      stackTags: [
        "Ecommerce marketing",
        "SEO",
        "Paid media",
        "Conversion",
        "GA4",
      ],
      process: [
        {
          index: "01",
          name: "Assess",
          duration: "Scoped",
          description: "Baseline, economics and measurement.",
        },
        {
          index: "02",
          name: "Prioritize",
          duration: "Scoped",
          description: "Bottlenecks and channel sequence.",
        },
        {
          index: "03",
          name: "Implement",
          duration: "Scoped",
          description: "Agreed marketing changes.",
        },
        {
          index: "04",
          name: "Review",
          duration: "Scoped",
          description: "Business and channel evidence.",
        },
      ],
      faqEyebrow: "Ecommerce growth FAQs",
      faqHeadline: "Questions about ecommerce growth marketing",
      faqs: [
        {
          question: "Is this the same as Shopify development?",
          answer:
            "No. Growth marketing focuses on acquisition, conversion priorities and measurement. Shopify development covers building or changing the store itself.",
        },
        {
          question: "Can we start with one channel?",
          answer:
            "Yes, the strategy can prioritize one channel or bottleneck when that is the sensible starting point. A multi-channel plan is not a requirement for every store.",
        },
        {
          question: "Does a higher ROAS mean more profit?",
          answer:
            "Not necessarily. ROAS compares attributed revenue with ad spend. Product costs, margins, fees and other costs affect profitability.",
        },
      ],
      faqCtaLabel: "Discuss ecommerce growth plan",
      faqCtaHref: "/contact?service=digital-marketing",
    }),
  },
];

export const DIGITAL_MARKETING_LEAF_IDS = digitalMarketingLeaves.map((s) => s.id);
