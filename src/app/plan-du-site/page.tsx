import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Section } from '@/components/ui'
import { NAV, FOOTER_LINKS } from '@/lib/nav'

export const metadata: Metadata = { title: 'Plan du site' }

export default function PlanDuSitePage() {
  return (
    <>
      <PageHero kicker="Navigation" title="Plan du site" crumb={[{ label: 'Plan du site', href: '/plan-du-site' }]} />
      <Section className="py-16 sm:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {NAV.map((item) => (
            <div key={item.href}>
              <Link href={item.href} className="font-semibold text-ink-800 hover:text-electric-2 transition-colors">
                {item.label}
              </Link>
              {item.children && (
                <ul className="mt-3 space-y-2">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="text-sm text-slate hover:text-electric-2 transition-colors">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div>
            <p className="font-semibold text-ink-800">Informations légales</p>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate hover:text-electric-2 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/carrieres" className="text-sm text-slate hover:text-electric-2 transition-colors">
                  Carrières
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
