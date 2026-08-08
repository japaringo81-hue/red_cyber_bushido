import { useLang } from "@/lib/LanguageContext";

// EN | ع language toggle — always visible, persists choice, instant switch.
export default function LangToggle({ className = "" }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-stretch border border-white/15 bg-white/[0.03] ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`min-h-[44px] px-3 font-mono text-[11px] tracking-hud uppercase transition-colors ${
          lang === "en" ? "text-crimson" : "text-ghost hover:text-bone"
        }`}
      >
        EN
      </button>
      <span className="w-px self-center h-5 bg-white/10" />
      <button
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={`min-h-[44px] px-3 text-[15px] leading-none transition-colors ${
          lang === "ar" ? "text-crimson" : "text-ghost hover:text-bone"
        }`}
      >
        ع
      </button>
    </div>
  );
}