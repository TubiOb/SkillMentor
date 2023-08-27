const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
});

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);




// PARTNERED UNIVERSITIES
var swiper = new Swiper('.swiper', {
      slidesPerView: 5,
      spaceBetween: 20,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });