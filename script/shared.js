


/**
 * Created by Stephen on 2017/12/13.
 */
window.stephen = {};
stephen.tap = function(obj, callBack){
    if(typeof obj != 'object') return;

    // 变量
    var startTime = 0;
    var isMove = false;


    obj.addEventListener('touchstart',function(){
        startTime = Date.now();
    });

    obj.addEventListener('touchmove',function(){
        isMove = true;
    });


    obj.addEventListener('touchend',function(e){
        if(Date.now() - startTime < 200 && !isMove){
            //触碰时间在200ms以内,不产生移动
            callBack && callBack(e);
        }
        // 清零
        startTime = 0;
        isMove = false;
    });
};



function scroll() {
    if (window.pageXOffset || window.pageYOffset) {
        var obj = {
            top: window.pageYOffset,
            left: window.pageXOffset
        };
        return obj;
    }else if(document.compatMode == 'CSS1Compat'){
        // 标准浏览器
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }else {
        // 怪异模式
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
}


function id(id) {
    return document.getElementById(id)
}


