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
    "label": "Physics",
    "title": "Physics",
    "intro": "A space for my scientific background, research interests and publications. Content will be added here.",
    "blocks": [
      {
        "title": "Scientific background",
        "paragraphs": [
          "Content to be added."
        ],
        "links": []
      },
      {
        "title": "Research interests",
        "paragraphs": [
          "Content to be added."
        ],
        "links": []
      },
      {
        "title": "Publications",
        "paragraphs": [
          "Content to be added."
        ],
        "links": []
      }
    ],
    "entries": []
  },
  "it": {
    "label": "Fisica",
    "title": "Fisica",
    "intro": "Uno spazio per il mio percorso scientifico, gli interessi di ricerca e le pubblicazioni. I contenuti saranno aggiunti qui.",
    "blocks": [
      {
        "title": "Percorso scientifico",
        "paragraphs": [
          "Contenuti da aggiungere."
        ],
        "links": []
      },
      {
        "title": "Interessi di ricerca",
        "paragraphs": [
          "Contenuti da aggiungere."
        ],
        "links": []
      },
      {
        "title": "Pubblicazioni",
        "paragraphs": [
          "Contenuti da aggiungere."
        ],
        "links": []
      }
    ],
    "entries": []
  }
};
