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

//SALE CODE
let salebtn = document.querySelector(".anniv-btn-sale");
let voucher = document.querySelector(".voucher");
let off = document.querySelector(".off");
salebtn.addEventListener("click", function () {
  salebtn.classList.add("anniv-sale-remove");
  voucher.classList.toggle("voucher-toggle");
});

voucher.addEventListener("click", function () {
  voucher.classList.toggle("voucher-toggle");
  off.classList.toggle("off-toggle");
});

// price change (Voucher Applied)
let voucherBtn = document.querySelector(".voucher-btn");
let shoePrice = document.querySelectorAll(".shoe-price");
let discount = document.querySelectorAll(".discount");
let notDiscount = document.querySelectorAll(".not-discount");
voucherBtn.addEventListener("click", function () {
  // discount.classList.toggle("discountPrice");
  for (let i = 0; i < shoePrice.length; i++) {
    // shoePrice[i].classList.add("xprice");
    discount[i].classList.toggle("show-discount");
    notDiscount[i].classList.add("show-not-discount");
    // shoePrice[i].classList.toggle("discount");
  }
});
