export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-white/5">
      <div className="px-[6vw] py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="block w-2.5 h-2.5 bg-crimson rotate-45" />
            <span className="font-heading font-extrabold tracking-tightest text-steel uppercase text-sm">
              Cyber<span className="text-crimson">Bushido</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] text-ghost tracking-widest uppercase">
            <a href="#hero" className="hover:text-crimson transition-colors">Index</a>
            <a href="#work" className="hover:text-crimson transition-colors">Deeds</a>
            <a href="#case" className="hover:text-crimson transition-colors">Strike</a>
            <a href="#contact" className="hover:text-crimson transition-colors">Bow</a>
            <span className="hidden md:inline w-px h-3 bg-white/10" />
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-crimson transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-crimson transition-colors">LinkedIn</a>
          </div>

          <span className="font-mono text-[10px] text-ghost tracking-widest">
            © 2026 — ALL EDGES RESERVED
          </span>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
    </footer>
  );
}