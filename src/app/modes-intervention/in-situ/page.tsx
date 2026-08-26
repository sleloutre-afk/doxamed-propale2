import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import ContactCTAButton from '@/components/ContactCTAButton'
import Icon from '@/components/Icons'
import Reveal from '@/components/Reveal'
import { METIERS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'In situ — un espace santé dans vos locaux',
  description: "Notre mode d'intervention le plus déployé : un espace santé installé directement dans vos locaux, clé en main.",
}

export default function InSituPage() {
  return (
    <>
      <PageHero
        kicker="Mode d'intervention"
        title={<>In situ : un espace santé installé <span className="text-electric-2">dans vos locaux.</span></>}
        lead="Le dispositif le plus déployé par Doxamed. Une salle mise à disposition par l'entreprise devient, le temps d'une campagne, un véritable cabinet de prévention."
        crumb={[{ label: "Nos modes d'intervention", href: '/modes-intervention' }, { label: 'In situ', href: '/modes-intervention/in-situ' }]}
        image="/photos/in-situ.png"
        imagePosition="center top"
      />

      <Section className="py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <Reveal from="left">
            <Kicker>Comment ça fonctionne</Kicker>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-800 mb-6 text-balance">
              Bureau, salle de réunion ou espace dédié : nous transformons vos locaux pour la durée du dispositif.
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              Un chef d&rsquo;opération accueille et gère le dispositif sur place. Une infirmière diplômée
              d&rsquo;État est présente tout au long du bilan ou de la campagne, et suit les directives d&rsquo;un
              médecin qui intervient à distance par téléconsultation. Aucun aménagement lourd n&rsquo;est
              nécessaire : le matériel médical connecté est apporté et installé par nos équipes.
            </p>
            <ContactCTAButton label="Organiser un dispositif in situ" />
          </Reveal>
          <Reveal from="right" delay={100}>
            <div className="rounded-2xl border border-mist bg-white p-7 sm:p-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-electric-2 mb-5">Ce que nous apportons</p>
              <ul className="space-y-4">
                {[
                  ['calendar', 'Prise de rendez-vous en ligne'],
                  ['users', "Chef d'opération sur place"],
                  ['nurse', 'Infirmier diplômé d’État'],
                  ['doctor', 'Médecin à distance'],
                  ['report', 'Rapport complet et recommandations'],
                ].map(([icon, label]) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-electric-dim text-electric-2 flex items-center justify-center shrink-0">
                      <Icon name={icon as never} className="w-4 h-4" />
                    </span>
                    <span className="text-sm text-ink-800">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="bg-paper-2 py-20 sm:py-24">
        <Section>
          <Reveal>
            <Kicker>Solutions déployables in situ</Kicker>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {METIERS.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 4) * 70}>
                <Link href={`/solutions/${m.slug}`} className="lift rounded-xl border border-mist bg-white p-5 block">
                  <p className="text-sm font-semibold text-ink-800">{m.name}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      <CTABanner />
    </>
  )
}
