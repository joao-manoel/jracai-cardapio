import { ReactNode, createContext } from 'react'
import { 
  DefaultTheme, 
  ThemeProvider as StyledThemeProvider } from 'styled-components';

import defaultTheme from '../assets/styles/themes/default';

interface ThemeProviderProps {
  children: ReactNode;
}

type ThemeContextData = {
  
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{}}>
      <StyledThemeProvider theme={defaultTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}