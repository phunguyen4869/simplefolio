// Animates the .load-hidden elements in as they scroll into view. CSS hides
// them only while <html> has the "js" class, so dropping that class shows
// everything at once.
export default function initScrollReveal(targetElements, defaultProps) {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    root.classList.remove("js");
    return;
  }

  const options = new WeakMap();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      observer.unobserve(target);

      const {
        distance,
        scale = 1,
        fade = true,
        ...timing
      } = options.get(target);
      const from = { transform: `translateY(${distance}px) scale(${scale})` };
      if (fade) from.opacity = 0;

      target.classList.remove("load-hidden");
      // One keyframe: the element animates from it to its own styles
      target.animate([{ ...from, offset: 0 }], {
        ...timing,
        fill: "backwards",
      });
    });
  });

  targetElements.forEach(({ element, animation }) => {
    document.querySelectorAll(element).forEach((el, index) => {
      const {
        delay = 0,
        interval = 0,
        ...rest
      } = { ...defaultProps, ...animation };
      options.set(el, { ...rest, delay: delay + index * interval });
      observer.observe(el);
    });
  });
}
