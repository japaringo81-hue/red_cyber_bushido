import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import KanjiWatermark from "@/components/cyber-bushido/KanjiWatermark";
import Kanji from "@/components/cyber-bushido/Kanji";
import Term from "@/components/cyber-bushido/Term";
import { VIRTUES } from "@/data/trials";
/* Term retained for virtue tooltips (per-entry localized meaning) */

const DISCIPLINES = [
  { kana: "刻", name: "Precision Architecture", nameAr: "عمارة الدقة", level: 92 },
  { kana: "波", name: "Real-time Systems", nameAr: "أنظمة لحظية", level: 88 },
  { kana: "暗", name: "Cryptography", nameAr: "التشفير", level: 80 },
  { kana: "流", name: "Creative Coding", nameAr: "برمجة إبداعية", level: 85 },
  { kana: "構", name: "Systems Design", nameAr: "تصميم الأنظمة", level: 90 },
];

const WEAPONS = [
  "Rust", "WASM", "TypeScript", "WebGL 2.0", "GLSL", "Go", "Three.js",
  "React", "Postgres", "Redis", "K8s", "Edge Runtime",
];

const JOURNEY = [
  { year: "2019", kana: "芽", kanaRead: "me", kanaMean: "A sprout — the beginning", title: "The First Cut", titleAr: "الضربة الأولى", body: "Began forging interfaces in a small studio — learned that discipline compounds faster than talent.", bodyAr: "بدأت أُشكّل الواجهات في استوديو صغير — تعلمت أن الانضباط يتراكم أسرع من الموهبة." },
  { year: "2021", kana: "修", kanaRead: "shū", kanaMean: "To study; to master through practice", title: "Years of Study", titleAr: "سنوات من الدراسة", body: "Embedded with a real-time systems team; shipped infrastructure that held under 50K concurrent sessions.", bodyAr: "انضممت لفريق أنظمة لحظية؛ أطلقت بنية تحتية صمدت تحت 50 ألف جلسة متزامنة." },
  { year: "2023", kana: "立", kanaRead: "ritsu", kanaMean: "To stand; to take a stance", title: "Standing Alone", titleAr: "الوقوف وحدي", body: "Took the ronin's path — independent, choosing only work worth the strike.", bodyAr: "سلكت طريق الرونين — مستقل، أختار فقط عملًا يستحق الضربة." },
  { year: "2026", kana: "道", kanaRead: "dō", kanaMean: "The way; the path one walks", title: "Walking the Way", titleAr: "سلوك الطريق", body: "Building Cyber Bushido: a doctrine for digital craft as martial discipline.", bodyAr: "أبني سايبر بوشيدو: مذهب للحرفة الرقمية كانضباط عسكري." },
];

export default function TheDojo() {
  const { t, pick } = useLang();

  return (
    <section id="dojo" className="relative dojo-floor py-[14vh] border-t border-white/5 scroll-mt-20">
      <KanjiWatermark kana="道場" position="br" size="clamp(90px,14vw,240px)" opacity={0.08} />

      <div className="relative z-10 px-6 md:px-[8vw]">
        {/* header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[11px] text-crimson tracking-hud">03</span>
            <span className="h-px w-12 bg-crimson" />
            <span className="font-mono text-[11px] tracking-hud uppercase text-ghost inline-flex items-center gap-2">
              <Kanji k="道場" className="text-steel text-base" />
              — {t("dojo.kicker")}
            </span>
          </div>
          <h2 className="font-heading font-extrabold uppercase tracking-forged text-bone text-[11vw] md:text-[6vw] leading-[0.86]">
            {t("dojo.title1")}<br />
            <span className="text-steel">{t("dojo.title2")}</span><span className="text-crimson">.</span>
          </h2>
        </div>

        {/* philosophy */}
        <div className="max-w-3xl mb-20">
          <Kanji k="掟" bare as="span" className="font-kana text-2xl text-crimson/40 block mb-4" />
          <p className="font-heading font-bold text-bone text-2xl md:text-3xl leading-[1.3] tracking-forged">
            "{t("dojo.quote")}"
          </p>
          <p className="mt-6 font-body text-base text-ghost leading-[1.8] max-w-2xl">
            {t("dojo.body")}
          </p>
        </div>

        {/* THE WARRIOR'S CODE — Seven Virtues */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[10px] tracking-hud uppercase text-crimson">{t("dojo.codeKicker")}</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <p className="font-body text-sm text-ghost leading-[1.7] max-w-2xl mb-10">
            <Kanji k="武士道" className="text-steel" /> {t("dojo.codeIntro")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIRTUES.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                className="surface-steel surface-steel-hover group p-6 min-h-[180px]"
              >
                <Term
                  kana={v.kana}
                  reading={v.read}
                  meaning={`${pick(v.name, v.nameAr)} — ${pick(v.mean, v.meanAr)}`}
                  bare
                  as="span"
                  className="font-kana font-black text-3xl text-crimson/70 group-hover:text-crimson transition-colors block mb-3"
                />
                <div className="font-mono text-[10px] tracking-hud text-ghost mb-1">{v.read}</div>
                <h3 className="font-heading font-bold uppercase tracking-forged text-bone text-lg mb-2">
                  {pick(v.name, v.nameAr)}
                </h3>
                <p className="font-body text-xs text-ghost leading-[1.6]">{pick(v.mean, v.meanAr)}</p>
              </motion.div>
            ))}
          </div>

          {/* kaizen folklore caption */}
          <div className="mt-10 flex items-start gap-4 max-w-2xl surface-steel px-6 py-5 clip-corner-bl">
            <Kanji k="改善" bare as="span" className="font-kana text-2xl text-crimson/50 shrink-0 leading-none" />
            <p className="font-body text-xs text-ghost leading-[1.7]">
              <span className="text-steel font-semibold">{pick("Kaizen", "كايزن")}</span>
              {t("dojo.kaizenBody")}
            </p>
          </div>
        </div>

        {/* disciplines practiced */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-hud uppercase text-crimson">{t("dojo.disciplinesKicker")}</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {DISCIPLINES.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                className="group"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Kanji
                      k={d.kana}
                      bare
                      as="span"
                      className="font-kana font-bold text-xl text-crimson/50 group-hover:text-crimson transition-colors"
                    />
                    <span className="font-heading font-bold uppercase tracking-forged text-bone text-lg">
                      {pick(d.name, d.nameAr)}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-hud text-ghost">{d.level}</span>
                </div>
                <div className="progress-track h-[3px] w-full bg-white/8 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${d.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="h-full forged-fill"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* weapons forged */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-hud uppercase text-crimson">{t("dojo.weaponsKicker")}</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {WEAPONS.map((w, i) => (
              <motion.div
                key={w}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="surface-steel surface-steel-hover blade-card sheen px-4 py-6 text-center clip-corner-bl min-h-[64px] flex items-center justify-center"
              >
                <span className="font-mono text-sm text-steel tracking-wide group-hover:text-crimson transition-colors">
                  {w}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* warrior's journey */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[10px] tracking-hud uppercase text-crimson">{t("dojo.journeyKicker")}</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="timeline">
            <div className="timeline-line bg-gradient-to-b from-crimson via-crimson/40 to-transparent" />
            <div className="space-y-12">
              {JOURNEY.map((j, i) => (
                <motion.div
                  key={j.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="timeline-marker block w-2.5 h-2.5 bg-crimson rotate-45 animate-pulse-glow" />
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-mono text-xs tracking-hud text-crimson">{j.year}</span>
                    <Kanji k={j.kana} bare as="span" className="font-kana text-lg text-crimson/50" />
                  </div>
                  <h3 className="font-heading font-extrabold uppercase tracking-forged text-bone text-xl md:text-2xl mb-2">
                    {pick(j.title, j.titleAr)}
                  </h3>
                  <p className="font-body text-sm text-ghost leading-[1.7] max-w-xl">{pick(j.body, j.bodyAr)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}