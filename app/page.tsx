import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaChevronUp } from "react-icons/fa";

const skills = {
  Languages: ["Java", "Python", "C", "JavaScript"],
  "Frameworks & Libraries": ["Spring Boot", "Angular", "React", "Tailwind CSS"],
  "Cloud Platforms": ["Microsoft Azure", "Azure OpenAI", "Cosmos DB"],
  "Data & Tools": ["SQL", "R / RStudio", "Apache Kafka", "Maven"],
  "Integration & Collaboration": ["Git", "GitHub", "REST APIs"],
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="top"
        className="flex flex-col items-center justify-center px-6 py-24 text-center md:py-36"
      >
        <Image
          src="/static/images/avatar.jpeg"
          alt="Avikar Khakh"
          width={160}
          height={160}
          className="mb-8 h-40 w-40 rounded-full object-cover shadow-lg"
          priority
        />
        <h1 className="mb-6 text-5xl font-extrabold text-gray-900 md:text-7xl dark:text-gray-100">
          Hi! I'm Avikar Khakh
        </h1>
        <p className="mb-8 max-w-2xl text-xl text-gray-600 md:text-2xl dark:text-gray-300">
          I'm a tech-driven problem solver with a passion for building impactful software, delivering
          real business value, and turning ideas into tools that serve real user needs.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-600"
          >
            View Projects
          </a>
          <a
            href="/Avikar_Khakh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border-2 border-blue-500 px-8 py-3 text-lg font-semibold text-blue-500 shadow-md transition hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            <FaFileAlt />
            Resume
          </a>
        </div>
        {/* Social Links */}
        <div className="mt-8 flex items-center gap-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/avikar-khakh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-transform hover:scale-110 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AvikarKhakh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 transition-transform hover:scale-110 hover:text-black dark:text-gray-300 dark:hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:avikarkhakh@gmail.com"
            className="text-red-500 transition-transform hover:scale-110 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 px-6 py-20 md:px-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
            <div className="text-left">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I'm a Computer Science and Economics senior at Wake Forest University with
                experience building AI-powered, cloud-based applications and leading technical
                teams. I have a strong background in software engineering, machine learning, and
                translating technical solutions into real business impact.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I design and implement end-to-end projects including data pipelines, backend
                services, interactive frontends, and simulation engines. I am driven by solving
                complex real-world problems with clean systems thinking and practical execution.
              </p>
            </div>

            {/* Skills Section - Categorized */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="px-6 py-20 md:px-24">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Work Experience
        </h2>
        <div className="mx-auto max-w-5xl space-y-8">
          {/* NYC ACS */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/50">
            <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                NYC Administration for Children's Services (ACS)
              </h3>
              <span className="shrink-0 text-sm font-medium text-blue-500 dark:text-blue-400">
                Summer 2025
              </span>
            </div>
            <p className="mb-4 text-base font-medium text-gray-500 dark:text-gray-400">
              Software Development Intern &middot; New York, NY
            </p>
            <ul className="list-inside list-disc space-y-2 text-base text-gray-700 dark:text-gray-300">
              <li>
                Designed and implemented an <strong>AI-powered</strong> internal knowledge search
                system by integrating <strong>Azure OpenAI</strong> into backend APIs, enabling
                secure <strong>RAG</strong> across agency documents
              </li>
              <li>
                Enhanced <strong>Angular</strong> frontend components to improve UI responsiveness
                by <strong>30%</strong> and reduce average page load times by{" "}
                <strong>1.2s</strong> for 200+ internal staff
              </li>
              <li>
                Translated employee feedback into user-facing feature enhancements, reducing
                navigation errors by <strong>15%</strong> and improving caseworker task completion
                speed
              </li>
              <li>
                Optimized backend <strong>API endpoints</strong>, reducing query response times by{" "}
                <strong>15%</strong> and improving scalability
              </li>
            </ul>
          </div>

          {/* JPMorgan */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/50">
            <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                JPMorgan Chase & Co.
              </h3>
              <span className="shrink-0 text-sm font-medium text-blue-500 dark:text-blue-400">
                Spring 2025
              </span>
            </div>
            <p className="mb-4 text-base font-medium text-gray-500 dark:text-gray-400">
              Software Engineering (Forage) &middot; Remote
            </p>
            <ul className="list-inside list-disc space-y-2 text-base text-gray-700 dark:text-gray-300">
              <li>
                Strengthened backend reliability in a <strong>Spring Boot</strong> microservices
                architecture by completing a multi-stage enterprise banking simulation aligned with
                production workflows
              </li>
              <li>
                Eliminated transaction processing errors by integrating{" "}
                <strong>Apache Kafka</strong> to stream and deserialize <strong>500+</strong> mock
                financial transactions in real time
              </li>
              <li>
                Reduced transaction latency by <strong>25%</strong> by restructuring service logic
                and optimizing <strong>Kafka consumer modules</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 px-6 py-20 md:px-24 dark:bg-gray-900">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Projects
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* XRP Robotics */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/50">
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">
              XRP Robotics
            </h3>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-blue-500 dark:text-blue-400">
              Python &middot; Sensor Integration &middot; Control Systems
            </p>
            <p className="flex-1 text-base text-gray-600 dark:text-gray-400">
              Led the design and deployment of autonomous robotic systems using Python, implementing
              sensor-driven navigation and obstacle detection. Improved accuracy by 30% through
              iterative testing and tuning.
            </p>
            <a
              href="https://github.com/AvikarKhakh/vision_control_xrp_functions"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-800 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub />
              View on GitHub
            </a>
          </div>

          {/* NHL Prediction */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/50">
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">
              NHL Team Points Prediction
            </h3>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-blue-500 dark:text-blue-400">
              Python &middot; scikit-learn &middot; Random Forest
            </p>
            <p className="flex-1 text-base text-gray-600 dark:text-gray-400">
              Built an end-to-end machine learning pipeline using Python and Random Forest
              regression to forecast NHL team point totals, translating advanced performance data
              into actionable insights.
            </p>
            <a
              href="https://github.com/AvikarKhakh/nhl-standings-ML-model-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-800 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub />
              View on GitHub
            </a>
          </div>

          {/* Investment Simulator */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/50">
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">
              Investment Strategy Simulator
            </h3>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-blue-500 dark:text-blue-400">
              Python &middot; Backtesting &middot; Data Analysis
            </p>
            <p className="flex-1 text-base text-gray-600 dark:text-gray-400">
              Developed a backtesting simulator that lets users compare portfolio strategies over
              historical market data with configurable assumptions and clear performance narratives.
            </p>
            <a
              href="https://github.com/AvikarKhakh/portfolio-stategy-simulator"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-800 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer back-to-top */}
      <div className="flex justify-center py-10">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <FaChevronUp className="text-xs" />
          Back to top
        </a>
      </div>
    </div>
  );
}
