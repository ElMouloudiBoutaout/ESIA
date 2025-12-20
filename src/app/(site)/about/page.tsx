import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="py-14">
      <Container>
        <PageHeader
          eyebrow="ESIA"
          title="About ESIA"
          subtitle="Our mission, pedagogy, and values."
          primaryCta={{ label: "Request a brochure", href: "/contact" }}
          secondaryCta={{ label: "Explore programs", href: "/masteres" }}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 lg:col-span-2">
            <p className="text-sm font-semibold text-white">Who we are</p>
            <p className="mt-2 text-sm text-zinc-300">
              ESIA is a practice-oriented school focused on AI, ML, DL, GenAI and
              MLOps, with real-world projects and production standards.
            </p>

            <p className="mt-6 text-sm font-semibold text-white">How we teach</p>
            <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-zinc-300">
              <li>Project-based learning (end-to-end deliverables)</li>
              <li>Production-ready mindset (tests, CI/CD, monitoring)</li>
              <li>Mentoring and career guidance</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-sm font-semibold text-white">Quick links</p>
            <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-zinc-300">
              <li>
                <Link className="underline underline-offset-4" href="/masteres">
                  Master’s programs
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/formations">
                  Trainings
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
