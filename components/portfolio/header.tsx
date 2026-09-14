"use client";
import { useState } from "react";
import { Arrow } from "./motion";
export function Header({
  paused,
  onToggleMotion,
}: {
  paused: boolean;
  onToggleMotion: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Avikar Khakh, back to top">
          avikar khakh<span className="brand-dot">.</span>
        </a>
        <nav
          aria-label="Main navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          id="main-navigation"
        >
          <a href="#work" onClick={() => setOpen(false)}>
            Work
          </a>
          <a href="#journey" onClick={() => setOpen(false)}>
            Journey
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Contact <Arrow diagonal />
          </a>
        </nav>
        <div className="header-controls">
          <button
            className="motion-toggle"
            type="button"
            aria-label={paused ? "Resume animations" : "Pause animations"}
            aria-pressed={paused}
            onClick={onToggleMotion}
          >
            {paused ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path d="m4 2 8 5-8 5Z" fill="currentColor" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  d="M4 2v10M10 2v10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
            type="button"
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
