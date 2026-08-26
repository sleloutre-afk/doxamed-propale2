import type { Metadata } from 'next'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import ContactCTAButton from '@/components/ContactCTAButton'
import Icon from '@/components/Icons'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Conseil & ingénierie santé',
  description: "Doxamed accompagne la conception et le déploiement de dispositifs et d'événements santé sur mesure.",
}

const STEPS = [
  { icon: 'chat', title: 'Cadrage', detail: "Écoute de vos enjeux RH, santé au travail et contraintes de site." },
  { icon: 'target', title: 'Conception médicale', detail: "Choix des examens, du mode d'intervention et du parcours patient adaptés." },
  { icon: 'users', title: 'Mobilisation des équipes', detail: "IDE, médecins, chef d'opération : constitution du dispositif humain." },
  { icon: 'report', title: 'Pilotage & reporting', detail: "Suivi terrain, statistiques d'usage et recommandations de suite." },
] as const

export default function ConseilIngenieriePage() {
  return (
    <>
      <PageHero
        kicker="Solution n°5 — Conseil"
        title={<>Conseil & ingénierie santé, <span className="text-electric-2">sur mesure.</span></>}
        lead="Doxamed accompagne la conception et le déploiement de dispositifs et d'événements santé sur mesure, du cadrage médical au pilotage terrain."
        crumb={[{ label: 'Nos solutions', href: '/solutions' }, { label: 'Conseil & ingénierie santé', href: '/solutions/conseil-ingenierie' }]}
        video="/videos/conseil.mp4"
      />

      <Section className="py-20 sm:py-28">
        <Reveal>
          <Kicker>Notre méthode</Kicker>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
            Quatre étapes pour concevoir votre dispositif santé.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 80} className={`relative flex flex-col h-full pt-7 ${i % 2 === 1 ? 'sm:mt-8' : ''}`}>
              <div className="absolute top-0 left-6 z-10 w-12 h-12 rounded-full ring-4 ring-paper bg-white border border-mist shadow-md flex items-center justify-center">
                <Icon name={s.icon} className="w-5 h-5 text-electric-2" />
              </div>
              <div className="relative flex flex-col flex-1 rounded-2xl border border-mist bg-white p-6 pt-9 overflow-hidden">
                <div className="absolute inset-0 grid-backdrop-light pointer-events-none" />
                <span
                  aria-hidden="true"
                  className="absolute -top-2 right-2 font-mono-num text-[4rem] leading-none font-semibold text-ink-800/5 select-none pointer-events-none"
                >
                  0{i + 1}
                </span>
                <p className="relative font-semibold text-ink-800 text-sm mb-2">{s.title}</p>
                <p className="relative text-xs text-slate leading-relaxed">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <ContactCTAButton label="Parler de mon projet" need="Autre demande" />
        </div>
      </Section>

      <CTABanner />
    </>
  )
}
