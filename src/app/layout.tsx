import type { Metadata } from 'next'
import { Figtree, Fraunces } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import { ContactModalProvider } from '@/components/ContactModalProvider'

// "Warm Human Care" direction: Figtree (rounded humanist sans) for body/UI,
// Fraunces (warm soft-curved serif) for display headlines and numerals —
// replacing Propale 1's Inter + IBM Plex Mono "Clinique Data-Driven" pairing.
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree', display: 'swap' })
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://propale2.doxamed-refonte.fr'),
  title: {
    default: 'Doxamed — La santé pour tous. Partout.',
    template: '%s — Doxamed',
  },
  description:
    "Doxamed déploie des solutions de prévention, dépistage et accès aux soins directement en entreprise et dans les territoires : bilans de prévention santé, prévention des risques psychosociaux, campagnes de dépistage et vaccination, espaces de santé mobiles.",
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${figtree.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <ContactModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </ContactModalProvider>
      </body>
    </html>
  )
}
