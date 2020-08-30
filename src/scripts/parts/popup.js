const link = document.querySelector("#call-us");
const linkMob = document.querySelector("#call-us-mob");
const shadow = document.querySelector(".shadow");
const modal = document.querySelector(".modal");
const close = modal.querySelector(".close");

const showModal = (evt) => {
  evt.preventDefault();
  shadow.classList.remove("invisible");
  modal.classList.remove("invisible");
};

const hideModal = (evt) => {
  shadow.classList.add("invisible");
  modal.classList.add("invisible");
};

const hideModalByClick = (evt) => {
  evt.preventDefault();
  hideModal();
};

const hideModalByEsc = (evt) => {
  if (evt.key === `Escape` || evt.key === `Esc`) {
    hideModal();
  }
};

link.addEventListener("click", showModal);
linkMob.addEventListener("click", showModal);
close.addEventListener("click", hideModalByClick);
document.addEventListener(`keydown`, hideModalByEsc);