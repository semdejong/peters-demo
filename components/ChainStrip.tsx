import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { beeld } from "@/lib/beelden";

export function ChainStrip() {
  return (
    <div className="chain chain-motion">
      {content.chain.map((step, index) => {
        const photo = beeld(step.image);
        return (
          <Link key={step.id} href={step.href} className="chain-step flex h-full flex-col text-ink no-underline hover:text-brand">
            <div className="relative h-[132px] overflow-hidden bg-plate">
              <Image src={photo.src} alt={photo.alt} fill sizes="240px" className="object-cover" />
            </div>
            <div className="p-3">
              <p className="kicker">
                {String(index + 1).padStart(2, "0")} · {step.label}
              </p>
              <p className="mt-2 text-[0.98rem]">{step.text}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
