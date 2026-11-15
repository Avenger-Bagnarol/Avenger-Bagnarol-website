// Configure MathJax before loading it. No package installation or build is needed.
window.MathJax = {
  loader: { load: ["[tex]/cancel"] },
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    packages: { "[+]": ["cancel"] },
    // A rising diagonal through the argument provides pionless EFT notation.
    macros: { slashed: ["\\cancel{#1}", 1] },
  },
  // The router controls typesetting, including the first dynamically built page.
  startup: { typeset: false },
};

// Keep navigation usable while the CDN loads, or if it is unavailable.
// The promise resolves only after MathJax and its extensions are ready.
export const mathReady = new Promise(resolve => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@4.0.0/tex-chtml.js";
  script.async = true;
  script.onload = () => {
    window.MathJax.startup.promise.then(
      () => resolve(window.MathJax),
      error => {
        console.warn("MathJax could not start:", error);
        resolve(null);
      },
    );
  };
  script.onerror = () => {
    console.warn("MathJax could not load; mathematical source remains readable.");
    resolve(null);
  };
  document.head.append(script);
});
