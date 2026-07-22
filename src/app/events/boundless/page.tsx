import { Footer } from "../../components/Footer";
import { PerformerGrid, SupportCta } from "../../components/FullSite";
import { SiteHeader } from "../../components/SiteHeader";
import { featuredEvent } from "../../content";

export const metadata = {
  title: "Boundless",
  description: "NoorAva presents Boundless, an evening of live Persian musical performance.",
};

export default function BoundlessEventPage() {
  return (
    <>
      <main className="site-shell full-page event-detail-page">
        <section className="event-detail-hero" aria-labelledby="event-heading">
          <SiteHeader mode="dark" />
          <div className="event-detail-grid">
            <div>
              <p className="full-eyebrow">NoorAva Presents</p>
              <h1 id="event-heading">{featuredEvent.title}</h1>
              <p className="feature-subtitle">{featuredEvent.subtitle}</p>
              <p>{featuredEvent.date}</p>
              <a id="tickets" className="button" href="mailto:info@noorava.org?subject=Boundless%20tickets">Get Tickets</a>
            </div>
            <img src="/images/figma/event.jpg" alt="Boundless concert poster" />
          </div>
        </section>
        <nav className="anchor-nav" aria-label="Event sections">
          <a href="#about-event">About the Event</a>
          <a href="#performers">Performers</a>
          <a href="#location">Location</a>
        </nav>
        <section id="about-event" className="full-section two-column">
          <div>
            <p className="full-eyebrow">About the Event</p>
            <h2>The boundless nature of the human spirit</h2>
          </div>
          <div className="prose-block">
            <p>{featuredEvent.detail}</p>
            <p>The first set explores the ancient modal traditions of Persia, drawing from a musical lineage preserved for thousands of years. The second set presents contemporary Persian classical compositions alongside timeless songs of love, longing, and devotion.</p>
          </div>
        </section>
        <section id="performers" className="full-section sand-section">
          <div className="section-heading-row">
            <h2>Performers</h2>
            <span>platforms</span>
          </div>
          <PerformerGrid />
        </section>
        <section id="location" className="full-section two-column location-panel">
          <div>
            <p className="full-eyebrow">Location</p>
            <h2>Montalvo Arts Center</h2>
            <p>The Carriage House Theatre</p>
            <address>{featuredEvent.location}</address>
          </div>
          <div className="prose-block">
            <p>Box Office Hours: Mon–Fri 10 am – 4 pm</p>
            <p>Call Us: 408-961-5858</p>
            <a className="button" href="https://maps.google.com/?q=15400%20Montalvo%20Rd.%20Saratoga%2C%20CA%2095070">Get Directions</a>
          </div>
        </section>
        <SupportCta />
      </main>
      <Footer />
    </>
  );
}
