"use client";
import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/portfolio/header";
import {
  MotionPausedContext,
  useSystemReducedMotion,
} from "@/components/portfolio/motion";
import { Hero } from "@/components/portfolio/hero";
import { Work } from "@/components/portfolio/work";
import { About } from "@/components/portfolio/about";
import { Journey } from "@/components/portfolio/journey";
import { Projects } from "@/components/portfolio/projects";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSystemReducedMotion();
  return (
    <MotionConfig reducedMotion={paused ? "always" : "user"}>
      <MotionPausedContext.Provider value={paused}>
        <div
          className="portfolio"
          data-motion={paused || reducedMotion ? "paused" : "running"}
        >
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header paused={paused} onToggleMotion={() => setPaused(!paused)} />
          <main id="main">
            <Hero />
            <Work />
            <Journey />
            <Projects />
            <About />
          </main>
          <Contact />
        </div>
      </MotionPausedContext.Provider>
    </MotionConfig>
  );
}
