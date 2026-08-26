import type { Metadata } from 'next'
import { PageHero, Section } from '@/components/ui'

export const metadata: Metadata = { title: 'Gestion des cookies' }

export default function CookiesPage() {
  return (
    <>
      <PageHero kicker="Informations légales" title="Gestion des cookies" crumb={[{ label: 'Gestion des cookies', href: '/cookies' }]} />
      <Section className="py-16 sm:py-24 max-w-2xl">
        <div className="space-y-6 text-sm text-slate leading-relaxed">
          <p>
            Ce site utilisera des cookies de mesure d&rsquo;audience et, le cas échéant, des cookies tiers
            (intégrations vidéo, cartes). Un bandeau de consentement conforme à la réglementation CNIL sera
            intégré lors du développement du site définitif.
          </p>
          <p className="text-xs text-slate-2 italic">
            Ce contenu est un gabarit de démonstration pour la Propale 1 — il devra être finalisé lors de la
            phase de développement.
          </p>
        </div>
      </Section>
    </>
  )
}
