export default function initThemeToggle() {
  const root = document.documentElement;
  const button = document.querySelector(".js-theme-toggle");
  if (!button) return;

  button.addEventListener("click", () => {
    const current =
      root.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");
    const next = current === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
}
