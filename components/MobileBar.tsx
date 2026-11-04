import Link from "next/link";
import { content } from "@/content";

export default function MobileBar() {
  return (
    <nav data-section="mobile-bar" className="mobile-bar" aria-label="Snel naar">
      <a href={content.contact.phoneHref} data-cta="bellen" className="btn">
        Bellen
      </a>
      <Link href="/offerte" data-cta="offerte" className="btn btn-solid">
        Offerte
      </Link>
      <Link href="/werken-bij" data-cta="solliciteren" className="btn px-2 text-sm">
        Vacatures <span className="counter ml-1">2</span>
      </Link>
    </nav>
  );
}
