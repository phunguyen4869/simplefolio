import initScrollReveal from "./scripts/scrollReveal";
import initThemeToggle from "./scripts/theme";
import initNav from "./scripts/nav";
import initI18n from "./scripts/i18n";
import initLiquidGlass from "./scripts/liquidGlass";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initI18n();
initNav();
initThemeToggle();
initLiquidGlass();
initScrollReveal(targetElements, defaultProps);
