<template>
  <div class>
    <section class="section1">
      <div class="block block1">
        <div class="width-wrap">
          <div class="flex-wrap">
            <div class="left-text">
              <div class="text1">
                用白吃貓消費
                <br />拿最高回饋！
              </div>
              <div class="text2">立即下載體驗。</div>
              <div class="flex-wrap2">
                <div class="store-wrap">
                  <div>
                    <img src="/images/home/apple-store.png" />
                  </div>
                  <div>
                    <img src="/images/home/google-store.png" />
                  </div>
                </div>
                <div>
                  <img src="/images/download/qr-code.png" />
                </div>
              </div>
            </div>
            <div class="right-image">
              <img src="/images/download/iphone_group.png" />
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
    return {};
  },
  mounted() {}
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
}

.section1 {
  height: 100vh;
  .block1 {
    height: 100%;
    .text1 {
      font-weight: bold;
      letter-spacing: 2.85714px;
    }

    .width-wrap {
      display: flex;
      justify-content: center;
    }

    .left-text {
      height: 50%;
    }

    .flex-wrap {
      color: #44423e;
      text-align: left;

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
      .flex-wrap {
        margin: auto;

        .left-text {
          text-align: center;
          width: 90%;
          justify-content: flex-start;
        }

        .right-image {
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
