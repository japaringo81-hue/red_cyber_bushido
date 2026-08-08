import { motion } from "framer-motion";

const EMBLEM_IMG =
  "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/384bf34ed_generated_image.png";

export default function TheGate({ onEnter }) {
  const enter = () => {
    try {
      localStorage.setItem("cb_entered", "1");
    } catch (e) {}
    onEnter();
  };

  const pillar = { initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 } };
  const ease = [0.16, 1, 0.3, 1];

  return (
    <motion.section
      id="top"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="relative min-h-screen w-full dojo-floor flex items-center justify-center overflow-hidden"
    >
      {/* drifting mist */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-drift"
            style={{
              left: `${15 + i * 14}%`,
              top: `${30 + (i % 3) * 20}%`,
              width: 200,
              height: 200,
              background:
                "radial-gradient(circle, rgba(75,0,224,0.08), transparent 70%)",
              animationDelay: `${i * 2.5}s`,
            }}
          />
        ))}
      </div>

      {/* Torii gate */}
      <svg
        viewBox="0 0 400 420"
        className="absolute h-[78vh] max-h-[640px] w-auto z-10"
        fill="none"
        stroke="var(--steel)"
        strokeWidth="3"
        style={{ filter: "drop-shadow(0 0 12px rgba(255,0,60,0.18))" }}
      >
        {/* kasagi (top curved beam) */}
        <motion.path
          d="M40 60 Q200 20 360 60 L360 78 Q200 40 40 78 Z"
          {...pillar}
          transition={{ duration: 1, ease, delay: 0.2 }}
        />
        {/* shimaki (second beam) */}
        <motion.line x1="70" y1="110" x2="330" y2="110"
          {...pillar} transition={{ duration: 0.7, ease, delay: 0.9 }} />
        {/* nuki (middle bar) */}
        <motion.line x1="80" y1="160" x2="320" y2="160"
          {...pillar} transition={{ duration: 0.6, ease, delay: 1.2 }} />
        {/* left pillar */}
        <motion.line x1="120" y1="80" x2="120" y2="400"
          {...pillar} transition={{ duration: 1.1, ease, delay: 0.5 }} />
        {/* right pillar */}
        <motion.line x1="280" y1="80" x2="280" y2="400"
          {...pillar} transition={{ duration: 1.1, ease, delay: 0.5 }} />
        {/* gakuzuka (center tablet) */}
        <motion.line x1="190" y1="80" x2="210" y2="80"
          {...pillar} transition={{ duration: 0.3, ease, delay: 1.5 }} />
      </svg>

      {/* emblem + content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
          transition={{ duration: 1.4, ease, delay: 1.6 }}
          className="relative mb-8"
        >
          <img
            src={EMBLEM_IMG}
            alt="emblem"
            className="w-28 h-28 object-contain"
            style={{ filter: "drop-shadow(0 0 18px rgba(255,0,60,0.4))" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 2.2 }}
        >
          <span className="font-mono text-[11px] tracking-hud uppercase text-crimson">
            道 · THE WAY OF THE DIGITAL WARRIOR
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
          transition={{ duration: 1, ease, delay: 2.4 }}
          className="mt-3 font-heading font-extrabold uppercase tracking-forged text-bone text-[13vw] md:text-[7vw] leading-[0.85]"
        >
          Cyber<span className="text-crimson">Bushido</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 2.9 }}
          className="mt-10"
        >
          <button
            onClick={enter}
            className="group relative overflow-hidden border border-crimson/60 px-10 py-4 font-mono text-xs tracking-hud uppercase text-bone hover:text-white transition-colors duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              Enter the Path
              <span className="block w-6 h-px bg-crimson group-hover:w-10 transition-all" />
            </span>
            <span className="absolute inset-0 bg-crimson -translate-x-full group-hover:translate-x-0 transition-transform duration-500 easing-blade" />
            <span className="absolute inset-0 z-0 bg-crimson/0 group-hover:bg-crimson/20 transition-colors" />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 1 }}
          className="mt-8 font-mono text-[10px] tracking-hud text-ghost/70"
        >
          [ SKIPPABLE — THE GATE WILL NOT RETURN ]
        </motion.p>
      </div>
    </motion.section>
  );
}