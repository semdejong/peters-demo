import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { beeld } from "@/lib/beelden";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/PhoneLink";
import { PhotoFigure } from "@/components/PhotoFigure";
import { JobTitle } from "@/components/JobTitle";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Werken bij | Peters Metaaltechniek",
  description:
    "Twee vacatures bij Peters Metaaltechniek in Emmen: ervaren plaatwerker en ervaren constructiebankwerker / lasser. 38 uur, per direct.",
};

const shop = ["/img/146.jpg", "/img/203.jpg", "/img/175.jpg"].map((src) => beeld(src));
const rtl = beeld(content.rtl.image);

export default function WerkenBijPage() {
  return (
    <>
      <PageHero
        label="vacatures"
        kicker="Werken bij Peters"
        title="Twee vakmensen gezocht."
        lede="Door de groei van ons bedrijf en het aantal opdrachten hebben wij momenteel de volgende vacatures."
      />
      <Section name="vacatures" label="2">
        <div className="grid gap-8">
          {content.vacancies.map((vacancy) => (
            <article key={vacancy.slug} className="border border-ink/20 bg-white">
              <div className="grid gap-px bg-ink/15 sm:grid-cols-3">
                <p className="bg-white px-4 py-3 font-mono text-sm">{vacancy.hours}</p>
                <p className="bg-white px-4 py-3 font-mono text-sm">{vacancy.start}</p>
                <p className="bg-white px-4 py-3 font-mono text-sm">MBO · 5 jaar</p>
              </div>
              <div className="p-4 md:p-6">
                <h2 className="display text-[clamp(1.8rem,3vw,2.6rem)]">
                  <JobTitle title={vacancy.title} />
                </h2>
                <p className="measure mt-3">{vacancy.intro}</p>
                <ul className="mt-4 grid gap-2">
                  {vacancy.role.map((line) => (
                    <li key={line} className="border-t border-ink/10 pt-2">
                      {line}
                    </li>
                  ))}
                </ul>
                <Link href={`/werken-bij/${vacancy.slug}`} data-cta="solliciteren" className="btn btn-solid mt-5">
                  Solliciteren
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section name="waarom" label="werksfeer" tone="white">
        <h2 className="display text-3xl">Waarom hier werken</h2>
        <ul className="ruled mt-4 border-y border-ink/15">
          <li className="py-3">Een prima werksfeer.</li>
          <li className="py-3">Een no-nonsense mentaliteit, maar vooral plezier in vakwerk.</li>
          <li className="py-3">Een marktconforme beloning met prima secundaire arbeidsvoorwaarden.</li>
          <li className="py-3">Erkend leerbedrijf.</li>
          <li className="py-3">De plaatwerker werkt met een CNC-gestuurde kant-/zetbank en een ponsnibbelmachine.</li>
          <li className="py-3">De constructiebankwerker / lasser zet constructies in elkaar, last ze af en werkt ze af.</li>
        </ul>
      </Section>
      <Section name="machines" label="werkplaats">
        <h2 className="display mb-5 text-3xl">De werkplaats</h2>
        <ul className="mt-2 grid gap-8 md:grid-cols-3">
          {shop.map((item) => (
            <li key={item.src}>
              <PhotoFigure beeld={item} sizes="(max-width: 800px) 100vw, 360px" />
            </li>
          ))}
        </ul>
      </Section>
      <Section name="in-beeld" label="rtl 4" id="in-beeld" tone="white">
        <h2 className="display text-3xl">In beeld</h2>
        <p className="measure mt-3">
          {content.rtl.date} was Peters Metaaltechniek te zien in het {content.rtl.channel}-programma {content.rtl.program}.
        </p>
        <div className="chamfer mt-6 grid items-center gap-6 bg-white p-4 md:grid-cols-[minmax(0,280px)_1fr] md:p-6">
          <PhotoFigure beeld={rtl} sizes="600px" />
          <div>
            <p className="kicker">{content.rtl.channel}</p>
            <p className="display mt-2 text-3xl">{content.rtl.program}</p>
            <p className="mt-3">{content.rtl.date} was de werkplaats in Emmen te zien in die uitzending.</p>
            <a href={content.rtl.href} className="btn mt-4">
              Bekijk de uitzending
            </a>
          </div>
        </div>
      </Section>
      <Section name="solliciteren" label="herman">
        <h2 className="display text-3xl">Zo solliciteer je</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          <li className="border-t-2 border-ink pt-3">
            <p className="kicker">01</p>
            <p className="mt-2">Kies de vacature. Beide zijn 38 uur, per direct, op MBO-niveau, met minimaal vijf jaar ervaring.</p>
          </li>
          <li className="border-t-2 border-ink pt-3">
            <p className="kicker">02</p>
            <p className="mt-2">
              Mail je cv naar{" "}
              <a href={`mailto:${content.contact.jobsEmail}?subject=Sollicitatie`} data-cta="solliciteren">
                {content.contact.jobsEmail}
              </a>
              .
            </p>
          </li>
          <li className="border-t-2 border-ink pt-3">
            <p className="kicker">03</p>
            <p className="mt-2">
              Meer informatie: bel Herman Peters, <PhoneLink />.
            </p>
          </li>
        </ol>
        <div className="mt-4 flex flex-wrap gap-3">
          {content.vacancies.map((vacancy) => (
            <Link key={vacancy.slug} href={`/werken-bij/${vacancy.slug}#solliciteren`} data-cta="solliciteren" className="btn">
              {vacancy.title}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
