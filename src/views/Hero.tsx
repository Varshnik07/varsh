import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import VisitorCounterIsland from "./VisitorCounterIsland";

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % profile.taglines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-center justify-between gap-6 px-6 py-10">
      <div className="flex items-center gap-5">
        <img
          src="/avatar.jpg"
          alt={profile.name}
          className="h-20 w-20 shrink-0 rounded-xl border border-white/10 object-cover"
        />
        <div>
          <h1 className="font-pixel text-3xl text-white">{profile.name}</h1>
          <p className="mt-1 h-5 text-sm text-white/50">
            {profile.taglines[taglineIndex]}
          </p>
          <p className="mt-1 flex items-center gap-2 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            {profile.status}
          </p>
        </div>
      </div>
      <VisitorCounterIsland />
    </section>
  );
}
