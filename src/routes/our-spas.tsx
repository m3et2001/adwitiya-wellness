import { createFileRoute } from "@tanstack/react-router";
import { SpasPage } from "@/components/PageShells";
export const Route = createFileRoute("/our-spas")({ head: () => ({ meta: [
  { title: "Our Spas | ADWITYA WELLNESS" }, { name: "description", content: "Explore Ganga Spa, Amore Wellness and Sattva Wellness, three wellness destinations." },
  { property: "og:title", content: "Our Spas | ADWITYA WELLNESS" }, { property: "og:description", content: "Explore Ganga Spa, Amore Wellness and Sattva Wellness, three wellness destinations." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: SpasPage });
