// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1.5,
  loopAdditionalSlides: 1,

  breakpoints: {
    500: {
      spaceBetween: 15
    },
    600: {
      spaceBetween: 25
    },
    751: {
      spaceBetween: 25,
      slidesPerView: 2.8
    }
  }
});
