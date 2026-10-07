import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading index="03" title="Places I've made impact" />
      <ul className="space-y-6">
        {experience.map((job) => (
          <li key={job.org} className="flex gap-4">
            <img
              src={job.logo}
              alt={job.org}
              className="h-10 w-10 shrink-0 rounded-md border border-white/10 bg-white object-cover"
            />
            <div className="min-w-0 flex-1 border-l border-white/10 pl-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-white">
                  {job.role} <span className="text-white/40">· {job.org}</span>
                </p>
                <p className="text-xs text-white/40">{job.period}</p>
              </div>
              <p className="mt-1 text-sm text-white/60">{job.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
