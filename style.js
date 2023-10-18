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
  const cardTitle = card.querySelector("h3").textContent;
  const cardImg = card.querySelector("img").src.slice(21);

  const modalContent = document.querySelector(".modal__content");

  const HTML = `
        

        <img src="${cardImg}" alt="Burguer image" class="modal__img" />
        <div class="modal__text-box">
          <h3 class="heading__secondary modal__heading">${cardTitle}</h3>
          <div class="modal__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            itaque autem nesciunt neque. Harum praesentium nulla eos aperiam
            fugit et asperiores eaque, beatae odio obcaecati saepe ab libero
            recusandae fuga?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Minus, recusandae temporibus voluptas nihil repellat rerum
            quia saepe officia a laborum perspiciatis architecto repellendus
            distinctio enim autem pariatur explicabo modi mollitia!
          </div>
        </div>
  `;

  modalContent.innerHTML = HTML;
  modal.classList.toggle("hidden");
  /* modal.classList.toggle("modal-visible"); */
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
});

btnCloseModal.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  /* modal.classList.toggle("modal-visible"); */
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
