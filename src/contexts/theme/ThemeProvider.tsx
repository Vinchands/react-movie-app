import { useState, useEffect  } from 'react'
import ThemeContext from './ThemeContext'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  
  const [theme, setTheme] = useState<string | null>('light')
  
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) setTheme(currentTheme)
  }, [])
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
