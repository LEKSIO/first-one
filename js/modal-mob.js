const refs = {
  body: document.querySelector("body"),
  openBtn: document.querySelector(".popup__open"),
  closeBtn: document.querySelector(".popup__close"),
  popup: document.querySelector(".popup"),
};
const timeout = 500;
let unlock = true;

refs.openBtn.addEventListener("click", openPopup);
refs.closeBtn.addEventListener("click", closePopup);

function openPopup(e) {
  refs.popup.classList.add("open");
}
function closePopup(e) {
  refs.popup.classList.remove("open");
}

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
