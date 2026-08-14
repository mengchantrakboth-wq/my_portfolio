import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import { siteConfig } from '@/constants/siteConfig'

const LINES = [
  { cmd: 'whoami', out: siteConfig.name },
  { cmd: 'cat role.txt', out: siteConfig.role },
  { cmd: 'cat location.txt', out: `${siteConfig.university}, ${siteConfig.location}` },
]

/**
 * Signature element: a boot-sequence terminal that types itself out on load.
 * Grounded in the subject — a dev who lives in Git Bash and NetBeans.
 */
export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= LINES.length) return
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 550)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <section className="bg-grid relative overflow-hidden border-b border-border py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96 opacity-20"
        style={{
          background:
            'radial-gradient(600px circle at 30% 0%, var(--color-mint), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="max-w-3xl">
          <div className="rounded-sm border border-border bg-surface/80 p-5 font-mono text-sm shadow-2xl backdrop-blur">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-mint/70" />
              <span className="ml-3 text-text-faint">bash — portfolio</span>
            </div>
            {LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="mb-1">
                <span className="text-mint">$</span>{' '}
                <span className="text-text">{line.cmd}</span>
                <div className="text-text-muted">{line.out}</div>
              </div>
            ))}
            <span className="text-mint">$</span>{' '}
            <span className="caret text-text">▍</span>
          </div>

          <h1 className="text-glow mt-8 font-display text-4xl font-semibold leading-tight text-text md:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-text-muted">
            {siteConfig.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button as={Link} to="/projects">
              View projects
            </Button>
            <Button as={Link} to="/contact" variant="ghost">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
