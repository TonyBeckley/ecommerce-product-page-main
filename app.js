const cartIcon = document.querySelector(".cartIcon");
const cartDescription = document.querySelector(".cartDescription");

cartIcon.addEventListener("click", () => {
    cartDescription.classList.toggle("active");
})