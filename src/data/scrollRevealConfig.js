// Options are Web Animations timing options, plus:
//   distance: how far (px) the element rises as it appears
//   scale:    starting scale
//   interval: extra delay (ms) for each next element of the same selector
//   fade:     false to slide in without fading
export const defaultProps = {
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  distance: 24,
  duration: 900,
};

export const targetElements = [
  { element: ".hero-badge", animation: { delay: 100 } },
  { element: ".hero-title", animation: { delay: 200 } },
  { element: ".hero-subtitle", animation: { delay: 350 } },
  { element: ".hero-cta", animation: { delay: 500 } },
  { element: ".section-title", animation: { delay: 100 } },
  { element: ".about-wrapper__image", animation: { delay: 200, scale: 0.96 } },
  { element: ".about-wrapper__info", animation: { delay: 350 } },
  // Glass blocks slide in without fading: Chrome draws a square backdrop
  // artifact while a backdrop-filter element is semi-transparent.
  {
    element: ".timeline__item",
    animation: { delay: 150, interval: 120, fade: false },
  },
  {
    element: ".bento-card",
    animation: { delay: 150, interval: 120, scale: 0.97, fade: false },
  },
  {
    element: ".contact-card",
    animation: { delay: 150, scale: 0.97, fade: false },
  },
];
