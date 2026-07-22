type FooterProps = {
  homeHref?: string;
};

export function Footer({ homeHref = "/" }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        © 2026 NoorAva. All rights reserved.
      </div>
      <nav aria-label="Footer navigation">
        <a href={`${homeHref}#what-we-do`}>What We Do</a>
        <a href={`${homeHref}#events`}>Events</a>
        <a href={`${homeHref}#about`}>About Us</a>
      </nav>
      <nav aria-label="Support navigation">
        <a href="/donate/">Donate</a>
        <a href="mailto:info@noorava.org?subject=Join%20NoorAva%20mailing%20list">
          Join Our Mailing List
        </a>
        <a href="mailto:info@noorava.org">Contact Us</a>
      </nav>
      <div className="footer-status">501(c)(3) Non-Profit Organization</div>
    </footer>
  );
}
