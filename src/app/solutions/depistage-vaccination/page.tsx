import type { Metadata } from 'next'
import { PageHero, Section, Kicker, StatStrip, CTABanner } from '@/components/ui'
import ContactCTAButton from '@/components/ContactCTAButton'
import MiniStepper from '@/components/MiniStepper'
import { ClientRefCard } from '@/components/Cards'
import Reveal from '@/components/Reveal'
import { CLIENT_REFS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Dépistage & vaccination',
  description: "Campagnes de dépistage ciblées (TMS, cardiovasculaire, vue, audition) et vaccination des populations à risque, chaque hiver.",
}

const THEMES = [
  'Troubles musculo-squelettiques (TMS)',
  'Risque cardiovasculaire',
  'Vue',
  'Audition',
  'Métabolique',
  'Vaccination (Covid, grippe…)',
]

export default function DepistagePage() {
  const refs = CLIENT_REFS.filter((c) => ['Dépistage', 'Vaccination', 'Conférence'].includes(c.category))

  return (
    <>
      <PageHero
        kicker="Solution n°3 — Campagnes"
        title={<>Des campagnes de <span className="text-electric-2">dépistage et de vaccination</span> ciblées.</>}
        lead="Identification et prise en charge de risques spécifiques pour des populations identifiées, avec un dispositif clé en main sur site."
        crumb={[{ label: 'Nos solutions', href: '/solutions' }, { label: 'Dépistage & vaccination', href: '/solutions/depistage-vaccination' }]}
        video="/videos/vaccin.mp4"
      />

      <Section className="py-16 sm:py-20 -mt-8 sm:-mt-14 relative">
        <StatStrip
          stats={[
            { value: '1M', label: 'tests de dépistage réalisés' },
            { value: '600', label: 'vaccins — Doctolib, déc. 2025' },
            { value: '865+', label: 'consultations ORL — Air France' },
          ]}
        />
      </Section>

      <Section className="py-20 sm:py-24">
        <Reveal>
          <Kicker>Thématiques couvertes</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-8 max-w-2xl text-balance">
            Des dépistages thématiques, adaptés aux populations à risque.
          </h2>
          <div className="flex flex-wrap gap-3">
            {THEMES.map((t) => (
              <span key={t} className="px-4 py-2.5 rounded-full border border-mist text-sm text-ink-800 bg-white">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <section className="bg-paper-2 py-20 sm:py-24">
        <Section>
          <Reveal>
            <Kicker>Exemples de parcours patient</Kicker>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
              Deux parcours, deux formats, une même exigence médicale.
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal from="left">
              <p className="font-semibold text-ink-800 mb-4">Dépistage — Trouble musculosquelettique</p>
              <MiniStepper
                duration="¼h"
                steps={[
                  { icon: 'users', title: 'Prise de mesure', detail: 'Points clés dessinés sur le corps' },
                  { icon: 'target', title: 'Scanner', detail: 'Analyse posturale 3D' },
                  { icon: 'report', title: 'Analyse asynchrone', detail: 'Résultat du scanner' },
                  { icon: 'doctor', title: 'Téléconsultation médicale', optional: true },
                ]}
              />
            </Reveal>
            <Reveal from="right" delay={80}>
              <p className="font-semibold text-ink-800 mb-4">Dépistage — Risque cardiovasculaire</p>
              <MiniStepper
                duration="20’"
                steps={[
                  { icon: 'file', title: 'Questionnaire' },
                  { icon: 'pulse', title: 'Prise de constantes' },
                  { icon: 'drop', title: 'Trod', detail: 'Test rapide d’orientation diagnostique' },
                  { icon: 'doctor', title: 'Téléconsultation médicale', optional: true },
                ]}
              />
            </Reveal>
          </div>
        </Section>
      </section>

      <Section className="py-20 sm:py-28">
        <Reveal>
          <Kicker>Déjà déployé</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
            Des campagnes menées auprès de grands groupes chaque année.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {refs.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 80}>
              <ClientRefCard c={c} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <ContactCTAButton label="Organiser une campagne" need="Campagne de dépistage ou vaccination" />
        </div>
      </Section>

      <CTABanner title="Une campagne à organiser avant l'hiver ?" />
    </>
  )
}
