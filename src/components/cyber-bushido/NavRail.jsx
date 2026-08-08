import { useEffect, useState } from "react";

const RAIL = [
  { kana: "入口", id: "top", label: "The Gate" },
  { kana: "道", id: "path", label: "The Path" },
  { kana: "道場", id: "dojo", label: "The Dojo" },
  { kana: "掟", id: "code", label: "The Code" },
];

export default function NavRail() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = RAIL.map((r) => r.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const onScroll = () => {
      const mid = window.innerHeight * 0.4;
      let current = "top";
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= mid) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* minimal fixed header */}
      <header className="fixed top-0 left-0 right-0 z-[200] px-[6vw] py-5 flex items-center justify-between mix-blend-difference">
        <button
          onClick={() => go("top")}
          className="font-heading font-extrabold tracking-forged text-bone uppercase text-sm flex items-center gap-2"
        >
          <span className="block w-2 h-2 bg-crimson rotate-45 animate-pulse-glow" />
          Cyber Bushido
        </button>
        <span className="font-mono text-[10px] tracking-hud text-ghost hidden md:block">
          道場 // DIGITAL DOJO
        </span>
      </header>

      {/* floating vertical kanji rail */}
      <nav className="fixed right-[3vw] top-1/2 -translate-y-1/2 z-[200] hidden md:flex flex-col gap-5">
        {RAIL.map((r) => {
          const isActive = active === r.id;
          return (
            <button
              key={r.id}
              onClick={() => go(r.id)}
              className="group flex items-center gap-3 justify-end"
              aria-label={r.label}
            >
              <span
                className={`font-mono text-[9px] tracking-hud uppercase transition-all duration-300 ${
                  isActive
                    ? "text-crimson opacity-100 translate-x-0"
                    : "text-ghost opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                {r.label}
              </span>
              <span
                className={`font-kana font-bold text-lg leading-none transition-all duration-300 ${
                  isActive
                    ? "text-crimson scale-110"
                    : "text-steel/40 group-hover:text-crimson"
                }`}
                style={
                  isActive
                    ? { textShadow: "0 0 12px var(--crimson)" }
                    : undefined
                }
              >
                {r.kana}
              </span>
              <span
                className={`h-px transition-all duration-300 ${
                  isActive
                    ? "w-6 bg-crimson"
                    : "w-3 bg-steel/30 group-hover:w-5 group-hover:bg-crimson animate-breathe"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}