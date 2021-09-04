//Navigation Bar
let showMenu = document.querySelector(".menu-side");
let exitMenu = document.querySelector(".uil-times");
let openMenu = document.querySelector(".uil-bars");

openMenu.addEventListener("click", function () {
  showMenu.classList.toggle("show-menu-side");
  openMenu.classList.add("hide-ham");
  // openMenu.style.display = "none";
});

exitMenu.addEventListener("click", function () {
  showMenu.classList.toggle("show-menu-side");
  // openMenu.classList.add("show-ham");
  openMenu.classList.toggle("hide-ham");
});

//nav-bar color change upon scrolling
let navBar = document.querySelector(".nav-bar");
window.onscroll = function () {
  if (window.scrollY > 550) {
    navBar.classList.add("nav-active");
  } else {
    navBar.classList.remove("nav-active");
  }
};

// --------------------CART-----------------
let addCart = document.querySelectorAll(".add-cart");
let modal = document.querySelector(".modal");
let category = document.querySelector(".category");

// addCart[i].innerHTML = "add to cart";
for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", function () {
    modal.classList.toggle("show-modal");
  });
}

let exitcatbtn = document.querySelector(".exit-cat-btn");
exitcatbtn.addEventListener("click", function () {
  modal.classList.toggle("show-modal");
});
