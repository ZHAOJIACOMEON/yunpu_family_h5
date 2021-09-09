<template>
  <div class="wrap">
    <div class="search-wrap">
      <div class="search-content">
        <v-search-tab></v-search-tab>
      </div>
    </div>
		<div class="search-list">
    	<v-search-list></v-search-list>
		</div>
  </div>
</template>
<script>
import searchTab from "../components/searchTab.vue";
import searchList from "../components/searchList.vue";
export default {
  components: {
    "v-search-tab": searchTab,
    "v-search-list": searchList,
  },
};
</script>
<style lang="less" scoped>
.wrap {
  .search-wrap {
    height: 245px;
    padding: 425px 30px 0 0;
    background-image: url(../../assets/images/searchHomeBg.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: #0b1c27;
    .search-content {
      height: 165px;
      padding: 30px 50px 40px;
      background-color: rgba(11, 28, 39, 0.8);
    }
  }
	.search-list {
		padding: 20px;
		background-color: #EEE;
	}
}
</style>