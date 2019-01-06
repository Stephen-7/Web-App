

window.onload = function () {
    banner();
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

};



function banner() {
    var Carousel = document.getElementsByClassName('Carousel')[0];
    var CarouselW = Carousel.offsetWidth;
    var imageBox = Carousel.getElementsByTagName('ul')[0];
    var pointBox = Carousel.getElementsByTagName('ol')[0];
    var allPoints = pointBox.getElementsByTagName('li');

    var addTransition = function(){
        imageBox.style.transition = 'all .2s ease';
        imageBox.style.webkitTransition = 'all .2s ease';
    };
    var removeTransition = function (){
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';
    };
    var changeTranslateX = function (x) {
        imageBox.style.transform = 'translateX('+ x +'px)';
        imageBox.style.webkitTransform = 'translateX('+ x +'px)';
    };

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
        console.log(startX);
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
    var timestamp = Date.parse(new Date());
    var arrItem = Date.parse(new Date('2018-12-31 14:00:00'));
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

    $('.list_btn')[0].addEventListener('click',function () {
        $('.loading').show();
        setTimeout(function () {
            $('.loading').hide();
        }, 3000);
    });



    $('.icon')[0].addEventListener('click',function(){
        alert('跳转扫一扫');
    });

    $('.header_nav_icon')[0].addEventListener('click',function () {
        alert('放大镜');
    });

    $('.header_right')[0].addEventListener('click',function(){
        alert('扫码');
    });

    $('.header_nav>input')[0].onkeyup = function () {
        alert(123)
    }
});
