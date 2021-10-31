import type { AppProps } from 'next/app'
import {DefaultSeo} from 'next-seo'

import SEO from '../utils/next-seo-config'
import { ThemeProvider } from '../contexts/ThemeContext'

import GlobalStyle from '../assets/styles/global';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
