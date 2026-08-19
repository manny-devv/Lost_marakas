const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showNextSlide() {

  slides[currentSlide].classList.remove("active");

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 5000);



const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", function () {

  mobileMenu.classList.toggle("open");

});