'use client'

import Link from 'next/link'
import { useBodyMapState, BodyMapDiagram, BodyMapDetail } from './BodyMap'
import type { BPS_EXAMS } from '@/lib/content'

type Exam = (typeof BPS_EXAMS)[number]

/**
 * Home-page-specific layout for the "Offre 360°" section: intro text, the
 * active function's detail card and the CTA all live in the left column
 * (reading order: what this is → the function you picked → act), while the
 * orbit diagram itself sits in the right column — both driven by one
 * shared `active` selection. The combined, single-column <BodyMap /> stays
 * the default export in BodyMap.tsx for pages that don't split the layout
 * (e.g. the BPS solution page).
 */
export default function Body360Section({
  dark = false,
  exams,
  image,
  ctaHref,
  ctaLabel,
  children,
}: {
  dark?: boolean
  exams: Exam[]
  image?: string
  /** Optional CTA below the detail card — omit for sections that don't need one. */
  ctaHref?: string
  ctaLabel?: string
  /** Kicker / heading / lead paragraph for the left column. */
  children: React.ReactNode
}) {
  const { active, setActive, activeExam, activeIndex, points } = useBodyMapState(exams)

  return (
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
      <div>
        {children}
        <BodyMapDetail dark={dark} exams={exams} activeExam={activeExam} activeIndex={activeIndex} setActive={setActive} className="mt-8" />
        {ctaHref && ctaLabel && (
          <div className="mt-6">
            <Link
              href={ctaHref}
              className="inline-block px-6 py-3.5 rounded-full text-sm font-semibold bg-electric text-white hover:bg-electric-2 transition-colors"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
      <BodyMapDiagram dark={dark} image={image} points={points} active={active} setActive={setActive} />
    </div>
  )
}
