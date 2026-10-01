import { createFileRoute } from "@tanstack/react-router";
import { LocationsPage } from "@/components/PageShells";
export const Route = createFileRoute("/locations")({ head: () => ({ meta: [
  { title: "Locations | ADWITYA WELLNESS" }, { name: "description", content: "Preview how verified ADWITYA WELLNESS spa location details will appear." },
  { property: "og:title", content: "Locations | ADWITYA WELLNESS" }, { property: "og:description", content: "Preview how verified ADWITYA WELLNESS spa location details will appear." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: LocationsPage });
