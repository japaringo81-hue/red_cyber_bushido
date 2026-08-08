import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  const [interactive, setInteractive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("blade-cursor");

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let tx = rx;
    let ty = ry;
    let raf;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${tx}px, ${ty}px)`;
      }
      const el = e.target;
      setInteractive(
        !!el.closest("a, button, [role='button'], input, textarea, .interactive")
      );
    };

    const loop = () => {
      rx += (tx - rx) * 0.2;
      ry += (ty - ry) * 0.2;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("blade-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* blade-line dot — clearly visible */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`transition-all duration-200 easing-blade ${
            interactive ? "h-10 w-[3px] bg-crimson" : "h-6 w-[2px] bg-steel"
          }`}
          style={{ boxShadow: interactive ? "0 0 12px var(--crimson), 0 0 4px var(--crimson)" : "0 0 8px var(--crimson)" }}
        />
      </div>
      {/* trailing mist */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-2.5 w-2.5 rounded-full bg-crimson/40 blur-[3px]" />
      </div>
    </>
  );
}