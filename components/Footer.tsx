import Link from "next/link";
import { content } from "@/content";
import { PhoneLink } from "@/components/PhoneLink";

const links = [
  { href: "/ponsnibbelen", label: "Ponsnibbelen" },
  { href: "/cnc-kanten", label: "CNC-kanten" },
  { href: "/lassen-staal-rvs-en-aluminium", label: "Lassen" },
  { href: "/constructiewerk", label: "Constructiewerk" },
  { href: "/fotos", label: "Foto's" },
  { href: "/werken-bij", label: "Werken bij" },
  { href: "/over-ons/algemene-voorwaarden", label: "Algemene voorwaarden" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  const { company, contact } = content;
  return (
    <footer data-section="footer" className="site-footer on-ink">
      <div className="frame grid gap-8 px-0 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="display text-3xl text-sheet">{company.shortName}</p>
          <p className="mt-3 max-w-[36ch] text-sheet/90">{company.tagline}. {company.slogan}.</p>
          <p className="mt-4">
            {contact.street}
            <br />
            {contact.postalCode} {contact.city}
          </p>
          <p className="mt-3">
            <PhoneLink className="text-sheet" />
            <br />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p className="mt-3 font-mono text-sm text-sheet/80">
            KvK {contact.kvk}
            <br />
            BTW {contact.btw}
          </p>
        </div>
        <div>
          <ul className="grid">
            {links.map((link) => (
              <li key={link.href} className="border-t border-sheet/20">
                <Link href={link.href} className="flex min-h-11 items-center no-underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-sheet/85">Voor CNC draai- en freeswerk: EMD Fijnmechanica</p>
          <p className="mt-4 text-sm">
            <a href="https://sleads.nl" target="_blank" rel="noopener">
              Concept door Sleads
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
