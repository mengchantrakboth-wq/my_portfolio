import Container from '@/components/common/Container'
import SocialLinks from '@/components/ui/SocialLinks'
import { siteConfig } from '@/constants/siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-mono text-sm text-text-muted">
            <span className="text-mint">$</span> echo &quot;built by {siteConfig.name}&quot;
          </p>
          <p className="mt-1 text-sm text-text-faint">
            {siteConfig.university} · {year}
          </p>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  )
}
