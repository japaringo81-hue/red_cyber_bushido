import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "INDEX", href: "#hero", num: "01" },
  { label: "DEEDS", href: "#work", num: "02" },
  { label: "STRIKE", href: "#case", num: "03" },
  { label: "BOW", href: "#contact", num: "04" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    const tick = () => {
      const d = new Date();
      setTime(
        `${String(d.getUTCHours()).padStart(2, "0")}:${String(
          d.getUTCMinutes()
        ).padStart(2, "0")}:${String(d.getUTCSeconds()).padStart(2, "0")} UTC`
      );
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(iv);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/85 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-[6vw] py-5">
          <a href="#hero" className="group flex items-center gap-3">
            <span className="block w-3 h-3 bg-crimson rotate-45 animate-pulse-edge" />
            <span className="font-heading font-extrabold tracking-tightest text-steel text-lg uppercase">
              Cyber<span className="text-crimson">Bushido</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative flex items-baseline gap-1.5 font-mono text-[11px] tracking-widest-x uppercase text-ghost hover:text-steel transition-colors duration-200"
              >
                <span className="text-crimson/60 group-hover:text-crimson transition-colors">
                  {l.num}
                </span>
                <span>{l.label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-crimson group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 font-mono text-[11px] text-ghost tracking-widest">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            {time}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-steel"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-obsidian flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-heading font-extrabold text-steel uppercase">
                Cyber<span className="text-crimson">Bushido</span>
              </span>
              <button onClick={() => setOpen(false)} className="text-steel" aria-label="Close">
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="group flex items-baseline gap-4 border-b border-white/5 py-5"
                >
                  <span className="font-mono text-xs text-crimson">{l.num}</span>
                  <span className="font-heading font-bold text-3xl uppercase tracking-tightest text-steel group-hover:text-crimson transition-colors">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}