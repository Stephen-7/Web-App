

$(function () {
    let params = window.location.href.split("?")[1],arr = params.split("&"),obj = {};
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i].split("=")[0];
        obj[key] = arr[i].split("=")[1];
    }
    var id = obj[key];

    // $.ajax({
    //     url:'http://admin/v1/ProductShowcase1',
    //     type: 'GET',
    //     dataType: "json",
    //     success:function (res) {
    //         if(res.code === 200){
    //
    //         }
    //     },
    //     error:function (err) {
    //         console.log(err);
    //     }
    // })


    console.log(item[id].image);

    // $('.DetailsSetImage').css({'backgroundImage': 'url("' + productsContent[id].imgUrl + '")'}); //span改换css背景图
    $(".DetailsImg").attr('src',item[id].image); //image替换
    $('.DetailsText').text(item[id].title);
    $('.DetailsPrice').text('¥'+item[id].price);


});


