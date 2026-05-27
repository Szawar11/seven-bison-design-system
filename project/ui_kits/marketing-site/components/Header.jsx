/* Global Header. Light by default, Dark variant when prop dark = true. */

const Header = ({ current, navigate, dark = false }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { id: "home", label: "Home" },
    { id: "tech", label: "Tech" },
    { id: "industry", label: "Heavy Industry" },
    { id: "health", label: "Healthcare" },
    { id: "portfolio", label: "Portfolio" },
  ];
  const logoSrc = dark
    ? "../../assets/logos/seven-bison-logo-pink.svg"
    : "../../assets/logos/seven-bison-logo-pink.svg";
  return (
    <header className={`sb-header ${dark ? "dark" : ""}${scrolled ? " is-scrolled" : ""}`}>
      <div className="sb-container sb-header-inner">
        <Logo src={logoSrc} onClick={() => navigate("home")} height={36}/>
        <nav className="sb-nav">
          {nav.map(item => (
            <a key={item.id}
               className={current === item.id ? "is-active" : ""}
               onClick={() => navigate(item.id)}>
              {item.label}
            </a>
          ))}
          <Button variant={dark ? "secondary-dark" : "primary"} onClick={() => navigate("contact")}>
            Talk to our team
          </Button>
        </nav>
      </div>
    </header>
  );
};

Object.assign(window, { Header });
