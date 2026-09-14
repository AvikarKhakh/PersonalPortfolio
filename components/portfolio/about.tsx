"use client";
import Image from "next/image";
import { Reveal, SectionLabel } from "./motion";

export function About() {
  return (
    <section id="about" className="about-section container">
      <SectionLabel number="04">ABOUT</SectionLabel>
      <div className="about-grid">
        <Reveal className="portrait-wrap">
          <div className="portrait">
            <Image
              src="/static/images/avatar.jpeg"
              alt="Avikar Khakh"
              width={829}
              height={948}
              sizes="(max-width: 700px) 85vw, 360px"
            />
          </div>
          <div className="portrait-caption">
            <span>AVIKAR KHAKH</span>
            <span>WAKE FOREST UNIVERSITY · CLASS OF 2026</span>
          </div>
        </Reveal>
        <Reveal className="about-copy">
          <h2>Background &amp; skills</h2>
          <p>
            I’m a Wake Forest graduate with a B.S. in Computer Science and a
            minor in Economics. I like the space where technical systems meet
            human decisions.
          </p>
          <p>
            My projects include credit-card recommendations, AI-powered
            knowledge search, portfolio optimization, and natural-language data
            queries.
          </p>
          <p>
            I work across product development, system architecture, and
            implementation. At Steward, I also lead engineering interns and
            manage the release process.
          </p>
          <div className="toolkit">
            <span className="eyebrow">MY WORKING TOOLKIT</span>
            <div>
              <strong>Product & interfaces</strong>
              <span>SwiftUI · React · TypeScript</span>
            </div>
            <div>
              <strong>Systems & data</strong>
              <span>Python · FastAPI · PostgreSQL</span>
            </div>
            <div>
              <strong>Intelligence & delivery</strong>
              <span>RAG · Applied ML · Docker · Git</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
