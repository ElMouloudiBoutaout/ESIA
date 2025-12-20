import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Link from "next/link";

function Card({
  title,
  text,
  tags,
}: {
  title: string;
  text: string;
  tags: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/50 transition">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-zinc-300">{text}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs font-medium text-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function FormationsPage() {
  return (
    <section className="py-14">
      <Container>
        <PageHeader
          eyebrow="Training"
          title="Short Programs — AI, ML, Deep Learning & MLOps"
          subtitle="Hands-on courses focused on real workflows: data quality, modeling, evaluation, deployment, monitoring and best practices."
          primaryCta={{ label: "Request a brochure", href: "/contact" }}
          secondaryCta={{ label: "Explore Master's Programs", href: "/masteres" }}
        />

        <Section
          title="Popular Tracks"
          subtitle="Pick a track depending on your goals. Each one is project-based and production-oriented."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card
              title="Machine Learning Foundations"
              text="From data prep to model selection, evaluation, and baseline deployment with a clean code structure."
              tags={["Python", "scikit-learn", "Metrics", "Modeling"]}
            />
            <Card
              title="Deep Learning & Computer Vision"
              text="Build and train neural networks, handle overfitting, and ship inference pipelines for images."
              tags={["PyTorch/Keras", "CNN", "Augmentation", "Inference"]}
            />
            <Card
              title="GenAI & LLM Apps"
              text="Prompting, RAG, embeddings, evaluation and safe deployment of LLM-powered applications."
              tags={["RAG", "Embeddings", "Evaluation", "Safety"]}
            />
            <Card
              title="MLOps & Deployment"
              text="Packaging, Docker, CI/CD, MLflow, monitoring and retraining strategies for real production."
              tags={["Docker", "CI/CD", "MLflow", "Monitoring"]}
            />
          </div>
        </Section>

        <div className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Want a tailored plan for your team?
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                We can adapt duration, level, datasets and deliverables.
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
