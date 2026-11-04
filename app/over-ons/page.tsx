import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { beeld } from "@/lib/beelden";
import { OfferteCta } from "@/components/OfferteCta";
import { PageHero } from "@/components/PageHero";
import { PlateImg } from "@/components/PlateImg";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Over ons | Peters Metaaltechniek",
  description:
    "Peters Metaaltechniek in Emmen is al meer dan 15 jaar partner in metaalwerk. Eigenaar Herman Peters werkt meer dan 20 jaar in het vak.",
};

export default function OverOnsPage() {
  const pand = beeld("/img/110.jpg");
  return (
    <>
      <PageHero
        label="over ons"
        kicker={content.company.tagline}
        title="Betrouwbare partner in metaalwerk."
        lede={content.quotes.partner}
      />
      <Section name="verhaal" label="herman peters">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-4">
            <p className="measure">{content.quotes.allround}</p>
            <p className="measure">
              Eigenaar Herman Peters is al meer dan 20 jaar werkzaam in het vak. Voor klanten doen we plaatbewerking, ponsnibbelen, laswerk en constructiewerk in RVS, aluminium en staal.
            </p>
            <p className="measure">{content.quotes.kracht}</p>
            <p className="measure">
              Onze medewerkers zijn ervaren vakmensen die graag met u meedenken. We hebben een modern machinepark, waardoor kleine en grote opdrachten allebei kunnen.
            </p>
            <p className="measure">
              De opdrachtgevers zijn gevarieerd: bedrijven uit de industrie, zorg, bouw, horeca en particulieren.
            </p>
            <p className="measure">Maatwerk, flexibiliteit en betrokkenheid zijn de kernwaarden.</p>
          </div>
          <PlateImg beeld={pand} sizes="(max-width: 1000px) 100vw, 560px" />
        </div>
      </Section>
      <Section name="sterk" label="eigen huis" tone="white">
        <h2 className="display mb-4 text-3xl">Waar we op staan</h2>
        <ul className="ruled border-y border-ink/15">
          {content.strengths.map((item) => (
            <li key={item} className="py-3">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section name="certificering" label="exc2">
        <h2 className="display text-3xl">Certificaten</h2>
        <div className="mt-5 flex flex-wrap gap-4">
          <Image src="/img/cert-vca-iso9001.jpg" alt="Bureau Veritas-merk voor VCA* en ISO 9001" width={216} height={100} />
          <Image src="/img/cert-en1090.jpg" alt="Bureau Veritas-merk voor EN 1090-2, executieklasse 2" width={216} height={100} />
        </div>
        <ul className="ruled mt-6 border-y border-ink/15">
          {content.certificates.map((item) => (
            <li key={item.title} className="grid gap-1 py-3 md:grid-cols-[240px_1fr]">
              <h3 className="font-medium">{item.title}</h3>
              <p>
                {item.title === "Metaalunievoorwaarden" ? (
                  <Link href="/over-ons/algemene-voorwaarden">{item.text}</Link>
                ) : (
                  item.text
                )}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6">Voor CNC draai- en freeswerk: EMD Fijnmechanica</p>
      </Section>
      <OfferteCta />
    </>
  );
}
