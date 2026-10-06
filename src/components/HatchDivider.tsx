// Diagonal-hatch strip used as a heavier section break.
export default function HatchDivider() {
  return (
    <div
      className="relative h-6 w-full border-y border-white/10"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 10px)",
      }}
    >
      <span className="absolute -left-[6px] -top-[7px] text-[13px] leading-none text-white/25">
        +
      </span>
      <span className="absolute -right-[6px] -top-[7px] text-[13px] leading-none text-white/25">
        +
      </span>
      <span className="absolute -bottom-[7px] -left-[6px] text-[13px] leading-none text-white/25">
        +
      </span>
      <span className="absolute -bottom-[7px] -right-[6px] text-[13px] leading-none text-white/25">
        +
      </span>
    </div>
  );
}
