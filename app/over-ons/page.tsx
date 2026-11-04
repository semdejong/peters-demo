import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { beeld } from "@/lib/beelden";
import { OfferteCta } from "@/components/OfferteCta";
import { PageHero } from "@/components/PageHero";
import { PhotoFigure } from "@/components/PhotoFigure";
import { Section } from "@/components/Section";
import { Uitslag, type UitslagMark } from "@/components/Uitslag";

const values: { mark: UitslagMark; title: string; text: string }[] = [
  { mark: "gaten", title: "Maatwerk", text: "100% maatwerk. Een serie of een enkel stuk, naar uw tekening." },
  { mark: "zet", title: "Flexibiliteit", text: "Flexibele opstelling en korte levertijden. Grote en kleine opdrachten kunnen allebei." },
  { mark: "las", title: "Betrokkenheid", text: "Ervaren vakmensen die met u meedenken, van begin tot eind." },
];

export const metadata: Metadata = {
  title: "Over ons | Peters Metaaltechniek",
  description:
    "Peters Metaaltechniek in Emmen is al meer dan 15 jaar partner in metaalwerk. Eigenaar Herman Peters werkt meer dan 20 jaar in het vak.",
};

export default function OverOnsPage() {
  const pand = beeld("/img/110.jpg");
  const shop = beeld("/img/140.jpg");
  return (
    <>
      <PageHero label="over ons" kicker={content.company.tagline} title="Betrouwbare partner in metaalwerk." lede={content.quotes.partner} />
      <Section name="verhaal" label="herman peters">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,68ch)_minmax(0,1fr)] lg:items-start">
          <div className="grid gap-4">
            <p className="display text-[clamp(1.5rem,3vw,2.1rem)] leading-tight">{content.quotes.allround}</p>
            <p>
              Eigenaar Herman Peters is al meer dan 20 jaar werkzaam in het vak. Voor klanten doen we dagelijks plaatbewerking, ponsnibbelen, laswerk en constructiewerk. Of het nu gaat om RVS, aluminium of staal: het gebeurt in eigen huis.
            </p>
            <p>{content.quotes.kracht}</p>
            <p>
              Onze medewerkers zijn ervaren vakmensen die graag met u meedenken. Het machinepark is modern, waardoor kleine en grote opdrachten allebei kunnen. Zowel serieproductie als enkele stuks.
            </p>
            <p>Maatwerk, flexibiliteit en betrokkenheid zijn de kernwaarden.</p>
          </div>
          <PhotoFigure beeld={pand} sizes="(max-width: 1000px) 100vw, 520px" />
        </div>
      </Section>
      <Section name="kernwaarden" label="drie" tone="white">
        <h2 className="display text-[clamp(1.8rem,3vw,2.8rem)]">Drie kernwaarden</h2>
        <ul className="mt-6 grid gap-4 lg:grid-cols-3">
          {values.map((item) => (
            <li key={item.title} className="border border-ink/15 bg-sheet p-3">
              <Uitslag mark={item.mark} className="w-full border border-ink/10 bg-white" />
              <h3 className="display mt-4 text-[1.65rem]">{item.title}</h3>
              <p className="mt-2">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section name="sterk" label="eigen huis">
        <h2 className="display text-[clamp(1.8rem,3vw,2.8rem)]">Waar we op staan</h2>
        <ul className="mt-6 grid gap-px bg-brand/25 sm:grid-cols-2">
          {content.strengths.map((item) => (
            <li key={item} className="bg-white px-4 py-5 text-lg">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section name="voor-wie" label="opdrachtgever">
        <h2 className="display text-3xl">Voor wie we werken</h2>
        <p className="measure mt-3">De opdrachtgevers zijn gevarieerd. We noemen de sectoren, niet de bedrijfsnamen.</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-5">
          {content.sectors.map((sector) => (
            <li key={sector} className="display border-t-2 border-ink py-3 text-2xl">
              {sector}
            </li>
          ))}
        </ul>
      </Section>
      <Section name="werkplaats" label="machine" tone="white">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <PhotoFigure beeld={shop} sizes="(max-width: 1000px) 100vw, 560px" />
          <div>
            <h2 className="display text-3xl">Eén werkplaats</h2>
            <p className="measure mt-3">
              Ponsnibbelen, CNC-kanten, lassen en constructiewerk staan in Emmen naast elkaar. Een plaat hoeft het pand niet uit voor de volgende bewerking.
            </p>
            <p className="measure mt-3">{content.quotes.meedenken}</p>
            <Link href="/diensten" className="mt-4 inline-flex min-h-11 items-center">
              Alle bewerkingen
            </Link>
          </div>
        </div>
      </Section>
      <Section name="certificering" label="exc2">
        <h2 className="display text-3xl">Certificaten</h2>
        <p className="measure mt-3 text-steel">De merken staan klein, zoals ze zijn. Geen nummers en geen data in de tekst.</p>
        <div className="chamfer mt-5 inline-flex flex-wrap gap-4 bg-white p-4">
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
        <p className="mt-6 border-t border-dashed border-brand pt-4">Voor CNC draai- en freeswerk: EMD Fijnmechanica</p>
      </Section>
      <Section name="groei" label="vacature 2" tone="white">
        <h2 className="display text-3xl">We groeien</h2>
        <p className="measure mt-3">Door de groei van het bedrijf en het aantal opdrachten staan er twee vacatures open. Peters is een erkend leerbedrijf.</p>
        <Link href="/werken-bij" data-cta="solliciteren" className="btn mt-5">
          Werken bij <span className="counter ml-2">2</span>
        </Link>
      </Section>
      <OfferteCta />
    </>
  );
}