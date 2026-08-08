// The trials — conquests of the digital warrior. Each is a milestone on The Path.
// kanaRead / kanaMean + numRead / numMean power the educational tooltips.

export const TRIALS = [
  {
    id: "phantom-ledger",
    num: "壱",
    numRead: "ichi",
    numMean: "One — the first strike",
    title: "Phantom Ledger",
    kana: "幻",
    kanaRead: "maboroshi",
    kanaMean: "A phantom; something seen but never grasped",
    kanaLabel: "PHANTOM",
    category: "Cryptography / Systems",
    year: "2025",
    tagline: "A zero-knowledge ledger for identities that refuse to be seen.",
    image:
      "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/482869444_generated_image.png",
    accent: "crimson",
    challenge:
      "Sovereign identities were trapped between trust and exposure. Every proof required revealing the very thing it meant to protect. The ledger needed to attest without exposing — to remember without watching.",
    techniques: [
      {
        name: "The Silent Seal",
        kana: "封",
        kanaRead: "fū",
        kanaMean: "To seal; to close off",
        body: "Designed a zk-SNARK proof pipeline where membership attestation never touches plaintext. Witnesses generated client-side, verified on-chain in constant time.",
      },
      {
        name: "Folding the Scroll",
        kana: "折",
        kanaRead: "ori",
        kanaMean: "To fold; to compress",
        body: "Implemented recursive proof composition — thousands of attestations compressed into a single verifiable statement, cutting verification cost by 97%.",
      },
      {
        name: "The Unbroken Line",
        kana: "継",
        kanaRead: "tsugi",
        kanaMean: "To continue; an unbroken succession",
        body: "Hardened the trusted setup with a ceremony distributed across three continents, eliminating single points of trust without halting throughput.",
      },
    ],
    metrics: [
      { v: "97%", l: "VERIFICATION COST CUT" },
      { v: "<3ms", l: "PROOF TIME" },
      { v: "0", l: "PLAINTEXT LEAKS" },
      { v: "1.2M", l: "ATTESTATIONS" },
    ],
    before: "Each identity proof leaked metadata. Verification took 80ms. Trust was centralized.",
    after: "Zero-knowledge attestation in under 3ms. Decentralized trust. No plaintext, ever.",
  },
  {
    id: "silent-protocol",
    num: "弐",
    numRead: "ni",
    numMean: "Two — the second trial",
    title: "Silent Protocol",
    kana: "沈",
    kanaRead: "chin",
    kanaMean: "To sink into stillness; unseen",
    kanaLabel: "SILENT",
    category: "Real-time Systems",
    year: "2025",
    tagline: "Edge inference fast enough to strike before the thought completes.",
    image:
      "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/ccb9c1078_generated_image.png",
    accent: "indigo",
    challenge:
      "Latency-critical interfaces demanded inference below the threshold of human perception. Cloud round-trips added 120ms of dead air. The strike needed to arrive before the target knew it was coming.",
    techniques: [
      {
        name: "The Forward Cut",
        kana: "先",
        kanaRead: "sen",
        kanaMean: "To move first; initiative",
        body: "Pushed model inference to the edge with a speculative execution layer — predicting the next request and pre-computing results before they were asked.",
      },
      {
        name: "Stillness in the Stream",
        kana: "静",
        kanaRead: "shizuka",
        kanaMean: "Quiet; undisturbed",
        body: "Built a zero-copy event loop in Rust/WASM that held the hot path to sub-millisecond, with backpressure that failed gracefully instead of degrading silently.",
      },
      {
        name: "The Listening Blade",
        kana: "聴",
        kanaRead: "chō",
        kanaMean: "To listen with full attention",
        body: "Adaptive caching that learned per-session intent, warming the cache for the 5% of calls that actually mattered.",
      },
    ],
    metrics: [
      { v: "8ms", l: "P99 LATENCY" },
      { v: "120→8", l: "ROUND-TRIP MS" },
      { v: "99.99%", l: "UPTIME" },
      { v: "50K", l: "CONCURRENT" },
    ],
    before: "120ms cloud round-trips. Stale caches. Degrading latency under load.",
    after: "8ms edge inference. Predictive pre-computation. Held flat under 50K concurrent sessions.",
  },
  {
    id: "inkbound-engine",
    num: "参",
    numRead: "san",
    numMean: "Three — the third trial",
    title: "Inkbound Engine",
    kana: "墨",
    kanaRead: "sumi",
    kanaMean: "Ink; the medium of calligraphy",
    kanaLabel: "INK",
    category: "Generative / Creative Coding",
    year: "2024",
    tagline: "An engine that turns language into living calligraphy — then lets it dissolve.",
    image:
      "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/1f7b72f83_generated_image.png",
    accent: "crimson",
    challenge:
      "Typography on the web was static — glyphs printed, frozen, dead. The brief: make text behave like ink. Let it bleed, flow, respond to breath, and dissolve when the moment passed. The engine had to feel alive without becoming a gimmick.",
    techniques: [
      {
        name: "The Flowing Stroke",
        kana: "流",
        kanaRead: "ryū",
        kanaMean: "To flow; a current",
        body: "Authored a custom SDF renderer on WebGL2 that animated glyph outlines as fluid fields — each character a vector current rather than a fixed shape.",
      },
      {
        name: "Breath of the Page",
        kana: "息",
        kanaRead: "iki",
        kanaMean: "Breath; the rhythm of living",
        body: "Tied ink viscosity and bleed to a live audio + scroll input, so the calligraphy responded to the reader's pace and ambient sound.",
      },
      {
        name: "The Dissolving Seal",
        kana: "散",
        kanaRead: "san",
        kanaMean: "To scatter; to dissolve",
        body: "Built a particle dissipation system so finished strokes evaporated into mist, making every reading a single, unrepeatable performance.",
      },
    ],
    metrics: [
      { v: "60fps", l: "SUSTAINED" },
      { v: "1.4MB", l: "ENGINE SIZE" },
      { v: "∞", l: "VARIATIONS" },
      { v: "Awwwards", l: "SOTD" },
    ],
    before: "Static web fonts. Fixed glyphs. No relationship between reader and text.",
    after: "Living calligraphy that responds to breath and motion, then dissolves. 60fps on mobile.",
  },
  {
    id: "zero-dawn-grid",
    num: "肆",
    numRead: "shi",
    numMean: "Four — the final trial",
    title: "Zero Dawn Grid",
    kana: "網",
    kanaRead: "ami",
    kanaMean: "A net; an interwoven mesh",
    kanaLabel: "GRID",
    category: "Infrastructure",
    year: "2024",
    tagline: "A decentralized energy mesh that routes power like a warrior routes intention.",
    image:
      "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/769e75914_generated_image.png",
    accent: "gold",
    challenge:
      "Energy distribution was a starved command economy — central nodes decided, the edges obeyed, and blackouts cascaded when authority failed. The grid needed to route itself, like water finding its level, with no single point of failure.",
    techniques: [
      {
        name: "The Self-Sharpening Path",
        kana: "鋒",
        kanaRead: "hō",
        kanaMean: "The edge of a blade; a vanguard",
        body: "Implemented a gossip-based routing protocol where nodes negotiated surplus in real time, rerouting around failures in under 400ms with no central oracle.",
      },
      {
        name: "The Honored Node",
        kana: "誉",
        kanaRead: "yo",
        kanaMean: "Honor; earned reputation",
        body: "Designed a reputation-weighted consensus so honest producers earned routing priority — discipline rewarded, waste penalized.",
      },
      {
        name: "Dawn Protocol",
        kana: "曙",
        kanaRead: "akebono",
        kanaMean: "Dawn; the first light",
        body: "Built a graceful degradation mode so the mesh kept the lights on at 30% capacity even during a 70% node outage.",
      },
    ],
    metrics: [
      { v: "400ms", l: "REROUTE TIME" },
      { v: "30%", l: "MIN VIABLE CAPACITY" },
      { v: "12K", l: "NODES" },
      { v: "0", l: "CASCADING FAILURES" },
    ],
    before: "Central authority, cascading blackouts, opaque routing, wasted surplus.",
    after: "Self-routing mesh. 400ms failover. 12K nodes. Zero cascading blackouts in 14 months.",
  },
];

export const getTrial = (id) => TRIALS.find((t) => t.id === id);

// The Seven Virtues of Bushido — taught in The Dojo.
export const VIRTUES = [
  { kana: "義", read: "gi", name: "Rectitude", mean: "Doing what is right, especially when no one watches. In code: never ship a workaround I'd be ashamed to explain." },
  { kana: "勇", read: "yū", name: "Courage", mean: "Acting despite fear. In craft: choosing the harder, correct architecture over the easy shortcut." },
  { kana: "仁", read: "jin", name: "Benevolence", mean: "Building for the human on the other side. Every system serves someone; I keep them in mind." },
  { kana: "礼", read: "rei", name: "Respect", mean: "For the user, the material, and the people who maintain it after I'm gone. Code is a gift, not a monument." },
  { kana: "誠", read: "makoto", name: "Honesty", mean: "Saying what the system can and cannot do — plainly. No inflated metrics, no hidden debt." },
  { kana: "名誉", read: "meiyo", name: "Honor", mean: "My name is on the work. If it fails, I own it; if it succeeds, the team owns it." },
  { kana: "忠義", read: "chūgi", name: "Loyalty", mean: "Finishing what I commit to. The brief may change; the commitment does not." },
];