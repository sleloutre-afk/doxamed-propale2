import type { Metadata } from 'next'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import { ModeCard } from '@/components/Cards'
import { MODES } from '@/lib/content'

export const metadata: Metadata = {
  title: "Nos modes d'intervention",
  description: 'In situ, Box, MobilCare, Espace de santé en gare : quatre formats de déploiement pour un même socle médical.',
}

export default function ModesInterventionPage() {
  return (
    <>
      <PageHero
        kicker="Nos modes d'intervention"
        title={<>Un même socle médical, <span className="text-electric-2">quatre formats de déploiement.</span></>}
        lead="Dans vos locaux, en cabine autonome, en unité itinérante ou en gare : nos dispositifs s'adaptent à votre contexte sans jamais transiger sur l'exigence médicale."
        crumb={[{ label: "Nos modes d'intervention", href: '/modes-intervention' }]}
        image="/photos/interventions.png"
      />

      <Section className="py-20 sm:py-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MODES.map((m) => (
            <ModeCard key={m.slug} m={m} />
          ))}
        </div>
      </Section>

      <section className="bg-paper-2 py-20 sm:py-24">
        <Section>
          <Kicker>Pourquoi plusieurs formats</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-6 max-w-2xl text-balance">
            Le format s&rsquo;adapte au contexte, jamais le niveau d&rsquo;exigence médicale.
          </h2>
          <p className="text-slate max-w-2xl leading-relaxed">
            Qu&rsquo;il s&rsquo;agisse d&rsquo;un bilan de prévention santé, d&rsquo;une campagne de dépistage ou
            d&rsquo;un accès aux soins courant, chaque dispositif d&rsquo;intervention embarque le même triptyque :
            un chef d&rsquo;opération pour l&rsquo;accueil, un infirmier diplômé d&rsquo;État présent physiquement,
            et un médecin joignable à distance.
          </p>
        </Section>
      </section>

      <CTABanner />
    </>
  )
}
