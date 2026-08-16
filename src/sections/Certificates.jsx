import { Award } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import { certificates } from '@/data/certificates'

export default function Certificates() {
  if (certificates.length === 0) return null

  return (
    <section id="certificates" className="py-20 md:py-28">
      <SectionTitle
        index="05"
        path="~/certificates"
        title="Certificates"
        description="Courses and credentials completed outside the classroom."
      />
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="overflow-hidden rounded-sm border border-border bg-surface"
            >
              <div className="aspect-[4/3] bg-surface-raised">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 font-mono text-xs text-mint">
                  <Award size={14} aria-hidden="true" />
                  {cert.date}
                </div>
                <h3 className="mt-2 font-display text-base font-semibold text-text">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
