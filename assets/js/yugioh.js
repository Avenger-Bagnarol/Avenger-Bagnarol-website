import { createElement } from "./dom.js";
import { renderDeckArticle } from "./deck.js";

function renderEvent(content, event) {
  const fragment = document.createDocumentFragment();
  const heading = createElement("header", "yugioh-introduction");
  heading.append(createElement("p", "eyebrow", content.title));
  heading.append(createElement("h1", "", event.title));

  const backLink = createElement("a", "back-link", `← ${content.back}`);
  backLink.href = "#yugioh";
  heading.append(backLink);
  fragment.append(heading);

  const description = createElement("section", "yugioh-panel");
  description.append(createElement("h2", "yugioh-heading", content.descriptionTitle));
  description.append(createElement("p", "", event.description));
  for (const paragraph of event.report) {
    description.append(createElement("p", "", paragraph));
  }

  // Deliberately no image elements or viewer until real photographs are supplied.
  const gallery = createElement("section", "yugioh-panel yugioh-gallery-placeholder");
  gallery.append(createElement("h2", "yugioh-heading", content.galleryTitle));
  gallery.append(createElement("p", "", content.galleryPlaceholder));
  fragment.append(description, gallery);

  return fragment;
}

export function renderYugioh(content, entry, language) {
  if (entry?.kind === "deck") {
    return renderDeckArticle(entry, content, language);
  }

  if (entry) {
    return renderEvent(content, entry);
  }

  const fragment = document.createDocumentFragment();
  const heading = createElement("header", "yugioh-introduction");
  heading.append(createElement("h1", "", content.title));
  fragment.append(heading);

  const columns = createElement("div", "yugioh-columns");
  const formats = createElement("section", "yugioh-column");
  formats.append(createElement("h2", "yugioh-heading", content.formatsTitle));

  for (const format of content.formats) {
    // Native details supplies keyboard interaction and expanded state.
    // No shared name attribute: each format can stay open independently.
    const accordion = createElement("details", "yugioh-format");
    const summary = createElement("summary", "", format.name);
    accordion.append(summary);

    if (format.decks.length) {
      const decks = createElement("ul", "yugioh-decks");
      for (const deck of format.decks) {
        const item = createElement("li");
        if (deck.href) {
          const link = createElement("a", "", deck.name);
          link.href = deck.href;
          item.append(link);
        } else {
          item.textContent = deck.name;
        }
        decks.append(item);
      }
      accordion.append(decks);
    } else {
      accordion.append(createElement("p", "yugioh-coming-soon", content.comingSoon));
    }

    formats.append(accordion);
  }

  const events = createElement("section", "yugioh-column");
  events.append(createElement("h2", "yugioh-heading", content.eventsTitle));
  const eventList = createElement("ul", "yugioh-events");
  for (const event of content.entries.filter(entry => entry.kind !== "deck")) {
    const item = createElement("li");
    const link = createElement("a", "yugioh-event-link", event.title);
    link.href = `#yugioh/${encodeURIComponent(event.id)}`;
    item.append(link);
    eventList.append(item);
  }
  events.append(eventList);

  columns.append(formats, events);
  fragment.append(columns);
  return fragment;
}
