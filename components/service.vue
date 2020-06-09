<template>
  <section class="section section-service">
    <div class="block block1">
      <div class="width-wrap">
        <div class="item-wrap">
          <div class="left-text">
            <div class>
              專業顧問服務
              <br />協助完成開店夢想
            </div>
            <div class="border-text">收費與服務說明</div>
          </div>
          <div class="right-image">
            <!-- <img src="/images/store/phone.png" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="block block2">
      <div class="wrap">
        <div>
          <div class="text1">免費諮詢</div>
          <div class="text2">立即申請成為貓Pay合作店家，了解更多詳情。</div>
          <div>
            <input type="buttom" value="我想知道更多" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$base-font-size: 16px !default;
@function rem($target, $context: $base-font-size) {
  @if $target == 0 {
    @return 0;
  }
  @return ($target / $context) - 0rem;
}

.width-wrap {
  max-width: 960px;
  height: 100%;
  margin: auto;
  // padding: 8% 0;
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
      height: 80%;
      z-index: 66;
      object-fit: cover;
      object-fit: scale-down;
      width: 100%;
    }
  }
}

.section-service {
  height: 100vh;
  .block1 {
    height: 55%;
    background: url("/images/store/section3-block1-bg.png");
    background-size: cover;
    min-width: 100%;

    .item-wrap {
      width: 100%;
    }

    div.left-text {
      color: white;
      text-align: left;
      align-items: flex-start;
    }

    .border-text {
      border: 2px solid #fff;
      border-radius: 4px;
      padding: 3% 25%;
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
      text-align: center;

      > div:nth-child(1) {
        width: 60%;
        padding: 5%;
        background: #fff;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.297121);
        border-radius: 12px;

        .text1 {
          font-weight: bold;
          line-height: 60px;
          font-size: rem(55px);
        }

        .text2 {
          line-height: 24px;
        }
        input {
          padding: 2% 0%;
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

@media screen and (min-width: 100px) and (max-width: 960px) {
  .section-service .block1 .item-wrap .right-image {
    display: none;
  }
}
</style>