const items = [
  {
    title: "The 90-Day Sovereign Sprint",
    format: "PDF Workbook",
    desc: "109 pages. Daily prompts, three rituals, weekly reflections, 30·60·90 gates.",
    href: "/sovereign-sprint-workbook.pdf",
    price: "Free · Beta",
    tag: "Most popular",
  },
  {
    title: "Sovereign Sprint — Notion Template",
    format: "Notion Import (.zip)",
    desc: "96 Markdown files. Drop into Notion → Import → Markdown & CSV.",
    href: "/sovereign-sprint-notion.zip",
    price: "Free · Beta",
  },
  {
    title: "Sovereign Sprint — Obsidian Vault",
    format: "Obsidian Vault (.zip)",
    desc: "112-file vault with daily/weekly templates and pre-configured settings.",
    href: "/sovereign-sprint-obsidian.zip",
    price: "Free · Beta",
  },
];

export function Store() {
  return (
    <section id="store" className="relative py-28 md:py-36 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="smallcaps text-xs text-gold">Store · Downloads</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.02]">
            <span className="text-gradient-gold italic">Tools</span>{" "}
            <span className="text-foreground/90">for the work.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Workbooks, templates, and vaults built for one purpose — to make the
            unseen brilliance inside you provable, repeatable, real.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative grain border border-gold/25 bg-card rounded-sm p-7 flex flex-col hover:border-gold/60 transition-colors"
            >
              {it.tag && (
                <span className="absolute top-4 right-4 smallcaps text-[10px] px-2 py-1 bg-gold/15 text-gold rounded-sm">
                  {it.tag}
                </span>
              )}
              <p className="smallcaps text-[10px] text-gold/80">{it.format}</p>
              <h3 className="mt-3 font-display text-2xl leading-snug">
                {it.title}
              </h3>
              <div className="gold-rule mt-4" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                {it.desc}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="smallcaps text-xs text-foreground/80">
                  {it.price}
                </span>
                <a
                  href={it.href}
                  download
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center px-4 py-2 border border-gold/50 text-foreground/90 hover:bg-gold hover:text-primary-foreground hover:border-gold rounded-sm transition-colors"
                >
                  <span className="smallcaps text-[11px]">Download ↓</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4 flex-wrap">
          <a
            href="#subscribe"
            className="smallcaps text-xs text-muted-foreground hover:text-gold"
          >
            Get notified when new drops ship →
          </a>
          <span className="text-muted-foreground/40">·</span>
          <a
            href="#sprint"
            className="smallcaps text-xs text-muted-foreground hover:text-gold"
          >
            See the Sprint in detail →
          </a>
        </div>
      </div>
    </section>
  );
}
