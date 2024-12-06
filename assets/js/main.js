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
