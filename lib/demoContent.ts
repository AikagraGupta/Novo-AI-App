export const WORKFLOW_VISUAL_STAGES = [
  {
    step: "01",
    title: "Ingestion & Orchestration",
    eyebrow: "Handwritten forms, invoices and notes",
    body:
      "Novo receives messy claim material and turns it into normalized evidence fields the reviewer can use.",
    points: ["Document intake", "OCR extraction", "Case assembly"],
    tone: "gold",
    visual: {
      kind: "ingestion",
      extracted: ["Inpatient", "Femur fracture", "14 Day Stay"]
    }
  },
  {
    step: "02",
    title: "Medical Coding",
    eyebrow: "Clinical and billing normalization",
    body:
      "Clinical details are mapped into coding context, so claims can be reviewed and compared consistently.",
    points: ["ICD-10", "CPT", "DRG"],
    tone: "gold",
    visual: {
      kind: "coding",
      rows: [
        {
          label: "ICD-10",
          value: "S72.001A",
          detail: "Fracture, neck of right femur"
        },
        {
          label: "CPT",
          value: "27236",
          detail: "Open treatment of femoral fracture"
        },
        {
          label: "DRG",
          value: "480",
          detail: "Hip and femur procedures"
        }
      ]
    }
  },
  {
    step: "03",
    title: "Abuse Detection",
    eyebrow: "Clinical reasonableness check",
    body:
      "Novo compares requested care against expected clinical records and surfaces outliers for human review.",
    points: ["Expected stay", "Requested stay", "Clinical flag"],
    tone: "red",
    visual: {
      kind: "abuse",
      expected: "7 days",
      requested: "14 days",
      finding: "+7 days over expected"
    }
  },
  {
    step: "04",
    title: "Financial Integrity",
    eyebrow: "Leakage report",
    body:
      "The signal becomes a financial integrity view: what is questionable, why it matters, and the estimated recovery.",
    points: ["Provider view", "Leakage estimate", "Recoverable amount"],
    tone: "red",
    visual: {
      kind: "financial",
      provider: "Provider A",
      finding: "7 excess inpatient days",
      amount: "USD 8,400",
      note: "recoverable on this claim"
    }
  }
] as const;
