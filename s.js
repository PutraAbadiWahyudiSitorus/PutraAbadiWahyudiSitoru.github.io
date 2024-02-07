//Toggle Class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketike Hamburger menu di Klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};