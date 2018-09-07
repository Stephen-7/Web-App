
//分类

/**
 * Created by Stephen on 2017/12/13.
 */
window.stephen = {};

// mjd.transitianEnd = function (obj,callBack){
//     if(typeof obj != 'object') return;
//     obj.addEventListener('transitionEnd',function (e){
//         callBack && callBack(e);
//     })
//     obj.addEventListener('webkittransitionEnd',function (e){
//         callBack && callBack(e)
//     })
// }



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


