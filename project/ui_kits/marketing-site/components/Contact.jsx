/* Contact — book a call / email. Brief §4 §12: Calendly to Szymon + email
   fallback. Light chrome. Form is a static prototype (no submit handler). */

const Contact = ({ navigate }) => (
  <main data-screen-label="contact">

    {/* HERO */}
    <section className="sb-container sb-section">
      <div className="sb-eyebrow-row">
        <span className="idx">CONTACT</span>
        <span className="lbl">Start a project</span>
        <span className="rule"></span>
      </div>
      <h1 className="sb-display" style={{ maxWidth: "16ch", marginTop: 8 }}>
        Tell us about<br/><span className="sb-pink">your project.</span>
      </h1>
      <p className="sb-lead" style={{ maxWidth: "52ch" }}>
        Every intro call goes through Szymon directly. Bring a brief, a rough idea, or just a
        deadline — we'll tell you honestly whether and how we can help.
      </p>
    </section>

    {/* TWO PATHS */}
    <section className="sb-container" style={{ paddingBottom: 96 }}>
      <div className="sb-grid-2" style={{ gap: 32, alignItems: "start" }}>

        {/* Book a call */}
        <div className="sb-card">
          <div style={{ color: "var(--sb-pink)", marginBottom: 20 }}><Icon name="clock" size={28}/></div>
          <h3 className="sb-h3" style={{ marginBottom: 8 }}>Book a discovery call</h3>
          <p className="sb-body" style={{ marginBottom: 16 }}>
            A 30-minute call with the founder. Background in news editing at Bloomberg and Getty
            Images before building the studio — he takes all intro calls personally.
          </p>
          <div className="sb-quote-attr" style={{ marginBottom: 24 }}>
            <AvatarFrame size={48}/>
            <div>
              <div className="name">Szymon Wojewski</div>
              <div className="role">Founder · Seven Bison</div>
            </div>
          </div>
          <Button variant="primary" onClick={() => {}}>Book a call →</Button>
        </div>

        {/* Send a message */}
        <div className="sb-card">
          <div style={{ color: "var(--sb-pink)", marginBottom: 20 }}><Icon name="arrow" size={28}/></div>
          <h3 className="sb-h3" style={{ marginBottom: 16 }}>Send a message</h3>
          <form className="sb-form" onSubmit={(e) => e.preventDefault()}>
            <label className="sb-field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" autoComplete="name"/>
            </label>
            <label className="sb-field">
              <span>Work email</span>
              <input type="email" name="email" placeholder="you@company.com" autoComplete="email"/>
            </label>
            <label className="sb-field">
              <span>Project</span>
              <textarea name="message" rows="4" placeholder="What are you making, and when do you need it?"></textarea>
            </label>
            <Button variant="primary" onClick={() => {}}>Send message</Button>
          </form>
          <p className="sb-body-sm" style={{ marginTop: 16 }}>
            Prefer email? <a href="mailto:hello@sevenbison.com" style={{ color: "var(--sb-pink)" }}>hello@sevenbison.com</a>
          </p>
        </div>
      </div>
    </section>
  </main>
);

Object.assign(window, { Contact });
