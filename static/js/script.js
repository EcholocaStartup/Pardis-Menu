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

// let navLinks = document.querySelectorAll("#navbarDory .nav-link");
// let navLinks = document.querySelectorAll("#navbarDory .dropdown");
let dropDowns = document.querySelectorAll("#navbarDory .navbar-nav .dropdown-menu");

// let dropDown = document.querySelector("#navbarDory .navbar-nav .dropdown-menu");



// navLinks.forEach(function (navLink) {
//     navLink.addEventListener("click", () => {
//         // navLink.style.backgroundColor = "yellow";
//         // dropDown.style.display = "block";
//         // dropDown.style.backgroundColor = "yellow";

//         // dropDowns.forEach((dropDown) => {
//         //     // dropDown.style.backgroundColor = "yellow";
//         //     dropDown.style.display = "block";
//         // }
//         // )

//         // dropDown.style.backgroundColor = "yellow";
//         // dropDowns.forEach((dropDown) => {
//         //     dropDown.style.backgroundColor = "yellow";
//         //     dropDown.style.display = "block";

//         // }

//         // )
//         // dropDown.classList.add("active");


//     }

//     )
// }

// )

let menu1 = document.getElementById("menu1");
function openmenu() {
    menu1.style.display = "block";
}