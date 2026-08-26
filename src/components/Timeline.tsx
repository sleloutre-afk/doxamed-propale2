export type TimelineEntry = { period: string; role: string; org: string }

export function CareerTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[7px] top-1 bottom-1 w-px bg-mist" />
      <div className="space-y-8">
        {entries.map((e, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-electric" />
            <p className="font-mono-num text-xs text-electric-2 mb-1">{e.period}</p>
            <p className="font-semibold text-ink-800">{e.role}</p>
            <p className="text-sm text-slate">{e.org}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export type HistoryEntry = { year: string; title: string; detail: string }

export function HistoryTimeline({ entries }: { entries: HistoryEntry[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[15px] sm:left-1/2 top-2 bottom-2 w-px bg-mist sm:-translate-x-1/2" />
      <div className="space-y-10 sm:space-y-14">
        {entries.map((e, i) => {
          const left = i % 2 === 0
          return (
            <div key={e.year} className="relative grid sm:grid-cols-2 gap-4 sm:gap-10">
              <span className="absolute left-[9px] sm:left-1/2 top-1 w-3.5 h-3.5 rounded-full bg-electric sm:-translate-x-1/2 ring-4 ring-paper" />
              <div className={`pl-9 sm:pl-0 ${left ? 'sm:text-right sm:pr-10' : 'sm:col-start-2 sm:pl-10'}`}>
                <p className="font-mono-num text-sm text-electric-2 mb-1.5">{e.year}</p>
                <p className="font-semibold text-ink-800 mb-1.5">{e.title}</p>
                <p className="text-sm text-slate leading-relaxed">{e.detail}</p>
              </div>
              {left && <div className="hidden sm:block" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
