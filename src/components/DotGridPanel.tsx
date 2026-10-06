// Decorative dot-grid spacer below the nav — empty on purpose, just
// establishes the frame before the profile row.
export default function DotGridPanel() {
  return (
    <div
      className="relative h-40 w-full border-b border-white/10"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <span className="absolute -bottom-[7px] -left-[6px] text-[13px] leading-none text-white/25">
        +
      </span>
      <span className="absolute -bottom-[7px] -right-[6px] text-[13px] leading-none text-white/25">
        +
      </span>
    </div>
  );
}
