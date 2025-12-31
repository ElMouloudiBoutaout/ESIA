// src/app/(site)/trainings/page.tsx

import Link from "next/link";
import { trainings } from "@/data/trainings";

export default function TrainingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Trainings</h1>
        <p className="mt-3 text-lg text-neutral-600">
          Short, intensive programs designed for real-world delivery: skills you
          can apply immediately.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trainings.map((t) => (
          <div
            key={t.slug}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold leading-snug">{t.title}</h2>
              <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700">
                {t.duration}
              </span>
            </div>

            <p className="mt-3 text-sm text-neutral-600">
              {t.shortDescription}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {t.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-sm text-neutral-600">
              <span>{t.format}</span>
              {t.level ? <span>Level: {t.level}</span> : <span />}
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href={`/trainings/${t.slug}`}
                className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                View details
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Contact
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA bottom */}
      <div className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
        <h3 className="text-xl font-semibold">Need a custom version?</h3>
        <p className="mt-2 text-neutral-600">
          We can tailor duration, format, and industry use-cases for your teams.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          Talk to ESIA
        </Link>
      </div>
    </div>
  );
}
