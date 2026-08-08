import { useEffect, useState } from "react";

// A crimson blade-sweep that plays once on mount — used for section/page transitions.
export default function BladeSweep({ color }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 600);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[9500] pointer-events-none">
      <div className="absolute inset-0 animate-blade-sweep" style={{ background: `linear-gradient(90deg, transparent, ${color || "var(--crimson)"}, transparent)`, height: 2, top: "50%" }} />
      <div className="absolute inset-0 bg-void/40 animate-mist" style={{ opacity: 0 }} />
    </div>
  );
}