import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <SectionTitle
        index="01"
        path="~/projects"
        title="Featured projects"
        description="A few things built end to end — from schema to shipped UI."
      />
      <Container>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/projects"
            className="font-mono text-sm text-mint hover:underline"
          >
            ls -la all projects →
          </Link>
        </div>
      </Container>
    </section>
  )
}
