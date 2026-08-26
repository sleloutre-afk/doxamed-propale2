import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import { HistoryTimeline } from '@/components/Timeline'
import Icon from '@/components/Icons'
import Reveal from '@/components/Reveal'
import { HISTORY, PILLARS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Genèse & mission',
  description: "Depuis 2020, Doxamed (ex Loxamed) développe des solutions de santé mobiles et connectées, nées en pleine crise sanitaire.",
}

export default function AProposPage() {
  return (
    <>
      <PageHero
        kicker="À propos de nous"
        title={<>Une vision née en pleine crise sanitaire, devenue <span className="text-electric-2">un modèle de santé de proximité.</span></>}
        lead="Fondée en 2020 sous le nom de Loxamed, Doxamed développe des solutions de santé mobiles et connectées, intervenant sur trois axes stratégiques."
        crumb={[{ label: 'À propos', href: '/a-propos' }]}
        image="/photos/loxamed.png"
      />

      <Section className="py-20 sm:py-24">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { n: '01', t: 'Déploiement de solutions mobiles', d: 'Dispositifs connectés et accompagnement par des professionnels de santé.' },
            { n: '02', t: 'Transformation des pratiques de santé', d: 'Pour les acteurs publics et privés, en entreprise comme sur les territoires.' },
            { n: '03', t: 'Réduction des inégalités d’accès aux soins', d: 'En collaboration avec les collectivités et des partenaires comme SNCF Gares & Connexions.' },
          ].map((a, i) => (
            <Reveal key={a.n} delay={i * 90}>
              <div className="relative rounded-2xl border border-mist bg-white p-7 h-full overflow-hidden">
                <div className="absolute inset-0 grid-backdrop-light pointer-events-none" />
                <span
                  aria-hidden="true"
                  className="absolute -top-3 right-3 font-mono-num text-[5rem] leading-none font-semibold text-ink-800/5 select-none pointer-events-none"
                >
                  {a.n}
                </span>
                <p className="relative font-semibold text-ink-800 mt-3 mb-2">{a.t}</p>
                <p className="relative text-sm text-slate leading-relaxed">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-paper-2 py-20 sm:py-28">
        <Section>
          <Reveal>
            <Kicker>Notre histoire</Kicker>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-14 max-w-2xl text-balance">
              De la première unité mobile à l&rsquo;expert de la prévention santé en entreprise.
            </h2>
          </Reveal>
          <HistoryTimeline entries={HISTORY} />
        </Section>
      </section>

      <Section className="py-20 sm:py-28">
        <Reveal>
          <Kicker>Nos 3 piliers</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
            Santé, Humain, Innovation.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div className="relative rounded-2xl border border-mist bg-white p-7 h-full overflow-hidden">
                <div className="absolute inset-0 grid-backdrop-light pointer-events-none" />
                <span
                  aria-hidden="true"
                  className="absolute -top-3 right-3 font-mono-num text-[5rem] leading-none font-semibold text-ink-800/5 select-none pointer-events-none"
                >
                  0{i + 1}
                </span>
                <h3 className="relative text-xl font-semibold text-ink-800 mt-3 mb-2.5">{p.name}</h3>
                <p className="relative text-sm text-slate leading-relaxed">{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/a-propos/gouvernance" className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-2">
            Notre gouvernance <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
          <Link href="/a-propos/labels-prix" className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-2">
            Nos labels & prix <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <CTABanner />
    </>
  )
}
