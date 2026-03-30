"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaArrowRight } from "react-icons/fa";
import { ReactNode } from "react";

/* ─── Types ────────────────────────────────────────────────────────── */

interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: { id: string; content: ReactNode }[];
}

interface ProjectEntry {
  title: string;
  tech: string;
  description: string;
  href: string;
}

/* ─── Data ─────────────────────────────────────────────────────────── */

const skills: Record<string, string[]> = {
  Languages: ["Python", "Swift", "JavaScript", "TypeScript", "Java", "C", "SQL"],
  "Frameworks & Tools": [
    "React", "SwiftUI", "FastAPI", "Angular", "Tailwind CSS",
    "Docker", "PostgreSQL", "Git", "GitHub", "pytest",
  ],
  "AI / ML": [
    "RAG Pipelines", "Azure OpenAI", "scikit-learn", "cvxpy",
    "pandas", "Agentic Workflows",
  ],
};

const experience: ExperienceEntry[] = [
  {
    company: "Steward",
    role: "Software Engineer",
    location: "Winston-Salem, NC",
    date: "2025 \u2013 Present",
    bullets: [
      { id: "steward-ios", content: <>Sole engineer for a <strong>WFU StartUp Lab-backed</strong> fintech startup (<strong>1 of 9</strong> selected), building a full-stack iOS app that recommends the optimal credit card at every merchant using real-time location</> },
      { id: "steward-engine", content: <>Developed a recommendation engine scoring cards across <strong>6 reward dimensions</strong> with fuzzy merchant name matching for accurate category detection</> },
      { id: "steward-scrapers", content: <>Engineered automated scrapers for <strong>8 major card issuers</strong> that refresh offer data daily, plus a three-layer merchant cache that reduced Google Places API calls by <strong>90%</strong></> },
    ],
  },
  {
    company: "NYC Administration for Children\u2019s Services",
    role: "Software Development Intern",
    location: "New York, NY",
    date: "Summer 2025",
    bullets: [
      { id: "acs-rag", content: <>Designed and deployed an <strong>AI-powered</strong> knowledge search system using <strong>Azure OpenAI</strong> and <strong>RAG</strong> across agency documents for <strong>200+ staff</strong></> },
      { id: "acs-angular", content: <>Enhanced <strong>Angular</strong> frontend components and optimized backend API endpoints, improving UI responsiveness by <strong>30%</strong>, reducing page load times by <strong>1.2s</strong></> },
      { id: "acs-stakeholders", content: <>Gathered requirements from non-technical stakeholders, translated business needs into code, and shipped enhancements that reduced query response times by <strong>15%</strong></> },
    ],
  },
];

const projects: ProjectEntry[] = [
  {
    title: "Portfolio Strategy Simulator",
    tech: "Python \u00b7 FastAPI \u00b7 React \u00b7 cvxpy",
    description: "Full-stack portfolio optimization tool with configurable constraints for volatility, turnover, and tracking error. Features a backtesting engine with automatic constraint relaxation and an interactive React dashboard.",
    href: "https://github.com/AvikarKhakh/portfolio-stategy-simulator",
  },
  {
    title: "NBA Statistical Query Engine",
    tech: "React \u00b7 FastAPI \u00b7 Llama 3.3 70B \u00b7 SQLite",
    description: "Natural language-to-SQL web app that lets users query 9 seasons of NBA data through plain English, returning interactive tables and auto-generated visualizations powered by Llama 3.3 70B via Groq.",
    href: "https://github.com/AvikarKhakh/nba-SQL-engine",
  },
  {
    title: "XRP Robotics",
    tech: "Python \u00b7 Sensor Integration \u00b7 Control Systems",
    description: "Led the design and deployment of autonomous robotic systems using Python, implementing sensor-driven navigation and obstacle detection. Improved accuracy by 30% through iterative testing and tuning.",
    href: "https://github.com/AvikarKhakh/vision_control_xrp_functions",
  },
  {
    title: "NHL Team Points Prediction",
    tech: "Python \u00b7 scikit-learn \u00b7 Random Forest",
    description: "End-to-end machine learning pipeline using Python and Random Forest regression to forecast NHL team point totals, translating advanced performance data into actionable insights.",
    href: "https://github.com/AvikarKhakh/nhl-standings-ML-model-dashboard",
  },
];

/* ─── Animation Variants ───────────────────────────────────────────── */

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/* ─── Section Heading Component ────────────────────────────────────── */

function SectionHeading({ label, number }: { label: string; number: string }) {
  return (
    <motion.div
      className="mb-16 flex items-center gap-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={0}
    >
      <span className="font-mono text-sm text-[#e8b931]/60">{number}</span>
      <h2 className="section-label text-3xl italic text-[#f0ece2] md:text-4xl">
        {label}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-[#e8b931]/20 to-transparent" />
    </motion.div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion
    ? { initial: undefined, animate: undefined, whileInView: undefined }
    : {};

  return (
    <div className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="orb-1 absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#e8b931]/[0.04] blur-[120px]" />
        <div className="orb-2 absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-[#f4845f]/[0.03] blur-[140px]" />
        <div className="orb-3 absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-[#e8b931]/[0.02] blur-[100px]" />
      </div>

      {/* ════════════ HERO ════════════ */}
      <section id="top" className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="avatar-ring mx-auto mb-10 h-36 w-36 overflow-hidden rounded-full">
            <Image
              src="/static/images/avatar.jpeg"
              alt="Avikar Khakh"
              width={160}
              height={160}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          className="mb-6 text-5xl font-light tracking-tight md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <span className="text-[#f0ece2]">Avikar </span>
          <span className="gradient-text-animated italic">Khakh</span>
        </motion.h1>

        <motion.p
          className="mb-10 max-w-xl text-lg leading-relaxed text-[#8a8a9a] md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
        >
          Developer experienced in full-stack development, AI-powered systems,
          and native mobile. Translating business needs into products that deliver
          real impact.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8b931] to-[#f4845f] px-7 py-3 text-sm font-semibold text-[#08080c] shadow-lg shadow-[#e8b931]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#e8b931]/30"
          >
            View Projects
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="/Avikar_Khakh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#f0ece2]/20 px-7 py-3 text-sm font-semibold text-[#f0ece2] transition-all duration-300 hover:border-[#e8b931]/40 hover:text-[#e8b931]"
          >
            <FaFileAlt className="text-xs" aria-hidden="true" />
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-12 flex items-center gap-5 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
        >
          <a
            href="https://www.linkedin.com/in/avikar-khakh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a5a6a] transition-all duration-300 hover:text-[#e8b931]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AvikarKhakh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a5a6a] transition-all duration-300 hover:text-[#e8b931]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:avikarkhakh@gmail.com"
            className="text-[#5a5a6a] transition-all duration-300 hover:text-[#e8b931]"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="h-8 w-5 rounded-full border border-[#f0ece2]/20"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="mx-auto mt-1.5 h-1.5 w-1 rounded-full bg-[#e8b931]/60"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════ ABOUT + SKILLS ════════════ */}
      <section id="about" className="relative px-6 py-24 md:px-0">
        <SectionHeading label="About" number="01" />

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-5">
          {/* About text */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
          >
            <p className="text-lg leading-relaxed text-[#8a8a9a]">
              I&apos;m a Computer Science and Economics senior at Wake Forest University
              experienced in full-stack development, AI-powered systems, and native mobile.
              I leverage agentic AI to accelerate development and translate business needs
              into working products.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#8a8a9a]">
              I design and implement end-to-end projects including iOS apps, recommendation
              engines, backend services, interactive frontends, and simulation engines.
              Driven by solving real-world problems with clean systems thinking.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="lg:col-span-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {Object.entries(skills).map(([category, items]) => (
              <motion.div key={category} className="mb-6" variants={itemFade}>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-[#e8b931]/70">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill rounded-full px-3.5 py-1.5 text-sm text-[#b0ada5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════ EXPERIENCE (Timeline) ════════════ */}
      <section id="work" className="relative px-6 py-24 md:px-0">
        <SectionHeading label="Experience" number="02" />

        <div className="relative ml-4 pl-8 md:ml-8 md:pl-12">
          <div className="timeline-line" />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className="relative mb-14 last:mb-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={i}
            >
              <div className="timeline-dot" />

              <div className="glow-card rounded-xl p-6 md:p-8">
                <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <h3
                    className="text-xl text-[#f0ece2] md:text-2xl"
                    style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
                  >
                    {job.company}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-[#e8b931]/70">
                    {job.date}
                  </span>
                </div>
                <p className="mb-5 text-sm text-[#5a5a6a]">
                  {job.role} &middot; {job.location}
                </p>
                <ul className="space-y-3">
                  {job.bullets.map((bullet) => (
                    <li key={bullet.id} className="flex gap-3 text-[15px] leading-relaxed text-[#8a8a9a]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#e8b931]/50" />
                      <span>{bullet.content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════ PROJECTS ════════════ */}
      <section id="projects" className="relative px-6 py-24 md:px-0">
        <SectionHeading label="Projects" number="03" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card group block rounded-xl p-6 md:p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={i}
            >
              <div className="mb-3 flex items-start justify-between">
                <h3
                  className="text-xl text-[#f0ece2] md:text-2xl"
                  style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
                >
                  {project.title}
                </h3>
                <FaGithub className="mt-1 shrink-0 text-lg text-[#5a5a6a] transition-all duration-300 group-hover:text-[#e8b931]" aria-hidden="true" />
              </div>
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[#e8b931]/60">
                {project.tech}
              </p>
              <p className="text-[15px] leading-relaxed text-[#8a8a9a]">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-sm text-[#5a5a6a] transition-all duration-300 group-hover:text-[#e8b931]">
                <span>View on GitHub</span>
                <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ════════════ LEADERSHIP ════════════ */}
      <section id="leadership" className="relative px-6 py-24 md:px-0">
        <SectionHeading label="Leadership" number="04" />

        <motion.div
          className="glow-card rounded-xl p-6 md:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <h3
              className="text-xl text-[#f0ece2] md:text-2xl"
              style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
            >
              Wake Forest University Robotics Organization
            </h3>
            <span className="shrink-0 font-mono text-xs text-[#e8b931]/70">
              Fall 2024 &ndash; Present
            </span>
          </div>
          <p className="mb-5 text-sm text-[#5a5a6a]">
            President &middot; Winston-Salem, NC
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 text-[15px] leading-relaxed text-[#8a8a9a]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#e8b931]/50" />
              <span>
                Scaled the organization from <strong>3 to 20+</strong> active members through
                hands-on project-based learning and robotics competitions, and grew funding from{" "}
                <strong>$300 to $1,100</strong> by presenting to faculty and the student
                budgeting office
              </span>
            </li>
            <li className="flex gap-3 text-[15px] leading-relaxed text-[#8a8a9a]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#e8b931]/50" />
              <span>
                Partnered with the CS department to establish a{" "}
                <strong>1.5-credit robotics course</strong> built on the club&apos;s curriculum
                and competition work
              </span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ════════════ EDUCATION ════════════ */}
      <section id="education" className="relative px-6 py-24 md:px-0">
        <SectionHeading label="Education" number="05" />

        <motion.div
          className="glow-card rounded-xl p-6 md:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <h3
              className="text-xl text-[#f0ece2] md:text-2xl"
              style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
            >
              Wake Forest University
            </h3>
            <span className="shrink-0 font-mono text-xs text-[#e8b931]/70">
              May 2026
            </span>
          </div>
          <p className="mb-1 text-[15px] italic text-[#8a8a9a]">
            B.S. Computer Science, Minor in Economics
          </p>
          <p className="text-sm text-[#5a5a6a]">
            Relevant Coursework: Data Structures &amp; Algorithms, Machine Learning,
            Software Engineering, Computer Vision
          </p>
          <p className="mt-2 text-sm text-[#5a5a6a]">
            Languages: English (fluent), Spanish (conversational), Punjabi (conversational)
          </p>
        </motion.div>
      </section>

      {/* ════════════ BACK TO TOP ════════════ */}
      <div className="flex justify-center py-16">
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-widest text-[#5a5a6a] transition-colors duration-300 hover:text-[#e8b931]"
        >
          &uarr; Back to top
        </a>
      </div>
    </div>
  );
}
