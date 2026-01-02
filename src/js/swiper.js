// ===== Swiper imports =====
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

Swiper.use([Autoplay]);

const heroesSwiper = new Swiper('.heroes-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 700,
  loop: true,
  centeredSlides: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
