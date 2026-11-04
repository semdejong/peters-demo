import type { Metadata } from "next";
import { content } from "@/content";
import { beeld } from "@/lib/beelden";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/PhoneLink";
import { PlateImg } from "@/components/PlateImg";
import { Section } from "@/components/Section";

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
        lede="U bereikt ons op het adres hieronder, per telefoon of per e-mail. Voor een tekening gebruikt u de offertepagina."
      >
        <PhoneLink className="btn btn-solid">Bel {contact.phone}</PhoneLink>
      </PageHero>
      <Section name="gegevens" label="adres">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-3">
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
            <p className="font-mono text-sm">
              KvK {contact.kvk}
              <br />
              BTW {contact.btw}
            </p>
            <p>
              <a href={contact.mapsHref} className="inline-flex min-h-11 items-center">
                Route in Google Maps
              </a>
            </p>
            <PlateImg beeld={pand} sizes="(max-width: 1000px) 100vw, 520px" />
          </div>
          <div>
            <h2 className="display mb-4 text-3xl">Bericht</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
