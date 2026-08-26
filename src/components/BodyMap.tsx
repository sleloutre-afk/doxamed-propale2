'use client'

import { useState } from 'react'
import { BPS_EXAMS } from '@/lib/content'
import Picto, { type PictoKey } from './pictos'

type Exam = (typeof BPS_EXAMS)[number]

// Container-relative percentage box the body photo sits in — used to
// convert each exam's image-relative (e.x, e.y) anchor into a coordinate
// on the *outer* diagram, so the leader lines and orbit pills line up
// with the real anatomical position regardless of viewport width.
//
// The box's aspect ratio is deliberately matched to the source PNGs'
// real intrinsic ratio (1568×2650 ⇒ ~0.592, in an aspect-[4/5] outer
// container). With `object-fit: contain`, any mismatch here letterboxes
// the rendered image inside the box — shrinking it off-center and
// silently breaking the 1:1 mapping between (e.x, e.y) and the actual
// anatomy. Keep IMG_WIDTH = IMG_HEIGHT × 0.74 (≈ image ratio × 1.25
// outer-container correction) if this box or the source images change.
const IMG_LEFT = 16
const IMG_WIDTH = 68
const IMG_TOP = 4
const IMG_HEIGHT = 92

// Orbit ring the pictos are distributed around (ellipse, container %).
const ORBIT_RX = 41
const ORBIT_RY = 45

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
 *
 * Structure: an "orbit" diagram — a fine leader line runs from each
 * function's real anatomical position on the silhouette out to a picto
 * arranged around it in a ring, echoing a medical annotation chart rather
 * than a plain marker+pill-row layout.
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
  const activeIndex = exams.findIndex((e) => e.key === active)

  const points = exams.map((e, i) => {
    const angle = (i / exams.length) * Math.PI * 2 - Math.PI / 2
    return {
      exam: e,
      dotX: IMG_LEFT + (e.x / 100) * IMG_WIDTH,
      dotY: IMG_TOP + (e.y / 100) * IMG_HEIGHT,
      pillX: 50 + ORBIT_RX * Math.cos(angle),
      pillY: 50 + ORBIT_RY * Math.sin(angle),
    }
  })

  return (
    <div>
      <div className="relative mx-auto w-full max-w-[560px] aspect-[4/5]">
        {/* Leader lines from each anatomical point out to its orbit picto */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
          {points.map(({ exam, dotX, dotY, pillX, pillY }) => (
            <line
              key={exam.key}
              x1={dotX}
              y1={dotY}
              x2={pillX}
              y2={pillY}
              vectorEffect="non-scaling-stroke"
              stroke={active === exam.key ? 'var(--color-electric)' : dark ? 'rgba(255,255,255,0.14)' : 'rgba(6,13,24,0.12)'}
              strokeWidth={active === exam.key ? 1.4 : 1}
              strokeDasharray={active === exam.key ? undefined : '2 3'}
            />
          ))}
        </svg>

        {/* Body silhouette, anchored inside the same box used for the math above */}
        <img
          src={image}
          alt="Silhouette du corps humain, fonctions vitales explorées lors du bilan de prévention santé"
          className="absolute select-none pointer-events-none"
          style={{
            left: `${IMG_LEFT}%`,
            top: `${IMG_TOP}%`,
            width: `${IMG_WIDTH}%`,
            height: `${IMG_HEIGHT}%`,
            objectFit: 'contain',
            ...(dark ? { mixBlendMode: 'screen' } : { filter: 'drop-shadow(0 20px 40px rgba(0,169,224,0.15))' }),
          }}
          draggable={false}
        />

        {/* Anatomical anchor dots */}
        {points.map(({ exam, dotX, dotY }) => (
          <span
            key={exam.key}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${dotX}%`, top: `${dotY}%` }}
          >
            {active === exam.key && <span className="absolute inset-0 -m-1.5 rounded-full bg-electric/25 animate-pulse-dot" />}
            <span className={`relative block w-2 h-2 rounded-full ${active === exam.key ? 'bg-electric' : dark ? 'bg-white/50' : 'bg-ink-800/40'}`} />
          </span>
        ))}

        {/* Orbit pictos */}
        {points.map(({ exam, pillX, pillY }) => (
          <button
            key={exam.key}
            onClick={() => setActive(exam.key)}
            aria-label={exam.label}
            aria-pressed={active === exam.key}
            style={{ left: `${pillX}%`, top: `${pillY}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
          >
            <span
              className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 transition-all shadow-sm ${
                active === exam.key
                  ? 'bg-electric border-electric scale-110 shadow-lg'
                  : dark
                    ? 'bg-ink-700 border-white/15 group-hover:border-electric-light'
                    : 'bg-white border-mist group-hover:border-electric'
              }`}
            >
              <Picto
                name={exam.key as PictoKey}
                className={`w-6 h-6 sm:w-7 sm:h-7 ${active === exam.key ? 'text-white' : dark ? 'text-white/60 group-hover:text-electric-light' : 'text-electric-2'}`}
              />
            </span>
          </button>
        ))}
      </div>

      {/* Detail card for the active function, with prev/next through the orbit */}
      <div
        key={activeExam.key}
        className={`mt-8 rounded-2xl border p-6 sm:p-7 animate-fade-up flex items-start gap-5 ${
          dark ? 'border-white/10 bg-white/5' : 'border-mist bg-white'
        }`}
        style={{ animationDuration: '0.35s' }}
      >
        <span className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${dark ? 'bg-white/10' : 'bg-electric-dim'}`}>
          <Picto name={activeExam.key as PictoKey} className={`w-9 h-9 ${dark ? 'text-electric-light' : 'text-electric-2'}`} />
        </span>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <h3 className={`text-xl font-semibold ${dark ? 'text-white' : 'text-ink-800'}`}>{activeExam.label}</h3>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setActive(exams[(activeIndex - 1 + exams.length) % exams.length].key)}
                aria-label="Fonction précédente"
                className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                  dark ? 'border-white/15 text-white/50 hover:text-electric-light hover:border-electric-light' : 'border-mist text-slate-2 hover:text-electric-2 hover:border-electric'
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button
                onClick={() => setActive(exams[(activeIndex + 1) % exams.length].key)}
                aria-label="Fonction suivante"
                className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                  dark ? 'border-white/15 text-white/50 hover:text-electric-light hover:border-electric-light' : 'border-mist text-slate-2 hover:text-electric-2 hover:border-electric'
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-slate'}`}>{activeExam.detail}</p>
        </div>
      </div>
    </div>
  )
}
