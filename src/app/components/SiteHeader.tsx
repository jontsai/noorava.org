import { navItems } from "../content";

type SiteHeaderProps = {
  mode?: "light" | "dark";
};

export function SiteHeader({ mode = "light" }: SiteHeaderProps) {
  return (
    <header className={`site-header ${mode === "dark" ? "site-header-dark" : ""}`}>
      <a className="site-header-logo" href="/" aria-label="NoorAva home">
        <img
          src={mode === "dark" ? "/images/figma/noorava-logo.svg" : "/images/figma/noorava-logo-purple.svg"}
          alt="NoorAva"
        />
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} className={item.cta ? "nav-cta" : undefined} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
