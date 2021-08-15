// require('../css/reset.css');
// import 'src/html/contact.html'
// require('../css/animate.min.css');        //两种模块化规范都可以
// import '../css/contact.styl';
// require('../css/mobile-menu.css');
// require('../css/swiper.min.css');
// require('./swiper.min.js');
// require('./infoBox.js');

// const markPng = require('../image/location-mark.png')
// const markPngMobile = require('../image/icon_dingwei@2x.png')
// const logo = require('../image/case-logo2.gif')

// const $ = require('jquery');
// require('./hc-mobile-nav.js');

const markPng = '../image/location-mark.png';
const markPngMobile = '../image/icon_dingwei@2x.png';
const logo = '../image/case-logo2.gif';

function mapInit() {
    var map = new BMap.Map("location");
    var point = new BMap.Point(112.28303, 31.717664);
    map.centerAndZoom(point, 15); //地图初始化，同时设置地图展示级别
    // 标注地理位置距离图标左上    
    // 角各偏移10像素和25像素。
    var width = $(window).width()

    markPngMobile
    var myIcon = new BMap.Icon(
        width > 900 ? markPng : markPngMobile,
        new BMap.Size(23, 25), {
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的您可以看到在本例中该位置即是   
            // 图标中央下端的尖角位置。    
            anchor: new BMap.Size(10, 25),
            // 设置图片偏移。   
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
            imageOffset: new BMap.Size(0, 0) // 设置图片偏移    
        });
    // 创建标注对象并添加到地图   
    var marker = new BMap.Marker(point, { icon: myIcon }); // 将标注添加到地图中
    map.addOverlay(marker);

    var html = `<div class='infoBoxContent'>
    <div class="title">宜城市建设投资经营有限公司</div>
    <div class="desc">
        <p>地址：宜城市鄢城办事处九龙社区宜城大道35号</p>
        <p>电话：0710-4217908</p>
    </div>
  </div>`;

    var boxStyle = {
        opacity: "0.8",
        background: "#4979A0",
        width: "470px",
        height: "200px",
        top: "100px",
        marginLeft: "285px",
        padding: "30px"
    }



    var infoBox = new BMapLib.InfoBox(map, html, {
        boxStyle,
        enableAutoPan: false,
        align: 1,
        closeIconUrl: logo

    });
    if (width > 900) {
        infoBox.open(marker);
    }
}
mapInit()