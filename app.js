const cartIcon = document.querySelector(".cartIcon");
const cartDescription = document.querySelector(".cartDescription");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

cartIcon.addEventListener("click", () => {
    cartDescription.classList.toggle("active");
});
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});