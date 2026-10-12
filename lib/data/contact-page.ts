/** Contact page copy — claims limited to verified site practices. */
export const contactPage = {
  metaTitle: "Contact Buildaze | Discuss Your Project",
  metaDescription:
    "Tell Buildaze what you need to build or improve. Share a few project details so we can understand the work and suggest the next step.",
  path: "/contact" as const,
  hero: {
    eyebrow: "Contact",
    h1: "Let’s discuss your project.",
    intro:
      "Tell us what you need to build or improve. Share a few details so we can understand your project and suggest the next step.",
  },
  nextSteps: {
    eyebrow: "What happens next",
    headline: "A simple path after you send an inquiry.",
    steps: [
      {
        index: "01",
        name: "We review your project details",
        description:
          "We read what you shared about the problem, current setup and goals so any reply is based on your context.",
      },
      {
        index: "02",
        name: "We follow up",
        description:
          "We reply with relevant questions or arrange a discussion when more detail is needed to understand the work.",
      },
      {
        index: "03",
        name: "We agree scope and next steps",
        description:
          "If the project is a fit, we agree deliverables, responsibilities and the next step before build work starts.",
      },
    ],
  },
  direct: {
    eyebrow: "Direct contact",
    headline: "Prefer email?",
    body: "Write to the team directly. Opening a draft is not the same as submitting the inquiry form — you still need to send the message from your mail client.",
  },
  proof: {
    label: "Want to see how we work? Explore our projects.",
    href: "/work",
  },
  faqs: [
    {
      question: "What should I include in my inquiry?",
      answer:
        "Describe what you want to build or improve, who will use it, your current setup and any useful links. You do not need a finished technical specification to start.",
    },
    {
      question: "Can you improve an existing website or product?",
      answer:
        "Yes. Many projects start with an existing site, product or Shopify store. We review the current setup and propose a scoped improvement rather than assuming a full rebuild.",
    },
    {
      question: "What if I’m unsure which service I need?",
      answer:
        "Choose “Not sure yet” and explain the problem in your own words. We will help map the need to the right service during follow-up.",
    },
    {
      question: "How do you determine project scope and cost?",
      answer:
        "Scope, deliverables, responsibilities and cost are agreed in writing after we understand the problem and constraints. We do not publish fixed prices that ignore project specifics.",
    },
  ],
  form: {
    successMessage:
      "Thank you. Your inquiry has been received. We’ll follow up using the email address you provided.",
    detailsPlaceholder:
      "Tell us what you want to build or improve, your current challenges and any useful links.",
    privacyNote:
      "We use the details you submit to reply to your inquiry. See our Privacy Policy for how enquiry information is handled.",
    submitLabel: "Send Project Inquiry",
  },
} as const;
