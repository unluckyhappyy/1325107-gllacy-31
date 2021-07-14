const link = document.querySelector(".header-login-link");
const popup = document.querySelector(".modal-link");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});


const search = document.querySelector(".search");
const searchPopup = document.querySelector(".search-modal");

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.toggle("search-modal-show");
});


const feedback = document.querySelector(".contacts-button");
const feedbackPopup = document.querySelector(".feedback-modal");
const closeModal = document.querySelector(".close-modal");

feedback.addEventListener("click", function(evt) {
evt.preventDefault();
feedbackPopup.classList.add("feedback-modal-show");
});

closeModal.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("feedback-modal-show");
  });

const cart = document.querySelector(".cart");
const basket = document.querySelector(".popup-basket");
const closePopup = document.querySelector(".popup-close");

cart.addEventListener("click", function(evt) {
  evt.preventDefault();
  basket.classList.toggle("popup-basket-show");
  });
