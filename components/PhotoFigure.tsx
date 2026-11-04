import { type Beeld } from "@/lib/beelden";
import { PlateImg } from "@/components/PlateImg";

export function PhotoFigure({ beeld, sizes }: { beeld: Beeld; sizes: string }) {
  return (
    <figure className="min-w-0">
      <PlateImg beeld={beeld} sizes={sizes} />
      <figcaption className="photo-note">{beeld.alt}</figcaption>
    </figure>
  );
}
