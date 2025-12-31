// src/app/(site)/trainings/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { trainings } from "@/data/trainings";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function TrainingDetailPage({ params }: Props) {
  const { slug } = await params;
  const training = trainings.find((t) => t.slug === slug);

  if (!training) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/trainings"
          className="text-sm text-neutral-600 hover:underline"
        >
          ← Back to Trainings
        </Link>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          {training.title}
        </h1>
        <p className="mt-3 text-lg text-neutral-600">
          {training.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {training.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <p className="text-xs text-neutral-500">Duration</p>
            <p className="mt-1 font-medium">{training.duration}</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <p className="text-xs text-neutral-500">Format</p>
            <p className="mt-1 font-medium">{training.format}</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <p className="text-xs text-neutral-500">Level</p>
            <p className="mt-1 font-medium">{training.level ?? "All levels"}</p>
          </div>
        </div>

        <div className="mt-7 flex gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Contact / Enroll
          </Link>
          <Link
            href="/trainings"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Browse all trainings
          </Link>
        </div>
      </div>

      {/* Body */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main */}
        <div className="lg:col-span-2">
          {training.objectives?.length ? (
            <section className="mb-8">
              <h2 className="text-xl font-semibold">Key outcomes</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
                {training.objectives.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {training.syllabus?.length ? (
            <section>
              <h2 className="text-xl font-semibold">Syllabus</h2>
              <div className="mt-4 space-y-4">
                {training.syllabus.map((block) => (
                  <div
                    key={block.title}
                    className="rounded-2xl border border-neutral-200 bg-white p-6"
                  >
                    <h3 className="font-semibold">{block.title}</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
                      {block.content.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <section className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Program</h2>
              <p className="mt-2 text-neutral-600">
                Detailed syllabus will be published soon. Contact us to receive
                the latest version.
              </p>
            </section>
          )}
        </div>

        {/* Side */}
        <aside className="space-y-6">
          {training.prerequisites?.length ? (
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold">Prerequisites</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
                {training.prerequisites.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {training.tools?.length ? (
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold">Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {training.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="font-semibold">Enterprise / Custom</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Adapted use-cases, private cohorts, and industry datasets on
              request.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Request a proposal
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
