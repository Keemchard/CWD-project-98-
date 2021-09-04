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
//Carousel
let title = document.querySelector(".title");
let titleBtn = document.querySelector(".title-btn");
// let colorCount = 1;
let count = 1;
setInterval(function () {
  document.getElementById("radio" + count).checked = true;
  // title.classList.toggle("color" + count);
  // titleBtn.classList.add("color-btn" + count);

  count++;
  if (count > 4) {
    count = 1;
  }
  // title.classList.toggle("color" + colorCount);
  // colorCount++;
  // if(colorCount > 4){
  //     colorCount = 1;
  // }
}, 4000);

//MODAL
let modal = document.querySelector(".modal");
window.onload = function () {
  modal.classList.toggle("show-modal");
};

let exitcatbtn = document.querySelector(".exit-cat-btn");
exitcatbtn.addEventListener("click", function () {
  modal.classList.toggle("show-modal");
});
