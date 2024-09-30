// Siwper JS

let swiperCard = new Swiper(".card-testimonial", {
  loop: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },


  breakpoints: {
    600: { slidesPerView: 2 },
    968: { slidesPerView: 3 },
    1440: { slidesPerView: 4 },
    1920: { slidesPerView: 5 },
    2160: { slidesPerView: 5 },


  },
});
