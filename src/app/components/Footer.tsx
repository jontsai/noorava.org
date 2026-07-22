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
        <a href="/what-we-do/">What We Do</a>
        <a href="/events/">Events</a>
        <a href="/experience/">Learning</a>
        <a href="/about/">About Us</a>
      </nav>
      <nav aria-label="Support navigation">
        <a href="/donate/">Donate</a>
        <a href="/join/">Join Our Mailing List</a>
        <a href="mailto:info@noorava.org">Contact Us</a>
      </nav>
      <div className="footer-status">501(c)(3) Non-Profit Organization</div>
    </footer>
  );
}
