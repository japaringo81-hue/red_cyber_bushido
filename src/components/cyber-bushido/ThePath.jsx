import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TRIALS } from "@/data/trials";
import { useLang } from "@/lib/LanguageContext";
import KanjiWatermark from "@/components/cyber-bushido/KanjiWatermark";
import Kanji from "@/components/cyber-bushido/Kanji";
import Term from "@/components/cyber-bushido/Term";

const accentText = {
  crimson: "text-crimson",
  indigo: "text-indigo",
  gold: "text-gold",
};

export default function ThePath() {
  const { t, pick } = useLang();
  const navigate = useNavigate();
  const open = (id) => navigate(`/trial/${id}`);

  return (
    <section id="path" className="relative dojo-floor py-[14vh] scroll-mt-20">
      <KanjiWatermark kana="道" opacity={0.1} />

      <div className="relative z-10 px-[6vw]">
        {/* section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[11px] text-crimson tracking-hud">02</span>
            <span className="h-px w-12 bg-crimson" />
            <span className="font-mono text-[11px] tracking-hud uppercase text-ghost inline-flex items-center gap-2">
              <Kanji k="道" className="text-steel text-base" />
              — {t("path.kicker")}
            </span>
          </div>
          <h2 className="font-heading font-extrabold uppercase tracking-forged text-bone text-[11vw] md:text-[6vw] leading-[0.86]">
            {t("path.title1")}<br />
            <span className="text-steel">{t("path.title2")}</span><span className="text-crimson">.</span>
          </h2>
          <p className="mt-6 max-w-md font-body text-base text-ghost leading-[1.7]">
            {t("path.subtitle")}
          </p>
        </div>

        {/* trials */}
        <div id="trials" className="flex flex-col gap-6 scroll-mt-20">
          {TRIALS.map((trial, i) => (
            <motion.div
              key={trial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              className="blade-card surface-steel surface-steel-hover group relative w-full px-6 md:px-10 py-8 md:py-10 clip-corner-bl"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                {/* number marker */}
                <div className="flex md:flex-col items-baseline md:items-start gap-4 md:gap-1 md:w-20 shrink-0">
                  <Term
                    kana={trial.num}
                    reading={trial.numRead}
                    meaning={pick(trial.numMean, trial.numMeanAr)}
                    bare
                    as="span"
                    className="font-kana font-black text-4xl md:text-5xl text-white/10 group-hover:text-crimson/40 transition-colors leading-none"
                  />
                  <span className="font-mono text-[10px] tracking-hud text-ghost">
                    {String(i + 1).padStart(2, "0")} / {String(TRIALS.length).padStart(2, "0")}
                  </span>
                </div>

                {/* title + desc */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] tracking-hud uppercase text-ghost border border-white/10 px-2 py-1 group-hover:border-crimson/50 transition-colors">
                      {pick(trial.category, trial.categoryAr)}
                    </span>
                    <span className="font-mono text-[10px] tracking-hud text-ghost/70">{trial.year}</span>
                  </div>
                  <h3 className="font-heading font-extrabold uppercase tracking-forged text-bone text-3xl md:text-4xl leading-[0.9] group-hover:text-crimson transition-colors duration-300">
                    {pick(trial.title, trial.titleAr)}
                  </h3>
                  <p className="mt-3 font-body text-sm md:text-base text-ghost leading-[1.7] max-w-2xl">
                    {pick(trial.tagline, trial.taglineAr)}
                  </p>
                </div>

                {/* kana + view button */}
                <div className="flex md:flex-col items-center md:items-end gap-4 shrink-0">
                  <Term
                    kana={trial.kana}
                    reading={trial.kanaRead}
                    meaning={pick(trial.kanaMean, trial.kanaMeanAr)}
                    bare
                    as="span"
                    className={`font-kana font-bold text-2xl ${accentText[trial.accent]} opacity-60 group-hover:opacity-100 transition-opacity`}
                  />
                  <button
                    onClick={() => open(trial.id)}
                    className="inline-flex items-center gap-2 border border-crimson/50 px-5 py-3 min-h-[44px] font-mono text-[11px] tracking-hud uppercase text-bone hover:text-white hover:bg-crimson transition-colors duration-300"
                    aria-label={`${t("path.viewProject")} — ${pick(trial.title, trial.titleAr)}`}
                  >
                    {t("path.viewProject")}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}