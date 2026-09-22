import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Subscribe } from "@/components/Subscribe";
import { Footer } from "@/components/Footer";
import { FlameMark } from "@/components/FlameMark";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, Check, Compass, Focus, Orbit, Sparkles } from "lucide-react";
import sovereign from "@/assets/sovereign.jpg";

const SITE_URL = "https://magna-anima-genius.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const APP_URL = "https://magnara.base44.app";

const TITLE = "Magnara — The App for the Proven Life | Magna Anima Genius Project";
const DESCRIPTION =
  "Magnara is the companion app of the Magna Anima Genius Project: daily focus, 90-day goals, rituals, a weekly Reflection Chamber, and the Vision OS — built on four pillars. Start free.";

const features = [
  {
    k: "Today View",
    d: "One screen. The three things that move the needle — nothing else competes for your attention.",
    icon: Focus,
    marker: "01",
  },
  {
    k: "90-Day Goals",
    d: "Horizons short enough to feel, long enough to matter. Progress you can see every morning.",
    icon: Orbit,
    marker: "02",
  },
  {
    k: "Daily Rituals",
    d: "Protocols that build state, not pressure. Morning, deep work, and close-of-day sequences.",
    icon: Sparkles,
    marker: "03",
  },
  {
    k: "Reflection Chamber",
    d: "A weekly audit — honest, structured, kind. Five questions that keep the trajectory true.",
    icon: Compass,
    marker: "04",
  },
  {
    k: "Vision OS",
    d: "Your life's operating system. Values, not vibes. The four pillars made operational.",
    icon: Check,
    marker: "05",
  },
];

const steps = [
  {
    n: "I",
    t: "Define the vision",
    d: "Write the 90-day vision and the non-negotiables that guard it. Magnara turns intent into structure.",
  },
  {
    n: "II",
    t: "Run the rituals",
    d: "Each day opens with your three priorities and the rituals that build the state to execute them.",
  },
  {
    n: "III",
    t: "Audit the week",
    d: "The Reflection Chamber reviews what moved, what stalled, and what the next week demands.",
  },
];

export const Route = createFileRoute("/app")({
  component: AppPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/app` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/app` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Magnara",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Web",
          description: DESCRIPTION,
          url: APP_URL,
          image: OG_IMAGE,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          author: { "@type": "Organization", name: "The Magna Anima Genius Project" },
        }),
      },
    ],
  }),
});

function AppPage() {
  return (
    <main className="min-h-screen bg-[var(--app-noir)] font-interface">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-[var(--app-line)] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl grid-cols-1 gap-3 lg:grid-cols-12 lg:grid-rows-[minmax(350px,1fr)_170px]">
          <div className="relative overflow-hidden border border-[var(--app-line)] bg-[var(--app-panel)] px-6 py-10 sm:px-10 lg:col-span-7 lg:row-span-1 lg:px-14 lg:py-14">
            <div className="absolute right-0 top-0 h-28 w-28 border-b border-l border-[var(--app-line)]" aria-hidden />
            <p className="smallcaps text-[11px] text-gold">The sovereign operating system</p>
            <h1 className="mt-8 max-w-2xl font-editorial text-6xl leading-[0.88] sm:text-7xl lg:text-8xl">
              Magnara<span className="text-gold">.</span>
              <span className="mt-3 block text-3xl leading-none text-foreground/75 sm:text-5xl">
                The proven life,
                <br />made operational.
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
              Turn vision into daily execution through Intellect, Heart, Empowerment,
              and Purpose. One deliberate system for goals, rituals, and reflection.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="h-12 rounded-none bg-gradient-gold px-7 font-interface text-xs uppercase text-primary-foreground shadow-gold">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  Start free <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-gold/40 bg-transparent px-7 font-interface text-xs uppercase text-gold hover:bg-gold hover:text-primary-foreground">
                <a href="https://northstarpath.base44.app" target="_blank" rel="noopener noreferrer">
                  North Star Path <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>

          <div className="group relative min-h-[500px] overflow-hidden border border-[var(--app-line)] bg-[var(--app-panel)] lg:col-span-5 lg:row-span-2 lg:min-h-0">
            <img
              src={sovereign}
              alt="A sovereign silhouette illuminated by a constellation of golden stars."
              width={1024}
              height={1280}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--app-noir)] via-transparent to-transparent" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
              <div>
                <p className="smallcaps text-[10px] text-gold">Status</p>
                <p className="mt-2 font-editorial text-2xl">Now in private beta</p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold">
                <FlameMark className="h-5 w-5" />
              </span>
            </div>
          </div>

          <a href="#features" className="group flex min-h-36 flex-col justify-between border border-[var(--app-line)] bg-[var(--app-panel-strong)] p-6 transition-colors hover:border-gold/50 lg:col-span-3">
            <span className="smallcaps text-[10px] text-muted-foreground">Explore</span>
            <span className="flex items-end justify-between gap-4 font-editorial text-2xl">
              Inside Magnara <ArrowDown className="h-5 w-5 text-gold transition-transform group-hover:translate-y-1" />
            </span>
          </a>
          <div className="flex min-h-36 items-end border border-[var(--app-line)] bg-[var(--app-panel)] p-6 lg:col-span-4">
            <p className="text-sm leading-6 text-muted-foreground">
              <span className="mb-3 block text-xs font-medium uppercase text-gold">Free to start</span>
              No card required. Build your first 90-day trajectory today.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="smallcaps text-[11px] text-gold">Inside Magnara</p>
              <h2 className="mt-5 font-editorial text-5xl leading-[0.95] sm:text-6xl">
                Five instruments.<br /><em className="text-gold">One trajectory.</em>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground lg:col-span-4">
              Every surface strips away noise and returns you to the decisions that shape the life beneath the work.
            </p>
          </div>
          <div className="mt-12 grid auto-rows-[minmax(230px,auto)] gap-3 md:grid-cols-2 lg:grid-cols-12">
            {features.map((f, index) => {
              const Icon = f.icon;
              const spans = ["lg:col-span-5", "lg:col-span-4", "lg:col-span-3", "lg:col-span-4", "lg:col-span-5"];
              return (
                <article key={f.k} className={`group relative flex flex-col justify-between overflow-hidden border border-[var(--app-line)] bg-[var(--app-panel)] p-7 transition-colors hover:bg-[var(--app-panel-strong)] ${spans[index]}`}>
                  <div className="flex items-start justify-between">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
                    <span className="font-mono text-[10px] text-muted-foreground">{f.marker}</span>
                  </div>
                  <div className="mt-14">
                    <h3 className="font-editorial text-3xl">{f.k}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{f.d}</p>
                  </div>
                </article>
              );
            })}
            <div className="flex flex-col justify-between border border-gold/30 bg-gradient-gold p-7 text-primary-foreground md:col-span-2 lg:col-span-3">
              <FlameMark className="h-8 w-8" />
              <div className="mt-14">
                <h3 className="font-editorial text-3xl italic">Ready to begin?</h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/75">Set your first 90-day vision today.</p>
                <Button asChild variant="outline" className="mt-6 h-11 rounded-none border-primary-foreground/40 bg-transparent px-5 text-[11px] uppercase text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">Open Magnara <ArrowUpRight /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--app-line)] bg-[var(--app-panel)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="smallcaps text-[11px] text-gold">The practice</p>
            <h2 className="mt-5 font-editorial text-5xl leading-[0.95]">A rhythm for<br /><em className="text-gold">the real life.</em></h2>
          </div>
          <div className="divide-y divide-[var(--app-line)] border-y border-[var(--app-line)] lg:col-span-8">
            {steps.map((s) => (
              <div key={s.n} className="grid gap-5 py-8 sm:grid-cols-[80px_1fr] sm:py-10">
                <span className="font-editorial text-3xl italic text-gold/60">{s.n}</span>
                <div>
                  <h3 className="font-editorial text-3xl">{s.t}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden border border-[var(--app-line)] bg-[var(--app-panel)] md:grid-cols-[1fr_0.72fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="smallcaps text-[11px] text-gold">An analogue companion</p>
              <h2 className="mt-5 max-w-2xl font-editorial text-5xl leading-[0.95] sm:text-6xl">Prefer to work<br /><em className="text-gold">on paper?</em></h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground">The 90-Day Sovereign Sprint carries the same practice in print, Notion, and Obsidian — free.</p>
              <Button asChild variant="outline" size="lg" className="mt-8 h-12 rounded-none border-gold/40 bg-transparent px-7 text-xs uppercase text-gold hover:bg-gold hover:text-primary-foreground">
                <Link to="/sprint">Get the free Sprint <ArrowUpRight /></Link>
              </Button>
            </div>
            <div className="relative hidden min-h-80 border-l border-[var(--app-line)] md:flex md:items-center md:justify-center">
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--app-line)_1px,transparent_1px),linear-gradient(90deg,var(--app-line)_1px,transparent_1px)] [background-size:48px_48px]" aria-hidden />
              <FlameMark className="relative h-28 w-28" />
              <span className="absolute bottom-8 smallcaps text-[10px] text-muted-foreground">Intellect · Heart · Power · Purpose</span>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </main>
  );
}
