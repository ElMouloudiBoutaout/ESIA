export type Mastere = {
  slug: string;
  title: string;
  subtitle?: string;

  // Contenu principal
  description?: string;

  // Listes pédagogiques
  points?: string[];
  objectifs?: string[];
  programme?: string[];

  // Infos pratiques
  format?: string[];

  // Outils (FR / EN pour compatibilité)
  outils?: string[];
  tools?: string[];

  // Compléments
  competences?: string[];
  debouches?: string[];
};


export const masteres: Mastere[] = [
  {
    slug: "data-scientist-4-0",
    title: "Data Scientist 4.0",
    subtitle:
      "End-to-end applied Data Science: from data preparation to model deployment, with real-world delivery standards.",
    points: [
      "Build production-ready ML pipelines (data → model → API)",
      "Experiment tracking, reproducibility, and model evaluation",
      "Deploy, monitor, and iterate like a real DS/MLOps team",
    ],
    objectifs: [
      "Master the full Data Science lifecycle with strong fundamentals",
      "Train, evaluate, and improve ML models using robust validation",
      "Package and deploy ML solutions as reliable services",
      "Deliver a portfolio of concrete, documented projects",
    ],
    competences: [
      "Python for Data Science",
      "Data preparation & feature engineering",
      "Supervised & unsupervised learning",
      "Model evaluation & calibration",
      "Experiment tracking (MLflow basics)",
      "API deployment (FastAPI)",
      "Docker basics for packaging",
      "Monitoring fundamentals (metrics, drift awareness)",
      "Git workflow (branches, PR mindset, versioning)",
    ],
    programme: [
      "Data preparation: cleaning, missing values, outliers, encoding",
      "Feature engineering: scaling, leakage prevention, baselines",
      "Modeling: regression, classification, clustering",
      "Evaluation: metrics, cross-validation, thresholding",
      "Interpretability: feature importance, practical explanations",
      "Experiment tracking: runs, parameters, metrics, artifacts",
      "Deployment: FastAPI endpoints, request schemas, testing",
      "Packaging: Docker image, environment reproducibility",
      "Production basics: logging, monitoring, drift concepts",
      "Capstone project: a complete end-to-end delivery",
    ],
    debouches: [
      "Data Scientist",
      "Machine Learning Engineer (junior / applied)",
      "AI Project Analyst",
      "Applied AI Consultant",
      "MLOps Analyst (junior)",
    ],
  },

  {
    slug: "machine-learning-engineering",
    title: "Machine Learning Engineering",
    subtitle:
      "Design robust ML systems: reproducibility, testing, CI/CD mindset, deployment patterns, and reliability.",
    points: [
      "Clean project structure and engineering best practices",
      "Deploy ML models with APIs and containers",
      "Operate ML systems: monitoring, drift and retraining strategy",
    ],
    objectifs: [
      "Build reliable ML services with clean architecture",
      "Automate training and deployment workflows",
      "Apply software engineering practices to ML projects",
      "Understand monitoring and lifecycle management in production",
    ],
    competences: [
      "Project structure & best practices",
      "Testing basics for ML code",
      "CI/CD principles for ML",
      "Docker packaging",
      "FastAPI deployment patterns",
      "Logging & monitoring basics",
      "Drift & retraining strategy",
    ],
    programme: [
      "ML project structure: src/, scripts/, configs, artifacts",
      "Data quality checks and validation rules",
      "Training pipeline: reproducibility, parameters, evaluation",
      "Testing: unit tests for transformations and utilities",
      "API service: prediction endpoint, schemas, input validation",
      "Docker: build/run images, environment consistency",
      "CI/CD basics: automated checks and build pipeline mindset",
      "Monitoring: logs, metrics, alerts, drift signals",
      "Retraining strategy: triggers, scheduling, versioning",
    ],
    debouches: [
      "Machine Learning Engineer",
      "MLOps Engineer (junior / applied)",
      "AI Software Engineer (applied ML)",
      "Data Engineer with ML focus",
    ],
  },

  {
    slug: "deep-learning",
    title: "Deep Learning (NLP & Computer Vision)",
    subtitle:
      "Build neural networks for vision and language: training, regularization, evaluation, and inference pipelines.",
    points: [
      "Neural networks from fundamentals to practical training loops",
      "CV and NLP workflows (datasets → models → inference)",
      "Optimization, overfitting control, and deployment basics",
    ],
    objectifs: [
      "Understand deep learning fundamentals and training dynamics",
      "Build models for CV and NLP tasks",
      "Create inference pipelines and evaluate performance properly",
      "Ship a deep learning mini-project with reproducible results",
    ],
    competences: [
      "Neural network fundamentals",
      "CNN basics for vision",
      "Embeddings and NLP basics",
      "Training strategies & regularization",
      "Evaluation and error analysis",
      "Inference pipeline design",
    ],
    programme: [
      "Deep learning foundations: tensors, backprop intuition, loss",
      "Training workflow: data loaders, batching, augmentation",
      "Overfitting control: regularization, dropout, early stopping",
      "Computer Vision: classification, practical dataset pipeline",
      "NLP: embeddings, text preprocessing, baseline architectures",
      "Evaluation: confusion matrix, precision/recall, error analysis",
      "Inference: batch inference vs API inference, performance basics",
      "Mini-project: end-to-end deep learning delivery",
    ],
    debouches: [
      "Deep Learning Engineer (junior / applied)",
      "Computer Vision Engineer (junior)",
      "NLP Engineer (junior / applied)",
      "AI Engineer",
    ],
  },

  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence (Applied)",
    subtitle:
      "A complete applied AI track: classical ML, modern GenAI, ethics, and production-oriented delivery.",
    points: [
      "Solid AI fundamentals + practical business delivery",
      "GenAI introduction (prompting + RAG basics)",
      "Production mindset: reliability, evaluation and safety",
    ],
    objectifs: [
      "Build strong foundations across core AI topics",
      "Deliver practical AI solutions aligned with real constraints",
      "Understand responsible AI: risk, evaluation, safety basics",
      "Create a portfolio demonstrating applied AI skills",
    ],
    competences: [
      "Core ML understanding",
      "Problem framing & metrics",
      "GenAI foundations (prompting + RAG concepts)",
      "Reliability mindset (evaluation, edge cases)",
      "Responsible AI basics",
    ],
    programme: [
      "AI overview: problem framing, data, metrics, baselines",
      "Core ML: classification/regression fundamentals",
      "Evaluation strategy: robust metrics and validation",
      "GenAI: prompting fundamentals and use-case patterns",
      "RAG concepts: embeddings, retrieval, evaluation basics",
      "Responsible AI: bias awareness, safety & limitations",
      "Mini-project: applied AI solution with clear documentation",
    ],
    debouches: [
      "AI Analyst",
      "Applied AI Consultant",
      "Data Scientist (applied)",
      "ML Engineer (junior / applied)",
    ],
  },
];
