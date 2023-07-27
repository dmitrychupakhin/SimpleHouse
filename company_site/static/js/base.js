let burger = document.getElementById('burger');
let navbar = document.getElementById('navbar');
let contact = document.getElementById("contact");
let logo = document.getElementById("logo")
let header = document.getElementById("header")
let isOpen = false; // переменная состояния меню

burger.addEventListener('click', function() {
    if(isOpen) {
        navbar.style.display = "none"
        isOpen = false;

    } else {
        navbar.style.display = "block"
        isOpen = true;
    }
});

document.addEventListener('click', function(event) {
    let isClickInside = navbar.contains(event.target) || burger.contains(event.target);

    if (!isClickInside) {
        navbar.style.display = "none"
        isOpen = false;
    }
});
