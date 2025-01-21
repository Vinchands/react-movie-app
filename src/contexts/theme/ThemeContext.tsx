import { createContext } from 'react'

type ThemeContextType = {
  theme: string | null,
  setTheme: React.Dispatch<React.SetStateAction<string | null>>
}

const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  setTheme: () => {}
})

export default ThemeContext
