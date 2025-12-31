import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Link from "next/link";

function ProjectCard({
  title,
  text,
  stack,
  deliverables,
}: {
  title: string;
  text: string;
  stack: string[];
  deliverables: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/50 transition">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-zinc-300">{text}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs font-medium text-zinc-200"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
        <p className="text-xs font-semibold text-zinc-100">
          Sample deliverables
        </p>
        <ul className="mt-2 space-y-1 text-xs text-zinc-300 list-disc pl-5">
          {deliverables.slice(0, 3).map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProjetsPage() {
  return (
    <section className="py-14">
      <Container>
        <PageHeader
          eyebrow="Projects"
          title="Build. Ship. Iterate."
          subtitle="A portfolio-driven approach: each project follows a full pipeline from data to production, with clean structure and reproducibility."
          primaryCta={{ label: "Request a brochure", href: "/contact" }}
          secondaryCta={{
            label: "Explore Master's Programs",
            href: "/masteres",
          }}
        />

        <Section
          title="Featured Projects"
          subtitle="Examples of production-oriented deliverables students can build during programs."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Telco Customer Churn — MLOps API"
              text="Train a churn classifier, track experiments, package the service, and deploy a reliable prediction API with monitoring signals and validation."
              stack={[
                "Python",
                "scikit-learn",
                "MLflow",
                "FastAPI",
                "Docker",
                "CI/CD",
              ]}
              deliverables={[
                "Reproducible ML project template (train/infer split)",
                "FastAPI endpoint + OpenAPI docs + schema validation",
                "Docker image + run instructions + basic monitoring plan",
              ]}
            />

            <ProjectCard
              title="Computer Vision Quality Inspection"
              text="Fine-tune a CNN with transfer learning, augmentation, and robust evaluation, then export an inference pipeline for batch scoring."
              stack={[
                "Deep Learning",
                "Computer Vision",
                "PyTorch/Keras",
                "Augmentation",
                "Inference",
              ]}
              deliverables={[
                "Training notebook + checkpointing + metrics tracking",
                "Error analysis (confusion matrix + failure clusters)",
                "Batch inference script + export format for production",
              ]}
            />

            <ProjectCard
              title="GenAI Assistant with RAG"
              text="Build a retrieval-augmented assistant with chunking, embeddings, vector search, evaluation routines, and safe prompting patterns."
              stack={["RAG", "Embeddings", "Vector DB", "Evaluation", "Safety"]}
              deliverables={[
                "RAG pipeline (ingest → index → retrieve → answer)",
                "Evaluation set + scoring rubric for reliability",
                "Prompt injection awareness + mitigation checklist",
              ]}
            />

            <ProjectCard
              title="Time Series Forecasting (Demand & KPI)"
              text="Forecast weekly demand with proper backtesting, strong baselines, feature engineering, and a delivery-ready output format."
              stack={[
                "Time Series",
                "Backtesting",
                "Feature Engineering",
                "Validation",
                "API",
              ]}
              deliverables={[
                "Backtesting strategy + baseline comparison report",
                "Forecast export (CSV/API payload format)",
                "Monitoring signals for drift and seasonality shifts",
              ]}
            />

            <ProjectCard
              title="NLP Ticket Routing with Transformers"
              text="Fine-tune a transformer classifier to automatically route support tickets, with strong error analysis and threshold tuning."
              stack={[
                "NLP",
                "Transformers",
                "Fine-tuning",
                "Error Analysis",
                "Thresholding",
              ]}
              deliverables={[
                "Fine-tuned model + evaluation notebook",
                "Confusion-matrix driven error analysis report",
                "Inference pipeline template (tokenization + batching)",
              ]}
            />

            <ProjectCard
              title="Fraud Detection — Cost-Aware Decisions"
              text="Build a fraud model and define a business decision policy using cost-sensitive metrics, calibration, and optimized thresholds."
              stack={[
                "Classification",
                "Calibration",
                "Metrics",
                "Modeling",
                "Decisioning",
              ]}
              deliverables={[
                "Cost-aware evaluation (precision/recall tradeoffs)",
                "Probability calibration + threshold policy",
                "Short decision memo for stakeholders",
              ]}
            />

            <ProjectCard
              title="Recommendation System — Baselines & Ranking"
              text="Build recommender baselines and evaluate offline with proper splits for implicit feedback, ranking metrics, and cold start notes."
              stack={[
                "Recommenders",
                "Ranking",
                "Offline Evaluation",
                "Cold Start",
              ]}
              deliverables={[
                "Popularity + similarity baseline recommenders",
                "Offline evaluation report (ranking metrics concepts)",
                "Product constraints note (cold start + feedback loop)",
              ]}
            />

            <ProjectCard
              title="Data Quality & Validation Suite"
              text="Create automated data validation checks and monitoring signals for pipelines feeding ML systems (parity, drift, anomalies)."
              stack={[
                "Data Quality",
                "Validation",
                "Drift",
                "Monitoring",
                "SQL",
                "Python",
              ]}
              deliverables={[
                "Validation rules (ranges, nulls, duplicates, schema)",
                "Drift signals proposal (features + thresholds)",
                "Incident checklist (alerts → investigation → fix)",
              ]}
            />

            <ProjectCard
              title="MLflow Tracking & Model Registry"
              text="Standardize experiment tracking, compare runs, register models, and define a simple promotion workflow (staging → prod)."
              stack={[
                "MLflow",
                "Experiment Tracking",
                "Model Registry",
                "Versioning",
              ]}
              deliverables={[
                "MLflow project template + logging conventions",
                "Model registry workflow with version promotion",
                "Release notes template for model changes",
              ]}
            />

            <ProjectCard
              title="Executive Analytics Dashboard"
              text="Transform raw data into a decision-ready dashboard with a KPI tree, drill-down pages, and a clear narrative for stakeholders."
              stack={[
                "Analytics",
                "Dashboard",
                "Data Modeling",
                "Storytelling",
              ]}
              deliverables={[
                "Dashboard pages (KPI overview + drill-downs)",
                "Data model documentation + key measures list",
                "Insights deck (5–8 slides) for decision makers",
              ]}
            />
          </div>
        </Section>

        <div className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Want to see a full demo?
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                We can share a sample repo structure and a live walkthrough.
              </p>
            </div>
            <Link
              href="/contact"
              className="no-underline inline-flex justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition"
            >
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
