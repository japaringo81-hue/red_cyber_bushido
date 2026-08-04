import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TRIALS } from "@/data/trials";
import KanjiWatermark from "@/components/cyber-bushido/KanjiWatermark";

const accentText = {
  crimson: "text-crimson",
  indigo: "text-indigo",
  gold: "text-gold",
};

export default function ThePath() {
  const navigate = useNavigate();

  const open = (id) => navigate(`/trial/${id}`);

  return (
    <section id="path" className="relative dojo-floor py-[14vh]">
      <KanjiWatermark kana="道" />

      <div className="relative z-10 px-[6vw]">
        {/* section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[11px] text-crimson tracking-hud">02</span>
            <span className="h-px w-12 bg-crimson" />
            <span className="font-mono text-[11px] tracking-hud uppercase text-ghost">
              道 — THE PATH
            </span>
          </div>
          <h2 className="font-heading font-extrabold uppercase tracking-forged text-bone text-[11vw] md:text-[6vw] leading-[0.86]">
            Walk the<br />
            <span className="text-steel">warrior's</span> way<span className="text-crimson">.</span>
          </h2>
          <p className="mt-6 max-w-md font-body text-base text-ghost leading-[1.7]">
            This is not a portfolio. It is a path. Each trial below is a battle won —
            a discipline sharpened, a problem cut clean. Choose one to enter.
          </p>
        </div>

        {/* trials */}
        <div className="flex flex-col gap-px">
          {TRIALS.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => open(t.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              className="blade-card sheen surface-steel surface-steel-hover group relative w-full text-left px-6 md:px-10 py-8 md:py-10 clip-corner-bl"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                {/* number marker */}
                <div className="flex md:flex-col items-baseline md:items-start gap-4 md:gap-1 md:w-20 shrink-0">
                  <span className="font-kana font-black text-4xl md:text-5xl text-white/10 group-hover:text-crimson/40 transition-colors leading-none">
                    {t.num}
                  </span>
                  <span className="font-mono text-[10px] tracking-hud text-ghost">
                    {String(i + 1).padStart(2, "0")} / {String(TRIALS.length).padStart(2, "0")}
                  </span>
                </div>

                {/* title + desc */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] tracking-hud uppercase text-ghost border border-white/10 px-2 py-1 group-hover:border-crimson/50 transition-colors">
                      {t.category}
                    </span>
                    <span className="font-mono text-[10px] tracking-hud text-ghost/70">{t.year}</span>
                  </div>
                  <h3 className="font-heading font-extrabold uppercase tracking-forged text-bone text-3xl md:text-4xl leading-[0.9] group-hover:text-crimson transition-colors duration-300">
                    {t.title}
                  </h3>
                  <p className="mt-3 font-body text-sm md:text-base text-ghost leading-[1.7] max-w-2xl">
                    {t.tagline}
                  </p>
                </div>

                {/* arrow + kana */}
                <div className="flex md:flex-col items-center md:items-end gap-4 shrink-0">
                  <span
                    className={`font-kana font-bold text-2xl ${accentText[t.accent]} opacity-40 group-hover:opacity-100 transition-opacity`}
                    style={{ textShadow: "0 0 12px currentColor" }}
                  >
                    {t.kana}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[10px] tracking-hud uppercase text-steel group-hover:text-crimson transition-colors">
                    Enter
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}