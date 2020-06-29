<template>
  <div class="footer">
    <div class="width-wrap">
      <div class="block block1">
        <div>
          <div>XXX股份有限公司</div>
          <div>244 gggggggggggggggassds</div>
          <div>客服中心： (1000 - 2100 週一到週六)</div>
          <div>02-XXXX-6777</div>
          <div>service@XXX.com.tw</div>
          <div class="icon-wrap">
            <div>
              <img src="/official_web/images/footer/facebook.png" />
            </div>
            <div>
              <img src="/official_web/images/footer/instagram.png" />
            </div>
            <div>
              <img src="/official_web/images/footer/youtube.png" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="block block2">
        <div>
          <div>關於我們｜加入我們｜媒體專區｜聯絡我們</div>
          <div>常見問題｜使用手冊</div>
          <div>隱私權政策｜會員契約書｜代理收付服務條款</div>
        </div>
        <div>©XXX股份有限公司 XXX Co., Ltd.</div>
      </div>
      <div class="block block3">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
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

.icon-wrap {
  display: flex;
  justify-content: flex-start;

  img {
    height: 20px;
    margin-right: 10px;
    margin-top: 5px;
  }
}

.block {
  line-height: 24px;
  font-size: rem(14px);
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  // white-space: break-spaces;
}

.block1 {
  div > div:nth-child(1) {
    font-weight: bold;
    font-size: rem(14px);
  }
}

.block2 {
  font-size: rem(14px);
  justify-content: space-around;

  > div:nth-child(2) {
    color: #6c6c6c;
  }
}
.width-wrap {
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  padding: 0 3%;
}
/* FOOTER */
.footer {
  width: 100%;
  height: 288px;
  background: #fff;
  display: block;
}

.inner-footer {
  width: 95%;
  margin: auto;
  padding: 30px 10px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
}

.footer-items {
  width: 25%;
  padding: 10px 20px;
  box-sizing: border-box;
  color: #fff;
}

.footer-items p {
  font-size: rem(16px);
  text-align: justify;
  line-height: 25px;
  color: #fff;
}

.footer-items h1 {
  color: #fff;
}

.border1 {
  height: 3px;
  width: 40px;
  background: #ff9800;
  color: #ff9800;
  background-color: #ff9800;
  border: 0px;
}

ul {
  list-style: none;
  color: #fff;
  font-size: rem(15px);
  letter-spacing: 0.5px;
}

ul a {
  text-decoration: none;
  outline: none;
  color: #fff;
  transition: 0.3s;
}

ul a:hover {
  color: #ff9800;
}

ul li {
  margin: 10px 0;
  height: 25px;
}

li i {
  margin-right: 20px;
}

.social-media {
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: rem(14px);
}

.social-media a {
  text-decoration: none;
}

.social-media i {
  height: 25px;
  width: 25px;
  margin: 20px 10px;
  padding: 4px;
  color: #fff;
  transition: 0.5s;
}

.social-media i:hover {
  transform: scale(1.5);
}

.footer-bottom {
  padding: 10px;
  background: #00121b;
  color: #fff;
  font-size: rem(12px);
  text-align: center;
}

/* for tablet mode view */

@media screen and (max-width: 1275px) {
  .footer-items {
    width: 50%;
  }
}

/* for mobile screen view */

@media screen and (max-width: 660px) {
  .footer-items {
    width: 100%;
  }
}

@media screen and (max-width: 560px) {
  .width-wrap {
    flex-wrap: wrap;
  }
  .block {
    width: 100%;
  }
}

/* you can toggle the media screen view accordingly by changing the (max-width: px) to your convenience */

/* Thanks to Computer Conversations */
</style>
