import heroFlame from "@/assets/hero-flame.jpg";
import { Starfield } from "./Starfield";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden grain">
      <Starfield count={50} />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: `url(${heroFlame})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="mx-auto max-w-5xl px-6 lg:px-10 pt-28 pb-36 text-center">
        <p className="smallcaps text-xs text-gold/80 animate-rise">
          A global initiative · est. 2025
        </p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] animate-rise [animation-delay:120ms]">
          You were never meant
          <br />
          to be <em className="text-gradient-gold not-italic font-light italic">ordinary.</em>
        </h1>
        <div className="mx-auto mt-10 max-w-2xl gold-rule" />
        <p className="mx-auto mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-rise [animation-delay:240ms]">
          The <span className="text-foreground">Magna Anima Genius Project</span> is a global
          initiative dedicated to nurturing the brilliance within every individual —
          through essays, rituals, and tools that raise your ceiling.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-rise [animation-delay:360ms]">
          <a
            href="#subscribe"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-gradient-gold text-primary-foreground font-medium tracking-wide shadow-gold rounded-sm"
          >
            <span className="smallcaps text-sm">Join the Project</span>
          </a>
          <a
            href="#manifesto"
            className="smallcaps text-sm text-foreground/80 hover:text-gold transition-colors px-4 py-3"
          >
            Read the Manifesto →
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
