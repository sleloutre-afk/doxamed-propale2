import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Section, Kicker, StatStrip, CTABanner } from '@/components/ui'
import { ClientRefCard } from '@/components/Cards'
import Icon from '@/components/Icons'
import Reveal from '@/components/Reveal'
import { GLOBAL_STATS, CLIENT_REFS, CLIENT_LOGOS, CLIENT_LOGO_IMAGES, ADP_QUOTE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Références',
  description: 'Chiffres clés, clients et études de cas Doxamed : Groupe ADP, bpifrance, Deloitte, Air France, Estée Lauder, Doctolib, Euronext…',
}

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        kicker="Références"
        title={<>Des résultats <span className="text-electric-2">mesurables,</span> auprès de grands groupes et d&rsquo;institutions.</>}
        crumb={[{ label: 'Références', href: '/references' }]}
      />

      <Section className="py-16 sm:py-20 -mt-8 sm:-mt-14 relative">
        <StatStrip stats={GLOBAL_STATS} />
      </Section>

      <Section className="py-16 sm:py-20">
        <Reveal>
          <Kicker>Études de cas</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
            Un engouement constaté à chaque déploiement.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLIENT_REFS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 90}>
              <ClientRefCard c={c} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-16 sm:py-20">
        <Reveal>
          <div className="relative rounded-3xl bg-paper-2 border border-mist overflow-hidden px-6 py-16">
            <div className="absolute inset-0 grid-backdrop-light opacity-70" />
            <span aria-hidden="true" className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 font-mono-num text-[6rem] leading-none text-electric-dim select-none">
              &rdquo;
            </span>
            <blockquote className="relative max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl font-medium text-ink-800 leading-snug text-balance">
                &ldquo;{ADP_QUOTE.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm text-slate-2">
                <span className="font-semibold text-slate">{ADP_QUOTE.author}</span>, {ADP_QUOTE.role} — {ADP_QUOTE.source}
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </Section>

      <Section className="py-20 sm:py-24 text-center">
        <p className="text-slate">
          Nos projets sont régulièrement récompensés pour leur caractère innovant.
        </p>
        <Link
          href="/a-propos/labels-prix"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-2"
        >
          Voir nos labels & prix <Icon name="arrowRight" className="w-4 h-4" />
        </Link>
      </Section>

      <section className="bg-paper-2 py-20 sm:py-24">
        <Section>
          <Reveal>
            <Kicker>Ils nous font confiance</Kicker>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {CLIENT_LOGOS.map((n, i) => (
              <Reveal key={n} delay={(i % 4) * 60}>
                {CLIENT_LOGO_IMAGES[n] ? (
                  <div className="rounded-xl border border-mist bg-white p-5 flex items-center justify-center h-24">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={CLIENT_LOGO_IMAGES[n]}
                      alt={n}
                      className="h-9 w-auto max-w-[75%] object-contain grayscale"
                    />
                  </div>
                ) : (
                  <div className="rounded-xl border border-mist bg-white p-5 flex items-center justify-center text-center h-24">
                    <span className="text-sm font-semibold text-ink-800/70">{n}</span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      <CTABanner title="Devenez notre prochaine référence" />
    </>
  )
}
