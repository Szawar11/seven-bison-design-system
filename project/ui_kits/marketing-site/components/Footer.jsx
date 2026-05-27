const Footer = ({ navigate }) => (
  <footer className="sb-footer">
    <div className="sb-container">
      <div className="sb-footer-grid">
        <div>
          <img src="../../assets/logos/seven-bison-logo-pink.svg" alt="" style={{ height: 36, display: "block", marginBottom: 24 }}/>
          <p className="sb-body" style={{ maxWidth: "32ch" }}>
            Premium video, motion design and animation for B2B brands in complex, regulated, and visually-challenged industries.
          </p>
        </div>
        <div>
          <h4>Sectors</h4>
          <a onClick={() => navigate("tech")}>Tech</a>
          <a onClick={() => navigate("industry")}>Heavy Industry</a>
          <a onClick={() => navigate("health")}>Healthcare &amp; Pharma</a>
        </div>
        <div>
          <h4>Studio</h4>
          <a>About</a>
          <a onClick={() => navigate("portfolio")}>Portfolio</a>
          <a>Studio Access</a>
          <a>How we work</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a>Talk to our team</a>
          <a>Request a quote</a>
          <a>Book a discovery call</a>
          <a>hello@sevenbison.com</a>
        </div>
      </div>
      <div className="bottom">
        <span>© 2026 Seven Bison Studio</span>
        <span>AI-native production. Human craft.</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
