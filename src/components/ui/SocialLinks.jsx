import { Mail } from 'lucide-react'
import { socialLinks } from '@/data/social'
import { Meta } from 'react-router-dom'

// lucide-react dropped brand marks; keep small inline SVGs for GitHub/LinkedIn.
const GithubMark = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a10.98 10.98 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .32.21.67.8.56A11.51 11.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
  </svg>
)
const FacebookMark = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" />
  </svg>
)

const TiktokMark = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M16.6 0h-3.4v16.3c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1c.3 0 .6 0 .9.1V9.7c-.3 0-.6-.1-.9-.1-3.6 0-6.5 2.9-6.5 6.5S6.5 22.6 10.1 22.6s6.5-2.9 6.5-6.5V8.4c1.3.9 2.9 1.5 4.6 1.5V6.5c-2.6 0-4.6-2.1-4.6-4.6V0Z" />
  </svg>
)

const LinkedinMark = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.25h4V23h-4V8.25ZM8.5 8.25h3.83v2.01h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55V23h-4V8.25Z" />
  </svg>
)

const iconMap =  {
  github: GithubMark,
  linkedin: LinkedinMark,
  mail: Mail,
  meta: FacebookMark,
  tiktok: TiktokMark,
}

export default function SocialLinks({ className }) {
  return (
    <div className={className || 'flex items-center gap-4'}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon]
        return (
          <a
            key={link.label}
            href={link.url}
            target={link.icon === 'mail' ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={link.label}
            className="text-text-muted transition-colors hover:text-mint"
          >
            {Icon && <Icon size={18} />}
          </a>
        )
      })}
    </div>
  )
}
