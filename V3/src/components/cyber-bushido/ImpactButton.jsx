import { useRef, useState } from "react";

// Primary button with a crimson impact ripple + quick scale on click.
export default function ImpactButton({ children, onClick, className = "", disabled, ...rest }) {
  const [ripples, setRipples] = useState([]);
  const [pressed, setPressed] = useState(false);
  const idRef = useRef(0);

  const handleClick = (e) => {
    if (disabled) return;
    const r = e.currentTarget.getBoundingClientRect();
    const id = idRef.current++;
    setRipples((rs) => [...rs, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRipples((rs) => rs.filter((rp) => rp.id !== id)), 600);
    setPressed(true);
    setTimeout(() => setPressed(false), 220);
    onClick?.(e);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`relative overflow-hidden transition-transform duration-150 easing-blade ${
        pressed ? "scale-95" : "scale-100"
      } ${className}`}
      {...rest}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-crimson/40 animate-ripple"
          style={{ left: r.x, top: r.y, width: 12, height: 12 }}
        />
      ))}
      <span className="relative z-10 inline-flex items-center gap-3">{children}</span>
    </button>
  );
}