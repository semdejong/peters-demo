import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { beeld } from "@/lib/beelden";

export function ChainStrip() {
  return (
    <div className="chain chain-motion">
      {content.chain.map((step) => {
        const photo = beeld(step.image);
        return (
          <Link key={step.id} href={step.href} className="chain-step text-ink no-underline hover:text-brand">
            <div className="relative h-[132px] overflow-hidden bg-plate" style={{ maxWidth: photo.w }}>
              <Image src={photo.src} alt={photo.alt} fill sizes="240px" className="object-cover" />
            </div>
            <div className="p-3">
              <p className="kicker">{step.label}</p>
              <p className="mt-2 text-[0.98rem]">{step.text}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
