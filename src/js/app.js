import * as flsFunction from "./modules/functions.js";
import burger from "./modules/burger.js";

flsFunction.isWebP();
burger();


import Swiper from 'swiper/bundle';
const swiper = new Swiper('.header-page__swiper', {
    navigation: {
      nextEl: '.header-page__swiper-button-next',
      prevEl: '.header-page__swiper-button-prev',
    },


    slidesPerView: 4,
    
    loop: true,
    
    spaceBetween: 30,

    slideToClickedSlide: true,
    
    speed: 800,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1199:{
        slidesPerView: 3,
      },
      
      1699: {
        spaceBetween: 30,
        slidesPerView: 4,
      }
    },
    
    //autoHeight: true,

  });

var swiperOfFeatured = new Swiper('.featured__swiper', {

    
    spaceBetween: 30,

    slidesPerView: 4,

    centeredSlide: true,

    initialSlide: 2,

    
    grid: {
      rows: 2,
      fill: 'rows'
    },

    pagination: {
      el: '.featured__pagination',
      clickable: true,
    },


    breakpoints: {
      0: {
        slidesPerView: 1,
        grid: {
          rows: 2,
          fill: 'rows'
        },
      },


      700: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'rows'
        },
      
      },

      1023:{
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'rows'
        },
      },
      
      1500: {
        spaceBetween: 30,
        slidesPerView: 4,
      }
    },
    //autoHeight: true,

  });

  
  /*
var act = document.querySelector('.swiper-slide-active')
var nextact = document.querySelector('.swiper-slide-next')
const arrn = document.querySelector('.header-page__swiper-button-next')
function classerac(){
  act.classList.remove('swiper-slide-active')
  nextact.classList.add('swiper-slide-active')
  nextact = document.querySelector('.swiper-slide-next')
  act = document.querySelector('.swiper-slide-active')
  
}
arrn.addEventListener('click', classerac)*/