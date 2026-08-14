import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

/**
 * Tracks light/dark theme, persisted in localStorage and applied via a
 * `data-theme` attribute on <html>. The site is designed dark-first.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.localStorage.getItem(STORAGE_KEY) || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
