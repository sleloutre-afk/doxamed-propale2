import type { MetadataRoute } from 'next'
import { METIERS, MODES, NEWS } from '@/lib/content'

const BASE = 'https://propale1.doxamed-refonte.fr'

const STATIC_ROUTES = [
  '',
  '/solutions',
  '/solutions/conseil-ingenierie',
  '/modes-intervention',
  '/a-propos',
  '/a-propos/gouvernance',
  '/a-propos/labels-prix',
  '/references',
  '/actualites',
  '/carrieres',
  '/contact',
  '/mentions-legales',
  '/confidentialite',
  '/cgv',
  '/cookies',
  '/plan-du-site',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    ...STATIC_ROUTES,
    ...METIERS.map((m) => `/solutions/${m.slug}`),
    ...MODES.map((m) => `/modes-intervention/${m.slug}`),
    ...NEWS.map((n) => `/actualites/${n.slug}`),
  ]

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.6,
  }))
}
