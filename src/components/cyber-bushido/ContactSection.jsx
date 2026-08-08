import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [keystrokes, setKeystrokes] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const idRef = useRef(0);

  const handleKey = (val, field) => {
    setForm((f) => ({ ...f, [field]: val }));
    const chars = val.split("");
    const nodes = chars.map((c, i) => ({
      id: idRef.current++,
      char: c,
      x: Math.random() * 92 + 4,
      y: Math.random() * 80 + 10,
      r: Math.random() * 360,
      size: 14 + Math.random() * 28,
    }));
    setKeystrokes((prev) => [...prev.slice(-60), ...nodes]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-obsidian min-h-screen flex items-center overflow-hidden border-t border-white/5"
    >
      {/* Keystroke visualization background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {keystrokes.map((k) => (
          <motion.span
            key={k.id}
            initial={{ opacity: 0.5, scale: 0.4 }}
            animate={{ opacity: 0, scale: 1, rotate: k.r }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute font-kana font-black text-crimson select-none"
            style={{ left: `${k.x}%`, top: `${k.y}%`, fontSize: k.size }}
          >
            {k.char === " " ? "・" : k.char.toUpperCase()}
          </motion.span>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/60" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.03]" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.03]" />
      </div>

      <div className="relative z-10 w-full px-[6vw] py-[10vh]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — statement */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-[11px] text-crimson tracking-widest-x">04</span>
              <span className="h-px w-12 bg-crimson" />
              <span className="font-mono text-[11px] tracking-widest-x uppercase text-ghost">
                The Final Bow
              </span>
            </div>
            <h2 className="font-heading font-black uppercase tracking-tightest text-steel text-[10vw] md:text-[5.5vw] leading-[0.85]">
              Draw<br />your<br /><span className="text-crimson">blade.</span>
            </h2>
            <p className="mt-8 max-w-sm font-body text-sm text-ghost leading-[1.7]">
              High-friction, high-value. If your project demands elite execution,
              speak. Every message leaves a mark on this canvas.
            </p>

            <div className="mt-10 space-y-3 font-mono text-xs text-ghost">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-crimson rounded-full" />
                <span>ronin@cyberbushido.io</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-ghost rounded-full" />
                <span>Tokyo // Remote Worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-ghost rounded-full" />
                <span>Accepting commissions — Q4 2026</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:pt-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hud-border clip-corner p-10 text-center"
              >
                <span className="font-kana text-5xl text-crimson/40 block mb-4">礼</span>
                <h3 className="font-heading font-bold uppercase tracking-tightest text-steel text-2xl mb-3">
                  Message received.
                </h3>
                <p className="font-body text-sm text-ghost leading-relaxed">
                  The blade is sheathed. Your transmission has reached the dojo —
                  expect a reply within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8">
                <Field
                  label="01 — Designation"
                  name="name"
                  value={form.name}
                  onChange={(v) => handleKey(v, "name")}
                  placeholder="Your name"
                />
                <Field
                  label="02 — Signal Channel"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => handleKey(v, "email")}
                  placeholder="your@email.com"
                />
                <div className="group">
                  <label className="font-mono text-[10px] tracking-widest-x uppercase text-ghost flex items-center gap-2">
                    <span className="text-crimson">03</span>
                    <span className="h-px w-6 bg-crimson" />
                    Declaration
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleKey(e.target.value, "message")}
                    placeholder="State your intent..."
                    rows={5}
                    className="w-full mt-3 bg-transparent border-b border-white/10 focus:border-crimson font-body text-base text-steel placeholder:text-ghost/40 py-3 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-4 bg-crimson text-white px-8 py-4 font-mono text-xs tracking-widest-x uppercase hover:bg-steel hover:text-obsidian transition-colors duration-300"
                >
                  <span>Sheathe &amp; Send</span>
                  <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="group">
      <label
        htmlFor={name}
        className="font-mono text-[10px] tracking-widest-x uppercase text-ghost flex items-center gap-2"
      >
        <span className="text-crimson">{label.split("—")[0]}</span>
        <span className="h-px w-6 bg-crimson" />
        {label.split("—")[1]}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full mt-3 bg-transparent border-b border-white/10 focus:border-crimson font-body text-lg text-steel placeholder:text-ghost/40 py-3 outline-none transition-colors"
      />
    </div>
  );
}