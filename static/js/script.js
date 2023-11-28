let ToggleBtn = document.querySelector(".navbar-toggler");
let mobileMenu = document.querySelector("#navbarDory .home-mobile");
let desktopMenu = document.querySelector("#navbarDory .home-desktop");
// mobileMenu.style.color = "blue";



ToggleBtn.addEventListener("click", () => {
    mobileMenu.style.display = "block";
    desktopMenu.style.display = "none";
}

)
let nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        // nav.style.backgroundColor = "yellow";
        nav.classList.add("active");
    }

    else {
        nav.classList.remove("active");
    }
}

)


