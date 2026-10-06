// Thin horizontal rule spanning the frame, with crosshair marks where it
// meets the frame's left/right border rules.
export default function GridDivider() {
  return (
    <div className="relative h-px w-full bg-white/10">
      <span className="absolute -left-[6px] -top-[7px] text-[13px] leading-none text-white/25">
        +
      </span>
      <span className="absolute -right-[6px] -top-[7px] text-[13px] leading-none text-white/25">
        +
      </span>
    </div>
  );
}
