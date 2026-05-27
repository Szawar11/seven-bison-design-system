/* Sector page (Tech) — Light hero with a Dark reel container in the
   right column, then Light body sections. Same pattern as homepage hero
   but with sector-specific copy and proof. */

const Sector = ({ navigate }) => (
  <main data-screen-label="sector-tech">

    {/* HERO — Light page, Dark reel inside */}
    <section className="sb-container">
      <div className="sb-hero">
        <div className="sb-hero-left">
          <div className="sb-eyebrow-row">
            <span className="idx">SECTOR · 01</span>
            <span className="lbl">Tech</span>
            <span className="rule"></span>
          </div>
          <h1 className="sb-display">
            Video that explains<br/>
            <span className="sb-pink">technical products clearly.</span>
          </h1>
          <p className="sb-lead">
            Cybersecurity, fintech, software, SaaS, AI/ML. We've turned product roadmaps,
            threat models, and platform architectures into film that lands with both
            engineers and executive buyers.
          </p>
          <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
            <Button variant="primary" onClick={() => navigate("contact")}>Talk to our team</Button>
            <Button variant="text" onClick={() => navigate("portfolio")}>See tech work</Button>
          </div>
        </div>
        <div className="sb-hero-right">
          <ReelFrame meta={["01:48", "Sector Reel", "Tech"]}
                     anim="circuit"
                     onClick={() => navigate("portfolio")}/>
        </div>
      </div>
    </section>

    {/* PROOF STRIP */}
    <section className="sb-container" style={{ paddingBottom: 64 }}>
      <div className="sb-eyebrow-row">
        <span className="idx">02</span>
        <span className="lbl">Tech partners</span>
        <span className="rule"></span>
      </div>
      <div className="sb-trust">
        <div className="logo">AETHER</div>
        <div className="logo">CIPHERLAB</div>
        <div className="logo">PARALLAX</div>
        <div className="logo">STRATOLINE</div>
        <div className="logo">NIMBUSPAY</div>
        <div className="logo">ORBITAL</div>
      </div>
    </section>

    {/* CAPABILITIES */}
    <section className="sb-container sb-section">
      <div className="sb-eyebrow-row">
        <span className="idx">03</span>
        <span className="lbl">What we make for tech teams</span>
        <span className="rule"></span>
      </div>
      <div className="sb-grid-3" style={{ marginTop: 16 }}>
        {[
          { i: "layers", t: "Platform tours", d: "60–90 second explainers that take a complex platform from problem to outcome without losing the engineer in the audience." },
          { i: "shield", t: "Security &amp; trust films", d: "Threat-model animations, SOC2 storytelling, incident-response narratives — built brand-safe and review-ready." },
          { i: "target", t: "Product launches", d: "End-to-end launch creative: brand film, product modules, social cutdowns, ABM versions, channel exports." },
          { i: "speed",  t: "Roadmap &amp; series", d: "Quarterly motion series that turn release notes into a campaign your customers actually watch." },
          { i: "globe",  t: "Sales-enablement loops", d: "Looping demo videos for booths, sales rooms, and email — sized for every channel and locale." },
          { i: "play",   t: "Founder &amp; thought-leadership", d: "Sit-down films and short-form clips that earn trust without sounding like a TED talk." },
        ].map((c, i) => (
          <div key={i} className="sb-card">
            <div style={{ color: "var(--sb-pink)", marginBottom: 20 }}>
              <Icon name={c.i} size={28}/>
            </div>
            <h3 className="sb-h3" style={{ marginBottom: 8 }}>{c.t}</h3>
            <p className="sb-body" dangerouslySetInnerHTML={{ __html: c.d }}></p>
          </div>
        ))}
      </div>
    </section>

    {/* SECTOR-CASE BAND — Dark, full-bleed */}
    <section className="sb-section dark">
      <div className="sb-container">
        <div className="sb-eyebrow-row">
          <span className="idx">04</span>
          <span className="lbl">Tech work</span>
          <span className="rule"></span>
        </div>
        <div className="sb-mosaic">
          {[
            { t: "Identity Suite", m: "CipherLab · Cybersecurity · 01:48", anim: "circuit"  },
            { t: "Platform Tour",  m: "Aether · SaaS · 01:30",           anim: "scanline" },
            { t: "Series Reveal",  m: "Parallax · Fintech · 00:58",       anim: "circuit"  },
          ].map((w, i) => (
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
        <span className="lbl">How we work with tech teams</span>
        <span className="rule"></span>
      </div>
      <div className="sb-steps">
        <div className="sb-step"><div className="n">Discover</div><div className="t">Audience &amp; spec</div><div className="d">A short call with product, marketing, and one engineer. We leave with a clear technical spine.</div></div>
        <div className="sb-step"><div className="n">Explore</div><div className="t">Three directions</div><div className="d">AI-explored, human-curated. We always show what we considered, not just what we chose.</div></div>
        <div className="sb-step"><div className="n">Validate</div><div className="t">Frame.io review</div><div className="d">Daily reviews, threaded comments, version control. Every decision is logged.</div></div>
        <div className="sb-step"><div className="n">Engage</div><div className="t">Launch &amp; iterate</div><div className="d">Launch-ready master + multi-format exports. Optional iteration retainer for the next 90 days.</div></div>
      </div>
    </section>

    {/* CTA */}
    <section className="sb-cta-bar">
      <div className="sb-container">
        <h2 className="sb-display">Building something<br/><span className="sb-pink">technical and time-sensitive?</span></h2>
        <div className="actions">
          <Button variant="primary" onClick={() => navigate("contact")}>Speak with a Producer</Button>
          <Button variant="secondary" onClick={() => navigate("portfolio")}>See tech portfolio</Button>
        </div>
      </div>
    </section>
  </main>
);

Object.assign(window, { Sector });
