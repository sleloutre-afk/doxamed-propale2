import Icon from './Icons'

export type MiniStep = { icon: string; title: string; detail?: string; optional?: boolean }

export default function MiniStepper({ steps, duration }: { steps: MiniStep[]; duration?: string }) {
  return (
    <div className="rounded-2xl border border-mist bg-white p-6 sm:p-8">
      {duration && (
        <div className="flex justify-end mb-4">
          <span className="font-mono-num text-xs text-white bg-electric px-2.5 py-1 rounded-full">{duration}</span>
        </div>
      )}
      <div className="grid sm:grid-cols-4 gap-6 sm:gap-0 relative">
        <div className="hidden sm:block absolute top-6 left-[12%] right-[12%] h-px bg-mist" />
        {steps.map((s, i) => (
          <div key={i} className="relative flex sm:flex-col items-center sm:text-center gap-4 sm:gap-3">
            <div
              className={`relative z-10 shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                s.optional ? 'bg-white border-mist text-slate-2' : 'bg-electric-dim border-electric text-electric-2'
              }`}
            >
              <Icon name={s.icon as never} className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-800">
                {i + 1}. {s.title}
              </p>
              {s.optional && <p className="text-[0.7rem] text-slate-2 mt-0.5">Si nécessaire</p>}
              {s.detail && <p className="text-xs text-slate mt-1 leading-relaxed">{s.detail}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
