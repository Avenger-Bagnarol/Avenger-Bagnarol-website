import { createElement } from "./dom.js";
import { createPhotoViewer } from "./travel.js";
import travelContent from "../../content/travel.js";

// Shared article layout. Editorial HTML stays in content/yugioh/<deck>.js.
export function renderDeckArticle(deck, labels, language) {
  const article = createElement("article", "deck-article");
  const back = createElement("a", "back-link", `← ${labels.back}`);
  back.href = "#yugioh";
  article.append(back);

  const header = createElement("header", "deck-header");
  header.append(createElement("h1", "deck-title", deck.title));

  // The value is editorial and remains identical in both languages.
  const tier = createElement("p", "deck-power-tier");
  tier.dataset.tier = deck.tier;
  tier.append(`${labels.powerTier}: `, createElement("strong", "", deck.tier));
  header.append(tier, createElement("p", "deck-format", deck.format));
  article.append(header);

  const body = createElement("div", "deck-body");
  // Only trusted, repository-owned HTML templates are used here.
  // Ordinary paragraphs, headings and figures need no JavaScript configuration.
  body.innerHTML = deck[language];
  article.append(body);

  // Reuse Travel's accessible dialog for every linked image in the article.
  const imageLinks = [...body.querySelectorAll("figure a")]
    .filter(link => link.querySelector("img"));
  if (imageLinks.length) {
    const destination = {
      title: { [language]: deck.title },
      directory: "",
      photos: imageLinks.map(link => ({
        full: link.getAttribute("href"),
        alt: { [language]: link.querySelector("img").alt },
        caption: {
          [language]: link.closest("figure").querySelector("figcaption")?.textContent || "",
        },
      })),
    };
    const viewer = createPhotoViewer(destination, language, travelContent[language]);
    imageLinks.forEach((link, index) => {
      link.setAttribute("aria-haspopup", "dialog");
      link.addEventListener("click", event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        viewer.open(index, link);
      });
    });
    article.append(viewer.dialog);
  }

  return article;
}
