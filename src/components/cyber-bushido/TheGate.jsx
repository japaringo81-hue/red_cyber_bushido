import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import LangToggle from "@/components/cyber-bushido/LangToggle";
import Kanji from "@/components/cyber-bushido/Kanji";
import Magnetic from "@/components/cyber-bushido/Magnetic";
import ImpactButton from "@/components/cyber-bushido/ImpactButton";

const EMBLEM_IMG =
  "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/384bf34ed_generated_image.png";

export default function TheGate({ onEnter }) {
  const { t } = useLang();

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
      {/* subtle drifting mist — reduced */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-drift"
            style={{
              left: `${18 + i * 18}%`,
              top: `${30 + (i % 3) * 20}%`,
              width: 200,
              height: 200,
              background: "radial-gradient(circle, rgba(75,0,224,0.05), transparent 70%)",
              animationDelay: `${i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Torii gate — pushed back, low opacity, behind content */}
      <svg
        viewBox="0 0 400 440"
        className="absolute h-[88vh] max-h-[700px] w-auto z-0"
        fill="none"
        stroke="var(--steel)"
        strokeWidth="2.5"
        style={{ opacity: 0.14 }}
      >
        <motion.path d="M30 64 Q200 16 370 64 L370 84 Q200 38 30 84 Z" {...pillar} transition={{ duration: 1, ease, delay: 0.2 }} />
        <motion.line x1="64" y1="118" x2="336" y2="118" {...pillar} transition={{ duration: 0.7, ease, delay: 0.9 }} />
        <motion.line x1="84" y1="172" x2="316" y2="172" {...pillar} transition={{ duration: 0.6, ease, delay: 1.2 }} />
        <motion.line x1="104" y1="84" x2="104" y2="420" {...pillar} transition={{ duration: 1.1, ease, delay: 0.5 }} />
        <motion.line x1="296" y1="84" x2="296" y2="420" {...pillar} transition={{ duration: 1.1, ease, delay: 0.5 }} />
        <motion.line x1="188" y1="84" x2="212" y2="84" {...pillar} transition={{ duration: 0.3, ease, delay: 1.5 }} />
      </svg>

      {/* clean zone — radial darkening behind text */}
      <div
        className="absolute z-[5] inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(46% 42% at 50% 48%, rgba(10,10,15,0.94) 0%, rgba(10,10,15,0.72) 55%, rgba(10,10,15,0) 100%)",
        }}
      />
      <div className="absolute inset-0 z-[6] pointer-events-none bg-gradient-to-t from-void via-transparent to-void/70" />

      {/* language toggle — always visible */}
      <div className="absolute top-5 end-5 z-[210]">
        <LangToggle />
      </div>

      {/* emblem + content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 py-16 max-w-2xl">
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
          className="inline-flex items-center gap-2"
        >
          <Kanji k="道" className="text-steel text-base" />
          <span className="text-ghost">·</span>
          <span className="font-mono text-[11px] tracking-hud uppercase text-crimson">{t("gate.kicker")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 2.4 }}
          className="mt-4 font-heading font-extrabold uppercase tracking-forged text-bone text-[13vw] md:text-[7vw] leading-[0.85]"
        >
          Cyber<span className="text-crimson">Bushido</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 2.7 }}
          className="mt-6 max-w-md font-body text-base md:text-lg text-steel leading-[1.7]"
        >
          {t("gate.intro")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 3.0 }}
          className="mt-10"
        >
          <Magnetic strength={0.35}>
            <ImpactButton
              onClick={enter}
              className="group border border-crimson/60 px-10 py-4 font-mono text-xs tracking-hud uppercase text-bone hover:text-white hover:bg-crimson transition-colors duration-300"
            >
              {t("gate.enter")}
              <span className="block w-6 h-px bg-crimson group-hover:bg-white group-hover:w-10 transition-all duration-300" />
            </ImpactButton>
          </Magnetic>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 1 }}
          className="mt-8 font-mono text-[10px] tracking-hud text-ghost/70"
        >
          [ {t("gate.hint")} ]
        </motion.p>
      </div>
    </motion.section>
  );
}