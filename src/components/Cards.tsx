import Link from 'next/link'
import Icon from './Icons'
import Picto from './pictos'
import type { Metier, Mode, ClientRef, NewsItem } from '@/lib/content'

// Cards 2 (Risques psychosociaux) and 3 (Dépistage & vaccination) use the
// real client-supplied pictos (mental.svg / vaccin.svg) instead of the
// generic line icon set.
const METIER_PICTO_OVERRIDE: Partial<Record<string, 'sante-mentale' | 'vaccination'>> = {
  'risques-psychosociaux': 'sante-mentale',
  'depistage-vaccination': 'vaccination',
}

export function MetierCard({ m }: { m: Metier }) {
  const isElectric = m.color === 'electric'
  const pictoOverride = METIER_PICTO_OVERRIDE[m.slug]
  return (
    <Link href={`/solutions/${m.slug}`} className="group relative flex flex-col h-full pt-7">
      {/* Circular badge, pinned so it overlaps the card's top edge */}
      <div
        className={`absolute -top-0 left-7 z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-transform group-hover:-translate-y-1 ${
          isElectric ? 'bg-electric text-white' : 'bg-white text-electric-2 border border-mist'
        }`}
      >
        {pictoOverride ? <Picto name={pictoOverride} className="w-7 h-7" /> : <Icon name={m.icon as never} className="w-7 h-7" />}
      </div>

      <div
        className={`lift relative flex flex-col flex-1 rounded-2xl border p-7 sm:p-8 pt-11 overflow-hidden ${
          isElectric ? 'bg-ink-800 border-ink-line text-white' : 'bg-white border-mist text-ink-800'
        }`}
      >
        <div className={`absolute inset-0 grid-backdrop ${isElectric ? 'opacity-100' : 'grid-backdrop-light'} pointer-events-none`} />
        <span
          aria-hidden="true"
          className={`absolute -top-3 right-3 font-mono-num text-[6.5rem] leading-none font-semibold select-none pointer-events-none ${
            isElectric ? 'text-white/[0.07]' : 'text-ink-800/[0.05]'
          }`}
        >
          {m.number}
        </span>
        <div className="relative">
          <p className={`text-[0.7rem] font-semibold uppercase tracking-[0.14em] mb-2 ${isElectric ? 'text-electric-light' : 'text-electric-2'}`}>
            {m.short}
          </p>
          <h3 className="text-xl font-semibold tracking-tight mb-3 text-balance">{m.name}</h3>
          <p className={`text-sm leading-relaxed mb-6 ${isElectric ? 'text-white/60' : 'text-slate'}`}>{m.pitch}</p>
        </div>
        <div className="relative mt-auto flex items-center gap-2 text-sm font-semibold">
          <span className={isElectric ? 'text-electric-light' : 'text-electric-2'}>Découvrir</span>
          <Icon name="arrowRight" className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isElectric ? 'text-electric-light' : 'text-electric-2'}`} />
        </div>
      </div>
    </Link>
  )
}

const MODE_PICTOS: Record<string, 'in-situ' | 'box' | 'mobilcare' | 'gare'> = {
  'in-situ': 'in-situ',
  box: 'box',
  mobilcare: 'mobilcare',
  'espace-sante-en-gare': 'gare',
}

const MODE_IMAGES: Record<string, string> = {
  'in-situ': '/photos/in-situ-mini.png',
  box: '/photos/box-mini.png',
  mobilcare: '/photos/mobilcar-mini.png',
  'espace-sante-en-gare': '/photos/gare-mini.png',
}

export function ModeCard({ m }: { m: Mode }) {
  return (
    <Link
      href={`/modes-intervention/${m.slug}`}
      className="lift group relative flex flex-col rounded-2xl border border-mist bg-white p-7 h-full overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={MODE_IMAGES[m.slug]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none"
      />
      <div className="relative z-10 flex flex-col h-full">
        <div className="relative w-20 h-20 mb-6">
          <span className="absolute -inset-2 rounded-full border border-dashed border-electric/30 group-hover:border-electric/60 transition-colors" />
          <div className="absolute inset-0 rounded-full bg-electric-dim text-electric-2 flex items-center justify-center">
            <Picto name={MODE_PICTOS[m.slug]} className="w-9 h-9" />
          </div>
        </div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-electric-2 mb-1.5">{m.short}</p>
        <h3 className="text-lg font-semibold tracking-tight text-ink-800 mb-2.5">{m.name}</h3>
        <p className="text-sm text-slate leading-relaxed mb-5">{m.pitch}</p>
        {m.stat && (
          <div className="mt-auto pt-4 border-t border-mist flex items-baseline gap-2">
            <span className="font-mono-num text-xl font-semibold text-ink-800">{m.stat.value}</span>
            <span className="text-xs text-slate">{m.stat.label}</span>
          </div>
        )}
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-electric-2">
          <span>En savoir plus</span>
          <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

export function ClientRefCard({ c }: { c: ClientRef }) {
  return (
    <div className="lift rounded-2xl border border-mist bg-white p-6 sm:p-7">
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-electric-2">{c.category}</p>
          <h3 className="text-lg font-semibold text-ink-800 mt-1">{c.name}</h3>
        </div>
        <span className="text-xs text-slate-2 whitespace-nowrap">{c.since}</span>
      </div>
      {c.logo && (
        <div className="flex justify-center mb-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.logo} alt={c.name} className="h-10 w-auto max-w-[180px] object-contain" />
        </div>
      )}
      <p className="text-sm text-slate leading-relaxed mb-6">{c.detail}</p>
      <div className="flex items-baseline gap-2 pt-4 border-t border-mist">
        <span className="font-mono-num text-2xl font-semibold text-ink-800">{c.metric.value}</span>
        <span className="text-xs text-slate">{c.metric.label}</span>
      </div>
    </div>
  )
}

const NEWS_TYPE_LABEL: Record<NewsItem['type'], string> = {
  article: 'Article',
  presse: 'Dans les médias',
  reseaux: 'Réseaux sociaux',
  'livre-blanc': 'Livre blanc',
}

export function NewsTypeBadge({ type }: { type: NewsItem['type'] }) {
  const styles: Record<NewsItem['type'], string> = {
    article: 'bg-electric-dim text-electric-2',
    presse: 'bg-ink-800 text-white',
    reseaux: 'bg-mist text-slate',
    'livre-blanc': 'bg-signal/10 text-signal',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${styles[type]}`}>
      {type === 'livre-blanc' && <Icon name="download" className="w-3 h-3" />}
      {NEWS_TYPE_LABEL[type]}
    </span>
  )
}

const NEWS_TYPE_PICTO: Record<NewsItem['type'], 'whitepaper' | 'medias' | 'social' | 'articles'> = {
  'livre-blanc': 'whitepaper',
  presse: 'medias',
  reseaux: 'social',
  article: 'articles',
}

export function NewsCard({ n }: { n: NewsItem }) {
  return (
    <Link href={`/actualites/${n.slug}`} className="lift group flex flex-col rounded-2xl border border-mist bg-white overflow-hidden h-full">
      <div className="aspect-[16/10] bg-paper-2 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop-light opacity-60" />
        <Picto name={NEWS_TYPE_PICTO[n.type]} className="w-24 h-24 text-electric-2/50 relative" />
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <NewsTypeBadge type={n.type} />
          <span className="text-xs text-slate-2">{n.date}</span>
        </div>
        <h3 className="text-[1.02rem] font-semibold text-ink-800 leading-snug mb-2 group-hover:text-electric-2 transition-colors">
          {n.title}
        </h3>
        <p className="text-sm text-slate leading-relaxed line-clamp-3">{n.excerpt}</p>
        {n.outlet && <p className="mt-3 text-xs text-slate-2 italic">{n.outlet}</p>}
      </div>
    </Link>
  )
}

export function PersonCard({
  name,
  role,
  detail,
  photo,
  linkedin,
}: {
  name: string
  role: string
  detail?: string
  /** Optional real photo (e.g. "/photos/comite/guillotin.png") — falls back to initials monogram. */
  photo?: string
  /** Optional LinkedIn profile URL — renders a small badge next to the name. */
  linkedin?: string
}) {
  const initials = name
    .replace(/^(Dr|Pr)\.?\s/, '')
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="rounded-2xl border border-mist bg-white p-6">
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo} alt={name} className="w-12 h-12 rounded-full object-cover mb-4" />
      ) : (
        <div className="w-12 h-12 rounded-full bg-ink-800 text-white flex items-center justify-center font-semibold text-sm mb-4">
          {initials}
        </div>
      )}
      <div className="flex items-center gap-2">
        <h3 className="text-[0.98rem] font-semibold text-ink-800 leading-snug">{name}</h3>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`Profil LinkedIn de ${name}`}
            className="w-6 h-6 rounded-full border border-mist flex items-center justify-center text-slate-2 hover:text-electric-2 hover:border-electric transition-colors shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.97V21h-4V9Z"/></svg>
          </a>
        )}
      </div>
      <p className="text-sm text-electric-2 font-medium mt-1">{role}</p>
      {detail && <p className="text-sm text-slate leading-relaxed mt-2.5">{detail}</p>}
    </div>
  )
}

export function ClientLogoStrip({ names, logos = {} }: { names: string[]; logos?: Partial<Record<string, string>> }) {
  const loop = [...names, ...names]
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex items-center gap-10 sm:gap-14 w-max animate-marquee">
        {loop.map((n, i) =>
          logos[n] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${n}-${i}`}
              src={logos[n]}
              alt={n}
              className="h-6 sm:h-7 w-auto max-w-[130px] object-contain shrink-0 opacity-45 grayscale"
            />
          ) : (
            <span key={`${n}-${i}`} className="text-[1.05rem] font-semibold tracking-tight text-ink-800/35 whitespace-nowrap shrink-0">
              {n}
            </span>
          )
        )}
      </div>
    </div>
  )
}
