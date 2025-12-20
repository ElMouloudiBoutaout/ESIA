import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Link from "next/link";

function ProjectCard({
  title,
  text,
  stack,
}: {
  title: string;
  text: string;
  stack: string[];
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
          secondaryCta={{ label: "Explore Master's Programs", href: "/masteres" }}
        />

        <Section
          title="Featured Projects"
          subtitle="Examples of deliverables students can build during programs."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Customer Churn Prediction API"
              text="Train a model, track experiments, package with Docker, deploy an API and add monitoring basics."
              stack={["FastAPI", "Docker", "MLflow", "CI/CD"]}
            />
            <ProjectCard
              title="Computer Vision Quality Inspection"
              text="From dataset preparation to model training and inference service for batch predictions."
              stack={["Deep Learning", "CV", "Inference", "Pipelines"]}
            />
            <ProjectCard
              title="GenAI Assistant with RAG"
              text="Build a retrieval-augmented chatbot with embeddings, evaluation and safe prompting."
              stack={["RAG", "Embeddings", "Vector DB", "Eval"]}
            />
            <ProjectCard
              title="Time Series Forecasting"
              text="Forecasting with proper backtesting, feature engineering, and deployment of a prediction endpoint."
              stack={["Time Series", "Validation", "API", "Monitoring"]}
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
