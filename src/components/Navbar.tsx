'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { NAV } from '@/lib/nav'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
    setSearchOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!searchOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setSearchOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [searchOpen])

  // The whole site now stays on light backgrounds (no dark hero to sit
  // transparently over), so the header is permanently solid — only its
  // shadow/border strengthens once scrolled, as a subtle depth cue.
  const scrolledStyle = scrolled || mobileOpen

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-paper/95 backdrop-blur-md transition-shadow duration-300 border-b ${
        scrolledStyle ? 'border-mist shadow-sm shadow-ink-800/[0.03]' : 'border-mist/60'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        <Link href="/" className="shrink-0" onClick={() => setOpenMenu(null)}>
          <Logo variant="dark" />
        </Link>

        <div className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpenMenu(null)}>
          {NAV.map((item) => (
            <div key={item.href} className="relative" onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}>
              <Link
                href={item.href}
                className={`px-4 py-2.5 text-[0.85rem] font-medium rounded-full transition-colors ${
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'text-electric-2'
                    : 'text-slate hover:text-ink-800'
                }`}
              >
                {item.label}
              </Link>

              {item.children && openMenu === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[340px]">
                  <div className="rounded-2xl bg-white border border-mist shadow-xl shadow-ink-800/5 p-2 animate-fade-up" style={{ animationDuration: '0.18s' }}>
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 hover:bg-paper-2 transition-colors group"
                      >
                        <span className="text-[0.85rem] font-semibold text-ink-800 flex items-center gap-1.5">
                          {c.label}
                          <span className="text-electric opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </span>
                        {c.blurb && <span className="text-[0.75rem] text-slate">{c.blurb}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Language switch and search — visual only for now, pending client
              validation of this design direction before wiring EN pages /
              real search. */}
          <div className="flex items-center gap-3 ml-2 pl-3 border-l border-mist">
            <div className="flex items-center gap-1 text-[0.8rem] font-medium select-none">
              <span className="text-ink-800">FR</span>
              <span className="text-slate-2">/</span>
              <span className="text-slate-2">EN</span>
            </div>
            <div className="relative" ref={searchRef}>
              <button
                type="button"
                aria-label={searchOpen ? 'Fermer la recherche' : 'Rechercher'}
                onClick={() => setSearchOpen((v) => !v)}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                  searchOpen ? 'text-electric-2 bg-electric-dim' : 'text-slate hover:text-ink-800 hover:bg-paper-2'
                }`}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M21 21L16.5 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>

              {searchOpen && (
                <div className="absolute top-full right-0 pt-3 w-[380px]">
                  <div
                    className="rounded-2xl bg-white border border-mist shadow-xl shadow-ink-800/5 p-2 animate-fade-up"
                    style={{ animationDuration: '0.18s' }}
                  >
                    <div className="flex items-center gap-2.5 rounded-xl bg-paper-2 px-3.5 py-2.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-slate-2 shrink-0" aria-hidden="true">
                        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M21 21L16.5 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                      <input
                        type="text"
                        autoFocus
                        placeholder="Rechercher…"
                        className="flex-1 bg-transparent outline-none text-sm text-ink-800 placeholder:text-slate-2"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-ink-800"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-paper border-t border-mist max-h-[calc(100vh-68px)] overflow-y-auto">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.href} className="border-b border-mist/70 py-2">
                <Link href={item.href} className="block py-2 text-[0.95rem] font-semibold text-ink-800">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="flex flex-col pl-3 pb-1">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="py-1.5 text-[0.85rem] text-slate">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
