import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// Inline Japanese term with a hover/tap tooltip showing romaji + plain-English/Arabic meaning.
// The tooltip is portaled to document.body and positioned with `fixed` so it always
// renders above every section, watermark, nav rail and card — never clipped or stacked
// behind background art.
// placement: "top" (default) or "bottom"
export default function Term({ kana, reading, meaning, placement = "top", className = "", as = "span", bare = false, style }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(null);
  const ref = useRef(null);

  const show = () => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ top: r.top, bottom: r.bottom, left: r.left + r.width / 2 });
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  const Tag = as;
  const tipStyle =
    placement === "top"
      ? { top: `${pos.top - 10}px`, transform: "translate(-50%, -100%)" }
      : { top: `${pos.bottom + 10}px`, transform: "translate(-50%, 0)" };

  return (
    <span className="relative inline-block align-baseline">
      <Tag
        ref={ref}
        style={style}
        className={`${bare ? "" : "cursor-help border-b border-dotted border-white/35 hover:border-crimson"} transition-colors ${className}`}
        onMouseEnter={show}
        onMouseLeave={() => setOpen(false)}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        {kana}
      </Tag>
      {open &&
        pos &&
        createPortal(
          <span
            className="term-tip"
            style={{ position: "fixed", left: `${pos.left}px`, ...tipStyle }}
          >
            <span className="text-crimson font-semibold">{reading}</span>
            <span className="text-ghost mx-1">—</span>
            {meaning}
          </span>,
          document.body
        )}
    </span>
  );
}