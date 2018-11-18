

// var xhr = new XMLHttpRequest();
// xhr.open("get","index.php?t='+new Date().getTime()",true); //加上t='+new Date().getTime()"的目的是为了消除缓存，每次的t的值不一样。
// xhr.send();
// xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4 && xhr.status === 200){
//         alert('请求成功',xhr.responseText)
//     }else {
//         alert('请求失败')
//     }
// };
//



function ajax(method,url,dataType) {

    var xmlHttpReg = null;

    if (window.XMLHttpRequest) {
        xmlHttpReg = new XMLHttpRequest();
    } else {
        xmlHttpReg = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlHttpReg.open(method, url, dataType);

    xmlHttpReg.send(null);

    alert('来到这里');
    xmlHttpReg.onreadystatechange = index();

    function index() {
        if (xmlHttpReg.readyState == 4) {
            alert('请求成功');

            if (xmlHttpReg.status == 200) {

                function $(id) {
                    return document.getElementById(id)
                }
                $("id").innerHTML = xmlHttpReg.responseText;

                alert('请求成功')
            }
        }
    }
}





