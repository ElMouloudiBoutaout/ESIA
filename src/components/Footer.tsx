import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-12 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-white">ESIA</p>
            <p className="mt-2 text-sm text-zinc-300">
              School of Artificial Intelligence. From dataset to production :
              ML, DL, GenAI, MLOps.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Programs</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/masteres" className="text-zinc-300 hover:text-white">
                Master’s Programs
              </Link>
              <Link
                href="/trainings"
                className="text-zinc-300 hover:text-white"
              >
                Trainings
              </Link>
              <Link href="/Projects" className="text-zinc-300 hover:text-white">
                Projects
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Resources</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/blog" className="text-zinc-300 hover:text-white">
                Blog
              </Link>
              <Link href="/Research" className="text-zinc-300 hover:text-white">
                Research
              </Link>
              <Link
                href="/Resources"
                className="text-zinc-300 hover:text-white"
              >
                Resources
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/contact" className="text-zinc-300 hover:text-white">
                Request a brochure
              </Link>
              <Link
                href="/mentions-legales"
                className="text-zinc-300 hover:text-white"
              >
                Legal notice
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} ESIA — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
