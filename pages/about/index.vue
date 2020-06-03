<template>
  <div class="container">
    <section class="section1">
      <div class="block">
        <!-- <div class="width-wrap"> -->
        <div class="item-wrap">
          <div class="left-text">
            <div class="text1">
              讓天下沒有難開的店
              <br />創造消費無限可能
            </div>
            <div>
              <input class="join-us" type="buttom" value="加入我們" />
            </div>
          </div>

          <div class="right-image"></div>
        </div>
        <!-- </div> -->
      </div>
    </section>
    <section class="section2">
      <div class="block block1">
        <div class="width-wrap">
          <div class="item-wrap">
            <div class="left-text">
              <div class="text1">讓天下沒有難開的店</div>
              <div class="text2">
                我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，
                能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，
                能blablabla文字串我們深信透過 maobc 平台，能blablabla文
              </div>
            </div>

            <div class="right-image">
              <img src="images/about/section2-blcok1.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="block block2">
        <div class="width-wrap">
          <div class="item-wrap">
            <div class="left-text">
              <div class="text1">讓天下沒有難開的店</div>
              <div
                class="text2"
              >我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，能blablabla文字串我們深信透過 maobc 平台，</div>
            </div>

            <div class="right-image">
              <img src="images/about/section2-blcok2.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section3">
      <div class="block block1">
        <div class="width-wrap">
          <div>
            <div class="text1">產品與服務</div>
          </div>
          <div class="carousel-wrap">
            <client-only>
              <slick ref="slick" :options="slickOptions" style="width:100%">
                <div href="http://placehold.it/2000x1000">
                  <img src="images/about/sample-img.png" alt />
                </div>
                <div href="http://placehold.it/2000x1000">
                  <img src="images/about/sample-img.png" alt />
                </div>
                <div href="http://placehold.it/2000x1000">
                  <img src="images/about/sample-img.png" alt />
                </div>
                <div href="http://placehold.it/2000x1000">
                  <img src="images/about/sample-img.png" alt />
                </div>
                <div href="http://placehold.it/2000x1000">
                  <img src="images/about/sample-img.png" alt />
                </div>
              </slick>
            </client-only>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// if (process.client) {
//   require("vue-slick");
// }
// import Slick from "vue-slick";

import "~/node_modules/slick-carousel/slick/slick.css";
import "~/node_modules/slick-carousel/slick/slick-theme.css";
export default {
  components: {
    Slick: () => import("vue-slick")
    // Slick
  },
  mounted() {
    if (process.client) {
      var slick = require("vue-slick");
    }
    // this.$nextTick(function() {
    // this.slickComp = slick;
    // });
  },
  middleware: "routerAuth",
  meta: {
    requiresAuth: false
  },
  data() {
    return {
      slickComp: "",
      slide: 0,
      sliding: null,
      slickOptions: {
        slidesToShow: 3,
        arrows: true,
        mobileFirst: true,
        infinite: true,
        variableWidth: true,
        // centerMode: true,
        responsive: [
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  head() {
    return {
      title: "關於我們",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "關於我們", name: "關於我們", content: "關於我們" },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://maobc.com.tw/assets/img/index/bannerfb.jpg"
        },
        { hid: "og:title", property: "og:title", content: "關於白吃貓" }
      ]
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style scoped lang="scss">
$base-font-size: 16px !default;
@function rem($target, $context: $base-font-size) {
  @if $target == 0 {
    @return 0;
  }
  @return ($target / $context) + 0rem;
}

.text1 {
  font-size: rem(44px);
  width: 100%;
  line-height: 36px;
}
.text2 {
  font-size: rem(28px);
  width: 100%;
  line-height: 24px;
  padding: 5px 0;
  overflow: hidden;
}
.section[data-v-38de483b] {
  height: 200vh;
  width: 100vw;
  display: block;
}

.width-wrap {
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
}

section {
  height: 100vh;
  width: 100vw;
  display: block;
  > div {
    height: 100%;
  }
  .block {
    height: 55%;
    width: 100%;
    position: relative;
  }

  .block {
    .item-wrap {
      display: flex;
      justify-content: center;
      align-content: center;
      // width: 80%;
      height: 100%;
      margin: 0 auto;
      z-index: 2;
      padding: 3% 0;
      > div {
        width: 45%;
        padding: 0 2.5%;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }

    .left-text {
      display: flex;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-content: center;
      width: 50%;

      > div:nth-child(1) {
        font-size: rem(66px);
        line-height: 60px;
      }
    }
    .right-image {
      width: 50%;
    }
    .right-image > img {
      height: 80%;
      z-index: 66;
      object-fit: cover;
      object-fit: scale-down;
      width: 100%;
    }
  }
}

.section1 {
  background: url("/images/about/section1-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .block {
    height: 100%;
  }
  .text1 {
    color: white;
    text-align: center;
  }
  .join-us {
    background-color: #ffb219;
    color: white;
    min-width: 124px;
    min-height: 40px;
    padding: 3% 4%;
    border-radius: 8px;
    border: none;
    text-align: center;
  }
}

.section2 {
  height: 100vh;

  .block {
    height: 50%;
  }
  .width-wrap {
    .text1 {
      font-size: rem(44px);
      font-weight: bold;
    }
  }
  .block1 {
    background: linear-gradient(90deg, #ffd032 0.15%, #ffb219 100%);

    .item-wrap {
      flex-direction: row-reverse;
    }
  }
}

.section3 {
  height: 50vh;
  .block1 {
    background: linear-gradient(90deg, #ffd032 0.15%, #ffb219 100%);
    height: 100%;
    .width-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-content: center;
      max-width: 1024px;
      margin: 0 auto;
      height: 100%;
    }

    .item-wrap {
      flex-direction: row-reverse;
    }

    .text1 {
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
    }

    .carousel-wrap {
      max-width: 900px;
      width: 90%;
      height: 350px;
      margin: 0 auto;
      div {
        width: 10%;
      }
      img {
        max-width: 300px;
        // height: 300px;
        border: 1px solid #c5c5c5;
      }
    }
  }
}

.container {
  margin: 0;
  padding: 0;
  // min-height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
}

// .title {
//   font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
//     "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
//   display: block;
//   font-weight: 300;
//   font-size: 100px;
//   color: #35495e;
//   letter-spacing: 1px;
// }

// .subtitle {
//   font-weight: 300;
//   font-size: 42px;
//   color: #526488;
//   word-spacing: 5px;
//   padding-bottom: 15px;
// }

.links {
  padding-top: 15px;
}
</style>


<style>
.slick-prev:before,
.slick-next:before {
  color: black;
}
</style>
