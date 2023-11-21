// select Elements
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const navContainer = document.getElementById("nav_container");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

const modalContainer = document.getElementById("modal-container");
function openNavMenu() {
  navContainer.classList.add("open");
}
function closeNavMenu() {
  navContainer.classList.remove("open");
}
function openModal() {
  modalContainer.classList.add("open");
}
function closeModal() {
  modalContainer.classList.remove("open");
}
function openSignUpORSignModal() {
  openModal();
  return closeNavMenu();
}
openBtn.addEventListener("click", openNavMenu);
closeBtn.addEventListener("click", closeNavMenu);
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
