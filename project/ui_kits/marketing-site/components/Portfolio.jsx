/* Portfolio — Dark hero, Light body grid. */

const Portfolio = ({ navigate }) => (
  <main data-screen-label="portfolio">

    {/* DARK HERO */}
    <section className="sb-hero-dark">
      <div className="sb-container">
        <div className="sb-eyebrow-row">
          <span className="idx">01</span>
          <span className="lbl" style={{ color: "#FFFFFF" }}>Portfolio</span>
          <span className="rule" style={{ background: "rgba(255,255,255,0.12)" }}></span>
        </div>
        <h1 className="sb-display">
          The work,<br/>across every sector.
        </h1>
        <p className="sb-lead" style={{ color: "#D9D9D9", maxWidth: "60ch" }}>
          A selection of films, brand systems, motion graphics and explainers we've produced
          for partners in Tech, Heavy Industry, and Healthcare &amp; Pharma.
        </p>
        <div style={{ marginTop: 48 }}>
          <ReelFrame meta={["02:48", "Showreel 2026", "All sectors"]} cool={true}/>
        </div>
      </div>
    </section>

    {/* FILTER BAR — Light, clean edge from the dark hero above */}
    <section className="sb-container" style={{ paddingTop: 56, paddingBottom: 32 }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <span className="sb-meta" style={{ marginRight: 16 }}>Filter</span>
        <Tag variant="fill">All</Tag>
        <Tag variant="outline">Tech</Tag>
        <Tag variant="outline">Heavy Industry</Tag>
        <Tag variant="outline">Healthcare &amp; Pharma</Tag>
        <Tag variant="outline">Brand films</Tag>
        <Tag variant="outline">Product explainers</Tag>
        <Tag variant="outline">Motion graphics</Tag>
      </div>
    </section>

    {/* GRID */}
    <section className="sb-container sb-section--tight">
      <div className="sb-grid-3">
        {[
          { t: "Q3 Launch Film", m: "Northwind · Heavy Industry · 02:14", cool: false },
          { t: "Identity Suite", m: "CipherLab · Tech · 01:48", cool: true },
          { t: "Clinical Story", m: "HelioMed · Healthcare · 03:02", cool: false },
          { t: "Platform Tour", m: "Aether · Tech · 01:30", cool: true },
          { t: "Annual Report", m: "Forgeworks · Industry · 04:10", cool: false },
          { t: "Series Reveal", m: "Parallax · Tech · 00:58", cool: true },
          { t: "Compliance Animation", m: "Vesta Bio · Pharma · 02:00", cool: false },
          { t: "Founders Documentary", m: "Stratoline · Tech · 06:24", cool: true },
          { t: "Operations Walkthrough", m: "RailCorp · Industry · 03:36", cool: false },
        ].map((w, i) => (
          <div key={i} className="sb-work" onClick={() => navigate("case")} style={{ marginBottom: 24 }}>
            <ReelFrame meta={[w.m.split(" · ")[1]]} cool={w.cool}/>
            <h3 className="t" style={{ color: "#111111", marginTop: 16 }}>{w.t}</h3>
            <div className="m" style={{ color: "#8A8A8A" }}>{w.m}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 64, display: "flex", justifyContent: "center" }}>
        <Button variant="secondary">Load more work</Button>
      </div>
    </section>

    {/* CTA */}
    <section className="sb-cta-bar">
      <div className="sb-container">
        <h2 className="sb-display">Got a project<br/><span className="sb-pink">that needs to move?</span></h2>
        <div className="actions">
          <Button variant="primary" onClick={() => navigate("contact")}>Start your project</Button>
          <Button variant="secondary" onClick={() => navigate("home")}>See our process</Button>
        </div>
      </div>
    </section>
  </main>
);

Object.assign(window, { Portfolio });
