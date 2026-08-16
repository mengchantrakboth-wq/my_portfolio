import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import Skills from '@/sections/Skills'
import Education from '@/sections/Education'
import Certificates from '@/sections/Certificates'
import { siteConfig } from '@/constants/siteConfig'
import profilePhoto from '../assets/icons/profile/pic_profile.jpg'

export default function About() {
  return (
    <>
      <section className="border-b border-border py-20 md:py-28">
        <SectionTitle index="~" path="~/about" title="About me" />
        <Container>
          <div className="grid gap-10 md:grid-cols-[220px_1fr]">
            <div className="aspect-square w-full max-w-[220px] overflow-hidden rounded-sm border border-border bg-surface">
              <img
                src={profilePhoto}
                alt={`Portrait of ${siteConfig.name}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
                {siteConfig.summary}
              </p>
              <p className="mt-4 max-w-2xl text-text-muted">
                I'm currently studying at {siteConfig.university}, {siteConfig.department}.
                My coursework and side projects cover web development end to end,
                a Java desktop application, and networking fundamentals — so this
                site is organized the way I organize a codebase: by directory.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Skills />
      <Education />
      <Certificates />
    </>
  )
}
