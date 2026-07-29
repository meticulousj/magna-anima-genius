import { useEffect, useState } from "react";
import { z } from "zod";
import { Starfield } from "./Starfield";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Enter a valid email address" })
  .max(255, { message: "Email must be less than 255 characters" });

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [intent, setIntent] = useState<"default" | "sprint">("default");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ source?: string }>).detail;
      if (detail?.source === "sprint") setIntent("sprint");
    };
    window.addEventListener("subscribe:intent", handler as EventListener);
    return () => window.removeEventListener("subscribe:intent", handler as EventListener);
  }, []);

  const isSprint = intent === "sprint";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }

    setLoading(true);
    const { error: insertError } = await supabase.from("subscribers").insert({
      email: parsed.data.toLowerCase(),
      source: isSprint ? "sprint" : "newsletter",
    });
    setLoading(false);

    // Duplicate email = already on the list; treat as success.
    if (insertError && insertError.code !== "23505") {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSent(true);
  }

  return (
    <section id="subscribe" className="relative py-28 md:py-36 overflow-hidden border-y border-border/60">
      <Starfield count={30} />
      <div
        className="absolute inset-0 -z-10 opacity-80"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.22 0.06 265) 0%, oklch(0.14 0.035 260) 70%)" }}
      />
      <div className="mx-auto max-w-2xl px-6 lg:px-10 text-center">
        <p className="smallcaps text-xs text-gold">
          {isSprint ? "Reserve your Sprint seat" : "Join the inner circle"}
        </p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
          {isSprint ? (
            <>
              Begin the <em className="text-gradient-gold italic">Sprint</em>.
            </>
          ) : (
            <>
              Raise your <em className="text-gradient-gold italic">ceiling</em>.
            </>
          )}
        </h2>
        <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
          {isSprint
            ? "The 90-Day Sovereign Sprint (v2) is live — download it free above. Drop your email and you'll get every new version and the weekly dispatch first."
            : "One dispatch a week. Essays, rituals, and tools for the sovereign life. No noise. No filler. Unsubscribe anytime."}
        </p>

        {sent ? (
          <div className="mt-12 font-display text-2xl text-gold italic animate-rise">
            {isSprint ? "You're on the list. The Sprint is yours." : "The flame is lit. Welcome."}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-input/40 border border-border focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none px-5 py-3.5 rounded-sm text-foreground placeholder:text-muted-foreground/70 transition-all"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-gold text-primary-foreground px-7 py-3.5 rounded-sm shadow-gold smallcaps text-sm disabled:opacity-60"
            >
              {loading ? "Sending…" : isSprint ? "Reserve Seat" : "Subscribe"}
            </button>
          </form>
        )}

        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

        <p className="mt-8 smallcaps text-[10px] text-muted-foreground">
          585+ readers · founded 2025
        </p>
      </div>
    </section>
  );
}
