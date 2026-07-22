import { Footer } from "../components/Footer";
import { PageHero, SupportCta } from "../components/FullSite";
import { SiteHeader } from "../components/SiteHeader";
import { founders } from "../content";

export const metadata = {
  title: "Our Founders",
  description: "Meet NoorAva co-founders Alireza Shahmohammadi and Kamyar Faron.",
};

export default function AboutPage() {
  return (
    <>
      <main className="site-shell full-page">
        <SiteHeader />
        <PageHero
          eyebrow="About"
          title="Our Founders"
          body="NoorAva is guided by artists, scholars, and builders devoted to preserving Persian music, philosophy, and wisdom traditions for contemporary audiences."
          image="/images/figma/performer-alireza.jpg"
        />
        <section className="founder-section" aria-labelledby="founders-heading">
          <h2 id="founders-heading" className="sr-only">Founders</h2>
          {founders.map((founder) => (
            <article key={founder.name} className="founder-profile">
              <img src={founder.image} alt={founder.name} />
              <div>
                <p className="full-eyebrow">{founder.role}</p>
                <h2>{founder.name}</h2>
                <p>{founder.body}</p>
                {founder.link ? <a className="text-link" href="https://open.spotify.com/search/Alireza%20Shahmohammadi">{founder.link}</a> : null}
              </div>
            </article>
          ))}
        </section>
        <SupportCta />
      </main>
      <Footer />
    </>
  );
}
