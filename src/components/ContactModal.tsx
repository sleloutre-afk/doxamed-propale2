'use client'

import { useEffect, useState } from 'react'
import { LogoMark } from './Logo'

const NEEDS = [
  'Bilan de prévention santé (BPS)',
  'Prévention des risques psychosociaux',
  'Campagne de dépistage ou vaccination',
  'Espace de santé / accès aux soins',
  'Conseil & ingénierie santé',
  'Autre demande',
]

export default function ContactModal({
  isOpen,
  onClose,
  presetNeed,
}: {
  isOpen: boolean
  onClose: () => void
  presetNeed?: string
}) {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setSubmitted(false), 300)
      return () => clearTimeout(t)
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6">
      <button
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        style={{ background: 'rgba(6,13,24,0.72)' }}
      />
      <div className="relative w-full sm:max-w-lg sm:rounded-2xl bg-paper h-full sm:h-auto sm:max-h-[92vh] overflow-y-auto shadow-2xl animate-fade-up">
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 bg-paper border-b border-mist">
          <div className="flex items-center gap-2">
            <LogoMark className="w-6 h-6" />
            <span className="text-sm font-semibold tracking-tight text-ink-800">Prenons contact</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer la fenêtre de contact"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate hover:text-ink-800 hover:bg-mist transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6">
          {submitted ? (
            <div className="py-10 text-center animate-fade-up">
              <div className="w-14 h-14 mx-auto rounded-full bg-electric-dim flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12.5L9.5 18L20 6" stroke="#00a9e0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-ink-800 mb-2">Merci, votre demande est bien reçue</h3>
              <p className="text-sm text-slate max-w-sm mx-auto">
                Un expert Doxamed étudie votre besoin et vous recontacte sous 24h ouvrées.
              </p>
              <button
                onClick={onClose}
                className="mt-6 text-sm font-medium text-electric hover:text-electric-2 transition-colors"
              >
                Fermer
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-ink-800 mb-1 text-balance">
                Un projet de prévention santé ?
              </h3>
              <p className="text-sm text-slate mb-6">
                Précisez votre besoin ci-dessous, un expert Doxamed vous recontacte sous 24h ouvrées.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Prénom" name="firstname" required />
                  <Field label="Nom" name="lastname" required />
                </div>
                <Field label="Email professionnel" name="email" type="email" required />
                <Field label="Entreprise / organisation" name="company" required />
                <div>
                  <label className="block text-xs font-medium text-slate mb-1.5" htmlFor="need">
                    Type de besoin
                  </label>
                  <select
                    id="need"
                    name="need"
                    defaultValue={presetNeed ?? ''}
                    className="w-full rounded-lg border border-mist bg-white px-3.5 py-2.5 text-sm text-ink-800 focus:border-electric outline-none transition-colors"
                  >
                    <option value="" disabled>
                      Sélectionnez une offre
                    </option>
                    {NEEDS.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Nombre de collaborateurs, sites concernés, échéance envisagée…"
                    className="w-full rounded-lg border border-mist bg-white px-3.5 py-2.5 text-sm text-ink-800 placeholder:text-slate-2 focus:border-electric outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-ink-800 text-white text-sm font-semibold py-3 hover:bg-electric-2 transition-colors"
                >
                  Envoyer ma demande
                </button>
                <p className="text-[11px] text-slate-2 text-center leading-relaxed">
                  Données traitées en stricte confidentialité, conformément au RGPD. Démo — aucune donnée n&rsquo;est transmise sur ce prototype.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate mb-1.5" htmlFor={name}>
        {label}
        {required && <span className="text-electric"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-mist bg-white px-3.5 py-2.5 text-sm text-ink-800 focus:border-electric outline-none transition-colors"
      />
    </div>
  )
}
