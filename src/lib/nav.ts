export type NavChild = { label: string; href: string; blurb?: string }
export type NavItem = { label: string; href: string; children?: NavChild[] }

export const NAV: NavItem[] = [
  {
    label: 'Nos solutions',
    href: '/solutions',
    children: [
      { label: 'Bilan de prévention santé', href: '/solutions/bilan-prevention-sante', blurb: 'Checkup 360° en entreprise, 8 fonctions vitales' },
      { label: 'Risques psychosociaux', href: '/solutions/risques-psychosociaux', blurb: 'Évaluation, écoute, crise, formation managers' },
      { label: 'Dépistage & vaccination', href: '/solutions/depistage-vaccination', blurb: 'Campagnes ciblées, populations à risque' },
      { label: 'Accès aux soins', href: '/solutions/acces-aux-soins', blurb: 'Téléconsultation, soins infirmiers, prélèvements' },
      { label: 'Conseil & ingénierie santé', href: '/solutions/conseil-ingenierie', blurb: 'Conception de dispositifs sur mesure' },
    ],
  },
  {
    label: "Nos modes d'intervention",
    href: '/modes-intervention',
    children: [
      { label: 'In situ', href: '/modes-intervention/in-situ', blurb: 'Un espace santé dans vos locaux' },
      { label: 'Box', href: '/modes-intervention/box', blurb: 'Cabine médicale autonome et connectée' },
      { label: 'MobilCare', href: '/modes-intervention/mobilcare', blurb: 'Unité itinérante, +60 villes visitées' },
      { label: 'Espace de santé en gare', href: '/modes-intervention/espace-sante-en-gare', blurb: 'Partenariat exclusif SNCF Gares & Connexions' },
    ],
  },
  {
    label: 'À propos',
    href: '/a-propos',
    children: [
      { label: 'Genèse & mission', href: '/a-propos', blurb: 'Depuis 2020, une vision née en pleine crise sanitaire' },
      { label: 'Gouvernance & équipe', href: '/a-propos/gouvernance', blurb: 'Arnaud Molinié, comité stratégique, conseil scientifique' },
      { label: 'Labels & prix', href: '/a-propos/labels-prix', blurb: 'Certifications RSE, prix et distinctions' },
      { label: 'Références', href: '/references', blurb: 'Chiffres clés, clients, études de cas' },
    ],
  },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Contact', href: '/contact' },
]

export const FOOTER_LINKS = {
  solutions: NAV[0].children ?? [],
  interventions: NAV[1].children ?? [],
  entreprise: [
    { label: 'Genèse & mission', href: '/a-propos' },
    { label: 'Gouvernance & équipe', href: '/a-propos/gouvernance' },
    { label: 'Labels & prix', href: '/a-propos/labels-prix' },
    { label: 'Références', href: '/references' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Carrières', href: '/carrieres' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
    { label: 'CGV', href: '/cgv' },
    { label: 'Gestion des cookies', href: '/cookies' },
    { label: 'Plan du site', href: '/plan-du-site' },
  ],
}
