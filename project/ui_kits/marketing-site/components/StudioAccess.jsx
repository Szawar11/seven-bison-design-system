/* Studio Access — the productised ongoing offer (brief §6). First-class
   page, half the "at scale" signal. Light chrome. No pricing anywhere. */

const StudioAccess = ({ navigate }) => (
  <main data-screen-label="studio-access">

    {/* HERO */}
    <section className="sb-container">
      <div className="sb-hero">
        <div className="sb-hero-left">
          <div className="sb-eyebrow-row">
            <span className="idx">STUDIO ACCESS</span>
            <span className="lbl">Ongoing partnership</span>
            <span className="rule"></span>
          </div>
          <h1 className="sb-display">
            Ongoing video and motion,<br/>
            <span className="sb-pink">on a monthly cadence.</span>
          </h1>
          <p className="sb-lead">
            Studio Access is a continuous creative partnership — editing, motion design,
            animation, and cinematic AI generation delivered on a predictable monthly rhythm,
            scoped to your volume. One team. No vendor friction.
          </p>
          <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Button variant="primary" onClick={() => navigate("contact")}>Talk to us about Studio Access</Button>
            <Button variant="text" onClick={() => navigate("portfolio")}>See the work</Button>
          </div>
        </div>
        <div className="sb-hero-right">
          <ReelFrame meta={["Monthly", "Studio Access", "All sectors"]} anim="waveform"
                     onClick={() => navigate("portfolio")}/>
        </div>
      </div>
    </section>

    {/* WHAT'S INCLUDED */}
    <section className="sb-container sb-section">
      <div className="sb-eyebrow-row">
        <span className="idx">01</span>
        <span className="lbl">What's included</span>
        <span className="rule"></span>
      </div>
      <div className="sb-grid-3" style={{ marginTop: 16 }}>
        {[
          { i: "video",    t: "Editing of existing footage", d: "Webinars, demos, founder clips, customer interviews — turned into polished, on-brand cuts." },
          { i: "sparkles", t: "Motion design & animation",   d: "2D/3D motion, animated explainers, and brand systems applied consistently across every asset." },
          { i: "film",     t: "Animated explainers",         d: "Complex products and processes made clear — built to brief, versioned for every channel." },
          { i: "layers",   t: "Product content",             d: "Feature films, launch modules, and social cutdowns produced on a rolling schedule." },
          { i: "cpu",      t: "Cinematic AI generation",     d: "AI image and video where it serves the story — premium looks without an expensive shoot." },
          { i: "trending", t: "Scoped to volume",            d: "A monthly allocation sized to your roadmap. Scale up for launches, steady the rest of the year." },
        ].map((c, i) => (
          <div key={i} className="sb-card">
            <div style={{ color: "var(--sb-pink)", marginBottom: 20 }}><Icon name={c.i} size={28}/></div>
            <h3 className="sb-h3" style={{ marginBottom: 8 }}>{c.t}</h3>
            <p className="sb-body">{c.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="sb-container sb-section">
      <div className="sb-eyebrow-row">
        <span className="idx">02</span>
        <span className="lbl">How it works</span>
        <span className="rule"></span>
      </div>
      <div className="sb-steps" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="sb-step"><div className="n">01</div><div className="t">Brief</div><div className="d">A monthly planning call aligned to your content calendar and channel mix. We agree the deliverables and move.</div></div>
        <div className="sb-step"><div className="n">02</div><div className="t">Produce</div><div className="d">A dedicated team, AI-native pipeline, human craft on every deliverable. Daily progress, reviews on Frame.io.</div></div>
        <div className="sb-step"><div className="n">03</div><div className="t">Deliver</div><div className="d">Predictable output. Asset libraries built for reuse across channels. Continuous refinement month over month.</div></div>
      </div>
    </section>

    {/* WHO IT'S FOR + CUSTOMER STORY */}
    <section className="sb-container sb-section">
      <div className="sb-grid-2" style={{ alignItems: "start", gap: 64 }}>
        <div>
          <div className="sb-eyebrow-row">
            <span className="idx">03</span>
            <span className="lbl">Who it's for</span>
            <span className="rule"></span>
          </div>
          <p className="sb-body-lg" style={{ marginTop: 16 }}>
            Brands with recurring content needs — internal marketing and communications teams
            running multiple channels who don't want the friction of one-off vendor relationships
            every time a new market, product, or campaign needs content.
          </p>
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="sb-quote" style={{ fontSize: 20, lineHeight: "30px" }}>
              <span className="sb-quote-mark">“</span>
              Studio Access replaced three vendors. We brief once a month and the work just arrives —
              consistent, on-brand, on time.
              <span className="sb-quote-mark">”</span>
            </div>
            <div className="sb-quote-attr">
              <AvatarFrame size={48}/>
              <div>
                <div className="name">Daniel Roth</div>
                <div className="role">Head of Brand · Aether</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <MediaFrame label="Customer story film" icon="image" dark={false} ratio="16 / 9"/>
          <div className="sb-card" style={{ marginTop: 24 }}>
            <div className="sb-eyebrow" style={{ color: "var(--sb-pink)", marginBottom: 12 }}>Customer story · Roche</div>
            <h3 className="sb-h3" style={{ marginBottom: 8 }}>From quarterly bursts to weekly output.</h3>
            <p className="sb-body">
              Roche's HCP education team moved to Studio Access after one-off vendors couldn't keep
              pace with their omnichannel calendar. Monthly cadence, MLR-ready assets, no ramp-up
              each time a new market needed content.
            </p>
            <div style={{ display: "flex", gap: 32, marginTop: 20 }}>
              <div><div className="sb-results-v" data-count="120">0</div><div className="sb-results-k">Assets / year</div></div>
              <div><div className="sb-results-v" data-count="6">0</div><div className="sb-results-k">Markets served</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="sb-cta-bar">
      <div className="sb-container">
        <h2 className="sb-display">Recurring content,<br/><span className="sb-pink">handled.</span></h2>
        <div className="actions">
          <Button variant="primary" onClick={() => navigate("contact")}>Talk to us about Studio Access</Button>
          <Button variant="secondary" onClick={() => navigate("portfolio")}>Review the work</Button>
        </div>
      </div>
    </section>
  </main>
);

Object.assign(window, { StudioAccess });
