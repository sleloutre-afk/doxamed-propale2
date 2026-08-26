'use client'

import { useState } from 'react'
import { BPS_EXAMS } from '@/lib/content'
import Picto, { type PictoKey } from './pictos'

type Exam = (typeof BPS_EXAMS)[number]

/**
 * `dark`: the source photos (public/body/*.png) have an opaque black
 * background rather than transparency. On a dark (ink) section we render
 * them with `mix-blend-mode: screen`, which drops pure black to fully
 * transparent and lets the blue glow float directly on the page background —
 * no image editing required. Only use `dark` when the wrapping section is on
 * bg-ink-800 (or similarly dark); on a light section the black would show.
 *
 * `exams`: defaults to the full 10-item "offre 360°" set; pass a filtered
 * subset (e.g. the 8-item BPS parcours) where the page is product-specific.
 * `image`: which body photo to use — defaults to body2.png (home), pass
 * "/body/body.png" for a differentiated visual on other pages.
 */
export default function BodyMap({
  dark = false,
  exams = BPS_EXAMS as unknown as Exam[],
  image = '/body/body2.png',
}: {
  dark?: boolean
  exams?: Exam[]
  image?: string
}) {
  const [active, setActive] = useState<string>(exams[0].key)
  const activeExam = exams.find((e) => e.key === active) ?? exams[0]

  return (
    <div className="grid lg:grid-cols-[minmax(0,300px)_1fr] gap-8 lg:gap-14 items-center">
      <div className="relative mx-auto w-full max-w-[280px]">
        <img
          src={image}
          alt="Silhouette du corps humain, fonctions vitales explorées lors du bilan de prévention santé"
          className="w-full h-auto select-none pointer-events-none"
          style={dark ? { mixBlendMode: 'screen' } : { filter: 'drop-shadow(0 20px 40px rgba(0,169,224,0.15))' }}
          draggable={false}
        />

        {exams.map((e) => (
          <button
            key={e.key}
            onClick={() => setActive(e.key)}
            aria-label={e.label}
            aria-pressed={active === e.key}
            style={{ left: `${e.x}%`, top: `${e.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
          >
            {active === e.key && (
              <span className="absolute inset-0 -m-2 rounded-full bg-electric/20 animate-pulse-dot" />
            )}
            <span
              className={`relative flex items-center justify-center w-3.5 h-3.5 rounded-full border-2 shadow transition-colors ${
                dark ? 'border-ink-800' : 'border-white'
              } ${active === e.key ? 'bg-electric' : dark ? 'bg-white/70 group-hover:bg-electric-light' : 'bg-ink-800 group-hover:bg-electric-2'}`}
            />
          </button>
        ))}
      </div>

      <div>
        <div className="flex flex-wrap gap-3 mb-6">
          {exams.map((e) => (
            <button
              key={e.key}
              onClick={() => setActive(e.key)}
              className={`inline-flex items-center gap-2.5 pl-3 pr-4 py-2 rounded-full text-[0.85rem] font-medium border transition-colors ${
                active === e.key
                  ? dark
                    ? 'bg-electric border-electric text-white'
                    : 'bg-ink-800 border-ink-800 text-white'
                  : dark
                    ? 'border-white/15 text-white/60 hover:border-electric hover:text-electric-light'
                    : 'border-mist text-slate hover:border-electric hover:text-electric-2'
              }`}
            >
              <Picto
                name={e.key as PictoKey}
                className={`w-8 h-8 shrink-0 ${active === e.key ? (dark ? 'text-white' : 'text-electric-light') : dark ? 'text-white/50' : 'text-electric-2'}`}
              />
              {e.label}
            </button>
          ))}
        </div>
        <div
          key={activeExam.key}
          className={`rounded-2xl border p-6 sm:p-7 animate-fade-up flex items-start gap-5 ${
            dark ? 'border-white/10 bg-white/5' : 'border-mist bg-white'
          }`}
          style={{ animationDuration: '0.35s' }}
        >
          <span
            className={`w-20 h-20 rounded-xl flex items-center justify-center shrink-0 ${
              dark ? 'bg-white/10' : 'bg-electric-dim'
            }`}
          >
            <Picto name={activeExam.key as PictoKey} className={`w-12 h-12 ${dark ? 'text-electric-light' : 'text-electric-2'}`} />
          </span>
          <div>
            <h3 className={`text-xl font-semibold mb-2 ${dark ? 'text-white' : 'text-ink-800'}`}>{activeExam.label}</h3>
            <p className={`text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-slate'}`}>{activeExam.detail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
