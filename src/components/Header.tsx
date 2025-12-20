import Link from "next/link";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/masteres", label: "Mastères" },
  { href: "/formations", label: "Formations" },
  { href: "/projets", label: "Projets" },
  { href: "/recherche", label: "Recherche" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="no-underline">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-black font-black">
              AI
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-white">ESIA</p>
              <p className="text-xs text-zinc-300">École Supérieure d’IA</p>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex flex-wrap items-center gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline text-sm text-zinc-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="no-underline rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200 transition"
        >
          Brochure
        </Link>
      </div>

      <div className="md:hidden border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap gap-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline text-xs rounded-lg border border-zinc-800 px-3 py-2 text-zinc-200 hover:text-white hover:bg-zinc-900 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
