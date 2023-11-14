const refs = {
  body: document.querySelector("body"),
  openBtn: document.querySelector(".header-button"),
  popup: document.querySelector(".popup"),
};
const timeout = 800;
let unlock = true;

refs.popup.addEventListener("click", openPopup);

function openPopup() {}

// (() => {
//   const mobileMenu = document.querySelector(".js-menu-container");
//   const openMenuBtn = document.querySelector(".js-open-menu");
//   const closeMenuBtn = document.querySelector(".js-close-menu");
//   const menuLinks = document.querySelectorAll(".js-menu-link");

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute("aria-expanded") === "true" || false;
//     openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
//     mobileMenu.classList.toggle("is-open");

//     // const scrollLockMethod = !isMenuOpen
//     //   ? "disableBodyScroll"
//     //   : "enableBodyScroll";
//     // bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener("click", toggleMenu);
//   closeMenuBtn.addEventListener("click", toggleMenu);

//   // Закриття меню при кліку на посилання
//   menuLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       mobileMenu.classList.remove("is-open");
//       openMenuBtn.setAttribute("aria-expanded", false);
//       // bodyScrollLock.enableBodyScroll(document.body);
//     });
//   });

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove("is-open");
//     openMenuBtn.setAttribute("aria-expanded", false);
//     // bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
