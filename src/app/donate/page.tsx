import { Footer } from "../components/Footer";
import { SiteHeader } from "../components/SiteHeader";
import { DonationForm } from "./DonationForm";

export const metadata = {
  title: "Donate",
  description: "Make a tax-deductible donation to NoorAva.",
};

export default function DonatePage() {
  return (
    <>
      <main className="site-shell donate-page">
        <SiteHeader />
        <section className="donate-hero" aria-labelledby="donate-heading">
          <a href="/" aria-label="NoorAva home">
            <img
              className="logo donate-logo"
              src="/images/figma/noorava-logo.svg"
              alt="NoorAva"
            />
          </a>
          <div className="donate-heading-block">
            <p className="kicker">Support Our Work</p>
            <h1 id="donate-heading">Make a Tax Deductible Donation</h1>
          </div>
          <a className="support-pill donate-events-pill" href="/events/">
            Upcoming Events
          </a>
        </section>

        <div className="announcement">Stay tuned for our new website!</div>

        <section className="donation-area" aria-labelledby="donation-heading">
          <div className="donation-intro">
            <h2 id="donation-heading">Your Gift Makes a Difference</h2>
            <p>
              Your generosity keeps culture alive. Every dollar directly
              supports our programs, events, and community.
            </p>
          </div>
          <DonationForm />
        </section>

        <section className="other-ways" aria-labelledby="other-ways-heading">
          <h2 id="other-ways-heading">Other Ways to Give</h2>
          <div className="giving-options">
            <article>
              <h3>Corporate Matching</h3>
              <p>
                Many employers match charitable donations. Check with your HR
                department.
              </p>
            </article>
            <article>
              <h3>By Check</h3>
              <p>Make payable to “NoorAva” and mail to our office address.</p>
            </article>
          </div>
        </section>

        <section className="questions-band" aria-label="Questions">
          <p>Questions?</p>
          <p>
            Email us at <a href="mailto:info@noorava.org">info@noorava.org</a>
          </p>
        </section>
      </main>
      <Footer homeHref="/" />
    </>
  );
}
