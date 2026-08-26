import type { Metadata } from 'next'
import { PageHero, Section, Kicker, StatStrip, CTABanner } from '@/components/ui'
import ContactCTAButton from '@/components/ContactCTAButton'
import Picto from '@/components/pictos'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'MobilCare — unité de santé itinérante',
  description: "Des véhicules équipés qui vont à la rencontre des populations, ville après ville, depuis 2020.",
}

export default function MobilCarePage() {
  return (
    <>
      <PageHero
        kicker="Mode d'intervention"
        title={<>MobilCare : la santé <span className="text-electric-2">qui vient à vous</span>, ville après ville.</>}
        lead="Le dispositif historique de Doxamed, né en 2020 pour aller au plus près des publics éloignés du soin."
        crumb={[{ label: "Nos modes d'intervention", href: '/modes-intervention' }, { label: 'MobilCare', href: '/modes-intervention/mobilcare' }]}
        image="/photos/mobilcar.png"
      />

      <Section className="py-16 sm:py-20 -mt-8 sm:-mt-14 relative">
        <StatStrip
          stats={[
            { value: '+60', label: 'villes visitées' },
            { value: '1M', label: 'tests Covid réalisés' },
            { value: '2020', label: 'première unité mobile' },
          ]}
        />
      </Section>

      <Section className="py-20 sm:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <Reveal from="left">
            <Kicker>Comment ça fonctionne</Kicker>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-800 mb-6 text-balance">
              Des camping-cars aménagés en unité médicale mobile.
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              Une infirmière diplômée d&rsquo;État est présente à bord et suit les directives d&rsquo;un médecin à
              distance. Le véhicule embarque le matériel médical connecté nécessaire à la campagne — dépistage,
              vaccination ou bilan de prévention — et se déplace de site en site.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              C&rsquo;est avec cette première unité mobile, déployée en avril 2020 au Foyer de la Commanderie à
              Paris pour le dépistage Covid et des maladies chroniques auprès des travailleurs migrants, que
              l&rsquo;aventure Doxamed (alors Loxamed) a commencé.
            </p>
            <ContactCTAButton label="Programmer une tournée MobilCare" />
          </Reveal>
          <Reveal from="right" delay={100}>
            <div className="rounded-2xl border border-mist bg-white p-7 sm:p-8">
              <div className="w-11 h-11 rounded-full bg-electric-dim text-electric-2 flex items-center justify-center mb-5">
                <Picto name="mobilcare" className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate leading-relaxed">
                Déployé à travers la France : Marseille, Nice, Montpellier, Strasbourg, Bordeaux, Rennes… et
                jusqu&rsquo;à 2 000 tests par jour lors des campagnes menées avec Disneyland Paris.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABanner />
    </>
  )
}
