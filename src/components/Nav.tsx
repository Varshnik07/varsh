const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#books", label: "Books" },
  { href: "#favorites", label: "Favorites" },
  { href: "#writing", label: "Writing" },
];

// Static in-frame bar with per-link dashed-border tags, instead of the
// earlier floating pill.
export default function Nav() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-dashed border-white/15 px-6">
      <a href="/" className="font-pixel text-sm text-white">
        V
      </a>
      <div className="flex flex-wrap justify-end gap-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="border border-dashed border-white/15 px-1.5 py-1 text-sm text-white/50 transition-colors duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
