import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

function formatDate(dateISO: string) {
  const d = new Date(dateISO + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  // Latest first
  const posts = [...blogPosts].sort((a, b) =>
    b.dateISO.localeCompare(a.dateISO)
  );

  return (
    <section className="py-14">
      <Container>
        <PageHeader
          eyebrow="Blog"
          title="Insights on AI, ML, Agents & Industry 4.0"
          subtitle="Production-oriented articles: machine learning engineering, GenAI, agent systems, evaluation, monitoring, and industrial transformation."
        />

        <Section
          title="Latest articles"
          subtitle="Click an article to open the full post."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block no-underline"
              >
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/50 transition">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs text-zinc-400">
                      {formatDate(post.dateISO)}
                    </p>
                    <p className="text-xs text-zinc-400">{post.readTime}</p>
                  </div>

                  <p className="mt-2 text-sm font-semibold text-white">
                    {post.title}
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">{post.excerpt}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs font-medium text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 text-xs font-semibold text-white/90">
                    Read article →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </Container>
    </section>
  );
}
