// require('../css/animate.min.css');        //两种模块化规范都可以
// require('../css/mobile-menu.css');
// require('../css/swiper.min.css');

// import 'src/html/index.html'

// import '../css/index.styl';
// import '../css/common.styl';

// const $ = require('jquery');
// require('./hc-mobile-nav.js');
// require('../font/iconfont.js');
// require('../js/swiper.min.js');
// import _ from 'lodash' //特别实用的一个库，npm i lodash --save



var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
})
var newsSwiper2 = new Swiper('.news-center-swiper-container', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
})


$('.launch-img').bind('load', () => {
    console.log('load')
    setTimeout(() => {
        $('.launch').fadeOut('2000');
        $('.main-nav').css('display', 'block')
        $('.g-wrapper').css('display', 'block')
    }, 2000)
})

// const appSlider = new Swiper('.appSlider', {
//     loop: true,
//     speed: 1000,
//     // effect: 'fade',
//     // controller: {
//     //     control: appSlider,
//     //     inverse: true,
//     //     by: 'slide',
//     // },
//     autoplay: {
//         disableOnInteraction: false,
//     },
//     // on: {
//     //     slideChange: function() {
//     //         let currentIndex = this.activeIndex;
//     //         if (this.activeIndex > lists.length) {
//     //             currentIndex = 1
//     //         } else if (this.activeIndex <= 0) {
//     //             currentIndex = lists.length
//     //         }
//     //         $('.app-page-item').removeClass('active')
//     //         $(lists[currentIndex - 1]).addClass('active')
//     //     },
//     // },
// })