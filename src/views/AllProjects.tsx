import GridFrame from "../components/GridFrame";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

export default function AllProjects() {
  return (
    <GridFrame>
      <main className="px-6 py-24">
        <SectionHeading index="03" title="All projects" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
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
              <p className="mt-1 text-sm text-white/60">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </GridFrame>
  );
}
