const values = [
  { roman: "I", name: "Empowerment", tagline: "Authority sourced from within." },
  { roman: "II", name: "Compassion", tagline: "Strength tempered by tenderness." },
  { roman: "III", name: "Purpose-Driven Action", tagline: "Aim before motion." },
  { roman: "IV", name: "Holistic Brilliance", tagline: "Mind, heart, body, spirit — one signal." },
  { roman: "V", name: "Integrity", tagline: "Aligned in private and public." },
  { roman: "VI", name: "Innovation", tagline: "Ancient wisdom, modern instruments." },
  { roman: "VII", name: "Global Unity", tagline: "One soul, many tongues." },
];

export function Values() {
  return (
    <section id="values" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="smallcaps text-xs text-gold">Core Values</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            What we <em className="text-gradient-gold">stand on</em>.
          </h2>
          <div className="mx-auto mt-8 w-32 gold-rule-solid" />
          <p className="mt-8 text-muted-foreground leading-relaxed">
            The principles beneath every essay, ritual, and tool we build.
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {values.map((v) => (
            <article
              key={v.name}
              className="group relative bg-background p-8 md:p-10 transition-colors hover:bg-card"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-display text-3xl text-gold/70 leading-none">
                  {v.roman}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">{v.name}</h3>
                  <p className="mt-2 italic text-gold-soft/80 font-display text-base md:text-lg">
                    {v.tagline}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-gold transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
