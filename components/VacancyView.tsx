import Link from "next/link";
import { content, type Vacancy } from "@/content";
import { beeld } from "@/lib/beelden";
import { ApplyForm } from "@/components/ApplyForm";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/PhoneLink";
import { PhotoFigure } from "@/components/PhotoFigure";
import { JobTitle } from "@/components/JobTitle";
import { Section } from "@/components/Section";

function jobJson(vacancy: Vacancy) {
  const { contact, company } = content;
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: vacancy.title,
    description: [vacancy.intro, ...vacancy.role, ...vacancy.profile, ...content.offer.weBieden].join(" "),
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: company.name,
      url: "https://www.petersmetaaltechniek.nl",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.street,
        postalCode: contact.postalCode,
        addressLocality: contact.city,
        addressCountry: "NL",
      },
    },
  };
}

export function VacancyView({ vacancy }: { vacancy: Vacancy }) {
  const subject = encodeURIComponent(`Sollicitatie ${vacancy.title}`);
  const mailto = `mailto:${content.contact.jobsEmail}?subject=${subject}`;
  const images = vacancy.images.map((src) => beeld(src));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobJson(vacancy)).replace(/</g, "\\u003c") }} />
      <PageHero label="vacature" kicker="Werken bij Peters" title={<JobTitle title={vacancy.title} />} lede={vacancy.intro}>
        <ul className="flex flex-wrap gap-2">
          {[vacancy.hours, vacancy.start, "MBO", "5 jaar ervaring"].map((item) => (
            <li key={item} className="border border-ink bg-white px-2 py-1 font-mono text-sm">
              {item}
            </li>
          ))}
        </ul>
        <a href="#solliciteren" data-cta="solliciteren" className="btn btn-solid">
          Solliciteren
        </a>
      </PageHero>
      <Section name="functie" label="tekening">
        <h2 className="display text-3xl">De functie</h2>
        <div className="mt-4 grid gap-3">
          {vacancy.role.map((line) => (
            <p key={line} className="measure">
              {line}
            </p>
          ))}
        </div>
      </Section>
      <Section name="profiel" label="mbo" tone="white">
        <h2 className="display text-3xl">Wie zoeken wij</h2>
        <ul className="ruled mt-4 border-y border-ink/15">
          {vacancy.profile.map((line) => (
            <li key={line} className="py-3">
              {line}
            </li>
          ))}
        </ul>
      </Section>
      <Section name="aanbod" label="zetlijn 90° op">
        <h2 className="display text-3xl">Wat bieden wij</h2>
        <ul className="mt-4 grid gap-3">
          {content.offer.weBieden.map((line) => (
            <li key={line} className="measure">
              {line}
            </li>
          ))}
        </ul>
      </Section>
      <Section name="werkplaats" label="machine" tone="white">
        <h2 className="display mb-5 text-3xl">De werkplaats</h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {images.map((item) => (
            <li key={item.src}>
              <PhotoFigure beeld={item} sizes="(max-width: 800px) 100vw, 360px" />
            </li>
          ))}
        </ul>
      </Section>
      <Section name="solliciteren" label="contact" id="solliciteren">
        <h2 className="display text-3xl">Solliciteren</h2>
        <p className="measure mt-4">
          Mail je cv naar{" "}
          <a href={mailto} data-cta="solliciteren">
            {content.contact.jobsEmail}
          </a>
          . Voor meer informatie: Herman Peters, <PhoneLink />.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={mailto} data-cta="solliciteren" className="btn btn-solid">
            CV mailen
          </a>
          <PhoneLink className="btn">Bel Herman Peters: {content.contact.phone}</PhoneLink>
        </div>
        <div className="mt-8 max-w-3xl border border-ink/15 bg-white p-4 md:p-6">
          <h3 className="display mb-4 text-2xl">Sollicitatieformulier</h3>
          <ApplyForm vacancy={vacancy.title} />
        </div>
        <p className="mt-6">
          <Link href="/werken-bij" className="text-ink">
            Alle vacatures
          </Link>
        </p>
      </Section>
    </>
  );
}
