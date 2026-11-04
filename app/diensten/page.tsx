import type { Metadata } from "next";
import Link from "next/link";
import { content, type ServiceKey } from "@/content";
import { beeld } from "@/lib/beelden";
import { OfferteCta } from "@/components/OfferteCta";
import { PageHero } from "@/components/PageHero";
import { PlateImg } from "@/components/PlateImg";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Diensten | Peters Metaaltechniek",
  description:
    "Ponsnibbelen, CNC-kanten, lassen en constructiewerk in staal, RVS en aluminium. Alles onder één dak bij Peters Metaaltechniek in Emmen.",
};

const order: { key: ServiceKey; image: string }[] = [
  { key: "ponsnibbelen", image: "/img/140.jpg" },
  { key: "kanten", image: "/img/139.jpg" },
  { key: "lassen", image: "/img/153.jpg" },
  { key: "constructie", image: "/img/187.jpg" },
];

export default function DienstenPage() {
  return (
    <>
      <PageHero
        label="diensten"
        kicker="Toelevering"
        title="Alle bewerkingen onder één dak."
        lede="Betrouwbare toeleverancier voor producten uit RVS, staal en aluminium. Ponsnibbelen, kanten, lassen en constructiewerk in eigen huis in Emmen."
      />
      <Section name="diensten" label="keten">
        <div className="ruled border-y border-ink/15">
          {order.map((item) => {
            const service = content.services[item.key];
            return (
              <article key={item.key} className="row-punch grid gap-4 py-4 md:grid-cols-[240px_1fr] md:items-center">
                <PlateImg beeld={beeld(item.image)} sizes="240px" />
                <div>
                  <h2 className="display text-3xl">{service.title}</h2>
                  <p className="measure mt-2 text-steel">{service.lede}</p>
                  <Link href={service.href} className="inline-flex min-h-11 items-center">
                    {service.nav}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
      <Section name="kracht" label="eigen huis" tone="white">
        <p className="measure text-xl">{content.quotes.kracht}</p>
        <ul className="ruled mt-6 border-y border-ink/15">
          {content.strengths.map((item) => (
            <li key={item} className="py-3">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <OfferteCta />
    </>
  );
}
