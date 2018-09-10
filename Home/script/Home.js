$('.icon')[0].addEventListener('click',function(){
//            window.location.href = "../landing/Landing.html";
    alert('跳转扫一扫');
});

$('.Landing')[0].addEventListener('click',function(){
    window.location.href = "../Mine/Landing.html";
//            alert('跳转登录');
});

$('.icon_search')[0].addEventListener('click',function(){
//            window.location.href = "../Mine/registered.html";
    alert('跳转搜索');
});

window.onload = function () {
    banner()
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
    })

}
