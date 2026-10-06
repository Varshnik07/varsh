export default function Footer() {
  return (
    <footer className="px-6 py-12 text-center">
      <p className="text-xs text-white/30">
        © {new Date().getFullYear()} — built with Astro, React &amp; Tailwind.
      </p>
    </footer>
  );
}
