'use client'

import { useState } from 'react'
import Icon from './Icons'

const NEEDS = [
  'Bilan de prévention santé (BPS)',
  'Prévention des risques psychosociaux',
  'Campagne de dépistage ou vaccination',
  'Espace de santé / accès aux soins',
  'Conseil & ingénierie santé',
  'Autre demande',
]

const SIZES = ['Moins de 100 collaborateurs', '100 à 500 collaborateurs', '500 à 2 000 collaborateurs', 'Plus de 2 000 collaborateurs']

export default function ContactPageForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="rounded-2xl border border-mist bg-white p-10 sm:p-14 text-center animate-fade-up">
        <div className="w-14 h-14 mx-auto rounded-full bg-electric-dim flex items-center justify-center mb-5">
          <Icon name="check" className="w-6 h-6 text-electric-2" />
        </div>
        <h3 className="text-xl font-semibold text-ink-800 mb-2">Merci, votre demande est bien reçue</h3>
        <p className="text-sm text-slate max-w-sm mx-auto">
          Un expert Doxamed étudie votre besoin et vous recontacte sous 24h ouvrées.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="rounded-2xl border border-mist bg-white p-6 sm:p-9 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <F label="Prénom" name="firstname" required />
        <F label="Nom" name="lastname" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <F label="Email professionnel" name="email" type="email" required />
        <F label="Entreprise / organisation" name="company" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate mb-1.5" htmlFor="size">
            Taille de l&rsquo;entreprise
          </label>
          <select id="size" name="size" defaultValue="" className="w-full rounded-lg border border-mist bg-white px-3.5 py-2.5 text-sm text-ink-800 focus:border-electric outline-none transition-colors">
            <option value="" disabled>Sélectionner</option>
            {SIZES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate mb-1.5" htmlFor="need">
            Type de besoin
          </label>
          <select id="need" name="need" defaultValue="" className="w-full rounded-lg border border-mist bg-white px-3.5 py-2.5 text-sm text-ink-800 focus:border-electric outline-none transition-colors">
            <option value="" disabled>Sélectionner</option>
            {NEEDS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-slate mb-1.5" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Nombre de collaborateurs, sites concernés, échéance envisagée…"
          className="w-full rounded-lg border border-mist bg-white px-3.5 py-2.5 text-sm text-ink-800 placeholder:text-slate-2 focus:border-electric outline-none transition-colors resize-none"
        />
      </div>
      <button type="submit" className="w-full sm:w-auto px-8 rounded-lg bg-electric text-white text-sm font-semibold py-3.5 hover:bg-electric-2 transition-colors">
        Envoyer ma demande
      </button>
      <p className="text-[11px] text-slate-2 leading-relaxed">
        Données traitées en stricte confidentialité, conformément au RGPD. Démo — aucune donnée n&rsquo;est transmise sur ce prototype.
      </p>
    </form>
  )
}

function F({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate mb-1.5" htmlFor={name}>
        {label}{required && <span className="text-electric"> *</span>}
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
