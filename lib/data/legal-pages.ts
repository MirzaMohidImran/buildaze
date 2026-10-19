import { site } from "./site";

/** Final revision date for visitor-facing policy pages (ISO calendar date). */
export const LEGAL_LAST_UPDATED = "13 October 2026";
export const LEGAL_LAST_UPDATED_ISO = "2026-10-13";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalPageContent = {
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: LegalSection[];
};

const contactLine = `For questions, email ${site.email}.`;

export const privacyPolicyContent: LegalPageContent = {
  path: "/privacy-policy",
  title: "Privacy Policy",
  metaTitle: "Privacy Policy | Buildaze",
  metaDescription:
    "How Buildaze handles personal information collected through buildaze.com and project inquiries.",
  h1: "Privacy Policy",
  intro:
    "This policy explains how Buildaze handles personal information collected through buildaze.com and project inquiries.",
  sections: [
    {
      id: "information-we-collect",
      heading: "Information we collect",
      paragraphs: [
        "When you contact us through website enquiry forms, we receive the information you choose to provide. Depending on the form, that can include your name, email address, company name, selected service or capability, optional timeline, and a description of your project or challenge.",
        "Our website and server infrastructure may also process technical information needed to operate the site and protect it from misuse, such as IP address, request headers, browser details and similar connection data.",
        "If you use the optional Voice Agent browser demo, microphone access is requested in your browser and audio is processed through the configured conversational AI provider for that demo. You can decline microphone permission.",
      ],
    },
    {
      id: "how-we-use-information",
      heading: "How we use information",
      paragraphs: [
        "We use enquiry information to respond to your message, discuss or deliver requested services, operate and improve the website, and prevent spam or abuse (including rate limiting).",
        "Where applicable, processing is based on steps toward a contract, legitimate business interests in operating the website and responding to inquiries, legal obligations, or consent where consent is required.",
      ],
    },
    {
      id: "sharing",
      heading: "Sharing and processors",
      paragraphs: [
        "Information may be processed by providers that support hosting, email delivery, communications, analytics and project delivery. In this website’s configured stack, enquiry emails may be sent through an email delivery provider when that integration is enabled. Google Analytics 4 may process usage data for measurement. The Voice Agent demo uses a conversational AI provider when the demo is available and you choose to start it.",
        "Some providers may process data outside your country. Where applicable law requires safeguards for international transfers, those safeguards should be in place with the relevant provider. This policy does not invent specific contractual clauses or certifications beyond what Buildaze can confirm operationally.",
      ],
    },
    {
      id: "retention",
      heading: "Retention",
      paragraphs: [
        "We retain information as needed for its purpose, contractual obligations, legal requirements and dispute resolution. Exact retention periods depend on the nature of the enquiry or engagement and are not fixed as universal website defaults in this policy.",
      ],
    },
    {
      id: "security-choices",
      heading: "Security and your choices",
      paragraphs: [
        "No online system is completely secure. Please do not submit passwords, payment-card details, government ID numbers or other sensitive personal information through general inquiry forms.",
        "Depending on applicable law, you may request access, correction or deletion of personal information we hold about you, object to certain processing, or withdraw consent where processing is based on consent. You may also complain to the relevant data-protection authority.",
      ],
    },
    {
      id: "contact-updates",
      heading: "Contact and updates",
      paragraphs: [
        `For privacy questions or requests, email ${site.email}.`,
        "We may update this policy to reflect changes in our practices or applicable requirements. The “Last updated” date at the top of this page shows the current revision.",
      ],
    },
  ],
};

export const termsOfUseContent: LegalPageContent = {
  path: "/terms-of-use",
  title: "Website Terms",
  metaTitle: "Website Terms | Buildaze",
  metaDescription:
    "Terms that apply to your use of buildaze.com. Project work is governed by the applicable written agreement.",
  h1: "Website Terms",
  intro: "These terms apply to your use of buildaze.com.",
  sections: [
    {
      id: "website-information",
      heading: "Website information",
      paragraphs: [
        "Website content describes our services and provides general information. Submitting an inquiry does not create a service agreement.",
        "Project scope, fees, payment terms, timelines, revisions, ownership, cancellations and support are governed by the applicable written agreement. These website terms do not amend existing client agreements.",
      ],
    },
    {
      id: "acceptable-use",
      heading: "Acceptable use",
      paragraphs: [
        "Do not misuse the website, submit unlawful material, interfere with its operation or attempt unauthorized access. Only submit information you are entitled to share.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      paragraphs: [
        "Website materials belong to Buildaze or their respective owners. Viewing this website does not grant permission to reproduce or commercially reuse protected materials.",
        "Ownership and licensing of client deliverables are governed by the relevant project agreement.",
      ],
    },
    {
      id: "availability",
      heading: "Availability and third parties",
      paragraphs: [
        "We aim to keep information accurate and the website available, but cannot guarantee uninterrupted access or error-free content. Past project results do not guarantee future outcomes.",
        "Third-party websites and services operate under their own terms.",
      ],
    },
    {
      id: "legal-contact",
      heading: "Legal rights and contact",
      paragraphs: [
        "Nothing in these terms excludes liability or rights that cannot lawfully be excluded.",
        contactLine,
      ],
    },
  ],
};

export type CookieRow = {
  technology: string;
  provider: string;
  purpose: string;
  category: string;
  duration: string;
};

/**
 * Cookie / similar-technology rows limited to what the repository evidences.
 * Live host cookies and deployment-injected tags remain listed in the private
 * development note until confirmed on the production host.
 */
export const cookieTechnologyRows: CookieRow[] = [
  {
    technology: "First-party site operation",
    provider: "Buildaze website host / application",
    purpose:
      "Deliver pages, maintain security controls (such as rate limiting on the server) and support requested form submissions.",
    category: "Essential",
    duration:
      "Primarily request-time processing; any host cookies depend on the hosting platform configuration.",
  },
  {
    technology: "Google Analytics 4 (gtag.js)",
    provider: "Google LLC",
    purpose:
      "Measure page views, engagement and selected interaction events (such as labelled CTA clicks) to understand how the website is used. Measurement ID G-SXMYZ684LN.",
    category: "Analytics",
    duration:
      "Google analytics cookies and similar identifiers (for example _ga, _ga_*). Durations follow Google’s current documentation and may include multi-month retention.",
  },
  {
    technology: "Voice Agent demo (when used)",
    provider: "Conversational AI provider (configured for the demo)",
    purpose:
      "Run the optional browser voice demo after you grant microphone access. Not loaded for ordinary browsing of other pages.",
    category: "Functional / embedded service",
    duration:
      "Controlled by the provider’s session and browser storage for that demo; see the provider’s privacy policy.",
  },
];

export const cookiePolicyContent: LegalPageContent = {
  path: "/cookie-policy",
  title: "Cookie Policy",
  metaTitle: "Cookie Policy | Buildaze",
  metaDescription:
    "How buildaze.com uses cookies and similar technologies, and the choices available to you.",
  h1: "Cookie Policy",
  intro:
    "Cookies and similar technologies can support website functionality, remember preferences and measure usage. This page describes the setup evidenced in the Buildaze website application.",
  sections: [
    {
      id: "cookie-use",
      heading: "How we use cookies and similar technologies",
      paragraphs: [
        "Essential technologies support requested functions such as loading pages, submitting enquiry forms and protecting the site from abuse.",
        "This website loads Google Analytics 4 (gtag.js, measurement ID G-SXMYZ684LN) to measure page views and selected interaction events. No advertising pixel library is shipped in the application. Form field contents are not sent to analytics.",
        "Optional embedded services, such as the Voice Agent browser demo, run only when you use those features and may involve third-party processing under the provider’s policies.",
      ],
    },
    {
      id: "your-choices",
      heading: "Your choices",
      paragraphs: [
        "You can manage cookies through your browser settings. Blocking essential cookies or storage may affect website functionality.",
        "This website does not currently provide a separate on-site cookie preference panel. Browser settings and Google’s advertising/analytics controls remain available where applicable.",
        "If a consent preference panel is required for your jurisdiction or for future advertising tags, it should be added and this policy updated to match the live behaviour.",
      ],
    },
    {
      id: "third-parties",
      heading: "Third-party features",
      paragraphs: [
        "Google Analytics is provided by Google LLC and is subject to Google’s privacy and terms documentation. Other third-party websites and services linked from this site set their own cookies under their own policies.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [contactLine],
    },
  ],
};

export const legalPages = [
  privacyPolicyContent,
  termsOfUseContent,
  cookiePolicyContent,
] as const;
