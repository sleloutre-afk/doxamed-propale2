'use client'

import { useState } from 'react'
import { PARCOURS_PATIENT } from '@/lib/content'

const PHASE_COLOR: Record<string, string> = {
  Avant: 'text-slate-2',
  'Sur site': 'text-electric-2',
  'À distance': 'text-ink-800',
  Après: 'text-slate-2',
}

export default function PatientJourney() {
  const [active, setActive] = useState(0)

  return (
    <div>
      {/* Progress rail — inset by half a grid column so it spans exactly
          from the first dot's center to the last dot's center. */}
      <div className="relative mb-10 hidden md:block">
        <div
          className="absolute top-4 h-px bg-mist"
          style={{
            left: `${50 / PARCOURS_PATIENT.length}%`,
            right: `${50 / PARCOURS_PATIENT.length}%`,
          }}
        />
        <div
          className="absolute top-4 h-px bg-electric transition-all duration-500"
          style={{
            left: `${50 / PARCOURS_PATIENT.length}%`,
            width: `${(active / (PARCOURS_PATIENT.length - 1)) * (100 - 100 / PARCOURS_PATIENT.length)}%`,
          }}
        />
        <div className="relative grid" style={{ gridTemplateColumns: `repeat(${PARCOURS_PATIENT.length}, 1fr)` }}>
          {PARCOURS_PATIENT.map((s, i) => (
            <button key={i} onClick={() => setActive(i)} className="flex flex-col items-center group">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center font-mono-num text-xs font-semibold border-2 transition-colors ${
                  i <= active ? 'bg-electric border-electric text-white' : 'bg-white border-mist text-slate-2'
                }`}
              >
                {i + 1}
              </span>
              <span className={`mt-3 text-[0.7rem] font-medium text-center px-1 ${i === active ? 'text-ink-800' : 'text-slate-2'}`}>
                {s.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile list */}
      <div className="md:hidden flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
        {PARCOURS_PATIENT.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`shrink-0 px-3.5 py-2 rounded-full text-xs font-semibold border ${
              i === active ? 'bg-ink-800 border-ink-800 text-white' : 'border-mist text-slate'
            }`}
          >
            {i + 1}. {s.title}
          </button>
        ))}
      </div>

      <div key={active} className="rounded-2xl border border-mist bg-white p-7 sm:p-9 animate-fade-up" style={{ animationDuration: '0.35s' }}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-[0.72rem] font-semibold uppercase tracking-[0.14em] ${PHASE_COLOR[PARCOURS_PATIENT[active].phase]}`}>
            {PARCOURS_PATIENT[active].phase}
          </span>
          {PARCOURS_PATIENT[active].duration && (
            <span className="font-mono-num text-xs text-white bg-ink-800 px-2.5 py-1 rounded-full">
              {PARCOURS_PATIENT[active].duration}
            </span>
          )}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-ink-800 mb-3">{PARCOURS_PATIENT[active].title}</h3>
        <p className="text-slate leading-relaxed max-w-xl">{PARCOURS_PATIENT[active].detail}</p>

        <div className="mt-6 flex gap-2">
          <button
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            className="px-4 py-2 rounded-full text-xs font-semibold border border-mist text-slate disabled:opacity-30 hover:border-electric hover:text-electric-2 transition-colors"
          >
            ← Précédent
          </button>
          <button
            onClick={() => setActive((a) => Math.min(PARCOURS_PATIENT.length - 1, a + 1))}
            disabled={active === PARCOURS_PATIENT.length - 1}
            className="px-4 py-2 rounded-full text-xs font-semibold border border-mist text-slate disabled:opacity-30 hover:border-electric hover:text-electric-2 transition-colors"
          >
            Suivant →
          </button>
        </div>
      </div>
    </div>
  )
}
