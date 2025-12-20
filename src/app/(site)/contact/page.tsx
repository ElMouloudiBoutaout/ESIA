import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { masteres } from "@/data/masteres";

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-zinc-300">{desc}</p>
    </div>
  );
}

function OptionCard({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/45 transition">
      <p className="text-base font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ContactPage() {
  const mastersOptions = masteres.map((m) => ({
    value: m.slug,
    label: m.title,
  }));

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <PageHeader
          eyebrow="Contact"
          title="Request a brochure or book an orientation call"
          subtitle="Tell us what you want to learn. We’ll reply quickly with the right track, the syllabus, and enrollment guidance."
          primaryCta={{ label: "Request brochure", href: "#form" }}
          secondaryCta={{ label: "Explore Master’s", href: "/masteres" }}
        />

        {/* Main layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          {/* LEFT: content */}
          <div className="lg:col-span-3">
            {/* Stats / highlights */}
            <div className="grid gap-4 sm:grid-cols-3">
              <Stat
                title="Fast response"
                desc="We typically reply within 24–48h."
              />
              <Stat
                title="Clear guidance"
                desc="We help you choose the best program format."
              />
              <Stat
                title="Career-driven"
                desc="Portfolio + production-ready mindset."
              />
            </div>

            {/* Orientation options */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold tracking-tight text-gradient-brand">
                Orientation options
              </h2>
              <p className="mt-2 text-sm text-zinc-300 max-w-2xl">
                Choose what’s easiest: online call or a campus-style walkthrough
                (demo, program structure, career paths, Q&A).
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <OptionCard
                  title="Online orientation call (recommended)"
                  desc="A short, focused call to align on your goals and recommend the right track."
                  bullets={[
                    "Format: 20–30 minutes",
                    "We review your profile + objectives",
                    "You receive syllabus + next steps",
                  ]}
                />
                <OptionCard
                  title="Program walkthrough"
                  desc="A structured overview of the program: curriculum, projects, tools and outcomes."
                  bullets={[
                    "Curriculum + project portfolio examples",
                    "Tools: ML, GenAI, MLOps, deployment",
                    "Admissions & scheduling discussion",
                  ]}
                />
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7">
              <h3 className="text-lg font-semibold text-white">
                Quick answers
              </h3>
              <div className="mt-4 space-y-4 text-sm text-zinc-300 leading-relaxed">
                <div>
                  <p className="font-semibold text-white">What do I receive?</p>
                  <p className="mt-1">
                    A brochure with curriculum, formats, prerequisites, expected
                    outcomes, and the recommended track for your goal.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Can I study while working?
                  </p>
                  <p className="mt-1">
                    Yes — we can guide you toward a part-time / weekend path
                    depending on your availability.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Do you focus on real deliverables?
                  </p>
                  <p className="mt-1">
                    Yes — projects, deployed demos, clean repos, documentation,
                    and interview-ready storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="lg:col-span-2">
            <div
              id="form"
              className="lg:sticky lg:top-24 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7"
            >
              <p className="text-sm font-semibold text-white">
                Send your request
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                Fill the form — we’ll contact you with the brochure and
                guidance.
              </p>

              {/* For later: point this action to your API route (/api/contact) */}
              <form
                className="mt-6 space-y-4"
                method="post"
                action="/api/contact"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-zinc-300">First name</label>
                    <input
                      name="firstName"
                      required
                      className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-300">Last name</label>
                    <input
                      name="lastName"
                      required
                      className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="name@email.com"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-300">
                    Phone (optional)
                  </label>
                  <input
                    name="phone"
                    className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="+33 ..."
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-300">
                    Master’s program
                  </label>
                  <select
                    name="master"
                    required
                    className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-white/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a program
                    </option>
                    {mastersOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                    <option value="not_sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-zinc-300">
                    Preferred format
                  </label>
                  <select
                    name="format"
                    className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-white/20"
                    defaultValue="online"
                  >
                    <option value="online">Online call</option>
                    <option value="walkthrough">Program walkthrough</option>
                    <option value="brochure_only">Brochure only</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-zinc-300">Your message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Tell us your goal (career, projects, timeline, experience)…"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs text-zinc-300">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-950/40"
                  />
                  <span>
                    I agree to be contacted by ESIA regarding my request (email
                    or phone).
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full no-underline inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition
                             bg-gradient-to-r from-[#cf1a7d] via-[#8836f2] to-[#6b3efd]
                             hover:brightness-110 active:scale-[0.99]"
                >
                  Send request
                </button>

                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Your data is used only to process your request and guide you
                  to the right program.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
