import { Footer } from "../components/Footer";
import { PageHero, SupportCta } from "../components/FullSite";
import { SiteHeader } from "../components/SiteHeader";
import { joinBenefits } from "../content";

export const metadata = {
  title: "Join Us",
  description: "Join the NoorAva community.",
};

export default function JoinPage() {
  return (
    <>
      <main className="site-shell full-page">
        <SiteHeader />
        <PageHero
          eyebrow="Join Us"
          title="Be Part of Something Meaningful"
          body="Join our community, attend our events, or make a donation. Every contribution — of time, talent, or treasure — makes a difference."
          image="/images/figma/hero.jpg"
        />
        <section className="full-section sand-section">
          <div className="join-benefits">
            {joinBenefits.map((benefit) => (
              <article key={benefit.title} className="pillar-card">
                <h3>{benefit.title}</h3>
                <div>{benefit.body}</div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="full-section join-form-section" aria-labelledby="join-heading">
          <div>
            <p className="full-eyebrow">Sign Up — It’s Free</p>
            <h2 id="join-heading">Join Our Mailing List</h2>
            <p>Static form wiring is pending; for now this opens an email draft so visitors can reach NoorAva immediately.</p>
          </div>
          <form className="join-form" action="mailto:info@noorava.org" method="post" encType="text/plain">
            <label>First Name *<input name="firstName" placeholder="Jane" required /></label>
            <label>Last Name *<input name="lastName" placeholder="Smith" required /></label>
            <label>Email Address *<input name="email" type="email" placeholder="jane@example.com" required /></label>
            <label>How would you like to engage?<textarea name="message" placeholder="Events, classes, volunteering, donations…" /></label>
            <button className="button" type="submit">Submit</button>
          </form>
        </section>
        <SupportCta />
      </main>
      <Footer />
    </>
  );
}
