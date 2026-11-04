import type { Metadata } from "next";
import { content } from "@/content";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy | Peters Metaaltechniek",
  description:
    "Privacyverklaring van deze conceptsite van Peters Metaaltechniek B.V. Formulieren versturen geen gegevens.",
};

export default function PrivacyPage() {
  const { company, contact } = content;
  return (
    <>
      <PageHero label="privacy" kicker="Gegevens" title="Privacy" lede={`${company.name} is verantwoordelijk voor de gegevens op deze site.`} />
      <Section name="privacy" label="demo">
        <div className="grid max-w-[68ch] gap-4">
          <p>
            Adres: {contact.street}, {contact.postalCode} {contact.city}. E-mail:{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>. Telefoon: {contact.phone}.
          </p>
          <p>
            De formulieren op deze conceptsite controleren uw invoer in de browser. Ze versturen niets en slaan geen tekening, cv of bericht op. Een gekozen bestand blijft op uw apparaat.
          </p>
          <p>
            Een telefoon- of mailkoppeling opent de app op uw eigen toestel. Wat u daarna verstuurt, gaat rechtstreeks naar Peters Metaaltechniek en valt onder hun gewone post en telefoon.
          </p>
          <p>
            Deze conceptsite laadt één cookieloos script dat paginabezoeken telt. Het zet geen advertentiecookies en volgt u niet over andere sites.
          </p>
          <p>Vragen over uw gegevens stelt u aan {contact.email}.</p>
        </div>
      </Section>
    </>
  );
}
