// Hamburger Menu
document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("navbarLinks").classList.toggle("active");
});

// Navbar view:
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if(window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};


