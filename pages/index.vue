<template>
  <main class="container">
    <svg width="132px" height="1012px" viewBox="0 0 132 1012">
      <path
        d="M60.0495117,1 C93.5911783,137.734375 87.6927408,220.346354 38.3541992,248.835938 C-0.809171986,271.450066 -16.9687858,227.257813 23.6823242,227.257812 C64.3334342,227.257812 83.1354492,266.859375 47.3776367,324.632812 C11.6198242,382.40625 -5.19267585,446.585938 78.3620117,467.546875 C161.916699,488.507812 130.658887,418.890625 78.3620117,442.429688 C26.0651367,465.96875 29.0651367,601.929688 65.3620117,671.742188 C101.658887,741.554688 182.268262,913.351562 56.1026386,967.34375 C-0.64161078,991.627276 -0.669238346,924.46875 48.3541992,946.632812 C81.0364908,961.408854 90.71097,982.778646 77.3776367,1010.74219"
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
          <div>AAAA</div>
          <div>BBBBB</div>
          <div>CCCCCC</div>
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
      <h1>MMMMMMMMMM</h1>
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
      this.imgTranslate();
      // this.scrollRotation();
    }
  },
  data() {
    return {
      dilutedFrames: [2, 3, 8, 10, 11, 13, 19],
      finalFrames: [16, 6]
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
      let coin = this.$refs.coin;
      const target = Math.floor(Math.random() * 50);
      coin.classList.add("spinning");
      this.nextFrame(target, 0, 0);
    },
    // scroll時 去切換硬幣照片
    handleScroll() {
      var coin = this.$refs.coin;
      let newImageUrl = "";
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log("scrollTop:" + scrollTop);

      let img = ((scrollTop / 30) % 19) + 1;
      newImageUrl = `/images/coin/${Math.round(img)}.png`;
      coin.classList.add("spinning");

      coin.src = newImageUrl;
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
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);

      const path = document.querySelector(".path");
      const circle = document.querySelector(".circle");

      let pathPosition = path.getBoundingClientRect();
      let documentPosition = document.body.getBoundingClientRect();
      const pathTotalLength = path.getTotalLength();

      function positionElements() {
        // SVG passes center of screen
        const relativePageOffset =
          -pathPosition.top + (window.pageYOffset + window.innerHeight * 0.5);

        const pointPercentage = relativePageOffset / pathPosition.height;
        const pointOnPath = pointPercentage * pathTotalLength;
        const pathPoint = path.getPointAtLength(pointOnPath);

        circle.style.transform = `translate(
			${pathPosition.left + pathPoint.x}px,
			${pathPosition.top + pathPoint.y}px
		)`;
      }

      window.addEventListener("scroll", () => {
        positionElements();
      });

      window.addEventListener("resize", () => {
        pathPosition = path.getBoundingClientRect();
        documentPosition = document.body.getBoundingClientRect();

        positionElements();
      });

      positionElements();
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
}

#slide3 {
  background-image: url("~assets/images/sector3-bg.png");
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
