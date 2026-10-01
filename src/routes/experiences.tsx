import { createFileRoute } from "@tanstack/react-router";
import { ExperiencesPage } from "@/components/PageShells";
export const Route = createFileRoute("/experiences")({ head: () => ({ meta: [
  { title: "Treatments | ADWITYA WELLNESS" }, { name: "description", content: "Explore sample massage and wellness treatments for the ADWITYA WELLNESS prototype." },
  { property: "og:title", content: "Treatments | ADWITYA WELLNESS" }, { property: "og:description", content: "Explore sample massage and wellness treatments for the ADWITYA WELLNESS prototype." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: ExperiencesPage });
