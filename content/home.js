// Edit English and Italian text here; the layout is handled separately.
// Paragraphs are plain text. Links use { label, href }; use relative paths for local files.
// For a CV, for example: { label: "Download CV", href: "assets/documents/cv-en.pdf" }.
//
// To add a detail page, add an entry to BOTH languages with the same stable id:
// {
//   id: "your-page-slug",
//   title: "Your title",
//   summary: "Short text shown on the section page",
//   paragraphs: ["First paragraph", "Second paragraph"],
//   photos: [{ src: "assets/images/travel/your-photo.jpg", alt: "Describe the image", caption: "Optional caption" }],
//   links: [{ label: "Link title", href: "https://example.org" }],
// }
// Entries suit destinations, publications, decklists or any future detail content.
// Photo files are shared across languages; translate alt text and captions here.
export default {
  "en": {
    "label": "Home",
    "title": "Welcome",
    "intro": "I’m Mirko Bagnarol. This is my personal website, currently taking shape.",
    "blocks": [
      {
        "title": "Introduction",
        "paragraphs": [
          "Content to be added."
        ],
        "links": []
      },
      {
        "title": "Academic & professional career",
        "paragraphs": [
          "Content to be added."
        ],
        "links": []
      },
      {
        "title": "CV, contacts & links",
        "paragraphs": [
          "Content to be added."
        ],
        "links": []
      }
    ],
    "entries": []
  },
  "it": {
    "label": "Home",
    "title": "Benvenuto",
    "intro": "Sono Mirko Bagnarol. Questo è il mio sito personale, attualmente in costruzione.",
    "blocks": [
      {
        "title": "Presentazione",
        "paragraphs": [
          "Contenuti da aggiungere."
        ],
        "links": []
      },
      {
        "title": "Percorso accademico e professionale",
        "paragraphs": [
          "Contenuti da aggiungere."
        ],
        "links": []
      },
      {
        "title": "CV, contatti e link",
        "paragraphs": [
          "Contenuti da aggiungere."
        ],
        "links": []
      }
    ],
    "entries": []
  }
};
