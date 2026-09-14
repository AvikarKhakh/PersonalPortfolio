import { Arrow, Reveal, SectionLabel } from "./motion";
const projects = [
  {
    number: "01",
    title: "Portfolio Strategy Simulator",
    type: "FINANCIAL SYSTEMS",
    description:
      "Portfolio optimization and backtesting with configurable investment constraints and an interactive dashboard.",
    stack: "Python / FastAPI / React / cvxpy",
    href: "https://github.com/AvikarKhakh/portfolio-strategy-simulator",
    art: "chart",
  },
  {
    number: "02",
    title: "NBA Statistical Query Engine",
    type: "APPLIED AI",
    description:
      "Natural-language queries across nine seasons of NBA data, translated into SQL with tables and visualizations.",
    stack: "React / FastAPI / Llama 3.3 / SQLite",
    href: "https://github.com/AvikarKhakh/nba-SQL-engine",
    art: "query",
  },
  {
    number: "03",
    title: "Autonomous Robotics",
    type: "ROBOTICS",
    description:
      "Autonomous robotics using sensor-driven navigation, obstacle detection, and control-system tuning.",
    stack: "Python / Sensors / Control systems",
    href: "https://github.com/AvikarKhakh/vision_control_xrp_functions",
    art: "robot",
  },
] as const;
function ProjectArt({ type }: { type: string }) {
  return (
    <div className={`project-art ${type}`} aria-hidden="true">
      <svg viewBox="0 0 180 110" fill="none">
        {type === "chart" ? (
          <>
            <path
              d="M15 85h150M15 60h150M15 35h150"
              stroke="currentColor"
              opacity=".15"
            />
            <path
              className="chart-line"
              d="m15 85 17-8 13 4 17-30 14 8 18-23 16 9 15-20 16 4 24-20"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="m15 85 28-3 25-10 25 2 28-18 20 5 24-18"
              stroke="currentColor"
              strokeDasharray="3 5"
              opacity=".4"
            />
          </>
        ) : type === "query" ? (
          <>
            <rect
              x="19"
              y="18"
              width="142"
              height="28"
              rx="5"
              stroke="currentColor"
              opacity=".4"
            />
            <path
              d="m29 28 6 5-6 5M42 37h30M31 66h118M31 82h118M62 57v37M110 57v37"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="145" cy="32" r="3" fill="currentColor" />
          </>
        ) : (
          <>
            <path
              d="M20 85h45V33h50v46h41"
              stroke="currentColor"
              strokeDasharray="4 5"
            />
            <rect
              x="77"
              y="18"
              width="27"
              height="28"
              rx="6"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="85" cy="29" r="2" fill="currentColor" />
            <circle cx="96" cy="29" r="2" fill="currentColor" />
            <path d="M87 37h6M71 22v17M110 22v17" stroke="currentColor" />
            <circle cx="21" cy="85" r="5" fill="currentColor" />
            <path d="m146 72 10 7-10 7" stroke="currentColor" />
          </>
        )}
      </svg>
    </div>
  );
}
export function Projects() {
  return (
    <section id="projects" className="projects-section container">
      <SectionLabel number="03">PROJECTS</SectionLabel>
      <div className="section-heading-row">
        <h2>Selected projects</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <Reveal key={project.number}>
            <a
              className="project-row"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="project-number">{project.number}</span>
              <ProjectArt type={project.art} />
              <div className="project-info">
                <span className="eyebrow">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-stack">{project.stack}</span>
              </div>
              <span className="project-link">
                <Arrow diagonal />
                <span className="sr-only">View {project.title} on GitHub</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
