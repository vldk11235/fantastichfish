new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
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
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  // },
  
  

  speed: 1000,
  
  effect: 'fade',

  fadeEffect: {
    crossFade: true
  },
//  нерабочие функции узнать у хмары
  
  // autoHeight: true, вообще все пропадает
 
  // hashNavigation: {
  //   watchState: true,
  // },
 
  // slideToCLickedSlide: true,
});




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
