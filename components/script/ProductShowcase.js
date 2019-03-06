

$(function () {
    let params = window.location.href.split("?")[1],arr = params.split("&"),obj = {};
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i].split("=")[0];
        obj[key] = arr[i].split("=")[1];
    }
    var id = obj[key];

    $.ajax({
        url:'http://admin/v1/ProductShowcase1',
        type: 'GET',
        dataType: "json",
        success:function (res) {
            if(res.code === 200){
                let list = res.data;
                for(x in list){
                    // console.log(list[x].id);
                }
            }
        },
        error:function (err) {
            console.log(err);
        }
    })




});