import {
  classes,
  featuredEvent,
  performers,
  whatWeDoPillars,
} from "../content";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  image?: string;
};

export function PageHero({ eyebrow = "NoorAva", title, body, image }: PageHeroProps) {
  return (
    <section className="full-hero" aria-labelledby="page-heading">
      <div className="full-hero-copy">
        <p className="full-eyebrow">{eyebrow}</p>
        <h1 id="page-heading">{title}</h1>
        {body ? <p>{body}</p> : null}
      </div>
      {image ? <div className="full-hero-image" style={{ backgroundImage: `url(${image})` }} /> : null}
    </section>
  );
}

export function SectionIntro({ eyebrow, title, body }: { eyebrow?: string; title: string; body?: string }) {
  return (
    <div className="section-intro">
      {eyebrow ? <p className="full-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

export function PillarGrid() {
  return (
    <div className="pillar-grid">
      {whatWeDoPillars.map((pillar) => (
        <article key={pillar.title} className="pillar-card">
          <p>{pillar.kicker}</p>
          <h3>{pillar.title}</h3>
          <div>{pillar.body}</div>
        </article>
      ))}
    </div>
  );
}

export function FeaturedEvent({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`feature-card ${compact ? "feature-card-compact" : ""}`} aria-labelledby="featured-event-heading">
      <div>
        <p className="full-eyebrow">Upcoming Events</p>
        <p className="feature-date">{featuredEvent.date}</p>
        <h2 id="featured-event-heading">{featuredEvent.title}</h2>
        <p className="feature-subtitle">{featuredEvent.subtitle}</p>
        <p>{featuredEvent.summary}</p>
        <div className="button-row">
          <a className="button" href={featuredEvent.href}>Learn more</a>
          <a className="button button-outline" href="/events/boundless/#tickets">Attend Event</a>
        </div>
      </div>
      <img src="/images/figma/event.jpg" alt="Boundless concert poster" />
    </section>
  );
}

export function ClassList() {
  return (
    <div className="class-list">
      {classes.map((item) => (
        <article key={item.title} className="class-card">
          <p className="full-eyebrow">Upcoming Class</p>
          <h3>{item.title}</h3>
          <p className="feature-subtitle">{item.subtitle}</p>
          <p>with {item.instructor}</p>
          <p>{item.time}</p>
          <div className="tag-row">
            {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <a className="button compact" href={item.href}>Watch now</a>
        </article>
      ))}
    </div>
  );
}

export function PerformerGrid() {
  return (
    <div className="full-performer-grid">
      {performers.map((performer) => (
        <article key={performer.name} className="full-performer-card">
          <img src={performer.image} alt={performer.name} />
          <div>
            <h3>{performer.name}</h3>
            <p className="role">{performer.role}</p>
            <p>{performer.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function SupportCta() {
  return (
    <section className="full-support" aria-labelledby="support-heading">
      <div>
        <p className="full-eyebrow">Attend Event</p>
        <h2 id="support-heading">Your Support Keeps Culture Alive</h2>
        <p>Join our community, attend our events, or make a donation. Every contribution — of time, talent, or treasure — makes a difference.</p>
      </div>
      <div className="button-row">
        <a className="button" href="/donate/">Make a Donation</a>
        <a className="button button-outline" href="/join/">Join our Community</a>
      </div>
    </section>
  );
}
