import type { ReactNode } from "react";

export function Section({
  name,
  label,
  children,
  tone = "sheet",
  id,
  className = "",
}: {
  name: string;
  label?: string;
  children: ReactNode;
  tone?: "sheet" | "ink" | "plate" | "white";
  id?: string;
  className?: string;
}) {
  const toneClass =
    tone === "ink" ? "band band-ink on-ink" : tone === "plate" ? "bg-plate" : tone === "white" ? "bg-white border-t border-dashed border-brand" : "band";
  return (
    <section data-section={name} id={id} className={`${toneClass} ${className}`}>
      <div className="frame sheet-grid pad">
        <div className="anno">{label ? <span className="zet">{label}</span> : null}</div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
