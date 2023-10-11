import '../global.css';
import '../firebase'
import type { Metadata } from 'next'
import type { AppProps } from 'next/app'

export const metadata: Metadata = {
  title: 'Cats Paradise - Portal',
  description: 'Portal de transparencia para Paradise Cats',
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
