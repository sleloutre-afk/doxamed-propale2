'use client'

import { useEffect, useRef, useState } from 'react'

function formatGrouped(n: number) {
  return n.toLocaleString('fr-FR').replace(/ | /g, ' ')
}

/**
 * Animates the numeric core of a stat string (e.g. "+10 000", "±3 000",
 * "98%", "2K/jour") counting up from 0 once scrolled into view, keeping
 * any leading symbol (+/±/~) and trailing suffix intact. Pure motion
 * differentiator vs Propale 1's static stat figures.
 */
export default function CountUp({ value, duration = 1300 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)
  const [display, setDisplay] = useState<string | null>(null)

  const match = value.match(/^([^\d]*)(\d[\d\s.,]*\d|\d)(.*)$/)

  useEffect(() => {
    const el = ref.current
    if (!el || !match) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!started || !match) return
    const target = parseInt(match[2].replace(/[^\d]/g, ''), 10)
    if (Number.isNaN(target)) return
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(formatGrouped(Math.round(target * eased)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started])

  if (!match) return <span ref={ref}>{value}</span>

  const [, prefix, , suffix] = match
  return (
    <span ref={ref}>
      {prefix}
      {display ?? '0'}
      {suffix}
    </span>
  )
}
