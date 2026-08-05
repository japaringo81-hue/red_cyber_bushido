// The trials — conquests of the digital warrior. Bilingual (EN/AR).
// Each entry carries EN fields + matching *Ar fields; pick by current language.

export const TRIALS = [
  {
    id: "phantom-ledger",
    num: "壱",
    numRead: "ichi",
    numMean: "One — the first strike",
    numMeanAr: "واحد — الضربة الأولى",
    title: "Phantom Ledger",
    titleAr: "سجل الشبح",
    kana: "幻",
    kanaRead: "maboroshi",
    kanaMean: "A phantom; something seen but never grasped",
    kanaMeanAr: "وهم؛ ما يُرى ولا يُمسك",
    category: "Cryptography / Systems",
    categoryAr: "تشفير / أنظمة",
    year: "2025",
    tagline: "A zero-knowledge ledger for identities that refuse to be seen.",
    taglineAr: "سجل ذو معرفة صفرية لهويات ترفض أن تُرى.",
    image: "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/482869444_generated_image.png",
    accent: "crimson",
    challenge:
      "Sovereign identities were trapped between trust and exposure. Every proof required revealing the very thing it meant to protect. The ledger needed to attest without exposing — to remember without watching.",
    challengeAr:
      "كانت الهويات السيادية عالقة بين الثقة والكشف. كل إثبات يتطلب كشف ما يُراد حمايته. كان على السجل أن يشهد دون أن يكشف — أن يتذكر دون أن يراقب.",
    techniques: [
      {
        name: "The Silent Seal",
        nameAr: "الختم الصامت",
        kana: "封",
        kanaRead: "fū",
        kanaMean: "To seal; to close off",
        body:
          "Designed a zk-SNARK proof pipeline where membership attestation never touches plaintext. Witnesses generated client-side, verified on-chain in constant time.",
        bodyAr:
          "صممت خط إثبات zk-SNARK حيث لا يلمس إثبات العضوية النص الصريح. تُولّد الشهود على جانب العميل وتُتحقق على السلسلة في زمن ثابت.",
      },
      {
        name: "Folding the Scroll",
        nameAr: "طي المخطوطة",
        kana: "折",
        kanaRead: "ori",
        kanaMean: "To fold; to compress",
        body:
          "Implemented recursive proof composition — thousands of attestations compressed into a single verifiable statement, cutting verification cost by 97%.",
        bodyAr:
          "نفّذت تركيب إثبات تكراري — آلاف الإثباتات مضغوطة في عبارة واحدة قابلة للتحقق، ما خفض تكلفة التحقق بنسبة 97%.",
      },
      {
        name: "The Unbroken Line",
        nameAr: "الخط غير المنقطع",
        kana: "継",
        kanaRead: "tsugi",
        kanaMean: "To continue; an unbroken succession",
        body:
          "Hardened the trusted setup with a ceremony distributed across three continents, eliminating single points of trust without halting throughput.",
        bodyAr:
          "عزّزت الإعداد الموثوق بمراسم موزعة عبر ثلاث قارات، ما أزال نقاط الثقة المنفردة دون إيقاف الإنتاجية.",
      },
    ],
    metrics: [
      { v: "97%", l: "VERIFICATION COST CUT", lAr: "خفض تكلفة التحقق" },
      { v: "<3ms", l: "PROOF TIME", lAr: "زمن الإثبات" },
      { v: "0", l: "PLAINTEXT LEAKS", lAr: "تسريبات النص الصريح" },
      { v: "1.2M", l: "ATTESTATIONS", lAr: "إثباتات" },
    ],
    before: "Each identity proof leaked metadata. Verification took 80ms. Trust was centralized.",
    beforeAr: "كل إثبات هوية كان يكشف بيانات وصفية. التحقق استغرق 80 مللي ثانية. الثقة كانت مركزية.",
    after: "Zero-knowledge attestation in under 3ms. Decentralized trust. No plaintext, ever.",
    afterAr: "إثبات ذو معرفة صفرية في أقل من 3 مللي ثانية. ثقة لامركزية. لا نص صريح، أبدًا.",
  },
  {
    id: "silent-protocol",
    num: "弐",
    numRead: "ni",
    numMean: "Two — the second trial",
    numMeanAr: "اثنان — التجربة الثانية",
    title: "Silent Protocol",
    titleAr: "بروتوكول الصمت",
    kana: "沈",
    kanaRead: "chin",
    kanaMean: "To sink into stillness; unseen",
    kanaMeanAr: "الغوص في السكون؛ غير مرئي",
    category: "Real-time Systems",
    categoryAr: "أنظمة لحظية",
    year: "2025",
    tagline: "Edge inference fast enough to strike before the thought completes.",
    taglineAr: "استدلال على الحافة سريع بما يكفي ليضرب قبل أن يكتمل التفكير.",
    image: "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/ccb9c1078_generated_image.png",
    accent: "indigo",
    challenge:
      "Latency-critical interfaces demanded inference below the threshold of human perception. Cloud round-trips added 120ms of dead air. The strike needed to arrive before the target knew it was coming.",
    challengeAr:
      "واجهات حساسة للزمن طلبت استدلالًا تحت عتبة الإدراك البشري. رحلات السحابة ذهابًا وإيابًا أضافت 120 مللي ثانية من الفراغ. كان على الضربة أن تصل قبل أن يعلم الهدف بقدومها.",
    techniques: [
      {
        name: "The Forward Cut",
        nameAr: "القطع المتقدم",
        kana: "先",
        kanaRead: "sen",
        kanaMean: "To move first; initiative",
        body:
          "Pushed model inference to the edge with a speculative execution layer — predicting the next request and pre-computing results before they were asked.",
        bodyAr:
          "دفعت استدلال النموذج إلى الحافة مع طبقة تنفيذ تخميني — تتنبأ بالطلب التالي وتحسب النتائج مسبقًا قبل أن تُطلب.",
      },
      {
        name: "Stillness in the Stream",
        nameAr: "سكون في التيار",
        kana: "静",
        kanaRead: "shizuka",
        kanaMean: "Quiet; undisturbed",
        body:
          "Built a zero-copy event loop in Rust/WASM that held the hot path to sub-millisecond, with backpressure that failed gracefully instead of degrading silently.",
        bodyAr:
          "بنيت حلقة أحداث بلا نسخ في Rust/WASM أبقت المسار الساخن دون المللي ثانية، مع ضغط خلفي يفشل بأمان بدل أن يتدهور بصمت.",
      },
      {
        name: "The Listening Blade",
        nameAr: "الشفرة الإصغائية",
        kana: "聴",
        kanaRead: "chō",
        kanaMean: "To listen with full attention",
        body:
          "Adaptive caching that learned per-session intent, warming the cache for the 5% of calls that actually mattered.",
        bodyAr:
          "تخزين مؤقت تكيّفي يتعلّم نية كل جلسة، يدّخر مسبقًا الـ5% من الطلبات التي تهم فعلًا.",
      },
    ],
    metrics: [
      { v: "8ms", l: "P99 LATENCY", lAr: "زمن P99" },
      { v: "120→8", l: "ROUND-TRIP MS", lAr: "رحلة الذهاب والإياب (مللي ث)" },
      { v: "99.99%", l: "UPTIME", lAr: "وقت التشغيل" },
      { v: "50K", l: "CONCURRENT", lAr: "متزامن" },
    ],
    before: "120ms cloud round-trips. Stale caches. Degrading latency under load.",
    beforeAr: "120 مللي ثانية رحلات سحابة. تخزين مؤقت قديم. زمن متدهور تحت الحمل.",
    after: "8ms edge inference. Predictive pre-computation. Held flat under 50K concurrent sessions.",
    afterAr: "8 مللي ثانية استدلال على الحافة. حساب مسبق تنبئي. بقي مستقرًا تحت 50 ألف جلسة متزامنة.",
  },
  {
    id: "inkbound-engine",
    num: "参",
    numRead: "san",
    numMean: "Three — the third trial",
    numMeanAr: "ثلاثة — التجربة الثالثة",
    title: "Inkbound Engine",
    titleAr: "محرك الحبر",
    kana: "墨",
    kanaRead: "sumi",
    kanaMean: "Ink; the medium of calligraphy",
    kanaMeanAr: "الحبر؛ مادة الخط",
    category: "Generative / Creative Coding",
    categoryAr: "توليدي / برمجة إبداعية",
    year: "2024",
    tagline: "An engine that turns language into living calligraphy — then lets it dissolve.",
    taglineAr: "محرك يحوّل اللغة إلى خط حي — ثم يتركه يذوب.",
    image: "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/1f7b72f83_generated_image.png",
    accent: "crimson",
    challenge:
      "Typography on the web was static — glyphs printed, frozen, dead. The brief: make text behave like ink. Let it bleed, flow, respond to breath, and dissolve when the moment passed. The engine had to feel alive without becoming a gimmick.",
    challengeAr:
      "الطباعة على الويب كانت جامدة — رموز مطبوعة، مجمدة، ميتة. المطلوب: جعل النص يتصرف كالحبر. ينساب، يتدفق، يستجيب للنفس، ويذوب حين يمر الوقت. كان على المحرك أن يبدو حيًا دون أن يتحول إلى لعبة.",
    techniques: [
      {
        name: "The Flowing Stroke",
        nameAr: "الضربة المتدفقة",
        kana: "流",
        kanaRead: "ryū",
        kanaMean: "To flow; a current",
        body:
          "Authored a custom SDF renderer on WebGL2 that animated glyph outlines as fluid fields — each character a vector current rather than a fixed shape.",
        bodyAr:
          "كتبت عارض SDF مخصص على WebGL2 يحرّك خطوط الرموز كحقول مائعة — كل حرف تيار متجه لا شكل ثابت.",
      },
      {
        name: "Breath of the Page",
        nameAr: "نفس الصفحة",
        kana: "息",
        kanaRead: "iki",
        kanaMean: "Breath; the rhythm of living",
        body:
          "Tied ink viscosity and bleed to a live audio + scroll input, so the calligraphy responded to the reader's pace and ambient sound.",
        bodyAr:
          "ربطت لزوجة الحبر وانتشاره بمدخل صوتي وتمرير حي، فاستجاب الخط لإيقاع القارئ والصوت المحيط.",
      },
      {
        name: "The Dissolving Seal",
        nameAr: "الختم المتبدد",
        kana: "散",
        kanaRead: "san",
        kanaMean: "To scatter; to dissolve",
        body:
          "Built a particle dissipation system so finished strokes evaporated into mist, making every reading a single, unrepeatable performance.",
        bodyAr:
          "بنيت نظام تفريق جزيئي فتبخرت الضربات المنتهية إلى ضباب، ما جعل كل قراءة أداءً واحدًا لا يتكرر.",
      },
    ],
    metrics: [
      { v: "60fps", l: "SUSTAINED", lAr: "مستدام" },
      { v: "1.4MB", l: "ENGINE SIZE", lAr: "حجم المحرك" },
      { v: "∞", l: "VARIATIONS", lAr: "تنويعات" },
      { v: "Awwwards", l: "SOTD", lAr: "جوائز" },
    ],
    before: "Static web fonts. Fixed glyphs. No relationship between reader and text.",
    beforeAr: "خطوط ويب جامدة. رموز ثابتة. لا علاقة بين القارئ والنص.",
    after: "Living calligraphy that responds to breath and motion, then dissolves. 60fps on mobile.",
    afterAr: "خط حي يستجيب للنفس والحركة ثم يذوب. 60 إطارًا في الثانية على الجوال.",
  },
  {
    id: "zero-dawn-grid",
    num: "肆",
    numRead: "shi",
    numMean: "Four — the final trial",
    numMeanAr: "أربعة — التجربة الأخيرة",
    title: "Zero Dawn Grid",
    titleAr: "شبكة الفجر الصفري",
    kana: "網",
    kanaRead: "ami",
    kanaMean: "A net; an interwoven mesh",
    kanaMeanAr: "شبكة؛ نسيج متشابك",
    category: "Infrastructure",
    categoryAr: "بنية تحتية",
    year: "2024",
    tagline: "A decentralized energy mesh that routes power like a warrior routes intention.",
    taglineAr: "شبكة طاقة لامركزية توجّه الطاقة كما يوجّه المحارب نيّته.",
    image: "https://media.base44.com/images/public/6a71557ce6468ab881f19b8a/769e75914_generated_image.png",
    accent: "gold",
    challenge:
      "Energy distribution was a starved command economy — central nodes decided, the edges obeyed, and blackouts cascaded when authority failed. The grid needed to route itself, like water finding its level, with no single point of failure.",
    challengeAr:
      "كان توزيع الطاقة اقتصاد أمر مُجيع — العقد المركزية تقرر والأطراف تطيع، وتتسلسل انقطاعات التيار حين تفشل السلطة. كان على الشبكة أن توجّه نفسها، كالماء يجد مستواه، بلا نقطة فشل واحدة.",
    techniques: [
      {
        name: "The Self-Sharpening Path",
        nameAr: "المسار ذو الحد الذاتي",
        kana: "鋒",
        kanaRead: "hō",
        kanaMean: "The edge of a blade; a vanguard",
        body:
          "Implemented a gossip-based routing protocol where nodes negotiated surplus in real time, rerouting around failures in under 400ms with no central oracle.",
        bodyAr:
          "نفّذت بروتوكول توجيه بالنميمة تتفاوض فيه العقد على الفائض لحظيًا، وتعيد التوجيه حول الأعطال في أقل من 400 مللي ثانية بلا وسيط مركزي.",
      },
      {
        name: "The Honored Node",
        nameAr: "العقدة الموقّرة",
        kana: "誉",
        kanaRead: "yo",
        kanaMean: "Honor; earned reputation",
        body:
          "Designed a reputation-weighted consensus so honest producers earned routing priority — discipline rewarded, waste penalized.",
        bodyAr:
          "صممت إجماعًا مرجّحًا بالسمعة فتكسب العقد الصادقة أولوية التوجيه — الانضباط يُكافأ، والهدر يُعاقب.",
      },
      {
        name: "Dawn Protocol",
        nameAr: "بروتوكول الفجر",
        kana: "曙",
        kanaRead: "akebono",
        kanaMean: "Dawn; the first light",
        body:
          "Built a graceful degradation mode so the mesh kept the lights on at 30% capacity even during a 70% node outage.",
        bodyAr:
          "بنيت وضع تدهور رشيق فأبقت الشبكة الأنوار مضاءة عند 30% من الطاقة حتى خلال انقطاع 70% من العقد.",
      },
    ],
    metrics: [
      { v: "400ms", l: "REROUTE TIME", lAr: "زمن إعادة التوجيه" },
      { v: "30%", l: "MIN VIABLE CAPACITY", lAr: "أدنى طاقة ممكنة" },
      { v: "12K", l: "NODES", lAr: "عقد" },
      { v: "0", l: "CASCADING FAILURES", lAr: "أعطال متسلسلة" },
    ],
    before: "Central authority, cascading blackouts, opaque routing, wasted surplus.",
    beforeAr: "سلطة مركزية، انقطاعات متسلسلة، توجيه معتم، فائض مهدر.",
    after: "Self-routing mesh. 400ms failover. 12K nodes. Zero cascading blackouts in 14 months.",
    afterAr: "شبكة ذاتية التوجيه. 400 مللي ثانية لتبديل المسار. 12 ألف عقدة. صفر انقطاعات متسلسلة في 14 شهرًا.",
  },
];

export const getTrial = (id) => TRIALS.find((t) => t.id === id);

// The Seven Virtues of Bushido — bilingual.
export const VIRTUES = [
  { kana: "義", read: "gi", name: "Rectitude", nameAr: "الاستقامة", mean: "Doing what is right, especially when no one watches. In code: never ship a workaround I'd be ashamed to explain.", meanAr: "فعل الصواب، خاصة حين لا يراك أحد. في البرمجة: لا أُسلّم حلاً مُعرّجًا يستحي أن أشرحه." },
  { kana: "勇", read: "yū", name: "Courage", nameAr: "الشجاعة", mean: "Acting despite fear. In craft: choosing the harder, correct architecture over the easy shortcut.", meanAr: "الفعل رغم الخوف. في الصنعة: اختيار البنية الأصح والأصعب على الاختصار السهل." },
  { kana: "仁", read: "jin", name: "Benevolence", nameAr: "الإحسان", mean: "Building for the human on the other side. Every system serves someone; I keep them in mind.", meanAr: "البناء من أجل الإنسان على الطرف الآخر. كل نظام يخدم شخصًا؛ أبقيه في بالي." },
  { kana: "礼", read: "rei", name: "Respect", nameAr: "الاحترام", mean: "For the user, the material, and the people who maintain it after I'm gone. Code is a gift, not a monument.", meanAr: "للمستخدم، وللمادة، ولمن يصونها بعدي. الكود هدية لا نصب." },
  { kana: "誠", read: "makoto", name: "Honesty", nameAr: "الصدق", mean: "Saying what the system can and cannot do — plainly. No inflated metrics, no hidden debt.", meanAr: "قول ما يفعله النظام وما لا يفعله — بوضوح. لا أرقام مبالغ فيها ولا ديون خفية." },
  { kana: "名誉", read: "meiyo", name: "Honor", nameAr: "الشرف", mean: "My name is on the work. If it fails, I own it; if it succeeds, the team owns it.", meanAr: "اسمي على العمل. إن فشل امتلكته؛ وإن نجح امتلكه الفريق." },
  { kana: "忠義", read: "chūgi", name: "Loyalty", nameAr: "الولاء", mean: "Finishing what I commit to. The brief may change; the commitment does not.", meanAr: "إتمام ما ألتزم به. قد يتغير الطلب؛ لكن الالتزام لا يتغير." },
];