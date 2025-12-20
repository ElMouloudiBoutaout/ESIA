import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <section className="py-14">
      <Container>
        <PageHeader
          eyebrow="Admissions"
          title="Apply to ESIA"
          subtitle="A clear process to validate your track and start with the right roadmap."
          primaryCta={{ label: "Contact admissions", href: "/contact" }}
          secondaryCta={{ label: "Explore programs", href: "/masteres" }}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Left: steps */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 lg:col-span-2">
            <p className="text-sm font-semibold text-white">How it works</p>

            <ol className="mt-4 space-y-4 text-sm text-zinc-300">
              <li>
                <span className="font-semibold text-white">1) Choose a track</span>
                <div className="mt-1 text-zinc-300">
                  Pick the Master’s program aligned with your goals (ML / DL / GenAI / MLOps).
                </div>
              </li>

              <li>
                <span className="font-semibold text-white">2) Share your profile</span>
                <div className="mt-1 text-zinc-300">
                  Background, timeline, constraints, and what you want to build.
                </div>
              </li>

              <li>
                <span className="font-semibold text-white">3) Short call (10–15 min)</span>
                <div className="mt-1 text-zinc-300">
                  We confirm fit, prerequisites, and the best entry point.
                </div>
              </li>

              <li>
                <span className="font-semibold text-white">4) Start with a project</span>
                <div className="mt-1 text-zinc-300">
                  Real deliverables: dataset → model → API → deployment (production mindset).
                </div>
              </li>
            </ol>

            <p className="mt-8 text-sm font-semibold text-white">What we look for</p>
            <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-zinc-300">
              <li>Motivation + clear goal (job / upskilling / project)</li>
              <li>Consistency between profile and chosen track</li>
              <li>Ability to commit time weekly (even part-time)</li>
            </ul>
          </div>

          {/* Right: CTAs */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-lg font-semibold text-white">Need help choosing?</h2>
            <p className="mt-2 text-sm text-zinc-300">
              We can guide you in 10 minutes.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                href="/contact"
                className="inline-flex w-full justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition"
              >
                Contact admissions
              </Link>

              <Link
                href="/masteres"
                className="inline-flex w-full justify-center rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900 transition"
              >
                View programs
              </Link>
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              Tip: mention your goal + start date + your current level (beginner/intermediate).
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
