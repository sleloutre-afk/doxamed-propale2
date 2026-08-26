import type { Metadata } from 'next'
import { PageHero, Section } from '@/components/ui'

export const metadata: Metadata = { title: 'CGV' }

export default function CGVPage() {
  return (
    <>
      <PageHero kicker="Informations légales" title="Conditions générales de vente" crumb={[{ label: 'CGV', href: '/cgv' }]} />
      <Section className="py-16 sm:py-24 max-w-2xl">
        <div className="space-y-6 text-sm text-slate leading-relaxed">
          <p>
            Conditions générales de prestation de services applicables aux dispositifs de prévention, de
            dépistage et d&rsquo;accès aux soins déployés par Doxamed. Contenu à rédiger avec le service
            juridique de Doxamed.
          </p>
          <p className="text-xs text-slate-2 italic">
            Ce contenu est un gabarit de démonstration pour la Propale 1 — il devra être rédigé et validé
            juridiquement avant mise en ligne.
          </p>
        </div>
      </Section>
    </>
  )
}
