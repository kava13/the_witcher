'use strict'

var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow',
  },
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 640px
    540: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
  
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');


menuButton.addEventListener('click', function () {
  
  menu.classList.toggle('header-active');
  menuButton.classList.toggle('menu-button__active');
  console.log("fff")

})