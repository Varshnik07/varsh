import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ContributionGraph from "../components/ContributionGraph";

interface Week {
  contributionDays: { date: string; contributionCount: number }[];
}

interface Props {
  contributions: number | null;
}

export default function GithubActivity({ contributions: initial }: Props) {
  const [contributions, setContributions] = useState(initial);
  const [weeks, setWeeks] = useState<Week[] | null>(null);

  useEffect(() => {
    fetch("/api/contributions/")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (typeof data?.contributions === "number") {
          setContributions(data.contributions);
        }
        if (Array.isArray(data?.weeks)) {
          setWeeks(data.weeks);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading index="08" title="GitHub activity" />
      <p className="mb-4 text-white/80">
        <span className="text-3xl font-semibold text-emerald-400">
          {contributions !== null ? contributions.toLocaleString() : "—"}
        </span>{" "}
        <span className="text-white/40">contributions in the last year</span>
      </p>
      {weeks ? (
        <ContributionGraph weeks={weeks} />
      ) : (
        <div className="flex h-[100px] items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-xs text-white/40">
          Loading contribution graph...
        </div>
      )}
    </section>
  );
}
