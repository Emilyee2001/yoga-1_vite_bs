import './assets/scss/all.scss';
import "bootstrap";

// AOS
AOS.init({
    duration: 600,
});

// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css/bundle';

var swiper = new Swiper(".swiperCardCourse", { 
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  spaceBetween: 30,
});

var swiper = new Swiper(".swiperCardReview", {
  loop: true,
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: "row",
  },
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiperCardReview-button-next",
    prevEl: ".swiperCardReview-button-prev",
  },
  breakpoints:{
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 16
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 16
    },
  }
});



console.log("Hello world!");