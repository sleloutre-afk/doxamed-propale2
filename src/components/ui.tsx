import Link from 'next/link'
import ContactCTAButton from './ContactCTAButton'

export function Kicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-px" style={{ background: dark ? '#00a9e0' : '#00a9e0' }} />
      <span
        className={`text-[0.72rem] font-mono-num font-semibold tracking-[0.18em] uppercase ${
          dark ? 'text-electric-light' : 'text-electric-2'
        }`}
      >
        {children}
      </span>
    </div>
  )
}

export function PageHero({
  kicker,
  title,
  lead,
  crumb,
  image,
  imagePosition = 'center',
  video,
}: {
  kicker: string
  /** Plain string, or JSX with a highlighted word via <span className="text-electric-light">…</span>. */
  title: React.ReactNode
  lead?: string
  crumb?: { label: string; href: string }[]
  /** Optional background photo (e.g. "/photos/mobilcar.png") behind the hero. */
  image?: string
  /** CSS object-position for the background photo (default "center"). */
  imagePosition?: string
  /** Optional background video (e.g. "/videos/bps.mp4") behind the hero — takes priority over `image`. */
  video?: string
}) {
  return (
    <section className="relative bg-ink-800 text-white overflow-hidden">
      {(video || image) && (
        <>
          {video ? (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: imagePosition }}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            >
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: imagePosition }}
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(100deg, rgba(6,13,24,0.95) 0%, rgba(6,13,24,0.86) 32%, rgba(6,13,24,0.58) 68%, rgba(6,13,24,0.32) 100%)',
            }}
          />
        </>
      )}
      <div className="absolute inset-0 grid-backdrop" />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-electric/10 blur-3xl" />
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 pt-32 pb-16 sm:pt-40 sm:pb-20">
        {crumb && (
          <div className="flex items-center gap-2 text-xs text-white/45 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white/80 transition-colors">Accueil</Link>
            {crumb.map((c, i) => (
              <span key={c.href} className="flex items-center gap-2">
                <span>/</span>
                {i === crumb.length - 1 ? (
                  <span className="text-white/70">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-white/80 transition-colors">{c.label}</Link>
                )}
              </span>
            ))}
          </div>
        )}
        <Kicker dark>{kicker}</Kicker>
        <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.05] text-balance max-w-3xl">
          {title}
        </h1>
        {lead && <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">{lead}</p>}
      </div>
    </section>
  )
}

export function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`max-w-[1400px] mx-auto px-5 sm:px-8 ${className}`}>
      {children}
    </section>
  )
}

const LG_COLS: Record<number, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
}

export function StatStrip({
  stats,
  dark = false,
}: {
  stats: { value: string; label: string }[]
  dark?: boolean
}) {
  const lgCols = LG_COLS[Math.min(stats.length, 6)] ?? 'lg:grid-cols-3'
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 ${lgCols} gap-px rounded-2xl overflow-hidden border ${
        dark ? 'border-white/10 bg-white/10' : 'border-mist bg-mist'
      }`}
    >
      {stats.map((s) => (
        <div key={s.label} className={`p-6 sm:p-7 ${dark ? 'bg-ink-800' : 'bg-white'}`}>
          <div className={`font-mono-num text-2xl sm:text-3xl font-semibold ${dark ? 'text-electric-light' : 'text-electric-2'}`}>
            {s.value}
          </div>
          <div className={`mt-1.5 text-[0.8rem] leading-snug ${dark ? 'text-white/55' : 'text-slate'}`}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export function CTABanner({
  title = 'Construisons le dispositif santé de vos équipes.',
  lead = 'Un expert Doxamed étudie votre besoin et revient vers vous sous 24h ouvrées.',
}: {
  title?: string
  lead?: string
}) {
  return (
    <Section className="py-20 sm:py-28">
      <div className="relative rounded-3xl bg-ink-800 text-white overflow-hidden px-6 sm:px-16 py-14 sm:py-20 text-center">
        <div className="absolute inset-0 grid-backdrop opacity-70" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric/20 blur-[100px] rounded-full" />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance max-w-2xl mx-auto">{title}</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">{lead}</p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <ContactCTAButton />
            <Link
              href="/references"
              className="px-6 py-3.5 rounded-full border border-white/20 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white transition-colors"
            >
              Voir nos références
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
