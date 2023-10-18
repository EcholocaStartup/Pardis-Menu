let ToggleBtn = document.querySelector(".navbar-toggler");
let mobileMenu = document.querySelector("#navbarDory .home-mobile");
let desktopMenu = document.querySelector("#navbarDory .home-desktop");
// mobileMenu.style.color = "blue";

let nav = document.querySelector(".navbar");
// nav.style.backgroundColor = "yellow";



ToggleBtn.addEventListener("click", () => {
    mobileMenu.style.display = "block";
    desktopMenu.style.display = "none";
})


window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        nav.style.backgroundColor = "yellow";
    }

})