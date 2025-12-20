import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { masteres } from "@/data/masteres";
import Link from "next/link";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-200">
      {children}
    </span>
  );
}

function Card({
  title,
  subtitle,
  href,
  points,
}: {
  title: string;
  subtitle?: string;
  href: string;
  points?: string[];
}) {
  const safePoints = Array.isArray(points) ? points : [];
  const safeSubtitle = subtitle ?? "";

  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition hover:bg-zinc-900/45 hover:border-zinc-700 hover:shadow-[0_12px_40px_rgba(136,54,242,0.18)]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-gradient-brand">{title}</h3>
        <Badge>Master’s</Badge>
      </div>

      {safeSubtitle ? (
        <p className="mt-3 text-sm text-zinc-300">{safeSubtitle}</p>
      ) : null}

      {safePoints.length > 0 ? (
        <ul className="mt-5 space-y-2 text-sm text-zinc-300">
          {safePoints.slice(0, 3).map((p) => (
            <li key={p} className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-6 flex items-center justify-between gap-3">
        <Link
          href={href}
          className="no-underline text-sm font-semibold text-white hover:underline"
        >
          View curriculum →
        </Link>

        <Link
          href="/contact"
          className="no-underline inline-flex items-center justify-center rounded-xl border border-zinc-700 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-900 transition"
        >
          Brochure
        </Link>
      </div>
    </div>
  );
}

export default function MasteresPage() {
  return (
    <section className="py-14">
      <Container>
        <PageHeader
          eyebrow="Programs"
          title="Master’s Programs — AI & Emerging Technologies"
          subtitle="Practice-oriented tracks: Machine Learning, Deep Learning, GenAI, MLOps and deployment. Goal: train profiles able to deliver production-ready AI."
          primaryCta={{ label: "Request a brochure", href: "/contact" }}
          secondaryCta={{ label: "Discover ESIA", href: "/about" }}
        />

        {/* GRID */}
        <div className="mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gradient-brand">
                Our Master’s Programs
              </h2>
              <p className="mt-2 text-sm text-zinc-300">
                Choose your track. Each program is designed to build strong
                expertise and concrete deliverables.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge>ML</Badge>
              <Badge>Deep Learning</Badge>
              <Badge>GenAI</Badge>
              <Badge>MLOps</Badge>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {masteres.map((m) => (
              <Card
                key={m.slug}
                title={m.title}
                subtitle={m.subtitle}
                href={`/masteres/${m.slug}`}
                points={m.points ?? m.objectifs ?? m.programme ?? []}
              />
            ))}
          </div>
        </div>

        {/* WHY ESIA */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-sm font-semibold text-white">Job-oriented learning</p>
            <p className="mt-2 text-sm text-zinc-300">
              Learn by building: pipelines, APIs, deployments, monitoring. You
              graduate with a coherent portfolio.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-sm font-semibold text-white">Technical rigor</p>
            <p className="mt-2 text-sm text-zinc-300">
              Versioning, reproducibility, testing, coding best practices, data
              quality and security: the foundation of serious AI.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-sm font-semibold text-white">Production-ready AI</p>
            <p className="mt-2 text-sm text-zinc-300">
              Docker, CI/CD, monitoring, drift, retraining: what most courses
              skip, but real teams need.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gradient-brand">
                Want the full syllabus + enrollment details?
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                We’ll send a brochure and help you pick the right program.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-gradient no-underline inline-flex items-center justify-center px-6 py-3 text-sm"
            >
              Request a brochure
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
