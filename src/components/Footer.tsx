import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-12 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-white">ESIA</p>
            <p className="mt-2 text-sm text-zinc-300">
              École Supérieure d’Intelligence Artificielle.
              Du dataset à la production : ML, DL, GenAI, MLOps.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Programmes</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/masteres" className="text-zinc-300 hover:text-white">
                Mastères
              </Link>
              <Link href="/formations" className="text-zinc-300 hover:text-white">
                Formations
              </Link>
              <Link href="/projets" className="text-zinc-300 hover:text-white">
                Projets
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Ressources</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/blog" className="text-zinc-300 hover:text-white">
                Blog
              </Link>
              <Link href="/recherche" className="text-zinc-300 hover:text-white">
                Recherche
              </Link>
              <Link href="/ressources" className="text-zinc-300 hover:text-white">
                Ressources
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/contact" className="text-zinc-300 hover:text-white">
                Demander une brochure
              </Link>
              <Link href="/mentions-legales" className="text-zinc-300 hover:text-white">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} ESIA — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
