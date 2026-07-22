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
      <nav id={navId} className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            className={item.cta ? "nav-cta" : undefined}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
