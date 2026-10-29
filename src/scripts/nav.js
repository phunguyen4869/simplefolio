export default function initNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const update = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
  update();
  window.addEventListener("scroll", update, { passive: true });

  initIndicator(nav);

  const year = document.querySelector(".js-year");
  if (year) year.textContent = new Date().getFullYear();
}

// Slide the glass droplet under the hovered link, or the current section's link
function initIndicator(nav) {
  const list = nav.querySelector(".js-nav-links");
  const indicator = list && list.querySelector(".nav__indicator");
  if (!indicator) return;

  const links = [...list.querySelectorAll("a")];
  let active = null;

  const moveTo = (link) => {
    if (!link) {
      indicator.style.opacity = "0";
      return;
    }
    indicator.style.opacity = "1";
    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.transform = `translateX(${link.offsetLeft}px)`;
  };

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => moveTo(link));
  });
  list.addEventListener("mouseleave", () => moveTo(active));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = links.find(
          (l) => l.getAttribute("href") === `#${entry.target.id}`,
        );
        if (!link) return;
        if (entry.isIntersecting) {
          active = link;
        } else if (active === link) {
          active = null;
        }
      });
      links.forEach((l) => l.classList.toggle("is-active", l === active));
      if (!list.matches(":hover")) moveTo(active);
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );

  links.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) observer.observe(section);
  });

  // Re-measure when labels change width (resize, language switch)
  new ResizeObserver(() => moveTo(active)).observe(list);
}
