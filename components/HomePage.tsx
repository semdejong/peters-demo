import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { beeld } from "@/lib/beelden";
import { OfferteCta } from "@/components/OfferteCta";
import { PhoneLink } from "@/components/PhoneLink";
import { PlateImg } from "@/components/PlateImg";
import { PunchPhoto } from "@/components/PunchPhoto";
import { Section } from "@/components/Section";

const rows = [
  {
    key: "ponsnibbelen" as const,
    image: "/img/126.jpg",
    text: "Een moderne CNC-pons-nibbelmachine en een uitgebreid assortiment ponsgereedschappen. Grote en kleine productieorders, met weinig restafval.",
  },
  {
    key: "kanten" as const,
    image: "/img/142.jpg",
    text: "Twee kantbanken en een groot assortiment buiggereedschappen. Voor zowel grote als kleine series, in aluminium, staal en RVS.",
  },
  {
    key: "lassen" as const,
    image: "/img/129.jpg",
    text: "Staal, RVS en aluminium, met gecertificeerde aluminiumlassers. Dekkels, vaten, trappen, hekwerken, bordessen en frames.",
  },
  {
    key: "constructie" as const,
    image: "/img/187.jpg",
    text: "Trappen, bordessen en constructies voor nieuwbouw en renovaties. Ontwerp, productie en montage.",
  },
];

const work = ["/img/186.jpg", "/img/184.jpg", "/img/185.jpg", "/img/141.jpg", "/img/128.jpg"].map((src) => beeld(src));

export function HomePage() {
  const hero = beeld("/img/114.jpg");
  const rtl = beeld(content.rtl.image);
  const pand = beeld("/img/110.jpg");
  const { contact, company } = content;

  return (
    <>
      <section data-section="hero" className="hero">
        <div className="frame sheet-grid px-0 pt-6 md:pt-10">
          <div className="anno px-4 md:px-0">
            <span className="zet">zetlijn 0°</span>
          </div>
          <div className="px-4 md:px-0">
            <h1 className="display max-w-[12em] text-[clamp(2.15rem,6.4vw,5.1rem)]">
              Alle bewerkingen onder één dak.
            </h1>
            <p className="measure mt-4 text-steel">
              Ponsnibbelen, CNC-kanten, lassen en constructiewerk in staal, RVS en aluminium. Uit Emmen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/offerte" data-cta="offerte" className="btn btn-solid">
                Tekening sturen
              </Link>
              <PhoneLink className="btn">Bel {contact.phone}</PhoneLink>
            </div>
          </div>
        </div>
        <div className="mt-6 min-h-[168px] flex-1">
          <PunchPhoto beeld={hero} pattern="rounds" priority className="h-full min-h-[168px]" />
        </div>
        <Link
          href="/werken-bij"
          data-cta="solliciteren"
          className="flex min-h-12 items-center gap-3 bg-ink px-4 py-3 text-sheet no-underline hover:text-mark"
        >
          <span className="counter">2</span>
          <span>We groeien: 2 vacatures — plaatwerker en constructiebankwerker/lasser</span>
        </Link>
      </section>

      <Section name="keten" label="zetlijn 90° neer">
        <h2 className="display text-[clamp(2rem,4vw,3.3rem)]">Van plaat tot montage</h2>
        <p className="measure mt-3 text-steel">
          Ponsen, kanten, lassen en construeren in één werkplaats in Emmen. Van een enkele plaat tot een gelaste, gemonteerde constructie.
        </p>
        <div className="chain chain-motion mt-6">
          {content.chain.map((step) => {
            const photo = beeld(step.image);
            return (
              <Link key={step.id} href={step.href} className="chain-step text-ink no-underline hover:text-brand">
                <div className="relative h-[132px] overflow-hidden bg-plate" style={{ maxWidth: photo.w }}>
                  <Image src={photo.src} alt={photo.alt} fill sizes="240px" className="object-cover" />
                </div>
                <div className="p-3">
                  <p className="kicker">{step.label}</p>
                  <p className="mt-2 text-[0.98rem]">{step.text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section name="bewerkingen" label="uitslag" tone="white">
        <h2 className="display mb-2 text-[clamp(2rem,4vw,3.3rem)]">Vier bewerkingen</h2>
        <div className="ruled border-y border-ink/15">
          {rows.map((row) => {
            const service = content.services[row.key];
            const photo = beeld(row.image);
            return (
              <article key={row.key} className="row-punch grid gap-4 py-4 md:grid-cols-[220px_1fr] md:items-center">
                <div className="relative h-[112px] w-full max-w-[240px] overflow-hidden">
                  <Image src={photo.src} alt={photo.alt} fill sizes="240px" className="object-cover" />
                </div>
                <div>
                  <h3 className="display text-[1.8rem]">{service.title}</h3>
                  <p className="measure mt-2 text-steel">{row.text}</p>
                  <Link href={service.href} className="mt-2 inline-flex min-h-11 items-center">
                    {service.nav}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section name="materialen" label="staal / rvs / al">
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">Staal, RVS, aluminium</h2>
        <p className="measure mt-3">Elke bewerking doet alle drie. Aluminium lassen we met gecertificeerde aluminiumlassers.</p>
        <ul className="ruled mt-6 border-y border-ink/15">
          {content.materials.map((item) => (
            <li key={item.name} className="grid gap-1 py-4 md:grid-cols-[180px_1fr] md:items-baseline">
              <h3 className="display text-2xl">{item.name}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section name="serie" label="serie / stuk" tone="white">
        <h2 className="display max-w-[16ch] text-[clamp(2rem,4vw,3.3rem)]">Serie of enkel stuk</h2>
        <ul className="ruled mt-6 border-y border-ink/15">
          <li className="py-3">Zowel serieproductie als enkele stuks.</li>
          <li className="py-3">Grote en kleine productieorders.</li>
          <li className="py-3">{content.quotes.series}</li>
          <li className="py-3">De pons-nibbelmachine werkt efficiënt en creëert weinig restafval.</li>
          <li className="py-3">100% maatwerk. Flexibele opstelling en korte levertijden.</li>
        </ul>
      </Section>

      <Section name="certificering" label="exc2">
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">Gecertificeerd</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-[240px_1fr] md:items-start">
          <div className="flex flex-wrap gap-3">
            <Image src="/img/cert-vca-iso9001.jpg" alt="Bureau Veritas-merk voor VCA* en ISO 9001" width={216} height={100} />
            <Image src="/img/cert-en1090.jpg" alt="Bureau Veritas-merk voor EN 1090-2, executieklasse 2" width={216} height={100} />
          </div>
          <ul className="ruled border-y border-ink/15">
            {content.certificates.map((item) => (
              <li key={item.title} className="grid gap-1 py-3 md:grid-cols-[240px_1fr]">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-steel">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section name="werk" label="werkstuk" tone="white">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">Werk in beeld</h2>
          <Link href="/fotos" className="inline-flex min-h-11 items-center">
            Alle foto&apos;s
          </Link>
        </div>
        <ul className="swipe">
          {work.map((item) => (
            <li key={item.src}>
              <PlateImg beeld={item} sizes="(max-width: 800px) 78vw, 480px" />
            </li>
          ))}
        </ul>
      </Section>

      <Section name="voor-wie" label="opdrachtgever">
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">Voor wie</h2>
        <p className="measure mt-3">Bedrijven uit de industrie, zorg, bouw, horeca en particulieren.</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {content.sectors.map((sector) => (
            <li key={sector} className="display border-t border-ink/20 py-3 text-[clamp(1.7rem,4vw,2.7rem)]">
              {sector}
            </li>
          ))}
        </ul>
        <p className="kicker mt-6">Kernwaarden</p>
        <p className="mt-2 text-xl">Maatwerk, flexibiliteit en betrokkenheid.</p>
      </Section>

      <section data-section="werken-bij" className="band-ink on-ink">
        <div className="frame sheet-grid pad">
          <div className="anno">
            <span className="zet">vacature 2</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="display text-[clamp(2rem,4vw,3.4rem)] text-sheet">Werken bij Peters</h2>
              <p className="mt-3 max-w-[62ch]">{content.vacancies.length ? "Door de groei van ons bedrijf en het aantal opdrachten hebben wij momenteel de volgende vacatures." : null}</p>
              <div className="ruled mt-6 border-y border-sheet/25">
                {content.vacancies.map((vacancy) => (
                  <article key={vacancy.slug} className="py-4">
                    <h3 className="display text-2xl text-sheet">{vacancy.title}</h3>
                    <p className="mt-1 font-mono text-sm text-mark">
                      {vacancy.hours} · {vacancy.start} · MBO · 5 jaar ervaring
                    </p>
                    <Link href={`/werken-bij/${vacancy.slug}`} data-cta="solliciteren" className="mt-2 inline-flex min-h-11 items-center text-sheet">
                      Bekijk de vacature
                    </Link>
                  </article>
                ))}
              </div>
              <ul className="mt-4 grid gap-2">
                {content.offer.weBieden.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <figure>
              <PlateImg beeld={rtl} sizes="600px" />
              <figcaption className="mt-2 text-sm text-sheet/80">
                {content.rtl.channel}, {content.rtl.program}, {content.rtl.date}.{" "}
                <Link href="/werken-bij#in-beeld" className="text-sheet">
                  In beeld
                </Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Section name="over-peters" label="emmen">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="display text-[clamp(2rem,4vw,3.3rem)]">Over Peters</h2>
            <p className="measure mt-4">{content.quotes.partner}</p>
            <p className="measure mt-3">{content.quotes.allround}</p>
            <p className="measure mt-3">
              Eigenaar Herman Peters werkt al meer dan 20 jaar in het vak. {content.quotes.kracht}
            </p>
            <Link href="/over-ons" className="mt-4 inline-flex min-h-11 items-center">
              Meer over ons
            </Link>
          </div>
          <PlateImg beeld={pand} sizes="(max-width: 1000px) 100vw, 560px" />
        </div>
      </Section>

      <OfferteCta />

      <Section name="contact" label="route" tone="white">
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">Contact en route</h2>
        <div className="mt-5 grid gap-2">
          <p>
            {company.name}
            <br />
            {contact.street}
            <br />
            {contact.postalCode} {contact.city}
          </p>
          <p>
            <PhoneLink />
            <br />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p className="font-mono text-sm">KvK {contact.kvk}</p>
          <p>
            <a href={contact.mapsHref} className="inline-flex min-h-11 items-center">
              Route in Google Maps
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
