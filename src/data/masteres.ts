export type MasterModule = {
  title: string;
  duration?: string; // ex: "2–3 weeks"
  description?: string; // 1-2 lignes d'intro du module
  content: string[]; // contenu détaillé du module (bullets)
  skills: string[]; // skills obtenues après le module
};

export type DetailedProgram = {
  headline?: string; // petit texte d’intro avant les modules
  modules: MasterModule[];
};

export type MasterProgram = {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  points?: string[];
  format?: string[];
  tools?: string[];
  programme?: string[]; // ✅ on garde pour ne pas casser l’existant
  programDetailed?: DetailedProgram; // ✅ nouveau : programme détaillé
};

export const masteres: MasterProgram[] = [
  {
    slug: "data-scientist-4-0",
    title: "Data Scientist 4.0 & Industrial Data Analytics",
    subtitle: "End-to-end ML + GenAI, from data to production systems",
    description:
      "Data Scientist 4.0 is a modern, applied track built for people who want to ship real AI products. You’ll learn the full lifecycle: data preparation, modeling (ML & deep learning), GenAI patterns, evaluation, deployment, monitoring, and iteration with production constraints.",
    points: [
      "Build reliable ML pipelines with strong data quality foundations",
      "Train, evaluate, and debug models using robust methodology",
      "Apply GenAI patterns (RAG, agents, guardrails) with measurable KPIs",
      "Deploy production services (FastAPI), containers (Docker) and CI/CD basics",
      "Deliver a portfolio of end-to-end projects with documentation",
    ],
    format: [
      "Flexible: 4-week intensive or 10-week part-time format",
      "Weekly deliverables + checkpoints",
      "Portfolio-based evaluation",
      "Remote-friendly (worldwide cohorts)",
    ],
    tools: [
      "Python, Pandas, NumPy",
      "scikit-learn, PyTorch or TensorFlow",
      "FastAPI, Docker",
      "Git/GitHub, CI/CD fundamentals",
      "MLflow basics (tracking & versioning)",
      "Vector DB concepts (RAG)",
    ],
    programme: [
      "Module 1 — Data foundations: quality checks, leakage, reproducibility, feature engineering",
      "Module 2 — Supervised ML: classification/regression, metrics, validation, error analysis",
      "Module 3 — Deep Learning: neural nets, training strategy, overfitting control",
      "Module 4 — GenAI: RAG fundamentals, prompt strategy, evaluation, safety/guardrails",
      "Module 5 — Deployment: FastAPI endpoints, Docker image, environment management",
      "Module 6 — MLOps basics: tracking, model versioning, monitoring signals, iteration",
      "Capstone — End-to-end project with demo + documentation + portfolio deliverable",
    ],

    programDetailed: {
      headline:
        "A production-first curriculum aligned with today’s hiring standards: ML systems, deployment, monitoring, and GenAI (RAG) patterns used in real products.",
      modules: [
        {
          title: "Module 1 — Data Foundations & Quality",
          duration: "2–3 weeks",
          description:
            "Build clean, reliable datasets and prevent downstream quality issues.",
          content: [
            "Advanced pandas patterns (joins, reshaping, performance basics)",
            "Data quality checks (missingness, outliers, duplicates, schema validation)",
            "SQL for analytics (CTE, window functions, query design basics)",
            "Leakage detection and reproducible dataset building",
            "Project structure: src/, configs, notebooks policy, reproducibility habits",
          ],
          skills: [
            "Data cleaning at scale",
            "SQL analytics foundations",
            "Data quality & validation mindset",
            "Leakage prevention",
            "Reproducible project structure",
          ],
        },
        {
          title: "Module 2 — Statistics, Experimentation & Decision Metrics",
          duration: "2 weeks",
          description:
            "Make decisions with correct metrics and avoid common statistical traps.",
          content: [
            "EDA framework: distributions, correlations, target leakage checklist",
            "Practical statistics: confidence intervals, hypothesis testing, effect size",
            "A/B testing basics and pitfalls (power, bias, peeking, seasonality)",
            "Business metrics vs model metrics: aligning success criteria",
          ],
          skills: [
            "Statistical reasoning",
            "Experiment design basics",
            "Metric selection & trade-offs",
            "Stakeholder-ready insights",
          ],
        },
        {
          title: "Module 3 — Supervised Machine Learning (Production Mindset)",
          duration: "4 weeks",
          description:
            "Train strong baselines, optimize, and explain models reliably.",
          content: [
            "Regression & classification pipelines (preprocessing, CV, baselines)",
            "Evaluation beyond accuracy: ROC-AUC, PR-AUC, calibration, thresholding",
            "Error analysis: slices, segments, stability checks",
            "Feature engineering: categorical, time-based, aggregation features",
            "Explainability basics: SHAP intuition + communicating model behavior",
          ],
          skills: [
            "End-to-end ML pipeline design",
            "Robust evaluation methodology",
            "Error analysis & debugging",
            "Feature engineering",
            "Explainability storytelling",
          ],
        },
        {
          title: "Module 4 — Deep Learning Essentials",
          duration: "2–3 weeks",
          description:
            "Understand neural networks enough to use them correctly in real projects.",
          content: [
            "Neural network fundamentals: forward/backprop intuition",
            "Training strategy: learning rate, batch size, regularization, early stopping",
            "Overfitting control and practical troubleshooting",
            "When to use deep learning vs classical ML (cost/benefit)",
          ],
          skills: [
            "Deep learning fundamentals",
            "Training & tuning discipline",
            "Overfitting control",
            "Model selection judgment",
          ],
        },
        {
          title:
            "Module 5 — GenAI in Production (RAG + Evaluation + Guardrails)",
          duration: "2–3 weeks",
          description:
            "Build ‘chat-with-your-data’ systems with evaluation and reliability.",
          content: [
            "Prompting patterns and structured outputs (schemas, constraints)",
            "Embeddings + vector search fundamentals (RAG architecture)",
            "Chunking, retrieval strategy, citations, freshness considerations",
            "Evaluation basics: groundedness, hallucinations, test sets, regression tests",
            "Safety basics: guardrails mindset, policy constraints, failure modes",
          ],
          skills: [
            "RAG architecture understanding",
            "Vector search reasoning",
            "LLM evaluation mindset",
            "Reliability & guardrails basics",
          ],
        },
        {
          title: "Module 6 — Deployment & MLOps Basics",
          duration: "4–5 weeks",
          description:
            "Ship models as real services: versioning, CI/CD basics, monitoring signals.",
          content: [
            "Serving: FastAPI inference endpoints, input validation, payload schemas",
            "Docker basics for ML services (images, env configs, reproducibility)",
            "MLflow patterns: tracking runs, artifacts, model versioning basics",
            "CI/CD fundamentals: lint/tests, basic pipeline concepts, release discipline",
            "Monitoring signals: performance degradation, drift awareness, feedback loop",
          ],
          skills: [
            "FastAPI model serving",
            "Dockerized deployment",
            "MLflow tracking basics",
            "CI/CD discipline basics",
            "Monitoring & drift awareness",
          ],
        },
        {
          title: "Capstone — End-to-End AI Product",
          duration: "3–4 weeks",
          description:
            "Deliver a portfolio-grade product with demo, docs, and deployment.",
          content: [
            "Problem framing: objectives, constraints, success metrics",
            "Data pipeline + modeling + evaluation + error analysis",
            "Deploy an API + containerize + basic release workflow",
            "Documentation, demo storytelling, and portfolio packaging",
          ],
          skills: [
            "End-to-end delivery",
            "Product thinking",
            "Production deployment workflow",
            "Portfolio-ready communication",
          ],
        },
      ],
    },
  },

  {
    slug: "industrial-data-analytics",
    title: "Industrial Data Analytics",
    subtitle: "Applied analytics for factories, supply chains, and operations",
    description:
      "Industrial Data Analytics focuses on real operational constraints: messy data, complex processes, and decision-making under uncertainty. You’ll learn analytics patterns used in industry: KPI frameworks, root-cause analysis, forecasting, anomaly detection, and optimization-oriented reporting.",
    points: [
      "Model industrial processes and define actionable KPIs",
      "Build analytics workflows from raw data to decision dashboards",
      "Forecast demand/throughput and detect anomalies",
      "Explain insights to operations stakeholders with clear storytelling",
      "Deliver production-grade reporting assets and data products",
    ],
    format: [
      "Project-driven learning with realistic case studies",
      "Deliverables: dashboards, reports, notebooks, and documented analyses",
      "Remote-friendly (worldwide cohorts)",
    ],
    tools: [
      "SQL, Python (Pandas)",
      "Power BI / Tableau fundamentals (optional)",
      "Time-series basics (forecasting)",
      "Data quality checks & monitoring mindset",
      "Git fundamentals for analytics projects",
    ],
    programme: [
      "Module 1 — Industrial data: sources, sensors/ERP-style data, cleaning & validation",
      "Module 2 — KPI systems: throughput, yield, scrap, downtime, OEE-style thinking",
      "Module 3 — Diagnostic analytics: segmentation, root-cause analysis, statistical reasoning",
      "Module 4 — Time series: forecasting, seasonality, baseline models + evaluation",
      "Module 5 — Anomaly detection: rules, statistical baselines, practical thresholds",
      "Module 6 — Reporting & storytelling: stakeholder-ready dashboards & narratives",
      "Capstone — Industrial analytics case: end-to-end report + dashboard + recommendations",
    ],
    programDetailed: {
      headline:
        "A job-aligned curriculum for operations & industry: KPI systems, root-cause analysis, forecasting, anomaly detection and stakeholder-ready reporting.",
      modules: [
        {
          title:
            "Module 1 — Industrial Data Foundations (ERP, Sensors, Operations)",
          duration: "2–3 weeks",
          description:
            "Understand industrial data sources and build reliable datasets from messy, real-world inputs.",
          content: [
            "Industrial data landscape: ERP, MES, CMMS, IoT sensors, logs",
            "Data cleaning for operations: missingness, duplicates, inconsistent units",
            "Validation checks: schema, ranges, business rules, reconciliation",
            "Data modeling basics: facts/dimensions for operational reporting",
            "Documenting assumptions and building reproducible analytics notebooks",
          ],
          skills: [
            "Industrial data understanding",
            "Data quality & validation",
            "Operational data modeling",
            "Reproducible analytics workflow",
          ],
        },
        {
          title:
            "Module 2 — KPI Systems (OEE-style thinking & operational metrics)",
          duration: "2 weeks",
          description:
            "Design KPI frameworks that actually drive decisions in operations.",
          content: [
            "KPI design: leading vs lagging, actionable vs vanity metrics",
            "Throughput, yield, scrap, downtime, cycle time, lead time",
            "OEE-style thinking (availability, performance, quality) — practical usage",
            "Metric definitions, data contracts, and consistent calculations",
            "Building KPI scorecards and operational review dashboards",
          ],
          skills: [
            "KPI design & governance basics",
            "Operational metrics literacy",
            "Scorecards & reviews",
            "Decision-oriented reporting",
          ],
        },
        {
          title: "Module 3 — Diagnostic Analytics (Root-cause & segmentation)",
          duration: "2–3 weeks",
          description:
            "Move from ‘what happened’ to ‘why it happened’ with rigorous analysis.",
          content: [
            "Segmentation: by line, shift, product, supplier, machine, operator",
            "Pareto & contribution analysis (80/20) for losses & defects",
            "Root-cause workflow: hypotheses, tests, evidence tracking",
            "Practical statistics for ops: distributions, confidence, variability",
            "Communicating findings: narratives that drive action plans",
          ],
          skills: [
            "Root-cause analysis",
            "Segmentation analytics",
            "Operational statistics",
            "Stakeholder storytelling",
          ],
        },
        {
          title: "Module 4 — Forecasting & Capacity Planning",
          duration: "2–3 weeks",
          description:
            "Forecast demand/throughput and evaluate models with business constraints.",
          content: [
            "Time-series fundamentals: trend/seasonality/events",
            "Baselines first: moving average, seasonal naive",
            "Backtesting and evaluation: MAPE/SMAPE + cost of errors",
            "Forecasting for planning: capacity, inventory, staffing signals",
            "Communicating uncertainty: intervals and planning recommendations",
          ],
          skills: [
            "Forecasting workflows",
            "Backtesting discipline",
            "Planning insights",
            "Uncertainty communication",
          ],
        },
        {
          title: "Module 5 — Anomaly Detection & Operational Alerts",
          duration: "2 weeks",
          description:
            "Detect abnormal behavior and design alerting that avoids noise.",
          content: [
            "Rule-based detection vs statistical baselines",
            "Thresholding strategies: dynamic thresholds, seasonality-aware rules",
            "False positives/negatives trade-offs + alert fatigue prevention",
            "Incident context: what to log, what to escalate, what to ignore",
            "Monitoring mindset: drift, changes, and process shifts",
          ],
          skills: [
            "Anomaly detection patterns",
            "Alerting strategy",
            "Signal-to-noise thinking",
            "Monitoring mindset",
          ],
        },
        {
          title: "Module 6 — Reporting & Storytelling for Operations",
          duration: "2 weeks",
          description:
            "Deliver dashboards and reports that support daily/weekly operational decisions.",
          content: [
            "Dashboard structure: executive view vs shop-floor view",
            "Design for actions: targets, exceptions, drill-down, root-cause paths",
            "Narrative reporting: what changed, why, what to do next",
            "Data governance basics: metric definitions, ownership, refresh cadence",
            "Packaging deliverables: dashboard + analysis memo + recommendations",
          ],
          skills: [
            "Operational dashboard design",
            "Decision storytelling",
            "KPI governance basics",
            "Deliverable packaging",
          ],
        },
        {
          title: "Capstone — Industrial Analytics Case (End-to-End)",
          duration: "3–4 weeks",
          description:
            "Solve a realistic industrial problem and deliver a complete analytics package.",
          content: [
            "Problem framing + operational KPI selection",
            "Data cleaning + validation + model/report building",
            "Forecasting or anomaly detection applied to the case",
            "Dashboard + executive summary + recommended action plan",
          ],
          skills: [
            "End-to-end delivery",
            "Operational problem solving",
            "Stakeholder-ready assets",
            "Recommendation writing",
          ],
        },
      ],
    },
  },

  {
    slug: "applied-ml-engineer",
    title: "Applied ML Engineer",
    subtitle: "Modeling + engineering to ship reliable ML features",
    description:
      "This track is designed for people who want to build ML features that survive in real systems. You focus on practical ML, evaluation, inference constraints, and engineering patterns used to deliver stable model services.",
    points: [
      "Build robust ML baselines and iterate fast with clean experiments",
      "Design inference pipelines with performance & reliability in mind",
      "Deploy services and manage versioning correctly",
      "Write maintainable ML code with tests and reusable modules",
    ],
    format: [
      "Hands-on labs + deliverables",
      "Remote-friendly (worldwide cohorts)",
    ],
    tools: [
      "Python, scikit-learn",
      "FastAPI",
      "Docker",
      "Git/GitHub",
      "MLflow basics",
    ],
    programme: [
      "ML baselines & evaluation discipline",
      "Pipeline architecture for training/inference",
      "Packaging & reproducibility",
      "Service deployment + versioning + rollback mindset",
      "Capstone ML service project",
    ],
    programDetailed: {
      headline:
        "Engineering-oriented ML: build reliable model features with strong evaluation, clean architecture and deployment constraints in mind.",
      modules: [
        {
          title: "Module 1 — ML Baselines & Evaluation Discipline",
          duration: "2 weeks",
          description:
            "Build strong baselines and evaluate correctly before optimizing.",
          content: [
            "Pipeline setup: preprocessing, splits, cross-validation",
            "Metrics selection by use case + thresholding basics",
            "Error analysis: slices, robustness checks, leakage detection",
            "Experiment discipline: clean comparisons and tracking habits",
          ],
          skills: [
            "Baseline building",
            "Evaluation discipline",
            "Error analysis",
            "Experiment rigor",
          ],
        },
        {
          title: "Module 2 — Training/Inference Architecture",
          duration: "2–3 weeks",
          description:
            "Design code that works both in training and production inference.",
          content: [
            "Train/inference parity and feature pipelines",
            "Reusable transforms and data contracts",
            "Model packaging and input schemas",
            "Performance basics: batch inference mindset",
          ],
          skills: [
            "ML architecture",
            "Data contracts",
            "Model packaging",
            "Inference constraints awareness",
          ],
        },
        {
          title: "Module 3 — Deployment Patterns (Service-first)",
          duration: "2–3 weeks",
          description: "Ship ML as an API with stability and maintainability.",
          content: [
            "FastAPI endpoints + validation + version route",
            "Dockerizing the service for consistent runtime",
            "Logging and simple observability practices",
            "Rollback mindset and safe iteration",
          ],
          skills: [
            "API deployment",
            "Docker workflow",
            "Service reliability mindset",
            "Release/rollback thinking",
          ],
        },
        {
          title: "Module 4 — Production Quality (Testing & Maintainability)",
          duration: "1–2 weeks",
          description:
            "Make your ML codebase maintainable like real engineering teams.",
          content: [
            "Unit tests for preprocessing and business rules",
            "Basic integration tests for API payloads",
            "Refactoring patterns and clean module boundaries",
            "Documentation: README, usage, constraints, known limitations",
          ],
          skills: [
            "Testing ML systems",
            "Maintainable code",
            "Refactoring discipline",
            "Documentation standards",
          ],
        },
        {
          title: "Capstone — ML Feature Service",
          duration: "2–3 weeks",
          description:
            "Deliver a stable ML service ready for integration in real systems.",
          content: [
            "Build an end-to-end ML pipeline + API + Docker image",
            "Add tests and a minimal CI workflow",
            "Document integration usage and model behavior",
            "Demo + portfolio packaging",
          ],
          skills: [
            "End-to-end ML delivery",
            "Service integration readiness",
            "Testing + CI basics",
            "Portfolio-grade demo",
          ],
        },
      ],
    },
  },

  {
    slug: "genai-product-builder",
    title: "GenAI Product Builder",
    subtitle: "RAG, agents and evaluation — build GenAI that actually works",
    description:
      "Learn how to build GenAI products with measurable quality. You’ll implement retrieval-augmented generation, prompt patterns, evaluation loops, and guardrails — and ship a working demo with clear metrics.",
    points: [
      "Build RAG systems with evaluation-driven iteration",
      "Implement safety guardrails and quality checks",
      "Create stakeholder-friendly demos and documentation",
    ],
    format: ["Project-first approach", "Remote-friendly (worldwide cohorts)"],
    tools: [
      "RAG concepts",
      "Vector DB concepts",
      "APIs",
      "Evaluation strategy",
    ],
    programme: [
      "GenAI fundamentals & constraints",
      "RAG architecture patterns",
      "Evaluation: offline tests + human feedback loops",
      "Guardrails & risk management",
      "Capstone GenAI demo",
    ],
    programDetailed: {
      headline:
        "Build GenAI products with measurable quality: RAG, evaluation loops, reliability patterns and guardrails — shipped as a working demo.",
      modules: [
        {
          title: "Module 1 — GenAI Fundamentals & Product Constraints",
          duration: "1–2 weeks",
          description:
            "Understand what LLMs can and cannot do in real products.",
          content: [
            "LLM capabilities vs limits: hallucinations, context windows, latency",
            "Prompting patterns: instructions, role, examples, constraints",
            "Structured outputs (schemas), parsing, and failure handling",
            "Product constraints: cost, privacy, data access, UX expectations",
          ],
          skills: [
            "LLM limitations awareness",
            "Prompt design patterns",
            "Structured output handling",
            "Product constraint thinking",
          ],
        },
        {
          title: "Module 2 — RAG Architecture (Chat with your data)",
          duration: "2–3 weeks",
          description:
            "Implement Retrieval-Augmented Generation with strong retrieval quality.",
          content: [
            "Embeddings and semantic search intuition",
            "Chunking strategy, overlap, metadata, and indexing",
            "Retrieval strategies: top-k, filtering, re-ranking basics",
            "Grounded answers with citations and source linking",
            "Freshness and update strategy for knowledge bases",
          ],
          skills: [
            "RAG system design",
            "Chunking & retrieval strategy",
            "Grounded answers with citations",
            "Knowledge base management",
          ],
        },
        {
          title: "Module 3 — Evaluation & Quality Measurement",
          duration: "2 weeks",
          description:
            "Measure quality and avoid shipping ‘vibes-based’ GenAI.",
          content: [
            "Define success metrics: accuracy, groundedness, usefulness, safety",
            "Offline evaluation: test sets, golden answers, regression tests",
            "Human evaluation basics: rubrics, review workflows",
            "Failure analysis: hallucinations, retrieval misses, prompt brittleness",
            "Iterate with measurable improvements",
          ],
          skills: [
            "Evaluation mindset",
            "Test set building",
            "Regression testing for prompts/RAG",
            "Failure analysis",
          ],
        },
        {
          title: "Module 4 — Guardrails, Safety & Reliability",
          duration: "1–2 weeks",
          description:
            "Add protection layers that make GenAI usable in production contexts.",
          content: [
            "Safety risks overview: prompt injection, data leakage, toxic content",
            "Guardrails patterns: input filters, output constraints, policy checks",
            "Prompt injection awareness + mitigation patterns",
            "Fallback strategies: refusal, safe completion, escalation to human",
          ],
          skills: [
            "Guardrails patterns",
            "Prompt injection awareness",
            "Reliable fallback design",
            "Risk thinking",
          ],
        },
        {
          title: "Module 5 — GenAI Product Delivery (API + Demo + Docs)",
          duration: "2–3 weeks",
          description:
            "Ship a complete product: API + UI demo + documentation.",
          content: [
            "Build a simple API for inference (request/response discipline)",
            "Basic performance mindset: latency, caching, batching awareness",
            "UI demo: clear user journeys, examples, and limitations section",
            "Documentation: how it works, known limitations, evaluation results",
          ],
          skills: [
            "GenAI product packaging",
            "API integration",
            "Demo storytelling",
            "Documentation for trust",
          ],
        },
        {
          title: "Capstone — RAG Product (Portfolio-grade)",
          duration: "2–3 weeks",
          description:
            "Deliver a working RAG app with evaluation results and guardrails.",
          content: [
            "Define a use case (support assistant, knowledge bot, internal search)",
            "Implement retrieval + citations + evaluation loop",
            "Add guardrails + failure handling + metrics summary (simple)",
            "Finalize demo + documentation + portfolio presentation",
          ],
          skills: [
            "End-to-end GenAI delivery",
            "Evaluation-driven iteration",
            "Reliability mindset",
            "Portfolio-ready demo",
          ],
        },
      ],
    },
  },

  {
    slug: "mlops-production-ai",
    title: "MLOps & Production AI",
    subtitle: "Deploy, monitor and iterate on real AI systems",
    description:
      "This track is about turning models into production systems. You learn containerization, CI/CD basics, monitoring signals (performance/drift), and safe iteration practices with versioned releases.",
    points: [
      "Containerize and deploy model services",
      "Track experiments and model versions",
      "Define monitoring signals and retraining triggers",
      "Adopt a production-ready workflow with CI/CD fundamentals",
    ],
    format: [
      "Engineering-oriented labs",
      "Remote-friendly (worldwide cohorts)",
    ],
    tools: ["Docker", "FastAPI", "GitHub Actions basics", "MLflow basics"],
    programme: [
      "Deployment & containerization",
      "Experiment tracking & model versioning",
      "Monitoring signals & drift basics",
      "CI/CD fundamentals for ML services",
      "Capstone: production-ready ML API",
    ],
    programDetailed: {
      headline:
        "Production-first MLOps: ship model services with versioning, CI/CD basics, monitoring signals and safe iteration practices used by real teams.",
      modules: [
        {
          title:
            "Module 1 — Production Foundations (Reproducibility & Packaging)",
          duration: "1–2 weeks",
          description: "Turn notebooks into reliable, reproducible codebases.",
          content: [
            "Project structure: src/, configs, environments, reproducibility",
            "Dependency management and lockfiles (why they matter)",
            "Training vs inference parity (same transforms, same schemas)",
            "Testing basics: unit tests for transforms and validation",
          ],
          skills: [
            "Reproducible ML projects",
            "Packaging discipline",
            "Train/inference parity",
            "Testing mindset",
          ],
        },
        {
          title: "Module 2 — Model Serving (FastAPI patterns)",
          duration: "2–3 weeks",
          description:
            "Serve models like products: schemas, validation, stability.",
          content: [
            "FastAPI endpoints: predict, health, version info",
            "Input validation and payload schemas (prevent bad requests)",
            "Performance basics: batching awareness, serialization, caching basics",
            "Observability basics: logs, metrics, request tracing mindset",
          ],
          skills: [
            "Model serving with FastAPI",
            "Input validation",
            "Service stability mindset",
            "Basic observability",
          ],
        },
        {
          title: "Module 3 — Containerization (Docker for ML services)",
          duration: "2 weeks",
          description: "Package your service to run the same everywhere.",
          content: [
            "Dockerfile best practices (small images, reproducibility)",
            "Environment configuration (dev/prod parity, secrets awareness)",
            "Local orchestration basics (compose mindset if needed)",
            "Build/run/debug workflow",
          ],
          skills: [
            "Dockerized ML services",
            "Environment management",
            "Debugging containers",
            "Deployment readiness",
          ],
        },
        {
          title:
            "Module 4 — Experiment Tracking & Model Versioning (MLflow basics)",
          duration: "2 weeks",
          description:
            "Track runs, artifacts and manage model versions correctly.",
          content: [
            "Tracking runs: params, metrics, artifacts",
            "Model packaging: signature, input schema, reproducibility",
            "Versioning discipline: tags, stages, release notes mindset",
            "Rollback mindset and reproducible retraining",
          ],
          skills: [
            "Experiment tracking",
            "Model versioning basics",
            "Release discipline",
            "Rollback thinking",
          ],
        },
        {
          title: "Module 5 — CI/CD Fundamentals for ML",
          duration: "1–2 weeks",
          description: "Automate checks so you can ship safely.",
          content: [
            "Linting + tests + basic quality gates",
            "Build pipeline basics (Docker build, push, versioning)",
            "Deployment triggers and environment separation mindset",
            "Model checks: schema checks, basic regression tests",
          ],
          skills: [
            "CI/CD mindset",
            "Quality gates",
            "Automated builds",
            "Safe release workflow",
          ],
        },
        {
          title: "Module 6 — Monitoring, Drift & Iteration",
          duration: "2 weeks",
          description: "Know when a model degrades and what to do next.",
          content: [
            "Monitoring signals: latency, error rates, data drift, performance proxies",
            "Drift basics: what it is, why it happens, what to track",
            "Retraining triggers and feedback loop design",
            "Incident response basics: triage, rollback, mitigation plan",
          ],
          skills: [
            "Monitoring strategy",
            "Drift awareness",
            "Iteration & retraining planning",
            "Incident response mindset",
          ],
        },
        {
          title: "Capstone — Production-ready ML API",
          duration: "2–3 weeks",
          description:
            "Deliver a deployable ML service with versioning, tests and monitoring plan.",
          content: [
            "Package a trained model + API + Docker image",
            "Add tests + basic CI pipeline",
            "Document deployment + monitoring signals",
            "Deliver a demo and technical README",
          ],
          skills: [
            "End-to-end MLOps delivery",
            "Deployable service",
            "Documentation & demo",
            "Production discipline",
          ],
        },
      ],
    },
  },

  {
    slug: "ai-project-management-strategy",
    title: "AI Project Management & Strategy",
    subtitle: "Business-first AI: ROI, governance and delivery execution",
    description:
      "A track for people leading AI initiatives. You’ll learn how to scope projects, estimate value, define success metrics, manage stakeholders, and deliver AI initiatives responsibly.",
    points: [
      "Frame AI use cases, define success metrics, and estimate ROI",
      "Manage delivery: risks, stakeholders, and iterative milestones",
      "Build a governance mindset: quality, security, compliance basics",
    ],
    format: [
      "Business-oriented projects",
      "Remote-friendly (worldwide cohorts)",
    ],
    tools: [
      "AI delivery frameworks",
      "Metrics & ROI",
      "Documentation patterns",
    ],
    programme: [
      "Use case framing & KPI design",
      "Roadmaps & delivery execution",
      "Risk management & governance basics",
      "Stakeholder communication",
      "Capstone: AI strategy doc + delivery plan",
    ],
    programDetailed: {
      headline:
        "Business-first AI leadership: scope use cases, define ROI, manage risk and deliver AI initiatives with governance and execution discipline.",
      modules: [
        {
          title: "Module 1 — Use Case Framing & Value Design",
          duration: "1–2 weeks",
          description:
            "Translate business needs into clear AI opportunities with measurable value.",
          content: [
            "Use case discovery and prioritization frameworks",
            "Define success metrics and acceptance criteria",
            "Feasibility checks: data, people, constraints, time-to-value",
            "ROI estimation basics and value narratives",
          ],
          skills: [
            "Use case framing",
            "KPI design",
            "Feasibility assessment",
            "ROI storytelling",
          ],
        },
        {
          title: "Module 2 — Delivery Execution (Roadmaps & Stakeholders)",
          duration: "2 weeks",
          description:
            "Run AI projects with structured milestones and clear communication.",
          content: [
            "Roadmaps, phases, and iterative delivery planning",
            "Stakeholder management and expectation alignment",
            "Risk tracking: technical, legal, operational",
            "Communication formats: updates, demos, decision memos",
          ],
          skills: [
            "Roadmapping",
            "Stakeholder management",
            "Risk tracking",
            "Executive communication",
          ],
        },
        {
          title: "Module 3 — Governance, Quality & Responsible AI Basics",
          duration: "2 weeks",
          description:
            "Adopt governance practices that prevent failures in real deployments.",
          content: [
            "Data governance basics: ownership, quality, lineage mindset",
            "Model governance basics: monitoring, retraining, accountability",
            "Security & privacy awareness: access, retention, constraints",
            "Bias and fairness awareness + documentation practices",
          ],
          skills: [
            "Governance mindset",
            "Quality & accountability",
            "Privacy/security awareness",
            "Responsible AI basics",
          ],
        },
        {
          title: "Capstone — AI Strategy & Delivery Plan",
          duration: "2–3 weeks",
          description: "Deliver a full strategy document for an AI initiative.",
          content: [
            "Use case portfolio + prioritization rationale",
            "Delivery roadmap + roles + milestones",
            "Risk register + governance plan",
            "Executive-ready presentation + memo",
          ],
          skills: [
            "Strategy documentation",
            "Delivery planning",
            "Governance planning",
            "Executive presentation",
          ],
        },
      ],
    },
  },
];
