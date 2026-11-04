import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/PhoneLink";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Offerte aanvragen | Peters Metaaltechniek",
  description:
    "Stuur uw tekening, DXF, STEP of PDF. Peters Metaaltechniek maakt een offerte voor ponsnibbelen, CNC-kanten, lassen of constructiewerk in Emmen.",
};

const bewerkingen = [
  { href: "/ponsnibbelen", label: "Ponsnibbelen" },
  { href: "/cnc-kanten", label: "CNC-kanten" },
  { href: "/lassen-staal-rvs-en-aluminium", label: "Lassen" },
  { href: "/constructiewerk", label: "Constructiewerk" },
];

export default function OffertePage() {
  return (
    <>
      <PageHero
        label="offerte"
        kicker="Opdracht geven"
        title="Stuur uw tekening. Wij maken er een offerte van."
        lede="We bekijken uw aanvraag en nemen contact met u op."
      >
        <PhoneLink className="btn btn-solid">Bel {content.contact.phone}</PhoneLink>
      </PageHero>

      <Section name="wat-sturen" label="dxf / step / pdf">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="display text-3xl">Wat u meestuurt</h2>
            <ul className="ruled mt-4 border-y border-ink/15">
              <li className="py-3">Tekening of bestand: DXF, STEP, PDF, DWG, STP, JPG of PNG</li>
              <li className="py-3">Materiaal: staal, RVS of aluminium</li>
              <li className="py-3">Plaatdikte en aantal</li>
              <li className="py-3">Serie of eenmalig</li>
              <li className="py-3">Gewenste levering, als u die al weet</li>
              <li className="py-3">Of montage nodig is</li>
            </ul>
          </div>
          <Image
            src="/img/uitslag-plaat.jpg"
            alt="Uitslag van een vlakke plaat met zetlijnen, ronde gaten, vierkante gaten en sleuven"
            width={1280}
            height={720}
            className="h-auto w-full border border-ink/15 bg-white"
            style={{ maxWidth: 420 }}
          />
        </div>
      </Section>

      <Section name="bewerking-keuze" label="keten" tone="white">
        <h2 className="display text-3xl">Bewerking</h2>
        <ul className="ruled mt-4 border-y border-ink/15">
          {bewerkingen.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="flex min-h-11 items-center text-ink no-underline hover:text-brand">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section name="materiaal-keuze" label="materiaal">
        <h2 className="display text-3xl">Materiaal</h2>
        <ul className="ruled mt-4 border-y border-ink/15">
          {content.materials.map((item) => (
            <li key={item.name} className="grid gap-1 py-3 md:grid-cols-[160px_1fr]">
              <h3 className="font-medium">{item.name}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section name="zekerheid" label="iso / vca / exc2" tone="white">
        <h2 className="display text-3xl">Waar u op rekent</h2>
        <ul className="ruled mt-4 border-y border-ink/15">
          <li className="py-3">ISO 9001</li>
          <li className="py-3">VCA*</li>
          <li className="py-3">EN 1090-2 EXC2 voor RVS-, staal- en aluminiumconstructies</li>
          <li className="py-3">Alles onder één dak: ponsen, kanten, lassen en construeren in Emmen</li>
        </ul>
        <p className="measure mt-4">
          Op alle offertes en opdrachten zijn de{" "}
          <Link href="/over-ons/algemene-voorwaarden">Metaalunievoorwaarden</Link> van toepassing. Gedeponeerd bij de griffie van de rechtbank Rotterdam.
        </p>
      </Section>

      <Section name="offerte-formulier" label="aanvraag">
        <h2 className="display mb-5 text-3xl">Uw aanvraag</h2>
        <Suspense fallback={<p>Formulier laden…</p>}>
          <QuoteForm />
        </Suspense>
      </Section>

      <Section name="faq" label="vragen" tone="white">
        <h2 className="display mb-5 text-3xl">Vragen</h2>
        <FaqList items={content.offerteFaq} />
      </Section>
    </>
  );
}
