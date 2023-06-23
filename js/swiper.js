const heroSwiperEl = document.querySelector('.hero__swiper');
const noveltiesSwiperEl = document.querySelector('.novelties__swiper');
const noveltiesSwiperEl2 = document.querySelector('.novelties__swiper2');

const heroSwiper = new Swiper(heroSwiperEl, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const novieltiesSwiper = new Swiper(noveltiesSwiperEl, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const novieltiesSwiper2 = new Swiper(noveltiesSwiperEl2, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});