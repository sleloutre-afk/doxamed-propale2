import type { Metadata } from 'next'
import { PageHero, Section } from '@/components/ui'

export const metadata: Metadata = { title: 'Mentions légales' }

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero kicker="Informations légales" title="Mentions légales" crumb={[{ label: 'Mentions légales', href: '/mentions-legales' }]} />
      <Section className="py-16 sm:py-24 max-w-2xl">
        <div className="prose-legal space-y-6 text-sm text-slate leading-relaxed">
          <p>
            Contenu à finaliser avec le service juridique de Doxamed : éditeur du site (Doxamed / Capitello
            Group), forme sociale, capital social, RCS, siège social, directeur de la publication, hébergeur,
            coordonnées du délégué à la protection des données.
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
