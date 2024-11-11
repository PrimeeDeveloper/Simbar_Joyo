const navbar = document.getElementById('navbar')
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.classList.add('scroll');
    }
    else {
        navbar.classList.remove('scroll');
    }
});

window.addEventListener('scroll', function() {
    const homeSection = document.getElementById('home');
    const homeLink = document.getElementById('home-link');
    
    if (window.scrollY >= homeSection.offsetTop && window.scrollY < homeSection.offsetTop + homeSection.offsetHeight) {
        homeLink.classList.add('active');
    } 
    else {
        homeLink.classList.remove('active');
    }
});

window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const aboutLink = document.getElementById('about-link');

    if (window.scrollY >= aboutSection.offsetTop && window.scrollY < aboutSection.offsetTop + aboutSection.offsetHeight) {
        aboutLink.classList.add('active');
    }
    else {
        aboutLink.classList.remove('active');
    }
});

window.addEventListener('scroll', function() {
    const contactSection = document.getElementById('contact');
    const contactLink = document.getElementById('contact-link');

    if (this.window.scrollY >= contactSection.offsetTop && window.scrollY < contactSection.offsetTop + contactSection.offsetHeight) {
        contactLink.classList.add('active');
    }
    else {
        contactLink.classList.remove('active');
    }
});

function toggleMenu() {
    var menuToggle = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
}