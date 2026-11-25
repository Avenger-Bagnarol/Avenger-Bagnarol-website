import armenia from "./travel/armenia.js";
import georgia from "./travel/georgia.js";

// ADD DESTINATIONS HERE: create a content file modelled on travel/armenia.js,
// import it above, and add it to this list. The first destination is the default.
// Keep each id unique and stable: it becomes part of #travel/your-destination.
const destinations = [
  armenia,
  georgia,
];

export default {
  en: {
    label: "Travel",
    title: "Travel",
    // Description in main page
    intro: "A space for postcards and snapshots of the places I've visited during my travels through this wonderful world!",
    eyebrow: "A photographic journal",
    destinationsLabel: "Destinations",
    openPhoto: "Enlarge photograph",
    viewerTitle: "Photograph viewer",
    close: "Close viewer",
    previous: "Previous photograph",
    next: "Next photograph",
    of: "of",
    imageError: "The photograph could not be loaded. Try another image or open the original.",
    openOriginal: "Open original photograph",
    destinations,
    // The existing router uses these records for destination URLs and page titles.
    entries: destinations.map(destination => ({
      id: destination.id,
      title: destination.title.en,
    })),
  },
  it: {
    label: "Viaggi",
    title: "Viaggi",
    intro: "Uno spazio per cartoline e istantanee dei luoghi che ho visitato durante i miei viaggi in questo mondo meraviglioso!",
    eyebrow: "Un diario fotografico",
    destinationsLabel: "Destinazioni",
    openPhoto: "Ingrandisci fotografia",
    viewerTitle: "Visualizzatore di fotografie",
    close: "Chiudi il visualizzatore",
    previous: "Fotografia precedente",
    next: "Fotografia successiva",
    of: "di",
    imageError: "Impossibile caricare la fotografia. Prova un’altra immagine o apri l’originale.",
    openOriginal: "Apri la fotografia originale",
    destinations,
    entries: destinations.map(destination => ({
      id: destination.id,
      title: destination.title.it,
    })),
  },
};
