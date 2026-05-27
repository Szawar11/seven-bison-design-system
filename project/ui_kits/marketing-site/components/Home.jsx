/* Homepage — Light chrome with a Dark reel container in the hero
   right column, Dark selected-work mosaic band, and Light everywhere else. */

const Home = ({ navigate }) => (
  <main data-screen-label="home">

    {/* HERO — Light page, Dark reel container inside */}
    <section className="sb-container">
      <div className="sb-hero">
        <div className="sb-hero-left">
          <div className="sb-eyebrow-row">
            <span className="idx">01</span>
            <span className="lbl">Hero · Seven Bison</span>
            <span className="rule"></span>
          </div>
          <h1 className="sb-display">
            Enterprise video,<br/>
            <span className="sb-pink">faster. Safer. Better.</span>
          </h1>
          <p className="sb-lead">
            Seven Bison delivers launch-ready video in 48 hours with brand-safe,
            enterprise-ready production. AI-native. Human craft. End-to-end.
          </p>
          <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Button variant="primary" onClick={() => navigate("contact")}>Talk to our team</Button>
            <Button variant="text" onClick={() => navigate("portfolio")}>See our process</Button>
          </div>
        </div>
        <div className="sb-hero-right">
          <ReelFrame meta={["00:48", "Showreel 2026", "All sectors"]}
                     anim="waveform"
                     onClick={() => navigate("portfolio")}/>
        </div>
      </div>
    </section>

    {/* TRUST STRIP */}
    <section className="sb-container" style={{ paddingBottom: 64 }}>
      <div className="sb-eyebrow-row">
        <span className="idx">02</span>
        <span className="lbl">Trusted by enterprise teams in regulated industries</span>
        <span className="rule"></span>
      </div>
      <div className="sb-trust">
        <div className="logo">NORTHWIND</div>
        <div className="logo">AETHER</div>
        <div className="logo">FORGEWORKS</div>
        <div className="logo">HELIOMED</div>
        <div className="logo">CIPHERLAB</div>
        <div className="logo">PARALLAX</div>
      </div>
    </section>

    {/* END-TO-END PARTNER BLOCK */}
    <section className="sb-container sb-section">
      <div className="sb-eyebrow-row">
        <span className="idx">03</span>
        <span className="lbl">End-to-End Partner</span>
        <span className="rule"></span>
      </div>
      <div className="sb-grid-2" style={{ alignItems: "start", gap: 64 }}>
        <h2 className="sb-h2">
          One studio, from strategy to final cut.<br/>
          <span className="sb-pink">No handoffs. No surprises.</span>
        </h2>
        <p className="sb-body" style={{ fontSize: 16, lineHeight: "26px" }}>
          We handle every step of the process remotely, securely, and transparently —
          so your team stays focused on what matters. AI powers the speed. People perfect the craft.
          You see the work move forward, every day.
        </p>
      </div>
    </section>

    {/* SECTOR CARDS */}
    <section className="sb-container sb-section">
      <div className="sb-eyebrow-row">
        <span className="idx">04</span>
        <span className="lbl">Sectors we serve</span>
        <span className="rule"></span>
      </div>
      <div className="sb-grid-3" style={{ marginTop: 32 }}>
        <div className="sb-sector-card" onClick={() => navigate("tech")}>
          <div className="ic"><SectorMark name="tech"/></div>
          <h3>Tech</h3>
          <p>Cybersecurity, fintech, enterprise software, SaaS, AI/ML. Explain the architecture, sell the platform.</p>
          <div className="more">See tech work&nbsp;&nbsp;→</div>
        </div>
        <div className="sb-sector-card" onClick={() => navigate("industry")}>
          <div className="ic"><SectorMark name="industry"/></div>
          <h3>Heavy Industry</h3>
          <p>Manufacturing, energy, infrastructure, logistics. Bring scale and operations into focus.</p>
          <div className="more">See industry work&nbsp;&nbsp;→</div>
        </div>
        <div className="sb-sector-card" onClick={() => navigate("health")}>
          <div className="ic"><SectorMark name="health"/></div>
          <h3>Healthcare &amp; Pharma</h3>
          <p>Medtech, biotech, pharma, health systems. Communicate science with clarity and compliance.</p>
          <div className="more">See healthcare work&nbsp;&nbsp;→</div>
        </div>
      </div>
    </section>

    {/* SELECTED WORK MOSAIC — Dark band */}
    <section className="sb-section dark">
      <div className="sb-container">
        <div className="sb-eyebrow-row">
          <span className="idx">05</span>
          <span className="lbl">Selected work</span>
          <span className="rule"></span>
        </div>
        <div className="sb-mosaic">
          {[
            { t: "Northwind · Q3 Launch Film",  m: "Heavy Industry · 02:14", anim: "gears"    },
            { t: "CipherLab Identity Suite",    m: "Tech · 01:48",           anim: "circuit"  },
            { t: "HelioMed Clinical Story",     m: "Healthcare · 03:02",     anim: "pulse"    },
            { t: "Aether Platform Tour",        m: "Tech · 01:30",           anim: "circuit"  },
            { t: "Forgeworks Annual Report",    m: "Heavy Industry · 04:10", anim: "gears"    },
            { t: "Parallax Series Reveal",      m: "Tech · 00:58",           anim: "scanline" },
          ].map((w, i) => (
            <div key={i} className="sb-work" onClick={() => navigate("case")}>
              <ReelFrame meta={[w.m.split(" · ")[1]]} anim={w.anim}/>
              <h3 className="t">{w.t}</h3>
              <div className="m">{w.m}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
          <Button variant="secondary-dark" onClick={() => navigate("portfolio")}>
            See full portfolio
          </Button>
        </div>
      </div>
    </section>

    {/* HOW WE WORK */}
    <section className="sb-container sb-section">
      <div className="sb-eyebrow-row">
        <span className="idx">06</span>
        <span className="lbl">How we work</span>
        <span className="rule"></span>
      </div>
      <div className="sb-steps">
        <div className="sb-step"><div className="n">01</div><div className="t">Brief</div><div className="d">A short call. We scope, align, and price the work in a single conversation.</div></div>
        <div className="sb-step"><div className="n">02</div><div className="t">Concept</div><div className="d">AI-explored. Human-curated. Three directions, ten options each, one approved.</div></div>
        <div className="sb-step"><div className="n">03</div><div className="t">Production</div><div className="d">Remote and brand-safe. You see daily progress. Reviews on Frame.</div></div>
        <div className="sb-step"><div className="n">04</div><div className="t">Delivery</div><div className="d">Launch-ready in 48 hours for accelerated work. Multi-format exports for every channel.</div></div>
      </div>
    </section>

    {/* TESTIMONIAL */}
    <section className="sb-container sb-section">
      <div className="sb-eyebrow-row">
        <span className="idx">07</span>
        <span className="lbl">Testimonials</span>
        <span className="rule"></span>
      </div>
      <div className="sb-grid-2" style={{ gap: 64 }}>
        <p className="sb-quote">
          <span className="sb-quote-mark">“</span>
          Seven Bison turned a six-week production into a three-week sprint — and the work
          looked like it had taken a quarter. They're now our default video partner.
          <span className="sb-quote-mark">”</span>
        </p>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div className="sb-quote-attr">
            <div className="av"></div>
            <div>
              <div className="name">Mara Linde</div>
              <div className="role">VP Marketing · Northwind Industrial</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="sb-cta-bar">
      <div className="sb-container">
        <h2 className="sb-display">Less noise.<br/><span className="sb-pink">More signal. Always.</span></h2>
        <div className="actions">
          <Button variant="primary" onClick={() => navigate("contact")}>Start your project</Button>
          <Button variant="secondary" onClick={() => navigate("portfolio")}>Review portfolio</Button>
        </div>
      </div>
    </section>
  </main>
);

Object.assign(window, { Home });
