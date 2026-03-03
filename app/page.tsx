import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Top Navigation */}
      <nav
        className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-8 py-4 shadow"
        suppressHydrationWarning
      >
        <a
          href="#top"
          className="text-2xl font-extrabold text-black uppercase hover:underline md:text-3xl"
        >
          Avikar Khakh
        </a>
        <div className="space-x-6 text-lg">
          <a href="#about" className="font-medium text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#work" className="font-medium text-gray-700 hover:text-blue-600">
            Work Exp.
          </a>
          <a href="#projects" className="font-medium text-gray-700 hover:text-blue-600">
            Projects
          </a>
        </div>
      </nav>

      {/* Social Sidebar */}
      <div className="fixed top-1/3 left-4 z-50 space-y-6 text-4xl">
        <a
          href="https://www.linkedin.com/in/avikar-khakh/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 transition-transform hover:scale-110 hover:text-blue-800"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AvikarKhakh"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-800 transition-transform hover:scale-110 hover:text-black"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:avikar.khakh@gmail.com"
          className="block text-red-600 transition-transform hover:scale-110 hover:text-red-800"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Hero Section */}
      <section
        id="top"
        className="relative z-0 mt-[-80px] flex h-screen flex-col items-center justify-center bg-white px-6 text-center"
      >
        <h1 className="mb-6 text-6xl font-extrabold text-black md:text-7xl">
          Hi! I'm Avikar Khakh
        </h1>
        <p className="mb-10 max-w-2xl text-xl text-gray-700 md:text-2xl">
          I'm a tech-driven problem solver with a passion for building impactful software, exploring
          the future of fintech, and turning ideas into practical tools.
        </p>
        <a
          href="#personal-projects"
          className="rounded-lg bg-blue-500 px-10 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-blue-600"
        >
          Projects
        </a>
      </section>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 transform">
        <a href="#projects" className="animate-bounce text-2xl text-blue-500">
          ↓
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 transform">
        <a href="#about" className="animate-bounce text-2xl text-blue-500">
          ↓
        </a>
      </div>

      {/* About Section */}
      <section id="about" className="bg-white px-6 py-36 md:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 rounded-lg bg-blue-500 px-10 py-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-blue-600">
            Introduction
          </h2>
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
            {/* About Me Text */}
            <div className="text-left">
              <h3 className="mb-6 text-4xl font-extrabold text-blue-500">About Me</h3>
              <p className="text-justify text-lg text-gray-700">
                I’m a senior studying Computer Science and Economics at Wake Forest University
                focused on building intelligent and scalable software systems. My work sits at the
                intersection of machine learning, finance, cloud engineering, and automation. I
                design and implement end to end projects including data pipelines, backend
                services, interactive frontends, and simulation engines. I actively integrate AI
                copilots such as GPT and Claude into my workflow to accelerate prototyping,
                strengthen architecture decisions, and continuously sharpen my engineering
                judgment. I am driven by solving complex real world problems with clean systems
                thinking and practical execution.
              </p>
            </div>

            {/* Skills Section */}
            <div>
              <h3 id="skills" className="mb-6 text-4xl font-extrabold text-blue-500">
                My Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                {[
                  "Python",
                  "Java",
                  "C",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Angular",
                  "Spring Boot",
                  "Apache Kafka",
                  "scikit-learn",
                  "Pandas",
                  "SQL",
                  "Unix/Linux",
                  "Microsoft Azure OpenAI",
                  "GitHub",
                  "VS Code",
                  "IntelliJ",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What am I up to now Section */}
      <section id="current" className="bg-gray-50 px-6 py-10 md:px-24">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-blue-500">
          What am I up to now?
        </h2>
        <ul className="mx-auto max-w-3xl list-inside list-disc space-y-4 text-lg text-gray-700 marker:text-red-500">
          <li>
            Deepening expertise in cloud engineering, full-stack development, and data science
            through production-style projects and applied virtual internships
          </li>
          <li>
            Building AI-driven tools and simulations that blend machine learning, finance, and
            automation—translating technical concepts into working, deployable systems
          </li>
          <li>
            Leveraging AI copilots such as Claude and GPT as part of my development workflow to
            accelerate prototyping, improve code quality, and continuously refine my understanding
            of modern software systems
          </li>
        </ul>
      </section>

      {/* Scroll Down Indicator */}
      <div className="flex justify-center py-10">
        <a href="#projects" className="animate-bounce text-2xl text-blue-500">
          ↓
        </a>
      </div>

      {/* Projects Section */}
      <section id="work" className="bg-white px-6 py-10 md:px-24">
        <h2 className="mb-16 rounded-lg bg-blue-500 px-10 py-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-blue-600">
          Work Experiences
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* NYC Administration for Children’s Services (ACS), Software Development Intern */}
          <div className="rounded-lg border p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
              NYC ACS Software Development Intern
            </h3>
            <p className="text-center text-sm text-gray-700">
              Interned with NYC Administration for Children’s Services (ACS) on their Office of
              Information Technology team
            </p>
            <ul className="mt-4 list-inside list-disc text-sm text-gray-700">
              <li>
                Built and optimized an internal chatbot platform by integrating Azure OpenAI into a
                Spring Boot backend with retrieval-augmented generation (RAG).
              </li>
              <li>
                Enhanced Angular frontend components to boost responsiveness and cut load times by
                1.2s.
              </li>
              <li>Designed and tested UX-driven features that reduced navigation errors by 15%.</li>
              <li>
                Blended full-stack development, LLM integration, and performance optimization to
                improve workflows for 200+ internal staff.
              </li>
            </ul>
          </div>

          {/* JPMC Software Engineering Micro-Internship */}
          <div className="rounded-lg border p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
              JP Morgan Software Engineering Micro-Internship
            </h3>

            <p className="text-center text-sm text-gray-700">
              Completed a Virtual Micro-Internship with JP Morgan Chase & Co., simulating a software
              engineering role
            </p>

            <ul className="mt-4 list-inside list-disc text-sm text-gray-700">
              <li>Completed a virtual micro-internship simulating a software engineering role</li>
              <li>
                Set up a Spring Boot backend and integrated Apache Kafka for streaming transactions
              </li>
              <li>Debugged asynchronous data flow to ensure reliable event processing</li>
              <li>
                Hands-on dive into enterprise software engineering, scalable systems, and modern
                fintech infrastructure
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white px-6 py-10 md:px-24">
        <h2 className="mb-16 rounded-lg bg-blue-500 px-10 py-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-blue-600">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* XRP Autonomous Robot */}
          <div className="rounded-lg border p-6 shadow transition hover:shadow-lg">
            <h2 className="mb-4 text-center text-xl font-bold text-gray-800">
              XRP Autonomous Robot
            </h2>
            <p className="text-center text-sm text-gray-700">
              Engineered an autonomous XRP robot in Python with sensor integration and a
              line-following control loop. As President of the Robotics Club, I led technical
              decisions, coordinated build/testing, and mentored newer members through wiring,
              calibration, and debugging. The result is a small “brains-on-wheels” system that
              makes real-time decisions from sensor input and reliably navigates a course.
            </p>
          </div>

          <div className="rounded-lg border p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
              NHL Machine Learning Forecast Engine
            </h3>
            <p className="text-center text-sm text-gray-700">
              Built an end-to-end machine learning pipeline to forecast NHL team performance and
              generate projected standings. Aggregated and cleaned team metrics, engineered
              features from advanced stats, trained regression models, and evaluated performance
              with standard metrics. Designed the project to support season simulations and future
              deployment to a web dashboard.
            </p>
          </div>

          <div className="rounded-lg border p-6 shadow transition hover:shadow-lg">
            <h4 className="mb-4 text-center text-xl font-bold text-gray-800">
              Investment Strategy Simulator
            </h4>
            <p className="text-center text-sm text-gray-700">
              Developed a backtesting simulator that lets users compare portfolio strategies over
              historical market data. Users can input tickers, configure assumptions (starting
              capital, rebalancing, allocations), and run simulations that output performance and a
              clear narrative of what happened. Built with a clean separation between data
              ingestion, strategy logic, and results so it’s easy to extend to a frontend UI.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll Up Indicator */}
      <div className="flex justify-center py-10">
        <a href="#about" className="animate-bounce text-2xl text-blue-500">
          ↑
        </a>
      </div>
    </div>
  );
}
