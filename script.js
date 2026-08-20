const slides = Array.from(document.querySelectorAll(".slide"));

for (let index = slides.length - 1; index > 0; index--) {
  const randomIndex = Math.floor(Math.random() * (index + 1));
  [slides[index], slides[randomIndex]] = [slides[randomIndex], slides[index]];
}

slides.forEach((slide, index) => {
  slide.classList.toggle("active", index === 0);
});

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