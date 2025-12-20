export type MasterProgram = {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  points?: string[];
  format?: string[];
  tools?: string[];
  programme?: string[];
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
  },
];
