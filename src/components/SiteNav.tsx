import { FlameMark } from "./FlameMark";

const links = [
  { href: "#pillars", label: "Pillars" },
  { href: "#essays", label: "Dispatches" },
  { href: "#magnara", label: "Magnara" },
  { href: "#manifesto", label: "Manifesto" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <FlameMark className="h-6 w-6" />
          <span className="font-display text-lg tracking-wide">
            Magna <span className="text-gold italic">Anima</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="smallcaps hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#subscribe"
          className="smallcaps text-xs px-4 py-2 border border-gold/40 text-gold rounded-sm hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          Subscribe
        </a>
      </nav>
    </header>
  );
}
