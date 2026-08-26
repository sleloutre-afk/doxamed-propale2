import type { Metadata } from 'next'
import { PageHero, Section, Kicker } from '@/components/ui'
import ContactCTAButton from '@/components/ContactCTAButton'
import Icon from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Carrières',
  description: 'Rejoignez les équipes Doxamed : postes disponibles et candidatures spontanées.',
}

const POSTS = [
  { title: 'Infirmier(ère) diplômé(e) d’État', contract: 'CDI / vacations', location: 'Île-de-France' },
  { title: 'Chef(fe) d’opération terrain', contract: 'CDI', location: 'National — mobilité' },
  { title: 'Médecin généraliste — téléconsultation', contract: 'Collaboration libérale', location: 'Télétravail' },
]

export default function CarrieresPage() {
  return (
    <>
      <PageHero
        kicker="Carrières"
        title="Rejoindre l'équipe qui réinvente la santé de demain."
        lead="Plus de 100 professionnels de santé et experts engagés aux côtés de Doxamed et Teledok."
        crumb={[{ label: 'Contact', href: '/contact' }, { label: 'Carrières', href: '/carrieres' }]}
      />

      <Section className="py-20 sm:py-24">
        <Kicker>Postes disponibles</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
          Des opportunités sur le terrain et à distance.
        </h2>
        <div className="space-y-4">
          {POSTS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-mist bg-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-semibold text-ink-800">{p.title}</p>
                <p className="text-sm text-slate mt-1">{p.contract} · {p.location}</p>
              </div>
              <ContactCTAButton label="Postuler" need="Autre demande" variant="outline" />
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 sm:py-24">
        <div className="relative rounded-3xl bg-paper-2 border border-mist overflow-hidden px-6 py-16 text-center">
          <div className="absolute inset-0 grid-backdrop-light opacity-70" />
          <span className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-electric/25 pointer-events-none" />
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-electric-dim flex items-center justify-center mx-auto mb-6">
              <Icon name="users" className="w-6 h-6 text-electric-2" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-800 mb-4 max-w-lg mx-auto text-balance">
              Aucun poste ne correspond ? Envoyez-nous une candidature spontanée.
            </h2>
            <div className="mt-6">
              <ContactCTAButton label="Candidature spontanée" need="Autre demande" />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
