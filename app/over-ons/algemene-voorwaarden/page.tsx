import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Algemene voorwaarden | Peters Metaaltechniek",
  description:
    "Op alle offertes en opdrachten van Peters Metaaltechniek zijn de Metaalunievoorwaarden van toepassing. Gedeponeerd bij de griffie van de rechtbank Rotterdam.",
};

export default function VoorwaardenPage() {
  return (
    <>
      <PageHero
        label="voorwaarden"
        kicker="Metaalunie"
        title="Algemene voorwaarden"
        lede="Op al onze offertes, op alle opdrachten aan ons en op alle met ons gesloten overeenkomsten zijn de Metaalunievoorwaarden van toepassing."
      />
      <Section name="voorwaarden" label="rotterdam">
        <div className="grid max-w-[68ch] gap-4">
          <p>Deze voorwaarden zijn gedeponeerd bij de griffie van de rechtbank Rotterdam.</p>
          <p>
            De tekst van de Metaalunievoorwaarden staat bij Koninklijke Metaalunie:{" "}
            <a href="https://www.metaalunie.nl">www.metaalunie.nl</a>.
          </p>
          <p>Peters Metaaltechniek B.V., Willem Schoutenstraat 10, 7825 VV Emmen. KvK 74062816.</p>
        </div>
      </Section>
    </>
  );
}
