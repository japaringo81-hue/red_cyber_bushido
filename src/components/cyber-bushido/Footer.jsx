import { Github, Linkedin, Mail } from "lucide-react";

// NOTE: Replace with your real profiles — these are live anchor tags.
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/your-handle", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", icon: Linkedin },
  { label: "Email", href: "mailto:ronin@cyberbushido.io", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-white/5">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
      <div className="px-[6vw] py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="block w-2.5 h-2.5 bg-crimson rotate-45 animate-pulse-glow" />
              <span className="font-heading font-extrabold tracking-forged text-bone uppercase text-sm">
                Cyber<span className="text-crimson">Bushido</span>
              </span>
            </div>
            <p className="mt-3 font-mono text-[11px] tracking-hud text-ghost/80 max-w-md">
              The blade is not sharpened by force — but by patience.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-2 font-mono text-[10px] tracking-hud uppercase text-ghost hover:text-crimson transition-colors border border-white/8 hover:border-crimson/50 px-3 py-2 clip-corner-bl"
                >
                  <Icon size={13} />
                  {s.label}
                </a>
              );
            })}
          </div>

          <span className="font-mono text-[10px] tracking-hud text-ghost/70">
            © 2026 — 道場 · ALL EDGES RESERVED
          </span>
        </div>
      </div>
    </footer>
  );
}