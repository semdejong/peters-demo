import type { Metadata } from "next";
import { Suspense } from "react";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

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
      <Section name="fotos" label="filter">
        <Suspense fallback={<p>Foto&apos;s laden…</p>}>
          <Gallery />
        </Suspense>
      </Section>
    </>
  );
}
