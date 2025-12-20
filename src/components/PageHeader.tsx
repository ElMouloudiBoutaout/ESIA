import Link from "next/link";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  rightSlot,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  rightSlot?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-8 md:p-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          {eyebrow ? <p className="text-sm text-zinc-300">{eyebrow}</p> : null}

          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-gradient-brand">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-4 text-zinc-300 leading-relaxed">{subtitle}</p>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="btn-gradient no-underline inline-flex items-center px-5 py-3 text-sm font-semibold"
                >
                  {primaryCta.label}
                </Link>
              ) : null}

              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="no-underline inline-flex rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900 transition"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>

        {rightSlot ? (
          <div className="md:mt-1 md:ml-6 self-start">{rightSlot}</div>
        ) : null}
      </div>
    </div>
  );
}
