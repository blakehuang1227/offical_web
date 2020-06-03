<template>
  <main id="#skrollr-body">
    <section class="section1">
      <div class="block">
        <div class="section1-imgs-wrap">
          <img src="/images/home/section1-1.png" />
          <img src="/images/home/section1-2.png" style="margin-top:44px" />
          <img src="/images/home/section1-3.png" style="margin-top:24px" />
          <img src="/images/home/section1-4.png" />
          <img src="/images/home/section1-5.png" style="margin-top:44px" />
          <img src="/images/home/section1-6.png" />
        </div>
        <div class="flex-div">
          <div style="width:50%" class="coinAnimate">
            <div class="big-text">消費回饋最高 100%</div>
            <div class="big-text">享受超值的吃喝玩樂體驗</div>
            <div class="min-text">輕鬆消費、搖出回饋！</div>
          </div>
          <div style="width:50%"></div>
        </div>
      </div>
    </section>

    <section id="anchor" class="section2">
      <!-- <div class="block"> -->
      <div class="flex-div block">
        <div style="width:40%">
          <div class="big-text">消費回饋最高 100%</div>
          <div class="big-text">享受超值的吃喝玩樂體驗</div>
          <div class="min-text">輕鬆消費、搖出回饋！</div>
        </div>
        <div style="width:60%">
          <div
            class="box"
            data-anchor-target="#anchor"
            data-bottom-top="position: fixed; transform: translate(-50%,-60%); "
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
    </section>
    <section class="section3">
      <div class="section3-wrap block">
        <div style="height:13%;"></div>
        <div style="font-size:33px;height:13%;">合作店家 30種以上 種類最多</div>
        <div style="height:13%;">
          <img style="height:100px;width:100px" src="/images/home/categories-icon-sample.png" />
        </div>
        <div class="stores-wrap" style="height:50%; width:100%">
          <div v-for="store in stores" :key="store.id" style="width:25%">
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
  </main>
</template>

<script>
// import "aos/dist/aos.css";
export default {
  middleware: "routerAuth",
  meta: {
    requiresAuth: false
  },
  data() {
    return {
      coinStyles: {
        coin: true,
        coinAnimate: false
      },
      stores: []
    };
  },
  head() {
    return {};
  },
  created() {
    if (process.client) {
      var aos = require("aos");
      aos.init({
        duration: 1200
      });

      this.initData();
    }
  },
  mounted() {
    if (process.client) {
      var skrollr = require("skrollr");
      if (skrollr.init()) {
        console.log("destory skcrollr");
        skrollr.init().destroy();
      }
      skrollr.init();
    }

    window.addEventListener("scroll", () => {
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

      console.log("scrollTop:" + scrollTop);
      console.log("contentHeight:" + contentHeight);
      console.log("vh:" + vh);

      if (scrollTop + 200 > vh) {
        this.coinStyles.coinAnimate = true;
      } else if (scrollTop < 100) {
        this.coinStyles.coinAnimate = false;
      }
    });
  },
  methods: {
    initData() {
      for (let i = 1; i <= 12; i++) {
        this.stores.push({ name: "店家" + i, imgSrc: "", id: i });
      }
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
}

.section3 {
  background: url("/images/home/section3-bg.png");

  .section3-wrap {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    height: 90vh;

    .stores-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;

      .store-icon {
        width: 100px;
        height: 100px;
      }
    }
  }
}

.section4 {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
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

main {
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

section,
.box {
  padding: 2em 1em;
}

section p,
.box p {
  opacity: 0.7;
}
</style>
