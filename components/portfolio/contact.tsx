"use client";
import { useEffect, useRef, useState } from "react";
import { Arrow, SectionLabel } from "./motion";
const email = "avikarkhakh@gmail.com";
export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopyState("idle"), 4000);
  }
  return (
    <footer id="contact" className="contact-section">
      <div className="container">
        <SectionLabel number="05">CONTACT</SectionLabel>
        <div className="contact-main">
          <h2>Get in touch</h2>
          <a
            href={`mailto:${email}`}
            className="contact-round"
            aria-label="Email Avikar"
          >
            <Arrow diagonal />
          </a>
        </div>
        <div className="contact-details">
          <div>
            <a className="email-link" href={`mailto:${email}`}>
              {email}
            </a>
            <button
              className="copy-email"
              onClick={copyEmail}
              type="button"
              aria-label="Copy email address"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="8"
                  y="8"
                  width="12"
                  height="12"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M15 8V4H4v11h4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            <p aria-live="polite" className="copy-status">
              {copyState === "copied"
                ? "Email copied."
                : copyState === "failed"
                  ? "Couldn’t copy. Select the email address above or open your mail app."
                  : "For project inquiries and professional connections."}
            </p>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/AvikarKhakh"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Arrow diagonal />
            </a>
            <a
              href="https://www.linkedin.com/in/avikar-khakh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AVIKAR KHAKH</span>

          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}
