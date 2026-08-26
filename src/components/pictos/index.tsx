import PictoSanteMentale from './PictoSanteMentale'
import PictoVisuel from './PictoVisuel'
import PictoAuditif from './PictoAuditif'
import PictoDentaire from './PictoDentaire'
import PictoVaccination from './PictoVaccination'
import PictoCardio from './PictoCardio'
import PictoRespiratoire from './PictoRespiratoire'
import PictoMetabolique from './PictoMetabolique'
import PictoDermato from './PictoDermato'
import PictoPostural from './PictoPostural'
import PictoInSitu from './PictoInSitu'
import PictoBox from './PictoBox'
import PictoGare from './PictoGare'
import PictoMobilcare from './PictoMobilcare'
import PictoMedias from './PictoMedias'
import PictoSocial from './PictoSocial'
import PictoWhitepaper from './PictoWhitepaper'
import PictoArticles from './PictoArticles'
import PictoInfirmiere from './PictoInfirmiere'
import PictoOperateur from './PictoOperateur'
import PictoTeleconsultation from './PictoTeleconsultation'
import PictoIA from './PictoIA'

/** Registry keyed by the same `key` used in BPS_EXAMS (src/lib/content.ts),
 *  the four modes d'intervention slugs, the four actualités/media types
 *  (src/lib/content.ts NewsItem['type']), and the dispositif humain roles
 *  (infirmière, opérateur, téléconsultation, IA). */
export const PICTOS = {
  'sante-mentale': PictoSanteMentale,
  visuel: PictoVisuel,
  auditif: PictoAuditif,
  dentaire: PictoDentaire,
  vaccination: PictoVaccination,
  cardio: PictoCardio,
  respi: PictoRespiratoire,
  metabolique: PictoMetabolique,
  dermato: PictoDermato,
  postural: PictoPostural,
  'in-situ': PictoInSitu,
  box: PictoBox,
  gare: PictoGare,
  mobilcare: PictoMobilcare,
  medias: PictoMedias,
  social: PictoSocial,
  whitepaper: PictoWhitepaper,
  articles: PictoArticles,
  infirmiere: PictoInfirmiere,
  operateur: PictoOperateur,
  teleconsultation: PictoTeleconsultation,
  ia: PictoIA,
} as const

export type PictoKey = keyof typeof PICTOS

/** Renders the official picto for a BPS exam key, colorable via currentColor. */
export default function Picto({ name, className = 'w-5 h-5' }: { name: PictoKey; className?: string }) {
  const Component = PICTOS[name]
  return <Component className={className} />
}
