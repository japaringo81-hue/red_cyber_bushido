import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CASE_IMG =
  "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/22bafcc12_generated_52cb1c9a.png";

const META = [
  { label: "PROJECT", value: "Karesansui Engine" },
  { label: "ROLE", value: "Lead Engineer / Art Direction" },
  { label: "YEAR", value: "2024" },
  { label: "TIMELINE", value: "14 Weeks" },
  { label: "STATUS", value: "Deployed" },
];

const STACK = [
  "WebGL 2.0",
  "Rust / WASM",
  "Three.js",
  "GLSL Shaders",
  "Edge Compute",
  "Realtime Sync",
];

const PHASES = [
  {
    num: "01",
    title: "Reconnaissance",
    body: "Mapped the void — audited latency bottlenecks across the existing render pipeline, identifying a 40ms budget gap between intent and pixel.",
  },
  {
    num: "02",
    title: "The Forge",
    body: "Rewrote the shader stack in GLSL with a custom noise function inspired by raked sand patterns. Texture memory reduced by 62%.",
  },
  {
    num: "03",
    title: "The Strike",
    body: "Shipped to production edge nodes. Sub-16ms frame times sustained across 10k concurrent sessions. Zero visual regressions.",
  },
];

export default function CaseStudy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="case" ref={ref} className="relative bg-obsidian border-t border-white/5">
      {/* Section intro */}
      <div className="px-[6vw] py-[10vh]">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[11px] text-crimson tracking-widest-x">03</span>
          <span className="h-px w-12 bg-crimson" />
          <span className="font-mono text-[11px] tracking-widest-x uppercase text-ghost">
            Anatomy of a Strike
          </span>
        </div>
        <h2 className="font-heading font-black uppercase tracking-tightest text-steel text-[8vw] md:text-[5vw] leading-[0.9]">
          Case<br />Study<span className="text-crimson">.</span>
        </h2>
      </div>

      {/* Split layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Sticky metadata HUD */}
        <aside className="lg:w-[36%] lg:sticky lg:top-0 lg:h-screen border-t lg:border-t-0 lg:border-r border-white/5 px-[6vw] py-12 lg:py-0 lg:flex lg:flex-col lg:justify-center">
          <div className="hud-border clip-corner p-6 bg-white/[0.015]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <span className="font-mono text-[10px] text-ghost tracking-widest-x">
                METADATA
              </span>
              <span className="font-mono text-[10px] text-crimson flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-crimson rounded-full animate-pulse" /> LIVE
              </span>
            </div>
            <dl className="space-y-4">
              {META.map((m) => (
                <div key={m.label} className="flex justify-between items-baseline gap-4">
                  <dt className="font-mono text-[10px] text-ghost tracking-widest uppercase">
                    {m.label}
                  </dt>
                  <dd className="font-body text-sm text-steel text-right">{m.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="font-mono text-[10px] text-ghost tracking-widest-x mb-3">
                TECH STACK
              </div>
              <div className="flex flex-wrap gap-2">
                {STACK.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] text-ghost border border-white/10 px-2 py-1 hover:border-crimson hover:text-crimson transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Long scroll content */}
        <div className="lg:w-[64%] px-[6vw] py-12 lg:py-16 space-y-16">
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[16/10] overflow-hidden hud-border"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
              <img src={CASE_IMG} alt="Karesansui Engine" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end font-mono text-[10px] text-ghost tracking-widest">
              <span>FIG. 01 — RENDER PIPELINE OVERVIEW</span>
              <span className="text-crimson">4K // 60FPS</span>
            </div>
          </motion.div>

          {/* Blueprint intro */}
          <div className="max-w-xl">
            <span className="font-kana text-2xl text-crimson/30 block mb-2">武</span>
            <h3 className="font-heading font-bold uppercase tracking-tightest text-steel text-3xl md:text-4xl leading-[0.95] mb-6">
              Forging stillness<br />into motion.
            </h3>
            <p className="font-body text-base text-ghost leading-[1.7]">
              The Karesansui Engine treats every frame as a deliberate brushstroke.
              Circuit geometry is arranged with the restraint of a Zen garden —
              each component earning its place through function, not decoration.
              The result is a render pipeline that feels less like software and
              more like ritual.
            </p>
          </div>

          {/* Phases */}
          <div className="space-y-px">
            {PHASES.map((p) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="group relative grid grid-cols-[auto_1fr] gap-6 border-t border-white/5 py-8 hover:bg-white/[0.015] transition-colors px-2"
              >
                <span className="font-heading font-black text-5xl md:text-6xl text-white/5 group-hover:text-crimson/30 transition-colors leading-none">
                  {p.num}
                </span>
                <div>
                  <h4 className="font-heading font-bold uppercase tracking-tightest text-steel text-xl mb-3">
                    {p.title}
                  </h4>
                  <p className="font-body text-sm text-ghost leading-[1.7] max-w-md">
                    {p.body}
                  </p>
                </div>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-0 bg-crimson group-hover:w-12 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5">
            {[
              { v: "16ms", l: "FRAME BUDGET" },
              { v: "62%", l: "MEMORY SAVED" },
              { v: "10K", l: "CONCURRENT" },
              { v: "0", l: "REGRESSIONS" },
              { v: "14w", l: "FORGED IN" },
              { v: "AAA", l: "ACCESSIBILITY" },
            ].map((m) => (
              <div key={m.l} className="bg-obsidian p-6">
                <div className="font-heading font-black text-3xl md:text-4xl text-steel tracking-tightest">
                  {m.v}
                </div>
                <div className="font-mono text-[10px] text-ghost tracking-widest mt-2">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}