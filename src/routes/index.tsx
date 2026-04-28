import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Essays } from "@/components/Essays";
import { Magnara } from "@/components/Magnara";
import { Manifesto } from "@/components/Manifesto";
import { Subscribe } from "@/components/Subscribe";
import { Support } from "@/components/Support";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Magna Anima Genius Project — You were never meant to be ordinary" },
      {
        name: "description",
        content:
          "A global initiative nurturing the brilliance within every individual. Essays, rituals, and tools built on four pillars: Intellect, Heart, Empowerment, Purpose.",
      },
      { property: "og:title", content: "The Magna Anima Genius Project" },
      {
        property: "og:description",
        content:
          "Raise your ceiling. Essays, rituals, and the Magnara OS for a proven life.",
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
      <Essays />
      <Magnara />
      <Manifesto />
      <Subscribe />
      <Support />
      <Footer />
    </main>
  );
}
