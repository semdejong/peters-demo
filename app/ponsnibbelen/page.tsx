import type { Metadata } from "next";
import { content } from "@/content";
import { ServiceView } from "@/components/ServiceView";

export const metadata: Metadata = {
  title: "Ponsnibbelen | Peters Metaaltechniek",
  description: content.services.ponsnibbelen.meta,
};

export default function Page() {
  return <ServiceView serviceKey="ponsnibbelen" />;
}
