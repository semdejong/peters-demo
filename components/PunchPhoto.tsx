import Image from "next/image";
import type { Beeld } from "@/lib/beelden";

export function PunchPhoto({
  beeld,
  pattern = "rounds",
  priority = false,
  className = "h-[clamp(168px,32vw,420px)]",
  position = "object-[68%_center]",
}: {
  beeld: Beeld;
  pattern?: "rounds" | "squares" | "slots" | "beeld";
  priority?: boolean;
  className?: string;
  position?: string;
}) {
  return (
    <div className={`punch ${className}`}>
      <Image
        src={beeld.src}
        alt={beeld.alt}
        fill
        sizes="100vw"
        preload={priority}
        className={`object-cover ${position}`}
      />
      <div className={`punch-plate punch-${pattern}`} aria-hidden="true" />
    </div>
  );
}
