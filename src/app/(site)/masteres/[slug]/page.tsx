import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { masteres } from "@/data/masteres";
import { notFound } from "next/navigation";

function List({ items }: { items?: string[] }) {
  const safe = Array.isArray(items) ? items : [];
  if (safe.length === 0) return null;

  return (
    <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-zinc-300">
      {safe.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default async function MastereDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const m = masteres.find((x) => x.slug === decodedSlug);
  if (!m) return notFound();

  return (
    <section className="py-14">
      <Container>
        <PageHeader
          eyebrow="Master’s Program"
          title={m.title}
          subtitle={m.subtitle}
          primaryCta={{ label: "Request a brochure", href: "/contact" }}
          secondaryCta={{ label: "Back to programs", href: "/masteres" }}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 lg:col-span-2">
            <p className="text-sm font-semibold text-white">Overview</p>
            <p className="mt-2 text-sm text-zinc-300">
              {m.description ?? "Program overview will be added soon."}
            </p>

            <p className="mt-6 text-sm font-semibold text-white">
              Key outcomes
            </p>
            <List items={m.points ?? m.programme ?? []} />
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-sm font-semibold text-white">Format</p>
            <List items={m.format ?? []} />

            <p className="mt-6 text-sm font-semibold text-white">Tools</p>
            <List items={m.tools ?? []} />
          </div>
        </div>

        {m.programDetailed?.modules?.length ? (
          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-sm font-semibold text-white">Detailed program</p>

            {m.programDetailed.headline ? (
              <p className="mt-2 text-sm text-zinc-300">
                {m.programDetailed.headline}
              </p>
            ) : null}

            <div className="mt-6 space-y-4">
              {m.programDetailed.modules.map((mod) => (
                <details
                  key={mod.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
                >
                  <summary className="cursor-pointer list-none">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {mod.title}
                        </h3>
                        {mod.description ? (
                          <p className="mt-1 text-sm text-zinc-300">
                            {mod.description}
                          </p>
                        ) : null}
                      </div>
                      {mod.duration ? (
                        <span className="text-xs text-zinc-400">
                          {mod.duration}
                        </span>
                      ) : null}
                    </div>
                  </summary>

                  <div className="mt-5 space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        What you’ll learn
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        {mod.content.map((x) => (
                          <li key={x} className="flex gap-2">
                            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-zinc-500" />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Skills you’ll gain
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {mod.skills.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs font-medium text-zinc-200"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
