import type { Metadata } from 'next'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import Icon from '@/components/Icons'
import Reveal from '@/components/Reveal'
import { LABELS, AWARDS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Labels & prix',
  description: 'Les labels, certifications et prix qui reconnaissent l’expertise médicale, l’innovation et l’engagement RSE de Doxamed.',
}

export default function LabelsPrixPage() {
  return (
    <>
      <PageHero
        kicker="À propos — Labels & prix"
        title={<>Labels, certifications et prix : <span className="text-electric-2">une reconnaissance méritée.</span></>}
        crumb={[{ label: 'À propos', href: '/a-propos' }, { label: 'Labels & prix', href: '/a-propos/labels-prix' }]}
      />

      {/* Labels */}
      <Section className="py-20 sm:py-28">
        <Reveal>
          <Kicker>Labels & certifications</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
            Une innovation et un engagement RSE reconnus.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {LABELS.map((l, i) => (
            <Reveal key={l.name} delay={(i % 2) * 90}>
              <div className="rounded-2xl border border-mist bg-white p-7 flex gap-5 h-full">
                <div className="w-11 h-11 rounded-full bg-electric-dim text-electric-2 flex items-center justify-center shrink-0">
                  <Icon name="shield" className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-ink-800 mb-1.5">{l.name}</p>
                  <p className="text-sm text-slate leading-relaxed">{l.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Prix */}
      <section className="bg-paper-2 py-20 sm:py-28">
        <Section>
          <Reveal>
            <Kicker>Prix & distinctions</Kicker>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
              Des projets récompensés pour leur caractère innovant.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {AWARDS.map((a, i) => (
              <Reveal key={a.name} delay={(i % 2) * 90}>
                <div className="rounded-xl border border-mist bg-white p-6 flex gap-4 h-full">
                  <div className="w-10 h-10 rounded-full bg-electric-dim text-electric-2 flex items-center justify-center shrink-0">
                    <Icon name="shield" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-800 text-sm">{a.name}</p>
                    <p className="text-xs text-slate-2 mt-1">{a.org} — {a.year}</p>
                    <p className="text-xs text-slate mt-1.5">{a.project}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      <CTABanner />
    </>
  )
}
