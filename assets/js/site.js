import { interfaceText } from "../../content/site.js";
import { sections } from "./sections.js";
import { createElement, renderPage } from "./render.js";

// Language is encoded in the URL, making bilingual pages bookmarkable and shareable.
// English is the default; switching languages leaves the current hash untouched.
function getLanguage() {
  const requestedLanguage = new URL(window.location.href).searchParams.get("lang");
  return requestedLanguage === "it" ? "it" : "en";
}

function getRoute() {
  try {
    const route = window.location.hash.slice(1) || "home";
    const parts = route.split("/");
    return { sectionId: parts[0], entryId: decodeURIComponent(parts.slice(1).join("/")) };
  } catch {
    return { sectionId: "", entryId: "" };
  }
}

function updateNavigation(sectionId, language, labels) {
  const navigation = document.getElementById("section-navigation");
  navigation.setAttribute("aria-label", labels.navigation);
  navigation.replaceChildren();
  for (const section of sections) {
    const link = createElement("a", "", section.content[language].label);
    link.href = `#${section.id}`;
    if (section.id === sectionId) link.setAttribute("aria-current", "page");
    navigation.append(link);
  }

  document.getElementById("language-navigation").setAttribute("aria-label", labels.language);
  for (const link of document.querySelectorAll("[data-language]")) {
    const targetLanguage = link.dataset.language;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", targetLanguage);
    link.href = url.href;
    if (targetLanguage === language) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  }
}

function renderCurrentPage(moveFocus = false) {
  const language = getLanguage();
  const labels = interfaceText[language];
  const route = getRoute();
  const section = sections.find(item => item.id === route.sectionId);
  const entry = section?.content[language].entries.find(item => item.id === route.entryId);
  const main = document.getElementById("main");

  // Scope the dark homepage palette so the other sections keep their own design.
  document.body.classList.toggle("is-home", section?.id === "home" && !route.entryId);
  document.documentElement.lang = language;
  document.getElementById("site-label").textContent = labels.siteLabel;
  document.getElementById("skip-link").textContent = labels.skip;
  document.getElementById("footer-note").textContent = labels.footer;
  document.querySelector('meta[name="description"]').content = labels.description;
  updateNavigation(section?.id, language, labels);

  if (!section || (route.entryId && !entry)) {
    main.replaceChildren(
      createElement("h1", "", labels.missingTitle),
      createElement("p", "", labels.missingText),
    );
    document.title = `${labels.missingTitle} | Mirko Bagnarol`;
  } else {
    main.replaceChildren(renderPage(section, entry, language, labels, sections));
    document.title = `${entry ? entry.title : section.content[language].label} | Mirko Bagnarol`;
  }

  // Announce navigation by focusing the new page, without moving focus on first load.
  if (moveFocus) {
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0 });
  }
}

// The skip link uses a real document anchor, not an application route.
window.addEventListener("hashchange", () => {
  if (window.location.hash === "#main") {
    document.getElementById("main").focus();
    return;
  }
  renderCurrentPage(true);
});

// Keep the current route when using the skip link, so language links stay accurate.
document.getElementById("skip-link").addEventListener("click", event => {
  event.preventDefault();
  document.getElementById("main").focus();
});

renderCurrentPage();
