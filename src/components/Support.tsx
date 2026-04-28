export function Support() {
  return (
    <section id="support" className="relative py-28 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <p className="smallcaps text-xs text-gold mb-6 tracking-[0.3em]">
          Support the Project
        </p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
          Fuel the <span className="italic text-gold">flame</span>.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          The Magna Anima Genius Project is a global initiative to nurture the
          brilliance within every soul. Your contribution keeps the essays free,
          the rituals open, and the mission rising.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="https://givebutter.com/magnaanimageniusproject"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-gold text-primary-foreground rounded-sm shadow-gold"
          >
            <span className="smallcaps text-sm tracking-widest">Donate ↗</span>
          </a>
          <a
            href="https://givebutter.com/magnaanimageniusproject"
            target="_blank"
            rel="noopener noreferrer"
            className="smallcaps text-xs text-muted-foreground hover:text-gold transition-colors"
          >
            givebutter.com/magnaanimageniusproject
          </a>
        </div>
      </div>
    </section>
  );
}
