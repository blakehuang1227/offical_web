<template>
  <div id="#skrollr-body">
    <!-- <div class="svg-wrap">
      <svg width="132px" height="1012px" viewBox="0 0 132 1012">
        <path
          d="M60.0495,1 C93.5911783,137.734375 87.6927408,220.346354 38.3541992,248.835938 C-0.809171986,271.450066 -16.9687858,227.257813 23.6823242,227.257812 C64.3334342,227.257812 83.1354492,266.859375 47.3776367,324.632812 C11.6198242,382.40625 -5.19267585,446.585938 78.3620117,467.546875 C161.916699,488.507812 130.658887,418.890625 78.3620117,442.429688 C26.0651367,465.96875 29.0651367,601.929688 65.3620117,671.742188 C101.658887,741.554688 182.268262,913.351562 56.1026386,967.34375 C-0.64161078,991.627276 -0.669238346,924.46875 48.3541992,946.632812 C81.0364908,961.408854 90.71097,982.778646 77.3776367,1010.74219"
          class="path"
        />
      </svg>
      <div class="circle"></div>
    </div>-->

    <section class="section1">
      <div class="block">
        <div class="width-wrap">
          <div class="section1-imgs-wrap">
            <img src="/images/home/section1-1.png" />
            <img src="/images/home/section1-2.png" style="margin-top:44px" />
            <img src="/images/home/section1-3.png" style="margin-top:24px" />
            <img src="/images/home/section1-4.png" />
            <img src="/images/home/section1-5.png" style="margin-top:44px" />
            <img src="/images/home/section1-6.png" />
          </div>
        </div>
        <div class="width-wrap">
          <div class="flex-div">
            <div style="width:50%" class="coinAnimate">
              <div class="big-text">消費回饋最高 100%</div>
              <div class="big-text">享受超值的吃喝玩樂體驗</div>
              <div class="min-text">輕鬆消費、搖出回饋！</div>
            </div>
            <div style="width:50%">
              <div class="box mobile-img">
                <img class="mobile-img" src="@/assets/images/mobile.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="anchor" class="section2">
      <!-- <div class="block"> -->
      <div class="width-wrap">
        <div class="flex-div block">
          <div>
            <div class="big-text">消費回饋最高 100%</div>
            <div class="big-text">享受超值的吃喝玩樂體驗</div>
            <div class="min-text">輕鬆消費、搖出回饋！</div>
          </div>
          <div>
            <div
              class="box"
              :class="{'box-relative':isMobile}"
              data-anchor-target="#anchor"
              data-bottom-top="position: fixed; transform: translate(-50%,-20%); "
              data-top-top="position: absolute; transform: translate(-50%,-100%);  "
            >
              <img class="mobile-img" src="@/assets/images/mobile.png" />
            </div>
            <div class="coin-box">
              <div :class="coinStyles" id="coin1">
                <img style="width:160px" src="/images/home/coin-b.png" />
              </div>
              <div :class="coinStyles" id="coin2">
                <img style="width:80px" src="/images/home/coin-m.png" />
              </div>
              <div :class="coinStyles" id="coin3">
                <img style="width:80px" src="/images/home/coin-s.png" />
              </div>
              <div :class="coinStyles" id="coin4">
                <img style="width:40px" src="/images/home/coin-s.png" />
              </div>
              <div :class="coinStyles" id="coin5">
                <img style="width:40px" src="/images/home/coin-s.png" />
              </div>
              <div :class="coinStyles" id="coin6">
                <img style="width:140px" src="/images/home/coin-b.png" />
              </div>
              <div :class="coinStyles" id="coin7">
                <img style="width:140px" src="/images/home/coin-b.png" />
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </section>
    <section class="section3">
      <div class="section3-wrap block">
        <div style="height:13%;"></div>
        <div class="text1">合作店家 30種以上 種類最多</div>
        <!-- <div style="height:13%;"> -->
        <div class="carousel-wrap">
          <client-only>
            <slick ref="slick" :options="slickOptions" style="width:100%">
              <div>
                <img
                  style="max-height:100px;max-width:100px"
                  src="/images/home/categories-icon-sample.png"
                />
              </div>
              <div>
                <img
                  style="max-height:100px;max-width:100px"
                  src="/images/home/categories-icon-sample.png"
                />
              </div>
              <div>
                <img
                  style="max-height:100px;max-width:100px"
                  src="/images/home/categories-icon-sample.png"
                />
              </div>
              <div>
                <img
                  style="max-height:100px;max-width:100px"
                  src="/images/home/categories-icon-sample.png"
                />
              </div>
              <div>
                <img
                  style="max-height:100px;max-width:100px"
                  src="/images/home/categories-icon-sample.png"
                />
              </div>
            </slick>
          </client-only>
          <!-- </div> -->
        </div>
        <div class="stores-wrap">
          <div v-for="store in stores" :key="store.id">
            <div class="flex-div-col">
              <div class="store-icon">
                <img src />
              </div>
              <div style="height:22px;width:60px">{{store.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section4">
      <div class="block">
        <div>
          <img src="/images/home/section4-icon.png" />
        </div>
        <div class="text1">立刻下載 Maobc Pay</div>
        <div class="text2">享受超值的吃喝玩樂體驗</div>
        <div class="app-download">
          <img src="/images/home/apple-store.png" />
          <img src="/images/home/google-store.png" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "~/node_modules/slick-carousel/slick/slick.css";
import "~/node_modules/slick-carousel/slick/slick-theme.css";
// import Slick from "vue-slick";
// import "aos/dist/aos.css";
export default {
  layout: "default",

  components: {
    Slick: () => import("vue-slick")
  },
  beforeRouteLeave(to, from, next) {
    if (this.skrollr && this.skrollr.init()) {
      console.log("destory skrollr");
      this.skrollr.init().destroy();
    }
    next();
  },
  middleware: "routerAuth",
  meta: {
    requiresAuth: false
  },
  data() {
    return {
      isMobile: false,
      coinStyles: {
        coin: true,
        coinAnimate: false
      },
      skrollr: null,
      stores: [],
      slide: 0,
      sliding: null,
      slickOptions: {
        slidesToShow: 5,
        arrows: true,
        mobileFirst: true,
        infinite: true,
        variableWidth: true,
        // centerMode: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      }
    };
  },
  head() {
    return {};
  },
  created() {
    if (process.client) {
      // var aos = require("aos");
      // aos.init({
      //   duration: 1200
      // });

      this.initData();
    }
  },
  mounted() {
    if (process.client) {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (
        /iPad|iPhone|iPod/.test(userAgent) ||
        /windows phone/i.test(userAgent) ||
        /android/i.test(userAgent)
      ) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
      if (!this.isMobile) {
        this.skrollr = require("skrollr");
        if (this.skrollr.init()) {
          this.skrollr.init().destroy();
        }
        this.skrollr.init();
      }

      var slick = require("vue-slick");
    }
    // window.addEventListener("scroll", () => {
    //   this.positionElements();
    // });
    window.addEventListener("resize", () => {
      // pathPosition = path.getBoundingClientRect();
      // documentPosition = document.body.getBoundingClientRect();
      // this.positionElements();
    });

    window.addEventListener("scroll", () => {
      this.coinAnimate();
    });
  },
  methods: {
    initData() {
      for (let i = 1; i <= 12; i++) {
        this.stores.push({ name: "店家" + i, imgSrc: "", id: i });
      }
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    coinAnimate() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const contentHeight =
        Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        ) - window.innerHeight;

      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );

      // console.log("scrollTop:" + scrollTop);
      // console.log("contentHeight:" + contentHeight);
      // console.log("vh:" + vh);

      if (scrollTop + 200 > vh) {
        this.coinStyles.coinAnimate = true;
      } else if (scrollTop < 100) {
        this.coinStyles.coinAnimate = false;
      }
    },
    positionElements() {
      //   console.log("positionElements");
      //   const path = document.querySelector(".path");
      //   const circle = document.querySelector(".circle");
      //   let pathPosition = path.getBoundingClientRect();
      //   let documentPosition = document.body.getBoundingClientRect();
      //   const pathTotalLength = path.getTotalLength();
      //   // SVG passes center of screen
      //   const relativePageOffset =
      //     -pathPosition.top + (window.pageYOffset + window.innerHeight * 0.5);
      //   const pointPercentage = relativePageOffset / pathPosition.height;
      //   const pointOnPath = pointPercentage * pathTotalLength;
      //   const pathPoint = path.getPointAtLength(pointOnPath);
      //   circle.style.transform = `translate(
      // 	${pathPosition.left + pathPoint.x}px,
      // 	${pathPosition.top + pathPoint.y}px
      // )`;
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

.width-wrap {
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}

.coin-box {
  position: relative;
}
.coin {
  display: none;
}
.coinAnimate#coin1 {
  //   -webkit-animation: coinfly 2s ease, updown 2s infinite alternate;
  animation: coinfly1 2s ease alternate, updown 2s infinite alternate,
    flip 2s infinite linear;
  position: absolute;
  display: block;
  right: 100%;
  bottom: 70%;
}

.coinAnimate#coin2 {
  //   -webkit-animation: coinfly 2s ease, updown 2s infinite alternate;
  animation: coinfly2 2s ease alternate, updown 2s infinite alternate,
    flip 5s infinite linear;
  position: absolute;
  right: 80%;
  top: 10%;
  display: block;
}

.coinAnimate#coin3 {
  //   -webkit-animation: coinfly 2s ease, updown 2s infinite alternate;
  animation: coinfly3 2s ease, updown 2s infinite alternate,
    flip 1s infinite linear;
  position: absolute;
  left: -149px;
  top: 240px;
  display: block;
}

.coinAnimate#coin4 {
  //   -webkit-animation: coinfly 2s ease, updown 2s infinite alternate;
  animation: coinfly4 2s ease alternate, updown 2s infinite alternate,
    flip 6s infinite linear;
  position: absolute;
  left: -129px;
  top: 140px;
  display: block;
}

.coinAnimate#coin5 {
  //   -webkit-animation: coinfly 2s ease, updown 2s infinite alternate;
  animation: coinfly5 2s ease alternate, updown 2s infinite alternate,
    flip 3s infinite linear;
  position: absolute;
  left: 109px;
  top: -100px;
  display: block;
}

.coinAnimate#coin6 {
  //   -webkit-animation: coinfly 2s ease, updown 2s infinite alternate;
  animation: coinfly6 2s ease alternate, updown 2s infinite alternate,
    flip 2s infinite linear;
  position: absolute;
  left: 29px;
  top: 200px;
  display: block;
}

.coinAnimate#coin7 {
  //   -webkit-animation: coinfly 2s ease, updown 2s infinite alternate;
  animation: coinfly7 2s ease alternate, updown 2s infinite alternate,
    flip 4s infinite linear;
  position: absolute;
  left: -40px;
  top: 100px;
  display: block;
}

@keyframes coinfly7 {
  from {
    left: 201px;
    top: 0%;
  }
  to {
    left: -40px;
    top: 100px;
  }
}

@keyframes coinfly6 {
  from {
    left: 201px;
    top: 0%;
  }
  to {
    left: 29px;
    top: 200px;
  }
}

@keyframes coinfly5 {
  from {
    left: 201px;
    top: 0%;
  }
  to {
    left: 109px;
    top: -100px;
  }
}

@keyframes coinfly4 {
  from {
    left: 201px;
    top: 0%;
  }
  to {
    left: -129px;
    top: 140px;
  }
}

@keyframes coinfly3 {
  from {
    left: 201px;
    top: 0%;
  }
  to {
    left: -149px;
    top: 240px;
  }
}

@keyframes coinfly2 {
  0% {
    right: 60%;
    top: 0%;
  }

  100% {
    right: 80%;
    top: 90%;
  }
}

@keyframes coinfly1 {
  from {
    width: 160px;
    right: 60%;
    // top: 0%;
  }

  to {
    width: 160px;
    right: 100%;
    // bottom: 70%;
  }
}

@keyframes updown {
  0% {
    transform: none;
  }
  100% {
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }
}

// coin v1 start
@-webkit-keyframes flip {
  0% {
    -webkit-transform: rotate3d(1, 1, 0, 0deg);
    transform: rotateZ(0deg);
  }
  50% {
    -webkit-transform: rotate3d(1, 1, 0, 180deg);
    transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(-360deg);
    transform: rotateZ(-360deg);
  }
}
@keyframes flip {
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(-360deg);
    transform: rotateZ(-360deg);
  }
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.coin {
}

.flex-div {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 3%;
  margin-bottom: 5%;
  width: 90%;

  .coinAnimate {
    text-align: left;
  }
}
.flex-div-col {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;

  img {
    background: #c7c7c7;
    width: 100%;
    height: 100%;
  }
}
.mobile-img {
  height: 75vh;
}

.big-text {
  font-size: rem(66px);
}

.min-text {
  font-size: rem(44px);
}

.section1-imgs-wrap {
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  height: 60%;
  width: 90%;
  margin: 0 auto;
  margin-top: 5%;
  min-width: 1100px;
  img {
    width: 12%;
    height: 50vh;
  }
}

.section1 {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-direction: column;
}

.section2 {
  display: flex;
  justify-content: center;
  align-items: center;
  .width-wrap {
    width: 100%;

    .flex-div {
      > div:nth-child(1) {
        width: 40%;
        text-align: left;
      }

      > div:nth-child(2) {
        width: 60%;
      }
    }
  }
}

.section3 {
  padding: 0 50px;
  background: url("/images/home/section3-bg.png");
  .block {
  }
  .section3-wrap {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    height: 90vh;

    .text1 {
      font-size: rem(66px);
      height: 13%;
    }

    .stores-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;
      height: 50%;
      width: 100%;
      > div {
        width: 25%;
      }

      .store-icon {
        width: 100px;
        height: 100px;
      }
    }
  }

  .carousel-wrap {
    max-width: 920px;
    width: 100%;
    height: 150px;
    margin: 0 auto;
    div {
      width: 10%;
      // padding: 0 15px;
    }
    img {
      max-width: 300px;
      padding: 10px;
      // height: 300px;
    }
  }
}

.section4 {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  > div img {
    width: 70%;
    margin: 0 auto;
    display: block;
  }

  .app-download {
    display: flex;
    justify-content: center;
    align-content: center;

    img {
      max-width: 400px;
      //   max-height: 24px;
      width: 40%;
      padding: 0 2%;
    }
  }

  .text1 {
    font-size: rem(66px);
    font-weight: bold;
  }
  .text2 {
    font-size: rem(44px);
    margin: 0 0 30px 0;
  }
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  //   font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
  //     "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

body {
  overflow-x: hidden;
  width: 100%;
}

section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.start section:nth-of-type(even) {
  background: darkgrey;
}

.start section:nth-of-type(odd) {
  background: lightgrey;
}

.box {
  position: fixed;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 40vh;
  z-index: 66;
}

.box-relative {
  position: relative;
  top: 0;
}

section,
.box {
  padding: 2em 1em;
}

section p,
.box p {
  opacity: 0.7;
}

.circle {
  // position: absolute;
  // width: 2rem;
  // height: 2rem;
  // top: 10%;
  // left: -5%;
  // border-radius: 50%;
  // background: #000;

  position: absolute;
  width: 2rem;
  height: 2rem;
  top: -1rem;
  left: -1rem;
  border-radius: 50%;
  background: #000;
}

.svg-wrap {
  // left: 43%;
  // top: 110%;
  // width: 17%;
  // z-index: 66;
  // position: absolute;
  // height: 40%;
  svg {
    // position: absolute;
    // display: block;
    // left: 50%;
    // top: 50vh;
    // margin-bottom: 50vh;
    // overflow: visible;
    // transform: translateX(-50%);
    // height: 80%;
    // height: 50vh;

    position: absolute;
    display: block;
    left: 50%;
    top: 50vh;
    margin-bottom: 50vh;
    overflow: visible;
    transform: translateX(-50%);
  }

  path {
    fill: none;
    stroke: rgb(56, 56, 56);
    stroke-width: 2px;
  }
}

#skrollr-body {
  position: relative;
}

.section1 {
  .mobile-img {
    display: none;
  }
}

@media screen and (min-width: 100px) and (max-width: 560px) {
  .coin-box {
    display: none;
  }

  section {
    // height: auto;
    // min-height: auto;
    .flex-div {
      align-items: center;
    }
    .mobile-img {
      max-width: 100%;
      height: auto;
    }
  }
  .section1 {
    .block {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      // margin: auto;
      // height: 100%;
      // display: block;

      > div:nth-child(1) {
        align-items: flex-end;
      }
      > div:nth-child(2) {
        align-items: flex-start;
      }
    }

    .mobile-img {
      display: block;
    }

    .section1-imgs-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      width: auto;
      margin: 0 auto;
      margin-top: 5%;
      min-width: 900px;
      img {
        // width: 20%;
        width: 10%;
        height: auto;
        padding: 0 10px;
      }
    }
  }

  .section2 {
    .width-wrap {
      .flex-div {
        align-items: center;
        flex-direction: row-reverse;
        > div:nth-child(1),
        > div:nth-child(2) {
          width: 50%;
        }
      }
    }
  }
  .box {
    top: 0;
    left: 0;
    position: inherit !important;
    width: 100%;
    -webkit-transform: none !important;
    transform: none !important;
    img {
      max-height: 100%;
    }
  }

  .section3 {
    .section3-wrap {
      .stores-wrap {
        height: 20%;
        width: 100%;
        > div {
          // width: 20%;
        }

        .store-icon {
          // width: 100%;
          // height: 100%;
          width: 50px;
          height: 50px;
        }
      }
    }
  }

  // .section .block div.item-wrap {
  //   flex-direction: column;
  //   align-items: center;
  // }

  // .section .block .item-wrap > div {
  //   width: 80%;
  // }

  // section.section1 .block1 .item-wrap {
  //   flex-direction: column-reverse;

  //   .right-image {
  //     display: none;
  //   }
  // }

  // .section2 .block3 .round-row {
  //   width: 90%;
  // }
}
</style>
