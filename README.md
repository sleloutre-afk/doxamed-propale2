# Doxamed — Propale 1 « Clinique Data-Driven »

Prototype de refonte du site institutionnel Doxamed, réalisé avec Next.js 15 / React 19 /
Tailwind CSS v4. Site multi-pages complet (30 routes) construit à partir du brief, du cahier
des charges (2026-02) et du deck de présentation (2026-06).

## Lancer le site

```bash
npm install
npm run dev
```

Le site tourne sur **http://localhost:3081**.

Build de production (vérifie qu'il n'y a aucune erreur) :

```bash
npm run build
```

## Direction créative

**Clinique Data-Driven** : fond encre profond (#060d18) + bleu électrique du logo (#00a9e0),
grille technique en filigrane, chiffres en police monospace (tabular numerals), diagrammes
interactifs sur-mesure (silhouette corps cliquable, stepper de parcours patient). Le parti
pris est d'éviter le style « bento cards blanc/cyan » très générique du site concurrent
(doxamed-landing.vercel.app) pour affirmer un positionnement MedTech sérieux, technique et
data-driven, tout en gardant la dimension humaine (portraits d'équipe, citations, storytelling).

## Ce qui est réel vs. placeholder

- **Textes** : rédigés à partir du brief, du CDC et du deck (chiffres, clients, citations,
  bios, historique) — à faire relire/valider par Doxamed avant mise en ligne.
- **Logo** : recréation vectorielle approchante (voir `src/components/Logo.tsx`) à partir du
  rendu PDF fourni. À remplacer par le fichier vectoriel officiel dès réception.
- **Photos** : aucune image n'a été intégrée (voir la liste de tournage transmise à part).
  Les emplacements image sont actuellement des blocs graphiques (grille, silhouette, icônes).
- **Formulaire de contact** (bouton flottant + page /contact) : fonctionne en démonstration
  (aucune donnée n'est envoyée). Prêt à être branché sur un CRM / une API d'envoi d'email.
- **Pages légales** (mentions légales, confidentialité, CGV, cookies) : gabarits à rédiger
  avec le service juridique.
- **Carrières** : 3 postes d'exemple, à remplacer par les offres réelles.
- **Espace client privé** : non implémenté dans cette propale (hors périmètre du CDC pour la
  bêta — accès par URL dédiée par client, à construire lors du développement définitif).

## Arborescence des pages

Accueil · Nos solutions (+ 5 pages métier) · Nos modes d'intervention (+ 4 pages dispositif)
· À propos (+ Gouvernance & équipe, + Savoir-faire) · Références · Actualités (+ pages détail)
· Carrières · Contact · Plan du site · Pages légales.

Voir `src/lib/nav.ts` pour l'arborescence complète et `src/lib/content.ts` pour l'ensemble du
contenu (facilement modifiable, une seule source de vérité).
