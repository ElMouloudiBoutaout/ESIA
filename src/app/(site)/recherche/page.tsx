import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Link from "next/link";

function Item({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/50 transition">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-zinc-300">{text}</p>
    </div>
  );
}

export default function RecherchePage() {
  return (
    <section className="py-14">
      <Container>
        <PageHeader
          eyebrow="Research & Innovation"
          title="Explore emerging AI technologies"
          subtitle="We focus on applied research: evaluation, reliability, deployment patterns and practical experimentation."
          primaryCta={{ label: "Contact us", href: "/contact" }}
          secondaryCta={{ label: "View Projects", href: "/projets" }}
        />

        <Section
          title="Research Directions"
          subtitle="Topics we explore to keep programs aligned with real-world evolution."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Item
              title="LLM Evaluation & Reliability"
              text="How to measure quality, reduce hallucinations, design robust prompts and test RAG pipelines."
            />
            <Item
              title="MLOps & Continuous Delivery"
              text="From experiment tracking to CI/CD, monitoring, drift detection and retraining strategies."
            />
            <Item
              title="Data Quality & Governance"
              text="Validation rules, lineage, privacy-aware pipelines and safe data handling."
            />
            <Item
              title="Edge & Efficient AI"
              text="Optimization, quantization and lightweight inference strategies."
            />
          </div>
        </Section>

        <div className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Interested in collaborating?
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Partnerships, guest talks, and co-developed projects are welcome.
              </p>
            </div>
            <Link
              href="/contact"
              className="no-underline inline-flex justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
