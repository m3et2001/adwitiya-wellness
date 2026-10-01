import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/PageShells";
export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact | ADWITYA WELLNESS" }, { name: "description", content: "Preview contact and booking options for ADWITYA WELLNESS." },
  { property: "og:title", content: "Contact | ADWITYA WELLNESS" }, { property: "og:description", content: "Preview contact and booking options for ADWITYA WELLNESS." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: ContactPage });
