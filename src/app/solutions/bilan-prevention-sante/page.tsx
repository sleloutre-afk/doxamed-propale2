import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Section, Kicker, StatStrip, CTABanner } from '@/components/ui'
import ContactCTAButton from '@/components/ContactCTAButton'
import BodyMap from '@/components/BodyMap'
import PatientJourney from '@/components/PatientJourney'
import { ClientRefCard } from '@/components/Cards'
import Icon from '@/components/Icons'
import Picto from '@/components/pictos'
import { CLIENT_REFS, BPS_EXAMS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Bilan de prévention santé (BPS)',
  description: "Un dispositif pensé pour les entreprises, avec un vrai bénéfice pour chaque salarié : 8 fonctions vitales explorées en 2h30, sur site, avec suivi médical à distance.",
}

// The BPS parcours itself covers 8 functions — vaccination and santé mentale
// are part of Doxamed's broader "offre 360°" (see home page) but not this
// specific 2h30 checkup.
const BPS_ONLY_EXAMS = BPS_EXAMS.filter((e) => e.key !== 'vaccination' && e.key !== 'sante-mentale')

const PROMISE = [
  { icon: 'calendar', label: 'Sur rendez-vous' },
  { icon: 'building', label: '100% dans vos locaux, clé en main' },
  { picto: 'operateur', label: "Chef d'opération dédié" },
  { picto: 'infirmiere', label: 'IDE présente tout au long du bilan' },
  { picto: 'teleconsultation', label: 'Médecin à distance' },
  { icon: 'report', label: 'Rapport complet et recommandations' },
] as const

export default function BPSPage() {
  const adpRefs = CLIENT_REFS.filter((c) => c.category === 'Bilans de prévention santé')

  return (
    <>
      <PageHero
        kicker="Solution n°1 — BPS"
        title={<>Le bilan de prévention santé : <span className="text-electric-2">un checkup 360° en 2h30.</span></>}
        lead="Un dispositif pensé pour les entreprises — et un vrai bénéfice pour chaque salarié : 8 fonctions vitales explorées sur site, en 2h30, sans rupture d'activité."
        crumb={[{ label: 'Nos solutions', href: '/solutions' }, { label: 'Bilan de prévention santé', href: '/solutions/bilan-prevention-sante' }]}
        video="/videos/bps.mp4"
      />

      <Section className="py-16 sm:py-20 -mt-8 sm:-mt-14 relative">
        <StatStrip
          stats={[
            { value: '1 000+', label: 'bilans réalisés en 8 mois' },
            { value: '98%', label: 'de satisfaction usagers' },
            { value: '2h30', label: 'de parcours complet' },
            { value: '8', label: 'fonctions vitales explorées' },
          ]}
        />
      </Section>

      {/* Promise */}
      <Section className="py-8 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PROMISE.map((p) => (
            <div key={p.label} className="flex flex-col items-center text-center gap-3 rounded-xl border border-mist bg-white p-4">
              {'picto' in p ? (
                <Picto name={p.picto} className="w-5 h-5 text-electric-2" />
              ) : (
                <Icon name={p.icon} className="w-5 h-5 text-electric-2" />
              )}
              <span className="text-[0.75rem] text-slate leading-snug">{p.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Body map */}
      <section className="bg-paper-2 py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop-light" />
        <Section className="relative">
          <Kicker>Examens couverts</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
            8 fonctions vitales explorées en un seul parcours.
          </h2>
          <BodyMap exams={BPS_ONLY_EXAMS} image="/body/body.png" />
        </Section>
      </section>

      {/* Patient journey */}
      <Section className="py-20 sm:py-28">
        <Kicker>Parcours patient</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-4 max-w-2xl text-balance">
          Avant, sur site, à distance, après : un parcours entièrement piloté par Doxamed.
        </h2>
        <p className="text-slate max-w-2xl mb-10 leading-relaxed">
          Déployé à l&rsquo;initiative de l&rsquo;entreprise, ce parcours représente un vrai bénéfice pour chaque
          salarié : un temps dédié à sa santé, pris en charge de bout en bout, sans avance de frais ni contrainte
          d&rsquo;organisation.
        </p>
        <PatientJourney />
        <div className="mt-10">
          <ContactCTAButton label="Déployer un BPS dans mon entreprise" need="Bilan de prévention santé (BPS)" />
        </div>
      </Section>

      {/* Client results */}
      <Section className="py-20 sm:py-28">
        <Kicker>Déjà déployé</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
          Un succès immédiat chez chaque nouveau client.
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {adpRefs.map((c) => (
            <ClientRefCard key={c.name} c={c} />
          ))}
        </div>
        <p className="mt-8 text-slate-2 text-sm max-w-xl">
          2 prix reçus en 2025 pour le centre de bilan de prévention santé du Groupe ADP : Médaille d&rsquo;or
          Projet RH d&rsquo;envergure (Républik RH) et Trophée Or « Bilan et prévention santé » (Groupe RH&M).
        </p>
      </Section>

      <Section className="py-20 sm:py-28">
        <div className="grid sm:grid-cols-3 gap-5">
          <Link href="/solutions/depistage-vaccination" className="lift rounded-2xl border border-mist bg-white p-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-electric-2 mb-2">Solution liée</p>
            <p className="font-semibold text-ink-800">Dépistage & vaccination</p>
          </Link>
          <Link href="/modes-intervention/in-situ" className="lift rounded-2xl border border-mist bg-white p-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-electric-2 mb-2">Mode d&rsquo;intervention</p>
            <p className="font-semibold text-ink-800">In situ, dans vos locaux</p>
          </Link>
          <Link href="/a-propos/gouvernance" className="lift rounded-2xl border border-mist bg-white p-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-electric-2 mb-2">Conseil scientifique</p>
            <p className="font-semibold text-ink-800">Une gouvernance médicale reconnue</p>
          </Link>
        </div>
      </Section>

      <CTABanner title="Prêt à déployer un bilan de prévention santé ?" />
    </>
  )
}
