import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import SkillCard from '@/components/ui/SkillCard'
import { skillGroups } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <SectionTitle
        index="02"
        path="~/skills"
        title="Toolbox"
        description="Languages, frameworks, and tools used across coursework and projects."
      />
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard key={group.label} label={group.label} items={group.items} />
          ))}
        </div>
      </Container>
    </section>
  )
}
