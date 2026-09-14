"use client";
import { Orbit } from "./orbit";
import { Arrow, Reveal } from "./motion";

export function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero-kicker">
        <span className="eyebrow">AVIKAR KHAKH / SOFTWARE ENGINEER</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal>
            <h1>
              Avikar
              <br />
              <em>Khakh.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="hero-description">
              Associate Software Engineer at Guardian Life Insurance and
              Technical Cofounder &amp; Engineering Lead at Steward. I build iOS
              apps, backend systems, and web applications.
            </p>
            <a href="#work" className="button-primary">
              Explore my work <Arrow />
            </a>
          </Reveal>
        </div>
        <Orbit />
      </div>
      <div className="hero-bottom">
        <div className="current-label">
          <span className="status-dot" />
          <span>CURRENT ROLES</span>
        </div>
        <a href="#guardian" className="current-role">
          <strong>Guardian</strong>
          <span>
            Associate Software Engineer <Arrow diagonal />
          </span>
        </a>
        <a href="#steward" className="current-role">
          <strong>Steward</strong>
          <span>
            Technical Cofounder <Arrow diagonal />
          </span>
        </a>
        <a
          href="#journey"
          className="scroll-cue"
          aria-label="Explore my career journey"
        >
          SCROLL TO EXPLORE<span>↓</span>
        </a>
      </div>
    </section>
  );
}
