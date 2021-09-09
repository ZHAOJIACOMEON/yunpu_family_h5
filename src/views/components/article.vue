<template>
  <div class="article-wrap">
    <div
      class="article"
      v-for="(list, index) in articleList"
      :key="index"
    >
      <p class="article-title">{{ list.title }}</p>
      <p class="article-publish-time">发布时间：{{ list.time }}</p>
      <p class="article-detail">{{ list.outline }}</p>
      <p class="article-link"><a :href="list.link">阅读</a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "articleContainer",
  data() {
    return {
      
    }
  },
  props: {
    articleList: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="less" scoped>
.article-wrap {
  padding: 0 70px;
  .article {
    margin: 30px 0 20px;
    border-bottom: 2px dashed #e5e5e5;
    .article-title {
      font-size: 40px;
      color: #333;
      margin: 0 0 20px 0;
    }
    .article-publish-time {
      font-size: 22px;
      color: #999;
      margin: 0 0 20px 0;
    }
    .article-detail {
      font-size: 26px;
      color: #333;
      margin: 0 0 20px 0;
    }
    .article-link a {
      display: block;
      font-size: 26px;
      color: #197ce0;
      margin: 0 0 30px 0;
      text-align: right;
      text-decoration: underline;
    }
  }
  .article:last-child {
    border-bottom: none;
  }
}
</style>