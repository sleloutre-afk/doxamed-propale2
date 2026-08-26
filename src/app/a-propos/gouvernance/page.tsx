import type { Metadata } from 'next'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import { CareerTimeline } from '@/components/Timeline'
import { PersonCard } from '@/components/Cards'
import { LogoMark } from '@/components/Logo'
import { ARNAUD, COMITE_STRATEGIQUE, CONSEIL_SCIENTIFIQUE, GROUPE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Gouvernance & équipe',
  description: 'Arnaud Molinié, le comité stratégique et le conseil scientifique de Doxamed : une gouvernance médicale et institutionnelle reconnue.',
}

export default function GouvernancePage() {
  return (
    <>
      <PageHero
        kicker="À propos — Gouvernance & équipe"
        title={<>Une gouvernance qui conjugue <span className="text-electric-light">excellence médicale</span> et vision stratégique des entreprises.</>}
        crumb={[{ label: 'À propos', href: '/a-propos' }, { label: 'Gouvernance & équipe', href: '/a-propos/gouvernance' }]}
      />

      {/* Arnaud Molinié */}
      <Section className="py-20 sm:py-28">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/arnaud2.png"
              alt={ARNAUD.name}
              className="w-28 h-28 rounded-2xl object-cover mb-6"
            />
            <div className="flex items-center gap-2.5">
              <h2 className="text-2xl font-semibold text-ink-800">{ARNAUD.name}</h2>
              <a
                href="https://www.linkedin.com/in/arnaud-molini%C3%A9-loxamed/"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-mist flex items-center justify-center text-slate-2 hover:text-electric-2 hover:border-electric transition-colors shrink-0"
                aria-label="Profil LinkedIn d'Arnaud Molinié"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.97V21h-4V9Z"/></svg>
              </a>
            </div>
            <p className="text-electric-2 font-medium mt-1 mb-6">{ARNAUD.role}</p>
            <blockquote className="text-lg font-medium text-ink-800 leading-snug border-l-2 border-electric pl-4 mb-6 text-balance">
              &ldquo;{ARNAUD.quote}&rdquo;
            </blockquote>
            {ARNAUD.bio.map((p, i) => (
              <p key={i} className="text-sm text-slate leading-relaxed mb-4">{p}</p>
            ))}
            <div className="mt-6 space-y-1.5">
              {ARNAUD.press.map((p) => (
                <p key={p.title} className="text-xs text-slate-2">
                  <span className="font-semibold text-slate">{p.outlet}</span> — &ldquo;{p.title}&rdquo; ({p.date})
                </p>
              ))}
            </div>
          </div>
          <div>
            <Kicker>Parcours</Kicker>
            <CareerTimeline entries={ARNAUD.timeline} />
          </div>
        </div>
      </Section>

      {/* Comité stratégique */}
      <section className="bg-paper-2 py-20 sm:py-28">
        <Section>
          <Kicker>Comité stratégique</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-3 max-w-2xl text-balance">
            Experts en santé, business et innovation.
          </h2>
          <p className="text-slate max-w-2xl mb-10">
            Le comité stratégique réunit des dirigeants et des experts reconnus, dont le Dr Philippe Douste-Blazy, ancien ministre de la Santé.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COMITE_STRATEGIQUE.map((p) => (
              <PersonCard key={p.name} name={p.name} role={p.role} photo={p.photo} linkedin={p.linkedin} />
            ))}
          </div>
        </Section>
      </section>

      {/* Conseil scientifique */}
      <Section className="py-20 sm:py-28">
        <Kicker>Conseil scientifique</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-3 max-w-2xl text-balance">
          Médecins & chercheurs reconnus.
        </h2>
        <p className="text-slate max-w-2xl mb-10">
          Présidé par Jean-Louis Ségura, le conseil scientifique rassemble des experts en gériatrie, oncologie,
          médecine d&rsquo;urgence et management hospitalier, au service des enjeux actuels du système de santé.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONSEIL_SCIENTIFIQUE.map((p) => (
            <PersonCard key={p.name} name={p.name} role={p.role} detail={p.detail} photo={p.photo} linkedin={p.linkedin} />
          ))}
        </div>
      </Section>

      {/* Groupe structuré */}
      <section className="bg-ink-800 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop" />
        <Section className="relative">
          <Kicker dark>Un groupe structuré</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-14 max-w-2xl text-balance">
            Capitello Group, détenu à 100% par Arnaud Molinié.
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold text-sm mb-3">
                AM
              </div>
              <p className="text-sm text-white/70">Arnaud Molinié</p>
              <span className="font-mono-num text-xs text-electric-light mt-1">100%</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="px-6 py-3 rounded-full border border-electric text-white font-semibold mb-6">Capitello Group</div>
            <div className="w-full max-w-2xl h-px bg-white/20 relative mb-6">
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-8 bg-white/20" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-3xl">
              {GROUPE.map((g) => (
                <div key={g.name} className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center">
                  {g.name === 'Doxamed' ? (
                    <LogoMark className="w-7 h-7 mx-auto mb-3" />
                  ) : g.name === 'Teledok' ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/brand/teledok.svg"
                      alt="TeleDok"
                      className="h-7 w-auto mx-auto mb-3 object-contain"
                      style={{ filter: 'invert(1)' }}
                    />
                  ) : (
                    <div className="w-7 h-7 mx-auto mb-3 rounded-md bg-electric/20" />
                  )}
                  <p className="font-semibold text-white">{g.name}</p>
                  <p className="text-xs text-white/50 mt-1">{g.role}</p>
                  <span className="font-mono-num text-[0.7rem] text-electric-light mt-2 inline-block">100%</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      <CTABanner />
    </>
  )
}
