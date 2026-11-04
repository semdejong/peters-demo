import Link from "next/link";
import { content } from "@/content";
import { PhoneLink } from "@/components/PhoneLink";

export function OfferteCta({ href = "/offerte" }: { href?: string }) {
  return (
    <section data-section="offerte-cta" className="band">
      <div className="frame sheet-grid pad">
        <div className="anno">
          <span className="zet">zetlijn 90° op</span>
        </div>
        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <h2 className="display text-[clamp(2rem,4vw,3.4rem)]">Stuur uw tekening.</h2>
            <p className="measure mt-4">
              Stuur een tekening of bestand (DXF, STEP of PDF), het materiaal, de dikte, het aantal en de gewenste levering. We bekijken uw aanvraag en nemen contact met u op.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={href} data-cta="offerte" className="btn btn-solid">
              Offerte aanvragen
            </Link>
            <PhoneLink className="btn">Bel {content.contact.phone}</PhoneLink>
          </div>
        </div>
      </div>
    </section>
  );
}
