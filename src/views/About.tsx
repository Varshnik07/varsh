import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading index="01" title="About" />
      <p className="text-white/70">{profile.about}</p>
    </section>
  );
}
