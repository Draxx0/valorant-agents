const swiperStyle = document.querySelector(".swiper");
console.log(swiperStyle);

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,

  slidesPerView: "2",
  coverflowEffect: {
    rotate: 35,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },

  keyboard: {
    enabled: true,
  },

  rewind: true,
});
