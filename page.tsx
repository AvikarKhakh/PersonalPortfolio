import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

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
          <a href="#projects" className="font-medium text-gray-700 hover:text-blue-600">
            Projects
          </a>
          <a href="#resume" className="font-medium text-gray-700 hover:text-blue-600">
            CV
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
        className="relative z-0 mt-[-80px] flex h-screen flex-col items-center justify-center bg-gray-100 px-6 text-center"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/triangles.png')`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay',
          backgroundColor: '#f9f9f9', // Light background color for better text visibility
        }}
      >
        <h1 className="mb-6 text-6xl font-extrabold text-black md:text-7xl">
          Hi! I'm Avikar Khakh
        </h1>
        <p className="mb-10 max-w-2xl text-xl text-gray-700 md:text-2xl">
          I'm a tech-driven problem solver with a passion for building impactful software, exploring
          the future of fintech, and turning ideas into practical tools.
        </p>
        <a
          href="#projects"
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
                I'm a rising senior studying Computer Science and Economics at Wake Forest
                University. Outside of class, I serve as President of our Robotics Club and build
                side projects that blend code with creativity. I'm especially interested in how
                technology intersects with finance, automation, and real-world impact. Whether it’s
                collaborating on software engineering projects or diving deep into data analysis,
                I’m always looking to grow, contribute, and make a difference.
              </p>
            </div>

            {/* Skills Section */}
            <div>
              <h3 id="skills" className="mb-6 text-4xl font-extrabold text-blue-500">
                My Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                {[
                  'Python',
                  'Java',
                  'C',
                  'JavaScript',
                  'R',
                  'Bash',
                  'HTML/CSS',
                  'React',
                  'Next.js',
                  'Tailwind CSS',
                  'Spring Boot',
                  'Kafka',
                  'GitHub',
                  'Unix/Linux',
                  'VS Code',
                  'Data Structures',
                  'Algorithms',
                  'IntelliJ',
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
            Exploring cloud engineering, backend/frontend development, and data science through
            hands-on projects and virtual internships
          </li>
          <li>
            Leading Wake Forest’s Robotics Club and mentoring members on autonomous systems and
            programming
          </li>
          <li>
            Building side projects that blend AI, finance, and automation—trying to turn late-night
            ideas into working prototypes
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
      <section id="projects" className="bg-white px-6 py-10 md:px-24">
        <h2 className="mb-16 rounded-lg bg-blue-500 px-10 py-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-blue-600">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* JPMC Software Engineering Micro-Internship */}
          <div className="rounded-lg border p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-4 text-center text-xl font-bold">JP Morgan SWE Micro-Internship</h3>
            <p className="text-center text-sm text-gray-700">
              Completed a virtual micro-internship through Forage simulating a role at JPMorgan
              Chase. Tackled real-world challenges like setting up a Spring Boot backend,
              integrating Apache Kafka for streaming transactions, and debugging async data flow. A
              hands-on dive into enterprise software engineering, scalable systems, and modern
              fintech infrastructure.
            </p>
          </div>

          {/* XRP Autonomous Robot */}
          <div className="rounded-lg border p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-4 text-center text-xl font-bold">XRP Autonomous Robot</h3>
            <p className="text-center text-sm text-gray-700">
              Engineered an autonomous XRP robot using Python, sensor integration, and
              line-following algorithms. As President of the Robotics Club, I took a lead role in
              the project by guiding technical decisions, coordinating tasks, and teaching newer
              members how to build and program the robot. It was like giving a Roomba a brain—and a
              mission, powered by embedded systems and real-time decision making.
            </p>
          </div>

          {/* Portfolio Website */}
          <div className="rounded-lg border p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-4 text-center text-xl font-bold">Portfolio Website</h3>
            <p className="text-center text-sm text-gray-700">
              Designed and developed from the ground up using Next.js, Tailwind CSS, and React
              Icons. This site highlights my frontend skills, personal brand, and attention to clean
              design. It is fully responsive, easy to maintain, and built to grow alongside my
              portfolio. Think of it as my digital handshake that is clean, functional, and just a
              little nerdy in the best way.{' '}
            </p>
          </div>

          {/* Authoring Assistant in Java */}
          <div className="rounded-lg border p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-4 text-center text-xl font-bold">Authoring Assistant in Java</h3>
            <p className="text-center text-sm text-gray-700">
              Built a Java based authoring tool that lets users format text with ease using
              ArrayLists and StringBuilder under the hood. It supports live preview and real time
              editing for inputs up to 1,500 characters, making it perfect for quick drafts,
              structured writing, and experimenting with creative ideas on the fly.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-gray-100 px-6 py-10 md:px-24">
        <h2 className="mb-16 rounded-lg bg-blue-500 px-10 py-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-blue-600">
          Resume / CV
        </h2>
        <div className="flex flex-col items-center">
          <p className="mb-6 text-center text-lg text-gray-700">
            Interested in learning more about my experience and skills? Download my resume below!
          </p>
          <a
            href="/Avikar_Khakh_Resume copy.docx.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-red-500 px-10 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-red-600"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Scroll Up Indicator */}
      <div className="flex justify-center py-10">
        <a href="#about" className="animate-bounce text-2xl text-blue-500">
          ↑
        </a>
      </div>
    </div>
  )
}
