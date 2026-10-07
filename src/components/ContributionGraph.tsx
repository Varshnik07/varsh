import { useState } from "react";

interface Day {
  date: string;
  contributionCount: number;
}

interface Week {
  contributionDays: Day[];
}

interface Props {
  weeks: Week[];
}

interface Hover {
  x: number;
  y: number;
  date: string;
  count: number;
}

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const LEVEL_CLASSES = [
  "bg-white/[0.04] text-white/20",
  "bg-emerald-900/60 text-emerald-200/70",
  "bg-emerald-700/70 text-emerald-100",
  "bg-emerald-500/80 text-white",
  "bg-emerald-400 text-black",
];

function dayOfWeek(dateStr: string) {
  return new Date(`${dateStr}T00:00:00Z`).getUTCDay();
}

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function levelFor(count: number, max: number) {
  if (count === 0) return 0;
  const ratio = count / max;
  if (ratio > 0.75) return 4;
  if (ratio > 0.5) return 3;
  if (ratio > 0.25) return 2;
  return 1;
}

export default function ContributionGraph({ weeks }: Props) {
  const [hover, setHover] = useState<Hover | null>(null);
  const max = Math.max(1, ...weeks.flatMap((w) => w.contributionDays.map((d) => d.contributionCount)));

  let lastMonth = -1;
  const monthLabels = weeks.map((week) => {
    const firstDay = week.contributionDays[0];
    if (!firstDay) return null;
    const month = new Date(`${firstDay.date}T00:00:00Z`).getUTCMonth();
    if (month !== lastMonth) {
      lastMonth = month;
      return MONTH_NAMES[month];
    }
    return null;
  });

  return (
    <div className="relative overflow-x-auto rounded-lg border border-white/10 bg-white/[0.02] p-3">
      <div className="flex w-max gap-1">
        {weeks.map((week, wi) => {
          const byWeekday: (Day | null)[] = Array(7).fill(null);
          for (const day of week.contributionDays) {
            byWeekday[dayOfWeek(day.date)] = day;
          }
          return (
            <div key={week.contributionDays[0]?.date ?? wi} className="flex flex-col gap-1">
              <div className="h-4 text-[10px] text-white/40">{monthLabels[wi] ?? ""}</div>
              {byWeekday.map((day, di) => {
                if (!day) {
                  return <div key={di} className="h-5 w-5" />;
                }
                const level = levelFor(day.contributionCount, max);
                return (
                  <div
                    key={day.date}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHover({
                        x: rect.left + rect.width / 2,
                        y: rect.top,
                        date: day.date,
                        count: day.contributionCount,
                      });
                    }}
                    onMouseLeave={() => setHover(null)}
                    className={`flex h-5 w-5 scale-100 items-center justify-center rounded-[4px] text-[9px] font-medium tabular-nums transition-transform duration-100 hover:z-10 hover:scale-125 ${LEVEL_CLASSES[level]}`}
                  >
                    {day.contributionCount > 0 ? day.contributionCount : ""}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {hover && (
        <div
          className="pointer-events-none fixed z-50 transition-opacity duration-150"
          style={{
            left: hover.x,
            top: hover.y,
            transform: "translate(-50%, -100%) translateY(-8px)",
          }}
        >
          <div className="relative whitespace-nowrap rounded-md border border-white/10 bg-neutral-900 px-2.5 py-1 text-[11px] text-white shadow-lg">
            <span className="font-semibold">
              {hover.count} contribution{hover.count === 1 ? "" : "s"}
            </span>
            <span className="opacity-70"> on {formatDate(hover.date)}</span>
            <div className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 rounded-[1px] bg-neutral-900" style={{ bottom: "-4px" }} />
          </div>
        </div>
      )}
    </div>
  );
}
