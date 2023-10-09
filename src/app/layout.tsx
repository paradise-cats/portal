import './firebase'
import './globals.css'
import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

const prompt = Prompt({ weight: ['400', '500', '700'], style: ["normal"], subsets:['latin'] })

export const metadata: Metadata = {
  title: 'Cats Paradise - Portal',
  description: 'Portal de transparencia para Paradise Cats',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
