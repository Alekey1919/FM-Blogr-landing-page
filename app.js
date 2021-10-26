// NAVBAR

const product = document.getElementById("product");
const company = document.getElementById("company");
const contact = document.getElementById("contact");

product.addEventListener("click", () => {
  document
    .getElementById("dropdown-product")
    .classList.toggle("dropdown-active");

  document
    .getElementById("dropdown-company")
    .classList.remove("dropdown-active");

  document
    .getElementById("dropdown-contact")
    .classList.remove("dropdown-active");
});

company.addEventListener("click", () => {
  document
    .getElementById("dropdown-product")
    .classList.remove("dropdown-active");

  document
    .getElementById("dropdown-company")
    .classList.toggle("dropdown-active");

  document
    .getElementById("dropdown-contact")
    .classList.remove("dropdown-active");
});

contact.addEventListener("click", () => {
  document
    .getElementById("dropdown-product")
    .classList.remove("dropdown-active");

  document
    .getElementById("dropdown-company")
    .classList.remove("dropdown-active");

  document
    .getElementById("dropdown-contact")
    .classList.toggle("dropdown-active");
});

// MOBILE NAVBAR

const mobileOpen = document.getElementById("hamburguer");
const mobileNav = document.querySelector(".nav-mobile-container");

mobileOpen.addEventListener("click", () => {
  mobileNav.style.display = "block";
  setTimeout(() => {
    mobileNav.style.left = "0vw";
    mobileClose.style.display = "block";
    mobileClose.style.opacity = "1";
  }, 10);
});

const mobileClose = document.getElementById("mobile-close");

mobileClose.addEventListener("click", () => {
  document.querySelector(".nav-mobile-container").style.left = "100vw";
  mobileClose.style.opacity = "0";
  setTimeout(() => {
    mobileClose.style.display = "none";
    mobileNav.style.display = "none";
  }, 300);
});

const mobileProduct = document.getElementById("mobile-product");
const mobileCompany = document.getElementById("mobile-company");
const mobileConnect = document.getElementById("mobile-connect");

mobileProduct.addEventListener("click", () => {
  document
    .getElementById("mobile-dropdown-product")
    .classList.toggle("mobile-dropdown-active");

  document
    .getElementById("mobile-dropdown-company")
    .classList.remove("mobile-dropdown-active");

  document
    .getElementById("mobile-dropdown-connect")
    .classList.remove("mobile-dropdown-active");
});

mobileCompany.addEventListener("click", () => {
  document
    .getElementById("mobile-dropdown-product")
    .classList.remove("mobile-dropdown-active");

  document
    .getElementById("mobile-dropdown-company")
    .classList.toggle("mobile-dropdown-active");

  document
    .getElementById("mobile-dropdown-connect")
    .classList.remove("mobile-dropdown-active");
});

mobileConnect.addEventListener("click", () => {
  document
    .getElementById("mobile-dropdown-product")
    .classList.remove("mobile-dropdown-active");

  document
    .getElementById("mobile-dropdown-company")
    .classList.remove("mobile-dropdown-active");

  document
    .getElementById("mobile-dropdown-connect")
    .classList.toggle("mobile-dropdown-active");
});
