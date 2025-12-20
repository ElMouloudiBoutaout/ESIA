export default function WorldCohortBadge() {
  return (
    <div className="worldBadge" aria-label="Worldwide cohort">
      <div className="globe" aria-hidden="true" />
      <div className="txt">
        <div className="line1">Worldwide cohort</div>
        <div className="line2">Students across time zones</div>
      </div>

      <style jsx>{`
        .worldBadge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(63, 63, 70, 0.8); /* zinc-700-ish */
          background: rgba(9, 9, 11, 0.35); /* zinc-950-ish */
          backdrop-filter: blur(10px);
        }

        .txt {
          line-height: 1.15;
          white-space: nowrap;
        }
        .line1 {
          font-size: 12px;
          font-weight: 700;
          color: rgba(244, 244, 245, 0.95); /* zinc-100 */
        }
        .line2 {
          margin-top: 2px;
          font-size: 11px;
          color: rgba(161, 161, 170, 0.95); /* zinc-400 */
        }

        .globe {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          position: relative;
          overflow: hidden;
          flex: 0 0 auto;

          /* “gradient brand” inside globe */
          background: linear-gradient(
            135deg,
            rgba(207, 26, 125, 0.9),
            rgba(136, 54, 242, 0.9),
            rgba(107, 62, 253, 0.9)
          );

          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08) inset,
            0 10px 30px rgba(0, 0, 0, 0.4);
        }

        /* rotating “meridians” */
        .globe::before {
          content: "";
          position: absolute;
          inset: -40%;
          background: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0px,
            rgba(255, 255, 255, 0) 10px,
            rgba(255, 255, 255, 0.18) 11px,
            rgba(255, 255, 255, 0) 12px
          );
          transform: rotate(25deg);
          animation: spin 3.8s linear infinite;
          opacity: 0.55;
          mix-blend-mode: overlay;
        }

        /* subtle “scan” */
        .globe::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.35),
            rgba(255, 255, 255, 0) 55%
          );
          opacity: 0.6;
          pointer-events: none;
        }

        @keyframes spin {
          from {
            transform: rotate(25deg) translateX(-10%);
          }
          to {
            transform: rotate(25deg) translateX(10%);
          }
        }

        /* mobile: compacte */
        @media (max-width: 768px) {
          .worldBadge {
            padding: 8px 10px;
          }
          .line2 {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
