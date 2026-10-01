import { createFileRoute } from "@tanstack/react-router";
import { SpaDetailPage } from "@/components/SpaDetailPage";
import { getSpa } from "@/data/site";
export const Route = createFileRoute("/amore-wellness")({ head: () => ({ meta: [
 { title: "AMORE WELLNESS | ADWITYA WELLNESS" }, { name: "description", content: "Explore the Amore Wellness experience, treatments, gallery and contact options." }, { property: "og:title", content: "AMORE WELLNESS | ADWITYA WELLNESS" }, { property: "og:description", content: "Explore the Amore Wellness experience, treatments, gallery and contact options." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: () => <SpaDetailPage spa={getSpa("amore-wellness")} /> });
