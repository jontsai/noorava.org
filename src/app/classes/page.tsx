import { Footer } from "../components/Footer";
import { FeaturedEvent, PageHero, SecondaryNav } from "../components/FullSite";
import { ClassFilter } from "../components/InteractiveShowcases";
import { SiteHeader } from "../components/SiteHeader";

export const metadata = {
  title: "Classes",
  description: "NoorAva classes on reading, interpretation, music, and dance.",
};

export default function ClassesPage() {
  return (
    <>
      <main className="site-shell full-page">
        <SiteHeader />
        <PageHero
          eyebrow="Classes"
          title="Learn Rumi’s Poetry, Music, and Living Wisdom"
          body="NoorAva classes will invite students into Persian poetry, music, interpretation, and cultural context. Final dates and registration details are coming soon."
          image="/images/figma/hero.jpg"
        />
        <SecondaryNav
          label="Class filters"
          items={[
            { label: "All", href: "#classes" },
            { label: "Reading", href: "#classes" },
            { label: "Music", href: "#classes" },
            { label: "Celebration", href: "#classes" },
          ]}
        />
        <section id="classes" className="full-section">
          <div className="section-heading-row">
            <h2>All Classes</h2>
            <a className="text-link" href="/experience/">Reading · Interpretation & Analysis · Music · Dance</a>
          </div>
          <ClassFilter />
        </section>
        <FeaturedEvent compact />
      </main>
      <Footer />
    </>
  );
}
