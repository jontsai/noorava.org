import { Footer } from "../components/Footer";
import { ClassList, FeaturedEvent, PageHero } from "../components/FullSite";
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
          title="Classes Lorem Ipsum Sit"
          body="The full-site Figma frame includes class landing and detail pages. Final class copy can replace these placeholders when programming is confirmed."
          image="/images/figma/hero.jpg"
        />
        <section className="full-section">
          <div className="section-heading-row">
            <h2>All Classes</h2>
            <a className="text-link" href="/experience/">Reading · Interpretation & Analysis · Music · Dance</a>
          </div>
          <ClassList />
        </section>
        <FeaturedEvent compact />
      </main>
      <Footer />
    </>
  );
}
