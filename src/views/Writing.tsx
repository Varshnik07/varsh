import SectionHeading from "../components/SectionHeading";
import { writing } from "../data/writing";

export default function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading index="06" title="Sharing what I learn" />
      <ul className="space-y-3">
        {writing.map((post) => (
          <li key={post.title} className="flex justify-between">
            <a href={post.href} className="text-white/80 hover:text-emerald-400">
              {post.title}
            </a>
            <span className="text-xs text-white/40">{post.date}</span>
          </li>
        ))}
      </ul>
      <a
        href="/writing"
        className="mt-6 inline-block text-sm text-white/60 hover:text-emerald-400"
      >
        View all posts →
      </a>
    </section>
  );
}
