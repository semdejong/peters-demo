import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Uitslag, type UitslagMark } from "@/components/Uitslag";

const kinds: { href: string; mark: UitslagMark; title: string; text: string }[] = [
  {
    href: "/fotos?filter=ponsen",
    mark: "gaten",
    title: "Ponsen",
    text: "De pons-nibbelmachine, geponste gaten en perforaties in plaat.",
  },
  {
    href: "/fotos?filter=kanten",
    mark: "zet",
    title: "Kanten",
    text: "Kantbanken, buiggereedschap en gezette plaat.",
  },
  {
    href: "/fotos?filter=lassen",
    mark: "las",
    title: "Lassen",
    text: "Laswerk in staal, RVS en aluminium, en samenstellingen.",
  },
  {
    href: "/fotos?filter=constructiewerk",
    mark: "hoek",
    title: "Constructiewerk",
    text: "Trappen, bordessen, frames en montage.",
  },
];

export const metadata: Metadata = {
  title: "Foto's | Peters Metaaltechniek",
  description:
    "Foto's uit de werkplaats van Peters Metaaltechniek: ponsen, kanten, lassen, trappen, bordessen en frames.",
};

export default function FotosPage() {
  return (
    <>
      <PageHero
        label="foto's"
        kicker="Werkplaats"
        title="Werk in beeld."
        lede="Ponsen, kanten, lassen en constructiewerk uit de werkplaats in Emmen."
      />
      <Section name="fotos-legenda" label="soorten" tone="white">
        <h2 className="display text-[clamp(1.8rem,3vw,2.6rem)]">Vier soorten werk</h2>
        <p className="measure mt-3 text-steel">
          Elke foto hoort bij één bewerking. De tekening ernaast is de uitslag van deze site: gaten voor ponsen, een zetlijn voor kanten, een naad voor lassen, een schuine hoek voor constructiewerk.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {kinds.map((kind) => (
            <li key={kind.href}>
              <Link href={kind.href} className="group grid h-full gap-3 border border-ink/15 bg-white p-3 text-ink no-underline hover:border-brand">
                <Uitslag mark={kind.mark} className="w-full border border-ink/10" />
                <span>
                  <span className="display block text-[1.65rem] group-hover:text-brand">{kind.title}</span>
                  <span className="mt-2 block text-steel">{kind.text}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section name="fotos" label="filter">
        <Suspense fallback={<p>Foto&apos;s laden…</p>}>
          <Gallery />
        </Suspense>
      </Section>
    </>
  );
}
