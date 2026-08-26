import Link from 'next/link'
import { Section, Kicker, CTABanner } from '@/components/ui'
import { MetierCard, ModeCard, ClientRefCard, NewsCard, ClientLogoStrip } from '@/components/Cards'
import ContactCTAButton from '@/components/ContactCTAButton'
import Body360Section from '@/components/Body360Section'
import Icon from '@/components/Icons'
import Picto from '@/components/pictos'
import LogoShape from '@/components/brand/LogoShape'
import Reveal from '@/components/Reveal'
import CountUp from '@/components/CountUp'
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
  BPS_EXAMS,
} from '@/lib/content'

export default function Home() {
  return (
    <>
      {/* HERO — fractionné : texte sur fond clair à gauche, cadre vidéo
          arrondi à droite (au lieu du plein cadre sombre de la Propale 1). */}
      <section className="relative bg-paper overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-24">
        <div className="absolute top-[-15%] right-[-8%] w-[540px] h-[540px] rounded-full bg-electric/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-25%] left-[-10%] w-[380px] h-[380px] rounded-full bg-electric/[0.06] blur-[110px] pointer-events-none" />

        <Section className="relative">
          <div className="grid lg:grid-cols-[1fr_0.92fr] gap-12 lg:gap-16 items-center">
            <div>
              <Kicker>Expert de la prévention santé par l&rsquo;innovation</Kicker>
              <LogoShape className="h-14 sm:h-16 w-auto shrink-0 text-electric mb-4 animate-fade-up" />
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-semibold tracking-tight text-ink-800 text-balance animate-fade-up">
                La santé <span className="text-electric-2">pour tous.</span>
                <br />
                Partout.
              </h1>
              <p className="mt-6 text-lg text-slate max-w-lg leading-relaxed animate-fade-up" style={{ animationDelay: '0.08s' }}>
                Doxamed déploie des solutions de prévention, de dépistage et d&rsquo;accès aux soins
                directement sur le lieu de travail et dans les territoires — pilotées par des médecins,
                incarnées par nos infirmiers, servies par la donnée.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: '0.16s' }}>
                <ContactCTAButton label="Lancer mon projet santé" />
                <Link
                  href="/solutions"
                  className="px-6 py-3.5 rounded-full border border-mist text-sm font-semibold text-ink-800 hover:border-electric hover:text-electric-2 transition-colors"
                >
                  Découvrir nos solutions
                </Link>
              </div>
            </div>

            <Reveal from="scale" className="relative">
              {/* aspect-[4/3]: the source footage is native ~16:9 landscape —
                  a portrait crop was cutting away most of the frame and
                  losing the scene entirely. This keeps enough of the shot
                  legible while still reading as a deliberate "card", and
                  its shorter height balances against the text column. */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-xl shadow-ink-800/10 border border-mist/60">
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
                  style={{ background: 'linear-gradient(180deg, rgba(6,13,24,0) 60%, rgba(6,13,24,0.5) 100%)' }}
                />
              </div>
              <span className="hidden lg:block absolute -top-7 -right-7 w-24 h-24 rounded-full border border-dashed border-electric/30 pointer-events-none" />
              {/* Floating accent chip, bleeding off the panel's edge */}
              <div className="absolute left-4 bottom-4 sm:-left-6 sm:bottom-8 flex items-center gap-3 rounded-2xl bg-white border border-mist shadow-lg shadow-ink-800/10 px-4 py-3 max-w-[220px]">
                <span className="w-9 h-9 rounded-full bg-electric-dim text-electric-2 flex items-center justify-center shrink-0">
                  <Picto name="teleconsultation" className="w-4.5 h-4.5" />
                </span>
                <p className="text-[0.78rem] font-medium text-ink-800 leading-snug">Téléconsultation en cours</p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Stats dock — floats over the hero's bottom seam, overlapping the
            photo panel's lower edge, rather than sitting inline as a plain
            divided row (Propale 1's treatment). */}
        <Section className="relative mt-10 sm:mt-4">
          <div className="rounded-2xl border border-mist bg-white shadow-lg shadow-ink-800/[0.04] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-mist">
            {GLOBAL_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 60} from="up">
                <div className="px-5 py-6">
                  <div className="font-mono-num text-xl sm:text-2xl font-semibold text-electric-2">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-1 text-[0.72rem] text-slate leading-snug">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>


      {/* 4 METIERS */}
      <Section className="py-20 sm:py-28" id="metiers">
        <Reveal>
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
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METIERS.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 4) * 80} className={i % 2 === 1 ? 'sm:mt-8' : ''}>
              <MetierCard m={m} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* BODY MAP — Offre 360° Santé */}
      <section className="bg-paper-2 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop-light" />
        <Section className="relative">
          <Reveal>
            <Body360Section exams={[...BPS_EXAMS]} ctaHref="/solutions" ctaLabel="Découvrir toutes nos solutions santé">
              <Kicker>Offre 360° santé</Kicker>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-5 text-balance">
                Réinventer la prévention santé, à 360°.
              </h2>
              <p className="text-slate leading-relaxed max-w-md">
                Prévention, dépistage, santé mentale, vaccination : une couverture médicale complète,
                conforme aux exigences médicales. Cliquez sur une fonction pour découvrir le dispositif associé.
              </p>
            </Body360Section>
          </Reveal>
        </Section>
      </section>

      {/* TECHNOLOGIE & HUMAIN */}
      <Section className="py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          <Reveal from="left">
            <Kicker>Notre approche</Kicker>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-6 max-w-lg text-balance">
              La technologie comme une évidence. L&rsquo;humain comme une exigence.
            </h2>
            <p className="text-slate leading-relaxed mb-9 max-w-lg">
              Doxamed s&rsquo;appuie sur les meilleures innovations médicales — sans jamais renoncer
              au lien humain qui fait la qualité d&rsquo;une prise en charge.
            </p>
            <div className="relative space-y-8">
              {/* Connecting thread running through the node centers — a
                  small "care pathway" motif, distinct from Propale 1's
                  plain icon-row list. */}
              <span className="absolute left-[21px] top-6 bottom-6 w-px bg-mist" aria-hidden="true" />
              <div className="relative flex gap-4">
                <div className="relative z-10 w-11 h-11 rounded-full bg-electric-dim text-electric-2 flex items-center justify-center shrink-0 ring-4 ring-paper">
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
              <div className="relative flex gap-4">
                <div className="relative z-10 w-11 h-11 rounded-full bg-electric-dim text-electric-2 flex items-center justify-center shrink-0 ring-4 ring-paper">
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
              <div className="relative flex gap-4">
                <div className="relative z-10 w-11 h-11 rounded-full bg-electric-dim text-electric-2 flex items-center justify-center shrink-0 ring-4 ring-paper">
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
          </Reveal>
          <Reveal from="right" delay={100}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/team.png"
              alt="Une équipe Doxamed : professionnels de santé et technologie au service du patient"
              className="w-full aspect-[4/5] rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* MODES D'INTERVENTION */}
      <section className="bg-white py-20 sm:py-28 relative overflow-hidden border-y border-mist">
        <div className="absolute inset-0 grid-backdrop-light" />
        <Section className="relative">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div>
                <Kicker>Nos modes d&rsquo;intervention</Kicker>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 max-w-xl text-balance">
                  Un même socle médical, déployable partout, pour tous.
                </h2>
              </div>
              <Link href="/modes-intervention" className="text-sm font-semibold text-electric-2 flex items-center gap-1.5 shrink-0">
                Voir tous les dispositifs <Icon name="arrowRight" className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODES.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 4) * 80} className={i % 2 === 1 ? 'sm:mt-8' : ''}>
                <ModeCard m={m} />
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      {/* ARNAUD MOLINIÉ */}
      <Section className="py-20 sm:py-28">
        <Reveal from="scale">
          <div className="relative overflow-hidden rounded-3xl border border-mist bg-white p-8 sm:p-14">
            <span aria-hidden="true" className="pointer-events-none absolute -top-6 right-8 font-mono-num text-[9rem] leading-none text-electric-dim select-none">
              &rdquo;
            </span>
            <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left shrink-0">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-electric-dim mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/photos/arnaud.png" alt={ARNAUD.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-semibold text-ink-800">{ARNAUD.name}</p>
                <p className="text-sm text-slate mt-1">{ARNAUD.role}</p>
                <Link href="/a-propos/gouvernance" className="mt-5 text-sm font-semibold text-electric-2 flex items-center gap-1.5">
                  Toute la gouvernance <Icon name="arrowRight" className="w-4 h-4" />
                </Link>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-medium italic text-ink-800 leading-snug text-balance">
                  {ARNAUD.quote}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* REFERENCES */}
      <section className="bg-paper-2 py-20 sm:py-28">
        <Section>
          <Reveal>
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
          </Reveal>

          <Reveal className="mb-12">
            <div className="rounded-2xl border border-mist bg-white py-5">
              <ClientLogoStrip names={CLIENT_LOGOS} logos={CLIENT_LOGO_IMAGES} />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {CLIENT_REFS.slice(0, 3).map((c, i) => (
              <Reveal key={c.name} delay={i * 90} className={i === 1 ? 'sm:mt-6' : ''}>
                <ClientRefCard c={c} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="border-t border-mist pt-8">
              <blockquote className="max-w-3xl mx-auto flex items-start gap-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/romanet.png"
                  alt={ADP_QUOTE.author}
                  className="w-16 h-16 rounded-full object-cover shrink-0 ring-4 ring-white shadow-sm"
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
          </Reveal>
        </Section>
      </section>

      {/* NEWS */}
      <Section className="py-20 sm:py-28">
        <Reveal>
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
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {NEWS.slice(0, 3).map((n, i) => (
            <Reveal key={n.slug} delay={i * 90} className={i === 1 ? 'sm:mt-6' : ''}>
              <NewsCard n={n} />
            </Reveal>
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
