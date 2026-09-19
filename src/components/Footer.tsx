import { FlameMark } from "./FlameMark";

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <FlameMark className="h-5 w-5" />
          <span className="font-display text-base">
            Magna Anima Genius Project
          </span>
        </div>
        <p className="text-xs text-muted-foreground smallcaps">
          © 2025 · Nurturing the brilliance within.
        </p>
        <div className="flex gap-6 text-xs smallcaps text-muted-foreground">
          <a href="#pillars" className="hover:text-gold">Pillars</a>
          <a href="#magnara" className="hover:text-gold">Magnara</a>
          <a
            href="https://magnaanimageniusproject.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            Substack ↗
          </a>
          <a
            href="https://bio.site/TheMagnaAnimaGeniusProject"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            All Links ↗
          </a>
          <a href="#subscribe" className="hover:text-gold">Subscribe</a>
        </div>
      </div>
    </footer>
  );
}
