// const slider = document.querySelector('.swiper-container')

// let mySwiper = new Swiper(slider, {
//   slidesPerView: 1,
//   spacebetween: 18px,
// });

// let mySwiper = new Swiper(slider, {
//   slidesPerView: 1;
//   spacebetween: 18px;
// });

new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
  