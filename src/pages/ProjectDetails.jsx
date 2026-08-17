import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Users, BookOpen, Link as LinkIcon, ExternalLink } from 'lucide-react'
import Container from '@/components/common/Container'
import { projects } from '@/data/projects'

export default function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) return <Navigate to="/projects" replace />

  return (
    <section className="py-16 md:py-24">
      <Container>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-text-muted hover:text-mint"
        >
          <ArrowLeft size={16} /> cd ../projects
        </Link>

        <div className="mt-6 flex items-center gap-3 font-mono text-xs text-text-faint">
          <span className="text-mint">{project.path}</span>
          <span className="rounded-sm border border-border px-2 py-0.5">
            {project.type}
          </span>
          <span>{project.year}</span>
        </div>

        <h1 className="mt-3 font-display text-3xl font-semibold text-text md:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-text-muted">
          {project.description}
        </p>

        {(project.links.repo || project.links.demo) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-text-muted hover:text-mint hover:border-mint"
              >
                <LinkIcon size={14} /> Repo
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-text-muted hover:text-mint hover:border-mint"
              >
                <ExternalLink size={14} /> Live demo
              </a>
            )}
          </div>
        )}

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="mt-8 w-full rounded-sm border border-border object-cover"
          />
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_260px]">
          <div className="space-y-6">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wide text-mint">
                My role
              </h2>
              <p className="mt-2 text-text-muted">{project.role}</p>
            </div>
            {project.team.length > 0 && (
              <div>
                <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-mint">
                  <Users size={14} /> Team
                </h2>
                <p className="mt-2 text-text-muted">{project.team.join(', ')}</p>
              </div>
            )}
            <div>
              <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-mint">
                <BookOpen size={14} /> Context
              </h2>
              <p className="mt-2 text-text-muted">{project.course}</p>
            </div>
          </div>

          <div className="h-fit rounded-sm border border-border bg-surface p-5">
            <h2 className="font-mono text-xs uppercase tracking-wide text-mint">
              Stack
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm bg-surface-raised px-2 py-1 font-mono text-xs text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}