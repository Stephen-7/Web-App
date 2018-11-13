


Mock.mock(
    'http://admin/v1/code',{
    "code":200,
    "data|2": [
        {
            "ctitle": "@ctitle",
            "id":'@id',
            "address": "广州市番禺区万利商业园",
            "cityId": "1234",
            "cityName": "广州市",
            "email": "123456@qq.com",
            "isDefault": "0",
            "name": "老练",
            "phone": "15118952704",
            "provinceId": "1234",
            "provinceName": "广东省"
        }
    ],
    "desc":"ok",
    "msg": "请求成功",
    "path": "path/test"
});
//
// Mock.mock(/user/,{
//     'code': 200,
//     'data': {
//         'id':random.natural(1,99),//id
//         'nickname': random.cname(),//昵称
//         'headImgUrl': random.image(100),//头像
//         'openID': random.string('lower',24),//openID
//         'createTime': random.date('yyyy-MM-dd HH:mm:ss'),//创建时间
//         'state|0-2': 0,//0未认证，1审核中，2已认证
//     }
// })
