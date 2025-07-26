import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from './layouts/navbar'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter', 
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}
