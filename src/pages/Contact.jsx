import { Mail, MapPin } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'
import SocialLinks from '@/components/ui/SocialLinks'
import { siteConfig } from '@/constants/siteConfig'

export default function Contact() {
  return (
    <section className="py-20 md:py-28">
      <SectionTitle
        index="~"
        path="~/contact"
        title="Get in touch"
        description="Open to internships, team projects, and anything worth a repo."
      />
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-sm border border-border bg-surface p-6">
            <div className="flex items-center gap-3 text-text-muted">
              <Mail size={18} className="text-mint" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-text">
                {siteConfig.email}
              </a>
            </div>
            <div className="mt-3 flex items-center gap-3 text-text-muted">
              <MapPin size={18} className="text-mint" />
              {siteConfig.location}
            </div>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <form
            className="space-y-4 rounded-sm border border-border bg-surface p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="font-mono text-xs text-text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-sm border border-border bg-surface-raised px-3 py-2 text-sm text-text outline-none focus-visible:border-mint"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs text-text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-sm border border-border bg-surface-raised px-3 py-2 text-sm text-text outline-none focus-visible:border-mint"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs text-text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-sm border border-border bg-surface-raised px-3 py-2 text-sm text-text outline-none focus-visible:border-mint"
              />
            </div>
            <Button type="submit">Send message</Button>
          </form>
        </div>
      </Container>
    </section>
  )
}
