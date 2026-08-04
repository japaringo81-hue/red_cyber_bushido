export default function ScanLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9000]">
      {/* fine scanline grain */}
      <div className="absolute inset-0 scanlines opacity-60" />
      {/* drifting streak */}
      <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-crimson/[0.06] via-white/[0.02] to-transparent animate-scan-streak" />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}