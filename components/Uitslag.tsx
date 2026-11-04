/**
 * Flat-pattern plate. A drawing of the site, not a claim about a specific part.
 * gaten = ponsen, zet = kanten, las = lassen, hoek = constructie, vel = all four.
 */
export type UitslagMark = "gaten" | "zet" | "las" | "hoek" | "vel";

export function Uitslag({ mark, className = "" }: { mark: UitslagMark; className?: string }) {
  return (
    <svg viewBox="0 0 200 132" className={className} role="img" aria-label="Uitslag van een plaat">
      <rect width="200" height="132" fill="#F3F4F5" />
      <path d="M8 18 L28 8 H188 V120 H8 Z" fill="#fff" stroke="#265684" strokeWidth="1.25" />
      {mark === "gaten" || mark === "vel" ? <Holes /> : null}
      {mark === "zet" || mark === "vel" ? <Bend /> : null}
      {mark === "las" || mark === "vel" ? <Seam /> : null}
      {mark === "hoek" ? <Chamfer /> : null}
      {mark === "vel" ? <Chamfer light /> : null}
    </svg>
  );
}

function Holes() {
  const dots = [];
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 7; col += 1) {
      dots.push(
        <circle key={`${row}-${col}`} cx={46 + col * 16} cy={36 + row * 16} r={row % 2 === 0 ? 3.2 : 2.2} fill="#265684" />,
      );
    }
  }
  return <g>{dots}</g>;
}

function Bend() {
  return (
    <g>
      <line x1="36" y1="46" x2="176" y2="46" stroke="#265684" strokeDasharray="5 4" />
      <line x1="36" y1="78" x2="176" y2="78" stroke="#265684" strokeDasharray="5 4" />
      <rect x="148" y="40" width="28" height="12" fill="#13212E" />
      <text x="162" y="49" textAnchor="middle" fill="#F2C230" fontFamily="ui-monospace, monospace" fontSize="7">
        90°
      </text>
    </g>
  );
}

function Seam() {
  const stitches = [40, 58, 76, 94, 112, 130, 148];
  return (
    <g>
      {stitches.map((x) => (
        <path key={x} d={`M${x} 96 L${x + 10} 88`} stroke="#13212E" strokeWidth="2.4" strokeLinecap="square" />
      ))}
    </g>
  );
}

function Chamfer({ light = false }: { light?: boolean }) {
  return (
    <g>
      <path d="M118 8 H188 V78 L118 8" fill={light ? "none" : "#E7EAEC"} stroke="#265684" strokeWidth="1.25" />
      <line x1="122" y1="12" x2="184" y2="74" stroke="#13212E" strokeDasharray="4 3" />
      {light ? null : (
        <g fill="#265684">
          <circle cx="46" cy="96" r="3.1" />
          <circle cx="66" cy="96" r="3.1" />
          <circle cx="86" cy="96" r="3.1" />
        </g>
      )}
    </g>
  );
}
