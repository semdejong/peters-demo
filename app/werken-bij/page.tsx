import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { beeld } from "@/lib/beelden";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/PhoneLink";
import { PlateImg } from "@/components/PlateImg";
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
        <div className="ruled border-y border-ink/15">
          {content.vacancies.map((vacancy) => (
            <article key={vacancy.slug} className="py-5">
              <h2 className="display text-[clamp(1.8rem,3vw,2.6rem)]">{vacancy.title}</h2>
              <p className="mt-2 font-mono text-sm">
                {vacancy.hours} · {vacancy.start} · MBO · minimaal 5 jaar
              </p>
              <p className="measure mt-3">{vacancy.intro}</p>
              <Link href={`/werken-bij/${vacancy.slug}`} data-cta="solliciteren" className="btn btn-solid mt-4">
                Solliciteren
              </Link>
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
        <ul className="swipe">
          {shop.map((item) => (
            <li key={item.src}>
              <PlateImg beeld={item} sizes="(max-width: 800px) 78vw, 480px" />
            </li>
          ))}
        </ul>
      </Section>
      <Section name="in-beeld" label="rtl 4" id="in-beeld" tone="white">
        <h2 className="display text-3xl">In beeld</h2>
        <p className="measure mt-3">
          {content.rtl.date} was Peters Metaaltechniek te zien in het {content.rtl.channel}-programma {content.rtl.program}.
        </p>
        <figure className="mt-5">
          <PlateImg beeld={rtl} sizes="600px" />
          <figcaption className="mt-2 text-sm text-steel">
            Opname in de werkplaats, {content.rtl.date}.{" "}
            <a href={content.rtl.href}>Bekijk de uitzending</a>
          </figcaption>
        </figure>
      </Section>
      <Section name="solliciteren" label="herman peters">
        <h2 className="display text-3xl">Solliciteren</h2>
        <p className="measure mt-3">
          Mail je cv naar{" "}
          <a href={`mailto:${content.contact.jobsEmail}?subject=Sollicitatie`} data-cta="solliciteren">
            {content.contact.jobsEmail}
          </a>
          . Meer informatie: Herman Peters, <PhoneLink />.
        </p>
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
