import type { Metadata } from "next";
import Link from "next/link";
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
      <PageHero
        label="privacy"
        kicker="Gegevens"
        title="Privacy"
        lede={`${company.name} is verantwoordelijk voor de gegevens op deze site.`}
      />
      <Section name="privacy" label="demo">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,68ch)_minmax(16rem,1fr)]">
          <div className="grid gap-4">
            <p>
              Adres: {contact.street}, {contact.postalCode} {contact.city}. E-mail:{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>. Telefoon: {contact.phone}.
            </p>
            <p>
              De formulieren op deze conceptsite controleren uw invoer in de browser. Ze versturen niets en slaan geen tekening, cv of bericht op. Een gekozen bestand blijft op uw apparaat.
            </p>
            <p>
              Een telefoon- of mailkoppeling opent de app op uw eigen toestel. Wat u daarna verstuurt, gaat rechtstreeks naar Peters Metaaltechniek.
            </p>
            <p>
              Deze conceptsite laadt één cookieloos script dat paginabezoeken telt. Het zet geen advertentiecookies en volgt u niet over andere sites.
            </p>
            <p>Vragen over uw gegevens stelt u aan {contact.email}.</p>
          </div>
          <aside className="chamfer h-fit bg-white p-4">
            <p className="kicker">Wat een formulier vraagt</p>
            <ul className="mt-3 grid gap-2 text-sm">
              <li className="border-t border-ink/15 pt-2">Offerte: bewerking, materiaal, tekening, naam, e-mail, telefoon</li>
              <li className="border-t border-ink/15 pt-2">Contact: naam, e-mail, bericht</li>
              <li className="border-t border-ink/15 pt-2">Sollicitatie: naam, e-mail, telefoon, cv</li>
            </ul>
            <p className="mt-4 text-sm text-steel">In deze demo wordt niets van die lijst bewaard.</p>
            <p className="mt-4 grid gap-2 text-sm">
              <Link href="/over-ons/algemene-voorwaarden">Algemene voorwaarden</Link>
              <Link href="/contact">Contact en adres</Link>
              <Link href="/offerte" data-cta="offerte">Offerte aanvragen</Link>
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}