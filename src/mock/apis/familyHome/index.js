const Mock = require("mockjs");
let icon1 = require("../../../assets/images/familyFatherIcon@2x.png");
let icon2 = require("../../../assets/images/addressIcon@2x.png");
let icon3 = require("../../../assets/images/baseInforIcon@2x.png");
let images1 = require("../../../assets/images/aboutReadIcon@2x.png");

const data = Mock.mock({
  message: "message",
	code: 0,
	success: true,
	data: {
    familyDetail: {
			name: "汶上秦氏",
			total: "12345",
			link: "https://www.baidu.com",
      familyMark: "秦晖堂",
      ancestorsName: "秦忠厚",
      ancestorsGeneration: "27",
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
					title: "家族简介",
					icon: icon3,
					name: "秦姓，亦称秦氏。<br>汉族秦姓有两大分支：一支源于嬴姓，一支源于姬姓，秦姓分布广，以北京、江苏、山东、山西、陕西、四、广西、河北、河南、湖北、湖南居多。少数分布于东北地区，东北地区的秦氏和西南地区的秦氏外族汉化的比较多。"
				},{
					title: "家族起源",
					icon: icon3,
					name: "秦出自嬴姓。秦氏是少昊金天氏的直系后裔，少昊是中国野蛮时代中期一位极富传奇色彩的神话人物。他的名字，在中国典籍五花八门，除“少昊”外，写作“少皓”、“少皞”、“少皋”，此外称“朱宣”、“白帝”、“西皇”、“金天氏”、“穷桑氏”。《左传》、《帝王世纪》都说少昊名叫挚。但《帝王世纪》说：“少昊帝名挚，字青阳，嬴姓也。”，又有少昊的裔孙伯益，其后非子的封地于秦，有以国名为氏者。"
				}
			]
		},
    relationTable: [
      {
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: "",
        current: true
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: ""
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: ""
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: "测试测"
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: ""
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: ""
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: ""
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: "测试测"
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: ""
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: ""
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: ""
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: ""
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: ""
      },{
        era: "1",
        name: "测试",
        rank: "1",
        dynasty: ""
      },
    ],
    famousPerson: [
      {
        name: "秦有为(清代)",
        detail: "字世缨，单人。景泰二年进士。授南京御史。劾治内官傅锁儿罪，谏止江南采翠毛、鱼䴙等使。权贵忌之，蜚语闻。会考察，坐谪湖广驿丞。天顺初，以御史练纲荐，迁雄县知县。奉御杜坚捕天鹅暴横，纮执杖其从者，坐下诏"
      },{
        name: "秦元勋(近代)",
        detail: "（1923－2008）数学家。贵州贵阳人。1943年毕业于浙江大学数学系。1946年获美国哈佛大学文学硕士学位，1947年获美国哈佛大学哲学博士学位，1988年被美国俄侅俄大学玛丽塔学院授予荣..."
      }
    ],
    book: [
			{
				images: images1,
				name: "《秦氏溯源》",
				writer: ["秦永生", "张上深"],
				link: "https://www.baidu.com"
			},{
				images: images1,
				name: "《秦氏溯源1》",
				writer: ["秦永生"],
				link: "https://www.baidu.com"
			}
		],
    article: [
			{
				title: "铁血丹心筑长城",
				time: "2019-10-20",
				outline: "人力资源管理方面，由专人牵头制定人才招聘、培养计划，各个板块都要有相关培训，管理人员参与其中，增强管理素质……",
				link: "https://www.baidu.com"
			},{
				title: "铁血丹心筑2",
				time: "2010-01-10",
				outline: "人力资源管理方面，由专人牵头制定人才招聘、培养计划，各个板块都要有相关培训，管理人员参与其中……",
				link: "https://www.baidu.com"
			}
		],
  }
});

export default data;