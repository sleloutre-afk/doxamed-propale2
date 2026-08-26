import type { Metadata } from 'next'
import { PageHero, Section, Kicker, StatStrip, CTABanner } from '@/components/ui'
import ContactCTAButton from '@/components/ContactCTAButton'
import Icon from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Prévention des risques psychosociaux',
  description: "Évaluation, ligne d'écoute, intervention de crise, formation managers : l'offre RPS en 4 modules complémentaires de Doxamed.",
}

const MODULES = [
  {
    icon: 'brain',
    name: 'Plateforme d’évaluation RPS',
    detail: "Évaluation des risques psychosociaux des salariés en entreprise, analyse et cartographie de la santé mentale par entité ou population.",
  },
  {
    icon: 'phone',
    name: 'Ligne d’écoute',
    detail: 'Accès à un psychologue dans les 24h après demande, pour les salariés en situation de détresse ou de mal-être au travail.',
  },
  {
    icon: 'shield',
    name: 'Intervention de crise',
    detail: 'Déploiement d’un psychologue spécialisé sur site en moins de 48h en cas de situation critique.',
  },
  {
    icon: 'users',
    name: 'Formation managers',
    detail: 'Formation et accompagnement des équipes au repérage des signaux faibles et à la gestion des charges de travail.',
  },
] as const

export default function RPSPage() {
  return (
    <>
      <PageHero
        kicker="Solution n°2 — RPS"
        title={<>Prévenir, écouter, intervenir : <span className="text-electric-light">la santé mentale</span> au cœur du travail.</>}
        lead="Un dispositif en quatre modules d'évaluation, d'accompagnement et de prévention des risques psychosociaux, pensé pour les entreprises."
        crumb={[{ label: 'Nos solutions', href: '/solutions' }, { label: 'Risques psychosociaux', href: '/solutions/risques-psychosociaux' }]}
        video="/videos/rps.mp4"
      />

      <Section className="py-16 sm:py-20 -mt-8 sm:-mt-14 relative">
        <StatStrip
          stats={[
            { value: '<24h', label: 'accès à un psychologue' },
            { value: '<48h', label: 'intervention de crise sur site' },
            { value: '4', label: 'modules complémentaires' },
          ]}
        />
      </Section>

      <Section className="py-20 sm:py-24">
        <Kicker>Notre offre</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
          Une offre basée sur le déploiement de 4 modules complémentaires.
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {MODULES.map((m) => (
            <div key={m.name} className="rounded-2xl border border-mist bg-white p-7 sm:p-8">
              <div className="w-11 h-11 rounded-xl bg-electric-dim text-electric-2 flex items-center justify-center mb-6">
                <Icon name={m.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-ink-800 mb-2.5">{m.name}</h3>
              <p className="text-sm text-slate leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-ink-800 py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop" />
        <Section className="relative">
          <div className="max-w-2xl">
            <Kicker dark>Un enjeu national</Kicker>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-6 text-balance">
              Un dispositif qui répond aux impératifs psychologiques du moment.
            </h2>
            <ul className="space-y-4 text-white/65 text-sm leading-relaxed">
              <li className="flex gap-3">
                <Icon name="spark" className="w-4 h-4 text-electric-light shrink-0 mt-0.5" />
                Première charte « Santé mentale et emploi » lancée en août 2025, qui invite les entreprises à
                s&rsquo;engager pour faire de la santé mentale au travail un levier de performance durable et de
                bien-être collectif (site du gouvernement).
              </li>
              <li className="flex gap-3">
                <Icon name="spark" className="w-4 h-4 text-electric-light shrink-0 mt-0.5" />
                La santé mentale, « grande cause nationale » de 2025 selon Emmanuel Macron.
              </li>
            </ul>
          </div>
        </Section>
      </section>

      <Section className="py-20 sm:py-28 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-800 mb-4 text-balance">
          Protégez la santé mentale de vos équipes
        </h2>
        <p className="text-slate max-w-lg mx-auto mb-8">
          Échangez avec un expert Doxamed pour construire le dispositif RPS adapté à votre organisation.
        </p>
        <ContactCTAButton label="Discuter de mon dispositif RPS" need="Prévention des risques psychosociaux" />
      </Section>

      <CTABanner />
    </>
  )
}
