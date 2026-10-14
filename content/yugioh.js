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
    "label": "Yu-Gi-Oh!",
    "title": "Yu-Gi-Oh!",
    "intro": "A space for decklists, formats, tournaments and other game content.",
    "blocks": [
      {
        "title": "Decklists",
        "paragraphs": [
          "Content to be added."
        ],
        "links": []
      },
      {
        "title": "Formats",
        "paragraphs": [
          "Content to be added."
        ],
        "links": []
      },
      {
        "title": "Tournaments",
        "paragraphs": [
          "Content to be added."
        ],
        "links": []
      }
    ],
    "entries": []
  },
  "it": {
    "label": "Yu-Gi-Oh!",
    "title": "Yu-Gi-Oh!",
    "intro": "Uno spazio per liste dei mazzi, formati, tornei e altri contenuti sul gioco.",
    "blocks": [
      {
        "title": "Liste dei mazzi",
        "paragraphs": [
          "Contenuti da aggiungere."
        ],
        "links": []
      },
      {
        "title": "Formati",
        "paragraphs": [
          "Contenuti da aggiungere."
        ],
        "links": []
      },
      {
        "title": "Tornei",
        "paragraphs": [
          "Contenuti da aggiungere."
        ],
        "links": []
      }
    ],
    "entries": []
  }
};
