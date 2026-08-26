import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Section, Kicker } from '@/components/ui'
import ContactPageForm from '@/components/ContactPageForm'
import Icon from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contactez Doxamed pour construire votre dispositif de prévention, de dépistage ou d'accès aux soins.",
}

const TRUST = [
  { icon: 'shield', label: 'Conforme RGPD & secret médical' },
  { icon: 'calendar', label: 'Retour sous 24h ouvrées' },
  { icon: 'doctor', label: 'Suivi par un expert Doxamed' },
  { icon: 'spark', label: '98% de satisfaction usagers' },
] as const

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Construisons votre dispositif santé."
        lead="Précisez votre besoin ci-dessous : un expert Doxamed l'étudie et vous recontacte sous 24h ouvrées."
        crumb={[{ label: 'Contact', href: '/contact' }]}
      />

      <Section className="py-16 sm:py-24">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12">
          <ContactPageForm />

          <aside className="space-y-6">
            <div className="rounded-2xl border border-mist bg-white p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-electric-2 mb-4">Coordonnées</p>
              <ul className="space-y-3 text-sm text-ink-800">
                <li>contact@doxamed.com</li>
                <li>Paris, France</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-mist bg-white p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-electric-2 mb-4">Notre engagement</p>
              <ul className="space-y-4">
                {TRUST.map((t) => (
                  <li key={t.label} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-electric-dim text-electric-2 flex items-center justify-center shrink-0">
                      <Icon name={t.icon} className="w-4 h-4" />
                    </span>
                    <span className="text-sm text-slate">{t.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-mist bg-white p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-electric-2 mb-3">Rejoindre l&rsquo;équipe</p>
              <p className="text-sm text-slate mb-4">Postes disponibles et candidatures spontanées.</p>
              <Link href="/carrieres" className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-2">
                Voir nos offres <Icon name="arrowRight" className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
