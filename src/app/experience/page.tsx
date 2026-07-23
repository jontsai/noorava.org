import { Footer } from "../components/Footer";
import { FeaturedEvent, PageHero, PillarGrid, SecondaryNav, SupportCta } from "../components/FullSite";
import { ExperienceMediaShowcase } from "../components/InteractiveShowcases";
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
        <SecondaryNav
          label="Experience sections"
          items={[
            { label: "Reading", href: "#reading" },
            { label: "Interpretation", href: "#interpretation" },
            { label: "Music", href: "#music" },
            { label: "Dance", href: "#dance" },
          ]}
        />
        <section className="full-section sand-section">
          <PillarGrid />
        </section>
        <ExperienceMediaShowcase />
        <FeaturedEvent compact />
        <SupportCta />
      </main>
      <Footer />
    </>
  );
}
