import Link from "next/link";
import Container from "@/components/Container";

export default function HomePage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-zinc-300">ESIA — École Supérieure d’Intelligence Artificielle</p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Machine Learning, Deep Learning, GenAI & Technologies émergentes
          </h1>

          <p className="mt-5 text-zinc-300 leading-relaxed">
            Des programmes orientés projets réels : compréhension métier, qualité des données,
            modélisation ML/DL, industrialisation (MLOps) et mise en production.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/masteres"
              className="no-underline rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition"
            >
              Découvrir les Mastères
            </Link>

            <Link
              href="/projets"
              className="no-underline rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900 transition"
            >
              Voir les projets
            </Link>

            <Link
              href="/contact"
              className="no-underline rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900 transition"
            >
              Contact
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h2 className="text-lg font-semibold text-white">Approche “production-ready”</h2>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Vous apprenez à livrer : structure de projet, tracking, tests, API, Docker, CI/CD,
                monitoring et amélioration continue.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h2 className="text-lg font-semibold text-white">Pédagogie par projets</h2>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Chaque module mène à un livrable : dataset préparé, modèle évalué, service déployé,
                documentation et démonstration.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
