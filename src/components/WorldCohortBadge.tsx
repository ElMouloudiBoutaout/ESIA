"use client";
export default function WorldCohortBadge() {
  return (
    <div className="worldBadge" aria-label="Worldwide cohort">
      <div className="globe" aria-hidden="true" />
      <div className="txt">
        <div className="line1">Worldwide cohort</div>
        <div className="line2">Students across time zones</div>
      </div>
    </div>
  );
}
