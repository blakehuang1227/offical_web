<template>
  <div id="store">
    <section class="section section1">
      <div>
        <div class="block1 block">
          <div class="item-wrap">
            <img class="left-bg" src="/images/store/block1-bg2.png" />
            <img class="left-bg2" src="/images/store/block1-bg3.png" />
            <div class="left-text">
              <div class="text1">
                頭家&nbsp;&nbsp;你們的痛我們懂
                <br />新時代&nbsp;&nbsp;我們一起打拼
              </div>
              <div class="text2">從線上行銷到訂單管理，一手掌握所有店內大小事。</div>
              <div class="text3">
                <div class="link-wrap">
                  <div class="link" v-scroll-to="'#anchor1'">品牌行銷</div>
                  <div class="link" v-scroll-to="'#anchor2'">共享流量</div>
                  <div class="link" v-scroll-to="'#anchor3'">M—POS點餐</div>
                </div>
                <div class="link-wrap">
                  <div class="link" v-scroll-to="'#anchor4'">營銷管理</div>
                  <div class="link" v-scroll-to="'#anchor5'">專業顧問服務</div>
                  <div class="link" v-scroll-to="'#anchor6'">免費諮詢</div>
                </div>
              </div>
            </div>
            <div class="right-image"></div>
          </div>
        </div>
        <div class="block2 block" id="anchor1">
          <img class="right-bg" src="/images/store/block2-bg2.png" />
          <img class="right-bg2" src="/images/store/block2-bg3.png" />
          <img class="right-bg3" src="/images/store/block2-bg4.png" />
          <div class="item-wrap">
            <div class="left-text">
              <div class="yellow-title">品牌行銷</div>
              <div class="text1">線上專屬店舖</div>
              <div class="text2">從線上行銷到訂單管理，一手掌握所有店內大小事從線上行銷到訂單管理，一手掌握所有店內大小事從線上行銷到訂單管理，一手掌握所有店內大小事。</div>
            </div>
            <div class="right-image">
              <img src="/images/store/section1-block2-mobile.png" />
            </div>
          </div>
        </div>
        <div class="block3 block" id="anchor2">
          <img class="left-bg" src="/images/store/block3-bg1.png" />
          <div class="item-wrap">
            <div class="left-text">
              <div class="yellow-title">共享平台流量</div>
              <div class="text1">新客、熟客一把罩</div>
              <div class="text2">從線上行銷到訂單管理，一手掌握所有店內大小事從線上行銷到訂單管理，一手掌握所有店內大小事從線上行銷到訂單管理，一手掌握所有店內大小事。</div>
            </div>
            <div class="right-image">
              <img src="/images/store/share-customers.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section2" id="anchor3">
      <div>
        <div class="block1 block">
          <div class="item-wrap">
            <div>
              <div class="yellow-title">營銷管理</div>
              <div class="text1">輕鬆掌控店內大小事</div>
              <div class="text2">從線上行銷到訂單管理，一手掌握所有店內大小事從線上行銷到訂單管理，一手掌握所有店內大小事從線上行銷到訂單管理，一手掌握所有店內大小事。</div>
            </div>
            <div class="right-image">
              <div class="carousel-wrap">
                <client-only>
                  <slick ref="slick" :options="slickOptions" style="width:100%">
                    <div>
                      <img src="/images/store/section2-block2-mobile1.png" />
                    </div>
                    <div>
                      <img src="/images/store/section2-block2-mobile2.png" />
                    </div>
                    <div>
                      <img src="/images/store/section2-block2-mobile3.png" />
                    </div>
                  </slick>
                </client-only>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="block2 block" id="ancho4r">
          <div class="item-wrap">
            <div class="left-text">
              <div class="yellow-title">完善的點餐系統</div>
              <div class="text1">POS、線上多人點餐</div>
              <div class="text2">從線上行銷到訂單管理，一手掌握所有店內大小事從線上行銷到訂單管理，一手掌握所有店內大小事從線上行銷到訂單管理，一手掌握所有店內大小事。</div>
              <div class="input-wrap">
                <input type="button" class="more" value="了解更多" />
              </div>
            </div>
            <div class="right-image">
              <img src="/images/store/devices.png" />
            </div>
          </div>
        </div>
        <div class="block3 block" id="anchor5">
          <div class="text1">
            從此開始
            <br />讓天下沒有難開的店
          </div>
          <div class="text2">
            幫助您從線上行銷推廣到訂單管理，一手掌握所有店內大小事、
            <br />提升店內效益。
          </div>
          <div>
            <div class="round-row">
              <div>
                <div class="img-wrap">
                  <img src="/images/store/section2-block2-icon1.png" />
                </div>
                <div class="text">
                  <font-awesome-icon :icon="['fas', 'check-circle']" />創造顧客回饋
                </div>
              </div>
              <div>
                <div class="img-wrap">
                  <img src="/images/store/section2-block2-icon2.png" />
                </div>
                <div class="text">
                  <font-awesome-icon :icon="['fas', 'check-circle']" />創造顧客回饋
                </div>
              </div>
              <div>
                <div class="img-wrap">
                  <img src="/images/store/section2-block2-icon3.png" />
                </div>
                <div class="text">
                  <font-awesome-icon :icon="['fas', 'check-circle']" />創造顧客回饋
                </div>
              </div>
              <div>
                <div class="img-wrap">
                  <img src="/images/store/section2-block2-icon4.png" />
                </div>
                <div class="text">
                  <font-awesome-icon :icon="['fas', 'check-circle']" />創造顧客回饋
                </div>
              </div>
              <div>
                <div class="img-wrap">
                  <img src="/images/store/section2-block2-icon5.png" />
                </div>
                <div class="text">
                  <font-awesome-icon :icon="['fas', 'check-circle']" />創造顧客回饋
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <service id="anchor6"></service>
    <!-- <h1 class="title">Store</h1>
    <h2 class="subtitle"></h2>
    <div class="links">
      <a @click="fireGA('點擊商品A', 500)" class="button--green">A</a>
      <a @click="fireGA('點擊商品G', 200)" class="button--green">G</a>
      <a class="button--green">C</a>
    </div>-->
  </div>
</template>

<script>
import service from "~/components/service";
import "~/node_modules/slick-carousel/slick/slick.css";
import "~/node_modules/slick-carousel/slick/slick-theme.css";
export default {
  middleware: "routerAuth",
  meta: {
    requiresAuth: false
  },
  components: {
    service,
    Slick: () => import("vue-slick")
  },
  head() {
    return {
      title: "店家資訊",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "店家資訊", name: "店家資訊", content: "店家資訊" }
      ]
    };
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        mobileFirst: true,
        infinite: false,
        variableWidth: true,
        arrows: false,
        dots: true
        // centerMode: true,
        // responsive: [
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2
        //     }
        //   },
        //   {
        //     breakpoint: 320,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       arrows: true
        //     }
        //   }
        // ]
      }
    };
  },
  mounted() {
    // this.$ga.event("storePage", "enter", "label", 123);
  },
  methods: {
    fireGA(event, value) {
      this.$gtm.trackEvent({
        event: event, // 對應GTM觸發事件名稱
        category: "product", //對應GTM類別名稱  再GA顯示會以此分類
        action: "click",
        label: event,
        value: value
        // noninteraction: false // Optional
      });
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
  @return ($target / $context) - 0rem;
}

* {
  // text-align: left;
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
}
.item-wrap {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  z-index: 2;
  padding: 3% 0;
  max-width: 950px;
  > div {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
  }
}

.left-text {
  text-align: left;
}

.yellow-title {
  color: #ffaa00;
  font-size: rem(55px);
  width: 100%;
}

.section {
  height: 200vh;
  // width: 100vw;
  display: block;
  > div {
    height: 100%;
  }
  .block {
    height: 33%;
    width: 100%;
    position: relative;
  }

  .block {
    .item-wrap {
      display: flex;
      justify-content: center;
      align-content: center;
      width: 80%;
      height: 100%;
      margin: 0 auto;
      z-index: 2;
      padding: 3% 0;
      > div {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }

    .left-text {
      display: flex;
      flex-direction: column;
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
      height: 100%;
      z-index: 66;
      object-fit: cover;
      object-fit: scale-down;
      width: 100%;
    }
  }
}

.block2 {
  .item-wrap {
    flex-direction: row-reverse;
  }
  .left-bg {
    left: 0;
    width: 50%;
    position: absolute;
    z-index: -1;
    top: calc(100% - 80%);
  }
  .right-bg {
    // left: 0;
    right: 0;
    top: 25%;
    width: 25%;
    position: absolute;
    z-index: -1;
  }
  .right-bg2 {
    width: 5%;
    top: 20%;
    right: 11%;
    position: absolute;
    z-index: -1;
  }
  .right-bg3 {
    width: 8%;
    bottom: -25%;
    right: 11%;
    position: absolute;
    z-index: -1;
  }
}

.block3 {
  .left-bg {
    left: 0;
    bottom: -15%;
    width: 22%;
    position: absolute;
    z-index: -1;
  }

  .right-image {
    height: 100%;
  }
}

.section1 {
  height: 200vh;
  .block1 {
    background-image: url(/images/store/section1-block1-bg.png);
    background-size: cover;
    height: 100vh;

    .item-wrap {
      position: relative;
    }
    .left-bg {
      left: -10%;
      top: 25%;
      width: 28%;
      position: absolute;
      // z-index: 1;
    }
    .left-bg2 {
      left: -12%;
      top: 37%;
      width: 8%;
      position: absolute;
    }

    .item-wrap {
      .left-text {
        z-index: 5;
        .text1 {
          font-weight: bold;
          color: #44423e;
          letter-spacing: 2.85714px;
        }

        .text3 {
          width: 100%;
          margin-top: 40px;
        }
      }
    }

    .link-wrap {
      display: flex;
      // flex-wrap: wrap;
      // justify-content: center;
      // width: 90%;
      .link {
        margin: 1% 2% 1% 0%;
        border-radius: 8px;
        font-size: rem(30px);
        justify-content: center;
        align-items: center;
        display: flex;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        letter-spacing: 1.71px;
        padding: 3% 3%;
        margin: 1%;
        min-width: 100px;
        font-size: 1.5625rem;
        max-height: 81px;
        cursor: pointer;
        box-shadow: 1px 1px 20px -10px rgba(0, 0, 0, 1);
        color: #44423e;
      }
    }
  }
  .block2 {
    height: 50vh;
  }
  .block3 {
    height: 50vh;
  }
}

.section2 {
  .item-wrap {
    flex-direction: row-reverse;
  }

  .carousel-wrap {
    width: 100%;
  }

  .slick-slide {
    img {
      width: 50%;
      height: 100%;
    }
  }

  .block1 {
    background: url("/images/store/section2-block1-bg.png");
    background-size: cover;
    display: flex;
    width: 100%;

    .item-wrap {
      width: 80%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: row;

      > div:nth-child(1) {
        width: 55%;
        height: 50%;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #fff;
        padding: 5%;
        text-align: left;

        .text1 {
          font-size: rem(33px);
        }
      }
      > div:nth-child(2) {
        width: 45%;
        height: 100%;
      }
    }
  }

  .block2 {
    background-color: #fffaf0;

    .more {
      background-color: #ffb219;
      color: white;
      min-width: 124px;
      min-height: 40px;
      padding: 3% 4%;
      border-radius: 8px;
      border: none;
    }

    div.left-text {
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      height: 60%;
      align-self: center;
      justify-content: space-evenly;

      // .text1 {
      //   font-size: rem(33px);
      // }

      // .text2 {
      //   font-size: rem(22px);
      // }
      div {
        width: 100%;
        padding: 1% 5%;
        text-align: left;
      }
    }
  }

  .block3 {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;

    .title1 {
      font-size: rem(44px);
    }

    .img-wrap > img {
      width: 50%;
      max-height: 88px;
    }

    .round-row {
      display: flex;
      justify-content: center;
      align-content: center;
      width: 70%;
      margin: 7% auto;
      font-size: rem(28px);

      > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .fa-check-circle {
        color: #ffaa00;
        margin: 0 3px;
      }

      .text {
        margin-top: 30px;

        svg {
          font-size: rem(30px);
        }
      }
    }
  }
}

.section3 {
  height: 100vh;
  .block1 {
    height: 55%;
    background: url("/images/store/section3-block1-bg.png");
    background-size: cover;
    min-width: 100%;

    .item-wrap {
      width: 70%;
    }

    div.left-text {
      color: white;
      text-align: left;
      align-items: flex-start;
    }

    .border-text {
      border: 2px solid #fff;
      border-radius: 4px;
      padding: 2% 10%;
      margin-top: 30px;
      font-size: rem(33px);
    }
  }
  .block2 {
    height: 45%;
    background: url("/images/store/section3-block2-bg.png");
    background-size: cover;
    min-width: 100%;

    .wrap {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      > div:nth-child(1) {
        width: 60%;
        padding: 5%;
        background: #fff;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.297121);
        border-radius: 12px;

        // .text1 {
        //   font-size: rem(44px);
        // }
        // .text2 {
        //   font-size: rem(22px);
        // }

        input {
          padding: 2% 5%;
          background: #ffb219;
          border-radius: 8px;
          border: none;
          text-align: center;
          color: white;
          margin-top: 30px;
        }
      }
    }
  }
}

@media screen and (min-width: 100px) and (max-width: 560px) {
  .section .block div.item-wrap {
    flex-direction: column;
    align-items: center;
  }

  .section .block .item-wrap > div {
    width: 80%;
  }

  section.section1 .block1 .item-wrap {
    flex-direction: column-reverse;

    .right-image {
      display: none;
    }
  }

  .section2 .block3 .round-row {
    width: 90%;
  }
}

@media screen and (min-width: 100px) and (max-width: 560px) {
  .section2 {
    .block2 {
      .item-wrap {
        .left-text {
          .input-wrap {
            padding: 0;
            text-align: center;
          }
        }
      }
    }
  }
  .section3 {
    .block1 {
      .item-wrap {
        div.right-image {
          display: none;
        }
        div.left-text {
          width: 80%;
        }
      }
    }
  }
}

.container {
  margin: 0 auto;
  // min-height: 100vh;
  // display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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

@media screen and (min-width: 100px) and (max-width: 560px) {
  section {
    div.block {
      div.item-wrap > div {
        width: 80%;
      }
    }
  }

  .section1 {
    height: 300vh;
    .block1 {
      height: 100vh;
    }
    .block2 {
      height: 100vh;
    }
    .block3 {
      height: 100vh;
    }
  }

  .section2 {
    .block1 {
      height: 100vh;

      .item-wrap {
        margin: 2% auto;
        > div:nth-child(1) {
          width: 100%;
        }

        div.right-image {
          width: 90%;
        }
      }
    }
    .block2 {
      height: 100vh;
    }
  }
}
</style>
<style>
#store .slick-dots {
  bottom: 20px;
}
</style>