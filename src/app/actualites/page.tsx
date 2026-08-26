import type { Metadata } from 'next'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import NewsGrid from '@/components/NewsGrid'
import Reveal from '@/components/Reveal'
import { NEWS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Actualités & médias',
  description: 'Articles, retombées presse, réseaux sociaux et livres blancs Doxamed : toute son actualité au même endroit.',
}

export default function ActualitesPage() {
  return (
    <>
      <PageHero
        kicker="Actualités & médias"
        title={<>Ce que nous construisons, ce que <span className="text-electric-2">la presse en dit.</span></>}
        lead="Articles, reportages terrain, interviews, retombées médiatiques et livres blancs : le hub média de Doxamed."
        crumb={[{ label: 'Actualités', href: '/actualites' }]}
      />

      <Section className="py-16 sm:py-24">
        <Reveal>
          <Kicker>Tous les formats</Kicker>
        </Reveal>
        <NewsGrid items={NEWS} />
      </Section>

      <CTABanner />
    </>
  )
}
