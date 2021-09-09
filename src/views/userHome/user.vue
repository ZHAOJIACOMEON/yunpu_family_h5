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
            测试测试测试测<i class="detail-link" @click="handleFamilyInfor"
              >查看家族<van-icon name="arrow"
            /></i>
          </p>
          <p class="name">测试测</p>
          <p class="sex">男<i></i>排行：5</p>
        </van-col>
      </van-row>
      <div class="user-title">
        <p>个人信息</p>
      </div>
    </div>
    <div class="card-wrap bottom-radius">
      <div class="card-item">
        <div class="item-images">
          <img src="../../assets/images/customIcon@2x.png" />
        </div>
        <div class="item-detail">
          <p class="item-title">个人简介：</p>
          <p class="item-desc">
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          </p>
        </div>
      </div>
      <div class="card-item">
        <div class="item-images">
          <img src="../../assets/images/familyIcon@2x.png" />
        </div>
        <div class="item-detail">
          <p class="item-title">家庭情况：</p>
          <van-row
            class="item-list"
            gutter="20"
            v-for="(item, index) in familyDetailList.list"
            :key="index"
          >
            <van-col span="12" v-for="(list, i) in item.item" :key="i">
              <van-row class="item-li" gutter="5">
                <van-col span="12" class="item-name">
                  <a class="item-link" v-if="list.link != ''">{{
                    list.name
                  }}</a>
                  <p v-else>{{ list.name }}</p>
                </van-col>
                <van-col span="12" class="item-relation">
                  {{ list.relation }}
                </van-col>
              </van-row>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
    <div class="card-wrap radius">
      <div class="user-title dark-bg">
        <p>详细关系</p>
      </div>
      <div class="relation-wrap">
        <div
          class="relation-list"
          v-for="(list, index) in familyDetailList.relation"
          :key="index"
        >
          <div class="ui-column-1" v-for="(item, i) in list.list" :key="i">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="card-wrap radius">
      <div class="user-title">
        <p>家族信息</p>
      </div>
      <div class="family-detail-wrap">
        <p class="family-title">家族名称</p>
        <p class="family-title-name">
          {{ familyDetailList.familyDetail.name }}
        </p>
        <p class="family-detail">
          家族总人数<i class="family-total">{{
            familyDetailList.familyDetail.total
          }}</i
          ><a :href="familyDetailList.familyDetail.link"
            >点击查看详情<van-icon name="arrow"
          /></a>
        </p>
      </div>
      <div
        class="card-item"
        v-for="(list, index) in familyDetailList.familyDetail.list"
        :key="index"
      >
        <div class="item-images">
          <img :src="list.icon" />
        </div>
        <div class="item-detail">
          <p class="item-title">{{ list.title }}：</p>
          <p class="item-desc" v-html="list.name">{{ list.name }}</p>
        </div>
      </div>
      <i class="space"></i>
    </div>
    <div class="card-wrap radius">
      <div class="user-title">
        <p>世系表</p>
      </div>
      <van-row class="family-table">
        <van-col span="12"
          >所属支系: <i>{{ familyDetailList.relationTable.title }}</i></van-col
        >
        <van-col span="12"
          >所处世代: <i>{{ familyDetailList.relationTable.total }}</i></van-col
        >
      </van-row>
      <van-row
        class="family-table-detail"
        v-for="(list, index) in familyDetailList.relationTable.list"
        :key="index"
      >
        <van-col span="4" class="family-table-title"
          >世代： <i>{{ list.era }}</i></van-col
        >
        <van-col span="8" class="family-table-deco"
          ><i></i><span></span
        ></van-col>
        <van-col span="6" class="family-table-name">{{ list.name }}</van-col>
        <van-col span="6" class="family-table-rank"
          >排行： <i>{{ list.rank }}</i></van-col
        >
      </van-row>
    </div>
    <div class="card-wrap radius">
      <div class="user-title">
        <p>个人历程</p>
      </div>
      <div
        class="person-wrap"
        v-for="(list, index) in familyDetailList.person"
        :key="index"
      >
        <p class="person-title"><i></i>{{ list.time }}</p>
        <p class="person-detail">{{ list.detail }}</p>
      </div>
      <i class="space"></i>
    </div>
    <div class="card-wrap radius">
      <div class="user-title">
        <p>精选文章</p>
      </div>
      <v-article :articleList="familyDetailList.article"></v-article>
    </div>
    <div class="card-wrap radius">
      <div class="user-title">
        <p>相关书籍</p>
      </div>
      <v-book :dataList="familyDetailList.book"></v-book>
    </div>
    <div class="card-wrap radius">
      <div class="user-title">
        <p>相关图片/视频</p>
      </div>
      <van-row class="picture-wrap" gutter="35">
        <van-col
          span="8"
          class="picture-image"
          v-for="(list, index) in familyDetailList.picture"
          :key="index"
          ><img :src="list.images"
        /></van-col>
      </van-row>
    </div>
    <van-button class="link-button">关联此人</van-button>
  </div>
</template>
<script>
import book from "../components/book.vue";
import article from "../components/article.vue";
export default {
  components: {
    "v-book": book,
    "v-article": article,
  },
  name: "user",
  data() {
    return {
      familyDetailList: [],
    };
  },
  created() {
    this.renderPageInit();
  },
  methods: {
    renderPageInit() {
      let params = {};

      const res = this.$api.userHome(params);

      if (res && res.code == 0 && res.success) {
        this.familyDetailList = res.data;
      } else {
      }
    },
    handleFamilyInfor() {
      this.$router.push({ path: "/familyHome" });
    },
  },
};
</script>
<style lang="less" scoped>
.user-wrap {
  background-color: #e2e2e2;
  .user-head {
    height: 318px;
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
        }
        p.sex {
          font-size: 26px;
          color: #dfb77b;
          display: flex;
          align-items: center;
          i {
            display: inline-block;
            width: 1px;
            height: 22px;
            background-color: #dfb77b;
            margin: 0 20px;
          }
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
      color: #e2e2e2;
      padding: 0 0 0 60px;
    }
  }
  .dark-bg {
    background-image: url(../../assets/images/titleDarkBg.png);
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
        }
        .item-article {
          font-size: 30px;
          color: #333;
          text-indent: 2em;
          line-height: 52px;
          i {
            font-size: 30px;
            color: #a9762a;
          }
        }
        .item-list {
          border-bottom: 1px dashed #ccc;
          .item-li {
            height: 100px;
            line-height: 100px;
            .item-name {
              font-size: 30px;
            }
            .item-link {
              color: #a9762a;
              text-decoration: underline;
            }
            .item-relation {
              font-size: 20px;
              color: #999;
            }
          }
        }
        .item-list:last-child {
          border-bottom: none;
        }
      }
    }
    i.space {
      display: block;
      height: 20px;
    }
    .family-detail-wrap {
      height: 205px;
      margin: 35px 50px 20px;
      padding: 0 30px;
      background-image: url(../../assets/images/familyDetail@2x.png);
      background-repeat: no-repeat;
      background-size: 100%;
      .family-title {
        font-size: 22px;
        color: #999;
        margin: 0 0 15px 0;
        padding-top: 20px;
      }
      .family-title-name {
        font-size: 40px;
        font-weight: bold;
        color: #333;
        margin: 0 0 10px 0;
      }
      .family-detail {
        font-size: 22px;
        color: #999;
        i.family-total {
          font-size: 30px;
          font-weight: bold;
          color: #333;
          display: inline-block;
          margin: 0 0 0 30px;
        }
        a {
          font-size: 11px;
          color: #414141;
          float: right;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .card-wrap:last-child {
    margin-bottom: 0;
  }
  .family-table {
    height: 100px;
    margin: 30px 50px;
    padding: 0 30px;
    background-color: #ededed;
    display: flex;
    align-items: center;
    border-radius: 20px;
    .van-col {
      font-size: 30px;
      color: #999;
      i {
        font-size: 30px;
        color: #333;
      }
    }
    .van-col:nth-child(2) {
      text-align: center;
    }
  }
  .family-table-detail {
    margin: 30px 50px 0;
    display: flex;
    padding: 0 0 30px 0;
    .family-table-title {
      font-size: 26px;
      color: #999;
      i {
        color: #333;
      }
    }
    .family-table-deco {
      display: flex;
      align-items: center;
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
        top: 35px;
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
  }
  .family-table-detail:last-child {
    .family-table-deco {
      span {
        height: 0;
      }
    }
  }
  .person-wrap {
    padding: 20px 50px;
    .person-title {
      font-size: 50px;
      color: #dfb77b;
      display: flex;
      align-items: center;
      margin: 20px 0 20px 0;
      i {
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 5px solid #dfb77b;
        background-color: #fff;
        border-radius: 100%;
        margin-right: 10px;
      }
    }
    .person-detail {
      font-size: 30px;
      line-height: 50px;
      color: #333;
      text-indent: 2em;
    }
  }
  .picture-wrap {
    padding: 25px 55px;
    .picture-image {
      margin: 15px 0;
      img {
        display: block;
        width: 174px;
        height: 174px;
      }
    }
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
  .relation-wrap {
    padding: 10px 20px;
    background-color: #233d42;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    .relation-list {
      width: 100%;
      display: flex;
      justify-content: center;
      .ui-column-1 {
        width: 11%;
        height: 150px;
        font-size: 22px;
        color: #fff6e7;
        border-top: 1px solid #dfb77b;
        border-left: 1px solid #dfb77b;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .ui-column-1:last-child {
        border-right: 1px solid #dfb77b;
      }
    }
    .relation-list:nth-child(5),
    .relation-list:nth-child(6),
    .relation-list:nth-child(7),
    .relation-list:nth-child(8),
    .relation-list:nth-child(9) {
      .ui-column-1:first-child,
      .ui-column-1:last-child {
        border-bottom: 1px solid #dfb77b;
      }
    }
    .relation-list:first-child,
    .relation-list:nth-child(2),
    .relation-list:nth-child(3),
    .relation-list:nth-child(4),
    .relation-list:nth-child(6),
    .relation-list:nth-child(7),
    .relation-list:nth-child(8),
    .relation-list:nth-child(9) {
      .ui-column-1:first-child,
      .ui-column-1:last-child {
        background-color: #617954;
      }
    }
    .relation-list:nth-child(5) {
      .ui-column-1:nth-child(2),
      .ui-column-1:nth-child(8) {
        background-color: #617954;
      }
    }
    .relation-list:nth-child(2),
    .relation-list:nth-child(3),
    .relation-list:nth-child(7),
    .relation-list:nth-child(8) {
      .ui-column-1:nth-child(2),
      .ui-column-1:nth-child(4) {
        background-color: #a37151;
      }
    }
    .relation-list:nth-child(4),
    .relation-list:nth-child(6) {
      .ui-column-1:nth-child(2),
      .ui-column-1:nth-child(6) {
        background-color: #a37151;
      }
    }
    .relation-list:nth-child(5) {
      .ui-column-1:nth-child(3),
      .ui-column-1:nth-child(7) {
        background-color: #a37151;
      }
    }
    .relation-list:nth-child(5) {
      .ui-column-1:first-child,
      .ui-column-1:last-child {
        background-color: #949494;
      }
    }
    .relation-list:nth-child(3),
    .relation-list:nth-child(7) {
      .ui-column-1:nth-child(3) {
        background-color: #346c9d;
      }
    }
    .relation-list:nth-child(4),
    .relation-list:nth-child(6) {
      .ui-column-1:nth-child(3),
      .ui-column-1:nth-child(5) {
        background-color: #346c9d;
      }
    }
    .relation-list:nth-child(5) {
      .ui-column-1:nth-child(4),
      .ui-column-1:nth-child(6) {
        background-color: #346c9d;
      }
    }
    .relation-list:nth-child(4),
    .relation-list:nth-child(6) {
      .ui-column-1:nth-child(4) {
        background-color: #f1e156;
        color: #193e43;
      }
    }
    .relation-list:nth-child(5) {
      .ui-column-1:nth-child(5) {
        background-color: #f1e156;
        color: #193e43;
      }
    }
    .relation-list:first-child,
    .relation-list:last-child {
      background-image: url(../../assets/images/relationList@2x.png);
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
    }
    .relation-list:last-child {
      transform: rotate(180deg);
      .ui-column-1 {
        transform: rotate(180deg);
      }
    }
  }
}
</style>