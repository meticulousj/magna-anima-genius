import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Store } from "@/components/Store";
import { Subscribe } from "@/components/Subscribe";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://magna-anima-genius.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const TITLE = "Store — Free Workbooks, Notion & Obsidian Templates";
const DESCRIPTION =
  "Download the tools: the 90-Day Sovereign Sprint workbook (PDF), the Notion template, the Obsidian vault, and the Vision OS Template Pack. All free.";

export const Route = createFileRoute("/store")({
  component: StorePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/store` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/store` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Store — The Magna Anima Genius Project",
          description: DESCRIPTION,
          url: `${SITE_URL}/store`,
        }),
      },
    ],
  }),
});

function StorePage() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Store />
      <Subscribe />
      <Footer />
    </main>
  );
}
