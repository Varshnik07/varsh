import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading index="03" title="Things I've built" />
      <ul className="grid gap-4 sm:grid-cols-2">
        {featured.map((project) => (
          <li
            key={project.name}
            className="rounded-lg border border-white/10 bg-white/5 p-4"
          >
            <a
              href={project.href}
              className="text-white hover:text-emerald-400"
            >
              {project.name}
            </a>
            <p className="mt-1 text-sm text-white/60">{project.description}</p>
          </li>
        ))}
      </ul>
      <a
        href="/projects"
        className="mt-6 inline-block text-sm text-white/60 hover:text-emerald-400"
      >
        View all projects →
      </a>
    </section>
  );
}
