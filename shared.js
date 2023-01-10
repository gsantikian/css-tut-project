const selectPlanButtons = document.querySelectorAll(".plan .button");
const modalNoBtnEl = document.querySelector(".modal__action--negative");
const backdropEl = document.querySelector(".backdrop");
const modalEl = document.querySelector(".modal");
const toggleButtonEl = document.querySelector(".toggle-button");
const mobileNavEl = document.querySelector(".mobile-nav");

for (let btn of selectPlanButtons) {
  btn.addEventListener("click", showModal);
}

if (modalNoBtnEl) {
  modalNoBtnEl.addEventListener("click", hideModal);
}

backdropEl.addEventListener("click", function () {
  mobileNavEl.classList.remove("open");
  hideModal();
});

toggleButtonEl.addEventListener("click", function () {
  mobileNavEl.classList.add("open");
  backdropEl.classList.add("open");
});

function showModal() {
  modalEl.classList.add("open");
  backdropEl.classList.add("open");
}

function hideModal() {
  if (modalEl) {
    modalEl.classList.remove("open");
  }
  backdropEl.classList.remove("open");
}
