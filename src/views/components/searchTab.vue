<template>
  <div class="search-tab-wrap">
    <van-row>
      <van-col
        span="12"
        :class="{ current: tabDataInit.tabIndex == '0' ? true : false }"
        @click="handleChangeTabIndexInfors('0')"
        ><i></i>查询家族成员</van-col
      >
      <van-col
        span="12"
        :class="{ current: tabDataInit.tabIndex == '1' ? true : false }"
        @click="handleChangeTabIndexInfors('1')"
        ><i></i>查询家族</van-col
      >
    </van-row>
    <van-search
      v-model="tabDataInit.searchValue"
      show-action
      left-icon=""
      background="#31607B"
      placeholder="请输入搜索关键词"
      @search="handleEnterSearchInfors"
    >
      <template #action>
        <div @click="handleButtonSearchInfors">搜索</div>
      </template>
    </van-search>
  </div>
</template>
<script>
export default {
  name: "searchTabContainer",
  data() {
    return {
      tabDataInit: {
        tabIndex: "0",
        searchValue: "",
      },
    };
  },
  created() {
    this.renderDataInitInfors();
  },
  methods: {
    renderDataInitInfors() {
      this.$set(this.tabDataInit, "tabIndex", this.tabData.tabIndex);
      this.$set(this.tabDataInit, "searchValue", this.tabData.searchValue);
    },
    //点击键盘上的搜索/回车按钮后触发
    handleEnterSearchInfors(val) {
      console.log(val);
    },
    //点击搜索触发
    handleButtonSearchInfors() {
      if (this.searchValue == "") {
        this.$toast({
          message: "请输入搜索关键词",
        });
      } else {
        this.$router.push({
          path: "/searchResult",
          query: {
            searchValue: this.tabDataInit.searchValue,
            tabIndex: this.tabDataInit.tabIndex,
          },
        });
      }
    },
    //切换tabIndex
    handleChangeTabIndexInfors(val) {
      this.tabDataInit.tabIndex = val;
    },
  },
  props: {
    tabData: {
      type: Object,
      default: () => ({
        tabIndex: "0",
        searchValue: "",
      }),
    },
  },
  watch: {
    $route() {
      this.$set(this.tabDataInit, "tabIndex", this.tabData.tabIndex);
      this.$set(this.tabDataInit, "searchValue", this.tabData.searchValue);
    },
  },
};
</script>
<style lang="less" scoped>
.search-tab-wrap {
  .van-row {
    margin: 0 0 30px 0;
    .van-col--12 {
      font-size: 30px;
      color: #625644;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      i {
        display: inline-block;
        width: 44px;
        height: 34px;
        background-repeat: no-repeat;
        background-size: 100%;
        margin: 0 25px 0 0;
      }
    }
    .current {
      color: #dfb77b;
    }
    .van-col--12:first-child {
      i {
        background-image: url(../../assets/images/searchFamilyMemberDefaultIcon@2x.png);
      }
    }
    .van-col--12:last-child {
      i {
        background-image: url(../../assets/images/searchFamilyDefaultIcon@2x.png);
      }
    }
    .van-col--12:first-child.current {
      i {
        background-image: url(../../assets/images/searchFamilyMemberActiveIcon@2x.png);
      }
    }
    .van-col--12:last-child.current {
      i {
        background-image: url(../../assets/images/searchFamilyActiveIcon@2x.png);
      }
    }
  }
  .van-search {
    border-radius: 20px;
    /deep/ .van-search__content {
      background-color: #31607b;
    }
    /deep/ input::-webkit-input-placeholder {
      color: #999;
    }
    /deep/ input::-moz-input-placeholder {
      color: #999;
    }
    /deep/ input::-ms-input-placeholder {
      color: #999;
    }
    /deep/ .van-field__control {
      color: #c28831;
    }
  }
  .van-search__action {
    background-image: radial-gradient(#d8ba79, #c28831);
    padding: 0 32px;
    margin: 0 20px 0 0;
    color: #1b2026;
    border-radius: 20px;
    div {
      font-size: 30px;
    }
  }
}
</style>