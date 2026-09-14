"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Reveal, SectionLabel, useMotionPaused } from "./motion";
const milestones = [
  {
    date: "2024",
    chapter: "01",
    title: "Robotics leadership",
    place: "Wake Forest University",
    role: "Robotics Organization President",
    description:
      "Grew a community of builders from 3 to 20+ members. Led hands-on robotics projects and helped turn the club’s work into a 1.5-credit course.",
    tags: "LEADERSHIP / ROBOTICS / COMMUNITY",
  },
  {
    date: "SUMMER 2025",
    chapter: "02",
    title: "Software development internship",
    place: "NYC Administration for Children’s Services",
    role: "Software Development Intern",
    description:
      "Built an AI-powered knowledge search system using Azure OpenAI and retrieval-augmented generation. Worked across Angular interfaces and backend APIs to make information easier to find.",
    tags: "APPLIED AI / FULL-STACK / PUBLIC SERVICE",
  },
  {
    date: "MARCH 2026 → NOW",
    chapter: "03",
    title: "Co-founding Steward",
    place: "Steward",
    role: "Technical Cofounder & Engineering Lead",
    description:
      "Co-founded Steward and built its full-stack platform from the ground up. Now leading 2 engineering interns, evolving the rewards engine, and taking the iOS app through TestFlight and App Store submission prep.",
    tags: "TECHNICAL OWNERSHIP / TEAM LEADERSHIP / FINTECH",
    current: true,
  },
  {
    date: "MAY 2026",
    chapter: "04",
    title: "Graduating from Wake Forest",
    place: "Wake Forest University",
    role: "B.S. Computer Science · Minor in Economics",
    description:
      "Graduated with a foundation in algorithms, machine learning, and the economics behind decisions.",
    tags: "CLASS OF 2026 / COMPUTER SCIENCE",
  },
  {
    date: "JULY 2026 → NOW",
    chapter: "05",
    title: "Joining Guardian",
    place: "Guardian Life Insurance",
    role: "Associate Software Engineer",
    description:
      "Joined Guardian Life Insurance as an Associate Software Engineer in July 2026.",
    tags: "SOFTWARE ENGINEERING / INSURANCE",
    current: true,
  },
] as const;
export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useMotionPaused();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 70%"],
  });
  return (
    <section id="journey" className="journey-section">
      <div className="container journey-layout">
        <div className="journey-intro">
          <SectionLabel number="02">EXPERIENCE & EDUCATION</SectionLabel>
          <h2>Career timeline</h2>
          <p>Education, internships, and current roles.</p>
          <div className="journey-motif" aria-hidden="true">
            ↳
          </div>
        </div>
        <div ref={ref} className="timeline">
          <div className="timeline-track" aria-hidden="true">
            <motion.div
              className="timeline-progress"
              style={{ scaleY: reduced ? 1 : scrollYProgress }}
            />
          </div>
          {milestones.map((item) => (
            <Reveal key={item.chapter} className="milestone">
              <span
                className={
                  "milestone-node" + ("current" in item ? " current" : "")
                }
                aria-hidden="true"
              />
              <div className="milestone-meta">
                <span>{item.date}</span>
                <span>{item.chapter}</span>
              </div>
              <h3>{item.title}</h3>
              <h4>{item.place}</h4>
              <div className="milestone-role">{item.role}</div>
              <p>{item.description}</p>
              <div className="milestone-tags">{item.tags}</div>
            </Reveal>
          ))}
          <div className="timeline-future">
            <span className="tiny-dot orange" />
            CURRENTLY AT GUARDIAN & STEWARD
          </div>
        </div>
      </div>
    </section>
  );
}
