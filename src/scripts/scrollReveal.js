export default function initScrollReveal(targetElements, defaultProps) {
  if (typeof ScrollReveal === "undefined") {
    // CDN failed: unhide content (html.sr .load-hidden { visibility: hidden })
    document.documentElement.classList.remove("sr");
    return;
  }

  if (!targetElements.length) return;

  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
}
