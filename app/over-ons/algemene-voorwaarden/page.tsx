import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Algemene voorwaarden | Peters Metaaltechniek",
  description:
    "Op alle offertes en opdrachten van Peters Metaaltechniek zijn de Metaalunievoorwaarden van toepassing. Gedeponeerd bij de griffie van de rechtbank Rotterdam.",
};

export default function VoorwaardenPage() {
  const { company, contact } = content;
  return (
    <>
      <PageHero
        label="voorwaarden"
        kicker="Metaalunie"
        title="Algemene voorwaarden"
        lede="Op al onze offertes, op alle opdrachten aan ons en op alle met ons gesloten overeenkomsten zijn de Metaalunievoorwaarden van toepassing."
      />
      <Section name="voorwaarden" label="rotterdam">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,68ch)_minmax(16rem,1fr)]">
          <div className="grid gap-4">
            <p>Deze voorwaarden zijn gedeponeerd bij de griffie van de rechtbank Rotterdam.</p>
            <p>
              Ze gelden dus voor een offerteaanvraag, voor een opdracht en voor de overeenkomst die daaruit volgt. Niet voor een deel van het werk, maar voor het geheel.
            </p>
            <p>
              De tekst zelf staat bij Koninklijke Metaalunie:{" "}
              <a href="https://www.metaalunie.nl">www.metaalunie.nl</a>.
            </p>
            <p>
              <Link href="/offerte" data-cta="offerte">
                Naar de offerte
              </Link>
            </p>
          </div>
          <aside className="chamfer h-fit bg-white p-4">
            <p className="kicker">Geldt voor</p>
            <ul className="mt-3 grid gap-2">
              <li className="border-t border-ink/15 pt-2">Offertes</li>
              <li className="border-t border-ink/15 pt-2">Opdrachten</li>
              <li className="border-t border-ink/15 pt-2">Overeenkomsten</li>
            </ul>
            <p className="mt-4 text-sm text-steel">
              {company.name}
              <br />
              {contact.street}, {contact.postalCode} {contact.city}
              <br />
              KvK {contact.kvk}
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}