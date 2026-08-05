import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Github, Linkedin, Mail } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useLang } from "@/lib/LanguageContext";
import KanjiWatermark from "@/components/cyber-bushido/KanjiWatermark";
import Kanji from "@/components/cyber-bushido/Kanji";
import Magnetic from "@/components/cyber-bushido/Magnetic";
import ImpactButton from "@/components/cyber-bushido/ImpactButton";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/your-handle", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", icon: Linkedin },
  { label: "Email", href: "mailto:ronin@cyberbushido.io", icon: Mail },
];

export default function TheCode() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [err, setErr] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    if (!form.name.trim() || !form.message.trim()) {
      setErr(t("code.errRequired"));
      return;
    }
    try {
      setStatus("sending");
      await base44.entities.Challenge.create({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      setStatus("sent");
    } catch (e2) {
      setStatus("error");
      setErr(t("code.errFailed"));
    }
  };

  return (
    <section id="code" className="relative dojo-floor py-[14vh] border-t border-white/5 scroll-mt-20">
      <KanjiWatermark kana="掟" opacity={0.1} />

      <div className="relative z-10 px-[6vw]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* left — statement */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[11px] text-crimson tracking-hud">04</span>
              <span className="h-px w-12 bg-crimson" />
              <span className="font-mono text-[11px] tracking-hud uppercase text-ghost inline-flex items-center gap-2">
                <Kanji k="掟" className="text-steel text-base" />
                — {t("code.kicker")}
              </span>
            </div>
            <h2 className="font-heading font-extrabold uppercase tracking-forged text-bone text-[11vw] md:text-[6vw] leading-[0.85]">
              {t("code.title1")}<br />
              <span className="text-crimson">{t("code.title2")}</span>
            </h2>
            <p className="mt-8 max-w-md font-body text-base text-ghost leading-[1.8]">
              {t("code.body")}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center gap-3 surface-steel surface-steel-hover blade-card sheen px-5 py-4 clip-corner-bl min-h-[44px]"
                  >
                    <Icon size={16} className="text-steel group-hover:text-crimson transition-colors" />
                    <span className="font-mono text-[11px] tracking-hud uppercase text-steel group-hover:text-crimson transition-colors">
                      {s.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* right — form */}
          <div className="lg:pt-6">
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="surface-steel blade-card px-8 py-14 clip-corner-bl text-center"
              >
                <Kanji k="礼" bare as="span" className="font-kana text-5xl text-crimson/40 block mb-5" />
                <h3 className="font-heading font-extrabold uppercase tracking-forged text-bone text-2xl mb-4">
                  {t("code.sentTitle")}
                </h3>
                <p className="font-body text-sm text-ghost leading-[1.7] max-w-sm mx-auto">
                  {t("code.sentBody")}
                </p>
                <button
                  onClick={() => {
                    setForm({ name: "", email: "", message: "" });
                    setStatus("idle");
                  }}
                  className="mt-8 font-mono text-[10px] tracking-hud uppercase text-crimson hover:text-bone transition-colors min-h-[44px]"
                >
                  {t("code.sendAgain")} →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-8" noValidate>
                <Field
                  n="01"
                  label={t("code.fieldName")}
                  name="name"
                  value={form.name}
                  onChange={(v) => set("name", v)}
                  placeholder={t("code.fieldNamePh")}
                />
                <Field
                  n="02"
                  label={t("code.fieldEmail")}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => set("email", v)}
                  placeholder={t("code.fieldEmailPh")}
                />
                <div className="group">
                  <label htmlFor="message" className="font-mono text-[10px] tracking-hud uppercase text-ghost flex items-center gap-2">
                    <span className="text-crimson">03</span>
                    <span className="h-px w-6 bg-crimson" />
                    {t("code.fieldMessage")}
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder={t("code.fieldMsgPh")}
                    rows={5}
                    className="w-full mt-3 bg-transparent border-b border-white/10 focus:border-crimson font-body text-base text-bone placeholder:text-ghost/40 py-3 outline-none transition-colors resize-none"
                  />
                </div>

                {err && (
                  <p role="alert" className="font-body text-sm text-crimson -mt-2">{err}</p>
                )}

                <Magnetic strength={0.2}>
                  <ImpactButton
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex items-center gap-3 bg-crimson text-white px-8 py-4 min-h-[44px] font-mono text-xs tracking-hud uppercase hover:bg-bone hover:text-void transition-colors duration-300 disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        {t("code.sending")}
                      </>
                    ) : (
                      <>
                        {t("code.send")}
                        <Send size={14} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                      </>
                    )}
                  </ImpactButton>
                </Magnetic>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ n, label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="group">
      <label
        htmlFor={name}
        className="font-mono text-[10px] tracking-hud uppercase text-ghost flex items-center gap-2"
      >
        <span className="text-crimson">{n}</span>
        <span className="h-px w-6 bg-crimson" />
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full mt-3 bg-transparent border-b border-white/10 focus:border-crimson font-body text-lg text-bone placeholder:text-ghost/40 py-3 outline-none transition-colors"
      />
    </div>
  );
}