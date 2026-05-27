/* Global Header. Light by default, Dark variant when prop dark = true. */

const Header = ({ current, navigate, dark = false }) => {
  const nav = [
    { id: "home", label: "Home" },
    { id: "sector", label: "Sectors" },
    { id: "portfolio", label: "Portfolio" },
    { id: "case", label: "Case study" },
  ];
  const logoSrc = dark
    ? "../../assets/logos/seven-bison-logo-pink.png"
    : "../../assets/logos/seven-bison-logo-pink.png";
  return (
    <header className={`sb-header ${dark ? "dark" : ""}`}>
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
