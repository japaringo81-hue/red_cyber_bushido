import { useState } from "react";

// Inline Japanese term with a hover/tap tooltip showing romaji + plain-English meaning.
// placement: "top" (default) or "bottom"
export default function Term({ kana, reading, meaning, placement = "top", className = "", as = "span", bare = false, style }) {
  const [open, setOpen] = useState(false);
  const Tag = as;

  return (
    <span className="relative inline-block align-baseline">
      <Tag
        style={style}
        className={`${bare ? "" : "cursor-help border-b border-dotted border-white/35 hover:border-crimson"} transition-colors ${className}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        {kana}
      </Tag>
      {open && (
        <span
          className={`term-tip ${placement === "top" ? "bottom-full mb-2" : "top-full mt-2"}`}
        >
          <span className="text-crimson font-semibold">{reading}</span>
          <span className="text-ghost mx-1">—</span>
          {meaning}
        </span>
      )}
    </span>
  );
}