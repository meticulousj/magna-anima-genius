import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Values } from "@/components/Values";
import { Essays } from "@/components/Essays";
import { Magnara } from "@/components/Magnara";
import { Sprint } from "@/components/Sprint";
import { Store } from "@/components/Store";
import { Manifesto } from "@/components/Manifesto";
import { Subscribe } from "@/components/Subscribe";
import { Support } from "@/components/Support";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://magna-anima-genius.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const TITLE =
  "The Magna Anima Genius Project — Awaken the noble spirit within";
const DESCRIPTION =
  "A global initiative nurturing the brilliance within every individual. Essays, rituals, the Magnara OS, and the 90-Day Sovereign Sprint workbook — built on four pillars: Intellect, Heart, Empowerment, Purpose.";

// In-page sections, surfaced to search engines as SiteNavigationElement.
const SECTIONS = [
  { name: "Pillars", anchor: "pillars" },
  { name: "Values", anchor: "values" },
  { name: "Dispatches", anchor: "essays" },
  { name: "Magnara", anchor: "magnara" },
  { name: "Sprint", anchor: "sprint" },
  { name: "Store", anchor: "store" },
  { name: "Manifesto", anchor: "manifesto" },
  { name: "Subscribe", anchor: "subscribe" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "The Magna Anima Genius Project — Awaken the noble spirit within" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Sections",
          itemListElement: SECTIONS.map((s, i) => ({
            "@type": "SiteNavigationElement",
            position: i + 1,
            name: s.name,
            url: `${SITE_URL}/#${s.anchor}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "The 90-Day Sovereign Sprint",
          description:
            "A 90-day workbook of daily prompts, three rituals, weekly reflections and 30·60·90 milestones. Shipped as PDF, Notion template, and Obsidian vault.",
          inLanguage: "en",
          isAccessibleForFree: true,
          url: `${SITE_URL}/#sprint`,
          author: {
            "@type": "Organization",
            name: "The Magna Anima Genius Project",
          },
          publisher: {
            "@type": "Organization",
            name: "The Magna Anima Genius Project",
          },
          image: OG_IMAGE,
          encodingFormat: ["application/pdf", "application/zip"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Hero />
      <Pillars />
      <Values />
      <Essays />
      <Magnara />
      <Sprint />
      <Store />
      <Manifesto />
      <Subscribe />
      <Support />
      <Footer />
    </main>
  );
}
