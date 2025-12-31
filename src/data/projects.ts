// src/data/projects.ts

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;

  tags: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string; // e.g. "2–3 days", "1 week"
  format: "Individual" | "Team" | "Capstone";

  outcomes: string[]; // 3–6 bullets
  stack: string[]; // tools/tech

  deliverables: string[]; // what students produce
  dataset: string; // dataset description
};

export const projects: Project[] = [
  {
    slug: "telco-churn-mlops",
    title: "Telco Customer Churn — MLOps End-to-End",
    shortDescription:
      "Train a churn model, track experiments, deploy an API, containerize it, and monitor predictions.",
    tags: ["ML", "MLOps", "FastAPI", "Docker", "MLflow", "Monitoring"],
    level: "Intermediate",
    duration: "1 week",
    format: "Capstone",
    outcomes: [
      "Build a clean baseline (leakage-proof) and iterate safely",
      "Track runs and register models with MLflow",
      "Serve predictions via FastAPI with input validation",
      "Containerize with Docker and ship a reproducible build",
      "Design monitoring signals (drift, performance, data quality)",
    ],
    stack: ["Python", "pandas", "scikit-learn", "MLflow", "FastAPI", "Docker"],
    deliverables: [
      "Reproducible ML project structure",
      "MLflow experiment dashboard + model versioning",
      "FastAPI endpoint + OpenAPI docs",
      "Docker image + run instructions",
      "Monitoring plan (KPIs + alerts)",
    ],
    dataset:
      "Customer subscription + usage features with churn label (tabular classification).",
  },

  {
    slug: "credit-risk-scorecard",
    title: "Credit Risk — Scorecard & Decisioning",
    shortDescription:
      "Build an interpretable risk model with calibration, thresholding, and business-aware metrics.",
    tags: ["ML", "Risk", "Interpretability", "Calibration"],
    level: "Intermediate",
    duration: "3–4 days",
    format: "Team",
    outcomes: [
      "Create stable features and robust validation",
      "Calibrate probabilities for decision thresholds",
      "Explain drivers and build a decision policy",
      "Communicate tradeoffs using cost-aware metrics",
    ],
    stack: ["Python", "pandas", "scikit-learn", "SHAP (optional)"],
    deliverables: [
      "Risk model + evaluation report",
      "Threshold policy (approve/reject/review)",
      "Interpretability report with top drivers",
    ],
    dataset:
      "Loan applications with repayment outcome (classification + decisioning).",
  },

  {
    slug: "demand-forecasting-retail",
    title: "Retail Demand Forecasting — Backtesting & Delivery",
    shortDescription:
      "Forecast weekly demand using proper backtesting, baselines, and feature-based models.",
    tags: ["Time Series", "Forecasting", "Backtesting"],
    level: "Intermediate",
    duration: "3–4 days",
    format: "Team",
    outcomes: [
      "Choose correct time series evaluation strategy",
      "Beat baselines using feature models",
      "Deliver forecasts with uncertainty notes",
      "Propose monitoring signals for forecast drift",
    ],
    stack: ["Python", "pandas", "scikit-learn", "statsmodels (optional)"],
    deliverables: [
      "Backtesting notebook + model comparison",
      "Forecast export (CSV/API-ready format)",
      "Short delivery note for stakeholders",
    ],
    dataset: "Weekly sales per store/product with calendar features.",
  },

  {
    slug: "rag-knowledge-assistant",
    title: "RAG Knowledge Assistant — Citations & Evaluation",
    shortDescription:
      "Build a Retrieval-Augmented Generation assistant with grounded answers, citations, and evaluation routines.",
    tags: ["GenAI", "RAG", "Evaluation", "Safety"],
    level: "Intermediate",
    duration: "3 days",
    format: "Team",
    outcomes: [
      "Design chunking and retrieval strategy",
      "Reduce hallucinations with grounding patterns",
      "Add citations and context control",
      "Evaluate quality and failure modes",
    ],
    stack: [
      "Python",
      "FAISS/Chroma",
      "LangChain (or equivalent)",
      "FastAPI (optional)",
    ],
    deliverables: [
      "RAG pipeline (ingest → index → retrieve → answer)",
      "Evaluation set + scoring rubric",
      "Demo UI or API endpoint",
    ],
    dataset: "A small internal knowledge base (PDF/HTML/Markdown documents).",
  },

  {
    slug: "llm-agent-workflow",
    title: "LLM Agent Workflow — Tool Calling & Reliability",
    shortDescription:
      "Build an agent that calls tools (search/calculator/db) with guardrails and measurable reliability.",
    tags: ["GenAI", "Agents", "Tool Calling", "Reliability"],
    level: "Advanced",
    duration: "3–4 days",
    format: "Team",
    outcomes: [
      "Design agent workflows with tool calling",
      "Add constraints and safety checks",
      "Measure success rate and failure patterns",
      "Optimize latency and cost tradeoffs",
    ],
    stack: ["Python", "Agent framework", "Prompt templates", "Logging/metrics"],
    deliverables: [
      "Agent orchestration code",
      "Tool interfaces + test cases",
      "Reliability report (success rate, failures, improvements)",
    ],
    dataset: "Synthetic + real tasks (FAQ, calculations, structured queries).",
  },

  {
    slug: "computer-vision-defect-detection",
    title: "Computer Vision — Defect Detection (Transfer Learning)",
    shortDescription:
      "Detect defects on images using transfer learning, augmentation, and robust evaluation.",
    tags: ["Deep Learning", "Computer Vision", "CNN", "Transfer Learning"],
    level: "Intermediate",
    duration: "4 days",
    format: "Team",
    outcomes: [
      "Fine-tune a pretrained CNN for classification",
      "Handle imbalance and noisy labels",
      "Use augmentation to improve generalization",
      "Deliver inference-ready outputs",
    ],
    stack: ["PyTorch or Keras", "Python", "Experiment tracking (optional)"],
    deliverables: [
      "Training notebook + checkpoints",
      "Evaluation report with error analysis",
      "Inference script for batch prediction",
    ],
    dataset: "Image dataset with defect/no-defect labels (industrial-style).",
  },

  {
    slug: "nlp-ticket-routing",
    title: "NLP — Support Ticket Routing with Transformers",
    shortDescription:
      "Fine-tune a transformer classifier for ticket categories with strong error analysis and deployment-ready outputs.",
    tags: ["NLP", "Transformers", "Fine-tuning"],
    level: "Intermediate",
    duration: "3 days",
    format: "Individual",
    outcomes: [
      "Fine-tune a transformer for classification",
      "Build confusion-matrix driven error analysis",
      "Manage imbalance and improve robustness",
      "Export a clean inference pipeline",
    ],
    stack: ["Python", "Hugging Face", "PyTorch", "Datasets"],
    deliverables: [
      "Fine-tuned model + evaluation notebook",
      "Error analysis report",
      "Inference pipeline template",
    ],
    dataset:
      "Support tickets labeled by category/priority (text classification).",
  },

  {
    slug: "data-quality-validation-suite",
    title: "Data Quality Suite — Validation & Monitoring Signals",
    shortDescription:
      "Create a validation suite and monitoring signals for a data pipeline feeding ML.",
    tags: ["Data Quality", "Validation", "Monitoring", "MLOps"],
    level: "Beginner",
    duration: "2 days",
    format: "Individual",
    outcomes: [
      "Define business rules and validation checks",
      "Detect anomalies (ranges, nulls, duplicates)",
      "Propose drift signals for key features",
      "Design alert thresholds and escalation rules",
    ],
    stack: ["SQL", "Python", "Great Expectations (optional)"],
    deliverables: [
      "Validation rules + automated checks",
      "Monitoring plan (signals + thresholds)",
      "Short incident playbook",
    ],
    dataset:
      "Tabular dataset with known quality issues (missingness, outliers).",
  },

  {
    slug: "recommendation-system-baseline",
    title: "Recommendation System — Baseline & Offline Evaluation",
    shortDescription:
      "Build a recommendation baseline and evaluate it offline with clear metrics and validation design.",
    tags: ["Recommender Systems", "Ranking", "Evaluation"],
    level: "Advanced",
    duration: "4 days",
    format: "Team",
    outcomes: [
      "Build popularity + similarity baselines",
      "Design train/test splits for implicit feedback",
      "Evaluate with ranking metrics (MAP/NDCG concepts)",
      "Propose production constraints (cold start, latency)",
    ],
    stack: ["Python", "pandas", "NumPy"],
    deliverables: [
      "Baseline recommender + evaluation notebook",
      "Experiment report (metrics + tradeoffs)",
      "Product constraints note (cold start, feedback loop)",
    ],
    dataset: "User–item interactions (clicks, views, ratings) with timestamps.",
  },

  {
    slug: "analytics-dashboard-executive-kpis",
    title: "Executive Analytics Dashboard — KPIs & Storytelling",
    shortDescription:
      "Turn raw data into a dashboard with clear KPIs, drill-downs, and decision-ready insights.",
    tags: ["Analytics", "Dashboard", "Storytelling"],
    level: "Beginner",
    duration: "2–3 days",
    format: "Team",
    outcomes: [
      "Define KPI tree and business questions",
      "Create a clean data model and measures",
      "Design drill-down and narrative insights",
      "Deliver a stakeholder-friendly presentation",
    ],
    stack: ["Power BI or Tableau", "SQL", "Data modeling"],
    deliverables: [
      "Dashboard (KPI + drill-down pages)",
      "Data model documentation",
      "Insights deck (5–8 slides)",
    ],
    dataset:
      "Sales/operations dataset with dimensions and facts (business analytics).",
  },
];
