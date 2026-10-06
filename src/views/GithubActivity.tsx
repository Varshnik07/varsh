import SectionHeading from "../components/SectionHeading";

// PLACEHOLDER — wire up a real GitHub contributions fetch later.
const PLACEHOLDER_CONTRIBUTIONS = 842;

export default function GithubActivity() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading index="07" title="GitHub activity" />
      <p className="text-white/80">
        <span className="text-3xl font-semibold text-emerald-400">
          {PLACEHOLDER_CONTRIBUTIONS.toLocaleString()}
        </span>{" "}
        <span className="text-white/40">contributions in the last year</span>
      </p>
    </section>
  );
}
