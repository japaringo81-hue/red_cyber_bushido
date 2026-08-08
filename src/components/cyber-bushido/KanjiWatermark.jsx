import { motion } from "framer-motion";

export default function KanjiWatermark({ kana, className = "", size = "36vw" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}>
      <motion.span
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-kana font-black leading-none animate-flicker select-none"
        style={{
          fontSize: size,
          color: "var(--crimson)",
          opacity: 0.06,
          textShadow: "0 0 40px rgba(255,0,60,0.25)",
        }}
      >
        {kana}
      </motion.span>
    </div>
  );
}