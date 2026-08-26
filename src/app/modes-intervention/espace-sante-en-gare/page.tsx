import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Section, Kicker, StatStrip, CTABanner } from '@/components/ui'
import ContactCTAButton from '@/components/ContactCTAButton'
import Icon from '@/components/Icons'
import Picto from '@/components/pictos'
import Reveal from '@/components/Reveal'
import { PRESS_OUTLETS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Espace de santé en gare — partenariat SNCF Gares & Connexions',
  description: 'Exclusivité remportée auprès de SNCF Gares & Connexions : des espaces de santé permanents en gare, au cœur des déserts médicaux.',
}

export default function GarePage() {
  return (
    <>
      <PageHero
        kicker="Mode d'intervention — exclusivité SNCF"
        title={<>Espace de santé en gare : soigner au cœur des <span className="text-electric-2">déserts médicaux.</span></>}
        lead="Fin 2023, Doxamed remporte l'appel d'offres de SNCF Gares & Connexions pour déployer des espaces de santé permanents en gare."
        crumb={[{ label: "Nos modes d'intervention", href: '/modes-intervention' }, { label: 'Espace de santé en gare', href: '/modes-intervention/espace-sante-en-gare' }]}
        image="/photos/gare.png"
      />

      <Section className="py-16 sm:py-20 -mt-8 sm:-mt-14 relative">
        <StatStrip
          stats={[
            { value: '35', label: 'gares équipées' },
            { value: '2023', label: 'appel d’offres remporté' },
            { value: '2028', label: 'objectif de déploiement élargi' },
          ]}
        />
      </Section>

      <Section className="py-20 sm:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <Reveal from="left">
            <Kicker>Un projet médical de territoire</Kicker>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-800 mb-6 text-balance">
              Téléconsultation, soins infirmiers, vaccination et prélèvements, sur rendez-vous.
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              Chaque espace de santé en gare s&rsquo;inscrit dans le projet médical du territoire, en lien avec
              les ARS, URPS, CPTS et MSP locales. Un infirmier diplômé d&rsquo;État y examine les patients à
              l&rsquo;aide d&rsquo;instruments médicaux connectés, avec prise de rendez-vous via Doctolib.
            </p>
            <ContactCTAButton label="Discuter d'un espace en gare" need="Espace de santé / accès aux soins" />
          </Reveal>
          <Reveal from="right" delay={100}>
            <div className="rounded-2xl border border-mist bg-white p-7 sm:p-8">
              <div className="w-11 h-11 rounded-full bg-electric-dim text-electric-2 flex items-center justify-center mb-5">
                <Picto name="gare" className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate leading-relaxed">
                Un dispositif déjà présent à Épinay-sur-Orge, ainsi que dans les gares de Marseille, Nice,
                Montpellier, Strasbourg, Bordeaux et Rennes.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Featured story */}
      <section className="bg-paper-2 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop-light" />
        <Section className="relative">
          <Reveal>
            <Kicker>L&rsquo;impact, en une histoire</Kicker>
          </Reveal>
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
            <Reveal from="left" delay={80}>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-800 mb-6 text-balance">
                « Sauvé par une infirmière grâce à la téléconsultation en gare »
              </h2>
              <p className="text-slate leading-relaxed mb-4">
                À Épinay-sur-Orge, un homme de 69 ans souffrant d&rsquo;une pneumonie non diagnostiquée a été
                secouru par l&rsquo;infirmière Corinne Mossard, en poste dans l&rsquo;espace de santé de la gare
                SNCF. Une consultation par caméra avec un médecin à distance, une infirmière au contact du
                patient : le principe même du dispositif Doxamed a permis une prise en charge en urgence.
              </p>
              <p className="text-slate leading-relaxed mb-6">
                &laquo; En France la télémédecine tente de pallier le manque de médecins généralistes &raquo;,
                titrait la RTS en reprenant l&rsquo;histoire.
              </p>
              <Link href="/actualites/sauvee-par-une-infirmiere-en-gare-epinay-sur-orge" className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-2">
                Lire l&rsquo;article complet <Icon name="arrowRight" className="w-4 h-4" />
              </Link>
            </Reveal>
            <Reveal from="right" delay={140}>
              <div className="rounded-2xl border border-mist bg-white p-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-2 mb-4">Repris dans les médias</p>
                <ul className="space-y-2.5">
                  {PRESS_OUTLETS.map((p) => (
                    <li key={p} className="text-sm text-slate">{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>
      </section>

      <CTABanner />
    </>
  )
}
