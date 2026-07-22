import { navItems } from "../content";

type SiteHeaderProps = {
  mode?: "light" | "dark" | "purple";
};

export function SiteHeader({ mode = "purple" }: SiteHeaderProps) {
  const isLight = mode === "light";

  return (
    <header className={`site-header site-header-${mode}`}>
      <a className="site-header-logo" href="/" aria-label="NoorAva home">
        <img
          src={isLight ? "/images/figma/noorava-logo-purple.svg" : "/images/figma/noorava-logo.svg"}
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
