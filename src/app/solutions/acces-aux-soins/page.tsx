import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Section, Kicker, StatStrip, CTABanner } from '@/components/ui'
import ContactCTAButton from '@/components/ContactCTAButton'
import Icon from '@/components/Icons'
import { MODES } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Accès aux soins',
  description: "Téléconsultation, soins infirmiers, prélèvements biologiques, vaccination : des espaces de santé déployables partout, pour tous.",
}

const SERVICES = [
  {
    icon: 'doctor',
    name: 'Télémédecine',
    detail: 'Téléconsultation et téléexpertise avec des médecins généralistes et spécialistes.',
  },
  {
    icon: 'nurse',
    name: 'Soins infirmiers',
    detail: 'Prises de sang, injections, pansements, perfusions et suivi préventif, sur rendez-vous.',
  },
  {
    icon: 'syringe',
    name: 'Vaccination',
    detail: 'Centre référencé de l’ARS, relais des campagnes nationales (Covid, grippe…).',
  },
  {
    icon: 'drop',
    name: 'Prélèvement biologique',
    detail: 'Analyses biologiques réalisées avec nos laboratoires partenaires.',
  },
] as const

export default function AccesAuxSoinsPage() {
  return (
    <>
      <PageHero
        kicker="Solution n°4 — Accès aux soins"
        title={<>Des espaces de santé déployables <span className="text-electric-2">partout, pour tous.</span></>}
        lead="Un socle évolutif d'accès aux soins, adaptable au projet médical du territoire, en lien avec les ARS, URPS, CPTS et MSP."
        crumb={[{ label: 'Nos solutions', href: '/solutions' }, { label: 'Accès aux soins', href: '/solutions/acces-aux-soins' }]}
        video="/videos/acces.mp4"
      />

      <Section className="py-16 sm:py-20 -mt-8 sm:-mt-14 relative">
        <StatStrip
          stats={[
            { value: '35', label: 'gares SNCF équipées' },
            { value: '+10 000', label: 'personnes suivies en téléconsultation' },
            { value: '+60', label: 'villes visitées' },
          ]}
        />
      </Section>

      <Section className="py-20 sm:py-24">
        <Kicker>Un ensemble de soins réalisés sur place</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
          Quatre services, un infirmier diplômé d&rsquo;État, un médecin à distance.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <div key={s.name} className="rounded-2xl border border-mist bg-white p-7">
              <div className="w-11 h-11 rounded-xl bg-electric-dim text-electric-2 flex items-center justify-center mb-6">
                <Icon name={s.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-ink-800 mb-2.5">{s.name}</h3>
              <p className="text-sm text-slate leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-paper-2 py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop-light" />
        <Section className="relative">
          <Kicker>Ancrage territorial</Kicker>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-800 mb-6 max-w-2xl text-balance">
            S&rsquo;inscrire dans un projet médical de territoire.
          </h2>
          <p className="text-slate max-w-2xl leading-relaxed mb-6">
            Doxamed s&rsquo;intègre aux usages des professionnels de santé et travaille en lien avec les
            agences régionales de santé (ARS), les unions régionales de professionnels de santé (URPS), les
            communautés professionnelles territoriales de santé (CPTS) et les maisons de santé
            pluriprofessionnelles (MSP).
          </p>
          <div className="flex flex-wrap gap-3">
            {['ARS', 'URPS', 'CPTS', 'MSP'].map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-mist bg-white text-sm text-ink-800 font-mono-num">
                {t}
              </span>
            ))}
          </div>
        </Section>
      </section>

      <Section className="py-20 sm:py-28">
        <Kicker>Modes d&rsquo;intervention associés</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
          L&rsquo;accès aux soins, partout où vous en avez besoin.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MODES.map((m) => (
            <Link key={m.slug} href={`/modes-intervention/${m.slug}`} className="lift rounded-xl border border-mist bg-white p-5">
              <p className="text-sm font-semibold text-ink-800">{m.name}</p>
              <p className="text-xs text-slate mt-1">{m.short}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <ContactCTAButton label="Déployer un espace de santé" need="Espace de santé / accès aux soins" />
        </div>
      </Section>

      <CTABanner />
    </>
  )
}
