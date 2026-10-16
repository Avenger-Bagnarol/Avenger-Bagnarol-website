// Build DOM nodes with textContent so editable content is always treated as text.
export function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

// Allow web, contact and local asset links, while rejecting executable URL schemes.
function safeUrl(value) {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:", "mailto:", "tel:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function appendParagraphs(container, paragraphs = []) {
  for (const paragraph of paragraphs) {
    container.append(createElement("p", "", paragraph));
  }
}

function appendLinks(container, links = []) {
  if (!links.length) return;
  const list = createElement("ul", "content-links");
  for (const link of links) {
    const href = safeUrl(link.href);
    if (!href) continue;
    const item = createElement("li");
    const anchor = createElement("a", "", link.label);
    anchor.href = href;
    item.append(anchor);
    list.append(item);
  }
  container.append(list);
}

// Only explicitly listed photographs appear; their order follows the content file.
function appendPhotos(container, photos = []) {
  if (!photos.length) return;
  const gallery = createElement("div", "photo-gallery");
  for (const photo of photos) {
    const src = safeUrl(photo.src);
    if (!src) continue;
    const figure = createElement("figure");
    const image = createElement("img");
    image.src = src;
    image.alt = photo.alt || "";
    image.loading = "lazy";
    image.decoding = "async";
    figure.append(image);
    if (photo.caption) figure.append(createElement("figcaption", "", photo.caption));
    gallery.append(figure);
  }
  container.append(gallery);
}

// The homepage has its own layout; all editable text stays in content/home.js.
// Images remain ordinary DOM elements, preserving PNG transparency and alt text.
function createHomeImage(src, alt, width, height) {
  const image = createElement("img");
  image.src = `assets/images/home/${src}`;
  image.alt = alt;
  image.width = width;
  image.height = height;
  image.decoding = "async";
  return image;
}

function renderHome(content, language, labels, sections) {
  const fragment = document.createDocumentFragment();

  // Keep the heading beside the photo, so no text obscures the three faces.
  const hero = createElement("section", "home-hero");
  const introduction = createElement("div", "home-hero-content");
  introduction.append(createElement("p", "eyebrow", content.title));
  introduction.append(createElement("h1", "", "Mirko Bagnarol"));
  introduction.append(createElement("p", "intro", content.intro));
  hero.append(introduction);

  const heroImage = createHomeImage(
    "gli_avengers.jpg",
    content.photos.heroAlt,
    2736,
    3648,
  );
  // Dimensions follow the JPEG's upright EXIF orientation, as displayed by browsers.
  heroImage.className = "home-hero-image";
  heroImage.fetchPriority = "high";
  hero.append(heroImage);
  fragment.append(hero);

  // Grid columns reserve space for the portraits instead of overlaying the text.
  const personal = createElement("div", "home-personal");
  const leftPortrait = createElement("figure", "home-portrait home-portrait-left");
  const leftImage = createHomeImage(
    "io_giappone_ryukan_cropped.png",
    content.photos.leftAlt,
    1024,
    1536,
  );
  leftImage.loading = "lazy";
  leftPortrait.append(leftImage);

  const biography = createElement("div", "home-biography");
  for (const block of content.blocks || []) {
    const panel = createElement("section", "content-panel");
    panel.append(createElement("h2", "", block.title));
    appendParagraphs(panel, block.paragraphs);
    appendLinks(panel, block.links);
    appendPhotos(panel, block.photos);
    biography.append(panel);
  }

  const rightPortrait = createElement("figure", "home-portrait home-portrait-right");
  const rightImage = createHomeImage(
    "io_beatles_pub_cropped.png",
    content.photos.rightAlt,
    1171,
    1343,
  );
  rightImage.loading = "lazy";
  rightPortrait.append(rightImage);
  personal.append(leftPortrait, biography, rightPortrait);
  fragment.append(personal);

  const interests = createElement("section", "home-interests");
  interests.append(createElement("h2", "home-section-heading", content.exploreTitle));
  const overview = createElement("div", "section-overview");
  for (const destination of sections.filter(item => item.id !== "home")) {
    const translated = destination.content[language];
    const card = createElement("section", "section-card");
    card.append(createElement("h3", "", translated.label));
    card.append(createElement("p", "", translated.intro));
    const link = createElement("a", "", `${labels.explore} →`);
    link.href = `#${destination.id}`;
    card.append(link);
    overview.append(card);
  }
  interests.append(overview);
  fragment.append(interests);
  return fragment;
}

export function renderPage(section, entry, language, labels, sections) {
  const fragment = document.createDocumentFragment();
  const content = section.content[language];
  if (section.id === "home" && !entry) {
    return renderHome(content, language, labels, sections);
  }
  const hero = createElement("div", "page-introduction");
  hero.append(createElement("p", "eyebrow", entry ? content.label : "Mirko Bagnarol"));
  hero.append(createElement("h1", "", entry ? entry.title : content.title));
  hero.append(createElement("p", "intro", entry ? entry.summary : content.intro));
  fragment.append(hero);

  if (entry) {
    const back = createElement("a", "back-link", `← ${labels.back}`);
    back.href = `#${section.id}`;
    fragment.append(back);
    const article = createElement("article", "detail-content");
    appendParagraphs(article, entry.paragraphs);
    appendPhotos(article, entry.photos);
    appendLinks(article, entry.links);
    fragment.append(article);
    return fragment;
  }

  const grid = createElement("div", "content-grid");
  for (const block of content.blocks || []) {
    const panel = createElement("section", "content-panel");
    panel.append(createElement("h2", "", block.title));
    appendParagraphs(panel, block.paragraphs);
    appendLinks(panel, block.links);
    appendPhotos(panel, block.photos);
    grid.append(panel);
  }
  for (const item of content.entries || []) {
    const panel = createElement("article", "content-panel");
    const heading = createElement("h2");
    const link = createElement("a", "", item.title);
    link.href = `#${section.id}/${encodeURIComponent(item.id)}`;
    heading.append(link);
    panel.append(heading, createElement("p", "", item.summary));
    grid.append(panel);
  }
  fragment.append(grid);

  return fragment;
}
