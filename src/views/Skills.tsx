import { useState } from "react";
import { skills } from "../data/skills";

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-2xl px-6 py-12">
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            onMouseEnter={() => setHovered(skill)}
            onMouseLeave={() => setHovered(null)}
            className="group relative flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs text-white/60 transition-colors hover:border-emerald-400/40 hover:text-white"
          >
            {skill.slice(0, 2)}
            {hovered === skill && (
              <span className="absolute -top-8 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white shadow">
                {skill}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
