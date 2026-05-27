/* Case Study — Dark hero, Light body with sticky sidebar + result strip. */

const CaseStudy = ({ navigate }) => (
  <main data-screen-label="case-study">

    {/* DARK HERO */}
    <section className="sb-hero-dark" style={{ paddingTop: 96, paddingBottom: 0 }}>
      <div className="sb-container">
        <div className="sb-eyebrow-row">
          <span className="idx">CASE STUDY · 04</span>
          <span className="lbl" style={{ color: "#FFFFFF" }}>Northwind Industrial · Q3 Launch Film</span>
          <span className="rule" style={{ background: "rgba(255,255,255,0.12)" }}></span>
        </div>
        <h1 className="sb-display">
          A four-week sprint that<br/>
          <span className="sb-pink">moved 18 months of pipeline.</span>
        </h1>
        <p className="sb-lead" style={{ color: "#D9D9D9", maxWidth: "62ch" }}>
          When Northwind's Q3 launch shifted forward by six weeks, we delivered the brand film,
          three product modules, and twelve social cutdowns — without expanding the budget.
        </p>
        <div style={{ marginTop: 48, marginBottom: -96, position: "relative", zIndex: 1 }}>
          <ReelFrame meta={["02:14", "Brand Film", "Heavy Industry"]} anim="gears"/>
        </div>
      </div>
    </section>

    {/* Spacer to absorb the reel overflow */}
    <div style={{ height: 96, background: "#000" }}></div>

    {/* RESULT STRIP — Light, hard edge */}
    <section className="sb-container" style={{ paddingTop: 96, paddingBottom: 64 }}>
      <div className="sb-eyebrow-row">
        <span className="idx">01</span>
        <span className="lbl">Outcome</span>
        <span className="rule"></span>
      </div>
      <div className="sb-results">
        <div className="r"><div className="v">48<span className="u">h</span></div><div className="k">Final cut delivered</div></div>
        <div className="r"><div className="v">3.4<span className="u">×</span></div><div className="k">Pipeline lift QoQ</div></div>
        <div className="r"><div className="v">12</div><div className="k">Channel-tailored cuts</div></div>
        <div className="r"><div className="v">0</div><div className="k">Brand-safety incidents</div></div>
      </div>
    </section>

    {/* BODY */}
    <section className="sb-container sb-cs-body">
      <div className="col2">
        <aside className="l">
          <div className="sb-meta" style={{ marginBottom: 16 }}>Project</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div className="sb-meta" style={{ color: "#8A8A8A", fontSize: 11 }}>Client</div>
              <div className="sb-body" style={{ color: "#111", fontSize: 14, fontWeight: 600 }}>Northwind Industrial</div>
            </div>
            <div>
              <div className="sb-meta" style={{ color: "#8A8A8A", fontSize: 11 }}>Sector</div>
              <div className="sb-body" style={{ color: "#111", fontSize: 14, fontWeight: 600 }}>Heavy Industry</div>
            </div>
            <div>
              <div className="sb-meta" style={{ color: "#8A8A8A", fontSize: 11 }}>Deliverables</div>
              <div className="sb-body" style={{ color: "#111", fontSize: 14, fontWeight: 600 }}>Brand film · Product modules · Social cutdowns</div>
            </div>
            <div>
              <div className="sb-meta" style={{ color: "#8A8A8A", fontSize: 11 }}>Timeline</div>
              <div className="sb-body" style={{ color: "#111", fontSize: 14, fontWeight: 600 }}>4 weeks · Q3 2025</div>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              <Tag variant="fill">Heavy Industry</Tag>
              <Tag variant="outline">Brand Film</Tag>
              <Tag variant="outline">Motion</Tag>
            </div>
          </div>
        </aside>
        <div>
          <h3>The brief</h3>
          <p>
            Northwind's Q3 product launch — a new line of automated industrial valves — was
            pulled forward six weeks. The existing creative pipeline couldn't absorb the shift
            without doubling the budget. They needed a partner who could compress the schedule
            without compressing the quality.
          </p>

          <h3>What we did</h3>
          <p>
            We started with a one-call brief, then ran a 72-hour concept sprint with three
            directions. AI-explored, human-curated — every option was reviewed by our creative
            director before it reached the client. Two days of remote production in Hamburg,
            then a fully-remote post pipeline with daily reviews on Frame.io.
          </p>
          <p>
            The brand film led the launch. Three product modules unlocked the sales team's
            mid-funnel demos. Twelve cutdowns — sized for LinkedIn, ABM, in-event, and trade
            press — gave the launch its long tail without a second shoot.
          </p>

          <MediaFrame label="Production still" icon="image" dark={false}
                      style={{ margin: "8px 0 32px" }}/>

          <h3>What changed</h3>
          <p>
            Pipeline lifted 3.4× quarter-over-quarter. The film became the default opener for
            every executive briefing. Northwind has since extended the engagement into a
            twelve-month creative retainer.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 8 }}>
            <MediaFrame label="Key frame" icon="image" dark={false} ratio="4 / 3"/>
            <MediaFrame label="Social cutdown" icon="gallery" dark={false} ratio="4 / 3"/>
          </div>
        </div>
      </div>
    </section>

    {/* RELATED */}
    <section className="sb-container sb-section">
      <div className="sb-eyebrow-row">
        <span className="idx">02</span>
        <span className="lbl">Related work</span>
        <span className="rule"></span>
      </div>
      <div className="sb-grid-3" style={{ background: "#000", padding: 32, color: "#FFF" }}>
        {[
          { t: "Forgeworks · Annual Report", m: "Heavy Industry · 04:10", anim: "gears"   },
          { t: "RailCorp · Operations",     m: "Heavy Industry · 03:36", anim: "gears"   },
          { t: "Aether · Platform Tour",    m: "Tech · 01:30",           anim: "circuit" },
        ].map((w, i) => (
          <div key={i} className="sb-work" onClick={() => navigate("case")}>
            <ReelFrame meta={[w.m.split(" · ")[0]]} anim={w.anim}/>
            <h3 className="t">{w.t}</h3>
            <div className="m">{w.m}</div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="sb-cta-bar">
      <div className="sb-container">
        <h2 className="sb-display">Need a launch<br/><span className="sb-pink">moved this fast?</span></h2>
        <div className="actions">
          <Button variant="primary" onClick={() => navigate("contact")}>Talk to a Producer</Button>
          <Button variant="secondary" onClick={() => navigate("portfolio")}>See more case studies</Button>
        </div>
      </div>
    </section>
  </main>
);

Object.assign(window, { CaseStudy });
