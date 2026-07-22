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
          title="Name of Class and Class Details Lorem Ipsum Sit Dolor"
          body="Need class details. This route now exists to match the Figma full-site class-detail frame and can be filled with final curriculum copy."
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
            <p>This page corresponds to the Figma class detail frame. The source design still uses placeholder class title and body copy, so this page intentionally keeps that placeholder state visible instead of inventing final curriculum content.</p>
            <p>When NoorAva confirms the class description, session outline, teacher bio, enrollment URL, and pricing, those details can drop into this layout.</p>
            <a className="button" href="/join/">Join the mailing list</a>
          </div>
        </section>
        <FeaturedEvent compact />
      </main>
      <Footer />
    </>
  );
}
