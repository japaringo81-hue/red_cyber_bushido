import { useEffect, useState } from "react";

// A blade-sweep that plays once on mount — a glowing crimson line sweeps across
// with a trail of sparks, then fades. Used for section/page transitions.
export default function BladeSweep({ color = "var(--crimson)" }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 850);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;

  return (
    <div className="fixed inset-0 z-[9500] pointer-events-none overflow-hidden">
      {/* the blade line */}
      <div
        className="absolute top-1/2 left-0 h-[2px] w-full animate-blade-sweep-line"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          boxShadow: `0 0 22px ${color}, 0 0 8px ${color}`,
        }}
      />
      {/* spark trail */}
      {[...Array(9)].map((_, i) => (
        <span
          key={i}
          className="absolute top-1/2 w-1.5 h-1.5 rounded-full animate-spark"
          style={{
            left: `${8 + i * 10}%`,
            background: color,
            boxShadow: `0 0 8px ${color}`,
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
}