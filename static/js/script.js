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


let submenu1 = document.getElementById("submenu1");
function openSubmenu1() {
    submenu1.style.display = "block";
}

function closeSubmenu1() {
    submenu1.style.display = "none";
}



// let submenu2 = document.getElementById("submenu2");
// function openSubmenu2() {
//     submenu2.style.display = "block";
// }

// function closeSubmenu2() {
//     submenu2.style.display = "none";
// }



let submenu3 = document.getElementById("submenu3");
function openSubmenu3() {
    submenu3.style.display = "block";
}

function closeSubmenu3() {
    submenu3.style.display = "none";
}


let submenu4 = document.getElementById("submenu4");
function openSubmenu4() {
    submenu4.style.display = "block";
}

function closeSubmenu4() {
    submenu4.style.display = "none";
}


let submenu5 = document.getElementById("submenu5");
function openSubmenu5() {
    submenu5.style.display = "block";
}

function closeSubmenu5() {
    submenu5.style.display = "none";
}