import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Section, Kicker, CTABanner } from '@/components/ui'
import { NewsTypeBadge, NewsCard } from '@/components/Cards'
import Icon from '@/components/Icons'
import Picto from '@/components/pictos'
import ContactCTAButton from '@/components/ContactCTAButton'
import { NEWS } from '@/lib/content'

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item = NEWS.find((n) => n.slug === slug)
  if (!item) return {}
  return { title: item.title, description: item.excerpt }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = NEWS.find((n) => n.slug === slug)
  if (!item) notFound()

  const related = NEWS.filter((n) => n.slug !== item.slug).slice(0, 3)

  return (
    <>
      <section className="relative bg-paper overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="absolute inset-0 grid-backdrop-light" />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-electric/10 blur-3xl pointer-events-none" />
        <Section className="relative">
          <div className="flex items-center gap-2 text-xs text-slate-2 mb-6 flex-wrap">
            <Link href="/" className="hover:text-ink-800 transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/actualites" className="hover:text-ink-800 transition-colors">Actualités</Link>
            <span>/</span>
            <span className="text-ink-800">{item.title}</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <NewsTypeBadge type={item.type} />
            <span className="text-sm text-slate-2">{item.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight leading-[1.1] max-w-3xl text-balance text-ink-800">
            {item.title}
          </h1>
          {item.outlet && <p className="mt-5 text-slate italic">{item.outlet}</p>}
        </Section>
      </section>

      <Section className="py-16 sm:py-24">
        <div className="grid lg:grid-cols-[1fr_320px] gap-14">
          <article className="max-w-2xl">
            <p className="text-lg text-slate leading-relaxed mb-8">{item.excerpt}</p>
            {item.body ? (
              <div className="space-y-5">
                {item.body.map((p, i) => (
                  <p key={i} className="text-ink-800/85 leading-relaxed">{p}</p>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-mist bg-paper-2 p-8 text-sm text-slate">
                Contenu complet disponible sur demande — la version finale du média center intégrera l&rsquo;article,
                la vidéo ou le document dans son format d&rsquo;origine.
              </div>
            )}

            {item.type === 'livre-blanc' && (
              <div className="mt-10 rounded-2xl border border-mist bg-white p-7 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-signal/10 text-signal flex items-center justify-center shrink-0">
                  <Picto name="whitepaper" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-ink-800">Télécharger le livre blanc</p>
                  <p className="text-xs text-slate mt-1">Format PDF — accès immédiat</p>
                </div>
                <button className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-electric text-white text-sm font-semibold whitespace-nowrap hover:bg-electric-2 transition-colors">
                  <Icon name="download" className="w-4 h-4" /> PDF
                </button>
              </div>
            )}
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-mist bg-white p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-electric-2 mb-4">Partager</p>
              <div className="flex gap-2">
                <span className="w-9 h-9 rounded-full border border-mist flex items-center justify-center text-slate text-xs font-semibold">in</span>
                <span className="w-9 h-9 rounded-full border border-mist flex items-center justify-center text-slate text-xs font-semibold">X</span>
              </div>
            </div>
            <div className="rounded-2xl border border-mist bg-white p-6">
              <ContactCTAButton className="w-full" />
            </div>
          </aside>
        </div>
      </Section>

      <section className="bg-paper-2 py-16 sm:py-24">
        <Section>
          <Kicker>À lire aussi</Kicker>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {related.map((n) => (
              <NewsCard key={n.slug} n={n} />
            ))}
          </div>
        </Section>
      </section>

      <CTABanner />
    </>
  )
}
