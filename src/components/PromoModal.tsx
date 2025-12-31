"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PromoModal() {
  const storageKey = "promo2026_shown";
  const originalPrice = 14000;
  const discount = 0.3;
  const finalPrice = Math.round(originalPrice * (1 - discount));
  // Deadline: March 4, 2026 (ISO)
  const deadline = new Date("2026-03-04T23:59:59");

  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const shown = localStorage.getItem(storageKey);
      const now = new Date();
      // Show only if now is before or equal to the deadline and user hasn't seen it
      if (now <= deadline && !shown) {
        setShow(true);
      }
    } catch (e) {
      // fallback: show if before deadline
      const now = new Date();
      if (now <= deadline) setShow(true);
    }
  }, []);

  useEffect(() => {
    if (show) {
      // small delay to trigger entrance transition
      const t = setTimeout(() => setMounted(true), 10);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") close();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        clearTimeout(t);
        window.removeEventListener("keydown", onKey);
      };
    } else {
      setMounted(false);
    }
  }, [show]);

  function close() {
    try {
      localStorage.setItem(storageKey, new Date().toISOString());
    } catch {}
    setMounted(false);
    // small timeout to allow exit animation
    setTimeout(() => setShow(false), 180);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60" onClick={close} />

      <div
        role="dialog"
        aria-modal="true"
        className={`relative max-w-xl w-full bg-zinc-900 text-zinc-100 rounded-lg shadow-lg p-6 z-10 transform transition-all duration-200 ease-out ${
          mounted
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-95 translate-y-2 opacity-0"
        }`}
      >
        {/* decorative gradient glow */}
        <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#ff7ab6] via-[#7c4dff] to-[#39c1f7] opacity-20 blur-3xl animate-pulse pointer-events-none" />

        {/* top-right badge */}
        <div className="absolute top-4 right-4">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-md transform animate-bounce">
            30% OFF
          </div>
        </div>

        <h2 className="text-xl font-bold mb-2">Special 2026 Discount 🎉</h2>

        <p className="mb-3 text-sm text-zinc-300">
          Enjoy <strong>30% off</strong> on{" "}
          <strong>all our master's programs</strong> for 2026.
        </p>

        <p className="mb-3 text-sm">
          Original price:{" "}
          <del className="text-zinc-400">${originalPrice.toLocaleString()}</del>{" "}
          →{" "}
          <span className="text-green-400 font-semibold">
            ${finalPrice.toLocaleString()}
          </span>
        </p>

        <p className="mb-4 text-sm text-zinc-300">
          Offer valid until: <strong>March 4, 2026</strong>
        </p>

        <div className="flex gap-3 justify-end">
          <Link
            href="/masteres"
            className="inline-flex items-center rounded bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-zinc-100"
          >
            View master's programs
          </Link>

          <button
            onClick={close}
            className="px-4 py-2 rounded border border-zinc-700 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
