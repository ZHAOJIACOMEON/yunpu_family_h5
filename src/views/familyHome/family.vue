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
            您未加入该家族<i class="detail-link">立即加入<van-icon name="arrow"
            /></i>
          </p>
          <p class="name">{{ familyDetailList.familyDetail.name }}</p>
					<p class="sex">总人数：{{ familyDetailList.familyDetail.total }}</p>
          <p class="sex">始祖：{{ familyDetailList.familyDetail.ancestorsName }}<i></i>世代：{{ familyDetailList.familyDetail.ancestorsGeneration }}代</p>
        </van-col>
      </van-row>
      <div class="user-title dark-bg">
        <p>家族介绍</p>
      </div>
    </div>
		<div class="card-wrap bottom-radius">
			<div class="card-item" v-for="(list, index) in familyDetailList.familyDetail.list" :key="index">
        <div class="item-detail">
          <p class="item-title">{{ list.title}}：</p>
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
          <p class="item-desc">{{ familyDetailList.familyDetail.familyMark }}</p>
        </div>
      </div>
			<div class="card-item">
        <div class="item-images">
          <img src="../../assets/images/addressIcon@2x.png" />
        </div>
        <div class="item-detail">
          <p class="item-title">字辈：</p>
          <p class="item-desc">2</p>
        </div>
      </div>
		</div>
	</div>
</template>
<script>
export default {
  name: "family",
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

      const res = this.$api.familyHome(params);

      if (res && res.code == 0 && res.success) {
        this.familyDetailList = res.data;
      } else {
      }
    }
	}
}
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
      color: #FFEACA;
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