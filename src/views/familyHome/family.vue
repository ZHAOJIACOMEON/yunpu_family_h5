<template>
  <div class="user-wrap">
    <div class="user-head">
      <van-row type="flex" justify="center" class="user-infor">
        <van-col span="6">
          <div class="avatar">
            <img
              src="https://img2.baidu.com/it/u=3850453184,3595007350&fm=26&fmt=auto&gp=0.jpg"
            />
          </div>
        </van-col>
        <van-col span="14" class="family-infor">
          <p class="family-name">
            您未加入该家族<i class="detail-link"
              >立即加入<van-icon name="arrow"
            /></i>
          </p>
          <p class="name">{{ familyDetailList.familyDetail.name }}</p>
          <p class="sex">总人数：{{ familyDetailList.familyDetail.total }}</p>
          <p class="sex">
            始祖：{{ familyDetailList.familyDetail.ancestorsName
            }}<i></i>世代：{{
              familyDetailList.familyDetail.ancestorsGeneration
            }}代
          </p>
        </van-col>
      </van-row>
      <div class="user-title dark-bg">
        <p>家族介绍</p>
      </div>
    </div>
    <div class="card-wrap bottom-radius">
      <div
        class="card-item"
        v-for="(list, index) in familyDetailList.familyDetail.list"
        :key="index"
      >
        <div class="item-detail">
          <p class="item-title">{{ list.title }}：</p>
          <p class="item-desc" v-html="list.name">{{ list.name }}</p>
        </div>
      </div>
      <i class="space"></i>
    </div>
    <div class="card-wrap radius">
      <div class="user-title dark-bg">
        <p>家族字辈</p>
      </div>
      <div class="card-item">
        <div class="item-images">
          <img src="../../assets/images/addressIcon@2x.png" />
        </div>
        <div class="item-detail">
          <p class="item-title">堂号：</p>
          <p class="item-desc">
            {{ familyDetailList.familyDetail.familyMark }}
          </p>
        </div>
      </div>
      <div class="card-item">
        <div class="item-images">
          <img src="../../assets/images/addressIcon@2x.png" />
        </div>
        <div class="item-detail">
          <p class="item-title">字辈：</p>
          <div class="item-desc">
            <van-row
              :class="{
                'family-table-detail': true,
                'card-item-current': list.current ? true : false,
              }"
              v-for="(list, index) in familyDetailList.relationTable"
              :key="index"
            >
              <van-col span="6" class="family-table-title"
                ><van-icon name="play" />世代： <i>{{ list.era }}</i></van-col
              >
              <van-col
                span="8"
                :class="{
                  'family-table-deco': true,
                  'family-table-height': list.dynasty != '' ? true : false,
                }"
                ><i></i><span></span
              ></van-col>
              <van-col span="10">
                <van-row>
                  <van-col span="16" class="family-table-name">{{
                    list.name
                  }}</van-col>
                  <van-col span="8" class="family-table-rank"
                    ><i>{{ list.rank }}</i
                    >人</van-col
                  >
                </van-row>
                <van-row class="dynasty-desc" v-if="list.dynasty != ''">
                  {{ list.dynasty }}
                </van-row>
              </van-col>
            </van-row>
          </div>
          <a class="family-table-more">
            <i class="more-link">点击展开</i>
            <van-icon name="arrow-down" />
          </a>
        </div>
      </div>
    </div>
    <div class="card-wrap radius">
      <div class="user-title dark-bg">
        <p>数据统计</p>
      </div>
      <div class="charts-wrap">
        <ve-line
          class="line-charts"
          :title="vchartsConfig.title"
          :extend="chartEntend"
          :style="{ height: '500px' }"
        ></ve-line>
      </div>
      <p class="chart-analysis-title">测试测试</p>
      <div class="chart-analysis">
        <div class="chart-analysis-deco"><i></i></div>
        <div class="chart-analysis-detail">
          <p class="analysis-title">人数最多的世代：<i>共111人</i></p>
        </div>
      </div>
      <div class="chart-analysis">
        <div class="chart-analysis-deco"><i></i></div>
        <div class="chart-analysis-detail">
          <p class="analysis-title">人数最多的世代：<i>共111人</i></p>
        </div>
      </div>
      <div class="chart-analysis">
        <div class="chart-analysis-deco"><i></i></div>
        <div class="chart-analysis-detail">
          <p class="analysis-title">人数最多的世代：<i>共111人</i></p>
        </div>
      </div>
      <div class="chart-analysis">
        <div class="chart-analysis-deco"><i></i></div>
        <div class="chart-analysis-detail">
          <p class="analysis-title">人数最多的世代：<i>共111人</i></p>
        </div>
      </div>
      <div class="chart-analysis">
        <div class="chart-analysis-deco"><i></i></div>
        <div class="chart-analysis-detail">
          <p class="analysis-title">人数最多的世代：<i>共111人</i></p>
        </div>
      </div>
      <div class="chart-analysis">
        <div class="chart-analysis-deco"><i></i></div>
        <div class="chart-analysis-detail">
          <p class="analysis-title">人数最多的世代：<i>共111人</i></p>
        </div>
      </div>
      <div class="chart-analysis">
        <div class="chart-analysis-deco"><i></i></div>
        <div class="chart-analysis-detail">
          <p class="analysis-title">人数最多的世代</p>
          <p class="analysis-focus">
            永画、永亲、永琪、永书、永用、永德、永智、永体、永美、永乐、永家、永国、永健、永琪、永书、永用、永德、永琪、永书、永用、永德、
          </p>
        </div>
      </div>
      <div class="chart-analysis">
        <div class="chart-analysis-deco"><i></i></div>
        <div class="chart-analysis-detail">
          <p class="analysis-title">人数最多的世代：<i>共111人</i></p>
        </div>
      </div>
    </div>
    <div class="card-wrap radius">
      <div class="user-title dark-bg">
        <p>家族名人</p>
      </div>
      <div class="family-famous-person">
        <div
          class="famous-person-item"
          v-for="(list, index) in familyDetailList.famousPerson"
          :key="index"
        >
          <p class="famous-person-name">{{ list.name }}</p>
          <p class="famous-person-detail">{{ list.detail }}</p>
        </div>
      </div>
    </div>
    <div class="card-wrap radius">
      <div class="user-title dark-bg">
        <p>家族特点</p>
      </div>
      <div class="family-characteristic">
        <p>志存高远、有勇有谋、高度团结、牛人辈出</p>
      </div>
    </div>
    <div class="card-wrap radius">
      <div class="user-title dark-bg">
        <p>人口分布</p>
      </div>
      <div class="population-distribute-charts">
        <ve-map height="250px" :extend="mapExtend"></ve-map>
      </div>
      <div class="population-distribute-wrap">
        <p class="population-distribute-desc">
          西汉初年，为了清除各地的旧贵族及豪强势力，从而使之置于中央政府监视之下，人口大约有二十万之众，这其中就有山东秦姓的一支豪族迁居扶风茂陵。这支秦姓人丁兴旺，官宦众多，故世号“万石秦氏”，从而成为当地一望族。与此同时，已有秦姓或迁入甘肃、江苏，或迁入四川、北京等地。
        </p>
        <div class="population-distribute-detail">
          <p class="distribute-charts-title">该姓氏人数分布较多的省份</p>
          <van-row gutter="40">
            <van-col span="12">
              <p>四川<i>5万</i></p>
              <van-progress
                pivot-text=""
                color="#F8B551"
                :percentage="25"
                stroke-width="8"
              />
            </van-col>
            <van-col span="12">
              <p>上海<i>25万</i></p>
              <van-progress
                pivot-text=""
                color="#F8B551"
                :percentage="55"
                stroke-width="8"
              />
            </van-col>
            <van-col span="12">
              <p>上海<i>25万</i></p>
              <van-progress
                pivot-text=""
                color="#F8B551"
                :percentage="55"
                stroke-width="8"
              />
            </van-col>
            <van-col span="12">
              <p>上海<i>25万</i></p>
              <van-progress
                pivot-text=""
                color="#F8B551"
                :percentage="55"
                stroke-width="8"
              />
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
    <div class="card-wrap radius">
      <div class="user-title dark-bg">
        <p>族谱信息</p>
      </div>
      <v-book :dataList="familyDetailList.book"></v-book>
    </div>
    <div class="card-wrap radius">
      <div class="user-title dark-bg">
        <p>家族资料</p>
      </div>
      <v-book :dataList="familyDetailList.book"></v-book>
    </div>
    <div class="card-wrap radius">
      <div class="user-title dark-bg">
        <p>家族文章</p>
      </div>
      <v-article :articleList="familyDetailList.article"></v-article>
    </div>
    <van-button class="link-button">加入家族</van-button>
  </div>
</template>
<script>
import "echarts/lib/component/title";
import "echarts/lib/chart/lines";
import "echarts/lib/chart/effectScatter";
import "echarts/lib/echarts";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/map";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/geo";
import book from "../components/book.vue";
import article from "../components/article.vue";
export default {
  components: {
    "v-book": book,
    "v-article": article,
  },
  name: "family",
  data() {
    return {
      familyDetailList: [],
      vchartsConfig: {
        setting: {},
        title: {
          text: "测试测试",
          textStyle: {
            color: "#8F6D3B",
            fontWeight: "normal",
            fontSize: "15",
          },
          left: "10",
          top: "10",
        },
      },
      chartEntend: {
        color: ["#FFAE3B", "#75726E"],
        grid: {
          left: 30,
          height: "100px",
          containLabel: false,
        },
        legend: {
          top: "10",
          right: "10",
          icon: "rect",
          itemWidth: 12,
          itemHeight: 12,
          data: [
            {
              name: "直接访问",
              icon: "rect",
              textStyle: {
                color: "#FFAE3B",
              },
              itemStyle: {
                borderWidth: "2",
              },
            },
            {
              name: "搜索引擎",
              icon: "rect",
              textStyle: {
                color: "#75726E",
              },
              itemStyle: {
                borderWidth: "2",
              },
            },
          ],
        },
        xAxis: {
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
            },
          },
          axisLabel: {
            show: true,
            fontSize: 8,
            color: "#AAA",
          },
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            fontSize: 10,
            color: "#fff",
          },
        },
        series: [
          {
            name: "直接访问",
            type: "line",
            lineStyle: {
              color: "#FFAE3B",
              width: 3,
            },
            data: [0, 50, 100, 90, 40, 10, 80],
          },
          {
            name: "搜索引擎",
            type: "line",
            lineStyle: {
              color: "#75726E",
              width: 3,
            },
            data: [70, 10, 90, 30, 50, 20, 60],
          },
        ],
      },
      mapExtend: {},
      geoCoordMap: {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028],
      },
    };
  },
  created() {
    this.renderPageInit();
    this.renderMapDataInit();
  },
  methods: {
    renderPageInit() {
      let params = {};

      const res = this.$api.familyHome(params);

      if (res && res.code == 0 && res.success) {
        this.familyDetailList = res.data;
      } else {
      }
    },
    renderMapDataInit() {
      const BJData = [
        [{ name: "北京" }, { name: "上海", value: 95 }],
        [{ name: "北京" }, { name: "广州", value: 90 }],
        [{ name: "北京" }, { name: "大连", value: 80 }],
        [{ name: "北京" }, { name: "南宁", value: 70 }],
        [{ name: "北京" }, { name: "南昌", value: 60 }],
        [{ name: "北京" }, { name: "拉萨", value: 50 }],
        [{ name: "北京" }, { name: "长春", value: 40 }],
        [{ name: "北京" }, { name: "包头", value: 30 }],
        [{ name: "北京" }, { name: "重庆", value: 20 }],
        [{ name: "北京" }, { name: "常州", value: 10 }],
      ];
      const SHData = [
        [{ name: "上海" }, { name: "包头", value: 95 }],
        [{ name: "上海" }, { name: "昆明", value: 90 }],
        [{ name: "上海" }, { name: "广州", value: 80 }],
        [{ name: "上海" }, { name: "郑州", value: 70 }],
        [{ name: "上海" }, { name: "长春", value: 60 }],
        [{ name: "上海" }, { name: "重庆", value: 50 }],
        [{ name: "上海" }, { name: "长沙", value: 40 }],
        [{ name: "上海" }, { name: "北京", value: 30 }],
        [{ name: "上海" }, { name: "丹东", value: 20 }],
        [{ name: "上海" }, { name: "大连", value: 10 }],
      ];
      const GZData = [
        [{ name: "广州" }, { name: "福州", value: 95 }],
        [{ name: "广州" }, { name: "太原", value: 90 }],
        [{ name: "广州" }, { name: "长春", value: 80 }],
        [{ name: "广州" }, { name: "重庆", value: 70 }],
        [{ name: "广州" }, { name: "西安", value: 60 }],
        [{ name: "广州" }, { name: "成都", value: 50 }],
        [{ name: "广州" }, { name: "常州", value: 40 }],
        [{ name: "广州" }, { name: "北京", value: 30 }],
        [{ name: "广州" }, { name: "北海", value: 20 }],
        [{ name: "广州" }, { name: "海口", value: 10 }],
      ];
      const color = ["#a6c84c", "#ffa022", "#46bee9"];
      const planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      const series = [];
      [
        ["北京", BJData],
        ["上海", SHData],
        ["广州", GZData],
      ].forEach((item, i) => {
        series.push(
          {
            name: item[0] + " Top10",
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "#fff",
              symbolSize: 3,
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 0,
                curveness: 0.2,
              },
            },
            data: this.convertData(item[1]),
          },
          {
            name: item[0] + " Top10",
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15,
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2,
              },
            },
            data: this.convertData(item[1]),
          },
          {
            name: item[0] + " Top10",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke",
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}",
              },
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: color[i],
              },
            },
            data: item[1].map((dataItem) => {
              return {
                name: dataItem[1].name,
                value: this.geoCoordMap[dataItem[1].name].concat([
                  dataItem[1].value,
                ]),
              };
            }),
          }
        );
      });
      const option = {
        backgroundColor: "#404a59",
        title: {
          text: "",
          subtext: "",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          show: false,
          orient: "vertical",
          top: "bottom",
          left: "right",
          data: ["北京 Top10", "上海 Top10", "广州 Top10"],
          textStyle: {
            color: "#fff",
          },
          selectedMode: "single",
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: false,
            },
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#404a59",
            },
            emphasis: {
              areaColor: "#2a333d",
            },
          },
        },
        series: series,
      };
      this.mapExtend = option;
    },
    convertData(data) {
      const res = [];

      for (let i = 0; i < data.length; i++) {
        const dataItem = data[i];
        const fromCoord = this.geoCoordMap[dataItem[0].name];
        const toCoord = this.geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord],
          });
        }
      }
      return res;
    },
  },
};
</script>
<style lang="less" scoped>
.user-wrap {
  background-color: #e2e2e2;
  .user-head {
    height: 363px;
    background-image: url(../../assets/images/headBg@2x.png);
    background-repeat: no-repeat;
    background-size: 100%;
    .user-infor {
      padding: 54px 0 0 0;
      .avatar {
        width: 150px;
        height: 150px;
        margin: 0 auto 30px auto;
        background-color: #dfb77b;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 140px;
          height: 140px;
          border-radius: 100%;
        }
      }
      .family-infor {
        p.family-name {
          font-size: 30px;
          color: #dfb77b;
          i.detail-link {
            font-size: 22px;
            float: right;
            display: flex;
            align-items: center;
            i {
              font-size: 20px;
            }
          }
        }
        p.name {
          font-size: 44px;
          color: #dfb77b;
          font-weight: bold;
          margin: 5px 0 0px 0;
        }
        p.sex {
          font-size: 26px;
          color: #dfb77b;
          display: flex;
          align-items: center;
          margin: 8px 0 0 0;
          i {
            display: inline-block;
            width: 1px;
            height: 22px;
            margin: 0 20px;
          }
        }
        p.sex:last-child {
          margin-bottom: 25px;
        }
      }
    }
  }
  .user-title {
    width: 710px;
    height: 83px;
    margin: 0 auto;
    background-image: url(../../assets/images/title@2x.png);
    background-size: 100%;
    p {
      height: 83px;
      line-height: 82px;
      font-size: 30px;
      color: #ffeaca;
      padding: 0 0 0 60px;
    }
  }
  .dark-bg {
    background-image: url(../../assets/images/titleDarkBg.png);
  }
  .charts-wrap {
    height: 400px;
    .line-charts {
      margin: 10px 20px 0 0;
      padding: 0 20px 0 0;
    }
  }
  .chart-analysis-title {
    font-size: 30px;
    color: #8f6d3b;
    padding: 0px 50px 10px;
  }
  .chart-analysis {
    display: flex;
    padding: 0px 50px;
    margin: 25px 0 25px 0;
    .chart-analysis-deco {
      margin: 10px 20px 0 0;
      width: 20px;
      height: 20px;
      i {
        display: block;
        border: 5px solid #dfb77b;
        width: 8px;
        height: 8px;
        border-radius: 100%;
      }
    }
    .chart-analysis-detail {
      .analysis-title {
        font-size: 26px;
        color: #999;
        i {
          color: #1d2d33;
          font-style: normal;
        }
      }
      .analysis-focus {
        font-size: 26px;
        color: #1d2d33;
        line-height: 40px;
        margin: 20px 0 0;
      }
    }
  }
  .chart-analysis:last-child {
    padding-bottom: 20px;
  }
  .family-famous-person {
    margin: 0 60px;
    padding: 0 0 30px 0;
    .famous-person-item {
      margin: 0 0 20px 0;
      .famous-person-name {
        font-size: 38px;
        color: #8f6d3b;
        font-weight: bold;
        line-height: 68px;
        margin: 20px 0;
      }
      .famous-person-detail {
        font-size: 30px;
        color: #333;
        line-height: 48px;
      }
    }
  }
  .family-characteristic {
    margin: 0 60px;
    padding: 30px 0;
    p {
      font-size: 30px;
      color: #333;
      line-height: 48px;
    }
  }
  .population-distribute-wrap {
    background-color: #0e2a35;
    padding: 10px 50px;
    .population-distribute-desc {
      font-size: 30px;
      line-height: 48px;
      color: #d5c6ad;
      text-indent: 2em;
      padding: 20px 0 30px;
    }
    .population-distribute-detail {
      padding: 0 0 45px 0;
      .distribute-charts-title {
        font-size: 30px;
        color: #ffeaca;
        height: 78px;
        line-height: 78px;
        background-color: #0d3747;
        text-align: center;
      }
      .van-row {
        padding: 20px 30px 10px 30px;
        background-color: #07212b;
        .van-col--12 {
          margin: 20px 0;
          p {
            font-size: 26px;
            color: #e0a64d;
            margin: 0 0 10px;
          }
          i {
            display: inline-block;
            color: #a0dcf4;
            float: right;
          }
        }
      }
    }
  }
  .card-wrap {
    background-color: #fff;
    margin: 0 20px 20px 20px;
    overflow: hidden;
    .card-item {
      display: flex;
      padding: 0 50px 20px 50px;
      .item-images {
        margin: 0 26px 0 0;
        line-height: 80px;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .item-detail {
        width: 100%;
        .item-title {
          height: 80px;
          line-height: 80px;
          font-size: 30px;
          color: #999;
        }
        .item-desc {
          font-size: 30px;
          color: #333;
          .family-table-detail {
            margin: 30px 0px 0;
            display: flex;
            padding: 0 0 30px 0;
            .family-table-title {
              font-size: 26px;
              color: #999;
              i {
                color: #333;
              }
              i.van-icon-play {
                color: #fff;
                margin: 0 5px 0 0;
              }
            }
            .family-table-deco {
              display: flex;
              justify-content: center;
              position: relative;
              i {
                display: block;
                width: 18px;
                height: 18px;
                border: 5px solid #dfb77b;
                background-color: #fff;
                border-radius: 100%;
              }
              span {
                display: block;
                position: absolute;
                width: 2px;
                background-color: #e5e5e5;
                height: 75px;
                top: 30px;
              }
            }
            .family-table-height {
              span {
                height: 130px;
                top: 15px;
              }
            }
            .family-table-name {
              font-size: 30px;
              color: #333;
            }
            .family-table-rank {
              font-size: 26px;
              color: #999;
              i {
                color: #333;
              }
            }
            .dynasty-desc {
              background-color: #ececec;
              font-size: 30px;
              color: #333;
              height: 48px;
              line-height: 48px;
              margin: 10px 0 0 -10px;
              padding: 0 0 0 10px;
            }
          }
          .family-table-detail:last-child {
            .family-table-deco {
              span {
                height: 0;
              }
            }
          }
          .card-item-current {
            .family-table-title {
              color: #af823e;
              i {
                color: #af823e;
              }
              i.van-icon-play {
                color: #af823e;
              }
            }
            .family-table-name {
              color: #af823e;
            }
            .family-table-rank {
              color: #af823e;
              i {
                color: #af823e;
              }
            }
            .dynasty-desc {
              color: #af823e;
            }
          }
        }
        .family-table-more {
          display: block;
          font-size: 26px;
          color: #8b8d8d;
          text-align: center;
          i.van-icon-arrow-down {
            display: block;
            font-size: 30px;
            color: #dfb77b;
            font-weight: bold;
          }
        }
      }
    }
    i.space {
      display: block;
      height: 20px;
    }
  }
  .card-wrap:last-child {
    margin-bottom: 0;
  }
  .link-button {
    display: block;
    width: 709px;
    font-size: 30px;
    color: #fff;
    height: 100px;
    background-color: #414141;
    border-radius: 20px;
    margin: 0 20px;
  }
  .bottom-radius {
    padding: 0 0 10px 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .radius {
    border-radius: 20px;
  }
}
</style>