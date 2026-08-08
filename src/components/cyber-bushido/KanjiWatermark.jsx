import { motion } from "framer-motion";

// Atmospheric background kanji. Always rendered BEHIND content (z below content's
// z-10). Positioned into a section corner and partially off-screen so it never
// sits behind the main content column. Multi-character kana stack vertically so
// the watermark stays a narrow corner accent instead of a wide centerpiece.
const POS = {
  tr: { top: "-4vw", right: "-3vw" },
  br: { bottom: "-4vw", right: "-3vw" },
  tl: { top: "-4vw", left: "-3vw" },
  bl: { bottom: "-4vw", left: "-3vw" },
};

export default function KanjiWatermark({
  kana,
  className = "",
  size,
  color = "crimson",
  opacity = 0.08,
  position = "br",
}) {
  const glow =
    color === "indigo"
      ? "0 0 40px rgba(75,0,224,0.32)"
      : color === "gold"
      ? "0 0 40px rgba(212,175,55,0.26)"
      : "0 0 40px rgba(255,0,60,0.34)";
  const base =
    color === "indigo" ? "#4B00E0" : color === "gold" ? "#D4AF37" : "#FF003C";
  const fontSize = size || "clamp(120px, 16vw, 300px)";
  const pos = POS[position] || POS.br;
  const vertical = kana && kana.length > 1;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="font-kana font-black leading-none select-none absolute"
        style={{
          fontSize,
          color: base,
          opacity,
          textShadow: glow,
          writingMode: vertical ? "vertical-rl" : undefined,
          ...pos,
        }}
      >
        {kana}
      </motion.span>
    </div>
  );
}