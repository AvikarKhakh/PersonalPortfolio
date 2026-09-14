"use client";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/portfolio/header";
import { useSystemReducedMotion } from "@/components/portfolio/motion";
import { Hero } from "@/components/portfolio/hero";
import { Work } from "@/components/portfolio/work";
import { About } from "@/components/portfolio/about";
import { Journey } from "@/components/portfolio/journey";
import { Projects } from "@/components/portfolio/projects";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  const reducedMotion = useSystemReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      <div
        className="portfolio"
        data-motion={reducedMotion ? "paused" : "running"}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Hero />
          <Work />
          <Journey />
          <Projects />
          <About />
        </main>
        <Contact />
      </div>
    </MotionConfig>
  );
}
