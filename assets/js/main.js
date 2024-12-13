const themeSwitcher = document.getElementById("toggle-theme");
const rootHtml = document.documentElement;

themeSwitcher.addEventListener("click", changeTheme);

function changeTheme() {
  let currentTheme = rootHtml.dataset.theme;

  themeSwitcher.classList.toggle("bi-sun");
  themeSwitcher.classList.toggle("bi-moon-stars");

  if (currentTheme === "dark") {
    rootHtml.dataset.theme = "light";
  } else {
    rootHtml.dataset.theme = "dark";
  }
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
