const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("sitehub-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("sitehub-theme", theme);
  toggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Przelacz na jasny motyw" : "Przelacz na ciemny motyw",
  );
}

applyTheme(storedTheme || (systemPrefersDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});
