import { Footer } from "../../components/Footer";
import { FeaturedEvent, PageHero } from "../../components/FullSite";
import { SiteHeader } from "../../components/SiteHeader";
import { classes } from "../../content";

export const metadata = {
  title: "Class Details",
  description: "NoorAva class details.",
};

export default function ClassDetailPage() {
  const item = classes[0];

  return (
    <>
      <main className="site-shell full-page">
        <SiteHeader />
        <PageHero
          eyebrow="Upcoming Class"
          title="Rumi Poetry & Music Classes"
          body="A NoorAva learning series on Rumi’s poetry, interpretation, and Persian musical tradition. Final schedule and registration details are coming soon."
          image="/images/figma/platforms.jpg"
        />
        <section className="full-section two-column">
          <div>
            <p className="full-eyebrow">Upcoming Class</p>
            <h2>{item.title}</h2>
            <p className="feature-subtitle">with {item.instructor}</p>
            <p>{item.time}</p>
            <div className="tag-row">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="prose-block">
            <p>NoorAva is preparing class offerings that bring together poetry, music, language, and cultural reflection. This page is ready for the final class description, session outline, enrollment link, and pricing once the programming is confirmed.</p>
            <p>Join the NoorAva mailing list to hear when class dates and registration open.</p>
            <a className="button" href="/join/">Join the mailing list</a>
          </div>
        </section>
        <FeaturedEvent compact />
      </main>
      <Footer />
    </>
  );
}
