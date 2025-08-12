const menu = document.querySelector(".menu");
const btnOpenMenu = document.querySelector(".menu-btn-open");
const btnCloseMenu = document.querySelectorAll(".menu-btn-close");
const backgroundMenu = document.querySelector(".menu-bg");

btnOpenMenu.addEventListener("click", () => {
  menu.style.left = "0";
  backgroundMenu.style.zIndex = "3";
  backgroundMenu.classList.remove("opacity-0");
});

btnCloseMenu.forEach((close) => {
  close.addEventListener("click", () => {
    menu.style.left = "-100%";
    backgroundMenu.style.zIndex = "-10";
    backgroundMenu.classList.add("opacity-0");
  });
});
