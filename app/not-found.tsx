import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <PageHero
      label="404"
      kicker="Pagina"
      title="Deze pagina bestaat niet."
      lede="Controleer het adres, of ga terug naar de homepage."
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
  );
}
