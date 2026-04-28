const essays = [
  {
    date: "Apr 15",
    kicker: "Tools",
    title: "I Built a Tool to Restore Clarity. It's Free. It Takes 90 Seconds.",
    excerpt:
      "A decision navigator for the over-optioned mind. Cut through the noise and recover the signal you were born to follow.",
  },
  {
    date: "Apr 13",
    kicker: "Platform",
    title: "Magnara — The Operating System for High Performers",
    excerpt:
      "Today View, 90-Day Goals, Daily Rituals, the Reflection Chamber, and Vision OS. Abstract ambition, made structural.",
  },
  {
    date: "Mar 16",
    kicker: "Ritual",
    title: "Activation Rituals: Ignite Empowerment and Purpose in 7 Minutes",
    excerpt:
      "A morning protocol that takes the edge off entropy. Not productivity theatre — a deliberate shaping of state.",
  },
  {
    date: "Mar 15",
    kicker: "Mindset",
    title: "The Sovereign Mindset: Building Inner Authority in a Chaotic World",
    excerpt:
      "The world is a weather system. Your inner authority is the keel. Here's how you build one that holds.",
  },
  {
    date: "Feb 19",
    kicker: "Essay",
    title: "You're Not Scattered. You're Misaligned.",
    excerpt:
      "Scatter is a symptom. Alignment is a decision. Trade the war of focus for the quiet of orientation.",
  },
  {
    date: "Mar 16",
    kicker: "Launch",
    title: "Stop Winning at the Wrong Game",
    excerpt:
      "The whole point of a ceiling is to raise it. Magnara is how we raise yours — without raising your hours.",
  },
];

export function Essays() {
  return (
    <section id="essays" className="relative py-28 md:py-36 bg-gradient-night">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="smallcaps text-xs text-gold">Dispatches</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl max-w-xl">
              Essays from the edge of the ordinary.
            </h2>
          </div>
          <a href="#subscribe" className="smallcaps text-sm text-gold hover:text-gold-soft">
            All dispatches →
          </a>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {essays.map((e, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="smallcaps text-gold/80">{e.kicker}</span>
                <span className="h-px w-6 bg-border" />
                <time>{e.date}</time>
              </div>
              <h3 className="mt-4 font-display text-2xl md:text-[1.7rem] leading-snug group-hover:text-gold transition-colors">
                {e.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {e.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 smallcaps text-xs text-gold opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                Read essay →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
