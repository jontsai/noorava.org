"use client";

import { useMemo, useState } from "react";

import { classes, experienceMediaSections } from "../content";

export function ClassFilter() {
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(classes.flatMap((item) => item.tags)))],
    [],
  );
  const [activeTag, setActiveTag] = useState("All");
  const visibleClasses =
    activeTag === "All"
      ? classes
      : classes.filter((item) => item.tags.includes(activeTag));

  return (
    <div className="class-filter-shell">
      <div className="filter-pills" role="tablist" aria-label="Filter classes by topic">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            role="tab"
            aria-selected={activeTag === tag}
            className={activeTag === tag ? "is-active" : undefined}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="class-list">
        {visibleClasses.map((item) => (
          <article key={item.title} className="class-card">
            <p className="full-eyebrow">Upcoming Class</p>
            <h3>{item.title}</h3>
            <p className="feature-subtitle">{item.subtitle}</p>
            <p>with {item.instructor}</p>
            <p>{item.time}</p>
            <div className="tag-row">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="button compact" href={item.href}>
              Learn more
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ExperienceMediaShowcase() {
  const [selectedBySection, setSelectedBySection] = useState<Record<string, number>>({});

  return (
    <div className="experience-media-stack">
      {experienceMediaSections.map((section) => {
        const selectedIndex = selectedBySection[section.id] ?? 0;
        const selected = section.media[selectedIndex];

        return (
          <section key={section.id} id={section.id} className="experience-media-section">
            <div className="experience-media-copy">
              <p className="full-eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
            <div className="media-cluster" aria-label={`${section.title} media gallery`}>
              <div className="media-stage">
                {selected.type === "video" ? (
                  <button className="media-play-card" type="button" aria-label={`Play ${selected.alt}`}>
                    <img src={selected.src} alt={selected.alt} />
                    <span className="play-button" aria-hidden="true" />
                  </button>
                ) : (
                  <img src={selected.src} alt={selected.alt} />
                )}
              </div>
              <div className="media-thumbs" aria-label={`${section.title} thumbnails`}>
                {section.media.map((item, index) => (
                  <button
                    key={`${item.src}-${index}`}
                    type="button"
                    className={index === selectedIndex ? "is-selected" : undefined}
                    aria-label={`Show ${item.alt}`}
                    aria-pressed={index === selectedIndex}
                    onClick={() =>
                      setSelectedBySection((current) => ({
                        ...current,
                        [section.id]: index,
                      }))
                    }
                  >
                    <img src={item.src} alt="" aria-hidden="true" />
                    {item.type === "video" ? <span className="thumb-play" aria-hidden="true" /> : null}
                  </button>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
