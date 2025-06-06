const btnShowMenu = document.getElementById("btn-show-menu");
const btnHideMenu = document.getElementById("btn-hide-menu");
const menuMobile = document.getElementById("menu-mobile");
const linksMobile = document.querySelectorAll("[data-link]");
const body = document.body;


btnShowMenu.addEventListener("click", () => {
  body.classList.add("overflow-y-hidden");
  menuMobile.classList.add("transition-transform");
  menuMobile.classList.add("duration-500");
  menuMobile.classList.add("ease-in-out");
  menuMobile.classList.remove("-translate-x-[100vw]");
});

btnHideMenu.addEventListener("click", () => {
  body.classList.remove("overflow-y-hidden");
  menuMobile.classList.add("-translate-x-[100vw]");

  setTimeout(() => {
    menuMobile.classList.remove("transition-transform");
    menuMobile.classList.remove("duration-500");
    menuMobile.classList.remove("ease-in-out");
  }, 500);
});

linksMobile.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("overflow-y-hidden");
    menuMobile.classList.add("-translate-x-[100vw]");

    setTimeout(() => {
      menuMobile.classList.remove("transition-transform");
      menuMobile.classList.remove("duration-500");
      menuMobile.classList.remove("ease-in-out");
    }, 500);
  });
});

