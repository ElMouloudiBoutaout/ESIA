"use client";

import Link from "next/link";
import WorldCohortBadge from "@/components/WorldCohortBadge";

const nav = [
  { href: "/", label: "Home" },
  { href: "/masteres", label: "Master’s" },
  { href: "/formations", label: "Trainings" },
  { href: "/projets", label: "Projects" },
  { href: "/recherche", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        {/* LOGO */}
        <Link href="/" className="no-underline">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-white font-black">
              AI
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-gradient-brand">ESIA</p>
              <p className="text-xs text-zinc-400">
                School of Artificial Intelligence
              </p>
            </div>
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline text-sm text-zinc-300 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">
          <WorldCohortBadge />
          <Link
            href="/contact"
            className="btn-gradient no-underline inline-flex items-center px-4 py-2 text-sm font-semibold"
          >
            Request brochure
          </Link>
        </div>

        {/* CTA MOBILE */}
        <div className="md:hidden">
          <Link
            href="/contact"
            className="btn-gradient no-underline inline-flex items-center px-4 py-2 text-sm font-semibold"
          >
            Brochure
          </Link>
        </div>
      </div>

      {/* NAV MOBILE */}
      <div className="md:hidden border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap gap-3 items-center">
          <div className="w-full">
            <WorldCohortBadge />
          </div>

          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline text-xs rounded-lg border border-zinc-800 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-900 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
