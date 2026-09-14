"use client";
import { Arrow, Reveal, SectionLabel } from "./motion";
import Image from "next/image";

export function Work() {
  return (
    <section id="work" className="work-section container">
      <SectionLabel number="01">WORK</SectionLabel>
      <div className="section-heading-row">
        <h2>Current roles</h2>
      </div>
      <GuardianFeature />
      <StewardFeature />
    </section>
  );
}

function StewardFeature() {
  return (
    <Reveal>
      <article id="steward" className="steward-feature">
        <div className="feature-copy">
          <div className="feature-meta">
            <span className="eyebrow">02 / FINTECH</span>
            <span className="role-badge">
              <span className="tiny-dot" />
              MARCH 2026 — PRESENT
            </span>
          </div>
          <h3>Steward</h3>
          <p className="feature-role">
            Technical Cofounder &amp; Engineering Lead
          </p>
          <h4>Credit-card rewards optimization</h4>
          <p className="feature-description">
            I co-founded Steward and architected its iOS app and backend from
            the ground up. Real-time merchant detection and rewards optimization
            help people choose the best card at checkout.
          </p>
          <p className="feature-description">
            Now available on the App Store with 100+ downloads and a growing
            user base. We’ve secured investor funding and are closing additional
            investment to support continued growth.
          </p>
          <div className="feature-stack">
            SWIFT / PYTHON / FASTAPI / POSTGRESQL / TYPESCRIPT
          </div>
        </div>
        <div className="steward-details">
          <WorkCapabilities />
        </div>
      </article>
    </Reveal>
  );
}

function GuardianFeature() {
  return (
    <Reveal>
      <article id="guardian" className="guardian-feature">
        <div className="guardian-logo">
          <Image
            src="/static/images/guardian-logo.png"
            alt="Guardian Life Insurance logo"
            width={600}
            height={111}
            sizes="170px"
          />
        </div>
        <div className="guardian-copy">
          <div className="feature-meta">
            <span className="eyebrow">01 / INSURANCE</span>
            <span className="role-badge">
              <span className="tiny-dot" />
              JULY 2026 — PRESENT
            </span>
          </div>
          <h3>Guardian Life Insurance</h3>
          <p className="feature-role">Associate Software Engineer</p>
          <p>
            Associate Software Engineer at Guardian Life Insurance since July
            2026.
          </p>
        </div>
        <a
          href="#journey"
          className="guardian-link"
          aria-label="Guardian in my career journey"
        >
          <Arrow diagonal />
        </a>
      </article>
    </Reveal>
  );
}

function WorkCapabilities() {
  return (
    <div className="work-capabilities">
      <div>
        <span>01</span>
        <p>
          <strong>The platform</strong>A SwiftUI app spanning wallets, trips,
          goals, and widgets, backed by FastAPI, PostgreSQL, and 30+ API
          endpoint groups.
        </p>
      </div>
      <div>
        <span>02</span>
        <p>
          <strong>Rewards & data pipelines</strong>Server-side rewards ranking
          and automated pipelines that collect and normalize card, offer, and
          loyalty data—with freshness monitoring built in.
        </p>
      </div>
      <div>
        <span>03</span>
        <p>
          <strong>Engineering leadership</strong>I lead 2 engineering interns
          through daily stand-ups, sprint planning, and agile workflows in Jira.
        </p>
      </div>
      <div>
        <span>04</span>
        <p>
          <strong>CI/CD infrastructure</strong>Built the CI/CD pipeline from the
          ground up, with GitHub rulesets enforcing PR reviews and an automated
          test gate on protected branches. Separate server, configuration, and
          iOS binary release paths let backend fixes ship independently of App
          Store review.
        </p>
      </div>
    </div>
  );
}
