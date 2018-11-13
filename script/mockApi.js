var random = Mock.Random;
// var json = json;
Mock.mock(/user/,{
	'code': 200,
	'data': {
		'id':random.natural(1,99),//id
		'nickname': random.cname(),//昵称
		'headImgUrl': random.image(100),//头像
		'openID': random.string('lower',24),//openID
		'createTime': random.date('yyyy-MM-dd HH:mm:ss'),//创建时间
		'state|0-2': 0,//0未认证，1审核中，2已认证
	}
})
Mock.mock(/courseList/,{
	'code': 200,
	'data|0-10': [{
		'id|+1': random.natural(1,99),//id
		'classId|+1': random.natural(100,300),//课程id
		'classContent': random.ctitle(10,20),//课程标题
		'price|1500-3000': 1600,//价格
		'totalCourse|5-12': 8,//总课时
		'classMate|8-20': 10,//上课人数
		'eduAddress|3-8': random.csentence(3,5),//地址
		'createTime': random.date('HH:mm')+'-'+random.date('HH:mm'),//上课时间
		'teacherId|20-60': 22,//教师id
		'headImgUrl': random.image(100),//教师头像
		'school': random.ctitle(4,8),//教师学校
		'major': random.ctitle(4,8),//教师专业
		'teacherName': random.cname(3),//教师名称
		'sex|0-1': 1,//教师性别 0男1女
	}]
})
// Mock.mock('course/list','get',function(options){
// 	return json.courseList;
// })
Mock.mock(/courseDetail\//,{
	'code': 200,
	'data': {
		'id': random.natural(1,55),//id
		'classId|+1': random.natural(100,300),//课程id
		'classContent': random.ctitle(10,20),//课程标题
		'price|1500-3000': 1600,//价格
		'totalCourse|5-12': 8,//总课时
		'classMate|8-20': 10,//上课人数
		'eduAddress|3-8': random.csentence(3,5),//地址
		'createTime': random.date('HH:mm')+'-'+random.date('HH:mm'),//时间
		'teacherId|20-60': 22,//教师id
		'eduEnsure': random.ctitle(10,20),//教学保障
		'banner':[//轮播图
			{'imgUrl': random.image('1280x687', '#02adea', 'Hello')},
			{'imgUrl': random.image('1280x687', '#ff4e56', '5555')},
			{'imgUrl': random.image('1280x687', '#999', 'world')},
		],
		'qrCodeImg': random.image('200x200', '#e5e5e5', 'qrCode')//二维码
	}
})
Mock.mock(/courseTeacherDetail\//,{
	'code': 200,
	'data': {
		'teacherId|20-60': 22,//教师id
		'headImgUrl': random.image(100),//教师头像
		'school': random.ctitle(4,8),//学校
		'major': random.ctitle(4,8),//专业
		'teacherName': random.cname(3),//教师名字
		'description': random.ctitle(20,30),//个人描述
		'certificateDesc': random.ctitle(10,20),//资质介绍
		'sex|0-1': 1,//教师性别 0男1女
		'certificatePics': [//证书图片列表
			{'imgUrl': random.image('200x100', '#999', 'img1')},
			{'imgUrl': random.image('200x100', '#ff4e56', 'img2')}
		]
	}
})
Mock.mock(/syllabus\/list/,{
	'code': 200,
	'data|1-7': [{
		'title|1-10': random.ctitle(3),//标题
		'createTime': random.date('HH:mm')+'-'+random.date('HH:mm')//时间

	}]
})
Mock.mock(/syllabus\/change/,{
	'code': 200,
	'data|1-7': [{
		'title|1-10': random.ctitle(3),//标题
		'createTime': random.date('HH:mm')+'-'+random.date('HH:mm'),//时间
		'state|0-1': 0,//0未完成，1已完成
		'id|+1':1
	}]
})
Mock.mock(/joinCourseList/,{
	'code': 200,
	'data|0-10': [{
		'id|+1': random.natural(1,99),//id
		'classId|+1': random.natural(100,300),//课程id
		'classContent': random.ctitle(10,20),//课程标题
		'price|1500-3000': 1600,//价格
		'totalCourse|5-12': 8,//总课时
		'classMate|8-20': 10,//上课人数
		'eduAddress|3-8': random.csentence(3,5),//地址
		'createTime': random.date('HH:mm')+'-'+random.date('HH:mm'),//上课时间
		'teacherId|20-60': 22,//教师id
		'headImgUrl': random.image(100),//教师头像
		'school': random.ctitle(4,8),//教师学校
		'major': random.ctitle(4,8),//教师专业
		'teacherName': random.cname(3),//教师名称
		'sex|0-1': 1,//教师性别 0男1女
		'state|0-3': 1,//0已报名，1教学中,2待退款，3已退款
		'refund|0-1': 0,//0可退款，1不可退款
	}]
})
Mock.mock(/createCourseList/,{
	'code': 200,
	'data|0-10': [{
		'id|+1': random.natural(1,99),//id
		'classId|+1': random.natural(100,300),//课程id
		'classContent': random.ctitle(10,20),//课程标题
		'price|1500-3000': 1600,//价格
		'totalCourse|5-12': 8,//总课时
		'classMate|8-20': 10,//上课人数
		'eduAddress|3-8': random.csentence(3,5),//地址
		'createTime': random.date('HH:mm')+'-'+random.date('HH:mm'),//上课时间
		'state|0-4': 1,//0审核中，1待开班，2教学中，3未通过，4已结束
	}]
})
// Mock.mock('Course/create','put',function(options){
// 	var data = options.data;
// 	json.courseList.shift(data);
// 	return {
// 		'code': 200,
// 		'msg': '请求成功',
// 	}
// })