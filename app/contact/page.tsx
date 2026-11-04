import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { beeld } from "@/lib/beelden";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/PhoneLink";
import { PhotoFigure } from "@/components/PhotoFigure";
import { Section } from "@/components/Section";
import { Uitslag } from "@/components/Uitslag";

export const metadata: Metadata = {
  title: "Contact | Peters Metaaltechniek",
  description:
    "Peters Metaaltechniek B.V., Willem Schoutenstraat 10, 7825 VV Emmen. Bel 0591 39 38 28 of mail info@petersmetaaltechniek.nl.",
};

export default function ContactPage() {
  const { company, contact } = content;
  const pand = beeld("/img/110.jpg");
  return (
    <>
      <PageHero
        label="contact"
        kicker="Emmen"
        title="Contact"
        lede="Bel, mail of stuur een tekening. We bekijken een offerteaanvraag en nemen contact met u op."
      >
        <PhoneLink className="btn btn-solid">Bel {contact.phone}</PhoneLink>
        <Link href="/offerte" data-cta="offerte" className="btn">
          Tekening sturen
        </Link>
      </PageHero>
      <Section name="gegevens" label="adres">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="kicker">Bezoek</p>
            <p className="display mt-3 text-[clamp(1.8rem,3vw,2.6rem)]">
              {contact.street}
              <br />
              {contact.postalCode} {contact.city}
            </p>
            <dl className="mt-6 border-t border-ink/15">
              {[
                ["Telefoon", <PhoneLink key="tel" />],
                [
                  "E-mail",
                  <a key="mail" className="keep-line" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>,
                ],
                ["KvK", <span key="kvk" className="keep-line font-mono text-sm">{contact.kvk}</span>],
                ["BTW", <span key="btw" className="keep-line font-mono text-sm">{contact.btw}</span>],
              ].map(([label, value]) => (
                <div key={String(label)} className="grid gap-1 border-b border-ink/15 py-3 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-baseline">
                  <dt className="kicker">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-steel">{company.name}</p>
            <a href={contact.mapsHref} className="btn mt-5">
              Route in Google Maps
            </a>
            <ul className="mt-8 grid gap-3">
              <li>
                <PhoneLink className="grid min-h-16 grid-cols-[72px_1fr] items-center gap-3 border border-ink/15 bg-white p-2 text-ink no-underline hover:border-brand">
                  <Uitslag mark="zet" className="w-full" />
                  <span>
                    <span className="kicker block">Bellen</span>
                    <span className="keep-line">{contact.phone}</span>
                  </span>
                </PhoneLink>
              </li>
              <li>
                <Link href="/offerte" data-cta="offerte" className="grid min-h-16 grid-cols-[72px_1fr] items-center gap-3 border border-ink/15 bg-white p-2 text-ink no-underline hover:border-brand">
                  <Uitslag mark="gaten" className="w-full" />
                  <span>
                    <span className="kicker block">Tekening</span>
                    <span>Offerte aanvragen</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/werken-bij" data-cta="solliciteren" className="grid min-h-16 grid-cols-[72px_1fr] items-center gap-3 border border-ink/15 bg-white p-2 text-ink no-underline hover:border-brand">
                  <Uitslag mark="las" className="w-full" />
                  <span>
                    <span className="kicker block">Solliciteren</span>
                    <span>Twee vacatures</span>
                  </span>
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <PhotoFigure beeld={pand} sizes="(max-width: 1000px) 100vw, 480px" />
            </div>
          </div>
          <div className="chamfer bg-white p-4 md:p-6">
            <h2 className="display text-3xl">Bericht</h2>
            <p className="mt-3 text-steel">
              Een korte vraag kan hier. Voor een prijsopgave gebruikt u de offertepagina en stuurt u de tekening mee.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
      <Section name="sollicitatie" label="vacature" tone="white">
        <h2 className="display text-3xl">Werken bij Peters</h2>
        <p className="measure mt-3">
          Sollicitaties gaan naar administratie@petersmetaaltechniek.nl. Meer informatie: Herman Peters, {contact.phone}.
        </p>
        <Link href="/werken-bij" data-cta="solliciteren" className="btn mt-5">
          Naar de vacatures
        </Link>
      </Section>
    </>
  );
}