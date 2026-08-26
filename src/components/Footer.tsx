import Link from 'next/link'
import Logo from './Logo'
import { FOOTER_LINKS } from '@/lib/nav'

export default function Footer() {
  return (
    <footer className="bg-ink-800 text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          <div className="col-span-2">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-[280px]">
              La santé pour tous. Partout. Doxamed déploie des solutions de prévention, de dépistage et
              d&rsquo;accès aux soins directement sur le lieu de travail et dans les territoires.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/doxamed/about/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-electric hover:border-electric transition-colors"
                aria-label="LinkedIn Doxamed"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.97V21h-4V9Z"/></svg>
              </a>
            </div>
          </div>

          <FooterCol title="Solutions" links={FOOTER_LINKS.solutions} />
          <FooterCol title="Modes d'intervention" links={FOOTER_LINKS.interventions} />
          <FooterCol title="Entreprise" links={FOOTER_LINKS.entreprise} />

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/40 mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>contact@doxamed.com</li>
              <li>Paris, France</li>
              <li className="pt-1">
                <Link href="/contact" className="text-electric font-medium hover:text-electric-light transition-colors">
                  Formulaire de contact →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Doxamed — Capitello Group. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/40 mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-white/70 hover:text-electric transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
