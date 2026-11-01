import { createElement } from "./dom.js";

// The native modal dialog traps focus and makes the page behind it inert.
// Listeners belong to the dialog, so navigating away also removes their state.
function createPhotoViewer(destination, language, labels) {
  const dialog = createElement("dialog", "travel-viewer");
  dialog.setAttribute("aria-label", `${labels.viewerTitle} — ${destination.title[language]}`);

  const toolbar = createElement("div", "travel-viewer-toolbar");
  const counter = createElement("p", "travel-viewer-counter");
  counter.setAttribute("aria-live", "polite");
  counter.setAttribute("aria-atomic", "true");
  const closeButton = createElement("button", "travel-viewer-close", "×");
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", labels.close);
  closeButton.autofocus = true;
  toolbar.append(counter, closeButton);

  const stage = createElement("div", "travel-viewer-stage");
  const previousButton = createElement("button", "travel-viewer-arrow", "←");
  previousButton.type = "button";
  previousButton.setAttribute("aria-label", labels.previous);
  const nextButton = createElement("button", "travel-viewer-arrow", "→");
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", labels.next);
  previousButton.disabled = nextButton.disabled = destination.photos.length < 2;

  const figure = createElement("figure", "travel-viewer-figure");
  const image = createElement("img");
  image.decoding = "async";
  const caption = createElement("figcaption");
  const errorMessage = createElement("p", "travel-viewer-error", labels.imageError);
  errorMessage.setAttribute("role", "status");
  errorMessage.hidden = true;
  figure.append(image, caption, errorMessage);
  stage.append(previousButton, figure, nextButton);

  const originalLink = createElement("a", "travel-viewer-original", labels.openOriginal);
  dialog.append(toolbar, stage, originalLink);

  let currentIndex = 0;
  let openingLink = null;

  function showPhoto(index) {
    // Wrap around at either end of the collection.
    currentIndex = (index + destination.photos.length) % destination.photos.length;
    const photo = destination.photos[currentIndex];
    const description = photo.caption?.[language] || "";
    errorMessage.hidden = true;
    image.alt = photo.alt[language];
    // Clear the previous photograph while the selected original loads.
    image.style.visibility = "hidden";
    image.src = destination.directory + photo.full;
    caption.textContent = description;
    caption.hidden = !description;
    counter.textContent = `${currentIndex + 1} ${labels.of} ${destination.photos.length}`;
    originalLink.href = image.src;
  }

  image.addEventListener("error", () => {
    errorMessage.hidden = false;
  });
  image.addEventListener("load", () => {
    image.style.visibility = "visible";
    errorMessage.hidden = true;
  });
  closeButton.addEventListener("click", () => dialog.close());
  previousButton.addEventListener("click", () => showPhoto(currentIndex - 1));
  nextButton.addEventListener("click", () => showPhoto(currentIndex + 1));

  dialog.addEventListener("keydown", event => {
    // Keep Tab cycling through the visible controls instead of browser chrome.
    if (event.key === "Tab") {
      const controls = Array.from(dialog.querySelectorAll("button:not(:disabled), a[href]"));
      const firstControl = controls[0];
      const lastControl = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === firstControl) {
        event.preventDefault();
        lastControl.focus();
      } else if (!event.shiftKey && document.activeElement === lastControl) {
        event.preventDefault();
        firstControl.focus();
      }
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(currentIndex + (event.key === "ArrowLeft" ? -1 : 1));
    }
    // Escape is handled by the native dialog, including its close event.
  });
  // Close on empty space, including the native backdrop, but never on controls.
  // Requiring both endpoints outside the image avoids closing after an image drag.
  let startedOnBackground = false;

  function isBackground(target) {
    return target === dialog || target === stage || target === figure;
  }

  dialog.addEventListener("pointerdown", event => {
    startedOnBackground = isBackground(event.target);
  });
  dialog.addEventListener("click", event => {
    if (startedOnBackground && isBackground(event.target)) {
      dialog.close();
    }
    startedOnBackground = false;
  });

  dialog.addEventListener("close", () => {
    // Release the current original; opening the gallery never requests originals.
    image.removeAttribute("src");
    if (openingLink?.isConnected) openingLink.focus({ preventScroll: true });
  });

  return {
    dialog,
    open(index, link) {
      openingLink = link;
      showPhoto(index);
      dialog.showModal();
    },
  };
}

export function renderTravel(content, language, destinationId) {
  const fragment = document.createDocumentFragment();
  const heading = createElement("header", "travel-introduction");
  heading.append(createElement("p", "eyebrow", content.eyebrow));
  heading.append(createElement("h1", "", content.title));
  fragment.append(heading);

  const destination = content.destinations.find(item => item.id === destinationId)
    || content.destinations[0];
  const tabs = createElement("div", "travel-tabs");
  tabs.setAttribute("role", "tablist");
  tabs.setAttribute("aria-label", content.destinationsLabel);

  for (const item of content.destinations) {
    const tab = createElement("a", "travel-tab", item.title[language]);
    const selected = item.id === destination.id;
    tab.id = `travel-tab-${item.id}`;
    tab.href = `#travel/${item.id}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", String(selected));
    tab.setAttribute("aria-controls", "travel-destination");
    tab.tabIndex = selected ? 0 : -1;
    tabs.append(tab);
  }

  // Manual activation: arrow keys move focus; Enter or Space selects a tab.
  tabs.addEventListener("keydown", event => {
    const tabLinks = Array.from(tabs.querySelectorAll('[role="tab"]'));
    const currentIndex = tabLinks.indexOf(document.activeElement);
    if (currentIndex < 0) return;
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabLinks.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabLinks.length) % tabLinks.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabLinks.length - 1;
    if (nextIndex !== undefined) {
      event.preventDefault();
      tabLinks[nextIndex].focus();
    }
    if (event.key === " ") {
      event.preventDefault();
      tabLinks[currentIndex].click();
    }
  });
  fragment.append(tabs);

  const panel = createElement("section", "travel-destination");
  panel.id = "travel-destination";
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("aria-labelledby", `travel-tab-${destination.id}`);
  panel.tabIndex = 0;
  panel.append(createElement("h2", "travel-destination-title", destination.title[language]));
  panel.append(createElement("p", "travel-description", destination.description[language]));

  const viewer = createPhotoViewer(destination, language, content);
  const gallery = createElement("div", "travel-gallery");
  destination.photos.forEach((photo, index) => {
    const figure = createElement("figure", "travel-photo");
    figure.classList.add(photo.mosaic);

    // A real image link also supports opening the original in another browser tab.
    const link = createElement("a", "travel-photo-link");
    link.href = destination.directory + photo.full;
    link.setAttribute("aria-label", `${content.openPhoto}: ${photo.alt[language]}`);
    link.setAttribute("aria-haspopup", "dialog");
    const image = createElement("img");
    image.src = destination.directory + photo.thumbnail;
    image.alt = photo.alt[language];
    image.width = photo.width;
    image.height = photo.height;
    image.loading = index === 0 ? "eager" : "lazy";
    image.decoding = "async";
    link.append(image);
    link.addEventListener("click", event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      viewer.open(index, link);
    });
    figure.append(link);
    if (photo.caption?.[language]) {
      figure.append(createElement("figcaption", "", photo.caption[language]));
    }
    gallery.append(figure);
  });
  panel.append(gallery);
  fragment.append(panel, viewer.dialog);
  return fragment;
}
