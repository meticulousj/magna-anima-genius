import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Sprint } from "@/components/Sprint";
import { Subscribe } from "@/components/Subscribe";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://magna-anima-genius.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const TITLE = "The 90-Day Sovereign Sprint — Free Workbook (PDF, Notion, Obsidian)";
const DESCRIPTION =
  "A 90-day workbook: daily prompts, three rituals, weekly reflections and 30·60·90 milestones. Free in three formats — print-ready PDF, Notion template, Obsidian vault.";

export const Route = createFileRoute("/sprint")({
  component: SprintPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/sprint` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/sprint` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "The 90-Day Sovereign Sprint",
          description: DESCRIPTION,
          inLanguage: "en",
          isAccessibleForFree: true,
          url: `${SITE_URL}/sprint`,
          image: OG_IMAGE,
          encodingFormat: ["application/pdf", "application/zip"],
          author: { "@type": "Organization", name: "The Magna Anima Genius Project" },
          publisher: { "@type": "Organization", name: "The Magna Anima Genius Project" },
        }),
      },
    ],
  }),
});

function SprintPage() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Sprint />
      <Subscribe />
      <Footer />
    </main>
  );
}
