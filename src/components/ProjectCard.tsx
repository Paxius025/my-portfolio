import type { ProjectType } from "../data/projects";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="bg-white dark:bg-slate-900 border rounded-lg p-4 shadow-sm">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {project.description}
      </p>
      <div className="mt-4 flex gap-2">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-3 py-2 bg-indigo-600 text-white rounded-md"
          >
            View
          </a>
        )}
      </div>
    </div>
  );
}
