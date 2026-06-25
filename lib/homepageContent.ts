export const CTA_TARGETS = {
  primary: "#contact",
  sampleAnalysis: "#contact",
  secondary: "#platform",
  tertiary: "#footer-contact"
} as const;

export const CAPABILITY_PILLARS = [
  {
    title: "Evidence Structuring",
    highlight: "Evidence",
    eyebrow: "Efficiency",
    body:
      "Turn messy medical files into structured, source-linked evidence reviewers can trust.",
    extra: "Faster review, clear traceability."
  },
  {
    title: "Pre-Authorization Analysis",
    highlight: "Pre-Authorization",
    eyebrow: "Medical loss ratio",
    body:
      "Surface cost signals before payment while keeping the final decision with your team.",
    extra: "Leakage caught earlier."
  },
  {
    title: "Portfolio Evaluation",
    highlight: "Portfolio",
    eyebrow: "Intelligence",
    body:
      "Read provider and claims patterns across the book, not just inside one file.",
    extra: "Every decision gets context."
  }
] as const;

export const PLATFORM_DETAIL_PAGES = [
  {
    slug: "evidence-structuring",
    eyebrow: "Efficiency",
    title: "Evidence Structuring",
    body:
      "Turn messy medical files into structured, source-linked evidence reviewers can trust.",
    summary:
      "Novo reads fragmented claim files and turns them into a cleaner working record, so reviewers can see the source evidence behind each extracted field.",
    points: [
      "Connect invoices, forms, medical notes, and attachments into one review path.",
      "Keep source links visible so reviewers can validate the evidence quickly.",
      "Reduce repeated manual sorting before a claim reaches the decision step."
    ]
  },
  {
    slug: "pre-authorization-analysis",
    eyebrow: "Medical loss ratio",
    title: "Pre-Authorization Analysis",
    body:
      "Surface cost signals before payment while keeping the final decision with your team.",
    summary:
      "Novo gives pre-auth and medical review teams earlier context around coding, provider behavior, and cost-control signals.",
    points: [
      "Identify missing, weak, or inconsistent evidence before approval.",
      "Bring medical coding context into the review workflow.",
      "Route exceptions to human reviewers while straightforward work keeps moving."
    ]
  },
  {
    slug: "portfolio-evaluation",
    eyebrow: "Intelligence",
    title: "Portfolio Evaluation",
    body:
      "Read provider and claims patterns across the book, not just inside one file.",
    summary:
      "Novo helps teams move from single-claim review to a broader view of repeated provider, market, and cost patterns.",
    points: [
      "Track recurring signals across providers, markets, and claim types.",
      "Give audit, cost-control, and network teams shared operating context.",
      "Use portfolio patterns to improve routing and future review priorities."
    ]
  }
] as const;

export type ProofMetric = {
  value: string;
  label: string;
  supporting: string;
};

export const PROOF_METRICS: ProofMetric[] = [
  {
    value: "10x",
    label: "more claims cleared",
    supporting: "More claims cleared per reviewer per day."
  },
  {
    value: "3-5%",
    label: "medical loss ratio protected",
    supporting: "Protected before payment."
  },
  {
    value: "90%",
    label: "eligible claims straight-through",
    supporting: "Eligible claims move without extra review."
  },
  {
    value: "3x-8x",
    label: "estimated ROI",
    supporting: "Estimated annual platform ROI."
  },
  {
    value: "15",
    label: "countries live",
    supporting: "Live across complex claims markets."
  }
];

export const PROOF_SUPPORTING_SIGNALS = [
  "Print accuracy >99%",
  "Handwriting baseline >85%",
  "Processed in seconds",
  "Human review retained"
] as const;

export type TestimonialSlot = {
  company: string;
  mark: string;
  person: string;
  role: string;
  summary: string;
};

export const TESTIMONIAL_SLOTS: TestimonialSlot[] = [
  {
    company: "APRIL International",
    mark: "APRIL",
    person: "Romain Di Meglio",
    role: "Regional CEO, APRIL Asia · Member of the ExCo",
    summary: "\"Novo AI helped us accelerate claims processing and detect fraud and abuse.\""
  },
  {
    company: "Tokio Marine",
    mark: "TM",
    person: "Seree Gavinratchatarot",
    role: "Deputy CEO Thailand, Tokio Marine Safety Insurance",
    summary: "\"The deployment improved efficiency and our ability to support customers.\""
  }
];

export const WHY_NOVO_PILLARS = [
  {
    title: "Built for global markets",
    body: "Reads multilingual evidence, handwriting, stamps, and non-Latin scripts."
  },
  {
    title: "Human in the loop",
    body: "Flags what needs attention while approvals stay with your reviewers."
  },
  {
    title: "Faster deployment, measurable impact",
    body: "Designed to fit existing claims operations without a long rebuild."
  },
  {
    title: "Medical coding built into the workflow",
    body: "Structures medical information so review and coding move together."
  },
  {
    title: "Cost caught, not chased",
    body: "Surfaces leakage signals before avoidable cost becomes recovery work."
  },
  {
    title: "One platform for every team",
    body: "Gives claims, medical review, audit, and network teams one view."
  },
  {
    title: "Smart enablement, continuous growth",
    body: "Turns portfolio patterns into better routing and cost prevention."
  }
] as const;

export const INTEGRATION_ZONES = [
  {
    title: "How claims arrive",
    body: "Bring claim evidence into one operating path.",
    items: ["Email", "Portal", "SFTP", "API"]
  },
  {
    title: "Novo",
    body: "Read, structure, check, and flag the file.",
    items: ["Read and structure", "Check history", "Flag for review"]
  },
  {
    title: "Your core system",
    body: "Return a decision-ready file before payment.",
    items: ["Reviewer decides", "Adjudication", "Payment"]
  }
] as const;

export const SAMPLE_ANALYSIS_POINTS = [
  "Bring one workflow and document pack",
  "Name the claim type and market",
  "Start with company details below"
] as const;

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question:
      "What is claims intelligence, and how is it different from claims automation?",
    answer:
      "Automation moves tasks. Claims intelligence structures evidence and gives reviewers the context to decide faster."
  },
  {
    question: "How does Novo handle non-English, mixed-script, and non-Latin documents?",
    answer:
      "Novo is built for mixed scripts, local provider formats, stamps, handwriting, and multilingual evidence."
  },
  {
    question: "How are data handling and human review controlled?",
    answer:
      "Teams validate fields, review flags, escalate edge cases, and keep source links visible."
  },
  {
    question: "How does Novo approach data handling and regional compliance needs?",
    answer:
      "The setup is scoped around the workflow, market, governance needs, and system environment."
  },
  {
    question: "How does Novo fit into existing claims systems?",
    answer:
      "Novo runs alongside current systems through structured exports, API-friendly outputs, and common intake channels."
  },
  {
    question: "What does an engagement with Novo typically start with?",
    answer:
      "Most teams start with one workflow, one document set, and one measurable pain point."
  },
  {
    question: "How quickly can a workflow evaluation or pilot begin?",
    answer:
      "A focused evaluation can begin with a real workflow, sample documents, and a clear review goal."
  },
  {
    question: "Which workflows does Novo usually support first?",
    answer:
      "Common starting points include claims review, pre-auth, fraud screening, payment integrity, and medical cost review."
  }
];

export const PLATFORM_PAGE_HERO_PILLS = [
  "Claims review",
  "Pre-auth",
  "Cost control",
  "Multilingual evidence"
] as const;

export const PLATFORM_SYSTEM_STEPS = [
  {
    title: "Ingestion & orchestration",
    body: "Bring forms, invoices, and notes into one working case."
  },
  {
    title: "Medical coding",
    body: "Map clinical evidence to ICD-10, CPT, and DRG context."
  },
  {
    title: "Abuse detection",
    body: "Compare requested care against expected clinical records."
  },
  {
    title: "Financial integrity",
    body: "Translate confirmed signals into leakage and recovery context."
  }
] as const;

export const PLATFORM_INPUTS = [
  "Invoices, bills, and claim forms",
  "Medical notes and discharge summaries",
  "Letters, attachments, and policy files",
  "Mixed-language files and handwriting"
] as const;

export const PLATFORM_OUTPUTS = [
  "Structured claim and provider fields",
  "Anomaly and leakage signals",
  "Reviewer summaries with source links",
  "Workflow-ready exports"
] as const;

export const PLATFORM_MODULES = [
  {
    title: "Claims review core",
    body: "Structure evidence for document-heavy claims and direct billing."
  },
  {
    title: "Fraud and abuse detection",
    body: "Flag weak evidence, abnormal billing, and provider drift."
  },
  {
    title: "Pre-auth and medical controls",
    body: "Support pre-auth review with evidence and coding context."
  },
  {
    title: "Provider and cost intelligence",
    body: "Connect repeated cost signals across providers and markets."
  }
] as const;

export const PLATFORM_GUARDRAILS = [
  "Reviewers validate and override",
  "Source links stay visible",
  "Outputs fit existing systems",
  "Built for cross-border health claims"
] as const;
