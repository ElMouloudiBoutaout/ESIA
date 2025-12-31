import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Link from "next/link";

function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs font-medium text-zinc-200">
      {text}
    </span>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
      <p className="text-xs text-zinc-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-zinc-300">{hint}</p>
    </div>
  );
}

function Card({
  title,
  text,
  points,
}: {
  title: string;
  text: string;
  points: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/50 transition">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-zinc-300">{text}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-200">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="py-14">
      <Container>
        <PageHeader
          eyebrow="About ESIA"
          title="A school built for real-world AI delivery"
          subtitle="ESIA is designed for one goal: help professionals and future AI engineers build production-ready systems — from data to deployment — across Machine Learning, GenAI, AI Agents, and Industry 4.0 use cases."
          primaryCta={{ label: "Request a brochure", href: "/contact" }}
          secondaryCta={{ label: "Explore programs", href: "/masteres" }}
        />

        <Section
          title="Our mission"
          subtitle="We train engineers and decision-makers to ship reliable AI — not just prototypes."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              title="Production-first mindset"
              text="We teach how to move from notebooks to systems with reproducibility, monitoring, testing, and governance."
              points={[
                "Evaluation as a release gate",
                "Versioning for data / prompts / models",
                "Monitoring for drift, latency, and cost",
              ]}
            />
            <Card
              title="Portfolio-driven learning"
              text="Every learner builds projects that look like real industry work: clean structure, clear KPIs, and measurable outcomes."
              points={[
                "End-to-end pipelines",
                "Business-aligned metrics",
                "Deliverables recruiters recognize",
              ]}
            />
            <Card
              title="Industry 4.0 & modern AI"
              text="We focus on the AI patterns companies adopt today: predictive systems, GenAI with RAG, and agentic workflows with guardrails."
              points={[
                "Predictive maintenance, quality inspection",
                "RAG assistants with citations + evaluation",
                "Agents with tool validation + audit trails",
              ]}
            />
          </div>
        </Section>

        <Section
          title="What makes ESIA different"
          subtitle="A modern approach to AI that combines engineering, delivery discipline, and business impact."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
              <h2 className="text-lg font-semibold text-white">
                We teach systems — not isolated models
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-200">
                A model is only one component. Real-world AI requires data
                contracts, feature pipelines, evaluation suites, deployment
                specs, monitoring, and clear ownership. That is why ESIA
                programs are structured around end-to-end delivery and real
                constraints: latency, cost, safety, and governance.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill text="MLOps & Monitoring" />
                <Pill text="GenAI + RAG" />
                <Pill text="AI Agents" />
                <Pill text="Industry 4.0" />
                <Pill text="Evaluation & QA" />
                <Pill text="Governance" />
              </div>

              <div className="mt-7 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
                <p className="text-xs font-semibold text-white">
                  Practical definition of “done”
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-200">
                  <li>Clear KPI + decision policy (thresholds and actions)</li>
                  <li>Evaluation set + regression checks before release</li>
                  <li>Deployment method (API/batch/edge) with contracts</li>
                  <li>Monitoring plan (drift, latency, cost, incidents)</li>
                  <li>Documentation for handover and auditability</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6">
              <Stat
                label="Learning style"
                value="Applied"
                hint="Hands-on labs, projects, and production patterns — every week."
              />
              <Stat
                label="Training outcomes"
                value="Portfolio-ready"
                hint="Deliverables designed to be used for interviews and real team workflows."
              />
              <Stat
                label="Core focus"
                value="Reliability"
                hint="Testing, monitoring, evaluation gates, and safe iteration."
              />
            </div>
          </div>
        </Section>

        <Section
          title="How we structure learning"
          subtitle="A repeatable format that makes progress visible and measurable."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              title="1) Build the baseline"
              text="Start with a clean end-to-end baseline that can be deployed and monitored."
              points={[
                "Data prep + leakage-safe validation",
                "Baseline model + error analysis",
                "First deployable artifact",
              ]}
            />
            <Card
              title="2) Upgrade to production"
              text="Add engineering practices that make the system safe to maintain."
              points={[
                "Testing + CI checks",
                "Versioning and experiment tracking",
                "Monitoring dashboards + alerts",
              ]}
            />
            <Card
              title="3) Ship real projects"
              text="Deliver portfolio projects aligned with industry use cases and constraints."
              points={[
                "API or batch scoring deliverables",
                "RAG apps with evaluation + citations",
                "Agents with guardrails and audit trails",
              ]}
            />
          </div>
        </Section>

        <Section
          title="Who ESIA is for"
          subtitle="Designed for professionals and future AI engineers who want concrete outcomes."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
              <h2 className="text-lg font-semibold text-white">
                Ideal profiles
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-200">
                <li>Data Analysts moving into Machine Learning</li>
                <li>Software Engineers building AI features and APIs</li>
                <li>Data Scientists who want to ship models reliably</li>
                <li>Product/Project leaders working with AI roadmaps</li>
                <li>
                  Industry professionals aiming at Industry 4.0 transformation
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
              <h2 className="text-lg font-semibold text-white">
                What you will be able to do
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-200">
                <li>Design end-to-end AI pipelines with clean structure</li>
                <li>Deploy models via API/batch and monitor behavior</li>
                <li>
                  Build GenAI apps with RAG, evaluation, and safety patterns
                </li>
                <li>
                  Create agent workflows with tool validation and approvals
                </li>
                <li>Communicate impact with measurable KPIs</li>
              </ul>
            </div>
          </div>
        </Section>

        <div className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Ready to discuss a program?
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                We can share a brochure, a sample syllabus, and a portfolio
                roadmap aligned with your goals.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="no-underline inline-flex justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition"
              >
                Contact us
              </Link>
              <Link
                href="/trainings"
                className="no-underline inline-flex justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-900/60 transition"
              >
                View trainings
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
