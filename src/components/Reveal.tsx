'use client'

import { useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Stagger delay in ms — for sequencing multiple Reveals in a group. */
  delay?: number
  /** Direction the content travels in from. */
  from?: 'up' | 'left' | 'right' | 'scale'
}

const OFFSETS: Record<NonNullable<RevealProps['from']>, string> = {
  up: 'translate-y-8',
  left: '-translate-x-8',
  right: 'translate-x-8',
  scale: 'scale-95',
}

/**
 * Scroll-triggered entrance animation. Wraps any block and fades/slides it
 * in once it crosses into the viewport, via IntersectionObserver (same
 * technique already used by FloatingCTA). Purely a motion/graphic
 * differentiator vs Propale 1, which only animated the hero on first load.
 */
export default function Reveal({ children, className = '', delay = 0, from = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${OFFSETS[from]}`} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
