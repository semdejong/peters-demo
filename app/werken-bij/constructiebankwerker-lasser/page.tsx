import type { Metadata } from "next";
import { content } from "@/content";
import { VacancyView } from "@/components/VacancyView";

const vacancy = content.vacancies[1];

export const metadata: Metadata = {
  title: "Vacature constructiebankwerker / lasser | Peters Metaaltechniek",
  description:
    "Ervaren constructiebankwerker / lasser, 38 uur per week, per direct. Samenstellen, aflassen en afwerken. MBO en minimaal 5 jaar ervaring. Emmen.",
};

export default function Page() {
  return <VacancyView vacancy={vacancy} />;
}
