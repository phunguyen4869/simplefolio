import translations from "../data/translations";

const STORAGE_KEY = "lang";

export default function initI18n() {
  const root = document.documentElement;
  const button = document.querySelector(".js-lang-toggle");
  const textNodes = [...document.querySelectorAll("[data-i18n]")];
  const htmlNodes = [...document.querySelectorAll("[data-i18n-html]")];
  const attrNodes = [...document.querySelectorAll("[data-i18n-content]")];

  // The HTML is the English source: remember it so we can switch back
  const english = new Map();
  textNodes.forEach((el) => english.set(el, el.textContent.trim()));
  htmlNodes.forEach((el) => english.set(el, el.innerHTML.trim()));
  attrNodes.forEach((el) => english.set(el, el.getAttribute("content")));

  const apply = (lang) => {
    const dict = translations[lang] || {};
    textNodes.forEach((el) => {
      el.textContent = dict[el.dataset.i18n] ?? english.get(el);
    });
    htmlNodes.forEach((el) => {
      el.innerHTML = dict[el.dataset.i18nHtml] ?? english.get(el);
    });
    attrNodes.forEach((el) => {
      el.setAttribute("content", dict[el.dataset.i18nContent] ?? english.get(el));
    });
    root.lang = lang;
    if (button) {
      const next = lang === "vi" ? "en" : "vi";
      button.textContent = next.toUpperCase();
      button.setAttribute(
        "aria-label",
        next === "vi" ? "Chuyển sang tiếng Việt" : "Switch to English",
      );
    }
  };

  // English unless the visitor picked Vietnamese before
  let lang = "en";
  try {
    lang = localStorage.getItem(STORAGE_KEY) || lang;
  } catch (e) {}
  apply(lang);

  if (!button) return;
  button.addEventListener("click", () => {
    lang = root.lang === "vi" ? "en" : "vi";
    apply(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  });
}
