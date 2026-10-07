interface Props {
  path: string;
  color: string;
  className?: string;
}

// Renders a simple-icons path (CC0-licensed brand marks, cdn.jsdelivr.net/npm/simple-icons).
export default function BrandIcon({ path, color, className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
      <path d={path} />
    </svg>
  );
}
