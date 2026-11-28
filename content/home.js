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
    // Photograph descriptions are translated alongside the homepage text.
    "photos": {
      "heroAlt": "The Avengers in Hagia Sophia, Istanbul.",
      "leftAlt": "Mirko in a Ryokan in Fujikawaguchiko",
      "rightAlt": "Mirko raising a glass at the Beatles pub in Yerevan."
    },
    "exploreTitle": "Let me share my burning passions!",
    "label": "Home",
    "title": "Welcome to the space of",
    "intro": "Here you can find a lot about myself and what drives me around the world!",
    "blocks": [
      {
        "title": "Introduction",
        "paragraphs": [
          "I am Mirko Bagnarol, born in the far 1995 and raised in Torsa, provence of Udine in north-east Italy. Man of the world, here you can find more about what I reached, and what drove me!"
        ],
        "links": []
      },
      {
        "title": "Academic & professional career",
        "paragraphs": [
          "I graduated in Physics, going from the Bachelor's in Padua, to the Master's in Trento, to finally the PhD in my beloved Jerusalem. Currently, I left academia to work as a System Engineer!"
        ],
        "links": []
      },
      {
        "title": "CV, contacts & links",
        "paragraphs": [
          ""
        ],
        "links": [{"label": "Instagram", "href": "https://www.instagram.com/avenger_bagnarol/"},
          {"label": "LinkedIn", "href": "https://www.linkedin.com/in/mirkobagnarol"}                  
        ]
      }
    ],
    "entries": []
  },
  "it": {
    // Le descrizioni delle fotografie seguono la lingua della pagina.
    "photos": {
      "heroAlt": "Gli Avengers nella Basilica di Santa Sofia, Istanbul.",
      "leftAlt": "Mirko in un Ryokan a Fujikawaguchiko.",
      "rightAlt": "Mirko alza una birra al pub dei Beatles a Yerevan."
    },
    "exploreTitle": "Lascia che ti mostri le mie passioni!",
    "label": "Home",
    "title": "Benvenuto nello spazio di",
    "intro": "Qui puoi trovare molto su di me e su ciò che mi guida in questo mondo!",
    "blocks": [
      {
        "title": "Presentazione",
        "paragraphs": [
          "Sono Mirko Bagnarol, nato nel lontano 1995 e cresciuto a Torsa, provincia di Udine, in Friuli. Uomo di mondo, qui puoi trovare di piu' su cosa ho raggiunto, e cio' che mi ha guidato!"
        ],
        "links": []
      },
      {
        "title": "Percorso accademico e professionale",
        "paragraphs": [
          "Sono laureato in Fisica, dalla triennale a Padova, passando per la magistrale a Trento, per finire con il dottorato nella mia amata Gerusalemme. Successivamente, ho lasciato l'accadmia per lavorare come ingegnere di sistema."
        ],
        "links": []
      },
      {
        "title": "CV, contatti e link",
        "paragraphs": [
          ""
        ],
        "links": [{"label": "Instagram", "href": "https://www.instagram.com/avenger_bagnarol/"},
          {"label": "LinkedIn", "href": "https://www.linkedin.com/in/mirkobagnarol"}]
      }
    ],
    "entries": []
  }
};
