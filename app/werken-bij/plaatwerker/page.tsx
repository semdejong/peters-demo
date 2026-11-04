import type { Metadata } from "next";
import { content } from "@/content";
import { VacancyView } from "@/components/VacancyView";

const vacancy = content.vacancies[0];

export const metadata: Metadata = {
  title: "Vacature ervaren plaatwerker | Peters Metaaltechniek",
  description:
    "Ervaren plaatwerker, 38 uur per week, per direct. CNC-kantbank en ponsnibbelmachine. MBO en minimaal 5 jaar ervaring. Solliciteer bij Peters Metaaltechniek in Emmen.",
};

export default function Page() {
  return <VacancyView vacancy={vacancy} />;
}
