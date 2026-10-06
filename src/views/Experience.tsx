import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading index="02" title="Places I've made impact" />
      <ul className="space-y-6">
        {experience.map((job) => (
          <li key={job.org} className="border-l border-white/10 pl-4">
            <p className="text-white">
              {job.role} <span className="text-white/40">· {job.org}</span>
            </p>
            <p className="text-sm text-white/40">{job.period}</p>
            <p className="mt-1 text-sm text-white/60">{job.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
