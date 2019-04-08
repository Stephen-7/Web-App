

$(function () {
    let params = window.location.href.split("?")[1],arr = params.split("&");
    let key = '',value = '';
    for (let i = 0; i < arr.length; i++) {
        key = arr[i].split("=")[0];
        value = arr[i].split("=")[1];
    }

    // $('.DetailsSetImage').css({'backgroundImage': 'url("' + productsContent[id].imgUrl + '")'}); //span改换css背景图
    $(".DetailsImg").attr('src',item[value].image); //image替换
    $('.DetailsText').text(item[value].title);
    $('.DetailsPrice').text('¥'+item[value].price);

    window.ken = item[value];

});


function addShopping() {
    $('.loading').show();
    $('.warn').show();
    $('.warn').text('已添加至购物车');
    setTimeout(()=>{
        $('.warn').hide();
        $('.loading').hide();
    },2000);
    sessionStorage.setItem("arr",JSON.stringify(window.ken));
}

function goToShopping() {
    $('.loading').show();
    window.location.href = '../ShoppingCart/ConfirmOrder.html';
    sessionStorage.setItem("arr",JSON.stringify(window.ken));
}


