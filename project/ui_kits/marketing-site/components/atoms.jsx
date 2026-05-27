/* Atoms — shared building blocks. Loaded as a global Babel script.
   Exposes components on window so other Babel files can read them. */

const Button = ({ variant = "primary", children, onClick, arrow }) => {
  const cls = {
    primary: "sb-btn sb-btn--primary",
    secondary: "sb-btn sb-btn--secondary",
    "secondary-dark": "sb-btn sb-btn--secondary-dark",
    text: "sb-btn sb-btn--text",
  }[variant];
  return (
    <button className={cls} onClick={onClick}>
      <span>{children}</span>
      {arrow !== false && (variant === "text" || arrow === true) ? <span>→</span> : null}
    </button>
  );
};

const SectionHeader = ({ index, label, dark = false }) => (
  <div className="sb-eyebrow-row">
    <span className="idx">{index}</span>
    <span className="lbl">{label}</span>
    <span className="rule"></span>
  </div>
);

const Tag = ({ variant = "outline", children }) => {
  const cls = {
    fill: "sb-tag sb-tag--fill",
    outline: "sb-tag sb-tag--outline",
    "outline-dark": "sb-tag sb-tag--outline-dark",
    pill: "sb-tag sb-tag--pill",
  }[variant];
  return <span className={cls}>{children}</span>;
};

/* ---- Reel animations — pure SVG/CSS, no external libs ---- */

const AnimWaveform = () => (
  <svg className="sb-reel-anim" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    {[
      { x: 68,  h: 44, d: "0s"    },
      { x: 94,  h: 62, d: "0.18s" },
      { x: 120, h: 76, d: "0.36s" },
      { x: 146, h: 86, d: "0.54s" },
      { x: 172, h: 76, d: "0.72s" },
      { x: 198, h: 62, d: "0.9s"  },
      { x: 224, h: 44, d: "1.08s" },
    ].map((b, i) => (
      <rect key={i} x={b.x} y={90 - b.h / 2} width={18} height={b.h}
        fill="none" stroke="#E80787" strokeWidth="1.5"
        style={{ animation: `sb-wave 1.6s ${b.d} ease-in-out infinite` }}/>
    ))}
  </svg>
);

const AnimCircuit = () => (
  <svg className="sb-reel-anim" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <path d="M30,90 H80 V50 H160 V90 H240 V130 H160 V90"
      fill="none" stroke="rgba(232,7,135,0.25)" strokeWidth="1.5"/>
    <path d="M30,90 H80 V50 H160 V90 H240 V130 H160 V90"
      fill="none" stroke="#E80787" strokeWidth="1.5"
      strokeDasharray="420" strokeDashoffset="420"
      style={{ animation: "sb-circ-draw 3.2s linear infinite" }}/>
    {[[80,90],[160,50],[240,90],[160,130]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="4"
        fill="none" stroke="rgba(232,7,135,0.4)" strokeWidth="1.5"
        style={{ animation: `sb-node-pulse 3.2s ${(i*0.8).toFixed(1)}s ease-in-out infinite` }}/>
    ))}
  </svg>
);

function _gearPath(cx, cy, R, r, N) {
  const pts = [];
  for (let i = 0; i < N * 2; i++) {
    const a = (i / (N * 2)) * Math.PI * 2 - Math.PI / 2;
    const rad = i % 2 === 0 ? R : r;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`);
  }
  return "M" + pts.join("L") + "Z";
}

const AnimGears = () => (
  <svg className="sb-reel-anim" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <g style={{ animation: "sb-gear-cw 18s linear infinite", transformOrigin: "115px 95px" }}>
      <path d={_gearPath(115, 95, 56, 45, 14)} fill="none" stroke="#E80787" strokeWidth="1.5" strokeOpacity="0.7"/>
      <circle cx="115" cy="95" r="16" fill="none" stroke="rgba(232,7,135,0.3)" strokeWidth="1.5"/>
    </g>
    <g style={{ animation: "sb-gear-ccw 11.6s linear infinite", transformOrigin: "212px 70px" }}>
      <path d={_gearPath(212, 70, 34, 27, 9)} fill="none" stroke="#E80787" strokeWidth="1.5" strokeOpacity="0.55"/>
      <circle cx="212" cy="70" r="10" fill="none" stroke="rgba(232,7,135,0.25)" strokeWidth="1.5"/>
    </g>
  </svg>
);

const AnimPulse = () => (
  <svg className="sb-reel-anim" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <path d="M0,90 L10,90 L85,90 L96,80 L107,90 L118,90 L128,20 L138,155 L148,90 L162,68 L177,90 L310,90 L320,90"
      fill="none" stroke="rgba(232,7,135,0.2)" strokeWidth="1.5"/>
    <path d="M0,90 L10,90 L85,90 L96,80 L107,90 L118,90 L128,20 L138,155 L148,90 L162,68 L177,90 L310,90 L320,90"
      fill="none" stroke="#E80787" strokeWidth="1.5"
      strokeDasharray="590" strokeDashoffset="590"
      style={{ animation: "sb-pulse-draw 4s cubic-bezier(0.4,0,0.6,1) infinite" }}/>
  </svg>
);

const AnimScanline = () => (
  <svg className="sb-reel-anim" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <line x1="0" y1="0" x2="0" y2="180"
      stroke="#E80787" strokeWidth="1" strokeOpacity="0.7"
      style={{ animation: "sb-scan 3.5s cubic-bezier(0.4,0,0.6,1) infinite" }}/>
    <line x1="0" y1="0" x2="0" y2="180"
      stroke="rgba(232,7,135,0.15)" strokeWidth="12"
      style={{ animation: "sb-scan 3.5s cubic-bezier(0.4,0,0.6,1) infinite" }}/>
    {[30,60,90,120,150].map((y, i) => (
      <line key={i} x1="0" y1={y} x2="320" y2={y}
        stroke="rgba(232,7,135,0.04)" strokeWidth="1"/>
    ))}
  </svg>
);

const _ANIMS = { waveform: AnimWaveform, circuit: AnimCircuit, gears: AnimGears, pulse: AnimPulse, scanline: AnimScanline };

const ReelFrame = ({ meta = [], onClick, cool = false, anim }) => {
  const Anim = _ANIMS[anim] || null;
  return (
    <div className="sb-reel" onClick={onClick}>
      {Anim && <Anim/>}
      <div className="sb-play">
        <svg viewBox="0 0 24 24"><polygon points="7,5 19,12 7,19"/></svg>
      </div>
      <div className="sb-reel-meta">
        {meta.map((m, i) => (
          <React.Fragment key={i}>
            {i > 0 ? <span className="dot"></span> : null}
            <span>{m}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

/* Sector marks — bespoke 1.5 px stroke SVGs */
const SectorMark = ({ name }) => {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "square", strokeLinejoin: "miter" };
  if (name === "tech") return (
    <svg viewBox="0 0 36 36" {...common}>
      <rect x="9" y="9" width="18" height="18"/>
      <rect x="13" y="13" width="10" height="10"/>
      <line x1="13" y1="6" x2="13" y2="9"/><line x1="18" y1="6" x2="18" y2="9"/><line x1="23" y1="6" x2="23" y2="9"/>
      <line x1="13" y1="27" x2="13" y2="30"/><line x1="18" y1="27" x2="18" y2="30"/><line x1="23" y1="27" x2="23" y2="30"/>
      <line x1="6" y1="13" x2="9" y2="13"/><line x1="6" y1="18" x2="9" y2="18"/><line x1="6" y1="23" x2="9" y2="23"/>
      <line x1="27" y1="13" x2="30" y2="13"/><line x1="27" y1="18" x2="30" y2="18"/><line x1="27" y1="23" x2="30" y2="23"/>
    </svg>
  );
  if (name === "industry") return (
    <svg viewBox="0 0 36 36" {...common}>
      <polyline points="5,29 5,17 12,21 12,15 19,19 19,13 31,13 31,29 5,29"/>
      <rect x="22" y="6" width="4" height="7"/>
      <rect x="9" y="22" width="2" height="4"/>
      <rect x="15" y="22" width="2" height="4"/>
      <rect x="22" y="19" width="2" height="4"/>
      <rect x="27" y="19" width="2" height="4"/>
    </svg>
  );
  if (name === "health") return (
    <svg viewBox="0 0 36 36" {...common}>
      <rect x="6" y="6" width="24" height="24"/>
      <rect x="15" y="11" width="6" height="14"/>
      <rect x="11" y="15" width="14" height="6"/>
    </svg>
  );
  return null;
};

/* Inline Lucide-matched icon paths — reliable, zero-CDN, 1.5px stroke. */
const _IC = {
  arrow:      `<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>`,
  play:       `<polygon points="6 3 20 12 6 21 6 3" fill="currentColor"/>`,
  check:      `<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>`,
  info:       `<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>`,
  speed:      `<path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m12 14 4-4"/><circle cx="12" cy="14" r="1" fill="currentColor"/>`,
  shield:     `<path d="M20 13c0 5-3.5 7.5-7.16 8.95a1 1 0 0 1-.67 0C8.5 20.5 5 18 5 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C15.51 3.81 18 5 20 5a1 1 0 0 1 1 1z"/>`,
  target:     `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>`,
  layers:     `<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>`,
  handshake:  `<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-1"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>`,
  globe:      `<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>`,
  plus:       `<path d="M5 12h14"/><path d="M12 5v14"/>`,
  film:       `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M17 3v18"/><path d="M3 7h4"/><path d="M3 12h18"/><path d="M3 17h4"/><path d="M17 7h4"/><path d="M17 17h4"/>`,
  video:      `<path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2"/>`,
  zap:        `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
  activity:   `<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>`,
  clock:      `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  cpu:        `<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>`,
  sparkles:   `<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>`,
  microscope: `<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>`,
  trending:   `<polyline points="22 7 13.5 15.5 8.5 10.5 1 18"/><polyline points="16 7 22 7 22 13"/>`,
  building:   `<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>`,
  image:      `<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>`,
  user:       `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
  gallery:    `<path d="M2 7h20"/><rect width="18" height="14" x="3" y="5" rx="2"/><path d="m7 15 2.5-3 2 2.5L16 10l3 5"/>`,
};
const Icon = ({ name, size = 20 }) => {
  const paths = _IC[name] || _IC.sparkles;
  return (
    <svg className="sb-icon" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: paths }}/>
  );
};

const Logo = ({ src = "../../assets/logos/seven-bison-logo-pink.svg", onClick, height = 36 }) => (
  <img src={src} alt="Seven Bison" className="sb-logo" style={{ height }} onClick={onClick}/>
);

/* MediaFrame — placeholder for an image / graphic / still that doesn't
   exist yet. Same family as ReelFrame: framed surface, pink line-art icon,
   uppercase meta label, film-frame corner ticks. Dark by default (sits in
   reel-style contexts); light variant for light sections. */
const MediaFrame = ({ label = "Image", icon = "image", dark = true, ratio = "16 / 9", style }) => (
  <div className={`sb-media ${dark ? "sb-media--dark" : "sb-media--light"}`}
       style={{ aspectRatio: ratio, ...style }}>
    <svg className="sb-media-ticks" viewBox="0 0 160 90" preserveAspectRatio="none" aria-hidden="true">
      <path d="M8,18 L8,8 L18,8"/>
      <path d="M142,8 L152,8 L152,18"/>
      <path d="M8,72 L8,82 L18,82"/>
      <path d="M142,82 L152,82 L152,72"/>
    </svg>
    <div className="sb-media-center">
      <Icon name={icon} size={26}/>
      <span className="sb-media-label">{label}</span>
    </div>
  </div>
);

/* AvatarFrame — circular portrait placeholder for a person photo
   (testimonials, founder). Pink user glyph on a sunken surface. */
const AvatarFrame = ({ size = 48 }) => (
  <div className="sb-avatar" style={{ width: size, height: size }}>
    <Icon name="user" size={Math.round(size * 0.5)}/>
  </div>
);

Object.assign(window, { Button, SectionHeader, Tag, ReelFrame, MediaFrame, AvatarFrame, SectorMark, Icon, Logo });
