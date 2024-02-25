const slider = document.querySelector(".slide"); // Use ".slider" to select the slider container

let currentSlide = 0;

function showSlide(index) {
  const totalSlides = document.querySelectorAll(".slide").length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const translateValue = -currentSlide * 100 + "%";
  slider.style.transform = "translateX(" + translateValue + ")";
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

window.addEventListener("scroll", function() {
  var box = document.querySelector(".box");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 200) { // Adjust this value as needed
      box.style.opacity = "1";
  } else {
      box.style.opacity = "0";
  }
});
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
      card.classList.toggle('flip');
  });
});
