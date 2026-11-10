import initScrollReveal from "./scripts/scrollReveal";
import initThemeToggle from "./scripts/theme";
import initNav from "./scripts/nav";
import initLiquidGlass from "./scripts/liquidGlass";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initNav();
initThemeToggle();
initLiquidGlass();
initScrollReveal(targetElements, defaultProps);
