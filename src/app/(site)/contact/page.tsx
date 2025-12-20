import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <section className="py-14">
      <Container>
        <PageHeader
          eyebrow="Contact"
          title="Request a brochure or talk to admissions"
          subtitle="Send us your needs (program, timeline, background). We reply quickly with the right guidance."
          primaryCta={{ label: "Explore programs", href: "/masteres" }}
          secondaryCta={{ label: "Admissions", href: "/admissions" }}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 lg:col-span-2">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-zinc-300">Full name</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm text-zinc-300">Email</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
                    placeholder="john@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-zinc-300">Program (optional)</label>
                <input
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
                  placeholder="Data Scientist 4.0 / Deep Learning / ML Engineering..."
                />
              </div>

              <div>
                <label className="text-sm text-zinc-300">Message</label>
                <textarea
                  className="mt-2 min-h-[140px] w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
                  placeholder="Tell us your background, goals, and timeline..."
                />
              </div>

              <button
                type="button"
                className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition"
              >
                Send message
              </button>

              <p className="text-xs text-zinc-500">
                (This is a UI-only form for now. We can connect it later to email / backend.)
              </p>
            </form>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-lg font-semibold text-white">What to include</h2>
            <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-zinc-300">
              <li>Your goal (job / upskilling / project)</li>
              <li>Your background (tech/non-tech)</li>
              <li>Your timeline (when you want to start)</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
