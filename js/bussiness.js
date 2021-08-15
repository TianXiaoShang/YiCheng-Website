// require('../css/reset.css');
// import 'src/html/bussiness.html'
// require('../css/animate.min.css');        //两种模块化规范都可以
// import '../css/bussiness.styl';
// require('../css/mobile-menu.css');
// require('../css/swiper.min.css');
// require('./swiper.min.js');
// const $ = require('jquery');
// require('./hc-mobile-nav.js');

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