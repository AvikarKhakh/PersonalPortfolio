"use client";
import { useState } from "react";
import { Arrow } from "./motion";
export function Header() {
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
