import { motion } from "framer-motion";
import KanjiWatermark from "@/components/cyber-bushido/KanjiWatermark";

const DISCIPLINES = [
  { kana: "刻", name: "Precision Architecture", level: 92 },
  { kana: "波", name: "Real-time Systems", level: 88 },
  { kana: "暗", name: "Cryptography", level: 80 },
  { kana: "流", name: "Creative Coding", level: 85 },
  { kana: "構", name: "Systems Design", level: 90 },
];

const WEAPONS = [
  "Rust", "WASM", "TypeScript", "WebGL 2.0", "GLSL", "Go", "Three.js",
  "React", "Postgres", "Redis", "K8s", "Edge Runtime",
];

const JOURNEY = [
  { year: "2019", kana: "芽", title: "The First Cut", body: "Began forging interfaces in a small studio — learned that discipline compounds faster than talent." },
  { year: "2021", kana: "修", title: "Years of Study", body: "Embedded with a real-time systems team; shipped infrastructure that held under 50K concurrent sessions." },
  { year: "2023", kana: "立", title: "Standing Alone", body: "Took the ronin's path — independent, choosing only work worth the strike." },
  { year: "2026", kana: "道", title: "Walking the Way", body: "Building Cyber Bushido: a doctrine for digital craft as martial discipline." },
];

export default function TheDojo() {
  return (
    <section id="dojo" className="relative dojo-floor py-[14vh] border-t border-white/5">
      <KanjiWatermark kana="道場" size="28vw" />

      <div className="relative z-10 px-[6vw]">
        {/* header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[11px] text-crimson tracking-hud">03</span>
            <span className="h-px w-12 bg-crimson" />
            <span className="font-mono text-[11px] tracking-hud uppercase text-ghost">
              道場 — THE DOJO
            </span>
          </div>
          <h2 className="font-heading font-extrabold uppercase tracking-forged text-bone text-[11vw] md:text-[6vw] leading-[0.86]">
            The training<br />
            <span className="text-steel">hall</span><span className="text-crimson">.</span>
          </h2>
        </div>

        {/* philosophy */}
        <div className="max-w-3xl mb-24">
          <span className="font-kana text-2xl text-crimson/40 block mb-4">掟</span>
          <p className="font-heading font-bold text-bone text-2xl md:text-3xl leading-[1.25] tracking-forged">
            "A blade is not sharpened by force. It is sharpened by patience, by
            repetition, by the willingness to cut away everything that is not the edge."
          </p>
          <p className="mt-6 font-body text-base text-ghost leading-[1.8] max-w-2xl">
            I build software the way a smith forges steel — with restraint, with intent,
            and with respect for the material. I do not chase trends; I chase precision.
            Every system I ship has been tempered: tested under load, refined until the
            excess falls away, and left only with what must remain. The work is quiet,
            but it holds.
          </p>
        </div>

        {/* disciplines practiced */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-hud uppercase text-crimson">DISCIPLINES PRACTICED</span>
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
                    <span className="font-kana font-bold text-xl text-crimson/50 group-hover:text-crimson transition-colors">
                      {d.kana}
                    </span>
                    <span className="font-heading font-bold uppercase tracking-forged text-bone text-lg">
                      {d.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-hud text-ghost">
                    {d.level}
                  </span>
                </div>
                <div className="h-[3px] w-full bg-white/8 overflow-hidden">
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
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-hud uppercase text-crimson">WEAPONS FORGED</span>
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
                className="surface-steel surface-steel-hover blade-card sheen px-4 py-6 text-center clip-corner-bl"
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
            <span className="font-mono text-[10px] tracking-hud uppercase text-crimson">THE WARRIOR'S JOURNEY</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="relative pl-6 md:pl-8">
            {/* the scroll line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-crimson via-crimson/40 to-transparent" />
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
                  <span className="absolute -left-[27px] md:-left-[35px] top-1.5 block w-2.5 h-2.5 bg-crimson rotate-45 animate-pulse-glow" />
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-mono text-xs tracking-hud text-crimson">{j.year}</span>
                    <span className="font-kana text-lg text-crimson/50">{j.kana}</span>
                  </div>
                  <h3 className="font-heading font-extrabold uppercase tracking-forged text-bone text-xl md:text-2xl mb-2">
                    {j.title}
                  </h3>
                  <p className="font-body text-sm text-ghost leading-[1.7] max-w-xl">{j.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}