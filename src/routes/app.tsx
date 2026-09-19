import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Subscribe } from "@/components/Subscribe";
import { Footer } from "@/components/Footer";
import { FlameMark } from "@/components/FlameMark";
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
  },
  {
    k: "90-Day Goals",
    d: "Horizons short enough to feel, long enough to matter. Progress you can see every morning.",
  },
  {
    k: "Daily Rituals",
    d: "Protocols that build state, not pressure. Morning, deep work, and close-of-day sequences.",
  },
  {
    k: "Reflection Chamber",
    d: "A weekly audit — honest, structured, kind. Five questions that keep the trajectory true.",
  },
  {
    k: "Vision OS",
    d: "Your life's operating system. Values, not vibes. The four pillars made operational.",
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
    <main className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-gold opacity-[0.04] pointer-events-none"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="smallcaps text-xs text-gold">The App</p>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1.02]">
              <span className="text-gradient-gold italic">Magnara</span>
              <br />
              <span className="text-foreground/90 text-4xl md:text-5xl">
                an OS for the proven life.
              </span>
            </h1>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">
              The companion app of the Magna Anima Genius Project. Built on the
              four pillars — Intellect, Heart, Empowerment, Purpose — Magnara
              turns your vision into daily execution. Track goals, rituals, and
              your deepest vision in one place.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-gold text-primary-foreground rounded-sm shadow-gold"
              >
                <span className="smallcaps text-sm">Start Free ↗</span>
              </a>
              <a
                href="https://northstarpath.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-gold/40 text-gold rounded-sm hover:bg-gold hover:text-primary-foreground transition-colors"
              >
                <span className="smallcaps text-sm">Open North Star Path ↗</span>
              </a>
              <a
                href="#features"
                className="smallcaps text-xs text-muted-foreground hover:text-gold transition-colors"
              >
                See what's inside
              </a>
            </div>
            <p className="mt-6 smallcaps text-[10px] text-muted-foreground">
              Free to start · No card required · Now in beta
            </p>
          </div>
          <div className="relative animate-float-slow">
            <div
              className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full"
              aria-hidden
            />
            <div className="relative border border-gold/30 rounded-sm overflow-hidden shadow-gold">
              <img
                src={sovereign}
                alt="An abstract illustration representing the sovereign soul — a flame rising from water under rays of light."
                width={1024}
                height={1280}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background border border-gold/40 px-5 py-3 rounded-sm">
              <p className="smallcaps text-[10px] text-gold">Now in beta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-28 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="smallcaps text-xs text-gold mb-4 tracking-[0.3em]">
            Inside Magnara
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
            Five instruments. <span className="italic text-gold">One trajectory.</span>
          </h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60">
            {features.map((f) => (
              <div
                key={f.k}
                className="bg-background p-8 group hover:bg-gold/[0.04] transition-colors"
              >
                <span className="block h-px w-10 bg-gold/60 transition-all group-hover:w-16 group-hover:bg-gold" />
                <h3 className="mt-6 font-display text-2xl">{f.k}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {f.d}
                </p>
              </div>
            ))}
            <div className="bg-gold/[0.04] p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl italic text-gradient-gold">
                  Ready to begin?
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Start free and set your first 90-day vision today.
                </p>
              </div>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-gold text-primary-foreground rounded-sm shadow-gold self-start"
              >
                <span className="smallcaps text-sm">Open Magnara ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-28 border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="smallcaps text-xs text-gold mb-4 tracking-[0.3em] text-center">
            The Practice
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-center">
            How the sprint <span className="italic text-gold">becomes a life</span>
          </h2>
          <div className="mt-16 space-y-12">
            {steps.map((s) => (
              <div key={s.n} className="grid md:grid-cols-[120px_1fr] gap-6 items-start">
                <span className="font-display text-5xl text-gold/40 md:text-right">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="relative py-24 border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="border border-gold/30 p-10 md:p-14 text-center">
            <FlameMark className="h-8 w-8 mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Prefer to work on paper?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              The 90-Day Sovereign Sprint workbook carries the same practice in
              print, Notion, and Obsidian — free.
            </p>
            <Link
              to="/sprint"
              className="mt-8 inline-flex items-center px-8 py-4 border border-gold/40 text-gold rounded-sm hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              <span className="smallcaps text-sm">Get the free Sprint</span>
            </Link>
          </div>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </main>
  );
}
