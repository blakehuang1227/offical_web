<template>
  <main class id="#skrollr-body">
    <!-- <section class="slide slide-first">
      <p>This is the first section.</p>
    </section>

    <section id="anchor2">
      <p>I am number 4.</p>
      <div
        class="box"
        data-anchor-target="#anchor2"
        data-bottom-top="box-shadow: 0 1em 3em rgba(50,50,50,.5); position: fixed; background: rgb(160,220,220)"
        data-top-top="box-shadow: 0em 0em 0em rgba(50,50,50,.3);  position: absolute; background: rgb(230,255,255)"
      >
        <p>I am going to stick with section four.</p>
      </div>
    </section>
    <section>
      <p>Last is section five.</p>
    </section>-->
    <section class="slide sticky slide1">
      <div class="section1-imgs-wrap" data-aos="fade-in">
        <img src="/official_web/images/home/section1-1.png" />
        <img src="/official_web/images/home/section1-2.png" />
        <img src="/official_web/images/home/section1-3.png" />
        <img src="/official_web/images/home/section1-4.png" />
        <img src="/official_web/images/home/section1-5.png" />
        <img src="/official_web/images/home/section1-6.png" />
      </div>
    </section>
    <section class="slide sticky slide2">
      <div>
        <div id="left">
          <div>回饋最高</div>
          <div class="percentage">100%</div>
          <div class="info">
            <div>使用XXX pay消費，就送您回饋紅包，</div>
            <div>每次紅包回饋%都不一樣，快來試試你的好手氣。</div>
          </div>
        </div>
        <div id="right">
          <div style="display: flex; position: relative; justify-content: center;">
            <div
              data-anchor-target="#anchor"
              data-bottom-top="transform: translate(-25%,-80%); position: fixed;"
              data-top-top="transform: translate(-25%,-80%); position: absolute;"
            >
              <img class="mobile-img" src="@/assets/images/mobile.png" />
            </div>
            <img id="coin" ref="coin" class src="@/assets/images/coin/coin15.png" @click="flipCoin" />
          </div>
          <div class="round-img-wrap">
            <div class="img-round bottom-round">
              <img class="img-round-3" src="@/assets/images/home_01_image3.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="slide sticky slide3" id="anchor">
      <span class="title">
        <div>合作店家種類最多</div>
        <div>30+</div>
      </span>
    </section>
    <section class="slide sticky slide4">
      <h1>TTTTTTTTTTTTTT</h1>
    </section>
  </main>
</template>

<script>
import { page } from "vue-analytics";

export default {
  middleware: "routerAuth",
  meta: {
    requiresAuth: false
  },
  components: {},
  data() {
    return {
      dilutedFrames: [2, 3, 8, 10, 11, 13, 19],
      finalFrames: [16, 6],
      path: "",
      pathPosition: "",
      pathTotalLength: "",
      circle: "",
      documentPosition: "",
      coin: "",
      previousTop: "",
      currentPage: "1", //vue scroll to
      prevScrollpos: 0, //vue scroll to
      currentScrollPos: 0 //vue scroll to
    };
  },
  methods: {
    //錯位效果
    imgTranslate() {
      window.addEventListener("scroll", e => {
        let rate = window.pageYOffset,
          dataPercent = rate / document.body.clientHeight,
          targetsTranslate = document.querySelectorAll(".scroll-translate"),
          // targetsSkew = document.querySelectorAll(".scroll-skew"),
          targetsScale = document.querySelectorAll(".scroll-scale");
        [...targetsTranslate].map(t => {
          let dataOffset = t.dataset.offset;
          t.style.transform = `translateY(${rate * dataOffset}px)`;
        });
        // [...targetsSkew].map(t => {
        //   t.style.transform = `skew(${dataPercent * -60}deg, 0)`;
        // });
        [...targetsScale].map(t => {
          t.style.transform = `scale(${dataPercent}, 1)`;
        });
      });
    },
    scrollRotation() {
      // const logo = document.getElementsByClassName("coin")[0];

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

        const rounds = Math.floor(contentHeight / window.innerHeight);
        const progress = Math.floor((scrollTop / contentHeight) * 360) * rounds;

        // logo.style.transform = `rotate(${progress}deg)`;
      });
    },
    nextFrame(target, frame, speed) {
      // console.log(
      //   "this.dilutedFrames.includes(frame):" +
      //     this.dilutedFrames.includes(frame)
      // );
      let coin = this.$refs.coin;
      if (speed < 20 + target && this.dilutedFrames.includes(frame)) {
        this.nextFrame(target, frame + 1, speed);
      } else if (speed > 60 + target && this.finalFrames.includes(frame)) {
        coin.src = `/official_web/images/coin/${frame}.png`;
        coin.classList.remove("spinning");
        coin.classList.add("finished");
      } else {
        coin.src = `/official_web/images/coin/${frame}.png`;
        setTimeout(
          () => this.nextFrame(target, frame < 20 ? frame + 1 : 1, ++speed),
          speed
        );
      }
    },

    flipCoin() {
      const target = Math.floor(Math.random() * 50);
      this.coin.classList.add("spinning");
      this.nextFrame(target, 0, 0);
    },
    // scroll時 去切換硬幣照片
    handleScroll() {
      var coin = this.$refs.coin;
      // coin.classList.add("spinning");
      let newImageUrl = "";
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log("scrollTop:" + scrollTop);

      let img = ((scrollTop / 30) % 19) + 1;
      newImageUrl = `/official_web/images/coin/${Math.round(img)}.png`;
      console.log("img:" + Math.round(img));

      if (scrollTop < 260 && scrollTop > 0) {
        coin.className = "";
        coin.classList.add("active0");
      } else if (scrollTop >= 260 && scrollTop < 600) {
        coin.className = "";
        coin.classList.add("active1");
      } else if (scrollTop >= 600) {
        coin.className = "";
        coin.classList.add("active2");
      }

      coin.classList.remove("fuck");
      // if (scrollTop <= 100) {
      //   newImageUrl = `/official_web/images/coin/coin${16}.png`;
      // } else if (scrollTop > 100) {
      //   newImageUrl = `/official_web/images/coin/coin${15}.png`;
      // } else if (scrollTop > 200) {
      //   newImageUrl = `/official_web/images/coin/coin${6}.png`;
      // } else if (scrollTop > 300) {
      //   newImageUrl = `/official_web/images/coin/coin${20}.png`;
      // }

      let timer = null;
      clearTimeout(timer);
      // set a timer for 100 ms
      timer = setTimeout(() => {
        var coin = this.$refs.coin;
        // coin.classList.remove("spinning");
        // coin.classList.add("fuck");
        if (typeof scrolling === "function") {
          stopped.apply(this, arguments);
        }
      }, 100);

      coin.src = newImageUrl;

      //處理section3的圓形展開
      var lis = document.getElementsByClassName("nav-li");

      if (scrollTop > 1800 && this.previousTop < scrollTop) {
        Array.prototype.forEach.call(lis, function(el) {
          el.classList.add("active");
        });
      }

      // if (this.previousTop < scrollTop) {
      //   Array.prototype.forEach.call(lis, function(el) {
      //     el.classList.remove("active");
      //   });
      // }

      this.previousTop = scrollTop;
    },
    positionElementsSVG() {
      // SVG passes center of screen
      const relativePageOffset =
        -this.pathPosition.top +
        (window.pageYOffset + window.innerHeight * 0.5);

      const pointPercentage = relativePageOffset / this.pathPosition.height;
      const pointOnPath = pointPercentage * this.pathTotalLength;
      const pathPoint = this.path.getPointAtLength(pointOnPath);

      this.circle.style.transform = `translate(
			${this.pathPosition.left + pathPoint.x}px,
			${this.pathPosition.top + pathPoint.y}px
		)`;
    }
  },
  head() {
    return {
      title: "首頁",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "首頁", name: "首頁", content: "首頁" },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "http://www.tshikapisk.ca/wp-content/uploads/2018/09/home-builder-1.jpeg"
        },
        { hid: "og:title", property: "og:title", content: "後ㄇ母" }
      ]
    };
  },
  mounted() {
    // if (process.client) {
    if (process.browser) {
      // this.scrollRotation();
      this.path = document.querySelector(".path");
      this.circle = document.querySelector(".circle");
      this.coin = document.querySelector("#coin");
      // this.pathPosition = this.path.getBoundingClientRect();
      // this.pathTotalLength = this.path.getTotalLength();
      // this.documentPosition = document.body.getBoundingClientRect();

      // window.addEventListener("scroll", this.handleScroll); 硬幣

      // window.addEventListener("scroll", this.positionElementsSVG);

      // window.addEventListener("resize", () => {
      //   this.pathPosition = this.path.getBoundingClientRect();
      //   this.documentPosition = document.body.getBoundingClientRect();

      //   this.positionElementsSVG();
      // });

      // this.positionElementsSVG();
      // this.imgTranslate(); // 錯位笑果
    }

    if (process.client) {
      var skrollr = require("skrollr");
      skrollr.init();

      var aos = require("aos");
      aos.init();
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

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.container {
  /* height: 100vh; */
  font-family: Lora, serif;
  overflow-x: hidden;
}

.container::-webkit-scrollbar {
  display: none;
}

.slide {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.2em;
  color: white;
  background-size: cover;
  background-position: center;
}

.round-img-wrap {
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 250%;
  text-shadow: 0 2px 2px black;
}

.slide1 {
  .section1-imgs-wrap {
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    height: 50%;
    width: 90%;
    img {
      width: 140px;
    }
  }
}

// .slide1 {
//   z-index: 1;
//   padding: 0 30px;
//   background-image: url("~assets/official_web/images/home_01.png");
//   -o-background-size: 100% auto;
//   -webkit-background-size: 100% auto;
//   -moz-background-size: 100% auto;
//   background-size: 100% 50%;
//   background-repeat: no-repeat;
//   background-position: center top;

//   .img-round {
//     /* position: relative;
//   height: 0;
//   padding-bottom: 100%; */
//     /* overflow: hidden; */
//     border-radius: 50%;

//     > img {
//       /* position: absolute; */
//       width: 100%;
//       height: 100%;
//       /* object-fit: cover; */
//     }
//   }

//   .img-round.bottom-round {
//     bottom: 40%;
//     display: flex;
//     justify-content: space-evenly;
//   }

//   .img-round-1 {
//     max-width: 70%;
//     max-height: 70%;
//   }

//   .img-round-2 {
//     max-width: 45%;
//     max-height: 45%;
//   }

//   .img-round-3 {
//     max-width: 40%;
//     max-height: 40%;
//     /* top: 30%; */
//     right: 20%;
//   }

//   .slogan {
//     font-size: rem(52px);
//     color: black;
//     text-align: center;
//     margin-bottom: 35px;
//   }

//   .col {
//     /* margin: 0 auto; */
//     width: 100%;
//   }

//   .col-1 {
//     position: relative;

//     > div {
//       position: absolute;
//       // transform: translate(0, -50%);
//       top: 32%;
//     }
//   }

//   .col-2 {
//     position: relative;

//     > div {
//       position: absolute;
//       // transform: translate(0, -50%);
//       top: 15%;
//     }
//   }

//   .col-3 {
//     position: relative;

//     > div {
//       position: absolute;
//       // transform: translate(0, -50%);
//       top: 20%;
//     }
//   }

//   .center-block {
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     .icon-img {
//       max-width: 132px;
//       margin-bottom: 10px;
//     }
//     .mobile-img {
//       max-width: 40%;
//       height: auto;
//     }
//
//   }
// }

@media screen and (min-width: 100px) and (max-width: 750px) {
  .slide1 {
    background-size: 100% auto;
  }
}

.box {
  position: fixed;
  // top: 0%;
  // left: 50%;
  transform: translate(-25%, -80%);
  width: 30vw;
  // height: 40vh;
}

.grid-1 {
  display: grid;
  grid-template-columns: [line1] 33% [line2] 33% [end] 33%;
  height: 100%;
  width: 1024px;
}

.slide2 {
  /* background-image: url("https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"); */
  color: black;

  > div {
    display: flex;
    justify-content: center;
    width: 90%;
  }

  #left {
    font-size: rem(44px);
    width: 50%;
  }

  .round-img-wrap {
    display: flex;
    flex-direction: column;
  }

  .img-round {
    /* position: relative;
  height: 0;
  padding-bottom: 100%; */
    /* overflow: hidden; */
    border-radius: 50%;

    > img {
      /* position: absolute; */
      width: 100%;
      height: 100%;
      /* object-fit: cover; */
    }
  }

  .img-round.bottom-round {
    bottom: 40%;
    display: flex;
    justify-content: space-evenly;
  }

  .left > div:nth-child(1) {
    width: 144px;
    height: 42px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    color: #173042;
  }

  .percentage {
    width: 175px;
    height: 84px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 84px;
    color: #fcaf15;
  }

  .info {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 25px;
    color: #666666;
  }

  .coin {
    width: 5%;
    position: fixed;
    margin: 0 auto;
    display: block;
    z-index: 88;
    right: 40%;
    bottom: 30%;
  }

  #coin {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 5%;
    position: fixed;
    margin: 0 auto;
    display: block;
    z-index: 1000;
    // right: 40%;
    // bottom: 30%;
  }
  .spinning {
    -webkit-animation: flip 5s infinite linear;
    animation: flip 5s infinite linear;
  }
  .finished {
    -webkit-transform: rotateZ(-90deg);
    transform: rotateZ(-90deg);
  }
}

.slide3 {
  // background-image: url("~assets/official_web/images/sector3-bg.png");

  .nav-wrap {
    bottom: -17%;
    // position: relative;
    width: 70%;
    margin: 0 auto;
    display: black;

    position: absolute;
  }

  .nav-wrap {
    height: 1100px;
    width: 1100px;

    border: 2px solid white;
    border-radius: 50%;
    border-radius: 50%;
    // border: 1px solid white;
    // top: 20px;
    // right: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -550px;
  }

  .nav1 {
    height: 800px;
    width: 800px;

    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    // top: 20px;
    // right: 200px;
    ul {
      display: block;
      position: relative;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    ul li {
      width: 400px;
      line-height: 40px;
      position: absolute;
      box-sizing: content-box;

      //  right: 145px;
      top: 270px;
      transform-origin: 100% 50%;

      .round-ball {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        border: 3px solid #173042;
        // background: #ffffff;
        // opacity: 0.3;
        background: rgba(255, 237, 75, 0.3);
      }
    }
  }

  .nav2 {
    height: 1100px;
    width: 1100px;

    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    // top: 20px;
    // right: 200px;
    ul {
      display: block;
      position: relative;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    ul li {
      width: 550px;
      line-height: 60px;
      position: absolute;
      box-sizing: content-box;

      //  right: 145px;
      top: 450px;
      transform-origin: 100% 50%;

      .round-ball {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        border: 3px solid #173042;
        // background: #ffffff;
        // opacity: 0.3;
        background: rgba(255, 237, 75, 0.3);
      }
    }
  }

  ul li:first-child.active {
    -webkit-transform: rotate(3.5deg);
    transform: rotate(3.5deg);
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn;
    -webkit-animation-duration: 2.5s;
    animation-duration: 2.5s;
  }
  ul li:nth-child(2).active {
    -webkit-transform: rotate(45.5deg);
    transform: rotate(45.5deg);
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn;
    -webkit-animation-duration: 2.2s;
    animation-duration: 2.2s;
  }
  ul li:nth-child(2).active span {
    -webkit-transform: rotate(22.5deg);
    transform: rotate(22.5deg);
  }
  ul li:nth-child(3).active {
    -webkit-transform: rotate(90.5deg);
    transform: rotate(90.5deg);
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn;
    -webkit-animation-duration: 2.5s;
    animation-duration: 2.5s;
  }
  ul li:nth-child(3).active span {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  ul li:nth-child(4).active {
    -webkit-transform: rotate(135.5deg);
    transform: rotate(135.5deg);
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn;
    -webkit-animation-duration: 2.5s;
    animation-duration: 2.5s;
  }
  ul li:nth-child(4).active span {
    -webkit-transform: rotate(67.5deg);
    transform: rotate(67.5deg);
  }
  ul li:last-child.active {
    -webkit-transform: rotate(175deg);
    transform: rotate(175deg);
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn;
    -webkit-animation-duration: 2.5s;
    animation-duration: 2.5s;
  }
  ul li:last-child span {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  ul li a {
    color: #2d2d2d;
    font-size: 25px;
    text-decoration: none;
    -webkit-transition: 0.2s all ease-in-out;
    transition: 0.2s all ease-in-out;
  }
  ul li a:hover {
    font-size: 35px;
  }

  @-webkit-keyframes rotateIn {
    from {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }

  @keyframes rotateIn {
    from {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }

  .title {
    // float: right;
    // position: sticky;
    // top: 0;
    // right: 0;
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
  }
}

.slide4 {
  /* background-image: url("https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg"); */
}

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
  from {
    -webkit-transform: rotate(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateZ(-360deg);
    transform: rotateZ(-360deg);
  }
}

svg {
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
  stroke: #fff;
  stroke-width: 2px;
}

.circle {
  position: absolute;
  width: rem(150px);
  // height: 5rem;
  z-index: 999;
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

img.active0 {
  right: 40%;
  bottom: 30%;
  -webkit-animation: coin1 2s ease, updown 2s infinite alternate;
  animation: coin0 2s ease, updown 2s infinite alternate,
    flip 2s infinite linear;
}

img.active1 {
  right: 51%;
  bottom: 25%;
  -webkit-animation: coin1 2s ease, updown 2s infinite alternate;
  animation: coin1 2s ease, updown 2s infinite alternate,
    flip 2s infinite linear;
}
img.active2 {
  right: 46%;
  bottom: 35%;
  -webkit-animation: coin2 2s ease, updown 2s infinite alternate;
  animation: coin2 2s ease, updown 2s infinite alternate,
    flip 5s infinite linear;
}

img.active3 {
  left: 28%;
  top: 58%;
  -webkit-animation: coin3 2s ease, updown 2s infinite alternate;
  animation: coin3 2s ease, updown 2s infinite alternate;
}

@keyframes coin0 {
  0% {
    right: 51%;
    bottom: 25%;
  }

  100% {
    right: 40%;
    bottom: 30%;
  }
}
@keyframes coin1 {
  0% {
    right: 40%;
    bottom: 30%;
  }
  100% {
    right: 51%;
    bottom: 25%;
  }
}
@keyframes coin2 {
  0% {
    right: 51%;
    bottom: 25%;
  }
  100% {
    right: 46%;
    bottom: 35%;
  }
}

@keyframes coin0-reverse {
  0% {
    right: 51%;
    bottom: 25%;
  }

  100% {
    right: 40%;
    bottom: 30%;
  }
}
@keyframes coin1-reverse {
  0% {
    right: 40%;
    bottom: 30%;
  }
  100% {
    right: 51%;
    bottom: 25%;
  }
}
@keyframes coin2-reverse {
  0% {
    right: 51%;
    bottom: 25%;
  }
  100% {
    right: 46%;
    bottom: 35%;
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
// coin v1 end

/* package帶來的 */
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
</style>
