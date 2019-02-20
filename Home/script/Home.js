

window.onload = function () {
    backTop();
    banner();
    MallHeadlines();
    changeNavColor();
};

function backTop() {
    var topBegin = 0;
    var topEend = 0;
    var topTime = null;

    var topIcon = document.getElementById('topIcon');
    window.onscroll = function () {
        var scrollTop = scroll().top;
        scrollTop > 500 ? topIcon.style.display = 'block' : topIcon.style.display = 'none';
        topBegin = scrollTop;
    };

    topIcon.onclick = function () {
        clearInterval(topTime);
        topTime = setInterval(function () {
            topBegin = topBegin + (topEend - topBegin)/10;
            window.scrollTo(0,topBegin);
            if(Math.round(topBegin) == topEend){
                clearInterval(topTime);
            }
        },10);
    };
}

function changeNavColor(){
    var headerBox = document.getElementsByClassName('headerTop')[0];
    var headerNav = document.getElementsByClassName('headerNav')[0];
    var headerNavH = headerNav.offsetHeight;
    var scrollTopH = 0;
    scrollTopH = document.body.scrollTop;
    var opt = 0;
    if(scrollTopH < headerNavH){
        opt = scrollTopH / headerNavH * 0.85;
    }else {
        opt = 0.85;
    }
    headerBox.style.background = 'rgba(201, 21, 35, '+ opt +')';
}

function MallHeadlines() {
    var Digital = document.getElementsByClassName('Digital_header_right')[0];
    var DigitalH = Digital.offsetHeight;
    var ulBox = Digital.getElementsByTagName('ul')[0];

    function addTransition(){
        ulBox.style.transition = 'all .2s ease';
        ulBox.style.webkitTransition = 'all .2s ease';
    }

    function removeTransition(){
        ulBox.style.transition = 'none';
        ulBox.style.webkitTransition = 'none';
    }

    function changeTranslateX(x) {
        ulBox.style.transform = 'translateY('+ x +'px)';
        ulBox.style.webkitTransform = 'translateY('+ x +'px)';
    }

    var index = 1;
    var timer = null;
    timer = setInterval(scrollImg,1500);
    function scrollImg() {
        index++;
        addTransition();
        changeTranslateX(-index * DigitalH)
    }

    if(index >= 5){
        index = 1;
    }else if(index <= 0){
        index = 4;
    }
    removeTransition();
    changeTranslateX(-index * DigitalH);
}

function banner() {
    var Carousel = document.getElementsByClassName('Carousel')[0];
    var CarouselW = Carousel.offsetWidth;
    var imageBox = Carousel.getElementsByTagName('ul')[0];
    var pointBox = Carousel.getElementsByTagName('ol')[0];
    var allPoints = pointBox.getElementsByTagName('li');

    function addTransition(obj){
        imageBox.style.transition = 'all .2s ease';
        imageBox.style.webkitTransition = 'all .2s ease';
    }

    function removeTransition(){
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';
    }

    function changeTranslateX(x) {
        imageBox.style.transform = 'translateX('+ x +'px)';
        imageBox.style.webkitTransform = 'translateX('+ x +'px)';
    }

    var index = 1;
    var timer = null;
    timer = setInterval(scrollImg,1500);
    function scrollImg() {
        index++;
        addTransition();
        changeTranslateX(-index * CarouselW)
    }

    imageBox.addEventListener('transitionEnd',function () {
        if(index >= 9){
            index = 1;
        }else if(index <= 0){
            index = 8;
        }
        removeTransition();
        changeTranslateX(-index * CarouselW);
    });
    imageBox.addEventListener('webkitTransitionEnd',function () {
        if(index >= 9){
            index = 1;
        }else if(index <= 0){
            index = 8;
        }
        removeTransition();
        changeTranslateX(-index * CarouselW);
        setPoint();
    });

    var setPoint = function () {
        for(var i=0; i<allPoints.length; i++){
            allPoints[i].className = '';
        }
        var pointIndex = index;
        if(index >= 9){
            index = 1;
        }else if(index <= 0){
            index = 8;
        }
        allPoints[pointIndex -1].className = 'current';
    };

    var startX = 0, endX = 0, distanceX = 0;
    imageBox.addEventListener('touchstart',function (e) {
        clearInterval(timer);
        startX = e.touches[0].clientX;
    });

    imageBox.addEventListener('touchmove',function(e){
        e.preventDefault();
        endX = e.touches[0].clientX;
        distanceX = startX - endX;
        removeTransition();
        changeTranslateX(-index* CarouselW-distanceX);
    });

    imageBox.addEventListener('touchend',function(e){
        if(Math.abs(distanceX) >= 1/3 * CarouselW && endX != 0){
            if(distanceX > 0){
                index++;
            }else {
                index--;
            }
        }
        addTransition();
        changeTranslateX(-index*CarouselW);
        timer = setInterval(scrollImg,1500);
        startX = 0;
        endX = 0;
        distanceX = 0;
    });
}

$(function () {

    $('.icon')[0].addEventListener('click',function(){
        alert('跳转扫一扫');
    });

    $('.headerInput')[0].addEventListener('click',function () {
        window.location.href = "searchFor.html";
    });

    $('.header_right')[0].addEventListener('click',function(){
        alert('扫码');
    });

    $('.header_nav_camera')[0].addEventListener('click',function () {
        alert('相机');
    });

    $('.body_header')[0].addEventListener('click',function () {
        alert('更多');
    });


    var timestamp = Date.parse(new Date());
    var arrItem = Date.parse(new Date('2019-12-21 14:00:00'));
    var index = (arrItem - timestamp) / 1000;
    var timer = setInterval(function(){
        allTime(index);
        index--;
        if(index < 0){
            clearInterval(timer);
            $('.body_time_box').text('活动已结束');
        }
    },1000);
    function allTime(time) {
        var hh = Math.floor(time / (60 * 60));
        var one = time % (60 * 60);
        var mm = Math.floor(one / 60) ;
        var ss = one % 60;
        if(hh< 10){
            $('.body_time_span1').text(0);
            $('.body_time_span2').text(hh);
        }else {
            $('.body_time_span1').text(Math.floor(hh / (10)));
            $('.body_time_span2').text(hh % 10);
        }
        if(mm< 10){
            $('.body_time_span3').text(0);
            $('.body_time_span4').text(mm);
        }else {
            $('.body_time_span3').text(Math.floor(mm / (10)));
            $('.body_time_span4').text(mm % 10);
        }
        if(ss< 10){
            $('.body_time_span5').text(0);
            $('.body_time_span6').text(ss);
        }else {
            $('.body_time_span5').text(Math.floor(ss / (10)));
            $('.body_time_span6').text(ss % 10);
        }
    }


    var list =  [
        {
            "image": './image/buy-pro1.jpg',
            "title": "iphone 6plus 128G",
            "price": "3200.000",
            "id":'1'
        },
        {
            "image": './image/shuma04.jpg',
            "title": "iphone xs max 128G",
            "price": "5800.00",
            "id":'2'
        },
        {
            "image": './image/shoubiao.jpg',
            "title": "阿玛尼机械表",
            "price": "2000.00",
            "id":'3'
        },
        {
            "image": './image/shuma03.jpg',
            "title": "全新佳能80D相机",
            "price": "5600.00",
            "id":'4'
        },
        {
            "image": './image/yifu.jpg',
            "title": "新款Supreme棒球衣",
            "price": "520.00",
            "id":'5'
        },
        {
            "image": './image/kuzi.jpg',
            "title": "新款Supreme休闲裤",
            "price": "220.00",
            "id":'6'
        },
        {
            "image": './image/yumaoqiu.jpg',
            "title": "红双喜羽毛球拍",
            "price": "300.00",
            "id":'7'
        },
        {
            "image": './image/qiuxie.jpg',
            "title": "麦迪鸳鸯球鞋",
            "price": "1200.00",
            "id":'8'
        },
        {
            "image": './image/buy-pro1.jpg',
            "title": "iphone 6plus 128G",
            "price": "3200.000",
            "id":'1'
        },
        {
            "image": './image/shuma04.jpg',
            "title": "iphone xs max 128G",
            "price": "5800.00",
            "id":'2'
        },
        {
            "image": './image/shoubiao.jpg',
            "title": "阿玛尼机械表",
            "price": "2000.00",
            "id":'3'
        },
        {
            "image": './image/shuma03.jpg',
            "title": "全新佳能80D相机",
            "price": "5600.00",
            "id":'4'
        },
        {
            "image": './image/yifu.jpg',
            "title": "新款Supreme棒球衣",
            "price": "520.00",
            "id":'5'
        },
        {
            "image": './image/kuzi.jpg',
            "title": "新款Supreme休闲裤",
            "price": "220.00",
            "id":'6'
        },
        {
            "image": './image/yumaoqiu.jpg',
            "title": "红双喜羽毛球拍",
            "price": "300.00",
            "id":'7'
        },
        {
            "image": './image/qiuxie.jpg',
            "title": "麦迪鸳鸯球鞋",
            "price": "1200.00",
            "id":'8'
        }
    ];
    var len = list.length;
    var num = 1;
    var loadMore = false;
    var html = '';
    if(len < 8){
        $('.loadMore').text('没有更多了');
        loadMore = false;
    }else {
        $('.loadMore').text('点击加载更多');
        loadMore = true;
        index++;
    }
    for(var i=0; i<list.length; i++){
        html += '<div class="add_list_index">\n' +
            '                <img class="add_list_index_img" src="'+ list[i].image +'" alt="">\n' +
            '                <P class="add_list_index_title">'+ list[i].title +'</P>\n' +
            '                <P class="add_list_index_zhan">\n' +
            '                    <span class="add_list_index_zhan_left">￥'+ list[i].price +'</span>\n' +
            '                    <span class="add_list_index_zhan_right" onclick="checkList('+ list[i].id +')">找相似</span>\n' +
            '                </P>\n' +
            '            </div>'
    }
    $('.add_list').html(html);


    $('.list_btn')[0].addEventListener('click',function () {
        $('.loading').show();
        setTimeout(function () {
            $('.loading').hide();
        }, 3000);
    });



});

function checkList(id){
    alert(id)
}

var params = window.location.href.split("?")[1];
var arr = params.split("&");
var obj = {};
for(var i=0; i<arr.length; i++){
    var key = arr[i].split("=")[0];
    obj[key] = arr[i].split("=")[1];
}
console.log(obj[key]);

