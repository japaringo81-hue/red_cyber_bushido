import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import LangToggle from "@/components/cyber-bushido/LangToggle";

const NAV = [
  { id: "top", key: "gate" },
  { id: "path", key: "path" },
  { id: "trials", key: "trials" },
  { id: "dojo", key: "dojo" },
  { id: "code", key: "code" },
];

export default function TopNav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-[200]">
      <div className="px-[6vw] py-3 flex items-center justify-between bg-void/80 backdrop-blur-md border-b border-white/5">
        <button
          onClick={() => go("top")}
          className="flex items-center gap-2 min-h-[44px]"
          aria-label="Cyber Bushido — top"
        >
          <span className="block w-2 h-2 bg-crimson rotate-45 animate-pulse-glow" />
          <span className="font-heading font-extrabold tracking-forged text-bone uppercase text-sm">
            Cyber<span className="text-crimson">Bushido</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1" aria-label="Sections">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="px-4 min-h-[44px] inline-flex items-center font-mono text-[11px] tracking-hud uppercase text-steel hover:text-crimson transition-colors"
            >
              {t("nav." + n.key)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <button
            className="md:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-steel hover:text-crimson transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-void/95 backdrop-blur border-b border-white/5">
          <div className="px-[6vw] py-2 flex flex-col">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-start py-3 min-h-[44px] font-mono text-xs tracking-hud uppercase text-steel hover:text-crimson transition-colors border-b border-white/5 last:border-0"
              >
                {t("nav." + n.key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}