import LogoShape from './brand/LogoShape'
import LogoText from './brand/LogoText'

type LogoProps = {
  variant?: 'light' | 'dark'
  withTagline?: boolean
  className?: string
}

/** Doxamed lockup: official vector shape (blue) + official vector wordmark. */
export default function Logo({ variant = 'dark', withTagline = false, className = '' }: LogoProps) {
  const wordColor = variant === 'dark' ? 'text-ink-800' : 'text-white'
  const taglineColor = variant === 'dark' ? 'text-electric-2' : 'text-electric-light'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoShape className="h-8 w-auto text-electric shrink-0" />
      <span className="flex flex-col leading-none">
        <LogoText className={`h-[15px] w-auto ${wordColor}`} />
        {withTagline && (
          <span className={`text-[0.55rem] font-semibold tracking-[0.22em] uppercase mt-1.5 ${taglineColor}`}>
            Santé Innovation
          </span>
        )}
      </span>
    </span>
  )
}

/** Standalone pictogram, kept as a named export for spots that only need the mark. */
export function LogoMark({ className = 'w-7 h-7', color = 'text-electric' }: { className?: string; color?: string }) {
  return <LogoShape className={`${className} ${color}`} />
}
