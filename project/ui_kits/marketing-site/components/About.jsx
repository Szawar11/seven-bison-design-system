/* About — studio, founder (the credibility lever), team, location.
   Brief §8. Light chrome. No headcount numbers, no stock office photos. */

const About = ({ navigate }) => (
  <main data-screen-label="about">

    {/* INTRO */}
    <section className="sb-container sb-section">
      <div className="sb-eyebrow-row">
        <span className="idx">ABOUT</span>
        <span className="lbl">The studio</span>
        <span className="rule"></span>
      </div>
      <h1 className="sb-display" style={{ maxWidth: "16ch", marginTop: 8 }}>
        Industry-specific video craft,<br/>
        <span className="sb-pink">delivered at scale.</span>
      </h1>
      <div className="sb-grid-2" style={{ alignItems: "start", gap: 64, marginTop: 40 }}>
        <p className="sb-body-lg">
          Seven Bison is a premium video, motion design, and animation studio for B2B brands with
          complex, regulated, or hard-to-photograph subject matter. We work end-to-end — from
          research and strategy, through concept and production, to final delivery.
        </p>
        <p className="sb-body-lg">
          We're AI-native by design. AI is the production engine that lets us deliver premium-looking
          work without expensive shoots, at a pace traditional studios can't match. The craft stays
          human. The speed and cost advantage is real — and it's why serious brands keep coming back.
        </p>
      </div>
    </section>

    {/* FOUNDER — Dark band for emphasis */}
    <section className="sb-section dark">
      <div className="sb-container">
        <div className="sb-eyebrow-row">
          <span className="idx">01</span>
          <span className="lbl">Founder</span>
          <span className="rule"></span>
        </div>
        <div className="sb-grid-2" style={{ alignItems: "center", gap: 64, marginTop: 16 }}>
          <MediaFrame label="Szymon Wojewski" icon="user" dark={true} ratio="4 / 5"/>
          <div>
            <h2 className="sb-h2" style={{ color: "#FFFFFF", marginBottom: 24 }}>
              Editorial discipline,<br/>built into the studio.
            </h2>
            <p className="sb-body-lg" style={{ color: "#D9D9D9", marginBottom: 20 }}>
              Founder Szymon Wojewski spent years in news editing at Bloomberg UK and Getty Images
              before building Seven Bison. That background shapes how the studio works — editorial
              discipline, deadline reliability, and a comfort with complex, sensitive subject matter
              that pharma, fintech, and heavy-industry buyers feel immediately.
            </p>
            <p className="sb-body-lg" style={{ color: "#D9D9D9" }}>
              Every discovery call goes through Szymon directly. No account-manager relay — you talk
              to the person who owns the work.
            </p>
            <div style={{ marginTop: 32 }}>
              <Button variant="secondary-dark" onClick={() => navigate("contact")}>Book a call with Szymon</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TEAM */}
    <section className="sb-container sb-section">
      <div className="sb-eyebrow-row">
        <span className="idx">02</span>
        <span className="lbl">The team</span>
        <span className="rule"></span>
      </div>
      <div className="sb-grid-4" style={{ marginTop: 16 }}>
        {[
          { n: "Szymon Wojewski", r: "Founder · Creative Director" },
          { n: "Creative Lead",   r: "Concept · Art Direction" },
          { n: "Motion Lead",     r: "2D/3D · Animation" },
          { n: "Producer",        r: "Delivery · Client" },
        ].map((p, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <AvatarFrame size={96}/>
            <div className="sb-body" style={{ color: "#111", fontWeight: 600, marginTop: 16 }}>{p.n}</div>
            <div className="sb-body-sm" style={{ marginTop: 4 }}>{p.r}</div>
          </div>
        ))}
      </div>
    </section>

    {/* LOCATION */}
    <section className="sb-container" style={{ paddingBottom: 96 }}>
      <hr className="sb-rule" style={{ marginBottom: 32 }}/>
      <div className="sb-grid-2" style={{ alignItems: "center" }}>
        <h3 className="sb-h3">Based in Gdańsk, Poland. Working remotely, worldwide.</h3>
        <p className="sb-body" style={{ maxWidth: "48ch" }}>
          Remote production is how we operate — brand-safe, secure, and transparent. You see daily
          progress wherever you are. Our timezone overlaps a full working day with both UK/EU and
          US East Coast teams.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="sb-cta-bar">
      <div className="sb-container">
        <h2 className="sb-display">Let's make something<br/><span className="sb-pink">worth watching.</span></h2>
        <div className="actions">
          <Button variant="primary" onClick={() => navigate("contact")}>Talk to our team</Button>
          <Button variant="secondary" onClick={() => navigate("portfolio")}>Review our portfolio</Button>
        </div>
      </div>
    </section>
  </main>
);

Object.assign(window, { About });
