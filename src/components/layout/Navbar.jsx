import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, TerminalSquare } from 'lucide-react'
import Container from '@/components/common/Container'
import { navLinks } from '@/constants/navigation'
import { siteConfig } from '@/constants/siteConfig'
import { useScroll } from '@/hooks/useScroll'
import { cx } from '@/utils/helpers'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScroll()

  return (
    <header
      className={cx(
        'sticky top-0 z-50 border-b transition-colors',
        scrolled
          ? 'border-border bg-ink/90 backdrop-blur'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-mono text-sm text-text"
          onClick={() => setOpen(false)}
        >
          <TerminalSquare size={18} className="text-mint" aria-hidden="true" />
          <span className="text-text-muted">~/</span>
          <span>{siteConfig.name.toLowerCase().replace(/\s+/g, '-')}</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cx(
                  'font-mono text-sm transition-colors',
                  isActive ? 'text-mint' : 'text-text-muted hover:text-text',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="text-text md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-border bg-ink md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cx(
                    'rounded-sm px-2 py-2.5 font-mono text-sm',
                    isActive ? 'text-mint' : 'text-text-muted',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}
