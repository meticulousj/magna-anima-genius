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

// Primary navigation targets, surfaced to search engines.
const SECTIONS = [
  { name: "Pillars", url: `${SITE_URL}/#pillars` },
  { name: "Values", url: `${SITE_URL}/#values` },
  { name: "Dispatches", url: `${SITE_URL}/#essays` },
  { name: "Magnara", url: `${SITE_URL}/#magnara` },
  { name: "Sprint", url: `${SITE_URL}/sprint` },
  { name: "Store", url: `${SITE_URL}/store` },
  { name: "Manifesto", url: `${SITE_URL}/#manifesto` },
  { name: "Subscribe", url: `${SITE_URL}/#subscribe` },
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
            url: s.url,
          })),
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
