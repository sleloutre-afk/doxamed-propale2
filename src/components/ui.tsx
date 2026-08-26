import Link from 'next/link'
import ContactCTAButton from './ContactCTAButton'
import Reveal from './Reveal'
import CountUp from './CountUp'

export function Kicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
      <span className="w-6 h-px bg-electric/45 shrink-0" />
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
  /** Plain string, or JSX with a highlighted word via <span className="text-electric-2">…</span>. */
  title: React.ReactNode
  lead?: string
  crumb?: { label: string; href: string }[]
  /** Optional photo (e.g. "/photos/mobilcar.png"), shown in a framed panel beside the text. */
  image?: string
  /** CSS object-position for the photo/video (default "center"). */
  imagePosition?: string
  /** Optional video (e.g. "/videos/bps.mp4"), shown in the same framed panel — takes priority over `image`. */
  video?: string
}) {
  const hasMedia = Boolean(image || video)
  return (
    <section className="relative bg-paper overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="absolute inset-0 grid-backdrop-light" />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-electric/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8">
        {crumb && (
          <div className="flex items-center gap-2 text-xs text-slate-2 mb-6 flex-wrap">
            <Link href="/" className="hover:text-ink-800 transition-colors">Accueil</Link>
            {crumb.map((c, i) => (
              <span key={c.href} className="flex items-center gap-2">
                <span>/</span>
                {i === crumb.length - 1 ? (
                  <span className="text-ink-800">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-ink-800 transition-colors">{c.label}</Link>
                )}
              </span>
            ))}
          </div>
        )}
        <div className={hasMedia ? 'grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-14 items-center' : ''}>
          <div>
            <Kicker>{kicker}</Kicker>
            <h1 className={`text-4xl sm:text-5xl lg:text-[3.2rem] font-semibold tracking-tight leading-[1.05] text-ink-800 text-balance ${hasMedia ? '' : 'max-w-3xl'}`}>
              {title}
            </h1>
            {lead && <p className={`mt-6 text-lg text-slate leading-relaxed ${hasMedia ? '' : 'max-w-2xl'}`}>{lead}</p>}
          </div>
          {hasMedia && (
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-xl shadow-ink-800/10 border border-mist/60">
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
              </div>
              <span className="hidden lg:block absolute -top-6 -right-6 w-20 h-20 rounded-full border border-dashed border-electric/30 pointer-events-none" />
            </div>
          )}
        </div>
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

// Same floating "dock" treatment as the home hero's stats row: a single
// white card with dividers, drop shadow and animated CountUp values —
// rather than a plain grid-mosaic strip — so every page's stat block
// reads as the same component, not a page-specific one-off.
export function StatStrip({ stats }: { stats: { value: string; label: string }[] }) {
  const lgCols = LG_COLS[Math.min(stats.length, 6)] ?? 'lg:grid-cols-3'
  return (
    <div
      className={`rounded-2xl border border-mist bg-white shadow-lg shadow-ink-800/[0.04] grid grid-cols-2 sm:grid-cols-3 ${lgCols} divide-x divide-y sm:divide-y-0 divide-mist`}
    >
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 60} from="up">
          <div className="p-6 sm:p-7">
            <div className="font-mono-num text-2xl sm:text-3xl font-semibold text-electric-2">
              <CountUp value={s.value} />
            </div>
            <div className="mt-1.5 text-[0.8rem] leading-snug text-slate">{s.label}</div>
          </div>
        </Reveal>
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
      <div className="relative rounded-3xl bg-paper-2 border border-mist overflow-hidden px-6 sm:px-14 py-14 sm:py-16">
        <div className="absolute inset-0 grid-backdrop-light opacity-70" />
        {/* Orbit-motif rings, echoing the BodyMap diagram elsewhere on the site */}
        <span className="absolute -top-24 -right-24 w-[340px] h-[340px] rounded-full border border-electric/25 pointer-events-none" />
        <span className="absolute -top-8 -right-8 w-[220px] h-[220px] rounded-full border border-dashed border-electric/30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric/10 blur-[100px] rounded-full" />
        <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 text-balance max-w-xl">{title}</h2>
            <p className="mt-4 text-slate max-w-lg">{lead}</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap lg:shrink-0">
            <ContactCTAButton />
            <Link
              href="/references"
              className="px-6 py-3.5 rounded-full border border-mist bg-white text-sm font-semibold text-ink-800 hover:border-electric hover:text-electric-2 transition-colors"
            >
              Voir nos références
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
