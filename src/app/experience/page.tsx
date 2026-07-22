import { Footer } from "../components/Footer";
import { FeaturedEvent, PageHero, PillarGrid, SectionIntro, SupportCta } from "../components/FullSite";
import { SiteHeader } from "../components/SiteHeader";

export const metadata = {
  title: "Experience",
  description: "Understanding Rumi through reading, interpretation, music, and dance.",
};

export default function ExperiencePage() {
  return (
    <>
      <main className="site-shell full-page">
        <SiteHeader />
        <PageHero
          eyebrow="Experience"
          title="Understanding Rumi and His Work"
          body="Poetry, music, and movement become a single path of presence, reflection, and transformation."
          image="/images/figma/platforms.jpg"
        />
        <section className="full-section sand-section">
          <PillarGrid />
        </section>
        <section className="full-section two-column">
          <SectionIntro eyebrow="Reading" title="Poetry is sound before it is sense" />
          <div className="prose-block">
            <p>The first step in understanding Rumi’s work is the ability to read the poems correctly. Unlike ordinary text, poetry is not meant to be rushed or consumed for information. It asks to be entered.</p>
            <p>Proper reading begins with slowness — allowing each word, pause, and image to breathe. Rhythm, cadence, silence, repetition, and musicality shape meaning as much as words themselves.</p>
          </div>
        </section>
        <section className="full-section two-column alt">
          <SectionIntro eyebrow="Interpretation & Analysis" title="The soul and architecture of a poem" />
          <div className="prose-block">
            <p>Interpretation is the art of listening inwardly. Analysis is the art of seeing clearly. When done properly, analysis should never reduce a poem to mechanics, and interpretation should never drift into vagueness.</p>
            <p>With poets like Rumi, interpretation becomes a contemplative act, and analysis becomes a doorway rather than a conclusion. His poetry is not meant to be solved — it is meant to be entered.</p>
          </div>
        </section>
        <FeaturedEvent compact />
        <SupportCta />
      </main>
      <Footer />
    </>
  );
}
