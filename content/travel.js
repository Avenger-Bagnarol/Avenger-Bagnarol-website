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
    "label": "Travel",
    "title": "Travel",
    "intro": "Countries, destinations and photographs. The first travel pages will be added here.",
    "blocks": [
      {
        "title": "Countries & destinations",
        "paragraphs": [
          "Content to be added."
        ],
        "links": []
      }
    ],
    "entries": []
  },
  "it": {
    "label": "Viaggi",
    "title": "Viaggi",
    "intro": "Paesi, destinazioni e fotografie. Le prime pagine di viaggio saranno aggiunte qui.",
    "blocks": [
      {
        "title": "Paesi e destinazioni",
        "paragraphs": [
          "Contenuti da aggiungere."
        ],
        "links": []
      }
    ],
    "entries": []
  }
};
