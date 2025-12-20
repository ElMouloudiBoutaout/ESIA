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
  // ✅ Next.js 15/16 : params est une Promise → il faut await
  const { slug } = await params;

  // ✅ robustesse : si jamais le slug arrive encodé
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
            <List items={m.points ?? m.objectifs ?? m.programme ?? []} />
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-sm font-semibold text-white">Format</p>
            <List items={m.format ?? []} />

            <p className="mt-6 text-sm font-semibold text-white">Tools</p>
            <List items={m.outils ?? m.tools ?? []} />
          </div>
        </div>
      </Container>
    </section>
  );
}
