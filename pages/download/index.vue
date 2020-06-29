<template>
  <div class>
    <section class="section1">
      <div class="block block1">
        <img class="left-bg" src="/official_web/images/download/left-bg.png" />
        <img class="right-bg" src="/official_web/images/download/right-bg.png" />
        <div class="width-wrap">
          <div class="switch-wrap">
            <span :class="{'active-span':type=='member'}" @click="switchType('member')">消費者端</span>
            <span :class="{'active-span':type=='store'}" @click="switchType('store')">店家端</span>
          </div>
          <div class="flex-wrap" v-show="type=='member'">
            <div class="left-text">
              <div class="text1">
                用XXX消費
                <br />拿最高回饋！
              </div>
              <div class="text2">立即下載體驗。</div>
              <div class="flex-wrap2">
                <div class="store-wrap">
                  <div>
                    <img src="/official_web/images/home/apple-store.png" />
                  </div>
                  <div>
                    <img src="/official_web/images/home/google-store.png" />
                  </div>
                </div>
                <div>
                  <img src="/official_web/images/download/qr-code.png" />
                </div>
              </div>
            </div>
            <div class="right-image">
              <img src="/official_web/images/download/iphone_member.png" />
            </div>
          </div>
          <div class="flex-wrap" v-show="type=='store'">
            <div class="left-text">
              <div class="text1">
                用XXX消費
                <br />拿最高回饋！
              </div>
              <div class="text2">立即下載體驗。</div>
              <div class="flex-wrap2">
                <div class="store-wrap">
                  <div>
                    <img src="/official_web/images/home/apple-store.png" />
                  </div>
                  <div>
                    <img src="/official_web/images/home/google-store.png" />
                  </div>
                </div>
                <div>
                  <img src="/official_web/images/download/qr-code.png" />
                </div>
              </div>
            </div>
            <div class="right-image">
              <img src="/official_web/images/download/iphone_store.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "member"
    };
  },
  mounted() {},
  methods: {
    switchType(type) {
      this.type = type;
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

.right-bg {
  width: 35%;
  position: absolute;
  right: 0;
  z-index: -1;
}

.left-bg {
  bottom: 8%;
  width: 25%;
  position: absolute;
  z-index: -1;
}

.active-span {
  background: #44423e;
  color: white;
}

.left-text {
  // height: 80%;
}
.right-image {
  width: 50%;
  height: 90%;
  img {
    height: 100%;
    object-fit: cover;
    object-fit: scale-down;
  }
}
.container {
  width: 100vw;
  min-height: 100vh;
  background: #eaeaeacc;
}

.flex-wrap {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  padding: 0 5%;
}
.width-wrap {
  max-width: 960px;
  height: 100%;
  margin: auto;
  padding: 8% 0;
  display: flex;
  // margin-top: 60px;
  flex-direction: column;
}

.switch-wrap {
  text-align: center;
  font-size: 0;
  cursor: pointer;
  margin: 0px;
  display: flex;
  justify-content: center;

  span {
    padding: 2% 4%;
    border: 3px solid #44423e;
    display: inline-block;
    font-size: rem(33px);
    width: 170px;
    float: left;
  }
  span:nth-child(1) {
    border-radius: 8px 0px 0px 8px;
    // border-right: 0px;
  }
  span:nth-child(2) {
    border-radius: 0px 8px 8px 0px;
    // border-left: 0px;
  }
}

.section1 {
  height: 100vh;
  .block1 {
    height: 100%;
    position: relative;
    .text1 {
      font-weight: bold;
      letter-spacing: 2.85714px;
    }

    .width-wrap {
      z-index: 66;
      display: flex;
      justify-content: space-evenly;
    }

    .left-text {
      height: 50%;
    }

    .flex-wrap {
      color: #44423e;
      text-align: left;
      min-height: 40vh;
      .flex-wrap2 {
        display: flex;
        // height: 100%;
        max-height: 120px;
        width: 60%;

        > div {
          height: 100%;
        }
        .store-wrap {
          display: flex;
          flex-direction: column;
          // height: 100%;
          // height: 250px;
          width: 45%;
          min-width: 140px;
          justify-content: space-around;
          > div {
            cursor: pointer;
            width: 143px;
          }
        }

        > div {
          // width: 50%;
          width: 120px;

          img {
            margin: 2% 1%;
          }
        }

        > div:nth-child(2) {
          img {
            width: 80%;
            min-width: 120px;
          }
        }
      }
    }

    .left-text {
      img {
        width: 80%;
      }
    }

    .text2 {
      font-size: rem(33px);
    }

    .text3 {
      width: 100%;
    }
  }
}
.left-text {
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 50%;
  text-align: left;

  > div:nth-child(1) {
    font-size: rem(66px);
    line-height: 60px;
  }
}

@media screen and (min-width: 100px) and (max-width: 750px) {
  .flex-wrap {
    flex-direction: column-reverse;
    justify-content: center;
  }

  .section1 {
    .block1 {
      .switch-wrap {
        padding-top: 50px;
      }
      .flex-wrap {
        margin: auto;
        flex-direction: row;
        .left-text {
          text-align: center;
          width: 90%;
          justify-content: flex-start;
        }

        .right-image {
          height: 50%;
          img {
            height: 100%;
          }
        }

        .flex-wrap2 {
          width: 80%;
          margin: 0 auto;
          justify-content: center;
          align-items: center;

          .store-wrap {
            align-items: center;
            > div {
              width: 80%;

              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
