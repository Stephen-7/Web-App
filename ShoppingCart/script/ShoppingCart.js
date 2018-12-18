

$(function(){
    $('.HeaderRight1')[0].addEventListener('click',function () {
        $('.HeaderRight1').hide();
        $('#numAndZo').hide();
        $('.HeaderRight2').show();
        $('#deleteIndex').show();
    });
    $('.HeaderRight2')[0].addEventListener('click',function () {
        $('.HeaderRight2').hide();
        $('#deleteIndex').hide();
        $('.HeaderRight1').show();
        $('#numAndZo').show();
    });


    $('.delete')[0].addEventListener('click', function () {
        $('.sure').show();
        setTimeout(function () {
            $('.sure').hide();
        }, 3000)
    });


    $('.yes')[0].addEventListener('click',function () {

    })

});

function Home() {
//         window.location.href = "../Home/Home.html";
}


