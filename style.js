const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".modal__btn-close");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const ufo = document.querySelector(".menu__ufo");

//Global variables
let timer;
let observedMenu = false;

//Modal Toggle
menu.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card === null) return;

  modal.classList.toggle("hidden");
  modal.classList.toggle("modal-visible");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
});

btnCloseModal.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("modal-visible");
  modal.classList.toggle("hidden");
});

//Menu

///UFO movement
const ufoTilt = function (direction) {
  setTimeout(() => {
    ufo.style.animation = `tilt${direction} .2s linear forwards`;
  }, 150);

  clearTimeout(timer);
  timer = setTimeout(function () {
    ufo.style.animation = `untilt${direction} .2s linear forwards`;
  }, 160);
};

menu.addEventListener("mousemove", function (e) {
  const ufoWidth = ufo.offsetWidth;

  setTimeout(() => {
    ufo.style.left = `${e.pageX - ufoWidth / 2}px`;
  }, 150);

  if (e.movementX > 0) {
    ufoTilt("Right");
  }

  if (e.movementX < 0) {
    ufoTilt("Left");
  }
});
