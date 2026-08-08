import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { STR, KANJI } from "@/data/i18n";

const LanguageContext = createContext(null);
const STORE_KEY = "cb_lang";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (saved === "ar" || saved === "en") setLangState(saved);
    } catch (e) {}
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORE_KEY, lang);
    } catch (e) {}
  }, [lang]);

  const setLang = useCallback((l) => setLangState(l), []);
  const t = useCallback((key) => {
    const e = STR[key];
    return e ? e[lang] : key;
  }, [lang]);
  const tip = useCallback((kana) => {
    const e = KANJI[kana];
    return e ? { reading: e.reading, meaning: e[lang] } : { reading: "", meaning: "" };
  }, [lang]);
  const pick = useCallback((en, ar) => (lang === "ar" ? ar : en), [lang]);
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tip, pick, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "en",
      setLang: () => {},
      t: (k) => k,
      tip: () => ({ reading: "", meaning: "" }),
      pick: (en) => en,
      dir: "ltr",
    };
  }
  return ctx;
}