import { Footer } from "./components/Footer";

const performers = [
  {
    name: "Alireza Shahmohammadi",
    role: "Composer, singer, classic Persian music",
    image: "/images/figma/performer-alireza.jpg",
    copy: "Alireza Shahmohammadi is an Iranian composer, vocalist, educator, and Rumi scholar whose work is deeply grounded in the Persian classical tradition. A student of Hatam Asgari Farahani, Mohammad Reza Shajarian, and Mohammad Reza Lotfi, Shahmohammadi has released Navazheh, Sug-e-Bahar, and Majnoon, and has appeared in distinguished international performances and collaborations with artists including tabla virtuoso Pandit Swapan Chaudhuri and Theodore Bikel.",
  },
  {
    name: "Pejman Hadadi",
    role: "Percussionist",
    image: "/images/figma/performer-pejman.jpg",
    copy: "Pejman Hadadi is a Tehran-born Iranian percussionist renowned for innovative work in Persian rhythm, beginning tombak studies at age 10 and later expanding to the daf to develop a versatile command of Persian percussion traditions. After immigrating to the United States in 1989, Hadadi built an international career through major collaborations and touring, including joining the acclaimed Dastan Ensemble in 1995 and performing and recording widely in leading concert halls. Hadadi has also played a central role in large-scale projects like ZARBANG and cross-cultural collaborations, and is known for research-driven rhythmic exploration, signature techniques, instrument innovations, teaching, and work as a UCLA ethnomusicology lecturer.",
  },
  {
    name: "Behfar Bahadoran",
    role: "Tar, Setar, multi-instrumentalist",
    image: "/images/figma/performer-behfar.jpg",
    copy: "Born in Tehran in 1987, Behfar Bahadoran is a multi-instrumentalist and interdisciplinary artist rooted in Persian classical, regional, and Kurdish mystic traditions. Trained in Iranian-style violin, daf, tar, and setar, Bahadoran has studied with major masters, earned a BFA from the Maryland Institute College of Art, founded Pejvâk Ensemble, co-founded Sorvâd, toured across North America, and performed at the Palace of Fine Arts, Lincoln Center, the Metropolitan Museum of Art, the Kennedy Center, and the Freer Sackler Gallery.",
  },
];

export default function Home() {
  return (
    <main className="site-shell landing-page">
      <section
        className="landing-hero"
        id="home"
        aria-labelledby="home-heading"
      >
        <div className="hero-panel hero-panel-purple">
          <img
            className="logo hero-logo"
            src="/images/figma/noorava-logo.svg"
            alt="NoorAva"
          />
          <div className="hero-copy">
            <p className="kicker">Welcome to NoorAva</p>
            <h1 id="home-heading">Where Rumi’s Poetry Comes Alive</h1>
            <p>
              NoorAva - The Song of Light (or Light’s Song) is a non-profit
              institute devoted to bringing wisdom of Rumi and Hekmat-e
              Khosrovani (Royal or Profound Wisdom) to life through the living
              arts of reading, interpretation, music, and dance.
            </p>
          </div>
        </div>
        <div className="hero-panel hero-panel-image">
          <a className="support-pill" href="/donate/">
            Support Us
          </a>
        </div>
      </section>

      <div className="announcement">Stay tuned for our new website!</div>

      <section
        className="event-section"
        id="events"
        aria-labelledby="event-heading"
      >
        <div className="background-word join">Join us</div>
        <div className="event-copy">
          <p className="eyebrow">NoorAva Presents</p>
          <p className="event-date">
            Saturday, Sep 19, 2026
            <br />
            7:30PM
          </p>
          <h2 id="event-heading">Boundless</h2>
          <p className="event-subtitle">
            An unforgettable evening of live Persian musical performance.
          </p>
          <a className="button compact" href="#tickets">
            Get Tickets
          </a>
          <p>
            The Boundless Concert takes its name from the boundless nature of
            the human spirit – the limitless depth of music, poetry, and wisdom
            to awaken, inspire, and connect us beyond language, culture, and
            time.
          </p>
          <p>
            The evening is an immersive journey through the rich musical and
            spiritual heritage of Persia, featuring Alireza Shahmohammadi and
            his ensemble performing two distinct sets of Persian Classical
            music. The first set explores the ancient modal traditions of
            Persia, drawing from a musical lineage cultivated and preserved for
            thousands of years. These timeless melodies offer a rare glimpse
            into one of the world’s oldest continuous musical traditions.
          </p>
          <p>
            The second set presents contemporary Persian classical compositions
            alongside timeless songs of love, longing, and devotion. Rooted in
            the poetry of the great Persian mystics, these works express the
            universal human longing for truth, beauty, and the Divine.
          </p>
          <p>
            Interwoven throughout the evening will be brief presentations
            introducing NoorAva, a nonprofit cultural and arts foundation
            dedicated to preserving and sharing the timeless wisdom of Rumi and
            the Philosophy of Light (Hekmat-e Khosravani). Through music,
            poetry, education, and the arts, NoorAva seeks to make this profound
            tradition accessible to contemporary audiences while supporting the
            preservation and continued evolution of authentic Persian classical
            music.
          </p>
          <p>
            The evening is designed not simply to entertain, but to inspire
            reflection, awaken a deeper appreciation for Persian culture, and
            create an experience where music, poetry, and wisdom become a single
            expression of the human spirit.
          </p>
          <a className="button compact event-bottom-button" href="#tickets">
            Get Tickets
          </a>
        </div>
        <aside className="event-media" aria-label="Boundless media">
          <img
            className="event-poster"
            src="/images/figma/event.jpg"
            alt="Boundless concert artwork"
          />
          <img
            className="platforms"
            src="/images/figma/platforms.jpg"
            alt="Video and streaming platforms"
          />
        </aside>
      </section>

      <section
        className="performers"
        id="about"
        aria-labelledby="performers-heading"
      >
        <div className="background-word performers-word" aria-hidden="true">
          Performers
        </div>
        <h2 id="performers-heading" className="sr-only">
          Performers
        </h2>
        {performers.map((performer) => (
          <article className="performer" key={performer.name}>
            <div className="performer-copy">
              <h3>{performer.name}</h3>
              <p className="role">{performer.role}</p>
              <p>{performer.copy}</p>
            </div>
            <img src={performer.image} alt={performer.name} />
          </article>
        ))}
      </section>

      <section
        className="location"
        id="tickets"
        aria-labelledby="location-heading"
      >
        <div className="background-word location-word" aria-hidden="true">
          Location
        </div>
        <div>
          <h2 id="location-heading" className="sr-only">
            Location
          </h2>
          <address>
            <strong>Montalvo Arts Center</strong>
            <br />
            The Carriage House Theatre
            <br />
            15400 Montalvo Rd.
            <br />
            Saratoga, CA 95070
            <br />
            <a href="https://maps.google.com/?q=15400+Montalvo+Rd+Saratoga+CA+95070">
              Get Directions
            </a>
          </address>
          <p>
            Box Office Hours: Mon-Fri 10 am – 4 pm
            <br />
            Call Us: <a href="tel:+14089615858">408-961-5858</a>
          </p>
        </div>
        <a
          className="button compact location-ticket"
          href="mailto:info@noorava.org?subject=Boundless%20tickets"
        >
          Get Tickets
        </a>
      </section>

      <section
        className="support-band"
        id="what-we-do"
        aria-labelledby="support-heading"
      >
        <div className="support-purple">
          <img
            className="logo"
            src="/images/figma/noorava-logo.svg"
            alt="NoorAva"
          />
          <h2 id="support-heading">Your Support Keeps Culture Alive</h2>
          <p className="support-kicker">Be Part of Something Meaningful</p>
          <p>
            Join our community, attend our events, or make a donation. Every
            contribution — of time, talent, or treasure — makes a difference.
          </p>
        </div>
        <div className="support-gold">
          <a className="donation-link" href="/donate/">
            Make a Donation <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
