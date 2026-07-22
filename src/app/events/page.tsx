import { Footer } from "../components/Footer";
import { ClassList, FeaturedEvent, PageHero, SupportCta } from "../components/FullSite";
import { SiteHeader } from "../components/SiteHeader";
import { additionalEvents } from "../content";

export const metadata = {
  title: "Events",
  description: "Upcoming NoorAva events and performances.",
};

export default function EventsPage() {
  return (
    <>
      <main className="site-shell full-page">
        <SiteHeader />
        <PageHero
          eyebrow="NoorAva Presents"
          title="Upcoming Events"
          body="Concerts, gatherings, and learning experiences that bring Persian music, poetry, and wisdom into shared space."
          image="/images/figma/event.jpg"
        />
        <FeaturedEvent />
        <section className="full-section event-list-section">
          {additionalEvents.map((event) => (
            <article key={event.title} className="event-row-card">
              <p className="feature-date">{event.date}</p>
              <h2>{event.title}</h2>
              <p>{event.subtitle}</p>
              <a className="text-link" href="mailto:info@noorava.org?subject=NoorAva%20event%20updates">Learn more</a>
            </article>
          ))}
        </section>
        <section className="full-section sand-section">
          <div className="section-heading-row">
            <h2>Learn with Us</h2>
            <a className="text-link" href="/classes/">All Classes</a>
          </div>
          <ClassList />
        </section>
        <SupportCta />
      </main>
      <Footer />
    </>
  );
}
