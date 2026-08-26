import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import { MetierCard } from '@/components/Cards'
import Icon from '@/components/Icons'
import { METIERS, CONSEIL_INGENIERIE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Nos solutions de santé',
  description: "Bilan de prévention santé, risques psychosociaux, dépistage & vaccination, accès aux soins, conseil & ingénierie santé : les solutions complémentaires de Doxamed.",
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        kicker="Nos solutions de santé"
        title={<>Des solutions complémentaires, un seul objectif : la santé <span className="text-electric-light">pour tous, partout.</span></>}
        lead="De la prévention à l'accès aux soins, Doxamed conçoit des dispositifs médicaux exigeants, pilotés par des professionnels de santé et déployés au plus près de vos équipes."
        crumb={[{ label: 'Nos solutions', href: '/solutions' }]}
        image="/photos/solutions.png"
      />

      <Section className="py-20 sm:py-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METIERS.map((m) => (
            <MetierCard key={m.slug} m={m} />
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-mist bg-white p-7 sm:p-9 grid sm:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-electric-2 mb-2">05 — {CONSEIL_INGENIERIE.name}</p>
            <p className="text-slate leading-relaxed max-w-2xl">{CONSEIL_INGENIERIE.pitch}</p>
          </div>
          <Link
            href="/solutions/conseil-ingenierie"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-2 whitespace-nowrap"
          >
            Découvrir <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <section className="bg-paper-2 py-20 sm:py-28">
        <Section>
          <Kicker>Comment nous intervenons</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-6 max-w-2xl text-balance">
            Chaque solution est déployable selon 4 modes d&rsquo;intervention.
          </h2>
          <p className="text-slate max-w-2xl leading-relaxed mb-8">
            In situ dans vos locaux, en cabine autonome, en unité itinérante ou en gare : le socle médical
            reste le même, seul le format s&rsquo;adapte à votre contexte.
          </p>
          <Link href="/modes-intervention" className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-2">
            Voir nos modes d&rsquo;intervention <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </Section>
      </section>

      <CTABanner />
    </>
  )
}
