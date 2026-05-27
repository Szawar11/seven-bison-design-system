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

/* Lucide-style line icons, hand-inlined to avoid external CDN for the kit's
   small set. Stroke 1.5, pink by default via parent color. */
const Icon = ({ name, size = 20 }) => {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  const M = {
    arrow:    <svg {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
    play:     <svg {...p}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor"/></svg>,
    check:    <svg {...p}><circle cx="12" cy="12" r="9"/><polyline points="8 12.5 11 15.5 16 9.5"/></svg>,
    info:     <svg {...p}><circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><circle cx="12" cy="8" r="0.6" fill="currentColor"/></svg>,
    speed:    <svg {...p}><path d="M3 14a9 9 0 1 1 18 0"/><path d="M12 14l4-4"/><circle cx="12" cy="14" r="1" fill="currentColor"/></svg>,
    shield:   <svg {...p}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/></svg>,
    target:   <svg {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>,
    layers:   <svg {...p}><polygon points="12 3 22 8 12 13 2 8 12 3"/><polyline points="2 13 12 18 22 13"/></svg>,
    handshake: <svg {...p}><path d="M3 12l5-5 4 4-2 2 5 5 6-6-7-7-5 0"/></svg>,
    globe:    <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>,
    plus:     <svg {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  };
  return M[name] || null;
};

const Logo = ({ src = "../../assets/logos/seven-bison-logo-pink.svg", onClick, height = 36 }) => (
  <img src={src} alt="Seven Bison" className="sb-logo" style={{ height }} onClick={onClick}/>
);

Object.assign(window, { Button, SectionHeader, Tag, ReelFrame, SectorMark, Icon, Logo });
