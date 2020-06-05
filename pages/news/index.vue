<template>
  <div class>
    <div class="width-wrap">
      <div class="flex-wrap">
        <div
          class="news-card"
          v-for="(feed, idx) in feeds"
          :key="idx"
          @click="$router.push('/news/post')"
        >
          <div class="img-wrap">
            <img :src="feed.img" />
          </div>
          <div class="text-wrap">
            <div class="cate-name">{{feed.cateName}}</div>
            <div class="title">{{feed.title}}</div>
            <div class="date">{{feed.date}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feeds: []
    };
  },
  mounted() {
    for (var i = 0; i < 11; i++) {
      this.feeds.push({
        title:
          "標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題",
        img: "images/news/sample1.png",
        date: "2020/01/01",
        cateName: "分類名稱"
      });
    }
  }
};
</script>


<style scoped lang="scss">
@import "~/assets/font/font.css";
$base-font-size: 16px !default;
@function rem($target, $context: $base-font-size) {
  @if $target == 0 {
    @return 0;
  }
  @return ($target / $context) + 0rem;
}
.news-card {
  width: 460px;
  height: 420px;
  background: #fff;
  margin: 2% 0;
  cursor: pointer;

  .text-wrap {
    padding: 10px;
    height: calc(100% - 270px);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    .cate-name {
      color: #ffb219;
    }
    .title {
      font-weight: bold;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    }
    .date {
      color: #777777;
    }
  }

  .img-wrap {
    height: 270px;
    img {
      max-width: 460px;
      height: 270px;
      //   max-height: 100%;
      object-fit: cover;
      object-fit: scale-down;
    }
  }
}
.container {
  //   width: 100vw;
  min-height: 100vh;
  background: #eaeaeacc;
}

.flex-wrap {
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
.width-wrap {
  max-width: 960px;
  height: 100%;
  margin: auto;
  padding: 8% 0;
}
</style>
