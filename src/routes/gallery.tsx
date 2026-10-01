import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/PageShells";
export const Route = createFileRoute("/gallery")({ head: () => ({ meta: [
  { title: "Gallery | ADWITYA WELLNESS" }, { name: "description", content: "Preview imagery for the ADWITYA WELLNESS visual experience." },
  { property: "og:title", content: "Gallery | ADWITYA WELLNESS" }, { property: "og:description", content: "Preview imagery for the ADWITYA WELLNESS visual experience." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: GalleryPage });
