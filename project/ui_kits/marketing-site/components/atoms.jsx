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

const ReelFrame = ({ meta = [], onClick, cool = false }) => (
  <div className={`sb-reel ${cool ? "sb-reel--still-cool" : "sb-reel--still"}`} onClick={onClick}>
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

const Logo = ({ src = "../../assets/logos/seven-bison-logo-pink.png", onClick, height = 36 }) => (
  <img src={src} alt="Seven Bison" className="sb-logo" style={{ height }} onClick={onClick}/>
);

Object.assign(window, { Button, SectionHeader, Tag, ReelFrame, SectorMark, Icon, Logo });
