import type { ReactNode } from "react";
import Nav from "./Nav";

// The bordered "blueprint" column every inspiration site shares — two
// vertical rules bounding the content, with small crosshair marks at every
// row boundary. Owns the nav bar at the top.
export default function GridFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto max-w-3xl border-x border-dashed border-white/15">
      <Nav />
      {children}
    </div>
  );
}
