import type { AppProps } from 'next/app'
import {DefaultSeo} from 'next-seo'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SEO from '../utils/next-seo-config'
import { ThemeProvider } from '../contexts/ThemeContext'

import GlobalStyle from '../assets/styles/global';
import { CartProvider } from '../contexts/CartContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  )
}

export default MyApp
