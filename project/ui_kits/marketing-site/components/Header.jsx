/* Global Header. Light by default, Dark variant when prop dark = true.
   Frosted glass on scroll. Full nav on desktop; hamburger + drawer ≤980px. */

const Header = ({ current, navigate, dark = false }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const drawerRef = React.useRef(null);

  // Lock body scroll while the mobile drawer is open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // A11y: Esc closes, focus moves into the drawer, Tab is trapped inside it
  React.useEffect(() => {
    if (!open || !drawerRef.current) return;
    const node = drawerRef.current;
    const items = node.querySelectorAll('a, button');
    if (items.length) items[0].focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); return; }
      if (e.key === 'Tab' && items.length) {
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const nav = [
    { id: "home", label: "Home" },
    { id: "tech", label: "Tech" },
    { id: "industry", label: "Heavy Industry" },
    { id: "health", label: "Healthcare" },
    { id: "studio", label: "Studio Access" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
  ];
  // Desktop top bar stays lean; the drawer carries the full list.
  const topNav = nav.filter(n => n.id !== "about");

  const go = (id) => { setOpen(false); navigate(id); };
  const logoSrc = "../../assets/logos/seven-bison-logo-pink.svg";

  return (
    <header className={`sb-header ${dark ? "dark" : ""}${scrolled ? " is-scrolled" : ""}`}>
      <div className="sb-container sb-header-inner">
        <Logo src={logoSrc} onClick={() => go("home")} height={36}/>

        <nav className="sb-nav">
          {topNav.map(item => (
            <a key={item.id}
               className={current === item.id ? "is-active" : ""}
               onClick={() => go(item.id)}>
              {item.label}
            </a>
          ))}
          <Button variant={dark ? "secondary-dark" : "primary"} onClick={() => go("contact")}>
            Talk to our team
          </Button>
        </nav>

        {/* Hamburger — shown ≤980px via CSS */}
        <button className="sb-burger" aria-label="Menu" aria-expanded={open}
                onClick={() => setOpen(o => !o)}>
          <span className={open ? "is-open" : ""}></span>
          <span className={open ? "is-open" : ""}></span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`sb-drawer ${open ? "is-open" : ""}`} aria-hidden={!open} onClick={() => setOpen(false)}>
        <nav className="sb-drawer-inner" ref={drawerRef} onClick={(e) => e.stopPropagation()}>
          {nav.map(item => (
            <a key={item.id} tabIndex={open ? 0 : -1}
               className={current === item.id ? "is-active" : ""}
               onClick={() => go(item.id)}>
              {item.label}
            </a>
          ))}
          <Button variant="primary" onClick={() => go("contact")}>Talk to our team</Button>
        </nav>
      </div>
    </header>
  );
};

Object.assign(window, { Header });
