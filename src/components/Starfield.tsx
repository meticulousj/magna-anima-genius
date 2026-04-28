export function Starfield({ count = 40, className = "" }: { count?: number; className?: string }) {
  // Deterministic pseudo-random so stars don't reflow on every render
  const stars = Array.from({ length: count }, (_, i) => {
    const x = (Math.sin(i * 12.9898) * 43758.5453) % 1;
    const y = (Math.sin(i * 78.233) * 12345.678) % 1;
    const s = (Math.sin(i * 3.17) * 1000) % 1;
    const d = (Math.sin(i * 7.31) * 500) % 1;
    return {
      left: `${Math.abs(x) * 100}%`,
      top: `${Math.abs(y) * 100}%`,
      size: 1 + Math.abs(s) * 2.2,
      delay: `${Math.abs(d) * 6}s`,
    };
  });
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {stars.map((st, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold animate-shimmer"
          style={{
            left: st.left,
            top: st.top,
            width: st.size,
            height: st.size,
            animationDelay: st.delay,
            boxShadow: `0 0 ${st.size * 3}px oklch(0.85 0.14 82 / 0.6)`,
          }}
        />
      ))}
    </div>
  );
}
