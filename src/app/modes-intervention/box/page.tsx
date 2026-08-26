import type { Metadata } from 'next'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import ContactCTAButton from '@/components/ContactCTAButton'
import Picto from '@/components/pictos'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Box — cabine médicale autonome et connectée',
  description: 'Une cabine médicale connectée et autonome, installable en quelques heures, pour un accès aux soins en flux tendu.',
}

export default function BoxPage() {
  return (
    <>
      <PageHero
        kicker="Mode d'intervention"
        title={<>Box : une cabine médicale <span className="text-electric-2">autonome et connectée.</span></>}
        lead="Compacte et installable en quelques heures, la Box embarque les dispositifs connectés nécessaires à un dépistage ou une téléconsultation assistée."
        crumb={[{ label: "Nos modes d'intervention", href: '/modes-intervention' }, { label: 'Box', href: '/modes-intervention/box' }]}
        image="/photos/box.png"
      />

      <Section className="py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <Reveal from="left">
            <Kicker>Comment ça fonctionne</Kicker>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-800 mb-6 text-balance">
              Un format compact, pensé pour les halls, accueils et espaces de flux.
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              Sans nécessiter d&rsquo;aménagement lourd, la Box s&rsquo;installe dans un hall d&rsquo;accueil, un
              espace public ou un site événementiel. Elle intègre le matériel médical connecté nécessaire à un
              dépistage rapide ou une téléconsultation assistée, avec la même exigence de suivi médical à distance
              que nos autres dispositifs.
            </p>
            <ContactCTAButton label="Installer une Box" />
          </Reveal>
          <Reveal from="right" delay={100}>
            <div className="rounded-2xl border border-mist bg-white p-7 sm:p-8">
              <div className="w-11 h-11 rounded-full bg-electric-dim text-electric-2 flex items-center justify-center mb-5">
                <Picto name="box" className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate leading-relaxed">
                Idéale pour un dépistage ponctuel à fort volume — sur le modèle des box de dépistage déployées lors
                du concert test de l&rsquo;Accor Arena, précurseurs du dispositif actuel.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABanner />
    </>
  )
}
