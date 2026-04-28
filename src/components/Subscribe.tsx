import { useState } from "react";
import { Starfield } from "./Starfield";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="subscribe" className="relative py-28 md:py-36 overflow-hidden border-y border-border/60">
      <Starfield count={30} />
      <div
        className="absolute inset-0 -z-10 opacity-80"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.22 0.06 265) 0%, oklch(0.14 0.035 260) 70%)" }}
      />
      <div className="mx-auto max-w-2xl px-6 lg:px-10 text-center">
        <p className="smallcaps text-xs text-gold">Join the inner circle</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
          Raise your <em className="text-gradient-gold italic">ceiling</em>.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
          One dispatch a week. Essays, rituals, and tools for the sovereign life.
          No noise. No filler. Unsubscribe anytime.
        </p>

        {sent ? (
          <div className="mt-12 font-display text-2xl text-gold italic animate-rise">
            The flame is lit. Welcome.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) setSent(true);
            }}
            className="mt-12 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-input/40 border border-border focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none px-5 py-3.5 rounded-sm text-foreground placeholder:text-muted-foreground/70 transition-all"
            />
            <button
              type="submit"
              className="bg-gradient-gold text-primary-foreground px-7 py-3.5 rounded-sm shadow-gold smallcaps text-sm"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-8 smallcaps text-[10px] text-muted-foreground">
          585+ readers · founded 2025
        </p>
      </div>
    </section>
  );
}
