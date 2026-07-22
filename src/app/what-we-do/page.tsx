import { Footer } from "../components/Footer";
import { FeaturedEvent, PageHero, PillarGrid, SectionIntro, SupportCta } from "../components/FullSite";
import { SiteHeader } from "../components/SiteHeader";
import { longMission } from "../content";

export const metadata = {
  title: "What We Do",
  description: "Holistic exploration of Rumi’s work through reading, interpretation, music, and dance.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <main className="site-shell full-page">
        <SiteHeader />
        <PageHero
          eyebrow="What we do"
          title="Holistic exploration of Rumi’s work"
          body="NoorAva brings poetry, music, movement, and wisdom together so Rumi is not only studied, but encountered."
          image="/images/figma/hero.jpg"
        />
        <section className="full-section two-column">
          <SectionIntro eyebrow="True Understanding" title="A living encounter with wisdom" />
          <div className="prose-block">
            <p>{longMission}</p>
            <p>Hekmat-e Khosrovani is the wisdom of being, not merely knowing — a path where light, justice, beauty, and truth are inseparable. NoorAva draws on this cultural and spiritual lineage to cultivate inner awakening, ethical refinement, and unity with the greater order of existence.</p>
            <p>We also seek to form a council of experts devoted to revitalizing Iranian culture and values within the Iranian-American community through performances, academic symposia, research-based gatherings, and spaces for collective renewal.</p>
          </div>
        </section>
        <section className="full-section sand-section">
          <SectionIntro eyebrow="Reading · Music · Movement" title="The work takes shape in four dimensions" />
          <PillarGrid />
        </section>
        <FeaturedEvent compact />
        <SupportCta />
      </main>
      <Footer />
    </>
  );
}
