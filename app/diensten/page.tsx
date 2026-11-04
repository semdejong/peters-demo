import type { Metadata } from "next";
import Link from "next/link";
import { content, sheets, type ServiceKey } from "@/content";
import { beeld } from "@/lib/beelden";
import { ChainStrip } from "@/components/ChainStrip";
import { OfferteCta } from "@/components/OfferteCta";
import { PageHero } from "@/components/PageHero";
import { PhotoFigure } from "@/components/PhotoFigure";
import { Section } from "@/components/Section";
import { Uitslag, type UitslagMark } from "@/components/Uitslag";

const legend: { mark: UitslagMark; title: string; text: string; href: string }[] = [
  {
    mark: "gaten",
    title: "Gaten",
    text: "Perforaties, gaten en gatenpatronen in de vlakke plaat. Dat is ponsnibbelen.",
    href: "/ponsnibbelen",
  },
  {
    mark: "zet",
    title: "Zetlijn",
    text: "Een streepjeslijn is waar de plaat gezet wordt. Twee kantbanken, staal, RVS en aluminium.",
    href: "/cnc-kanten",
  },
  {
    mark: "las",
    title: "Naad",
    text: "Korte streepjes langs een naad: lassen van staal, RVS en aluminium, ook samenstellingen.",
    href: "/lassen-staal-rvs-en-aluminium",
  },
  {
    mark: "hoek",
    title: "Schuine hoek",
    text: "Het deel wordt een trap, bordes of frame. Ontwerp, productie en montage zitten erbij.",
    href: "/constructiewerk",
  },
];

export const metadata: Metadata = {
  title: "Diensten | Peters Metaaltechniek",
  description:
    "Ponsnibbelen, CNC-kanten, lassen en constructiewerk in staal, RVS en aluminium. Alles onder één dak bij Peters Metaaltechniek in Emmen.",
};

const order: { key: ServiceKey; image: string }[] = [
  { key: "ponsnibbelen", image: "/img/126.jpg" },
  { key: "kanten", image: "/img/142.jpg" },
  { key: "lassen", image: "/img/129.jpg" },
  { key: "constructie", image: "/img/186.jpg" },
];

export default function DienstenPage() {
  return (
    <>
      <PageHero
        label="diensten"
        kicker="Toelevering"
        title="Alle bewerkingen onder één dak."
        lede="Betrouwbare toeleverancier voor producten uit RVS, staal en aluminium. Van een vlakke plaat tot een gelaste, gemonteerde constructie, in Emmen."
      />
      <Section name="keten" label="uitslag">
        <h2 className="display text-[clamp(1.8rem,3vw,2.8rem)]">De keten</h2>
        <p className="measure mt-3">{content.quotes.kracht} {content.quotes.meedenken}</p>
        <div className="mt-6">
          <ChainStrip />
        </div>
      </Section>
      <Section name="leeswijzer" label="uitslag" tone="white">
        <h2 className="display text-[clamp(1.8rem,3vw,2.8rem)]">Zo leest u de uitslag</h2>
        <p className="measure mt-3">
          Een uitslag is de plaat, platgetekend, vóórdat hij gezet wordt. Op deze site is dat de manier waarop de vier bewerkingen naast elkaar staan.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {legend.map((item) => (
            <li key={item.href} className="grid items-center gap-4 border border-ink/15 bg-sheet p-3 sm:grid-cols-[148px_1fr]">
              <Uitslag mark={item.mark} className="w-full border border-ink/10 bg-white" />
              <div>
                <h3 className="display text-2xl">{item.title}</h3>
                <p className="mt-2 text-steel">{item.text}</p>
                <Link href={item.href} className="mt-2 inline-flex min-h-11 items-center">
                  Bekijk de bewerking
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <Section name="diensten" label="bewerkingen">
        <div className="grid gap-14">
          {order.map((item, index) => {
            const service = content.services[item.key];
            const sheet = sheets[item.key];
            const photo = beeld(item.image);
            const flip = index % 2 === 1;
            return (
              <article key={item.key} className="row-punch grid items-center gap-6 border-t border-ink/15 pt-8 lg:grid-cols-2">
                <div className={flip ? "lg:order-2" : ""}>
                  <p className="kicker">Bewerking</p>
                  <h2 className="display mt-2 text-[clamp(2rem,4vw,3.2rem)]">{service.title}</h2>
                  <p className="measure mt-3">{service.lede}</p>
                  <p className="measure mt-3 text-steel">{service.body[0]}</p>
                  <ul className="mt-4 grid gap-1">
                    {sheet.makes.slice(0, 4).map((make) => (
                      <li key={make} className="border-t border-ink/10 py-2">
                        {make}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="mt-3 inline-flex min-h-11 items-center">
                    {service.nav}
                  </Link>
                </div>
                <PhotoFigure beeld={photo} sizes="(max-width: 1000px) 100vw, 560px" />
              </article>
            );
          })}
        </div>
      </Section>
      <Section name="kracht" label="eigen huis">
        <h2 className="display text-[clamp(1.8rem,3vw,2.8rem)]">Waar u op rekent</h2>
        <ul className="ruled mt-6 border-y border-ink/15">
          {content.strengths.map((item) => (
            <li key={item} className="py-3">
              {item}
            </li>
          ))}
        </ul>
        <p className="measure mt-6">
          Opdrachtgevers komen uit de industrie, zorg, bouw en horeca, en we werken ook voor particulieren. Maatwerk, flexibiliteit en betrokkenheid zijn de kernwaarden.
        </p>
      </Section>
      <OfferteCta />
    </>
  );
}