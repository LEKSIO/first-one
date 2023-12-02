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
