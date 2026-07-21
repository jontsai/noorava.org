export const metadata = {
  title: 'Donate',
  description: 'Make a tax-deductible donation to NoorAva.',
};

export default function DonatePage() {
  return (
    <main className="site-shell donate-page">
      <section className="donate-hero">
        <img className="logo logo-white" src="/images/figma/noorava-logo.svg" alt="NoorAva" />
        <div>
          <p className="kicker light">Support Our Work</p>
          <h1>Make a Tax Deductible Donation</h1>
          <p>Where Culture Lives, Community Thrives</p>
        </div>
        <a className="button pale" href="/">Upcoming Events</a>
      </section>

      <section className="donation-card" aria-labelledby="donation-heading">
        <div className="donation-intro">
          <h2 id="donation-heading">Your Gift Makes a Difference</h2>
          <p>Your generosity keeps culture alive. Every dollar directly supports our programs, events, and community.</p>
        </div>

        <form className="donation-form">
          <fieldset>
            <legend>Donation Frequency</legend>
            <div className="segmented">
              <label><input type="radio" name="frequency" defaultChecked /> <span>One-Time</span></label>
              <label><input type="radio" name="frequency" /> <span>Monthly</span></label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Donation Amount</legend>
            <div className="amount-grid">
              {['$100', '$250', '$500', 'Custom'].map((amount) => (
                <label key={amount} className={amount === '$250' ? 'selected' : ''}>
                  <input type="radio" name="amount" defaultChecked={amount === '$250'} />
                  <span>{amount}</span>
                </label>
              ))}
            </div>
            <label className="custom-amount"><span>$</span><input inputMode="decimal" placeholder="Enter custom amount" /></label>
          </fieldset>

          <fieldset>
            <legend>Payment Method</legend>
            <div className="payment-grid">
              <label><input type="radio" name="payment" defaultChecked /> <strong className="paypal">PayPal</strong><span>PayPal / Credit Card</span></label>
              <label><input type="radio" name="payment" /> <strong className="stripe">Stripe</strong><span>Credit / Debit Card</span></label>
            </div>
          </fieldset>

          <div className="summary-row">
            <div><strong>One-Time Donation</strong><span>via PayPal</span></div>
            <strong>$250.00</strong>
          </div>

          <button className="donate-button" type="button">♡ Donate $50.00 Now ↗</button>
          <p className="secure-note">You will be redirected to PayPal to complete your donation securely. NoorAva is a registered 501(c)(3) nonprofit. Your donation may be tax-deductible.</p>
        </form>
      </section>

      <section className="other-ways">
        <h2>Other Ways to Give</h2>
        <article>
          <h3>Corporate Matching</h3>
          <p>Many employers match charitable donations. Check with your HR department.</p>
        </article>
        <article>
          <h3>By Check</h3>
          <p>Make payable to “NoorAva” and mail to our office address.</p>
        </article>
        <p className="questions">Questions?<br />Email us at <a href="mailto:info@noorava.org">info@noorava.org</a></p>
      </section>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>© 2026 NoorAva. All rights reserved.</div>
      <nav aria-label="Footer navigation">
        <a href="/">What We Do</a>
        <a href="/">Learning</a>
        <a href="/">Events</a>
        <a href="/">About Us</a>
      </nav>
      <nav aria-label="Support navigation">
        <a href="/donate/">Donate</a>
        <a href="mailto:info@noorava.org?subject=Mailing%20list">Join Our Mailing List</a>
        <a href="mailto:info@noorava.org">Contact Us</a>
      </nav>
      <div>501(c)(3) Non-Profit Organization</div>
    </footer>
  );
}
