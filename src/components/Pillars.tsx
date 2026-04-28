const pillars = [
  {
    roman: "I",
    name: "Intellect",
    tagline: "Sharpen the sovereign mind.",
    body: "Clear thinking as craft. Mental models, decision frameworks, and the discipline to see what is — not what is convenient.",
  },
  {
    roman: "II",
    name: "Heart",
    tagline: "Feel without fragmenting.",
    body: "Emotional coherence as power. Transform reaction into response; sensitivity into depth, not disarray.",
  },
  {
    roman: "III",
    name: "Empowerment",
    tagline: "Move with quiet authority.",
    body: "Build inner dominion before outer reach. The sovereign operates from source, not permission.",
  },
  {
    roman: "IV",
    name: "Purpose",
    tagline: "Aim at something higher than self.",
    body: "Alignment over ambition. When direction is true, the days compound into a life worth its breath.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="smallcaps text-xs text-gold">Four Pillars</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            The architecture of a <em className="text-gradient-gold">proven life</em>.
          </h2>
          <div className="mx-auto mt-8 w-32 gold-rule-solid" />
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
          {pillars.map((p) => (
            <article
              key={p.name}
              className="group relative bg-background p-10 md:p-14 transition-colors hover:bg-card"
            >
              <div className="flex items-start gap-6">
                <span className="font-display text-5xl text-gold/70 leading-none">
                  {p.roman}
                </span>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{p.name}</h3>
                  <p className="mt-2 italic text-gold-soft/80 font-display text-lg">
                    {p.tagline}
                  </p>
                </div>
              </div>
              <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
                {p.body}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-gold transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
