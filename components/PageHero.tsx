import type { ReactNode } from "react";

export function PageHero({
  label,
  kicker,
  title,
  lede,
  children,
}: {
  label: string;
  kicker?: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header data-section="page-hero" className="border-b border-dashed border-brand bg-sheet">
      <div className="frame sheet-grid pad">
        <div className="anno">
          <span className="zet">{label}</span>
        </div>
        <div>
          {kicker ? <p className="kicker mb-3">{kicker}</p> : null}
          <h1 className="display max-w-[16ch] text-[clamp(2.3rem,6.4vw,4.7rem)]">{title}</h1>
          {lede ? <p className="measure mt-4 text-steel">{lede}</p> : null}
          {children ? <div className="mt-6 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </header>
  );
}
