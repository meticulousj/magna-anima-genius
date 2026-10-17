import { Link } from "@tanstack/react-router";
import { FlameMark } from "./FlameMark";

const links = [
  { href: "/#pillars", label: "Pillars" },
  { href: "/#values", label: "Values" },
  { href: "/#essays", label: "Dispatches" },
  { href: "/#magnara", label: "Magnara" },
  { to: "/app", label: "App" },
  { to: "/sprint", label: "Sprint" },
  { to: "/store", label: "Store" },
  { href: "/#manifesto", label: "Manifesto" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <FlameMark className="h-6 w-6" />
          <span className="font-display text-lg tracking-wide">
            Magna <span className="text-gold italic">Anima</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          {links.map((l) =>
            "to" in l ? (
              <Link
                key={l.to}
                to={l.to}
                className="smallcaps hover:text-gold transition-colors"
                activeProps={{ className: "smallcaps text-gold" }}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="smallcaps hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://magnaanimageniusbiosite.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block smallcaps text-xs px-3 py-2 whitespace-nowrap text-muted-foreground hover:text-gold transition-colors"
          >
            Bio Site ↗
          </a>
          <a
            href="https://bio.site/TheMagnaAnimaGeniusProject"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block smallcaps text-xs px-3 py-2 whitespace-nowrap text-muted-foreground hover:text-gold transition-colors"
          >
            All Links ↗
          </a>
          <a
            href="#subscribe"
            className="smallcaps text-xs px-4 py-2 border border-gold/40 text-gold rounded-sm hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            Subscribe
          </a>
        </div>
      </nav>
    </header>
  );
}
