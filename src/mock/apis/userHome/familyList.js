const Mock = require("mockjs");
let icon1 = require("../../../assets/images/familyFatherIcon@2x.png");
let icon2 = require("../../../assets/images/addressIcon@2x.png");
let icon3 = require("../../../assets/images/baseInforIcon@2x.png");

const data = Mock.mock({
  message: "message",
	code: 0,
	success: true,
	data: {
		list: [
			{
				item: [
					{
						name: "测试2",
						relation: "测试",
						link: ""
					},{
						name: "测试2",
						relation: "测试",
						link: "https://www.baidu.com"
					}
				]
			},{
				item: [
					{
						name: "测试2",
						relation: "测试",
						link: "https://www.baidu.com"
					},{
						name: "测试2",
						relation: "测试",
						link: ""
					},{
						name: "测试2",
						relation: "测试",
						link: ""
					},{
						name: "测试2",
						relation: "测试",
						link: "https://www.baidu.com"
					}
				]
			},{
				item: [
					{
						name: "测试2",
						relation: "测试",
						link: ""
					},{
						name: "测试2",
						relation: "测试",
						link: ""
					}
				]
			}
		],
		relation: [
			{
				list: [
					{
						name: "四服高祖光绪"
					}
				]
			},{
				list: [
					{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					}
				]
			},{
				list: [
					{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					}
				]
			},{
				list: [
					{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					}
				]
			},{
				list: [
					{
						name: "四服高祖光绪"
					},{
						name: "四服高祖光绪"
					},{
						name: "四服高祖光绪"
					},{
						name: "四服高祖光绪"
					},{
						name: "四服高祖光绪"
					},{
						name: "四服高祖光绪"
					},{
						name: "四服高祖光绪"
					},{
						name: "四服高祖光绪"
					},{
						name: "四服高祖光绪"
					}
				]
			},{
				list: [
					{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					}
				]
			},{
				list: [
					{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					}
				]
			},{
				list: [
					{
						name: "测试"
					},{
						name: "测试"
					},{
						name: "测试"
					}
				]
			},{
				list: [
					{
						name: "测试"
					}
				]
			}
		],
		relationTable: {
			total: "5",
			title: "世系表",
			list: [
				{
					era: "1",
					name: "秦昂",
					rank: "1"
				},{
					era: "2",
					name: "秦昂",
					rank: "2"
				},{
					era: "3",
					name: "秦昂",
					rank: "3"
				},{
					era: "4",
					name: "秦昂",
					rank: "4"
				}
			]
		},
		familyDetail: {
			name: "嘉祥秦氏始迁祖",
			total: "6123",
			link: "https://www.baidu.com",
			list: [
				{
					title: "始迁祖",
					icon: icon1,
					name: "秦作人"
				},{
					title: "地区",
					icon: icon2,
					name: "嘉祥老僧堂东秦庄、河长口东秦庄",
				},{
					title: "基本介绍",
					icon: icon3,
					name: "嘉祥秦氏始祖讳忠，明洪武二年自山西洪洞迁居汶上西六十余里蔡家林。二世祖兄弟五人，长讳<i>有德</i>，守故土蔡家林，后迁秦店，次讳<i>有贤</i>，迁居郓城西北黄集乡玉皇庙，三讳<i>有仁</i>，迁居梁山西北方路口秦庄，四讳<i>有仲</i>，迁居郓城侯咽集镇秦集，五讳<i>有义</i>，迁居嘉祥县老僧堂秦庄。"
				}

			]
		},
		person: [
			{
				time: "2020年2月",
				detail: "对各项目商务工作完成情况进行评价，他表示各项目要根据生产工作进度情况与甲方沟通，相关资料要记录清晰、完整、留存好，劳务沟通工作要加强，不能产生依赖性，杜绝出现现场资源浪费情况，严禁过程中遗漏节点，结算工作重更要认真仔细，新的一年商务工作更上一层楼。"
			},{
				time: "2019年5月",
				detail: "绩效考核系统要进一步完善，各项目将2018年度绩效考核成绩梳理清晰、上报，找出成绩的同时要将不合理的地方挑出并分析原因解决，制定新一年的指标并上报。"
			}
		]
	}
});

export default data;