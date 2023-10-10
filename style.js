const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".modal__btn-close");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card === null) return;

  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
});

btnCloseModal.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
});
