import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { content } from "@/content";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function Home() {
  return <HomePage />;
}
