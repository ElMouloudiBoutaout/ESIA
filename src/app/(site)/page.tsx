import Link from "next/link";
import Container from "@/components/Container";
import AnimatedHeadline from "@/components/AnimatedHeadline";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs font-medium text-zinc-200">
      {children}
    </span>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function ProgramCard({
  title,
  subtitle,
  bullets,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7 hover:bg-zinc-900/45 transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-300">{subtitle}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gradient-brand">
            {title}
          </h3>
        </div>
        <Pill>Bootcamp</Pill>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-zinc-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={ctaHref}
          className="no-underline inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition"
        >
          {ctaLabel}
        </Link>

        <Link
          href="/contact"
          className="no-underline inline-flex items-center justify-center rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900 transition"
        >
          Request a brochure
        </Link>
      </div>
    </div>
  );
}

function RoleBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-xs text-zinc-200">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        {/* HERO */}
        <div className="max-w-4xl">
          <p className="text-sm text-zinc-300">
            ESIA — School of Applied Artificial Intelligence
          </p>

          {/* ✅ GSAP-like animated headline */}
          <div className="mt-4">
            <AnimatedHeadline
              as="h1"
              className="text-4xl sm:text-6xl font-semibold tracking-tight text-gradient-brand"
              lines={[
                "Machine Learning,",
                "Deep Learning, GenAI",
                "& Emerging Technologies",
              ]}
            />
          </div>

          <p className="mt-5 text-zinc-300 leading-relaxed max-w-3xl">
            Practical, project-driven programs designed to train professionals
            who can build, deploy, and iterate on production-ready AI systems —
            with real business impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/masteres"
              className="no-underline rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition"
            >
              Explore Programs
            </Link>

            <Link
              href="/projets"
              className="no-underline rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900 transition"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="no-underline inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition
                         bg-gradient-to-r from-[#cf1a7d] via-[#8836f2] to-[#6b3efd]
                         hover:brightness-110 active:scale-[0.99]"
            >
              Request a Brochure
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            <Pill>Project-based learning</Pill>
            <Pill>Business-first AI</Pill>
            <Pill>MLOps & deployment</Pill>
            <Pill>Portfolio deliverables</Pill>
          </div>
        </div>

        {/* WHY ESIA */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Project-based delivery"
            desc="Every module leads to a concrete deliverable: cleaned datasets, evaluated models, deployed demos, and documentation."
          />
          <FeatureCard
            title="Business-first approach"
            desc="Learn to frame AI problems, estimate ROI, define success metrics, and communicate results clearly to stakeholders."
          />
          <FeatureCard
            title="Production-ready mindset"
            desc="Versioning, testing, monitoring, CI/CD basics, and MLOps practices — the foundations of serious AI engineering."
          />
        </div>

        {/* PROGRAMS */}
        <div className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-gradient-brand">
                Flexible bootcamp formats
              </h2>
              <p className="mt-2 text-sm text-zinc-300 max-w-2xl">
                Choose the pace that matches your schedule. Both tracks are
                guided and portfolio-oriented.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ProgramCard
              subtitle="4-week Intensive"
              title="Full-time bootcamp"
              bullets={[
                "Fast-track foundations in ML + GenAI + deployment basics",
                "Hands-on labs and weekly deliverables",
                "A coherent portfolio by the end of the track",
              ]}
              ctaLabel="See programs"
              ctaHref="/masteres"
            />

            <ProgramCard
              subtitle="10-week Part-time"
              title="Weekend format"
              bullets={[
                "Compatible with a full-time job",
                "Steady progress with guided milestones",
                "Real-world case studies and demos",
              ]}
              ctaLabel="See programs"
              ctaHref="/masteres"
            />
          </div>
        </div>

        {/* OUTCOMES */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7 lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-gradient-brand">
              What you will be able to do
            </h2>

            <ul className="mt-5 space-y-2 text-sm text-zinc-300">
              {[
                "Identify high-value AI use cases and define measurable success metrics",
                "Build ML/GenAI prototypes and evaluate them with robust methodology",
                "Deploy AI as services (API, container) and iterate safely with versioning",
                "Communicate results with clear reports, dashboards, and stakeholder-ready demos",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7">
            <h3 className="text-sm font-semibold text-white">
              Career outcomes
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              Roles typically targeted after ESIA:
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <RoleBadge>AI Project Manager</RoleBadge>
              <RoleBadge>Applied ML Engineer</RoleBadge>
              <RoleBadge>GenAI Product Specialist</RoleBadge>
              <RoleBadge>AI Consultant</RoleBadge>
              <RoleBadge>AI-driven Data Analyst</RoleBadge>
              <RoleBadge>MLOps-oriented DS</RoleBadge>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-gradient-brand">
                Ready to pick your track?
              </h3>
              <p className="mt-2 text-sm text-zinc-300 max-w-2xl">
                Get the full syllabus, format details, and enrollment guidance.
                We’ll help you choose the right program.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="no-underline inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition
                           bg-gradient-to-r from-[#cf1a7d] via-[#8836f2] to-[#6b3efd]
                           hover:brightness-110 active:scale-[0.99]"
              >
                Request a brochure
              </Link>

              <Link
                href="/masteres"
                className="no-underline inline-flex items-center justify-center rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-900 transition"
              >
                Explore programs
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
