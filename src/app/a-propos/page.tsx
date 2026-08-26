import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import { HistoryTimeline } from '@/components/Timeline'
import Icon from '@/components/Icons'
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
          ].map((a) => (
            <div key={a.n} className="rounded-2xl border border-mist bg-white p-7">
              <span className="font-mono-num text-xs text-electric-2">{a.n}</span>
              <p className="font-semibold text-ink-800 mt-3 mb-2">{a.t}</p>
              <p className="text-sm text-slate leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-paper-2 py-20 sm:py-28">
        <Section>
          <Kicker>Notre histoire</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-14 max-w-2xl text-balance">
            De la première unité mobile à l&rsquo;expert de la prévention santé en entreprise.
          </h2>
          <HistoryTimeline entries={HISTORY} />
        </Section>
      </section>

      <Section className="py-20 sm:py-28">
        <Kicker>Nos 3 piliers</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
          Santé, Humain, Innovation.
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <div key={p.name} className="rounded-2xl border border-mist bg-white p-7">
              <span className="font-mono-num text-xs text-electric-2">0{i + 1}</span>
              <h3 className="text-xl font-semibold text-ink-800 mt-3 mb-2.5">{p.name}</h3>
              <p className="text-sm text-slate leading-relaxed">{p.detail}</p>
            </div>
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
