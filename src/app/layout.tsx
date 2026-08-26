import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import { ContactModalProvider } from '@/components/ContactModalProvider'

// Propale 2 keeps Propale 1's Inter + IBM Plex Mono typography — the
// client asked to revert the earlier Figtree/Fraunces test. All
// differentiation vs Propale 1 happens through layout structure,
// graphic treatment and motion (see components), not typography or color.
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono-ibm', display: 'swap' })

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
    <html lang="fr" className={`${inter.variable} ${plexMono.variable}`}>
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
