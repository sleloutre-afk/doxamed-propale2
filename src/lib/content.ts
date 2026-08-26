// Central content store for the Doxamed Propale 1 prototype.
// Sourced from the client brief, the 2026-06 company deck and the 2026-02 CDC.
// All figures are the ones supplied by Doxamed — keep verbatim when the real
// editorial pass happens.

export type Metier = {
  slug: string
  number: string
  name: string
  short: string
  pitch: string
  color: 'electric' | 'ink'
  icon: string
  stats: { value: string; label: string }[]
  bullets: string[]
}

export const METIERS: Metier[] = [
  {
    slug: 'bilan-prevention-sante',
    number: '01',
    name: 'Bilan de prévention santé',
    short: 'BPS',
    pitch: "Un checkup 360° pour chaque collaborateur : 8 fonctions vitales explorées en 2h30, sur site, sans rupture d'activité.",
    color: 'electric',
    icon: 'pulse',
    stats: [
      { value: '1 000+', label: 'bilans réalisés en 8 mois' },
      { value: '98%', label: 'de satisfaction usagers' },
      { value: '2h30', label: 'de parcours, clé en main' },
    ],
    bullets: ['Couverture médicale large', 'Parcours en entreprise', 'Téléconsultation intégrée'],
  },
  {
    slug: 'risques-psychosociaux',
    number: '02',
    name: 'Risques psychosociaux',
    short: 'RPS',
    pitch: "Évaluer, écouter, intervenir : un dispositif en 4 modules pour protéger la santé mentale de vos équipes.",
    color: 'ink',
    icon: 'brain',
    stats: [
      { value: '<24h', label: "accès à un psychologue" },
      { value: '<48h', label: 'intervention de crise sur site' },
      { value: '4', label: 'modules complémentaires' },
    ],
    bullets: ['Plateforme d’évaluation RPS', "Ligne d'écoute (psy 24h)", 'Formation des managers'],
  },
  {
    slug: 'depistage-vaccination',
    number: '03',
    name: 'Dépistage & vaccination',
    short: 'Campagnes',
    pitch: "Des campagnes ciblées — TMS, cardiovasculaire, vue, audition — et la vaccination des populations à risque, chaque hiver.",
    color: 'electric',
    icon: 'target',
    stats: [
      { value: '600', label: 'vaccins — Doctolib, déc. 2025' },
      { value: '865+', label: 'consultations ORL — Air France' },
      { value: '1M', label: 'tests de dépistage réalisés' },
    ],
    bullets: ['Dépistages thématiques', 'Vaccination Covid, grippe…', 'Adapté aux populations à risque'],
  },
  {
    slug: 'acces-aux-soins',
    number: '04',
    name: 'Accès aux soins',
    short: 'Espaces de santé',
    pitch: "Des espaces de santé déployables partout : téléconsultation, soins infirmiers, vaccination, prélèvements.",
    color: 'ink',
    icon: 'pin',
    stats: [
      { value: '35', label: 'gares SNCF équipées' },
      { value: '+10 000', label: 'personnes suivies en téléconsultation' },
      { value: '+60', label: 'villes visitées' },
    ],
    bullets: ['Téléconsultation & téléexpertise', 'Soins infirmiers', 'Prélèvements biologiques'],
  },
]

export const CONSEIL_INGENIERIE = {
  name: 'Conseil & ingénierie santé',
  pitch:
    "Doxamed accompagne la conception et le déploiement de dispositifs et d'événements santé sur mesure : cadrage médical, choix du mode d'intervention, mobilisation des équipes, pilotage terrain.",
}

export type Mode = {
  slug: string
  name: string
  short: string
  pitch: string
  detail: string
  stat?: { value: string; label: string }
}

export const MODES: Mode[] = [
  {
    slug: 'in-situ',
    name: 'In situ',
    short: 'Dans vos locaux',
    pitch: "Un espace santé installé directement dans un lieu mis à disposition par l'entreprise.",
    detail:
      "Le dispositif le plus déployé par Doxamed : bureau, salle de réunion ou espace dédié transformé le temps d'une campagne en véritable cabinet de prévention. Chef d'opération, IDE et matériel connecté sont installés sur site ; le médecin intervient à distance.",
  },
  {
    slug: 'box',
    name: 'Box',
    short: 'Cabine autonome',
    pitch: 'Une cabine médicale connectée, autonome, pour un accès aux soins rapide en flux tendu.',
    detail:
      "Compacte et installable en quelques heures dans un hall, un accueil ou un espace public, la Box embarque les dispositifs connectés nécessaires à un dépistage ou une téléconsultation assistée, sans nécessiter d'aménagement lourd.",
  },
  {
    slug: 'mobilcare',
    name: 'MobilCare',
    short: 'Unité itinérante',
    pitch: 'Des véhicules équipés qui vont à la rencontre des populations, ville après ville.',
    detail:
      "Camping-cars aménagés en unité médicale mobile : une infirmière diplômée d'État est présente à bord et suit les directives d'un médecin à distance. Le dispositif historique de Doxamed, né en 2020 pour aller au plus près des publics éloignés du soin.",
    stat: { value: '+60', label: 'villes visitées' },
  },
  {
    slug: 'espace-sante-en-gare',
    name: 'Espace de santé en gare',
    short: 'Partenariat SNCF',
    pitch: 'Des espaces de santé permanents en gare, au cœur des déserts médicaux.',
    detail:
      "Exclusivité remportée fin 2023 auprès de SNCF Gares & Connexions : téléconsultation, soins infirmiers, vaccination et prélèvements biologiques sont proposés sur rendez-vous, en lien avec les projets médicaux de territoire (ARS, URPS, CPTS, MSP).",
    stat: { value: '35', label: 'gares équipées' },
  },
]

// Positions are percentages (x, y) over the /body/bdy2.png portrait, used to
// place each marker on the interactive body map. `key` matches the PICTOS
// registry in src/components/pictos/index.tsx (the real client-supplied
// icons, embedded as components).
export const BPS_EXAMS = [
  { key: 'sante-mentale', label: 'Santé mentale', detail: 'Évaluation de la santé mentale et du bien-être au travail', x: 50, y: 6 },
  { key: 'visuel', label: 'Visuel', detail: 'Bilan ophtalmologique', x: 44, y: 10 },
  { key: 'auditif', label: 'Auditif', detail: 'Bilan audio ORL', x: 59, y: 12 },
  { key: 'dentaire', label: 'Dentaire', detail: 'Bilan dentaire', x: 50, y: 15 },
  { key: 'vaccination', label: 'Vaccination', detail: 'Campagne de vaccination contre les maladies communes : Covid, grippe…', x: 76, y: 28 },
  { key: 'cardio', label: 'Cardio', detail: 'Constantes cardiologiques, tension, âge artériel, ECG', x: 55, y: 27 },
  { key: 'respi', label: 'Respiratoire', detail: 'Bilan spirométrique', x: 45, y: 25 },
  { key: 'metabolique', label: 'Métabolique', detail: 'Analyses sanguines et urinaires complètes', x: 50, y: 42 },
  { key: 'dermato', label: 'Dermatologique', detail: 'Dépistage dermatologique', x: 20, y: 48 },
  { key: 'postural', label: 'Postural', detail: 'Posturométrie, troubles musculo-squelettiques, impédancemétrie', x: 50, y: 68 },
] as const

export const PARCOURS_PATIENT = [
  {
    phase: 'Avant',
    duration: '',
    title: 'Questionnaire médical',
    detail: 'Le collaborateur renseigne un questionnaire médical en amont de son rendez-vous.',
  },
  {
    phase: 'Sur site',
    duration: '1h30',
    title: 'Bilan clinique général',
    detail: 'Prise de constantes, impédancemétrie, prélèvements biologiques, réalisation de l’ensemble des examens.',
  },
  {
    phase: 'Sur site',
    duration: '30’',
    title: '1ère téléconsultation',
    detail: "Examen clinique et prescriptions d'examens complémentaires éventuels, avec un médecin à distance.",
  },
  {
    phase: 'À distance',
    duration: 'sous 15j',
    title: 'Examens complémentaires',
    detail: 'Le patient réalise, si nécessaire, ses examens complémentaires prescrits.',
  },
  {
    phase: 'À distance',
    duration: '30’',
    title: '2de téléconsultation',
    detail: 'Explication des résultats, plan de prévention individuel, recommandations et prescriptions.',
  },
  {
    phase: 'Après',
    duration: '',
    title: 'Questionnaire de satisfaction',
    detail: 'Un retour est systématiquement recueilli auprès de chaque collaborateur.',
  },
]

export type ClientRef = {
  name: string
  category: string
  since: string
  detail: string
  metric: { value: string; label: string }
  /** Optional real logo (e.g. "/brand/references/adp.png") — falls back to the company name as text. */
  logo?: string
}

export const CLIENT_REFS: ClientRef[] = [
  {
    name: 'Groupe ADP',
    category: 'Bilans de prévention santé',
    since: 'Depuis 2025',
    detail: 'Contrat de 6 ans — centres de bilan de prévention santé à Charles de Gaulle et Orly.',
    metric: { value: '1 008', label: 'personnes / an' },
    logo: '/brand/references/adp.png',
  },
  {
    name: 'bpifrance',
    category: 'Bilans de prévention santé',
    since: 'Depuis janvier 2026',
    detail: "Contrat de 5 ans. 1ère ouverture : 528 inscrits en 40 minutes, 100% des créneaux réservés.",
    metric: { value: '~850', label: 'personnes / an' },
    logo: '/brand/references/bpifrance.png',
  },
  {
    name: 'Deloitte',
    category: 'Bilans de prévention santé',
    since: 'Fin janvier 2026',
    detail: "Contrat de 3 ans. 1ère ouverture : 80% de réservation en 3 heures.",
    metric: { value: '300', label: 'personnes / an' },
    logo: '/brand/references/deloitte.png',
  },
  {
    name: 'Air France',
    category: 'Dépistage',
    since: 'Depuis 2021',
    detail: 'Dispositif ORL tech pour le personnel navigant.',
    metric: { value: '+865', label: 'consultations' },
    logo: '/brand/clients/airfrance.png',
  },
  {
    name: 'Estée Lauder',
    category: 'Vaccination',
    since: 'Novembre 2025',
    detail: 'Campagne de vaccination sur site.',
    metric: { value: '100', label: 'vaccins' },
    logo: '/brand/clients/esteelauder.png',
  },
  {
    name: 'Doctolib',
    category: 'Vaccination',
    since: 'Décembre 2025',
    detail: 'Campagne de vaccination grippe / Covid.',
    metric: { value: '600', label: 'vaccins' },
    logo: '/brand/clients/doctolib.svg',
  },
  {
    name: 'Euronext',
    category: 'Conférence',
    since: 'Décembre 2025',
    detail: 'Conférence de sensibilisation aux addictions.',
    metric: { value: '100', label: 'personnes' },
    logo: '/brand/clients/euronext.png',
  },
]

export const CLIENT_LOGOS = [
  'Groupe ADP', 'bpifrance', 'Deloitte', 'Air France', 'Renault', 'Dassault Systèmes',
  'Accor Arena', 'Bouygues', 'Orange', 'AXA', 'Eiffage Construction', 'Thales',
  'Euronext', 'Keyrus', 'wifirst', 'Doctolib', 'Disneyland Paris', 'Estée Lauder',
  'SNCF Gares & Connexions', 'Futuroscope', 'Olympique Lyonnais', 'Eurofins', 'ANR', 'Colisée',
]

/** Real logo files for a subset of CLIENT_LOGOS — the rest fall back to text. */
export const CLIENT_LOGO_IMAGES: Partial<Record<string, string>> = {
  'Groupe ADP': '/brand/clients/adp.png',
  bpifrance: '/brand/clients/bpifrance.png',
  Deloitte: '/brand/clients/deloitte.svg',
  'Air France': '/brand/clients/airfrance.png',
  Renault: '/brand/clients/renault.png',
  'Dassault Systèmes': '/brand/clients/dassault.png',
  'Accor Arena': '/brand/clients/AccorArena.png',
  Bouygues: '/brand/clients/bouygues.png',
  Orange: '/brand/clients/orange.svg.webp',
  AXA: '/brand/clients/axa.png',
  Thales: '/brand/clients/thales.png',
  Euronext: '/brand/clients/euronext.png',
  Keyrus: '/brand/clients/keyrus.png',
  'Disneyland Paris': '/brand/clients/disneyland.png',
  'Estée Lauder': '/brand/clients/esteelauder.png',
  'SNCF Gares & Connexions': '/brand/clients/sncf.png',
  'Eiffage Construction': '/brand/clients/eiffage.png',
  Doctolib: '/brand/clients/doctolib.svg',
  Futuroscope: '/brand/clients/futuroscope.png',
  'Olympique Lyonnais': '/brand/clients/olympique-lyonnais.svg',
  ANR: '/brand/clients/anr.svg.webp',
  Eurofins: '/brand/clients/eurofins.png',
  wifirst: '/brand/clients/wifirst.png',
  Colisée: '/brand/clients/colisee.png',
}

export const GLOBAL_STATS = [
  { value: '+10 000', label: 'personnes examinées en téléconsultation' },
  { value: '1M', label: 'tests Covid réalisés' },
  { value: '+60', label: 'villes visitées par nos unités itinérantes' },
  { value: '35', label: 'gares SNCF équipées' },
  { value: '±3 000', label: 'vols sécurisés (Air France)' },
  { value: '2K/jour', label: 'tests réalisés au pic — Disneyland Paris' },
]

export const HISTORY = [
  {
    year: '2020',
    title: 'Une vision née en pleine crise sanitaire',
    detail:
      "1re unité mobile au Foyer de la Commanderie (travailleurs migrants), Paris 19e — dépistage Covid et maladies chroniques. Fondation de Loxamed.",
  },
  {
    year: '2020 – 2022',
    title: 'Déploiement national dépistage & vaccination',
    detail:
      "Centres de dépistage et vaccination Covid partout en France : Disneyland Paris (jusqu'à 2 000 tests/jour), Air France (RT-PCR en moins d'1h), concert test Accor Arena, 35 gares SNCF, Marseille, Nice, Montpellier, Strasbourg, Bordeaux, Rennes…",
  },
  {
    year: '2022 – 2024',
    title: 'De la crise à la transformation durable',
    detail:
      "Télémédecine assistée d'un infirmier diplômé d'État, campagnes de dépistage cardiovasculaire, conception du « Health car » U1st Vision avec Software République, salles de téléconsultation en Normandie, exclusivité des espaces de santé en gare avec SNCF Gares & Connexions.",
  },
  {
    year: '2025 – 2026',
    title: 'Doxamed, expert de la prévention santé en entreprise',
    detail:
      "Rebranding Loxamed → Doxamed. Déploiement des centres de bilan de prévention santé (ADP, bpifrance, Deloitte), lancement de l'offre santé mentale / RPS, acquisition de Teledok par Capitello Group.",
  },
]

export const ARNAUD = {
  name: 'Arnaud Molinié',
  role: 'Fondateur et président de Doxamed et Capitello Group',
  quote:
    "La santé et la prévention que nous apportons au cœur des entreprises et des territoires sont des solutions immédiates pour lutter contre les déserts médicaux.",
  bio: [
    "Ayant siégé au comité exécutif de deux groupes du CAC 40 et d'un Big Four, Arnaud Molinié s'appuie sur des réseaux puissants et une expérience de déploiement industriel de solutions innovantes.",
    "Il est par ailleurs magistrat au Tribunal de commerce de Bobigny, administrateur de l'URSSAF Île-de-France et président du conseil d'administration du Fonds pour Paris.",
  ],
  press: [
    { outlet: 'Les Echos', title: 'Arnaud Molinié, l’homme de faire', date: 'Septembre 2022' },
    { outlet: 'La Tribune', title: 'La santé mobile qui vient au cœur de l’entreprise va être cruciale pour réussir le déconfinement', date: '2020' },
  ],
  timeline: [
    { period: '2024 – 2025', role: 'Président', org: 'Doxamed · Teledok' },
    { period: '2020 – 2024', role: 'Président', org: 'Loxamed' },
    { period: '2019 – 2020', role: 'SVP Mobilités mondiales', org: 'Renault Nissan' },
    { period: '2011 – 2019', role: 'Partner & EVP, New Mobilities', org: 'Deloitte' },
    { period: '2000 – 2011', role: 'EVP Stratégie & Développement, PDG branche Entertainment', org: 'Lagardère' },
    { period: '1998 – 2000', role: 'SVP Communications', org: 'Génopole' },
    { period: '1987 – 2001', role: 'Administrateur et trésorier adjoint', org: 'Genethon / AFM Téléthon' },
  ],
}

export const ADP_QUOTE = {
  quote:
    'Pour mieux prendre soin de la santé de leurs collaborateurs… Avec Doxamed, ce futur est déjà en marche.',
  author: 'Augustin de Romanet',
  role: 'p-dg du Groupe ADP',
  source: 'Les Echos, 4 février 2025',
}

export const COMITE_STRATEGIQUE = [
  {
    name: 'Arnaud Molinié',
    role: 'Fondateur et président de Doxamed et Capitello Group',
    photo: '/photos/arnaud2.png',
    linkedin: 'https://www.linkedin.com/in/arnaud-molini%C3%A9-loxamed/',
  },
  {
    name: 'Matthieu Guillotin',
    role: 'Directeur général de Doxamed',
    photo: '/photos/comite/guillotin.png',
    linkedin: 'https://www.linkedin.com/in/matthieu-guillotin-5755924/',
  },
  {
    name: 'Dr Philippe Douste-Blazy',
    role: 'Ancien Ministre des Affaires étrangères, des Solidarités et de la Santé, de la Culture',
    photo: '/photos/comite/douste.png',
    linkedin: 'https://www.linkedin.com/in/philippedousteblazy/',
  },
  {
    name: 'Jean-Louis Ségura',
    role: 'Fondateur et ancien directeur général de l’Agefiph, ancien DG de l’ARH de Bourgogne',
    photo: '/photos/comite/segura.png',
  },
  {
    name: 'Philippe Buros',
    role: 'Directeur général de Capitello Move, ancien SVP Commerce Europe — Renault Group',
    photo: '/photos/comite/buros.png',
    linkedin: 'https://www.linkedin.com/in/philippe-buros-047145107/',
  },
  {
    name: 'Philippe Buhl',
    role: 'Ancien directeur général du groupe Cerba Healthcare',
    photo: '/photos/comite/buhl.png',
    linkedin: 'https://www.linkedin.com/in/philippe-buhl-2a1bb24/',
  },
  {
    name: 'Joël Stumm',
    role: 'Ancien directeur général chez Almaviva et chez Clininvest',
    linkedin: 'https://www.linkedin.com/in/joel-stumm-a5698327b/',
  },
  { name: 'Marine Molinié', role: 'Capitello Group holding' },
]

export const CONSEIL_SCIENTIFIQUE = [
  {
    name: 'Jean-Louis Ségura',
    role: 'Président du conseil scientifique',
    detail: "Fondateur et ancien DG de l’Agefiph, ancien DG de l’ARH de Bourgogne, directeur de projet de l’Oncopole de Toulouse, inspecteur général honoraire.",
    photo: '/photos/comite/segura.png',
  },
  {
    name: 'Dr François Dolveck',
    role: 'Médecin urgentiste',
    detail: 'Directeur du SAMU de Seine-et-Marne, chef de service SAMU77 / urgences / SMUR — groupement hospitalier Sud Ile-de-France.',
    photo: '/photos/comite/dolveck.png',
    linkedin: 'https://www.linkedin.com/in/fran%C3%A7ois-dolveck-925585171/',
  },
  {
    name: 'Pr Claude Jeandel',
    role: 'PU médecine interne & gériatrie',
    detail: 'Ancien président du CNP de gériatrie, auteur de rapports de référence sur le vieillissement.',
    photo: '/photos/comite/jeandel.png',
    linkedin: 'https://www.linkedin.com/in/claude-jeandel-813b1862/',
  },
  {
    name: 'Dr Catherine Fac',
    role: 'Ancienne praticienne hospitalière',
    detail: 'Responsable de l’unité sanitaire du Centre pénitentiaire de Fresnes.',
    photo: '/photos/comite/fac.png',
    linkedin: 'https://www.linkedin.com/in/catherine-fac-7082016a/',
  },
  {
    name: 'Olivier Boyer',
    role: 'Haut fonctionnaire',
    detail: 'Directeur général du CHU Orléans.',
    photo: '/photos/comite/boyer.png',
    linkedin: 'https://www.linkedin.com/in/olivier-boyer-346ab8175/',
  },
  {
    name: 'Pr Pierre Fumoleau',
    role: 'PU oncologie médicale',
    detail: 'Ancien DG de l’Institut Curie, directeur scientifique du Cancéropôle Grand Est.',
    photo: '/photos/comite/fumoleau.png',
    linkedin: 'https://www.linkedin.com/in/pierre-fumoleau-31976441/',
  },
  {
    name: 'Dr Stéphane Illouz',
    role: 'Urgentiste, médecin généraliste',
    detail: 'Coordinateur MSP — co-fondateur de Teledok.',
    photo: '/photos/comite/illouz.png',
    linkedin: 'https://www.linkedin.com/in/stephane-illouz-0b3413270/',
  },
  {
    name: 'Dr François Teboul',
    role: 'Urgentiste, médecin généraliste',
    detail: 'Coordinateur MSP et bureau CPTS, président du groupe Téléconsultation de l’Académie Francophone de Télémédecine — co-fondateur de Teledok.',
    photo: '/photos/comite/teboul.png',
    linkedin: 'https://www.linkedin.com/in/francois-teboul-b03a9599/',
  },
]

export const TELEDOK = {
  founded: '2018',
  founders: 'Dr François Teboul et Dr Stéphane Illouz',
  acquired: 'Filiale à 100 % de Capitello Group, la maison-mère de Doxamed, depuis fin 2025',
  pitch:
    "Précurseur des plateformes de médecins dédiées à la téléconsultation, Teledok met à disposition ses praticiens auprès des opérateurs de télémédecine.",
  stat: { value: '+100', label: 'professionnels de santé engagés' },
  axes: [
    { name: 'Téléconsultation', detail: 'Médecine générale et spécialisée, avec ou sans rendez-vous.' },
    { name: 'Évaluation', detail: 'R&D en épidémiologie, analyse des usages, évaluation des pratiques professionnelles (EPP).' },
    { name: 'Case Report', detail: 'Rédaction de rapports cliniques, recommandation, formation, simulation et tutorat.' },
  ],
}

export const GROUPE = [
  { name: 'Capitello Move', role: 'Mobilité' },
  { name: 'Doxamed', role: 'Santé Innovation' },
  { name: 'Teledok', role: 'Plateforme de médecins' },
]

export const LABELS = [
  { name: 'EcoVadis Bronze', detail: 'Top 35% — engagement RSE, environnemental et éthique (nov. 2025)' },
  { name: 'Bpifrance — Entreprise Innovante', detail: 'Reconnaissance de la capacité à concevoir des solutions qui transforment la santé.' },
]

export const AWARDS = [
  { name: 'Médaille d’or — Projet RH d’envergure', org: 'Républik RH', year: '2025', project: 'Centre de bilan prévention santé — Groupe ADP' },
  { name: 'Trophée Or — Bilan et prévention santé', org: 'Groupe RH&M', year: '2025', project: 'Centre de bilan prévention santé — Groupe ADP' },
  { name: 'Grand Prix Argent — Innovation', org: 'Auto Moto 2024', year: '2024', project: '« U1st Vision » — Health car' },
  { name: 'Trophée de l’Innovation — Transformation', org: 'Renault Frères', year: '2024', project: '« U1st Vision » — Health car' },
  { name: 'Prix de l’Innovation territoriale', org: 'Salon des maires', year: '2022', project: 'Téléconsultation assistée — Normandie' },
]

export type NewsItem = {
  slug: string
  type: 'article' | 'presse' | 'reseaux' | 'livre-blanc'
  title: string
  excerpt: string
  date: string
  outlet?: string
  body?: string[]
}

export const NEWS: NewsItem[] = [
  {
    slug: 'sauvee-par-une-infirmiere-en-gare-epinay-sur-orge',
    type: 'presse',
    title: 'Sauvé par une infirmière grâce à la téléconsultation en gare',
    excerpt:
      "À Épinay-sur-Orge, un homme de 69 ans souffrant d'une pneumonie non diagnostiquée a été secouru par l'infirmière Corinne Mossard, en poste dans l'espace de santé de la gare SNCF.",
    date: '17 mai 2025',
    outlet: 'Le Parisien — Julien Lec’hvien',
    body: [
      "Depuis février 2023, un premier espace de télémédecine expérimental a ouvert en gare d'Épinay-sur-Orge (Essonne). Lauréat de l'appel d'offres de SNCF Gares & Connexions, ce centre de santé porté par Doxamed permet de déployer des centres plus larges d'ici 2028.",
      "Le centre, animé par l'infirmière Corinne Mossard, reçoit des patients isolés ou en difficulté d'accès aux soins. Une consultation avec la caméra pour voir et se faire ausculter à distance, une infirmière au contact du patient : c'est le principe du dispositif.",
      "L'histoire a été reprise par France 2, ici, BFM TV et RTS, qui soulignent comment la télémédecine tente de pallier le manque de médecins généralistes en France.",
    ],
  },
  {
    slug: 'centre-prevention-sante-groupe-adp',
    type: 'article',
    title: 'Groupe ADP : un centre de bilan de prévention santé pour tous les collaborateurs',
    excerpt:
      "Doxamed déploie deux centres de bilan de prévention santé, à Charles de Gaulle et à Orly, pour l'ensemble des collaborateurs du Groupe ADP.",
    date: '4 février 2025',
    outlet: 'Les Echos',
    body: [
      "« Pour mieux prendre soin de la santé de leurs collaborateurs, […] avec Doxamed, ce futur est déjà en marche », déclare Augustin de Romanet, p-dg du Groupe ADP.",
      "Premiers résultats : 1 000 bilans réalisés en 8 mois, 98% de satisfaction usagers, et 250 inscrits dès les 3 premières heures d'ouverture des créneaux.",
      "Le dispositif a depuis été récompensé par la Médaille d'or du Projet RH d'envergure (Républik RH) et le Trophée Or « Bilan et prévention santé » (Groupe RH&M).",
    ],
  },
  {
    slug: 'charte-sante-mentale-emploi',
    type: 'article',
    title: 'Santé mentale au travail : Doxamed déploie son offre RPS',
    excerpt:
      "Portée par la première charte « Santé mentale et emploi » lancée en août 2025, Doxamed structure une offre en quatre modules dédiée à la prévention des risques psychosociaux.",
    date: 'Septembre 2025',
    body: [
      "La santé mentale a été désignée « grande cause nationale » 2025. Dans ce contexte, Doxamed propose une plateforme d'évaluation RPS, une ligne d'écoute avec accès à un psychologue sous 24h, une intervention de crise sous 48h et des formations managers.",
    ],
  },
  {
    slug: 'campagne-vaccination-hiver-2025',
    type: 'reseaux',
    title: 'Retour sur les campagnes de vaccination hiver 2025',
    excerpt: 'Doctolib (600 vaccins), Estée Lauder (100 vaccins) : Doxamed accompagne les entreprises avant la saison hivernale.',
    date: 'Décembre 2025',
  },
  {
    slug: 'livre-blanc-prevention-entreprise',
    type: 'livre-blanc',
    title: 'Livre blanc — La prévention santé, nouvel enjeu stratégique RH',
    excerpt:
      "Pourquoi la prévention santé et l'accès aux soins deviennent des leviers de performance durable pour les entreprises. Chiffres clés, retours d'expérience et méthodologie du bilan de prévention santé.",
    date: '2026',
  },
  {
    slug: 'teledok-rejoint-capitello-group',
    type: 'article',
    title: 'Teledok rejoint Capitello Group',
    excerpt:
      "Précurseur des plateformes de téléconsultation depuis 2018, Teledok est acquis par Capitello Group fin 2025 et devient partenaire stratégique de Doxamed.",
    date: 'Décembre 2025',
  },
]

export const PRESS_OUTLETS = ['France 2', 'BFM TV', 'RTS', 'Le Parisien', 'Les Echos', 'La Tribune', 'Le Quotidien du Médecin']

export const PILLARS = [
  {
    name: 'Santé',
    detail: "Une couverture médicale exigeante, conforme aux référentiels, pilotée par un conseil scientifique de médecins et de chercheurs reconnus.",
  },
  {
    name: 'Humain',
    detail: "Une infirmière diplômée d'État présente à chaque étape, un médecin joignable à distance : la technologie au service du lien de soin.",
  },
  {
    name: 'Innovation',
    detail: "Dispositifs connectés, IA & data analytics, véhicules autonomes : Doxamed anticipe la transformation structurelle de la santé.",
  },
]
