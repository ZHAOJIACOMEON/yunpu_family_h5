<template>
  <div class="book-wrap">
    <van-row
      class="book"
      gutter="30"
      v-for="(list, index) in dataList"
      :key="index"
    >
      <van-col span="4" class="book-image"
        ><img :src="list.images"
      /></van-col>
      <van-col span="20" class="book-detail">
        <p class="book-name">{{ list.name }}</p>
        <p class="book-writer">
          作者：<i v-for="(item, i) in list.writer" :key="i">{{ item }}</i
          ><a :href="list.link">阅读</a>
        </p>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: "bookContainer",
  data() {
    return {
      
    }
  },
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="less" scoped>
.book-wrap {
  padding: 0 60px;
  .book {
    padding: 40px 0;
    border-bottom: 2px dashed #e5e5e5;
    .book-image {
      img {
        width: 95px;
        height: 95px;
      }
    }
    .book-detail {
      .book-name {
        font-size: 40px;
        color: #333;
        margin: 0 0 5px 0;
      }
      .book-writer {
        font-size: 26px;
        color: #333;
        padding: 0 0 0 15px;
        i {
          display: inline-block;
          margin: 0 10px 0 0;
        }
        a {
          float: right;
          display: inline-block;
          font-size: 26px;
          color: #197ce0;
          text-decoration: underline;
        }
      }
    }
  }
  .book:last-child {
    border-bottom: none;
  }
}
</style>