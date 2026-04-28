export function Manifesto() {
  const lines = [
    "We were not built for the average.",
    "We were not meant to be ordinary.",
    "The soul, rightly tended, becomes a furnace.",
    "The mind, rightly aimed, becomes a compass.",
    "The heart, rightly held, becomes a temple.",
    "The life, rightly lived, becomes a testimony.",
  ];
  return (
    <section id="manifesto" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <p className="smallcaps text-xs text-gold">The Manifesto</p>
        <div className="mx-auto mt-6 w-16 gold-rule-solid" />
        <div className="mt-14 space-y-6">
          {lines.map((l, i) => (
            <p
              key={i}
              className="font-display text-2xl md:text-4xl leading-snug text-foreground/90"
            >
              {i === 0 || i === 1 ? (
                <em className="text-gradient-gold italic">{l}</em>
              ) : (
                l
              )}
            </p>
          ))}
        </div>
        <div className="mx-auto mt-14 w-16 gold-rule-solid" />
        <p className="mt-8 smallcaps text-xs text-muted-foreground">
          — The Magna Anima Genius Project
        </p>
      </div>
    </section>
  );
}
