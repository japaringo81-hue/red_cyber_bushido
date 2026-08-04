import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMG =
  "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/b09acb1e9_generated_e80c2e91.png";

export default function HeroSection() {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [bladeAngle, setBladeAngle] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const kanaY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMouse({ x, y });
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setBladeAngle((Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI + 45);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-obsidian"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: kanaY }}
        className="absolute inset-0 z-0"
      >
        <img
          src={HERO_IMG}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/80" />
      </motion.div>

      {/* Kanji background */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-kana text-[42vw] leading-none text-white/[0.025] font-black">
          武
        </span>
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-[6vw] top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute right-[6vw] top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-white/5" />
        <div className="absolute bottom-[22%] left-0 right-0 h-px bg-white/[0.03]" />
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-crimson/[0.04] to-transparent animate-scan" />
      </div>

      {/* The Blade — follows cursor */}
      <motion.div
        className="absolute z-20 pointer-events-none"
        style={{
          left: `${mouse.x * 100}%`,
          top: `${mouse.y * 100}%`,
          rotate: bladeAngle,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-[60vw] h-[2px] bg-gradient-to-r from-transparent via-steel/80 to-transparent" />
          <div className="absolute top-0 left-1/2 w-[60vw] h-[2px] bg-gradient-to-r from-transparent via-crimson/30 to-transparent -translate-x-1/2 blur-[1px]" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-30 flex h-full flex-col justify-end px-[6vw] pb-[10vh]"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-12 bg-crimson" />
          <span className="font-mono text-[11px] tracking-widest-x uppercase text-ghost">
            Portfolio // Digital Ronin // 2026
          </span>
        </div>

        <h1 className="font-heading font-black uppercase tracking-tightest leading-[0.82] text-steel">
          <span className="block text-[12vw] md:text-[9vw]">Cyber</span>
          <span className="block text-[12vw] md:text-[9vw] text-crimson">
            Bushido<span className="text-steel">.</span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="max-w-md font-body text-sm md:text-base leading-relaxed text-ghost">
            The weighted edge between ancient discipline and digital
            transcendence. A portfolio of conquests — engineered with the
            surgical intent of a katana strike.
          </p>
          <a
            href="#work"
            className="group flex items-center gap-3 font-mono text-[11px] tracking-widest-x uppercase text-steel hover:text-crimson transition-colors"
          >
            <span>Enter the Dojo</span>
            <span className="flex h-8 w-8 items-center justify-center border border-white/15 group-hover:border-crimson transition-colors">
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>
      </motion.div>

      {/* Corner HUD readouts */}
      <div className="absolute z-30 bottom-[4vh] right-[6vw] hidden md:block">
        <div className="hud-border clip-corner px-4 py-3 font-mono text-[10px] text-ghost tracking-widest space-y-1">
          <div className="flex justify-between gap-8">
            <span>LAT</span>
            <span className="text-steel">35.6762° N</span>
          </div>
          <div className="flex justify-between gap-8">
            <span>LON</span>
            <span className="text-steel">139.6503° E</span>
          </div>
          <div className="flex justify-between gap-8">
            <span>STATUS</span>
            <span className="text-crimson">ENGAGED</span>
          </div>
        </div>
      </div>
    </section>
  );
}