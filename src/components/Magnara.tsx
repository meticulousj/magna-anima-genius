import sovereign from "@/assets/sovereign.jpg";

const features = [
  { k: "Today View", d: "One screen. The three things that move the needle." },
  { k: "90-Day Goals", d: "Horizons short enough to feel, long enough to matter." },
  { k: "Daily Rituals", d: "Protocols that build state, not pressure." },
  { k: "Reflection Chamber", d: "A weekly audit — honest, structured, kind." },
  { k: "Vision OS", d: "Your life's operating system. Values, not vibes." },
];

export function Magnara() {
  return (
    <section id="magnara" className="relative py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative animate-float-slow">
          <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" aria-hidden />
          <div className="relative border border-gold/30 rounded-sm overflow-hidden shadow-gold">
            <img
              src={sovereign}
              alt="An abstract illustration representing the sovereign soul — a flame rising from water under rays of light."
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-background border border-gold/40 px-5 py-3 rounded-sm">
            <p className="smallcaps text-[10px] text-gold">Now in beta</p>
          </div>
        </div>

        <div>
          <p className="smallcaps text-xs text-gold">Introducing</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.02]">
            <span className="text-gradient-gold italic">Magnara</span>
            <br />
            <span className="text-foreground/90 text-4xl md:text-5xl">
              an OS for the proven life.
            </span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">
            Built on the four pillars. Designed for the one-percent who refuse to
            win at the wrong game. Track goals, rituals, and your deepest vision —
            all in one place.
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

          <div className="mt-12 flex gap-4 items-center">
            <a
              href="#subscribe"
              className="inline-flex items-center px-7 py-3 bg-gradient-gold text-primary-foreground rounded-sm shadow-gold"
            >
              <span className="smallcaps text-sm">Start Free</span>
            </a>
            <a href="#essays" className="smallcaps text-xs text-muted-foreground hover:text-gold">
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
