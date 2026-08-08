import { useRef } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getTrial } from "@/data/trials";
import { useLang } from "@/lib/LanguageContext";
import CustomCursor from "@/components/cyber-bushido/CustomCursor";
import ScanLines from "@/components/cyber-bushido/ScanLines";
import KanjiWatermark from "@/components/cyber-bushido/KanjiWatermark";
import BladeSweep from "@/components/cyber-bushido/BladeSweep";
import Kanji from "@/components/cyber-bushido/Kanji";
import Term from "@/components/cyber-bushido/Term";
import LangToggle from "@/components/cyber-bushido/LangToggle";
import Magnetic from "@/components/cyber-bushido/Magnetic";
import ImpactButton from "@/components/cyber-bushido/ImpactButton";

const accentColor = {
  crimson: "var(--crimson)",
  indigo: "var(--indigo)",
  gold: "var(--gold)",
};

export default function Trial() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, pick, lang } = useLang();
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
      <header className="fixed top-0 left-0 right-0 z-[200] px-[6vw] py-4 flex items-center justify-between bg-void/80 backdrop-blur-md border-b border-white/5">
        <button
          onClick={() => navigate("/#path")}
          className="group flex items-center gap-3 font-mono text-[10px] tracking-hud uppercase text-steel hover:text-crimson transition-colors min-h-[44px]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
          {t("trial.back")}
        </button>
        <span className="font-heading font-extrabold tracking-forged text-bone uppercase text-sm flex items-center gap-2">
          <span className="block w-2 h-2 bg-crimson rotate-45 animate-pulse-glow" />
          Cyber Bushido
        </span>
        <LangToggle />
      </header>

      <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        {/* HERO */}
        <section className="relative min-h-screen flex items-end dojo-floor overflow-hidden">
          <KanjiWatermark kana={trial.kana} size="44vw" opacity={0.1} />
          <div className="absolute inset-0 z-0">
            <img src={trial.image} alt="" className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/80" />
          </div>
          <div className="relative z-10 px-[6vw] pb-[12vh] pt-[20vh] w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <Term
                  kana={trial.num}
                  reading={trial.numRead}
                  meaning={pick(trial.numMean, trial.numMeanAr)}
                  bare
                  as="span"
                  className="font-kana font-black text-3xl"
                  style={{ color: accent }}
                />
                <span className="h-px w-12" style={{ background: accent }} />
                <span className="font-mono text-[11px] tracking-hud uppercase text-ghost inline-flex items-center gap-2">
                  <Kanji k="試練" className="text-steel text-base" />
                  — {t("trial.kicker")} · {pick(trial.category, trial.categoryAr)}
                </span>
              </div>
              <h1 className="font-heading font-extrabold uppercase tracking-forged text-bone text-[14vw] md:text-[9vw] leading-[0.82]">
                {pick(trial.title, trial.titleAr)}
              </h1>
              <p className="mt-6 max-w-xl font-body text-lg text-steel leading-[1.6]">
                {pick(trial.tagline, trial.taglineAr)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="relative py-[16vh] px-[6vw] border-t border-white/5">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <div className="lg:sticky lg:top-24 self-start">
              <span className="font-mono text-[11px] tracking-hud uppercase text-crimson">
                {t("trial.challengeKicker")}
              </span>
              <h2 className="mt-4 font-heading font-extrabold uppercase tracking-forged text-bone text-4xl md:text-5xl leading-[0.9]">
                {t("trial.challengeTitle")}
              </h2>
            </div>
            <p className="font-body text-lg md:text-xl text-steel/90 leading-[1.7] self-center">
              {pick(trial.challenge, trial.challengeAr)}
            </p>
          </div>
        </section>

        {/* THE STRIKE — timeline */}
        <section ref={timelineRef} className="relative py-[16vh] px-[6vw] border-t border-white/5 dojo-floor">
          <KanjiWatermark kana="技" size="32vw" opacity={0.1} />
          <div className="relative z-10">
            <div className="mb-16">
              <span className="font-mono text-[11px] tracking-hud uppercase text-crimson">
                {t("trial.strikeKicker")}
              </span>
              <h2 className="mt-4 font-heading font-extrabold uppercase tracking-forged text-bone text-4xl md:text-5xl leading-[0.9]">
                {t("trial.strikeTitle")}
              </h2>
            </div>

            <div className="timeline timeline-lg">
              <div className="timeline-line bg-white/8">
                <motion.div
                  style={{ scaleY: lineScale, transformOrigin: "top", background: accent, boxShadow: `0 0 12px ${accent}` }}
                  className="absolute inset-0"
                />
              </div>

              <div className="space-y-16">
                {trial.techniques.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                    className="relative"
                  >
                    <span
                      className="timeline-marker block w-3 h-3 rotate-45"
                      style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
                    />
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-mono text-xs tracking-hud text-ghost">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Kanji
                        k={tech.kana}
                        bare
                        as="span"
                        className="font-kana text-2xl"
                        style={{ color: accent, opacity: 0.9 }}
                      />
                    </div>
                    <h3 className="font-heading font-extrabold uppercase tracking-forged text-bone text-2xl md:text-3xl mb-4">
                      {pick(tech.name, tech.nameAr)}
                    </h3>
                    <p className="font-body text-base md:text-lg text-ghost leading-[1.7] max-w-2xl">
                      {pick(tech.body, tech.bodyAr)}
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
              {t("trial.victoryKicker")}
            </span>
            <h2 className="mt-4 font-heading font-extrabold uppercase tracking-forged text-bone text-4xl md:text-5xl leading-[0.9]">
              {t("trial.victoryTitle")}
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
                <div className="font-heading font-extrabold tracking-forged text-4xl md:text-5xl" style={{ color: accent }}>
                  {m.v}
                </div>
                <div className="mt-3 font-mono text-[10px] tracking-hud text-ghost">
                  {pick(m.l, m.lAr)}
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
              className="bg-void p-8 md:p-10 border-s-2 border-white/10"
            >
              <span className="font-mono text-[10px] tracking-hud uppercase text-ghost">{t("trial.before")}</span>
              <p className="mt-4 font-body text-base text-ghost leading-[1.7]">{pick(trial.before, trial.beforeAr)}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-void p-8 md:p-10 border-s-2"
              style={{ borderColor: accent }}
            >
              <span className="font-mono text-[10px] tracking-hud uppercase" style={{ color: accent }}>{t("trial.after")}</span>
              <p className="mt-4 font-body text-base text-bone leading-[1.7]">{pick(trial.after, trial.afterAr)}</p>
            </motion.div>
          </div>
        </section>

        {/* RETURN */}
        <section className="relative py-[14vh] px-[6vw] border-t border-white/5 dojo-floor text-center">
          <KanjiWatermark kana="帰" size="30vw" opacity={0.1} />
          <div className="relative z-10">
            <Kanji k="帰" bare as="span" className="font-kana text-4xl text-crimson/40 block mb-6" />
            <h2 className="font-heading font-extrabold uppercase tracking-forged text-bone text-3xl md:text-4xl mb-10">
              {t("trial.doneTitle")}
            </h2>
            <Magnetic strength={0.3}>
              <ImpactButton
                onClick={() => navigate("/#path")}
                className="group inline-flex items-center gap-3 border border-crimson/60 px-10 py-5 min-h-[44px] font-mono text-xs tracking-hud uppercase text-bone hover:text-white hover:bg-crimson transition-colors duration-300"
              >
                {t("trial.doneBtn")}
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rtl:rotate-180" />
              </ImpactButton>
            </Magnetic>
          </div>
        </section>
      </motion.div>
    </div>
  );
}