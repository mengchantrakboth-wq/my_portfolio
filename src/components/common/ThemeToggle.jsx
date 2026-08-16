import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={
        className ||
        'flex h-8 w-8 items-center justify-center rounded-sm border border-border text-text-muted transition-colors hover:border-mint hover:text-mint'
      }
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
