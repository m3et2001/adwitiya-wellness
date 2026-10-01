import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/PageShells";
export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "About ADWITYA WELLNESS | Wellness with Intention" }, { name: "description", content: "Explore the story, philosophy and approach behind ADWITYA WELLNESS." },
  { property: "og:title", content: "About ADWITYA WELLNESS | Wellness with Intention" }, { property: "og:description", content: "Explore the story, philosophy and approach behind ADWITYA WELLNESS." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: AboutPage });
