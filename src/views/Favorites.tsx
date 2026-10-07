import SectionHeading from "../components/SectionHeading";
import { favorites } from "../data/favorites";

export default function Favorites() {
  return (
    <section id="favorites" className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading index="06" title="Favorites" />
      <ul className="space-y-2">
        {favorites.map((item) => (
          <li key={item.label} className="flex justify-between text-sm">
            <span className="text-white/40">{item.label}</span>
            <span className="text-white/80">{item.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
