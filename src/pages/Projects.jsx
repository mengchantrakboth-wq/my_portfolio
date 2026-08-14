import { useState, useMemo } from 'react'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const stacks = useMemo(() => {
    const all = new Set()
    projects.forEach((p) => p.stack.forEach((s) => all.add(s)))
    return ['All', ...Array.from(all)]
  }, [])

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.stack.includes(filter))

  return (
    <section className="py-20 md:py-28">
      <SectionTitle
        index="~"
        path="~/projects"
        title="All projects"
        description="Everything from group coursework to solo full-stack builds."
      />
      <Container>
        <div className="mb-8 flex flex-wrap gap-2">
          {stacks.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={
                'rounded-sm border px-3 py-1.5 font-mono text-xs transition-colors ' +
                (filter === s
                  ? 'border-mint text-mint'
                  : 'border-border text-text-muted hover:text-text')
              }
            >
              {s}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
