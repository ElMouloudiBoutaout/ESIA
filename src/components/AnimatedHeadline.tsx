"use client";

import * as React from "react";

type AnimatedHeadlineProps = {
  as?: "h1" | "h2" | "h3";
  className?: string;
  lines?: string[]; // ✅ optionnel
  intervalMs?: number; // vitesse d’animation
};

export default function AnimatedHeadline({
  as = "h1",
  className = "",
  lines = [], // ✅ fallback évite undefined
  intervalMs = 70,
}: AnimatedHeadlineProps) {
  const Tag = as;

  // ✅ sécurise encore plus : si quelqu’un passe autre chose qu’un tableau
  const safeLines = Array.isArray(lines) ? lines : [];

  const fullText = React.useMemo(() => safeLines.join("\n"), [safeLines]);

  const [shown, setShown] = React.useState("");

  React.useEffect(() => {
    // si pas de texte -> rien à animer
    if (!fullText) return;

    let i = 0;
    setShown(""); // reset si le texte change

    const id = window.setInterval(() => {
      i += 1;
      setShown(fullText.slice(0, i));
      if (i >= fullText.length) window.clearInterval(id);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [fullText, intervalMs]);

  return (
    <Tag className={className} style={{ whiteSpace: "pre-line" }}>
      {shown}
      {/* petit curseur */}
      {fullText && shown.length < fullText.length ? (
        <span className="inline-block w-[0.6ch] animate-pulse">▍</span>
      ) : null}
    </Tag>
  );
}
