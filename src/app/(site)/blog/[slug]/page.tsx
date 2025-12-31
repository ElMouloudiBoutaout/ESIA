import Container from "@/components/Container";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

function formatDate(dateISO: string) {
  const d = new Date(dateISO + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const toc = post.content
    .filter((b) => b.type === "h2" || b.type === "h3")
    .map((b) => ({
      level: b.type === "h2" ? 2 : 3,
      text: (b as any).text as string,
      id: ((b as any).text as string)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    }));

  return (
    <section className="py-14">
      <Container>
        <Link href="/blog" className="text-sm text-zinc-300 hover:underline">
          ← Back to blog
        </Link>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Article */}
          <article className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-zinc-400">
                {formatDate(post.dateISO)}
              </p>
              <p className="text-xs text-zinc-400">{post.readTime}</p>
            </div>

            <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              {post.title}
            </h1>

            <p className="mt-4 text-sm text-zinc-300">{post.excerpt}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs font-medium text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-8">
              {post.content.map((block, idx) => {
                if (block.type === "h2") {
                  const id = block.text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                  return (
                    <h2
                      key={idx}
                      id={id}
                      className="text-xl font-semibold text-white scroll-mt-28"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "h3") {
                  const id = block.text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                  return (
                    <h3
                      key={idx}
                      id={id}
                      className="text-base font-semibold text-white scroll-mt-28"
                    >
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "p") {
                  return (
                    <p key={idx} className="text-sm leading-7 text-zinc-200">
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "ul") {
                  return (
                    <ul
                      key={idx}
                      className="list-disc space-y-2 pl-6 text-sm text-zinc-200"
                    >
                      {block.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5"
                    >
                      <p className="text-sm italic text-zinc-200">
                        “{block.text}”
                      </p>
                    </div>
                  );
                }

                if (block.type === "callout") {
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5"
                    >
                      <p className="text-xs font-semibold text-white">
                        {block.title}
                      </p>
                      <p className="mt-2 text-sm text-zinc-200">{block.text}</p>
                    </div>
                  );
                }

                if (block.type === "faq") {
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6"
                    >
                      <p className="text-sm font-semibold text-white">FAQ</p>
                      <div className="mt-4 space-y-4">
                        {block.items.map((qa) => (
                          <div key={qa.q}>
                            <p className="text-sm font-semibold text-zinc-100">
                              {qa.q}
                            </p>
                            <p className="mt-1 text-sm text-zinc-200">{qa.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
              <p className="text-sm font-semibold text-white">
                Want to go deeper?
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                Ask for a brochure, a syllabus, or a live walkthrough of our
                training projects and delivery standards.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition no-underline"
              >
                Contact us
              </Link>
            </div>
          </article>

          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="text-sm font-semibold text-white">On this page</p>
              <div className="mt-4 space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm text-zinc-300 hover:text-white ${
                      item.level === 3 ? "pl-4 text-zinc-400" : ""
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
