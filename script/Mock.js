

Mock.mock(
    'http://admin/v1/code',{
    "code":200,
    "data|6": [
        {
            "ctitle": "@ctitle",
            'id':1,
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
Mock.mock(
    'http://admin/v1/login', {
    'code': 200,
    'data': {
        'phone': "17620835317",
        'password': "123456"
    },
    "desc":"ok",
    "msg": "请求成功",
    "path": "path/test"
});
