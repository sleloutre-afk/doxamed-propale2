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

// Pictos flank the silhouette in two vertical columns rather than an
// evenly-spaced ring. Most exam anchors sit in the upper torso/head, so a
// full-circle "one slot per compass direction" layout was forcing several
// clustered points apart by 90°+ just to fill empty space lower on the
// ring — long, misleading leader lines. Two columns ordered top-to-bottom
// (matching the real vertical position) is both the classic medical-chart
// annotation layout and a much better fit for this data's shape.
const LABEL_LEFT_X = 8
const LABEL_RIGHT_X = 92
const LABEL_TOP_Y = 8
const LABEL_BOTTOM_Y = 94

export type BodyMapPoint = { exam: Exam; dotX: number; dotY: number; pillX: number; pillY: number }

/**
 * Shared state + geometry for one BodyMap instance. Lifted out of the
 * combined component below so a page can lay the diagram and the detail
 * card out separately (e.g. detail card in a text column, diagram in its
 * own column) while still sharing one `active` selection.
 */
export function useBodyMapState(exams: Exam[]) {
  const [active, setActive] = useState<string>(exams[0].key)
  const activeExam = exams.find((e) => e.key === active) ?? exams[0]
  const activeIndex = exams.findIndex((e) => e.key === active)

  const raw = exams.map((e) => ({
    exam: e,
    dotX: IMG_LEFT + (e.x / 100) * IMG_WIDTH,
    dotY: IMG_TOP + (e.y / 100) * IMG_HEIGHT,
  }))

  // Sort top-to-bottom, then greedily assign each point to whichever side
  // it's actually on (dotX vs. the vertical centerline) — falling back to
  // the other side only once its target column is full. This keeps each
  // column's vertical order matching the real anatomy *and* keeps a point
  // on its real side whenever the balance constraint allows it (a plain
  // alternation ignored dotX entirely, which is how "visuel" — left of
  // center — ended up in the right column and vice versa for "auditif").
  const sortedByHeight = [...raw].sort((a, b) => a.dotY - b.dotY)
  const leftTarget = Math.ceil(sortedByHeight.length / 2)
  const rightTarget = sortedByHeight.length - leftTarget
  const left: typeof raw = []
  const right: typeof raw = []
  for (const p of sortedByHeight) {
    const prefersLeft = p.dotX < 50
    if (prefersLeft && left.length < leftTarget) left.push(p)
    else if (!prefersLeft && right.length < rightTarget) right.push(p)
    else if (left.length < leftTarget) left.push(p)
    else right.push(p)
  }

  // Within a column, stay as close as possible to each point's real height
  // rather than spreading every item evenly across the full column — most
  // exams cluster in the upper body, so even spacing was dragging the
  // last item or two in a column (e.g. "vaccination") much further down
  // than their real position, producing a long, misleading line. Instead,
  // walk top to bottom and only push an item down when it would otherwise
  // overlap the one above it.
  const MIN_GAP = 12
  const layoutColumn = (items: typeof raw, x: number) => {
    const positions: number[] = []
    items.forEach((p) => {
      const naive = Math.min(Math.max(p.dotY, LABEL_TOP_Y), LABEL_BOTTOM_Y)
      const prev = positions[positions.length - 1]
      positions.push(prev === undefined ? naive : Math.max(naive, prev + MIN_GAP))
    })
    // If clustering pushed the stack past the bottom edge, shift the whole
    // column back up rather than letting the last item run off the diagram.
    const overflow = positions[positions.length - 1] - LABEL_BOTTOM_Y
    if (overflow > 0) positions.forEach((_, i) => (positions[i] -= overflow))
    return new Map(items.map((p, i) => [p.exam.key, { pillX: x, pillY: positions[i] }]))
  }

  const pillByKey = new Map([...layoutColumn(left, LABEL_LEFT_X), ...layoutColumn(right, LABEL_RIGHT_X)])

  const points: BodyMapPoint[] = raw.map((p) => ({
    exam: p.exam,
    dotX: p.dotX,
    dotY: p.dotY,
    ...pillByKey.get(p.exam.key)!,
  }))

  return { active, setActive, activeExam, activeIndex, points }
}

/**
 * The visual diagram: a fine leader line runs from each function's real
 * anatomical position on the silhouette out to a picto flanking it in one
 * of two side columns, echoing a medical annotation chart rather than a
 * plain marker+pill row. `dark`: the source photos (public/body/*.png)
 * were re-processed to real RGBA transparency (alpha derived from pixel brightness, replicating
 * the old mix-blend-mode:screen-on-black look but as an actual alpha
 * channel), so they composite cleanly over both light and dark backgrounds
 * — `dark` here only tunes the surrounding UI chrome.
 */
export function BodyMapDiagram({
  dark = false,
  image = '/body/body2.png',
  points,
  active,
  setActive,
}: {
  dark?: boolean
  image?: string
  points: BodyMapPoint[]
  active: string
  setActive: (key: string) => void
}) {
  return (
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
          filter: 'drop-shadow(0 20px 40px rgba(0,169,224,0.15))',
        }}
        draggable={false}
      />

      {/* Anatomical anchor dots */}
      {points.map(({ exam, dotX, dotY }) => (
        <span key={exam.key} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${dotX}%`, top: `${dotY}%` }}>
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
  )
}

/** Detail card for the active function, with prev/next through the set. */
export function BodyMapDetail({
  dark = false,
  exams,
  activeExam,
  activeIndex,
  setActive,
  className = '',
}: {
  dark?: boolean
  exams: Exam[]
  activeExam: Exam
  activeIndex: number
  setActive: (key: string) => void
  className?: string
}) {
  return (
    <div
      key={activeExam.key}
      className={`rounded-2xl border p-6 sm:p-7 animate-fade-up flex items-start gap-5 ${
        dark ? 'border-white/10 bg-white/5' : 'border-mist bg-white'
      } ${className}`}
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
  )
}

/**
 * Combined, self-contained BodyMap (diagram above, detail card below) —
 * the default, single-column usage.
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
  const { active, setActive, activeExam, activeIndex, points } = useBodyMapState(exams)

  return (
    <div>
      <BodyMapDiagram dark={dark} image={image} points={points} active={active} setActive={setActive} />
      <BodyMapDetail dark={dark} exams={exams} activeExam={activeExam} activeIndex={activeIndex} setActive={setActive} className="mt-8" />
    </div>
  )
}
