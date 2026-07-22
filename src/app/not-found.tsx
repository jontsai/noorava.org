import { Footer } from "./components/Footer";
import { SiteHeader } from "./components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <main className="site-shell full-page">
        <SiteHeader />
        <section className="full-section centered" aria-labelledby="not-found-heading">
          <p className="full-eyebrow">Page Not Found</p>
          <h1 id="not-found-heading">Let’s get you back to NoorAva.</h1>
          <p>
            The page you’re looking for may have moved while the new NoorAva site
            is being finished.
          </p>
          <div className="button-row centered">
            <a className="button" href="/">Return Home</a>
            <a className="button button-outline" href="/events/">Upcoming Events</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
