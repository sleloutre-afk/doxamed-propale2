import type { Metadata } from 'next'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import ContactCTAButton from '@/components/ContactCTAButton'
import Icon from '@/components/Icons'

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
        title={<>Conseil & ingénierie santé, <span className="text-electric-light">sur mesure.</span></>}
        lead="Doxamed accompagne la conception et le déploiement de dispositifs et d'événements santé sur mesure, du cadrage médical au pilotage terrain."
        crumb={[{ label: 'Nos solutions', href: '/solutions' }, { label: 'Conseil & ingénierie santé', href: '/solutions/conseil-ingenierie' }]}
        video="/videos/conseil.mp4"
      />

      <Section className="py-20 sm:py-28">
        <Kicker>Notre méthode</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
          Quatre étapes pour concevoir votre dispositif santé.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-mist bg-white p-6">
              <span className="font-mono-num text-xs text-electric-2">0{i + 1}</span>
              <div className="w-10 h-10 rounded-xl bg-electric-dim text-electric-2 flex items-center justify-center my-4">
                <Icon name={s.icon} className="w-5 h-5" />
              </div>
              <p className="font-semibold text-ink-800 text-sm mb-2">{s.title}</p>
              <p className="text-xs text-slate leading-relaxed">{s.detail}</p>
            </div>
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
