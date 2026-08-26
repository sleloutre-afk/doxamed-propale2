'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useContactModal } from './ContactModalProvider'

export default function FloatingCTA() {
  const pathname = usePathname()
  const { openModal } = useContactModal()
  const [onDark, setOnDark] = useState(false)
  const intersecting = useRef<Set<Element>>(new Set())

  // Detects whether a dark (bg-ink-800) section currently sits behind the
  // button — by watching a thin band at the very bottom of the viewport,
  // roughly where the button is docked — so the button can switch to a
  // light variant instead of disappearing against a dark background.
  useEffect(() => {
    intersecting.current = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.current.add(entry.target)
          else intersecting.current.delete(entry.target)
        }
        setOnDark(intersecting.current.size > 0)
      },
      { threshold: 0, rootMargin: '-92% 0px 0px 0px' }
    )

    document.querySelectorAll('.bg-ink-800').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])

  if (pathname === '/contact') return null

  return (
    <button
      onClick={() => openModal()}
      className={`fixed z-40 group flex items-center gap-2 rounded-full px-5 py-3.5 sm:py-4 shadow-2xl shadow-black/25 transition-colors
        bottom-5 left-1/2 -translate-x-1/2
        sm:bottom-7 sm:right-7 sm:left-auto sm:translate-x-0
        ${onDark ? 'bg-white text-ink-800 hover:bg-electric-light' : 'bg-ink-800 text-white hover:bg-electric-2'}`}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric" />
      </span>
      <span className="text-[0.82rem] font-semibold whitespace-nowrap">Prenons contact</span>
    </button>
  )
}
