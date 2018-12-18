

$(function () {
    $('.TabList').on('click', function () {
        $(this).addClass("check");
        $(this).siblings(".TabList").removeClass("check");
        var index = $(this).index();
        var divShow = $(".content").children("div");
        $(divShow[index]).show();
        $(divShow[index]).siblings("div").hide();
    });
});