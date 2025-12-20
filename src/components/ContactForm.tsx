"use client";

import { useMemo, useState } from "react";

type MasterOption = { slug: string; title: string };

export default function ContactForm({ masters }: { masters: MasterOption[] }) {
  const sortedMasters = useMemo(() => {
    return [...masters].sort((a, b) => a.title.localeCompare(b.title));
  }, [masters]);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      masterSlug: String(formData.get("masterSlug") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Failed to send message.");
      }

      setStatus("ok");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm text-zinc-300">Full name</label>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 outline-none focus:ring-2 focus:ring-white/15"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-300">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 outline-none focus:ring-2 focus:ring-white/15"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-zinc-300">Master’s program</label>
        <select
          name="masterSlug"
          required
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 outline-none focus:ring-2 focus:ring-white/15"
        >
          <option value="" disabled>
            Select a program…
          </option>
          {sortedMasters.map((m) => (
            <option key={m.slug} value={m.slug}>
              {m.title}
            </option>
          ))}
          <option value="other">Other / Not sure yet</option>
        </select>
      </div>

      <div>
        <label className="text-sm text-zinc-300">Message</label>
        <textarea
          name="message"
          required
          rows={6}
          className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 outline-none focus:ring-2 focus:ring-white/15"
          placeholder="Tell us your objective, availability, and what you want to receive."
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="btn-gradient inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send request"}
        </button>

        {status === "ok" ? (
          <p className="text-sm text-emerald-300">
            ✅ Message sent. We’ll reply soon.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="text-sm text-red-300">❌ {errorMsg}</p>
        ) : null}
      </div>

      <p className="text-xs text-zinc-500">
        By sending this form, you agree that ESIA may contact you by email about
        the selected program.
      </p>
    </form>
  );
}
