import Term from "@/components/cyber-bushido/Term";
import { useLang } from "@/lib/LanguageContext";

// Decorative kanji whose tooltip reading/meaning come from the i18n KANJI dict,
// localized to the current language. The kanji glyph itself is language-independent.
export default function Kanji({ k, className = "", bare = false, as = "span", placement = "top", style }) {
  const { tip } = useLang();
  const { reading, meaning } = tip(k);
  return (
    <Term
      kana={k}
      reading={reading}
      meaning={meaning}
      className={className}
      bare={bare}
      as={as}
      placement={placement}
      style={style}
    />
  );
}