<template>
  <div class="search-list-wrap">
    <div class="search-result">
      <p class="search-result-title"><i></i>我的家族<span>我的家族</span></p>
      <div class="search-result-my">
        <div class="result-item join">
          <div class="result-item-l">刘</div>
          <div class="result-item-r">
            <div class="result-family-name">家族名称</div>
            <div class="result-home-name">汶上秦氏</div>
            <div class="person-total">家族总人数<i>2245</i></div>
          </div>
        </div>
        <div class="result-item">
          <div class="result-item-l">李</div>
          <div class="result-item-r">
            <div class="result-family-name">家族名称</div>
            <div class="result-home-name">汶上测试秦氏</div>
            <div class="person-total">家族总人数<i>2245</i><a>查看</a></div>
          </div>
        </div>
      </div>
      <p class="search-result-title"><i></i>全部家族<span>支持家族信息查看和加入</span></p>
      <div class="search-result-all">
        <div class="result-item join">
          <div class="result-item-l">刘</div>
          <div class="result-item-r">
            <div class="result-family-name">家族名称</div>
            <div class="result-home-name">汶上秦氏</div>
            <div class="person-total">家族总人数<i>2245</i></div>
          </div>
        </div>
        <div class="result-item">
          <div class="result-item-l">李</div>
          <div class="result-item-r">
            <div class="result-family-name">家族名称</div>
            <div class="result-home-name">汶上测试秦氏</div>
            <div class="person-total">家族总人数<i>2245</i><a>查看</a></div>
          </div>
        </div>
      </div>
      <p class="search-result-title">
        <i></i>搜索结果<span>已找到 2 条记录</span>
      </p>
      <div class="result">
        <div class="result-item sex-male">
          <div class="result-item-l">
            <img src="https://img2.baidu.com/it/u=3850453184,3595007350&fm=26&fmt=auto&gp=0.jpg">
          </div>
          <div class="result-item-r">
            <div class="result-family-name">刘思<span>先生</span></div>
            <div class="result-home-name">所在家族：陕西秦氏<a>查看</a></div>
          </div>
        </div>
        <div class="result-item sex-female">
          <div class="result-item-l"><img src="https://img2.baidu.com/it/u=3850453184,3595007350&fm=26&fmt=auto&gp=0.jpg"></div>
          <div class="result-item-r">
            <div class="result-family-name">刘思<span>女士</span></div>
            <div class="result-home-name">所在家族：陕西秦氏<a>查看</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.search-list-wrap {
  .search-result {
    .search-result-title {
      font-size: 30px;
      color: #0f222e;
      margin: 0 0 30px 60px;
      i {
        width: 6px;
        height: 24px;
        display: inline-block;
        background-image: linear-gradient(#2786aa, #1d2d33);
        margin: 0 10px 0 0;
      }
      span {
        display: inline-block;
        font-size: 22px;
        color: #0f222e;
        margin: 0 0 0 20px;
      }
    }
    .search-result-my {
      margin: 0 0 50px 0;
      .result-item {
        padding: 30px 40px;
      }
    }
    .search-result-all {
      margin: 0 0 50px 0;
      .result-item {
        padding: 30px 40px;
      }
    }
    .result {
      margin: 0 0 50px 0;
      .result-item {
        display: flex;
        padding: 10px 40px;
        .result-item-l {
          width: 110px;
          height: 110px;
          background-color: #CFB58C;
          flex-shrink: 0;
          display: flex;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          img {
            display: block;
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }
        .result-item-r {
          .result-family-name{
            font-size: 44px;
            color: #FFEBC0;
            font-weight: bold;
            span {
              display: inline-block;
              font-size: 22px;
              color: #FFEBC0;
              margin: 0 0 0 20px;
            }
          }
          .result-home-name {
            font-size: 22px;
            color: #FFEBC0;
            margin: 5px 0;
            a {
              font-size: 26px;
              color: #FADDB0;
              float: right;
            }
          }
        }
      }
      .sex-male {
        background-image: url(../../assets/images/maleBg@2x.png);
      }
      .sex-female {
        background-image: url(../../assets/images/femaleBg@2x.png);
        .result-item-l {
          background-color: #CF998C;
        }
      }
    }
    .result-item {
      display: flex;
      height: 170px;
      background-image: url(../../assets/images/unJoinBg@2x.png);
      background-repeat: no-repeat;
      background-size: 100%;
      margin: 0 0 20px 0;
      align-items: center;
      .result-item-l {
        font-size: 96px;
        color: #faddb0;
        margin: 0 40px 0 0;
      }
      .result-item-r {
        width: 100%;
        .result-family-name {
          font-size: 22px;
          color: #dfb77b;
        }
        .result-home-name {
          font-size: 44px;
          font-weight: bold;
          color: #dfb77b;
          margin: 15px 0;
        }
        .person-total {
          font-size: 22px;
          color: #dfb77b;
          i {
            display: inline-block;
            font-size: 30px;
            color: #dfb77b;
          }
          a {
            font-size: 26px;
            color: #FADDB0;
            float: right;
          }
        }
      }
    }
    .join {
      background-image: url(../../assets/images/joinBg@2x.png);
    }
  }
}
</style>