import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import { education } from '@/data/education'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <SectionTitle index="04" path="~/education" title="Education" />
      <Container>
        {education.map((item) => (
          <div
            key={item.school}
            className="flex items-start gap-4 rounded-sm border border-border bg-surface p-6"
          >
            <GraduationCap className="mt-1 shrink-0 text-mint" size={22} aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-text">
                {item.school}
              </h3>
              <p className="font-mono text-sm text-text-muted">{item.department}</p>
              <p className="mt-2 text-sm text-text-muted">{item.detail}</p>
              <p className="mt-2 font-mono text-xs text-text-faint">{item.period}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}
