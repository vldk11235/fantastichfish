// alert("Hello!");

new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,
  interval: 7000,

  // mousewheel: {
  //   invert: true,

  // },
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    dealy: 1,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  // },

  speed: 1000,

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },
  //  нерабочие функции узнать у хмары

  // autoHeight: true, вообще все пропадает

  // hashNavigation: {
  //   watchState: true,
  // },

  // slideToCLickedSlide: true,
});

// Params
var sliderSelector = ".swiper-container",
  options = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 1, // or 'auto'
    // spaceBetween: 10,
    centeredSlides: true,
    effect: "coverflow", // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 50, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: true, // Enables slides shadows
    },
    grabCursor: true,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1023: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    // Events
    on: {
      imagesReady: function () {
        this.el.classList.remove("loading");
      },
    },
  };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();

// And if we need scrollbar
// scrollbar: {
//   el: '.swiper-scrollbar',
// },
// function onMouseEnter(e) {
//   this._autoplay('stop');
// }
// function onMouseLeave(e) {
//   this._autoplay();
// }
