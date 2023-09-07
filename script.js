// script.js

// Get a reference to the image element
const menuPhoto = document.querySelector(".menu-photo img");

// Add a click event listener to toggle the zoomed class
menuPhoto.addEventListener("click", () => {
  menuPhoto.classList.toggle("zoomed-image");
});
