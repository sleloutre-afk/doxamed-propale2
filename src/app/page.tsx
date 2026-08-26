import Link from 'next/link'
import { Section, Kicker, CTABanner } from '@/components/ui'
import { MetierCard, ModeCard, ClientRefCard, NewsCard, ClientLogoStrip } from '@/components/Cards'
import ContactCTAButton from '@/components/ContactCTAButton'
import BodyMap from '@/components/BodyMap'
import Icon from '@/components/Icons'
import Picto from '@/components/pictos'
import LogoShape from '@/components/brand/LogoShape'
import {
  METIERS,
  MODES,
  GLOBAL_STATS,
  CLIENT_LOGOS,
  CLIENT_LOGO_IMAGES,
  CLIENT_REFS,
  NEWS,
  ARNAUD,
  ADP_QUOTE,
  TELEDOK,
} from '@/lib/content'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink-800 text-white overflow-hidden">
        <div className="relative overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/videos/home.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(100deg, rgba(6,13,24,0.95) 0%, rgba(6,13,24,0.88) 30%, rgba(6,13,24,0.62) 65%, rgba(6,13,24,0.4) 100%)',
            }}
          />
          <div className="absolute inset-0 grid-backdrop" />
          <div className="absolute top-[-10%] right-[-10%] w-[560px] h-[560px] rounded-full bg-electric/15 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[420px] h-[420px] rounded-full bg-electric/10 blur-[110px]" />

          <Section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
            <div className="max-w-3xl">
              <Kicker dark>Expert de la prévention santé par l&rsquo;innovation</Kicker>
              <div className="flex items-center gap-4 sm:gap-5">
                <LogoShape className="h-28 sm:h-32 lg:h-[9.5rem] w-auto shrink-0 text-electric animate-fade-up" />
                <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance animate-fade-up">
                  La santé <span className="text-electric-light">pour tous.</span>
                  <br />
                  Partout.
                </h1>
              </div>
              <p className="mt-7 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.08s' }}>
                Doxamed déploie des solutions de prévention, de dépistage et d&rsquo;accès aux soins
                directement sur le lieu de travail et dans les territoires — pilotées par des médecins,
                incarnées par nos infirmiers, servies par la donnée.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: '0.16s' }}>
                <ContactCTAButton label="Lancer mon projet santé" />
                <Link
                  href="/solutions"
                  className="px-6 py-3.5 rounded-full border border-white/20 text-sm font-semibold text-white/85 hover:border-white/40 hover:text-white transition-colors"
                >
                  Découvrir nos solutions
                </Link>
              </div>
            </div>
          </Section>
        </div>

        <div className="relative border-t border-white/10">
          <Section className="py-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-white/10">
              {GLOBAL_STATS.map((s) => (
                <div key={s.label} className="px-5 py-6">
                  <div className="font-mono-num text-xl sm:text-2xl font-semibold text-electric-light">{s.value}</div>
                  <div className="mt-1 text-[0.72rem] text-white/45 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>


      {/* 4 METIERS */}
      <Section className="py-20 sm:py-28" id="metiers">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <Kicker>Nos solutions de santé</Kicker>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 max-w-xl text-balance">
              Des solutions complémentaires, un seul objectif : la santé pour tous, partout.
            </h2>
          </div>
          <Link href="/solutions" className="text-sm font-semibold text-electric-2 hover:text-electric-2/80 shrink-0 flex items-center gap-1.5">
            Toutes nos solutions <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METIERS.map((m) => (
            <MetierCard key={m.slug} m={m} />
          ))}
        </div>
      </Section>

      {/* BODY MAP — Offre 360° Santé */}
      <section className="bg-ink-800 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop" />
        <Section className="relative">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div>
              <Kicker dark>Offre 360° santé</Kicker>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-5 text-balance">
                Réinventer la prévention santé, à 360°.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                Prévention, dépistage, santé mentale, vaccination : une couverture médicale complète,
                conforme aux exigences médicales. Cliquez sur une fonction pour découvrir le dispositif associé.
              </p>
              <div className="hidden lg:block">
                <Link
                  href="/solutions"
                  className="inline-block px-6 py-3.5 rounded-full text-sm font-semibold bg-electric text-white hover:bg-electric-2 transition-colors"
                >
                  Découvrir toutes nos solutions santé
                </Link>
              </div>
            </div>
            <BodyMap dark />
          </div>
        </Section>
      </section>

      {/* TECHNOLOGIE & HUMAIN */}
      <Section className="py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          <div>
            <Kicker>Notre approche</Kicker>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-6 max-w-lg text-balance">
              La technologie comme une évidence. L&rsquo;humain comme une exigence.
            </h2>
            <p className="text-slate leading-relaxed mb-9 max-w-lg">
              Doxamed s&rsquo;appuie sur les meilleures innovations médicales — sans jamais renoncer
              au lien humain qui fait la qualité d&rsquo;une prise en charge.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-electric-dim text-electric-2 flex items-center justify-center shrink-0">
                  <Picto name="teleconsultation" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-800 mb-1">Téléconsultation avec les meilleurs médecins</h3>
                  <p className="text-sm text-slate leading-relaxed">
                    Généralistes et spécialistes accessibles à distance grâce à TeleDok, la plateforme
                    nationale de médecins aguerris — plus de 100 professionnels engagés.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-electric-dim text-electric-2 flex items-center justify-center shrink-0">
                  <Picto name="infirmiere" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-800 mb-1">Une infirmière toujours à vos côtés</h3>
                  <p className="text-sm text-slate leading-relaxed">
                    Chaque téléconsultation est systématiquement accompagnée sur site par une infirmière
                    diplômée d&rsquo;État, garante du lien humain avec le patient.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-electric-dim text-electric-2 flex items-center justify-center shrink-0">
                  <Picto name="ia" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-800 mb-1">Support IA &amp; data analytics</h3>
                  <p className="text-sm text-slate leading-relaxed">
                    Nos outils d&rsquo;intelligence artificielle et d&rsquo;analyse de données affinent
                    le diagnostic et objectivent le suivi médical — au service du regard humain, jamais à sa place.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-mist bg-white p-6 sm:p-7">
              <div className="flex items-center gap-5 mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/teledok.svg" alt="TeleDok" className="h-9 w-auto shrink-0 opacity-40" />
                <p className="text-sm text-slate leading-relaxed">
                  Précurseur des plateformes de médecins dédiées à la téléconsultation, et partenaire de
                  référence de Doxamed, Teledok met à disposition ses praticiens — généralistes et
                  spécialistes — auprès des opérateurs de télémédecine.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <div>
                  <p className="font-mono-num text-lg font-semibold text-ink-800">{TELEDOK.founded}</p>
                  <p className="text-xs text-slate-2">Fondé par {TELEDOK.founders}</p>
                </div>
                <div>
                  <p className="font-mono-num text-lg font-semibold text-ink-800">{TELEDOK.stat.value}</p>
                  <p className="text-xs text-slate-2">{TELEDOK.stat.label}</p>
                </div>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/team.png"
            alt="Une équipe Doxamed : professionnels de santé et technologie au service du patient"
            className="w-full aspect-[4/5] rounded-2xl object-cover"
          />
        </div>
      </Section>

      {/* MODES D'INTERVENTION */}
      <section className="bg-ink-800 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop" />
        <Section className="relative">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <Kicker dark>Nos modes d&rsquo;intervention</Kicker>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-xl text-balance">
                Un même socle médical, déployable partout, pour tous.
              </h2>
            </div>
            <Link href="/modes-intervention" className="text-sm font-semibold text-electric-light flex items-center gap-1.5 shrink-0">
              Voir tous les dispositifs <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODES.map((m) => (
              <ModeCard key={m.slug} m={m} />
            ))}
          </div>
        </Section>
      </section>

      {/* ARNAUD MOLINIÉ */}
      <Section className="py-20 sm:py-28">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center rounded-3xl border border-mist bg-white p-8 sm:p-14">
          <div className="flex flex-col items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/arnaud.png"
              alt={ARNAUD.name}
              className="w-full aspect-[4/5] rounded-2xl object-cover mb-5"
            />
            <p className="font-semibold text-ink-800">{ARNAUD.name}</p>
            <p className="text-sm text-slate mt-1">{ARNAUD.role}</p>
            <Link href="/a-propos/gouvernance" className="mt-5 text-sm font-semibold text-electric-2 flex items-center gap-1.5">
              Toute la gouvernance <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <svg width="34" height="26" viewBox="0 0 34 26" fill="none" className="text-electric-dim mb-4">
              <path d="M0 26V15.6C0 6.8 5.4 1 14.4 0L15.8 3.6C10 5 7 8.4 7 13H14.4V26H0ZM19.2 26V15.6C19.2 6.8 24.6 1 33.6 0L35 3.6C29.2 5 26.2 8.4 26.2 13H33.6V26H19.2Z" fill="#00a9e0" />
            </svg>
            <p className="text-xl sm:text-2xl font-medium italic text-ink-800 leading-snug text-balance">
              {ARNAUD.quote}
            </p>
          </div>
        </div>
      </Section>

      {/* REFERENCES */}
      <section className="bg-paper-2 py-20 sm:py-28">
        <Section>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <Kicker>Ils nous font confiance</Kicker>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 max-w-2xl text-balance">
                Des grands groupes et des institutions engagés à nos côtés.
              </h2>
            </div>
            <Link href="/references" className="text-sm font-semibold text-electric-2 flex items-center gap-1.5 shrink-0">
              Voir toutes nos références <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          </div>

          <div className="mb-12">
            <ClientLogoStrip names={CLIENT_LOGOS} logos={CLIENT_LOGO_IMAGES} />
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {CLIENT_REFS.slice(0, 3).map((c) => (
              <ClientRefCard key={c.name} c={c} />
            ))}
          </div>

          <div className="border-t border-mist pt-8">
            <blockquote className="max-w-3xl mx-auto flex items-start gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/romanet.png"
                alt={ADP_QUOTE.author}
                className="w-16 h-16 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="text-lg sm:text-xl font-medium italic text-electric-2 leading-snug text-balance">
                  &ldquo;{ADP_QUOTE.quote}&rdquo;
                </p>
                <footer className="mt-3 text-sm text-slate">
                  <span className="font-semibold text-ink-800">{ADP_QUOTE.author}</span>, {ADP_QUOTE.role} —{' '}
                  <span className="text-slate-2">{ADP_QUOTE.source}</span>
                </footer>
              </div>
            </blockquote>
          </div>
        </Section>
      </section>

      {/* NEWS */}
      <Section className="py-20 sm:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <Kicker>Actualités & médias</Kicker>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 max-w-xl text-balance">
              Ce que nous construisons, ce que la presse en dit.
            </h2>
          </div>
          <Link href="/actualites" className="text-sm font-semibold text-electric-2 flex items-center gap-1.5 shrink-0">
            Toute l&rsquo;actualité <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {NEWS.slice(0, 3).map((n) => (
            <NewsCard key={n.slug} n={n} />
          ))}
        </div>
      </Section>

      <StatsCTA />
    </>
  )
}

function StatsCTA() {
  return <CTABanner />
}
