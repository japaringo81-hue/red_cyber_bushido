import { useRef } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getTrial } from "@/data/trials";
import CustomCursor from "@/components/cyber-bushido/CustomCursor";
import ScanLines from "@/components/cyber-bushido/ScanLines";
import KanjiWatermark from "@/components/cyber-bushido/KanjiWatermark";
import BladeSweep from "@/components/cyber-bushido/BladeSweep";

const accentColor = {
  crimson: "var(--crimson)",
  indigo: "var(--indigo)",
  gold: "var(--gold)",
};

export default function Trial() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trial = getTrial(id);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 30%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (!trial) return <Navigate to="/" replace />;

  const accent = accentColor[trial.accent] || accentColor.crimson;

  return (
    <div className="relative bg-void">
      <CustomCursor />
      <ScanLines />
      <BladeSweep color={accent} />

      {/* minimal header */}
      <header className="fixed top-0 left-0 right-0 z-[200] px-[6vw] py-5 flex items-center justify-between">
        <button
          onClick={() => navigate("/#path")}
          className="group flex items-center gap-3 font-mono text-[10px] tracking-hud uppercase text-steel hover:text-crimson transition-colors"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Return to the Path
        </button>
        <span className="font-heading font-extrabold tracking-forged text-bone uppercase text-sm flex items-center gap-2">
          <span className="block w-2 h-2 bg-crimson rotate-45 animate-pulse-glow" />
          Cyber Bushido
        </span>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end dojo-floor overflow-hidden">
        <KanjiWatermark kana={trial.kana} size="44vw" />
        <div className="absolute inset-0 z-0">
          <img src={trial.image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/80" />
        </div>
        <div className="relative z-10 px-[6vw] pb-[12vh] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-kana font-black text-3xl" style={{ color: accent }}>
                {trial.num}
              </span>
              <span className="h-px w-12" style={{ background: accent }} />
              <span className="font-mono text-[11px] tracking-hud uppercase text-ghost">
                試練 — TRIAL · {trial.category}
              </span>
            </div>
            <h1 className="font-heading font-extrabold uppercase tracking-forged text-bone text-[14vw] md:text-[9vw] leading-[0.82]">
              {trial.title}
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg text-steel leading-[1.6]">
              {trial.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="relative py-[16vh] px-[6vw] border-t border-white/5">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div className="lg:sticky lg:top-24 self-start">
            <span className="font-mono text-[11px] tracking-hud uppercase text-crimson">
              01 — THE CHALLENGE
            </span>
            <h2 className="mt-4 font-heading font-extrabold uppercase tracking-forged text-bone text-4xl md:text-5xl leading-[0.9]">
              What was<br />the battle?
            </h2>
          </div>
          <p className="font-body text-lg md:text-xl text-steel/90 leading-[1.7] self-center">
            {trial.challenge}
          </p>
        </div>
      </section>

      {/* THE STRIKE — sticky timeline */}
      <section ref={timelineRef} className="relative py-[16vh] px-[6vw] border-t border-white/5 dojo-floor">
        <KanjiWatermark kana="技" size="32vw" />
        <div className="relative z-10">
          <div className="mb-16">
            <span className="font-mono text-[11px] tracking-hud uppercase text-crimson">
              02 — THE STRIKE
            </span>
            <h2 className="mt-4 font-heading font-extrabold uppercase tracking-forged text-bone text-4xl md:text-5xl leading-[0.9]">
              Techniques<br />mastered<span style={{ color: accent }}>.</span>
            </h2>
          </div>

          <div className="relative pl-8 md:pl-10">
            {/* progress track */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/8">
              <motion.div
                style={{ scaleY: lineScale, transformOrigin: "top", background: accent, boxShadow: `0 0 12px ${accent}` }}
                className="absolute inset-0"
              />
            </div>

            <div className="space-y-20">
              {trial.techniques.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  className="relative"
                >
                  <span
                    className="absolute -left-[33px] md:-left-[41px] top-1.5 block w-3 h-3 rotate-45"
                    style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
                  />
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-xs tracking-hud text-ghost">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-kana text-2xl" style={{ color: accent, opacity: 0.7 }}>
                      {t.kana}
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold uppercase tracking-forged text-bone text-2xl md:text-3xl mb-4">
                    {t.name}
                  </h3>
                  <p className="font-body text-base md:text-lg text-ghost leading-[1.7] max-w-2xl">
                    {t.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE VICTORY */}
      <section className="relative py-[16vh] px-[6vw] border-t border-white/5">
        <div className="mb-14">
          <span className="font-mono text-[11px] tracking-hud uppercase text-crimson">
            03 — THE VICTORY
          </span>
          <h2 className="mt-4 font-heading font-extrabold uppercase tracking-forged text-bone text-4xl md:text-5xl leading-[0.9]">
            The aftermath<span style={{ color: accent }}>.</span>
          </h2>
        </div>

        {/* HUD metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 mb-16">
          {trial.metrics.map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-void p-6 md:p-8 surface-steel-hover"
            >
              <div className="font-heading font-extrabold tracking-forged text-4xl md:text-5xl"
                style={{ color: accent }}>
                {m.v}
              </div>
              <div className="mt-3 font-mono text-[10px] tracking-hud text-ghost">
                {m.l}
              </div>
            </motion.div>
          ))}
        </div>

        {/* before / after */}
        <div className="grid md:grid-cols-2 gap-px bg-white/8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-void p-8 md:p-10 border-l-2 border-white/10"
          >
            <span className="font-mono text-[10px] tracking-hud uppercase text-ghost">BEFORE THE STRIKE</span>
            <p className="mt-4 font-body text-base text-ghost leading-[1.7]">{trial.before}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-void p-8 md:p-10 border-l-2"
            style={{ borderColor: accent }}
          >
            <span className="font-mono text-[10px] tracking-hud uppercase" style={{ color: accent }}>AFTER THE STRIKE</span>
            <p className="mt-4 font-body text-base text-bone leading-[1.7]">{trial.after}</p>
          </motion.div>
        </div>
      </section>

      {/* RETURN */}
      <section className="relative py-[14vh] px-[6vw] border-t border-white/5 dojo-floor text-center">
        <KanjiWatermark kana="帰" size="30vw" />
        <div className="relative z-10">
          <span className="font-kana text-4xl text-crimson/40 block mb-6">帰</span>
          <h2 className="font-heading font-extrabold uppercase tracking-forged text-bone text-3xl md:text-4xl mb-10">
            The trial is complete.
          </h2>
          <button
            onClick={() => navigate("/#path")}
            className="group inline-flex items-center gap-4 border border-crimson/60 px-10 py-5 font-mono text-xs tracking-hud uppercase text-bone hover:text-white transition-colors relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Return to the Path
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-crimson -translate-x-full group-hover:translate-x-0 transition-transform duration-500 easing-blade" />
          </button>
        </div>
      </section>
    </div>
  );
}