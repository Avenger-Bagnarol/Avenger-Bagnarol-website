import laval from "./yugioh/laval.js";

// Register future deck articles here, then link them from their format below.
const deckArticles = [laval];

// ADD FORMATS AND DECKS HERE. Names stay identical in both languages.
// Decks are plain text until href points to a real, implemented page.
// Deck article text lives in the separate bilingual files imported above.
const formats = [
  {
    id: "goat",
    name: "GOAT",
    decks: [
      { id: "chaos-zombie", name: "Chaos Zombie", href: null },
    ],
  },
  {
    id: "edison",
    name: "Edison",
    decks: [
      { id: "flamvell-lightsworn", name: "Flamvell Lightsworn", href: null },
    ],
  },
  {
    id: "fire-water",
    name: "Fire Water",
    decks: [
      { id: "laval", name: "Laval", href: "#yugioh/laval" },
    ],
  },
  {
    id: "hat",
    name: "HAT",
    decks: [
      { id: "fire-kings", name: "Fire Kings", href: null },
    ],
  },
  {
    id: "modern-2020-2025",
    name: "Modern (2020–2025)",
    decks: [
      { id: "altergeist", name: "Altergeist", href: null },
    ],
  },
];

// ADD EVENTS HERE. The id becomes #yugioh/your-event-id.
// Replace description in both languages with your personal introduction.
// Add report paragraphs to report.en / report.it when ready.
const events = [
  {
    id: "ycs-birmingham-2026",
    title: "YCS Birmingham 2026",
    description: {
      en: "[Placeholder — add my tournament description here.]",
      it: "[Segnaposto — aggiungere qui la descrizione del mio torneo.]",
    },
    report: {
      en: [],
      it: [],
    },
    // No photos yet. When adding them, reuse Travel's thumbnail/viewer code
    // in assets/js/travel.js rather than creating a second lightbox system.
  },
];

export default {
  en: {
    label: "Yu-Gi-Oh!",
    title: "Yu-Gi-Oh!",
    // Shared with the existing homepage overview; keep this text independent.
    intro: "A space for decklists, formats, tournaments and other game content.",
    formatsTitle: "Formats",
    eventsTitle: "Events",
    comingSoon: "Coming soon",
    back: "Back to Yu-Gi-Oh!",
    descriptionTitle: "Tournament description",
    galleryTitle: "Photographs",
    galleryPlaceholder: "Photograph gallery coming soon.",
    formats,
    powerTier: "Power tier",
    entries: [
      ...deckArticles,
      ...events.map(event => ({
        id: event.id,
        title: event.title,
        description: event.description.en,
        report: event.report.en,
      })),
    ],
  },
  it: {
    label: "Yu-Gi-Oh!",
    title: "Yu-Gi-Oh!",
    intro: "Uno spazio per liste dei mazzi, formati, tornei e altri contenuti sul gioco.",
    formatsTitle: "Formati",
    eventsTitle: "Eventi",
    comingSoon: "Prossimamente",
    back: "Torna a Yu-Gi-Oh!",
    descriptionTitle: "Descrizione del torneo",
    galleryTitle: "Fotografie",
    galleryPlaceholder: "Galleria fotografica prossimamente disponibile.",
    formats,
    powerTier: "Livello di potenza",
    entries: [
      ...deckArticles,
      ...events.map(event => ({
        id: event.id,
        title: event.title,
        description: event.description.it,
        report: event.report.it,
      })),
    ],
  },
};
