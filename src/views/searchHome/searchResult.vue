<template>
<div>
  <div class="search-result-wrap">
    <v-search-tab :tabData="tabData"></v-search-tab>
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
  data() {
    return {
      tabData: {},
    };
  },
  created() {
    this.$set(this.tabData, "tabIndex", this.$route.query.tabIndex);
    this.$set(this.tabData, "searchValue", this.$route.query.searchValue);
  },
  components: {
    "v-search-tab": searchTab,
    "v-search-list": searchList
  },
  watch: {
    $route() {
      this.$set(this.tabData, "tabIndex", this.$route.query.tabIndex);
      this.$set(this.tabData, "searchValue", this.$route.query.searchValue);
    },
  },
};
</script>
<style lang="less" scoped>
.search-result-wrap {
  background-color: #0b1c27;
  padding: 30px 50px 40px;
}
.search-list {
  padding: 20px;
  background-color: #EEE;
}
</style>