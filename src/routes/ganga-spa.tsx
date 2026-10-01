import { createFileRoute } from "@tanstack/react-router";
import { SpaDetailPage } from "@/components/SpaDetailPage";
import { getSpa } from "@/data/site";
export const Route = createFileRoute("/ganga-spa")({ head: () => ({ meta: [
 { title: "GANGA SPA | ADWITYA WELLNESS" }, { name: "description", content: "Explore the Ganga Spa experience, treatments, gallery and contact options." }, { property: "og:title", content: "GANGA SPA | ADWITYA WELLNESS" }, { property: "og:description", content: "Explore the Ganga Spa experience, treatments, gallery and contact options." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: () => <SpaDetailPage spa={getSpa("ganga-spa")} /> });
