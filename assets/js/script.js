// Hamburger Menu
document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("navbarLinks").classList.toggle("active");
});

// Navbar view:
window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};




// Carousel
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel__item");

function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
    currentSlide = index;
}

function moveSlide(change) {
    showSlide(currentSlide + change);
}

// Initialize the carousel with the first item active
showSlide(currentSlide);
