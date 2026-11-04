import type { Metadata } from "next";
import { content } from "@/content";
import { ServiceView } from "@/components/ServiceView";

export const metadata: Metadata = {
  title: "Constructiewerk | Peters Metaaltechniek",
  description: content.services.constructie.meta,
};

export default function Page() {
  return <ServiceView serviceKey="constructie" />;
}