import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";

// Secondary elegant kanji rail. Position mirrors with dir; labels appear in the active language.
const RAIL = [
  { kana: "入口", id: "top", key: "gate" },
  { kana: "道", id: "path", key: "path" },
  { kana: "試練", id: "trials", key: "trials" },
  { kana: "道場", id: "dojo", key: "dojo" },
  { kana: "掟", id: "code", key: "code" },
];

export default function NavRail() {
  const { t } = useLang();
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = RAIL.map((r) => r.id);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

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
    <nav className="nav-rail fixed top-1/2 -translate-y-1/2 z-[150] hidden lg:flex flex-col gap-5" aria-label="Section rail">
      {RAIL.map((r) => {
        const isActive = active === r.id;
        return (
          <button
            key={r.id}
            onClick={() => go(r.id)}
            className="group flex items-center gap-3 justify-end min-h-[44px]"
            aria-label={t("nav." + r.key)}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`font-mono text-[9px] tracking-hud uppercase transition-all duration-300 ${
                isActive
                  ? "text-crimson opacity-100 translate-x-0"
                  : "text-ghost opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {t("nav." + r.key)}
            </span>
            <span
              className={`font-kana font-bold text-lg leading-none transition-all duration-300 ${
                isActive ? "text-crimson scale-110" : "text-steel/40 group-hover:text-crimson"
              }`}
              style={isActive ? { textShadow: "0 0 12px var(--crimson)" } : undefined}
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
  );
}