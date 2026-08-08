import { motion } from "framer-motion";

// Large background kanji — clearly legible as an atmospheric watermark (~14% opacity)
// with a soft glow so it reads as intentional, not a render glitch.
export default function KanjiWatermark({
  kana,
  className = "",
  size = "36vw",
  color = "crimson",
  opacity = 0.14,
}) {
  const glow =
    color === "indigo"
      ? "0 0 50px rgba(75,0,224,0.45)"
      : color === "gold"
      ? "0 0 50px rgba(212,175,55,0.35)"
      : "0 0 50px rgba(255,0,60,0.5)";
  const base =
    color === "indigo" ? "#4B00E0" : color === "gold" ? "#D4AF37" : "#FF003C";

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-kana font-black leading-none select-none"
        style={{
          fontSize: size,
          color: base,
          opacity,
          textShadow: glow,
        }}
      >
        {kana}
      </motion.span>
    </div>
  );
}