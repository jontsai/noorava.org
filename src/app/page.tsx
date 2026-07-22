import { Footer } from "./components/Footer";
import { FeaturedEvent, PillarGrid, SectionIntro, SupportCta } from "./components/FullSite";
import { SiteHeader } from "./components/SiteHeader";
import { longMission, missionIntro } from "./content";

export default function Home() {
  return (
    <>
      <main className="site-shell full-site-home">
        <section className="full-home-hero" aria-labelledby="home-heading">
          <SiteHeader mode="dark" />
          <div className="full-home-copy">
            <p className="full-eyebrow">نورآوا</p>
            <h1 id="home-heading">Where Rumi’s Poetry Comes Alive</h1>
            <p>{missionIntro}</p>
            <div className="button-row">
              <a className="button" href="/events/">Upcoming Events</a>
              <a className="button button-outline light" href="/what-we-do/">About Us</a>
            </div>
          </div>
        </section>

        <section className="value-strip" aria-label="NoorAva values">
          {[
            "Preservation",
            "Education",
            "Celebration",
            "Connection",
            "Community",
            "Vision",
          ].map((value) => <span key={value}>{value}</span>)}
        </section>

        <section className="full-section two-column" aria-labelledby="vision-heading">
          <SectionIntro eyebrow="Community Vision" title="Rumi’s legacy is a unique and timeless treasure" body="Studied across centuries and cultures, its universality remains undisputed." />
          <div className="prose-block">
            <p>{longMission}</p>
            <p>NoorAva endeavors to draw upon Iranian cultural and national heritage to help shape a cultivated and conscious national identity. We create spaces for reflection, dialogue, and collective renewal.</p>
          </div>
        </section>

        <section className="full-section sand-section" aria-labelledby="learn-heading">
          <SectionIntro eyebrow="Learn" title="A multidimensional path of understanding" body="NoorAva believes true understanding requires a holistic approach that embraces the interconnectedness of thought, sound, movement, and meaning." />
          <PillarGrid />
          <div className="button-row centered">
            <a className="button" href="/classes/">View all Classes</a>
            <a className="button button-outline" href="/experience/">Explore the Experience</a>
          </div>
        </section>

        <FeaturedEvent />
        <SupportCta />
      </main>
      <Footer />
    </>
  );
}
