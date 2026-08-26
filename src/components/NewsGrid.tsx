'use client'

import { useState } from 'react'
import { NewsCard } from './Cards'
import Reveal from './Reveal'
import type { NewsItem } from '@/lib/content'

const FILTERS: { key: NewsItem['type'] | 'all'; label: string }[] = [
  { key: 'all', label: 'Tout' },
  { key: 'article', label: 'Articles' },
  { key: 'presse', label: 'Dans les médias' },
  { key: 'reseaux', label: 'Réseaux sociaux' },
  { key: 'livre-blanc', label: 'Livres blancs' },
]

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  const [filter, setFilter] = useState<NewsItem['type'] | 'all'>('all')
  const filtered = filter === 'all' ? items : items.filter((n) => n.type === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              filter === f.key ? 'bg-electric border-electric text-white' : 'border-mist text-slate hover:border-electric hover:text-electric-2'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-slate text-sm">Aucun contenu pour ce filtre.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((n, i) => (
            <Reveal key={n.slug} delay={(i % 3) * 80}>
              <NewsCard n={n} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
