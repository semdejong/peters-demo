import Image from "next/image";
import type { Beeld } from "@/lib/beelden";

export function PlateImg({
  beeld,
  sizes,
  priority = false,
  className = "",
  cropClass,
}: {
  beeld: Beeld;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Hard crop. The box never grows past the source size. */
  cropClass?: string;
}) {
  if (cropClass) {
    return (
      <div
        className={`relative overflow-hidden ${cropClass}`}
        style={{ maxWidth: beeld.w, maxHeight: beeld.h }}
      >
        <Image
          src={beeld.src}
          alt={beeld.alt}
          fill
          sizes={sizes ?? `${beeld.w}px`}
          preload={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <Image
      src={beeld.src}
      alt={beeld.alt}
      width={beeld.w}
      height={beeld.h}
      sizes={sizes ?? `(max-width: 800px) 100vw, ${beeld.w}px`}
      preload={priority}
      className={className}
      style={{ width: "100%", maxWidth: beeld.w, height: "auto" }}
    />
  );
}
