// ================================
// MENÚ MÓVIL
// ================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


// Abrir / cerrar menú
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Cerrar menú cuando se toca un enlace
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ================================
// CERRAR MENÚ AL TOCAR FUERA
// ================================

document.addEventListener("click", function (event) {

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedButton =
        menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {

        navMenu.classList.remove("active");

    }

});