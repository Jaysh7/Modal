"use strict";

//Elaboarate

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openButton = document.querySelectorAll(".show-modal");
const closeButton = document.querySelector(".close-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

openButton[0].addEventListener("click", openModal);
openButton[1].addEventListener("click", openModal);
openButton[2].addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
