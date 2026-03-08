import projectsData from "@/data/projectsData";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: "Projects" });

export default function Projects() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A selection of projects I've built and contributed to
        </p>
      </div>
      <div className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/50"
            >
              <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                {project.title}
              </h2>
              <p className="flex-1 text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-4 text-sm font-medium"
                >
                  View on GitHub &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
