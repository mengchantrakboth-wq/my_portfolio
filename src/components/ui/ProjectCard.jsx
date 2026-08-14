import { Link } from 'react-router-dom'
import { FolderGit2, ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block rounded-sm border border-border bg-surface p-6 transition-colors hover:border-mint"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-xs text-text-faint">
          <FolderGit2 size={14} className="text-mint" aria-hidden="true" />
          {project.path}
        </div>
        <ArrowUpRight
          size={16}
          className="text-text-faint transition-colors group-hover:text-mint"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold text-text">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-text-muted">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-sm bg-surface-raised px-2 py-1 font-mono text-xs text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  )
}
