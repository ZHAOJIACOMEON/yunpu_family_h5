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
    </div>
  </div>
</template>
<script>
import "echarts/lib/component/title";
export default {
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
          containLabel: false
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
    };
  },
  created() {
    this.renderPageInit();
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