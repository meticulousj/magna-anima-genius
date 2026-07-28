import { useState } from "react";
import sprintCover from "@/assets/sprint-v2-cover.jpg";
import sprintP2 from "@/assets/sprint-v2-p2.jpg";
import sprintP3 from "@/assets/sprint-v2-p3.jpg";
import sprintP4 from "@/assets/sprint-v2-p4.jpg";

type Item = {
  title: string;
  format: string;
  desc: string;
  href: string;
  price: string;
  tag?: string;
  thumbs: { src: string; alt: string }[];
  thumbTone: "pages" | "notion" | "obsidian";
};

const items: Item[] = [
  {
    title: "The 90-Day Sovereign Sprint",
    format: "PDF Workbook · v2",
    desc: "109 pages. Daily prompts, three rituals, weekly reflections, 30·60·90 gates.",
    href: "/sovereign-sprint-workbook-v2.pdf",
    price: "Free · v2",
    tag: "Most popular",
    thumbs: [
      { src: sprintCover, alt: "Sovereign Sprint v2 cover page" },
      { src: sprintP2, alt: "Sovereign Sprint v2 page 2 preview" },
      { src: sprintP3, alt: "Sovereign Sprint v2 page 3 preview" },
      { src: sprintP4, alt: "Sovereign Sprint v2 page 4 preview" },
    ],
    thumbTone: "pages",
  },
  {
    title: "Sovereign Sprint — Notion Template",
    format: "Notion Import (.zip)",
    desc: "96 Markdown files. Drop into Notion → Import → Markdown & CSV.",
    href: "/sovereign-sprint-notion.zip",
    price: "Free · Beta",
    thumbs: [],
    thumbTone: "notion",
  },
  {
    title: "Sovereign Sprint — Obsidian Vault",
    format: "Obsidian Vault (.zip)",
    desc: "112-file vault with daily/weekly templates and pre-configured settings.",
    href: "/sovereign-sprint-obsidian.zip",
    price: "Free · Beta",
    thumbs: [],
    thumbTone: "obsidian",
  },
  {
    title: "Vision OS Template Pack",
    format: "PDF Guide",
    desc: "Notion & Obsidian templates mirroring Magnara's structure — for non-app users.",
    href: "/vision-os-template-pack.pdf",
    price: "Free",
    thumbs: [],
    thumbTone: "notion",
  },
];

function PdfPreview({ thumbs }: { thumbs: Item["thumbs"] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="-mx-1">
      <div className="relative aspect-[8.5/11] overflow-hidden rounded-sm border border-gold/30 bg-background shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]">
        <img
          src={thumbs[active].src}
          alt={thumbs[active].alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <span className="absolute bottom-2 right-2 smallcaps text-[9px] px-1.5 py-0.5 bg-background/80 text-gold/90 border border-gold/30 rounded-sm">
          Pg {active + 1}/{thumbs.length}
        </span>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-1.5">
        {thumbs.map((t, i) => (
          <button
            key={t.src}
            type="button"
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            aria-label={`Preview ${t.alt}`}
            aria-pressed={active === i}
            className={`relative aspect-[8.5/11] overflow-hidden rounded-[2px] border transition-colors ${
              active === i ? "border-gold" : "border-gold/20 hover:border-gold/60"
            }`}
          >
            <img src={t.src} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
          </button>
        ))}
      </div>
    </div>
  );
}

function GlyphPreview({ tone }: { tone: "notion" | "obsidian" }) {
  const label = tone === "notion" ? "Notion · Markdown" : "Obsidian · Vault";
  const glyph = tone === "notion" ? "N" : "O";
  return (
    <div className="relative aspect-[8.5/11] overflow-hidden rounded-sm border border-gold/25 bg-gradient-to-br from-background to-card grain">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className="font-display text-7xl text-gradient-gold italic">{glyph}</span>
        <span className="smallcaps text-[10px] text-gold/80">{label}</span>
      </div>
      <div className="absolute inset-x-6 bottom-6 space-y-1.5 opacity-50">
        {[90, 75, 82, 60, 70].map((w, i) => (
          <div key={i} className="h-[3px] bg-gold/40 rounded-full" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

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
                <span className="absolute top-4 right-4 z-10 smallcaps text-[10px] px-2 py-1 bg-gold/15 text-gold rounded-sm">
                  {it.tag}
                </span>
              )}

              <div className="mb-5">
                {it.thumbs.length > 0 ? (
                  <PdfPreview thumbs={it.thumbs} />
                ) : (
                  <GlyphPreview tone={it.thumbTone as "notion" | "obsidian"} />
                )}
              </div>

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
