// PLACEHOLDER — static for now, swap for a real counter later.
const PLACEHOLDER_COUNT = 128;

export default function VisitorCounterIsland() {
  return (
    <p className="flex items-center gap-1.5 text-xs text-white/40">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      {PLACEHOLDER_COUNT.toLocaleString()}
    </p>
  );
}
