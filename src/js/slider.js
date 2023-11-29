new Swiper(".swiper", {
  // Optional parameters
  //direction: "vertical",
  loop: true,
  slidesPerView: "auto",
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    1000: {
      spaceBetween: 3,
      slidesPerView: 3,
    },
  },

  // If we need pagination
  /*    pagination: {
     el: '.swiper-pagination',
   }, */

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  //autoHeight: true,
});
