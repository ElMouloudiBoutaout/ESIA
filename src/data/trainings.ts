// src/data/trainings.ts

export type TrainingFormat =
  | "On-site"
  | "Remote"
  | "Hybrid"
  | "Self-paced"
  | "Cohort-based";

export type TrainingLevel = "Beginner" | "Intermediate" | "Advanced";

export type Training = {
  slug: string;
  title: string;

  // For cards / listing
  shortDescription: string;
  tags: string[];

  // Practical info
  duration: string;
  format: TrainingFormat;
  level?: TrainingLevel;

  // Training-specific content
  audience?: string[];
  objectives?: string[];
  prerequisites?: string[];
  deliverables?: string[];
  tools?: string[];
  sampleProjects?: string[];

  // Lightweight detailed program
  syllabus?: Array<{
    title: string; // e.g. "Day 1 — ..."
    content: string[];
  }>;
};

export const trainings: Training[] = [
  {
    slug: "ml-foundations-python",
    title: "Machine Learning Foundations (Python)",
    shortDescription:
      "A practical, end-to-end introduction to supervised ML: data prep, modeling, evaluation, and production-ready baselines.",
    tags: ["ML", "Python", "scikit-learn", "Metrics", "Pipelines"],
    duration: "3 days",
    format: "Remote",
    level: "Beginner",

    audience: [
      "Data analysts transitioning to ML",
      "Engineers needing ML fundamentals for real projects",
      "Anyone who wants a rigorous baseline workflow",
    ],
    objectives: [
      "Frame problems correctly (regression vs classification) and avoid leakage",
      "Build preprocessing + modeling pipelines with scikit-learn",
      "Evaluate models with the right metrics and error analysis",
      "Deliver a reproducible baseline ready for API integration",
    ],
    prerequisites: [
      "Python basics (functions, lists, dicts)",
      "pandas basics (load, filter, groupby) recommended",
    ],
    deliverables: [
      "Reusable ML baseline template (pipeline + evaluation)",
      "Notebook + clean project structure",
      "Checklist: leakage, metrics, validation best practices",
    ],
    tools: ["Python", "pandas", "NumPy", "scikit-learn", "Jupyter", "Git"],

    syllabus: [
      {
        title: "Day 1 — From data to features",
        content: [
          "Problem framing and dataset split strategy",
          "Leakage pitfalls and validation mindset",
          "Missing values, encoding, scaling",
          "Pipelines: ColumnTransformer + Pipeline",
        ],
      },
      {
        title: "Day 2 — Models & evaluation",
        content: [
          "Baselines: linear/logistic, trees, random forest",
          "Cross-validation and learning curves",
          "Metrics: RMSE, ROC-AUC, F1, precision/recall",
          "Error analysis and model debugging",
        ],
      },
      {
        title: "Day 3 — Baseline to production",
        content: [
          "Hyperparameter search (Grid/Random)",
          "Saving/loading models, versioning patterns",
          "Input validation (schema) and inference contract",
          "Packaging the predictor for FastAPI integration",
        ],
      },
    ],
  },

  {
    slug: "deep-learning-cv-practice",
    title: "Deep Learning & Computer Vision (Practice)",
    shortDescription:
      "Train CNNs with strong discipline: augmentation, imbalance, transfer learning, and reliable training/debugging patterns.",
    tags: [
      "Deep Learning",
      "Computer Vision",
      "CNN",
      "PyTorch/Keras",
      "Augmentation",
    ],
    duration: "4 days",
    format: "Remote",
    level: "Intermediate",

    audience: [
      "ML practitioners moving into deep learning",
      "Engineers who need practical CV pipelines",
      "Data scientists who want reliable training patterns",
    ],
    objectives: [
      "Build and train CNN models with proper evaluation",
      "Use transfer learning efficiently for business datasets",
      "Handle class imbalance and noisy labels",
      "Improve robustness with augmentation and monitoring",
    ],
    prerequisites: ["ML foundations", "Comfortable with Python"],
    deliverables: [
      "Reusable training loop template",
      "Transfer learning project (end-to-end)",
      "Debugging checklist (overfitting, underfitting, data issues)",
    ],
    tools: ["PyTorch or Keras", "Python", "Weights & Biases (optional)"],

    syllabus: [
      {
        title: "Day 1 — Training fundamentals",
        content: [
          "Loss, optimizers, schedules, early stopping",
          "Regularization: weight decay, dropout",
          "Debugging training and monitoring curves",
        ],
      },
      {
        title: "Day 2 — CNNs & transfer learning",
        content: [
          "Convolutions, pooling, normalization",
          "Pretrained backbones and fine-tuning strategy",
          "Feature extraction vs full fine-tuning",
        ],
      },
      {
        title: "Day 3 — Real-world issues",
        content: [
          "Augmentation strategies",
          "Imbalance: sampling, focal loss (concept), thresholds",
          "Error analysis: confusion matrix, failure clusters",
        ],
      },
      {
        title: "Day 4 — Delivery patterns",
        content: [
          "Exporting models and inference basics",
          "Batch inference vs real-time constraints",
          "Reproducibility, seeds, and experiment tracking",
        ],
      },
    ],
  },

  {
    slug: "genai-rag-agents",
    title: "GenAI: LLM Apps (RAG, Agents & Evaluation)",
    shortDescription:
      "Build reliable LLM applications: RAG pipelines, evaluation, safety, and agent workflows for real delivery constraints.",
    tags: ["GenAI", "LLM", "RAG", "Agents", "Evaluation", "Safety"],
    duration: "3 days",
    format: "Remote",
    level: "Intermediate",

    audience: [
      "Developers building LLM features in products",
      "Data teams shipping RAG assistants",
      "Tech leads needing reliable patterns (cost/latency/safety)",
    ],
    objectives: [
      "Design a production-style RAG pipeline with good chunking/retrieval",
      "Reduce hallucinations with grounding and citation patterns",
      "Evaluate answer quality and detect failure modes",
      "Implement safety basics: prompt injection awareness and guardrails",
    ],
    prerequisites: ["Python basics", "API basics recommended"],
    deliverables: [
      "RAG starter kit (retrieval + prompting + evaluation hooks)",
      "Mini-project: internal knowledge assistant",
      "Checklist: safety, reliability, and monitoring signals",
    ],
    tools: [
      "Python",
      "FAISS/Chroma",
      "LangChain (or equivalent)",
      "FastAPI (optional)",
    ],

    syllabus: [
      {
        title: "Day 1 — RAG foundations",
        content: [
          "Chunking strategies and embeddings",
          "Retrieval: top-k, reranking (concept), filtering",
          "Prompting patterns for grounded answers + citations",
        ],
      },
      {
        title: "Day 2 — Reliability & evaluation",
        content: [
          "Test sets and automated evaluation patterns",
          "Hallucination, missing context, bad retrieval",
          "Prompt injection: risks and mitigation patterns",
        ],
      },
      {
        title: "Day 3 — Agents & orchestration",
        content: [
          "Tool calling and multi-step workflows",
          "Latency/cost trade-offs and caching",
          "Monitoring, feedback loops, and iteration strategy",
        ],
      },
    ],
  },

  {
    slug: "mlops-fastapi-docker-ci",
    title: "MLOps Starter: FastAPI + Docker + CI/CD",
    shortDescription:
      "Deploy an ML model as an API, containerize it, test it, and set up CI/CD basics for a production-grade delivery.",
    tags: ["MLOps", "FastAPI", "Docker", "CI/CD", "Testing"],
    duration: "4 days",
    format: "Remote",
    level: "Intermediate",

    audience: [
      "Data scientists who want to ship models",
      "Engineers building ML services",
      "Teams starting an MLOps baseline",
    ],
    objectives: [
      "Design ML API contracts (schemas, validation, errors)",
      "Containerize correctly (reproducibility, image hygiene)",
      "Add tests for preprocessing + inference + API endpoints",
      "Create a simple CI pipeline with quality gates",
    ],
    prerequisites: ["Python intermediate", "Basic ML workflow knowledge"],
    deliverables: [
      "FastAPI ML service template (clean structure)",
      "Dockerfile + local run instructions",
      "Test suite + CI pipeline skeleton",
    ],
    tools: [
      "FastAPI",
      "Pydantic",
      "Docker",
      "pytest",
      "GitHub Actions (or GitLab CI)",
    ],

    syllabus: [
      {
        title: "Day 1 — API design for ML",
        content: [
          "Prediction endpoints and schema validation",
          "Batch vs real-time inference patterns",
          "Logging, error handling, status codes",
        ],
      },
      {
        title: "Day 2 — Containerization",
        content: [
          "Dockerfile best practices (slim images, caching)",
          "Pinning dependencies and reproducibility",
          "Local build/run and environment parity",
        ],
      },
      {
        title: "Day 3 — Testing",
        content: [
          "Unit tests for preprocessing and inference",
          "Integration tests for API endpoints",
          "Contract tests and example payloads",
        ],
      },
      {
        title: "Day 4 — CI/CD essentials",
        content: [
          "Pipeline stages: lint/test/build",
          "Artifacts and simple release strategy",
          "Next steps: registry, environments, monitoring",
        ],
      },
    ],
  },

  {
    slug: "feature-engineering-modeling",
    title: "Feature Engineering & Modeling (Tabular Data)",
    shortDescription:
      "Go deeper on tabular ML: feature design, leakage-proof validation, calibration, and model interpretation for decision making.",
    tags: [
      "Feature Engineering",
      "Tabular ML",
      "Interpretability",
      "Validation",
    ],
    duration: "3 days",
    format: "Remote",
    level: "Intermediate",

    audience: [
      "Analysts and DS working on business tabular datasets",
      "Teams struggling with unstable models",
      "Anyone needing robust validation and features",
    ],
    objectives: [
      "Engineer strong tabular features without leakage",
      "Choose correct validation (time split, group split, CV)",
      "Interpret models and communicate decisions clearly",
      "Calibrate probabilities and handle thresholds",
    ],
    prerequisites: ["ML foundations", "pandas basics"],
    deliverables: [
      "Feature engineering playbook",
      "Validation strategies checklist",
      "Model interpretation notebook (SHAP/concepts)",
    ],
    tools: ["Python", "pandas", "scikit-learn", "SHAP (optional)"],
  },

  {
    slug: "data-quality-for-ml",
    title: "Data Quality for ML (Validation, Drift & Monitoring Basics)",
    shortDescription:
      "Make ML reliable by improving data quality: validation rules, training/serving parity, drift signals, and monitoring foundations.",
    tags: ["Data Quality", "Monitoring", "Drift", "MLOps"],
    duration: "2 days",
    format: "Remote",
    level: "Beginner",

    audience: [
      "Data/ML teams facing unstable predictions",
      "Engineers setting up monitoring baselines",
      "Analysts responsible for data pipelines feeding ML",
    ],
    objectives: [
      "Define quality rules and validation checks",
      "Detect anomalies and drift signals (foundations)",
      "Ensure training/serving parity for features",
      "Create a minimal monitoring plan (KPIs + alerts)",
    ],
    prerequisites: ["Basic data manipulation (SQL or pandas)"],
    deliverables: [
      "Data validation checklist",
      "Monitoring plan template (what to track + thresholds)",
      "Example drift signals and alerting logic (conceptual)",
    ],
    tools: ["SQL", "Python", "Great Expectations (optional)"],
  },
  {
    slug: "nlp-transformers-practice",
    title: "NLP with Transformers (Practical Fine-tuning)",
    shortDescription:
      "Fine-tune transformer models for classification and extraction tasks with strong evaluation and deployment patterns.",
    tags: ["NLP", "Transformers", "BERT", "Fine-tuning"],
    duration: "3 days",
    format: "Remote",
    level: "Intermediate",
    audience: [
      "Data scientists working on text data",
      "Engineers building NLP features",
      "Teams moving from classical NLP to transformers",
    ],
    objectives: [
      "Fine-tune transformers for text classification",
      "Build robust evaluation and error analysis for NLP",
      "Handle imbalance and labeling noise",
      "Package inference for real usage",
    ],
    prerequisites: ["Python basics", "ML foundations recommended"],
    deliverables: [
      "Transformer fine-tuning template",
      "Evaluation + error analysis notebook",
      "Inference packaging checklist",
    ],
    tools: ["Python", "Hugging Face", "PyTorch", "Datasets"],
    sampleProjects: [
      "Support ticket routing classifier",
      "Sentiment + topic signals for product feedback",
    ],
  },

  {
    slug: "mlflow-experiment-tracking",
    title: "MLflow: Experiment Tracking & Model Registry",
    shortDescription:
      "Track experiments, compare runs, manage models with registry, and standardize the ML lifecycle for teams.",
    tags: ["MLflow", "Experiment Tracking", "Model Registry", "MLOps"],
    duration: "2 days",
    format: "Remote",
    level: "Intermediate",
    audience: [
      "Data scientists who want a clean experiment workflow",
      "Teams starting MLOps practices",
      "Engineers maintaining ML training pipelines",
    ],
    objectives: [
      "Log params/metrics/artifacts correctly",
      "Compare runs and standardize experiments",
      "Use model registry and versioning practices",
      "Promote models across environments (dev → prod)",
    ],
    prerequisites: ["Python basics", "Basic ML workflow"],
    deliverables: [
      "MLflow project template",
      "Registry workflow (staging/production)",
      "Experiment tracking conventions guide",
    ],
    tools: ["MLflow", "Python", "scikit-learn", "Docker (optional)"],
    sampleProjects: [
      "Run comparison dashboard with MLflow UI",
      "Register + promote a model version in registry",
    ],
  },

  {
    slug: "time-series-forecasting",
    title: "Time Series Forecasting (From Baselines to Delivery)",
    shortDescription:
      "Forecast demand and KPIs with proper backtesting, strong baselines, feature-based models, and delivery-ready outputs.",
    tags: ["Time Series", "Forecasting", "Backtesting", "ML"],
    duration: "3 days",
    format: "Remote",
    level: "Intermediate",
    audience: [
      "Data analysts/DS forecasting business metrics",
      "Teams needing correct evaluation for time series",
      "Anyone shipping forecasts into dashboards or apps",
    ],
    objectives: [
      "Choose correct backtesting and evaluation for time series",
      "Build strong baselines before complex models",
      "Use feature-based models for scalable forecasting",
      "Deliver forecasts with uncertainty and monitoring signals",
    ],
    prerequisites: ["Python + pandas basics", "ML foundations recommended"],
    deliverables: [
      "Forecasting template with backtesting",
      "Baseline + feature model comparison notebook",
      "Delivery checklist (export, monitoring signals)",
    ],
    tools: ["Python", "pandas", "scikit-learn", "statsmodels (optional)"],
    sampleProjects: [
      "Sales/demand forecasting with backtesting",
      "Weekly KPI forecasting for operations planning",
    ],
  },

  {
    slug: "data-engineering-for-ml",
    title: "Data Engineering for ML (ETL, Quality, Features)",
    shortDescription:
      "Build reliable datasets for ML: validation, feature-ready tables, and training/serving parity foundations.",
    tags: ["Data Engineering", "ETL", "Data Quality", "Features"],
    duration: "3 days",
    format: "Remote",
    level: "Intermediate",
    audience: [
      "Analysts building data pipelines for ML",
      "Engineers responsible for feature pipelines",
      "DS teams needing reliable training datasets",
    ],
    objectives: [
      "Design datasets for training/inference parity",
      "Implement validation and quality checks",
      "Structure features and transformations for reuse",
      "Avoid common pipeline failure modes",
    ],
    prerequisites: ["SQL basics", "Python/pandas basics"],
    deliverables: [
      "Feature-ready dataset template",
      "Validation rules checklist",
      "Pipeline design guidelines for ML readiness",
    ],
    tools: ["SQL", "Python", "dbt (optional)", "Great Expectations (optional)"],
    sampleProjects: [
      "Feature table pipeline with validation rules",
      "Parity checks between training and serving data",
    ],
  },
];
