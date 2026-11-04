import Link from "next/link";
import { content, sheets, type ServiceKey } from "@/content";
import { beeld } from "@/lib/beelden";
import { FaqList } from "@/components/FaqList";
import { OfferteCta } from "@/components/OfferteCta";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/PhoneLink";
import { PhotoFigure } from "@/components/PhotoFigure";
import { PunchPhoto } from "@/components/PunchPhoto";
import { Section } from "@/components/Section";
import { Uitslag, type UitslagMark } from "@/components/Uitslag";

const keys: ServiceKey[] = ["ponsnibbelen", "kanten", "lassen", "constructie"];

const bewerkingQuery: Record<ServiceKey, string> = {
  ponsnibbelen: "ponsnibbelen",
  kanten: "kanten",
  lassen: "lassen",
  constructie: "constructiewerk",
};

const marks: Record<ServiceKey, UitslagMark> = {
  ponsnibbelen: "gaten",
  kanten: "zet",
  lassen: "las",
  constructie: "hoek",
};

export function ServiceView({ serviceKey }: { serviceKey: ServiceKey }) {
  const service = content.services[serviceKey];
  const sheet = sheets[serviceKey];
  const images = service.images.map((src) => beeld(src));
  const hero = images[0];
  const rest = images.slice(1);
  if (!hero) return null;
  const index = keys.indexOf(serviceKey);
  const previous = index > 0 ? content.services[keys[index - 1]] : null;
  const next = index < keys.length - 1 ? content.services[keys[index + 1]] : null;
  const quoteHref = `/offerte?bewerking=${bewerkingQuery[serviceKey]}`;

  return (
    <>
      <PageHero label="90°" kicker="Bewerking" title={service.h1} lede={service.lede}>
        <Link href={quoteHref} data-cta="offerte" className="btn btn-solid">
          Tekening sturen
        </Link>
        <PhoneLink className="btn">Bel {content.contact.phone}</PhoneLink>
      </PageHero>
      <div data-section="dienst-foto">
        <PunchPhoto beeld={hero} pattern={service.pattern} className="h-[clamp(200px,32vw,420px)]" />
      </div>

      <Section name="specificatie" label="stempel">
        <div className="grid items-end gap-6 md:grid-cols-[minmax(0,1fr)_200px]">
          <h2 className="display text-[clamp(1.8rem,3vw,2.8rem)]">Op de tekening</h2>
          <Uitslag mark={marks[serviceKey]} className="w-full max-w-[200px] border border-ink/15" />
        </div>
        <dl className="spec-grid mt-6">
          {sheet.spec.map((row) => (
            <div key={row.label}>
              <dt className="kicker">{row.label}</dt>
              <dd className="mt-2">{row.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section name="dienst" label="plaat" tone="white">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(16rem,22rem)]">
          <div className="grid gap-4">
            {service.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{content.quotes.kracht}</p>
          </div>
          <div className="min-w-0">
            <h2 className="display text-[1.7rem] leading-none">Wat we maken</h2>
            <ul className="ruled mt-4 border-y border-ink/15">
              {sheet.makes.map((item) => (
                <li key={item} className="py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section name="dienst-fotos" label="werkplaats">
        <h2 className="display text-[clamp(1.8rem,3vw,2.8rem)]">In de werkplaats</h2>
        <p className="measure mt-3 text-steel">Foto&apos;s uit de werkplaats in Emmen.</p>
        <ul className="mt-6 grid gap-8 md:grid-cols-2">
          {rest.map((item) => (
            <li key={item.src}>
              <PhotoFigure beeld={item} sizes="(max-width: 800px) 100vw, 540px" />
            </li>
          ))}
        </ul>
      </Section>

      <Section name="plaats-in-keten" label="keten" tone="white">
        <h2 className="display text-3xl">Plaats in de keten</h2>
        <p className="measure mt-3">{sheet.place}</p>
        <div className="mt-6 grid gap-px bg-brand/30 md:grid-cols-3">
          <div className="bg-white p-4">
            <p className="kicker">Eerder</p>
            {previous ? (
              <Link href={previous.href} className="mt-2 inline-flex min-h-11 items-center text-lg text-ink no-underline hover:text-brand">
                {previous.title}
              </Link>
            ) : (
              <p className="mt-2 text-lg">Een vlakke plaat in staal, RVS of aluminium.</p>
            )}
          </div>
          <div className="bg-ink p-4 text-sheet">
            <p className="kicker text-mark">Nu</p>
            <p className="display mt-2 text-2xl">{service.title}</p>
          </div>
          <div className="bg-white p-4">
            <p className="kicker">Daarna</p>
            {next ? (
              <Link href={next.href} className="mt-2 inline-flex min-h-11 items-center text-lg text-ink no-underline hover:text-brand">
                {next.title}
              </Link>
            ) : (
              <p className="mt-2 text-lg">Montage, als de constructie daarom vraagt.</p>
            )}
          </div>
        </div>
      </Section>

      <Section name="meesturen" label="bestand">
        <h2 className="display text-3xl">Wat u meestuurt</h2>
        <ul className="ruled mt-4 border-y border-ink/15">
          {sheet.send.map((item) => (
            <li key={item} className="py-3">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={quoteHref} data-cta="offerte" className="btn btn-solid">
            Offerte aanvragen
          </Link>
          <PhoneLink className="btn">Bel {content.contact.phone}</PhoneLink>
        </div>
      </Section>

      <Section name="faq" label="vragen" tone="white">
        <h2 className="display mb-5 text-3xl">Vragen</h2>
        <FaqList items={service.faq} />
      </Section>

      <Section name="gerelateerd" label="ook">
        <h2 className="display mb-2 text-3xl">Ook onder dit dak</h2>
        <ul className="ruled mt-4 border-y border-ink/15">
          {keys
            .filter((key) => key !== serviceKey)
            .map((key) => content.services[key])
            .map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="row-punch flex min-h-14 items-center justify-between gap-4 py-3 text-ink no-underline hover:text-brand">
                  <span>
                    <span className="block font-medium">{item.title}</span>
                    <span className="text-steel">{item.lede}</span>
                  </span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
        </ul>
      </Section>
      <OfferteCta href={quoteHref} />
    </>
  );
}