import Link from "next/link";
import { content } from "@/content";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Uitslag, type UitslagMark } from "@/components/Uitslag";

const plates: { href: string; mark: UitslagMark; title: string }[] = [
  { href: "/ponsnibbelen", mark: "gaten", title: content.services.ponsnibbelen.title },
  { href: "/cnc-kanten", mark: "zet", title: content.services.kanten.title },
  { href: "/lassen-staal-rvs-en-aluminium", mark: "las", title: content.services.lassen.title },
  { href: "/constructiewerk", mark: "hoek", title: content.services.constructie.title },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        label="404"
        kicker="Uitslag"
        title="Deze pagina bestaat niet."
        lede="Het adres hoort niet bij een plaat, een bewerking of een vacature op deze site."
      >
        <Link href="/" className="btn btn-solid">
          Naar home
        </Link>
        <Link href="/offerte" data-cta="offerte" className="btn">
          Offerte aanvragen
        </Link>
        <Link href="/werken-bij" data-cta="solliciteren" className="btn">
          Werken bij
        </Link>
      </PageHero>
      <Section name="keten" label="uitslag" tone="white">
        <h2 className="display text-3xl">De plaat ligt hier</h2>
        <p className="measure mt-3 text-steel">Vier bewerkingen, één werkplaats in Emmen.</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plates.map((plate) => (
            <li key={plate.href}>
              <Link href={plate.href} className="grid gap-3 border border-ink/15 bg-sheet p-3 text-ink no-underline hover:border-brand">
                <Uitslag mark={plate.mark} className="w-full" />
                <span className="display text-[1.2rem] leading-tight">{plate.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section name="verder" label="zetlijn">
        <ul className="ruled border-y border-ink/15">
          {[
            ["/diensten", "De vier bewerkingen"],
            ["/fotos", "Foto's uit de werkplaats"],
            ["/contact", "Adres en telefoon in Emmen"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="flex min-h-12 items-center text-ink no-underline hover:text-brand">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}