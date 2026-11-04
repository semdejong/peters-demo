import Link from "next/link";
import { content, type ServiceKey } from "@/content";
import { beeld } from "@/lib/beelden";
import { FaqList } from "@/components/FaqList";
import { OfferteCta } from "@/components/OfferteCta";
import { PageHero } from "@/components/PageHero";
import { PlateImg } from "@/components/PlateImg";
import { PunchPhoto } from "@/components/PunchPhoto";
import { Section } from "@/components/Section";

const keys: ServiceKey[] = ["ponsnibbelen", "kanten", "lassen", "constructie"];

const bewerkingQuery: Record<ServiceKey, string> = {
  ponsnibbelen: "ponsnibbelen",
  kanten: "kanten",
  lassen: "lassen",
  constructie: "constructiewerk",
};

export function ServiceView({ serviceKey }: { serviceKey: ServiceKey }) {
  const service = content.services[serviceKey];
  const images = service.images.map((src) => beeld(src));
  const hero = images[0];
  const rest = images.slice(1);
  if (!hero) return null;
  const related = keys
    .filter((key) => key !== serviceKey)
    .map((key) => content.services[key]);

  return (
    <>
      <PageHero label="zetlijn 90° neer" kicker="Bewerking" title={service.h1} lede={service.lede}>
        <Link href={`/offerte?bewerking=${bewerkingQuery[serviceKey]}`} data-cta="offerte" className="btn btn-solid">
          Tekening sturen
        </Link>
      </PageHero>
      <div data-section="dienst-foto">
        <PunchPhoto beeld={hero} pattern={service.pattern} className="h-[clamp(180px,28vw,360px)]" />
      </div>
      <Section name="dienst" label="plaat">
        <div className="grid gap-8 md:grid-cols-[minmax(0,68ch)_1fr]">
          <div className="grid gap-4">
            {service.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="ruled border-y border-ink/15">
            {service.points.map((point) => (
              <li key={point} className="py-3">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section name="dienst-fotos" label="gatenpatroon" tone="white">
        <h2 className="display mb-5 text-3xl">In de werkplaats</h2>
        <ul className="swipe">
          {rest.map((item) => (
            <li key={item.src}>
              <PlateImg beeld={item} sizes="(max-width: 800px) 78vw, 420px" />
            </li>
          ))}
        </ul>
      </Section>
      <Section name="faq" label="zetlijn 90° op">
        <h2 className="display mb-5 text-3xl">Vragen</h2>
        <FaqList items={service.faq} />
      </Section>
      <Section name="gerelateerd" label="keten" tone="white">
        <h2 className="display mb-2 text-3xl">Ook in huis</h2>
        <ul className="ruled mt-4 border-y border-ink/15">
          {related.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="row-punch flex min-h-11 items-center justify-between gap-4 py-3 text-ink no-underline hover:text-brand">
                <span>{item.title}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <OfferteCta href={`/offerte?bewerking=${bewerkingQuery[serviceKey]}`} />
    </>
  );
}
