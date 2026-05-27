/* Sector page — data-driven. One component renders the Tech, Heavy Industry,
   or Healthcare & Pharma subpage from SECTOR_DATA[sector].
   Light hero with a Dark reel, then Light body sections. Maps to the brief's
   sector-subpage template: hero · proof · capabilities · sector work · how
   we work · CTA. Anchor brands per outline §4–5. */

const SECTOR_DATA = {
  tech: {
    label: "sector-tech",
    mark: "tech",
    idx: "SECTOR · 01",
    name: "Tech",
    headline: <>Video that explains<br/><span className="sb-pink">technical products clearly.</span></>,
    lead: "Cybersecurity, fintech, software, SaaS, AI/ML. We turn product roadmaps, threat models, and platform architectures into film that lands with both engineers and executive buyers.",
    heroAnim: "circuit",
    partnersLabel: "Tech partners",
    partners: ["OUTPOST24", "ALACRITI", "AWS", "R3", "AETHER", "CIPHERLAB"],
    capsLabel: "What we make for tech teams",
    caps: [
      { i: "layers", t: "Platform tours",            d: "60–90 second explainers that take a complex platform from problem to outcome without losing the engineer in the audience." },
      { i: "shield", t: "Security & trust films",    d: "Threat-model animations, SOC2 storytelling, incident-response narratives — built brand-safe and review-ready." },
      { i: "target", t: "Product launches",          d: "End-to-end launch creative: brand film, product modules, social cutdowns, ABM versions, channel exports." },
      { i: "cpu",    t: "Roadmap & series",          d: "Quarterly motion series that turn release notes into a campaign your customers actually watch." },
      { i: "globe",  t: "Sales-enablement loops",    d: "Looping demo videos for booths, sales rooms, and email — sized for every channel and locale." },
      { i: "video",  t: "Founder & thought-leadership", d: "Sit-down films and short-form clips that earn trust without sounding like a TED talk." },
    ],
    workLabel: "Tech work",
    work: [
      { t: "Identity Suite", m: "Outpost24 · Cybersecurity · 01:48", anim: "circuit"  },
      { t: "Platform Tour",  m: "Alacriti · Fintech · 01:30",        anim: "scanline" },
      { t: "Series Reveal",  m: "R3 · Blockchain · 00:58",           anim: "circuit"  },
    ],
    ctaHeadline: <>Building something<br/><span className="sb-pink">technical and time-sensitive?</span></>,
  },

  industry: {
    label: "sector-industry",
    mark: "industry",
    idx: "SECTOR · 02",
    name: "Heavy Industry",
    headline: <>Film that brings scale<br/><span className="sb-pink">and operations into focus.</span></>,
    lead: "Manufacturing, energy, infrastructure, logistics. We turn plants, processes, and machinery into film that communicates scale, safety, and precision — without an expensive on-site shoot.",
    heroAnim: "gears",
    partnersLabel: "Industry partners",
    partners: ["ARAMCO", "HILTI", "SHERWIN WILLIAMS", "DAIKIN", "TF KABLE", "JDR CABLES"],
    capsLabel: "What we make for industrial teams",
    caps: [
      { i: "building", t: "Plant & process films",     d: "Walk a buyer through a facility or a production line without flying a crew to site — clear, accurate, and safe to film anywhere." },
      { i: "shield",   t: "Safety & compliance",       d: "Procedure walkthroughs, hazard briefings, and field training built to standard and easy to update as regulations change." },
      { i: "video",    t: "Machinery & product demos", d: "Show how equipment works under load — cutaways, exploded views, and operating sequences that a static spec sheet can't carry." },
      { i: "trending", t: "Investor & annual reports", d: "Capital projects and operational milestones rendered as film for boards, shareholders, and analyst days." },
      { i: "layers",   t: "Recruitment & training",    d: "Onboarding, role films, and skills modules that scale across plants, shifts, and languages." },
      { i: "globe",    t: "Trade-show loops",          d: "Booth and stand content sized for the floor — silent, looping, and legible from across the hall." },
    ],
    workLabel: "Industry work",
    work: [
      { t: "Annual Report",   m: "Aramco · Energy · 04:10",      anim: "gears"    },
      { t: "Operations Film", m: "Hilti · Tools · 03:36",        anim: "scanline" },
      { t: "Process Story",   m: "Daikin · HVAC · 02:20",        anim: "gears"    },
    ],
    ctaHeadline: <>Shooting on site<br/><span className="sb-pink">slow, costly, or off-limits?</span></>,
  },

  health: {
    label: "sector-health",
    mark: "health",
    idx: "SECTOR · 03",
    name: "Healthcare & Pharma",
    headline: <>Science communicated<br/><span className="sb-pink">with clarity and compliance.</span></>,
    lead: "Medtech, biotech, pharma, health systems. MOA animations, HCP education, congress content, and patient education — accurate, MLR-ready, and brand-safe from the first frame.",
    heroAnim: "pulse",
    partnersLabel: "Healthcare partners",
    partners: ["ROCHE", "GENENTECH", "BAYER", "SANTEN", "HARRIS HEALTH", "PFIZER"],
    capsLabel: "What we make for healthcare teams",
    caps: [
      { i: "activity",   t: "MOA & MOD animations",      d: "Mechanism-of-action and disease films that hold up to scientific review and still read clearly to a non-specialist." },
      { i: "microscope", t: "HCP education",             d: "Detailing content, clinical-data visualisations, and KOL films built for the way HCPs actually consume information." },
      { i: "target",     t: "Patient education",         d: "Plain-language explainers that respect health literacy and the regulatory line around patient-facing claims." },
      { i: "layers",     t: "Omnichannel HCP campaigns", d: "Modular assets versioned for email, congress, rep-triggered, and self-detail — one source, every channel." },
      { i: "globe",      t: "Congress & medical affairs", d: "Booth loops, symposium content, and data-readout films produced to congress timelines." },
      { i: "shield",     t: "MLR-ready delivery",        d: "Built for medical, legal, and regulatory review from the start — referenced, traceable, and fast to amend." },
    ],
    workLabel: "Healthcare work",
    work: [
      { t: "Clinical Story",   m: "Roche / Genentech · Oncology · 03:02", anim: "pulse"    },
      { t: "MOA Animation",    m: "Bayer · Pharma · 02:00",               anim: "pulse"    },
      { t: "Patient Education", m: "Santen · Ophthalmology · 01:40",      anim: "scanline" },
    ],
    ctaHeadline: <>Need MLR-ready video<br/><span className="sb-pink">that still looks premium?</span></>,
  },
};

const Sector = ({ navigate, sector = "tech" }) => {
  const s = SECTOR_DATA[sector] || SECTOR_DATA.tech;
  return (
    <main data-screen-label={s.label}>

      {/* HERO — Light page, Dark reel inside */}
      <section className="sb-container">
        <div className="sb-hero">
          <div className="sb-hero-left">
            <div className="sb-eyebrow-row">
              <span className="idx">{s.idx}</span>
              <span className="lbl">{s.name}</span>
              <span className="rule"></span>
            </div>
            <h1 className="sb-display">{s.headline}</h1>
            <p className="sb-lead">{s.lead}</p>
            <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Button variant="primary" onClick={() => navigate("contact")}>Talk to our team</Button>
              <Button variant="text" onClick={() => navigate("portfolio")}>See our work</Button>
            </div>
          </div>
          <div className="sb-hero-right">
            <ReelFrame meta={[s.work[0].m.split(" · ").pop(), "Sector Reel", s.name]}
                       anim={s.heroAnim}
                       onClick={() => navigate("portfolio")}/>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="sb-container" style={{ paddingBottom: 64 }}>
        <div className="sb-eyebrow-row">
          <span className="idx">02</span>
          <span className="lbl">{s.partnersLabel}</span>
          <span className="rule"></span>
        </div>
        <div className="sb-trust">
          {s.partners.map((p, i) => <div key={i} className="logo">{p}</div>)}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="sb-container sb-section">
        <div className="sb-eyebrow-row">
          <span className="idx">03</span>
          <span className="lbl">{s.capsLabel}</span>
          <span className="rule"></span>
        </div>
        <div className="sb-grid-3" style={{ marginTop: 16 }}>
          {s.caps.map((c, i) => (
            <div key={i} className="sb-card">
              <div style={{ color: "var(--sb-pink)", marginBottom: 20 }}>
                <Icon name={c.i} size={28}/>
              </div>
              <h3 className="sb-h3" style={{ marginBottom: 8 }}>{c.t}</h3>
              <p className="sb-body">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTOR-CASE BAND — Dark, full-bleed */}
      <section className="sb-section dark">
        <div className="sb-container">
          <div className="sb-eyebrow-row">
            <span className="idx">04</span>
            <span className="lbl">{s.workLabel}</span>
            <span className="rule"></span>
          </div>
          <div className="sb-mosaic">
            {s.work.map((w, i) => (
              <div key={i} className="sb-work" onClick={() => navigate("case")}>
                <ReelFrame meta={[w.m.split(" · ")[1]]} anim={w.anim}/>
                <h3 className="t">{w.t}</h3>
                <div className="m">{w.m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sb-container sb-section">
        <div className="sb-eyebrow-row">
          <span className="idx">05</span>
          <span className="lbl">How we work</span>
          <span className="rule"></span>
        </div>
        <div className="sb-steps">
          <div className="sb-step"><div className="n">Discover</div><div className="t">Brief & spec</div><div className="d">A short scoping call with the people who own the work. We leave with a clear brief and a price.</div></div>
          <div className="sb-step"><div className="n">Explore</div><div className="t">Three directions</div><div className="d">AI-explored, human-curated. We always show what we considered, not just what we chose.</div></div>
          <div className="sb-step"><div className="n">Validate</div><div className="t">Frame.io review</div><div className="d">Daily reviews, threaded comments, version control. Every decision is logged.</div></div>
          <div className="sb-step"><div className="n">Engage</div><div className="t">Launch & iterate</div><div className="d">Launch-ready master plus multi-format exports. Optional iteration retainer for the next 90 days.</div></div>
        </div>
      </section>

      {/* CTA */}
      <section className="sb-cta-bar">
        <div className="sb-container">
          <h2 className="sb-display">{s.ctaHeadline}</h2>
          <div className="actions">
            <Button variant="primary" onClick={() => navigate("contact")}>Speak with a Producer</Button>
            <Button variant="secondary" onClick={() => navigate("portfolio")}>See portfolio</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

Object.assign(window, { Sector });
