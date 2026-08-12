import initScrollReveal from "./scripts/scrollReveal";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);

// Lazy so tilt failure cannot block ScrollReveal (content stays visible).
import("./scripts/tiltAnimation")
  .then((m) => m.default())
  .catch(() => {});
