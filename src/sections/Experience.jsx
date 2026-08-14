import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import { experience } from '@/data/experience'

/** Rendered like a git log — each entry is a unit of hands-on work, not a job title. */
export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <SectionTitle
        index="03"
        path="~/experience"
        title="Project log"
        description="git log --oneline of the hands-on work behind this portfolio."
      />
      <Container>
        <ol className="relative space-y-8 border-l border-border pl-8">
          {experience.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-mint" />
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-lg font-semibold text-text">
                  {item.title}
                </h3>
                <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-mint">
                  {item.tag}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-sm text-text-muted">{item.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
