"use client";

import { useEffect, useState } from "react";

import { navItems } from "../content";

type SiteHeaderProps = {
  mode?: "light" | "dark" | "purple";
};

export function SiteHeader({ mode = "purple" }: SiteHeaderProps) {
  const isLight = mode === "light";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuEnhanced, setIsMenuEnhanced] = useState(false);
  const navId = `site-navigation-${mode}`;

  useEffect(() => {
    setIsMenuEnhanced(true);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    document.body.classList.add("site-menu-scroll-lock");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("site-menu-scroll-lock");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`site-header site-header-${mode} ${isMenuEnhanced ? "is-menu-enhanced" : ""} ${isMenuOpen ? "is-menu-open" : ""}`}
    >
      <a className="site-header-logo" href="/" aria-label="NoorAva home">
        <img
          src={
            isLight
              ? "/images/figma/noorava-logo-purple.svg"
              : "/images/figma/noorava-logo.svg"
          }
          alt="NoorAva"
        />
      </a>
      <button
        className="site-menu-toggle"
        type="button"
        aria-controls={navId}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="site-menu-toggle-label">Menu</span>
        <span className="site-menu-toggle-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <button
        className="site-menu-backdrop"
        type="button"
        aria-label="Close menu"
        aria-hidden={!isMenuOpen}
        hidden={!isMenuOpen}
        onClick={closeMenu}
        tabIndex={isMenuOpen ? 0 : -1}
      />
      <nav id={navId} className="site-nav" aria-label="Main navigation">
        <div className="site-nav-mobile-header">
          <span>Menu</span>
          <button className="site-menu-close" type="button" onClick={closeMenu}>
            Close
          </button>
        </div>
        {navItems.map((item) => (
          <div key={item.href} className={item.children ? "site-nav-item has-flyout" : "site-nav-item"}>
            <a
              className={item.cta ? "nav-cta" : undefined}
              href={item.href}
              onClick={closeMenu}
              aria-haspopup={item.children ? "true" : undefined}
            >
              {item.label}
            </a>
            {item.children ? (
              <div className="site-nav-flyout" aria-label={`${item.label} links`}>
                {item.children.map((child) => (
                  <a key={child.href} href={child.href} onClick={closeMenu}>
                    {child.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </nav>
    </header>
  );
}
