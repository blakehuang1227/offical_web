<template>
  <main class="container">
    <svg width="132px" height="1012px" viewBox="0 0 132 1012">
      <!-- <path
        d="M60.0495117,1 C93.5911783,137.734375 87.6927408,220.346354 38.3541992,248.835938 C-0.809171986,271.450066 -16.9687858,227.257813 23.6823242,227.257812 C64.3334342,227.257812 83.1354492,266.859375 47.3776367,324.632812 C11.6198242,382.40625 -5.19267585,446.585938 78.3620117,467.546875 C161.916699,488.507812 130.658887,418.890625 78.3620117,442.429688 C26.0651367,465.96875 29.0651367,601.929688 65.3620117,671.742188 C101.658887,741.554688 182.268262,913.351562 56.1026386,967.34375 C-0.64161078,991.627276 -0.669238346,924.46875 48.3541992,946.632812 C81.0364908,961.408854 90.71097,982.778646 77.3776367,1010.74219"
        class="path"
      />-->
      <!-- <path
        d="M60.049,1c33.542,136.734,51.93,180.706,2.591,209.195
	c-53.714,21.109,0.818,57.647,24.204,59.73c28.296,2.52,62.853,15.248,32.046,65.02C83.132,392.719-5.193,446.587,78.362,467.548
	s86.615,98.854,31.778,115.647c-40,12.25-9.547,57.188,26.75,127s37.915,182.758-88.25,236.75c3.058-1.309-45.229,53.484-27.5,61.5
	c24.489,11.071,32.5,20,56,40.801"
        class="path"
      />-->
      <path
        d="M60,25.583c33.542,136.733,51.931,180.706,2.592,209.194
	c-53.715,21.109,0.817,57.647,24.204,59.73c28.296,2.52,62.852,15.248,32.046,65.02c-35.759,57.773-124.083,111.643-40.528,132.604
	s86.615,98.854,31.778,115.646c-40,12.25-37.917,295.667-37.917,295.667l4.917,170.384L258.14,2899.446"
        class="path"
      />
    </svg>
    <img
      class="circle"
      id="coin"
      ref="coin"
      src="@/assets/images/coin/coin15.png"
      @click="flipCoin"
    />

    <section class="slide sticky" id="slide1">
      <div class="grid-1 center scroll-skew">
        <div class="col-1 col scroll-translate" data-offset="0.3">
          <div class="img-round" style="display: flex; justify-content: center;">
            <img class="img-round-1" src="@/assets/images/home_01_image1.png" />
          </div>
        </div>
        <div class="col-2 col">
          <div class="center-block">
            <div></div>
            <div class="slogan">
              <div>消費回饋最高100%</div>
              <div>享受超值&nbsp;吃喝玩樂體驗</div>
            </div>
            <div style="display: flex; position: relative; justify-content: center;">
              <img class="mobile-img" src="@/assets/images/mobile.png" />
            </div>
          </div>
        </div>
        <div class="col-3 col scroll-translate" data-offset="0.2">
          <div class="round-img-wrap">
            <div class="img-round">
              <img class="img-round-2" src="@/assets/images/home_01_image2.png" />
            </div>
            <div class="img-round bottom-round">
              <img class="img-round-3" src="@/assets/images/home_01_image3.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="slide sticky" id="slide2">
      <div>
        <div id="left">
          <div>回饋最高</div>
          <div class="percentage">100%</div>
          <div class="info">
            <div>使用maobc pay消費，就送您回饋紅包，</div>
            <div>每次紅包回饋%都不一樣，快來試試你的好手氣。</div>
          </div>
        </div>
        <div id="right">
          <div class="round-img-wrap">
            <div class="img-round bottom-round">
              <img class="img-round-3" src="@/assets/images/home_01_image3.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="slide sticky" id="slide3">
      <span class="title">
        <div>合作店家種類最多</div>
        <div>30+</div>
      </span>
      <div class="nav-wrap">
        <div class="nav1">
          <ul>
            <li class="nav-li">
              <a href="#">
                <div class="round-ball"></div>
              </a>
            </li>
            <li class="nav-li">
              <a href="#">
                <div class="round-ball"></div>
              </a>
            </li>
            <li class="nav-li">
              <a href="#">
                <div class="round-ball"></div>
              </a>
            </li>
            <li class="nav-li">
              <a href="#">
                <div class="round-ball"></div>
              </a>
            </li>
            <li class="nav-li">
              <a href="#">
                <div class="round-ball"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-wrap">
        <div class="nav2">
          <ul>
            <li class="nav-li">
              <a href="#">
                <div class="round-ball"></div>
              </a>
            </li>
            <li class="nav-li">
              <a href="#">
                <div class="round-ball"></div>
              </a>
            </li>
            <li class="nav-li">
              <a href="#">
                <div class="round-ball"></div>
              </a>
            </li>
            <li class="nav-li">
              <a href="#">
                <div class="round-ball"></div>
              </a>
            </li>
            <li class="nav-li">
              <a href="#">
                <div class="round-ball"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="slide sticky" id="slide4">
      <h1>TTTTTTTTTTTTTT</h1>
    </section>
  </main>
</template>

<script>
export default {
  components: {},
  mounted() {
    if (process.client) {
      // this.scrollRotation();
    }
  },
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
      previousTop: ""
    };
  },
  methods: {
    //錯誤效果
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
    // scrollRotation() {
    //   // const logo = document.getElementsByClassName("coin")[0];

    //   window.addEventListener("scroll", () => {
    //     const scrollTop =
    //       window.pageYOffset || document.documentElement.scrollTop;

    //     const contentHeight =
    //       Math.max(
    //         document.body.scrollHeight,
    //         document.body.offsetHeight,
    //         document.documentElement.clientHeight,
    //         document.documentElement.scrollHeight,
    //         document.documentElement.offsetHeight
    //       ) - window.innerHeight;

    //     const rounds = Math.floor(contentHeight / window.innerHeight);
    //     const progress = Math.floor((scrollTop / contentHeight) * 360) * rounds;

    //     // logo.style.transform = `rotate(${progress}deg)`;
    //   });
    // },
    nextFrame(target, frame, speed) {
      // console.log(
      //   "this.dilutedFrames.includes(frame):" +
      //     this.dilutedFrames.includes(frame)
      // );
      let coin = this.$refs.coin;
      if (speed < 20 + target && this.dilutedFrames.includes(frame)) {
        this.nextFrame(target, frame + 1, speed);
      } else if (speed > 60 + target && this.finalFrames.includes(frame)) {
        coin.src = `/images/coin/${frame}.png`;
        coin.classList.remove("spinning");
        coin.classList.add("finished");
      } else {
        coin.src = `/images/coin/${frame}.png`;
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
      let newImageUrl = "";
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log("scrollTop:" + scrollTop);

      let img = ((scrollTop / 30) % 19) + 1;
      newImageUrl = `/images/coin/${Math.round(img)}.png`;
      this.coin.classList.add("spinning");

      this.coin.src = newImageUrl;

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
    positionElements() {
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
  created() {},
  mounted() {
    if (process.client) {
      this.path = document.querySelector(".path");
      this.circle = document.querySelector(".circle");
      this.coin = document.querySelector("#coin");
      this.pathPosition = this.path.getBoundingClientRect();
      this.pathTotalLength = this.path.getTotalLength();
      this.documentPosition = document.body.getBoundingClientRect();

      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("scroll", this.positionElements);

      window.addEventListener("resize", () => {
        this.pathPosition = this.path.getBoundingClientRect();
        this.documentPosition = document.body.getBoundingClientRect();

        this.positionElements();
      });

      this.positionElements();
      this.imgTranslate();
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

#slide1 {
  z-index: 1;
  padding: 0 30px;
  background-image: url("~assets/images/home_01.png");
  -o-background-size: 100% auto;
  -webkit-background-size: 100% auto;
  -moz-background-size: 100% auto;
  background-size: 100% 50%;
  background-repeat: no-repeat;
  background-position: center top;

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

  .img-round-1 {
    max-width: 70%;
    max-height: 70%;
  }

  .img-round-2 {
    max-width: 45%;
    max-height: 45%;
  }

  .img-round-3 {
    max-width: 40%;
    max-height: 40%;
    /* top: 30%; */
    right: 20%;
  }

  .slogan {
    font-size: rem(52px);
    color: black;
    text-align: center;
    margin-bottom: 35px;
  }

  .col {
    /* margin: 0 auto; */
    width: 100%;
  }

  .col-1 {
    position: relative;

    > div {
      position: absolute;
      // transform: translate(0, -50%);
      top: 32%;
    }
  }

  .col-2 {
    position: relative;

    > div {
      position: absolute;
      // transform: translate(0, -50%);
      top: 15%;
    }
  }

  .col-3 {
    position: relative;

    > div {
      position: absolute;
      // transform: translate(0, -50%);
      top: 20%;
    }
  }

  .center-block {
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon-img {
      max-width: 132px;
      margin-bottom: 10px;
    }
    .mobile-img {
      max-width: 40%;
      height: auto;
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
}

@media screen and (min-width: 100px) and (max-width: 750px) {
  #slide1 {
    background-size: 100% auto;
  }
}

.grid-1 {
  display: grid;
  grid-template-columns: [line1] 33% [line2] 33% [end] 33%;
  height: 100%;
  width: 100%;
}

#slide2 {
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
}

#slide3 {
  background-image: url("~assets/images/sector3-bg.png");

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

#slide4 {
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
