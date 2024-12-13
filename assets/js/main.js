const themeSwitcher = document.getElementById("toggle-theme");
const rootHtml = document.documentElement;

themeSwitcher.addEventListener("click", changeTheme);

function switchSunMoon(theme) {
  themeSwitcher.classList.remove("bi-sun");
  themeSwitcher.classList.remove("bi-moon-stars");
  theme === "dark"
    ? themeSwitcher.classList.add("bi-sun")
    : themeSwitcher.classList.add("bi-moon-stars");
}

function changeTheme() {
  let currentTheme = rootHtml.dataset.theme;

  if (currentTheme === "dark") {
    rootHtml.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  } else {
    rootHtml.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  }

  switchSunMoon(rootHtml.dataset.theme);
}

if (localStorage.getItem("theme") != null) {
  rootHtml.dataset.theme = localStorage.getItem("theme");
  switchSunMoon(rootHtml.dataset.theme);
}

const desktopMenuLinks = document.querySelectorAll(
  ".menu--principal .menu__link"
);
const mobileMenuLinks = document.querySelectorAll(".menu--mobile .menu__link");

desktopMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    desktopMenuLinks.forEach((active) => active.classList.remove("active"));
    link.classList.add("active");
  });
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuLinks.forEach((active) => active.classList.remove("active"));
    link.classList.add("active");
  });
});

const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach((accordionButton) => {
  accordionButton.addEventListener("click", () => {
    const accordionItem = accordionButton.parentElement;
    const isActive = accordionItem.classList.contains("active");
    isActive
      ? accordionItem.classList.remove("active")
      : accordionItem.classList.add("active");
  });
});
