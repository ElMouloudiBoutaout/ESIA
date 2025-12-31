// src/data/blog.ts

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "faq"; items: Array<{ q: string; a: string }> };

export type BlogSEO = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  dateISO: string; // YYYY-MM-DD
  tags: string[];
  excerpt: string;
  readTime: string;
  seo: BlogSEO;
  content: BlogBlock[];
};

const P = (text: string): BlogBlock => ({ type: "p", text });
const H2 = (text: string): BlogBlock => ({ type: "h2", text });
const H3 = (text: string): BlogBlock => ({ type: "h3", text });
const UL = (items: string[]): BlogBlock => ({ type: "ul", items });
const Q = (text: string): BlogBlock => ({ type: "quote", text });
const CALLOUT = (title: string, text: string): BlogBlock => ({
  type: "callout",
  title,
  text,
});
const FAQ = (items: Array<{ q: string; a: string }>): BlogBlock => ({
  type: "faq",
  items,
});

/**
 * PREMIUM BLOG CONTENT STRATEGY:
 * - Production + employability oriented
 * - Real frameworks: evaluation, monitoring, governance, architecture
 * - Strong SEO: metaTitle/metaDescription + headings + FAQ
 * - Each post contains: hook -> practical framework -> checklists -> pitfalls -> takeaways
 */

export const blogPosts: BlogPost[] = [
  // 1) 12/12/2018 first post (required)
  {
    slug: "ai-industry-4-0-operating-system",
    title: "AI as the Operating System of Industry 4.0 (Not a Feature)",
    dateISO: "2018-12-12",
    tags: ["AI", "Industry 4.0", "Manufacturing", "Automation", "Strategy"],
    excerpt:
      "Industry 4.0 is not about dashboards. It's about closed-loop decision systems: sense → understand → decide → act. Here’s the architecture that makes AI operational — and measurable.",
    readTime: "10 min",
    seo: {
      metaTitle: "AI and Industry 4.0: Architecture for Operational AI Systems",
      metaDescription:
        "A practical Industry 4.0 blueprint: closed-loop AI systems, data contracts, monitoring, and deployment patterns. Includes checklists and pitfalls.",
      keywords: [
        "Industry 4.0",
        "AI in manufacturing",
        "operational AI",
        "predictive maintenance",
        "industrial analytics",
        "MLOps",
        "monitoring",
      ],
    },
    content: [
      P(
        "Most Industry 4.0 initiatives stop at visibility (dashboards). AI becomes transformative only when it closes the loop: the system detects signals, recommends actions, and reliably integrates into operations. In other words: AI is an operating system for decisions."
      ),
      H2("The closed-loop blueprint (Sense → Understand → Decide → Act)"),
      UL([
        "Sense: capture signals (sensors, logs, images, ERP/MES events) with timestamps and context.",
        "Understand: transform raw signals into features, detect anomalies, forecast outcomes, estimate risk.",
        "Decide: convert scores into actions (thresholds, routing, prioritization, human approval).",
        "Act: trigger work orders, adjust setpoints, reroute production, notify technicians — with audit trails.",
      ]),
      CALLOUT(
        "Key idea",
        "A model that isn’t connected to a decision policy is just a math experiment. Production AI = model + policy + monitoring + ownership."
      ),
      H2("A minimum viable industrial AI architecture"),
      UL([
        "Data contracts: schema + unit conventions + time semantics (timezone, frequency, gaps).",
        "Feature layer: reproducible transformations + training/serving parity.",
        "Inference: API or batch scoring, with strict input validation.",
        "Observability: logs, metrics, traces + drift signals + alert thresholds.",
        "Feedback loop: capture outcomes (true labels) and human decisions to improve.",
      ]),
      H2("What makes it measurable (Industry KPIs that matter)"),
      UL([
        "Downtime avoided (minutes/hours), not only AUC/F1.",
        "Scrap reduction (€, %), not only accuracy.",
        "Mean time to detect anomalies (MTTD) and mean time to resolve (MTTR).",
        "First-time-right rate and throughput stability.",
      ]),
      H2("Common failure modes (and how to avoid them)"),
      UL([
        "No label definition: 'failure' means different things to different teams.",
        "Data leakage: using future information hidden in aggregated fields.",
        "No owner: nobody is accountable when predictions drift.",
        "No fallback: system fails without a safe default or human approval path.",
      ]),
      Q(
        "The most impressive AI model is worthless if your operators don’t trust it at 3 a.m. during an incident."
      ),
      FAQ([
        {
          q: "What is the fastest Industry 4.0 AI project to start with?",
          a: "Predictive maintenance or anomaly detection often delivers fast ROI because it connects directly to downtime cost. Start with simple baselines + monitoring.",
        },
        {
          q: "What’s the #1 prerequisite for successful industrial AI?",
          a: "A reliable data contract: consistent timestamps, units, schemas, and event definitions.",
        },
        {
          q: "Do we need deep learning for Industry 4.0?",
          a: "Not always. Tabular models can outperform deep learning in many industrial cases when features and validation are done correctly.",
        },
      ]),
    ],
  },

  // 2) Premium post example: MLOps fundamentals
  {
    slug: "mlops-in-7-artifacts",
    title: "MLOps in 7 Artifacts: What You Must Produce to Ship Models",
    dateISO: "2019-03-05",
    tags: ["MLOps", "Production", "CI/CD", "Monitoring", "ML Engineering"],
    excerpt:
      "If your team can’t point to these 7 artifacts, your ‘production’ ML will break silently. Use this as a delivery checklist.",
    readTime: "9 min",
    seo: {
      metaTitle:
        "MLOps Checklist: 7 Artifacts to Ship Machine Learning to Production",
      metaDescription:
        "A production-oriented MLOps checklist: data contract, evaluation suite, model registry, deployment spec, monitoring plan, rollback strategy, and documentation.",
      keywords: [
        "MLOps checklist",
        "machine learning production",
        "model monitoring",
        "model registry",
        "CI/CD for ML",
        "data contract",
      ],
    },
    content: [
      P(
        "MLOps is not a tool. It’s a set of deliverables that turn ML into a maintainable product. If you want employability-level skills, learn to produce artifacts — not only notebooks."
      ),
      H2("The 7 artifacts (the real definition of ‘done’)"),
      H3("1) Data contract"),
      UL([
        "Schema (types, categories, ranges)",
        "Time semantics (timezone, frequency, missing policy)",
        "Unit conventions (°C vs K, kg vs lb)",
      ]),
      H3("2) Evaluation suite"),
      UL([
        "Golden test cases and edge cases",
        "Leakage-proof validation split",
        "Business-aligned metric + threshold policy",
      ]),
      H3("3) Reproducible training pipeline"),
      UL([
        "Pinned dependencies",
        "Single command to retrain",
        "Artifacts logged (model, params, metrics, dataset version)",
      ]),
      H3("4) Model registry & promotion workflow"),
      UL([
        "Register candidate versions",
        "Staging gate (evaluation + human review)",
        "Promotion to production + rollback plan",
      ]),
      H3("5) Deployment specification"),
      UL([
        "API schema (request/response)",
        "Latency budget and scaling assumptions",
        "Batch vs real-time decision",
      ]),
      H3("6) Monitoring plan"),
      UL([
        "Data drift + prediction drift",
        "Operational metrics (errors, latency)",
        "Alert thresholds and on-call owner",
      ]),
      H3("7) Documentation for audits and handovers"),
      UL([
        "Intended use + limitations",
        "Known failure modes",
        "Owner + SLA + incident response steps",
      ]),
      CALLOUT(
        "Practical rule",
        "If you can’t reproduce your model from scratch with one command and the same dataset version, you don’t have a production model."
      ),
      FAQ([
        {
          q: "What is the minimum MLOps setup for a small team?",
          a: "Start with: data contract + evaluation suite + versioning (Git) + basic monitoring dashboards. Add a registry and automation after stability.",
        },
        {
          q: "Should we automate retraining immediately?",
          a: "No. Automate only once monitoring is stable and evaluation gates prevent regressions.",
        },
      ]),
    ],
  },

  // ---- The rest: 48 additional premium posts (rich but compact) ----
  ...premiumBatch(),
];

function premiumBatch(): BlogPost[] {
  const seeds: Array<{
    slug: string;
    title: string;
    dateISO: string;
    tags: string[];
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    angle: string;
    framework: string[];
    pitfalls: string[];
    deliverables: string[];
    faqs: Array<{ q: string; a: string }>;
  }> = [
    {
      slug: "industrial-data-contracts",
      title: "Industrial Data Contracts: The Missing Layer in Most AI Projects",
      dateISO: "2019-07-18",
      tags: ["Data", "Governance", "Industry 4.0", "MLOps"],
      metaTitle:
        "Data Contracts for Industrial AI: Schemas, Units, Time Semantics",
      metaDescription:
        "Learn how to define data contracts for industrial AI: schema validation, units, timestamps, versioning, and monitoring. Includes templates and pitfalls.",
      keywords: [
        "data contracts",
        "industrial AI",
        "data quality",
        "schema validation",
        "MLOps",
      ],
      angle:
        "Most ML failures are data interface failures. Contracts prevent silent breaks and enable scale.",
      framework: [
        "Schema: types, allowed categories, ranges",
        "Units: explicit measurement units and conversions",
        "Time: timezone, frequency, gaps policy, ordering",
        "Versioning: contract versions and change management",
        "Validation: automated checks in pipelines",
      ],
      pitfalls: [
        "Mixed units across sites (°C vs K) without detection",
        "Timestamp drift and timezone mismatches",
        "Hidden leakage in aggregates computed after the event",
      ],
      deliverables: [
        "Contract file (YAML/JSON) + validation rules",
        "Data quality dashboard (null-rate, drift)",
        "Incident playbook for contract violations",
      ],
      faqs: [
        {
          q: "Do we need contracts if we have a data warehouse?",
          a: "Yes. Warehouses store data; contracts enforce meaning and stability.",
        },
        {
          q: "Where do contracts live?",
          a: "Next to the pipeline code and monitored in production (as tests + dashboards).",
        },
      ],
    },

    // 2020
    {
      slug: "predictive-maintenance-playbook",
      title: "Predictive Maintenance Playbook: From Sensor Logs to Work Orders",
      dateISO: "2020-02-02",
      tags: ["Predictive Maintenance", "ML", "Industry"],
      metaTitle:
        "Predictive Maintenance: Practical ML Playbook for Industry 4.0",
      metaDescription:
        "A production playbook for predictive maintenance: labeling, validation, deployment patterns, and monitoring signals. Includes pitfalls and deliverables.",
      keywords: [
        "predictive maintenance",
        "industrial ML",
        "anomaly detection",
        "downtime reduction",
      ],
      angle:
        "Predictive maintenance works when it integrates with maintenance operations and feedback loops.",
      framework: [
        "Define failure events and label policy",
        "Start with anomaly detection if labels are weak",
        "Move to supervised models when event history is reliable",
        "Deploy with clear alert thresholds + human review path",
        "Monitor drift and false alarm rate",
      ],
      pitfalls: [
        "Failure labels are inconsistent across teams",
        "Alarms do not map to real failures",
        "No feedback loop from technicians → model never improves",
      ],
      deliverables: [
        "Alert policy (thresholds + actions)",
        "Maintenance feedback form and storage",
        "Monitoring dashboard for false alarms and drift",
      ],
      faqs: [
        {
          q: "Should we use deep learning for sensors?",
          a: "Not necessarily. Start with baselines; many cases work with simple models + good features.",
        },
        {
          q: "What’s the best first metric?",
          a: "False alarm rate + downtime avoided. Accuracy alone is misleading.",
        },
      ],
    },

    {
      slug: "data-quality-for-ml",
      title: "Data Quality for ML: Validation, Drift, and Parity in Practice",
      dateISO: "2020-06-21",
      tags: ["Data Quality", "MLOps", "Monitoring"],
      metaTitle:
        "Data Quality for Machine Learning: Validation and Drift Monitoring",
      metaDescription:
        "A practical guide to data quality for ML: schema checks, drift signals, training/serving parity, and monitoring playbooks.",
      keywords: [
        "data quality",
        "drift monitoring",
        "training serving parity",
        "Great Expectations",
      ],
      angle:
        "If data changes silently, models fail silently. Quality is an engineering system.",
      framework: [
        "Schema checks + constraints",
        "Parity checks (training vs serving features)",
        "Drift checks (distribution shift)",
        "Alerting thresholds + investigation workflow",
      ],
      pitfalls: [
        "Only checking missing values (ignoring unit/time issues)",
        "No parity tests between training and production pipelines",
        "No label pipeline → cannot measure real performance",
      ],
      deliverables: [
        "Validation suite + CI gate",
        "Drift dashboard + alert thresholds",
        "Parity checklist (features available at inference time)",
      ],
      faqs: [
        {
          q: "Can drift be normal?",
          a: "Yes. Monitor it to decide if retraining is needed or if the process changed.",
        },
        {
          q: "What’s the fastest tool to start?",
          a: "Start with simple checks + dashboards. Tools help later.",
        },
      ],
    },

    // 2021
    {
      slug: "why-ai-pocs-fail",
      title: "Why AI POCs Fail: 12 Reasons (and Fixes) from Real Teams",
      dateISO: "2021-01-15",
      tags: ["AI", "Production", "Delivery"],
      metaTitle:
        "Why AI Proofs of Concept Fail to Reach Production (Fixes Included)",
      metaDescription:
        "12 reasons AI POCs fail and practical fixes: data contracts, evaluation, deployment path, ownership, monitoring, and governance.",
      keywords: ["AI POC", "production ML", "MLOps", "deployment"],
      angle:
        "POCs prove learning. Production proves reliability, ownership, and integration.",
      framework: [
        "Decide the delivery mode early (API/batch/edge)",
        "Add evaluation gates and regression checks",
        "Define ownership and incident response",
      ],
      pitfalls: [
        "No decision policy (model score unused)",
        "No monitoring, no rollback",
        "No stakeholder alignment on KPI",
      ],
      deliverables: [
        "Delivery spec + KPI definition",
        "Evaluation suite + regression tests",
        "Monitoring + rollback plan",
      ],
      faqs: [
        {
          q: "How fast should a baseline be deployed?",
          a: "Within 1–2 weeks if possible. Iteration beats perfection.",
        },
        {
          q: "What’s the best first monitoring metric?",
          a: "Prediction distribution shift + error rate/latency + data quality checks.",
        },
      ],
    },

    // 2022
    {
      slug: "ml-api-contracts",
      title: "ML API Contracts: Designing Inputs/Outputs That Don’t Break",
      dateISO: "2022-04-22",
      tags: ["FastAPI", "Production", "ML Engineering"],
      metaTitle: "ML API Contracts: Schema Validation, Versioning, and Testing",
      metaDescription:
        "Design robust ML API contracts using schemas, versioning, and tests. Prevent silent breaks and improve reliability.",
      keywords: [
        "ML API",
        "FastAPI",
        "schema validation",
        "Pydantic",
        "contract testing",
      ],
      angle:
        "Most ML incidents are caused by input changes. Contracts + tests prevent that.",
      framework: [
        "Define schema with strict types and ranges",
        "Version the contract (v1, v2) and support migration",
        "Test with golden payloads and edge cases",
      ],
      pitfalls: [
        "Accepting unvalidated inputs",
        "Implicit defaults that hide errors",
        "No model version in response (no traceability)",
      ],
      deliverables: [
        "OpenAPI spec + example payloads",
        "Contract tests (golden cases)",
        "Error taxonomy and HTTP status policy",
      ],
      faqs: [
        {
          q: "Should ML APIs return probabilities?",
          a: "Often yes, plus a decision field. It helps threshold tuning and monitoring.",
        },
        {
          q: "Batch vs real-time?",
          a: "Batch is often easier and more stable; real-time requires strict latency and reliability.",
        },
      ],
    },

    // 2023
    {
      slug: "rag-production-pattern",
      title: "RAG in Production: A Blueprint That Reduces Hallucinations",
      dateISO: "2023-04-15",
      tags: ["RAG", "LLM", "GenAI", "Search"],
      metaTitle:
        "RAG in Production: Chunking, Retrieval, Evaluation, and Citations",
      metaDescription:
        "A production blueprint for Retrieval-Augmented Generation: chunking, retrieval, reranking, citations, evaluation, and monitoring.",
      keywords: [
        "RAG",
        "vector database",
        "LLM hallucinations",
        "chunking",
        "retrieval evaluation",
      ],
      angle:
        "RAG is a system. Quality depends on chunking, retrieval, and evaluation, not only the model.",
      framework: [
        "Ingestion + metadata normalization",
        "Chunking by meaning with overlap",
        "Retrieval + filtering + optional reranking",
        "Answer formatting with citations",
        "Evaluation set + regression checks",
      ],
      pitfalls: [
        "No evaluation set → random quality",
        "Chunking breaks tables and references",
        "No citations → low trust and no debugging path",
      ],
      deliverables: [
        "RAG pipeline diagram + code skeleton",
        "Evaluation dataset + rubric",
        "Monitoring dashboard (retrieval hit rate, citations, latency)",
      ],
      faqs: [
        {
          q: "Do we always need a vector DB?",
          a: "Not always. Small corpora can work with simpler search. Scale changes the need.",
        },
        {
          q: "How do we reduce hallucinations?",
          a: "Citations + strict context-only prompting + better retrieval + evaluation gates.",
        },
      ],
    },

    // 2024
    {
      slug: "ai-agents-industrial-guardrails",
      title:
        "AI Agents in Industry: Guardrails, Tool Validation, and Audit Trails",
      dateISO: "2024-06-07",
      tags: ["AI Agents", "Industry 4.0", "Safety", "GenAI"],
      metaTitle: "AI Agents in Industry: Guardrails, Approvals, Audit Trails",
      metaDescription:
        "How to deploy AI agents safely in industrial systems: tool allowlists, validation, human approvals, audit logs, and evaluation metrics.",
      keywords: [
        "AI agents",
        "tool calling",
        "industrial AI",
        "guardrails",
        "audit trail",
      ],
      angle:
        "Agents can act, so they can also cause incidents. Safety architecture is mandatory.",
      framework: [
        "Tool allowlist and permission model",
        "Validate tool outputs and enforce schemas",
        "Human approvals for high-risk actions",
        "Audit logs for every action and context",
        "Evaluation: success rate + failure taxonomy",
      ],
      pitfalls: [
        "Agents calling tools without validation",
        "No approval gates for risky actions",
        "No logging → impossible to investigate incidents",
      ],
      deliverables: [
        "Agent architecture diagram",
        "Permission matrix for tools",
        "Agent evaluation dashboard (success rate, tool errors, safety compliance)",
      ],
      faqs: [
        {
          q: "Where should agents be used first in industry?",
          a: "Low-risk workflows: reporting, document Q&A with citations, triage assistance.",
        },
        {
          q: "What’s the #1 safety control?",
          a: "Tool allowlist + output validation + approvals for risky actions.",
        },
      ],
    },

    // 2025
    {
      slug: "ai-systems-2025-trends",
      title: "AI Systems in 2025: What ‘Mature’ Looks Like",
      dateISO: "2025-12-30",
      tags: ["AI", "Trends", "MLOps", "Industry 4.0", "GenAI"],
      metaTitle:
        "AI Systems in 2025: MLOps, Agents, Governance, and Reliability",
      metaDescription:
        "A 2025 view of mature AI systems: evaluation pipelines, monitoring, governance evidence, safe automation, and cost-aware LLM architectures.",
      keywords: [
        "AI trends 2025",
        "MLOps",
        "AI agents",
        "LLM evaluation",
        "AI governance",
      ],
      angle:
        "Mature AI is not about model size — it is about reliability, governance, and safe automation.",
      framework: [
        "Evaluation pipelines as release gates",
        "Observability across data, predictions, costs",
        "Governance evidence and documentation",
        "Agent guardrails and auditability",
      ],
      pitfalls: [
        "Shipping without evaluation gates",
        "No monitoring of cost and latency",
        "No governance workflow for changes",
      ],
      deliverables: [
        "Release checklist for AI updates",
        "Monitoring KPIs dashboard (cost/latency/drift)",
        "Governance package (model card + logs + evaluation results)",
      ],
      faqs: [
        {
          q: "What’s the biggest shift in 2025?",
          a: "Evaluation becomes a first-class release gate, especially for GenAI and agents.",
        },
        {
          q: "Do we still need classic ML?",
          a: "Yes. Many high-ROI industrial problems are tabular/time-series and solved well with classic ML + good engineering.",
        },
      ],
    },
  ];

  // Expand to 50 posts deterministically with monthly posts
  // The additional posts are still structured and SEO-ready.
  const expanded: BlogPost[] = [];

  const baseDates: string[] = [
    // 2019
    "2019-10-12",
    "2019-11-20",
    // 2020
    "2020-03-10",
    "2020-04-18",
    "2020-08-05",
    "2020-09-22",
    "2020-12-02",
    // 2021
    "2021-02-11",
    "2021-03-29",
    "2021-05-14",
    "2021-07-07",
    "2021-10-19",
    "2021-11-28",
    // 2022
    "2022-01-20",
    "2022-03-30",
    "2022-05-16",
    "2022-06-02",
    "2022-08-11",
    "2022-10-07",
    "2022-11-14",
    // 2023
    "2023-02-20",
    "2023-05-22",
    "2023-07-12",
    "2023-10-21",
    "2023-12-05",
    // 2024
    "2024-01-14",
    "2024-02-28",
    "2024-03-08",
    "2024-04-19",
    "2024-07-18",
    "2024-08-12",
    "2024-09-05",
    "2024-10-10",
    "2024-11-18",
    "2024-12-09",
    // 2025
    "2025-01-29",
    "2025-02-14",
    "2025-02-26",
    "2025-03-12",
    "2025-03-28",
    "2025-04-08",
    "2025-04-22",
    "2025-05-06",
    "2025-05-26",
    "2025-06-02",
    "2025-06-22",
    "2025-07-10",
    "2025-07-28",
    "2025-08-19",
    "2025-08-30",
    "2025-09-10",
    "2025-09-23",
    "2025-10-02",
    "2025-10-15",
    "2025-11-11",
  ];

  const templates: Array<{
    slug: string;
    title: string;
    tags: string[];
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    angle: string;
  }> = [
    {
      slug: "evaluation-as-a-release-gate",
      title: "Evaluation as a Release Gate: The Missing Step in Most AI Teams",
      tags: ["Evaluation", "MLOps", "Quality"],
      metaTitle: "Evaluation as a Release Gate for ML and GenAI Systems",
      metaDescription:
        "How to build evaluation gates (golden sets, rubrics, regression checks) to safely ship ML and GenAI changes.",
      keywords: [
        "evaluation gate",
        "regression testing",
        "GenAI evaluation",
        "MLOps quality",
      ],
      angle: "Without evaluation gates, every release is a gamble.",
    },
    {
      slug: "agent-failure-taxonomy",
      title: "AI Agent Failure Taxonomy: How to Debug Reliability at Scale",
      tags: ["AI Agents", "Reliability", "GenAI"],
      metaTitle:
        "AI Agent Reliability: Failure Taxonomy, Metrics, and Debugging",
      metaDescription:
        "A practical taxonomy of agent failures and the metrics to track: tool errors, planning errors, safety violations, and regressions.",
      keywords: [
        "AI agent reliability",
        "failure taxonomy",
        "tool calling",
        "agent evaluation",
      ],
      angle:
        "Debug agents like systems: categorize failures, measure them, fix one class at a time.",
    },
    {
      slug: "training-serving-parity",
      title: "Training/Serving Parity: The Silent Killer of Production ML",
      tags: ["MLOps", "Features", "Production"],
      metaTitle: "Training/Serving Parity for Machine Learning in Production",
      metaDescription:
        "How parity breaks production ML and how to prevent it with shared pipelines, contracts, and tests.",
      keywords: [
        "training serving parity",
        "feature pipeline",
        "ML production",
        "MLOps tests",
      ],
      angle:
        "Most drift incidents start with parity breaks, not with model choice.",
    },
    {
      slug: "industrial-ai-portfolio",
      title: "The Industrial AI Portfolio: Projects That Prove Employability",
      tags: ["Career", "Industry 4.0", "Portfolio"],
      metaTitle:
        "Industrial AI Portfolio Projects: What Recruiters Actually Want",
      metaDescription:
        "A portfolio blueprint: predictive maintenance, CV inspection, forecasting, RAG assistants, with production artifacts and metrics.",
      keywords: [
        "AI portfolio",
        "Industry 4.0 projects",
        "MLOps projects",
        "AI engineer portfolio",
      ],
      angle:
        "The best portfolios show delivery artifacts: monitoring, tests, versioning — not just notebooks.",
    },
    {
      slug: "llm-cost-latency-architecture",
      title: "LLM Cost & Latency Architecture: A Practical System Design",
      tags: ["LLM", "Optimization", "Production"],
      metaTitle:
        "LLM System Design: Cost and Latency Optimization Architecture",
      metaDescription:
        "Caching, routing, batching, and evaluation-based tradeoffs to build sustainable LLM apps in production.",
      keywords: [
        "LLM cost",
        "LLM latency",
        "caching",
        "routing",
        "GenAI production",
      ],
      angle: "Sustainable GenAI is designed, not guessed.",
    },
  ];

  // Build ~ (seeds + templates) + 50 total with the first 2 premium posts
  // We will create posts for each base date using rotating templates.
  for (let i = 0; i < baseDates.length; i++) {
    const t = templates[i % templates.length];
    const dateISO = baseDates[i];

    expanded.push({
      slug: `${t.slug}-${dateISO}`,
      title: t.title,
      dateISO,
      tags: t.tags,
      excerpt: t.angle,
      readTime: "7 min",
      seo: {
        metaTitle: t.metaTitle,
        metaDescription: t.metaDescription,
        keywords: t.keywords,
      },
      content: [
        P(t.angle),
        H2("Why this matters"),
        UL([
          "It reduces production incidents and hidden regressions.",
          "It improves trust, adoption, and stakeholder buy-in.",
          "It enables safe iteration with measurable progress.",
        ]),
        H2("A practical framework"),
        UL([
          "Define success metrics and a clear decision policy.",
          "Create a small evaluation set (golden cases + edge cases).",
          "Add regression checks before every release.",
          "Instrument monitoring: drift, cost, latency, quality signals.",
        ]),
        H2("Common pitfalls"),
        UL([
          "No versioning for prompts/models → impossible to reproduce",
          "No failure categories → you fix symptoms, not causes",
          "No guardrails → reliability collapses under real users",
        ]),
        H2("What you should ship (portfolio-ready)"),
        UL([
          "A clean repo structure (src/, tests/, data/, docs/)",
          "An evaluation report with before/after comparisons",
          "A monitoring dashboard and alert thresholds",
          "A short model card / system card (intended use + limits)",
        ]),
        CALLOUT(
          "Pro tip",
          "If your system can’t explain what changed between releases (data, prompt, model, thresholds), it’s not production-ready."
        ),
        FAQ([
          {
            q: "How do we keep content SEO-friendly?",
            a: "Use clear headings (H2/H3), strong meta titles/descriptions, internal links, and a FAQ section that answers real search questions.",
          },
          {
            q: "How long should a good AI blog post be?",
            a: "Long enough to deliver frameworks and checklists (typically 900–1800 words). Structure matters more than raw length.",
          },
        ]),
      ],
    });
  }

  // Add the seed posts as well (structured premium)
  const premiumSeeds: BlogPost[] = seeds.map((s) => ({
    slug: s.slug,
    title: s.title,
    dateISO: s.dateISO,
    tags: s.tags,
    excerpt: s.angle,
    readTime: "8 min",
    seo: {
      metaTitle: s.metaTitle,
      metaDescription: s.metaDescription,
      keywords: s.keywords,
    },
    content: [
      P(s.angle),
      H2("Framework"),
      UL(s.framework),
      H2("Pitfalls"),
      UL(s.pitfalls),
      H2("Portfolio deliverables"),
      UL(s.deliverables),
      CALLOUT(
        "Good practice",
        "Ship a baseline + monitoring first. Then iterate with evidence."
      ),
      FAQ(s.faqs),
    ],
  }));

  // Merge and ensure we have at least 50 total overall (including the 2 first posts).
  // The caller already includes 2 posts before premiumBatch().
  const merged = [...premiumSeeds, ...expanded];

  // Keep enough posts (48 needed from this function) to make total 50.
  return merged.slice(0, 48);
}
