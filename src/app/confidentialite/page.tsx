import type { Metadata } from 'next'
import { PageHero, Section } from '@/components/ui'

export const metadata: Metadata = { title: 'Politique de confidentialité' }

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero kicker="Informations légales" title="Politique de confidentialité" crumb={[{ label: 'Politique de confidentialité', href: '/confidentialite' }]} />
      <Section className="py-16 sm:py-24 max-w-2xl">
        <div className="space-y-6 text-sm text-slate leading-relaxed">
          <p>
            Doxamed traite les données personnelles collectées via ce site en stricte confidentialité,
            conformément au RGPD et au secret médical. Contenu détaillé (finalités, base légale, durée de
            conservation, droits d&rsquo;accès et de rectification, contact DPO) à rédiger lors de la phase
            éditoriale du projet.
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
