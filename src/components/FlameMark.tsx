export function FlameMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="flameGrad" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="oklch(0.92 0.12 90)" />
          <stop offset="1" stopColor="oklch(0.65 0.13 60)" />
        </linearGradient>
      </defs>
      <path
        d="M24 4c2 6 8 9 8 16a8 8 0 01-8 8 8 8 0 01-8-8c0-4 2-6 2-9 0 0 3 2 3 5 2-4 3-8 3-12z"
        fill="url(#flameGrad)"
      />
      <path
        d="M24 28c3 3 5 5 5 9a5 5 0 11-10 0c0-3 2-5 5-9z"
        fill="url(#flameGrad)"
        opacity="0.85"
      />
    </svg>
  );
}
