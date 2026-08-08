import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Obsidian Shard",
    kana: "破",
    num: "001",
    category: "Immersive Web",
    year: "2025",
    image:
      "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/ab42884fa_generated_6aaabfaa.png",
    desc: "A WebGL experience rendering shattered glass as a navigable void.",
  },
  {
    title: "Mirror Edge Protocol",
    kana: "刃",
    num: "002",
    category: "Real-time Systems",
    year: "2025",
    image:
      "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/f2b319bad_generated_d32888cd.png",
    desc: "Sub-millisecond latency framework for high-frequency interfaces.",
  },
  {
    title: "Chrome Doctrine",
    kana: "鏡",
    num: "003",
    category: "Design System",
    year: "2024",
    image:
      "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/46d7c12cd_generated_8958236c.png",
    desc: "A lethal component architecture forged in polished steel.",
  },
  {
    title: "Karesansui Engine",
    kana: "庭",
    num: "004",
    category: "Generative Art",
    year: "2024",
    image:
      "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/22bafcc12_generated_52cb1c9a.png",
    desc: "Circuit boards arranged with the precision of a rock garden.",
  },
];

export default function WorkGrid() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  return (
    <section id="work" className="relative bg-obsidian py-[12vh]">
      {/* Full-bleed hover background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.22, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0"
          >
            <img
              src={PROJECTS[active].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-obsidian/40" />
      </div>

      {/* Header */}
      <div className="relative z-10 px-[6vw] mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[11px] text-crimson tracking-widest-x">02</span>
          <span className="h-px w-12 bg-crimson" />
          <span className="font-mono text-[11px] tracking-widest-x uppercase text-ghost">
            Deeds of Honor
          </span>
        </div>
        <h2 className="font-heading font-black uppercase tracking-tightest text-steel text-[8vw] md:text-[5vw] leading-[0.9]">
          Conquests
        </h2>
      </div>

      {/* Horizontal scroll strip — vertical-stacked titles */}
      <div
        ref={scrollRef}
        className="relative z-10 overflow-x-auto overflow-y-hidden no-scrollbar pb-2"
      >
        <div className="flex gap-0 px-[6vw] min-w-max">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.num}
              href="#case"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative flex flex-col justify-end border-l border-white/5 first:border-l-0 pl-6 pr-12 py-4 min-w-[260px] md:min-w-[320px] cursor-pointer"
            >
              {/* vertical title */}
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[11px] text-crimson tracking-widest">
                  {p.num}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-ghost group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <span className="font-kana text-5xl text-white/5 group-hover:text-crimson/20 transition-colors mb-3 block">
                {p.kana}
              </span>
              <h3
                className={`font-heading font-extrabold uppercase tracking-tightest leading-[0.9] transition-colors duration-300 ${
                  active === i ? "text-crimson" : "text-steel group-hover:text-crimson"
                }`}
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {p.title}
              </h3>
              <div className="mt-4 font-mono text-[10px] text-ghost tracking-widest space-y-1">
                <div>{p.category}</div>
                <div className="text-ghost/60">{p.year}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Active description */}
      <div className="relative z-10 px-[6vw] mt-10 max-w-xl">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="font-body text-sm text-ghost leading-relaxed"
          >
            {PROJECTS[active].desc}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}