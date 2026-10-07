import SectionHeading from "../components/SectionHeading";
import BrandIcon from "../components/BrandIcon";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading index="02" title="Skills" />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex h-10 items-center rounded-lg border border-dashed border-white/15 bg-white/[0.03] px-3 transition-colors duration-200 hover:bg-white/[0.06]"
          >
            {skill.path ? (
              <BrandIcon path={skill.path} color={skill.color} className="h-4 w-4 shrink-0" />
            ) : skill.img ? (
              <img src={skill.img} alt="" className="h-4 w-4 shrink-0 rounded-[3px] object-cover" />
            ) : (
              <span
                className="h-4 w-4 shrink-0 rounded-sm"
                style={{ backgroundColor: skill.color }}
                aria-hidden="true"
              />
            )}
            <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-xs text-white/70 opacity-0 transition-all duration-200 ease-out group-hover:ml-2 group-hover:max-w-[140px] group-hover:opacity-100">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
