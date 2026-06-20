import { useState } from "react";

const features = [
  { k: "Daily Prompts", d: "One question to crack the day open." },
  { k: "Three Rituals", d: "Morning ignition, midday recalibration, evening audit." },
  { k: "Weekly Reflection", d: "Five questions, fifteen minutes, zero theatre." },
  { k: "30/60/90 Milestones", d: "Proof you moved, not just tried." },
  { k: "Three Formats", d: "Print-ready PDF, Notion import, and a full Obsidian vault." },
];

// Add new versions here as they ship. File naming convention:
//   v1 → /sovereign-sprint-workbook.pdf, /sovereign-sprint-notion.zip, /sovereign-sprint-obsidian.zip
//   v2+ → /sovereign-sprint-workbook-v2.pdf, /sovereign-sprint-notion-v2.zip, /sovereign-sprint-obsidian-v2.zip
const VERSIONS = [
  { id: "v1", label: "v1 · Beta", available: true },
  { id: "v2", label: "v2 · Current", available: true },
] as const;

type VersionId = (typeof VERSIONS)[number]["id"];

function fileFor(version: VersionId, kind: "pdf" | "notion" | "obsidian") {
  const suffix = version === "v1" ? "" : `-${version}`;
  if (kind === "pdf") return `/sovereign-sprint-workbook${suffix}.pdf`;
  if (kind === "notion") return `/sovereign-sprint-notion${suffix}.zip`;
  return `/sovereign-sprint-obsidian${suffix}.zip`;
}

export function Sprint() {
  const [version, setVersion] = useState<VersionId>("v2");
  const active = VERSIONS.find((v) => v.id === version)!;
  const disabled = !active.available;

  return (
    <section id="sprint" className="relative py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div className="order-2 lg:order-1">
          <p className="smallcaps text-xs text-gold">Workbook · 90 Days</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.02]">
            <span className="text-gradient-gold italic">The 90-Day</span>
            <br />
            <span className="text-foreground/90 text-4xl md:text-5xl">
              Sovereign Sprint.
            </span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">
            One focused arc. Three protocols a day. One honest reflection a week.
            A workbook for the season you stop drifting and start proving.
          </p>

          <ul className="mt-10 space-y-5">
            {features.map((f) => (
              <li key={f.k} className="flex gap-5 group">
                <span className="mt-2 h-px w-8 shrink-0 bg-gold/60 transition-all group-hover:w-14 group-hover:bg-gold" />
                <div>
                  <h4 className="font-display text-xl">{f.k}</h4>
                  <p className="text-sm text-muted-foreground">{f.d}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Version selector */}
          <div
            className="mt-12 inline-flex items-center gap-1 p-1 border border-gold/30 rounded-sm"
            role="tablist"
            aria-label="Sprint version"
          >
            {VERSIONS.map((v) => {
              const isActive = v.id === version;
              return (
                <button
                  key={v.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setVersion(v.id)}
                  className={`smallcaps text-[11px] px-3 py-1.5 rounded-sm transition-colors ${
                    isActive
                      ? "bg-gold/15 text-gold"
                      : "text-muted-foreground hover:text-gold"
                  }`}
                >
                  {v.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex gap-4 items-center flex-wrap">
            <a
              href={disabled ? undefined : fileFor(version, "pdf")}
              download={!disabled}
              target={disabled ? undefined : "_blank"}
              rel="noopener"
              aria-disabled={disabled}
              onClick={(e) => disabled && e.preventDefault()}
              className={`inline-flex items-center px-7 py-3 bg-gradient-gold text-primary-foreground rounded-sm shadow-gold ${
                disabled ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <span className="smallcaps text-sm">
                Get the Sprint · PDF {version.toUpperCase()}
              </span>
            </a>
            <a
              href={disabled ? undefined : fileFor(version, "notion")}
              download={!disabled}
              aria-disabled={disabled}
              onClick={(e) => disabled && e.preventDefault()}
              className={`inline-flex items-center px-5 py-3 border border-gold/50 text-foreground/90 hover:border-gold hover:text-gold rounded-sm transition-colors ${
                disabled ? "opacity-40 cursor-not-allowed hover:border-gold/50 hover:text-foreground/90" : ""
              }`}
            >
              <span className="smallcaps text-xs">Notion template</span>
            </a>
            <a
              href={disabled ? undefined : fileFor(version, "obsidian")}
              download={!disabled}
              aria-disabled={disabled}
              onClick={(e) => disabled && e.preventDefault()}
              className={`inline-flex items-center px-5 py-3 border border-gold/50 text-foreground/90 hover:border-gold hover:text-gold rounded-sm transition-colors ${
                disabled ? "opacity-40 cursor-not-allowed hover:border-gold/50 hover:text-foreground/90" : ""
              }`}
            >
              <span className="smallcaps text-xs">Obsidian vault</span>
            </a>
          </div>
          <div className="mt-4">
            <a
              href="#subscribe"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("subscribe:intent", { detail: { source: "sprint" } }));
                const el = document.getElementById("subscribe");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
                setTimeout(() => {
                  const input = el?.querySelector<HTMLInputElement>('input[type="email"]');
                  input?.focus({ preventScroll: true });
                }, 600);
              }}
              className="smallcaps text-xs text-muted-foreground hover:text-gold"
            >
              {disabled ? "Get notified when this version ships →" : "Get updates when v2 ships →"}
            </a>
          </div>
        </div>

        {/* Right — page mockups */}
        <div className="relative order-1 lg:order-2 animate-float-slow">
          <div className="absolute -inset-10 bg-gradient-gold opacity-15 blur-3xl rounded-full" aria-hidden />

          {/* Back page */}
          <div
            className="relative grain border border-gold/25 bg-card rounded-sm p-7 shadow-gold rotate-[-4deg] translate-x-6 translate-y-3 max-w-md mx-auto"
            aria-hidden
          >
            <p className="smallcaps text-[10px] text-gold/70">Week 02 · Reflection</p>
            <div className="mt-4 space-y-2.5">
              <div className="h-2 w-3/4 bg-foreground/10 rounded-sm" />
              <div className="h-2 w-2/3 bg-foreground/10 rounded-sm" />
              <div className="h-2 w-4/5 bg-foreground/10 rounded-sm" />
            </div>
          </div>

          {/* Front page */}
          <div className="relative grain border border-gold/40 bg-card rounded-sm p-8 shadow-gold rotate-[2deg] -mt-44 max-w-md mx-auto">
            <div className="flex items-center justify-between">
              <p className="smallcaps text-[10px] text-gold">Day 01 · Ignition</p>
              <span className="font-display italic text-gold/70 text-sm">i.</span>
            </div>
            <div className="gold-rule mt-4" />

            <p className="mt-5 font-display text-xl leading-snug">
              What would I refuse to negotiate today, even if no one watched?
            </p>

            <div className="mt-7 space-y-4">
              {["Morning ignition", "Midday recalibration", "Evening audit"].map((r) => (
                <div key={r} className="flex items-center gap-3">
                  <span className="h-3.5 w-3.5 border border-gold/60 rounded-[2px]" />
                  <span className="smallcaps text-[11px] text-muted-foreground">{r}</span>
                </div>
              ))}
            </div>

            <div className="gold-rule mt-7" />
            <p className="mt-5 smallcaps text-[10px] text-gold/70">One line. The truth.</p>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-full bg-foreground/10 rounded-sm" />
              <div className="h-2 w-5/6 bg-foreground/10 rounded-sm" />
            </div>
          </div>

          <div className="absolute -bottom-2 -right-2 bg-background border border-gold/40 px-5 py-3 rounded-sm">
            <p className="smallcaps text-[10px] text-gold">{active.label} drop</p>
          </div>
        </div>
      </div>
    </section>
  );
}
