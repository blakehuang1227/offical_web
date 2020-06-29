<template>
  <!-- <div class="header-container">
   
  </div>-->
  <div :key="$route.path">
    <header class="the-header">
      <div class="logo" @click="navActive='0'; toLink('/')">
        <a>
          <img class="head-logo" src="@/assets/images/header_icon.png" />
        </a>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li
            class="nav-item"
            :class="{'nav-active':navActive === '1'}"
            @click="navActive='1'; toLink('/about')"
          >
            <nuxt-link to="/about">關於我們</nuxt-link>
          </li>
          <li
            class="nav-item"
            :class="{'nav-active':navActive === '2'}"
            @click="navActive='2'; toLink('/news')"
          >
            <nuxt-link to="/news">最新消息</nuxt-link>
          </li>
          <li
            class="nav-item"
            :class="{'nav-active':navActive === '3'}"
            @click="showExtend();navActive='3';"
          >
            <a>店家中心</a>
          </li>
          <li
            class="nav-item"
            :class="{'nav-active':navActive === '4'}"
            @click="navActive='4'; toLink('/join-us')"
          >
            <nuxt-link to="/join-us">加入我們</nuxt-link>
          </li>
          <li class="nav-item" :class="{'nav-active':navActive === '5'}" @click="navActive='5'">
            <nuxt-link to="/download">下載</nuxt-link>
          </li>
          <li class="nav-item" :class="{'nav-active':navActive === '6'}" @click="navActive='6'">
            <nuxt-link to="/service">企業服務</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/login">
              <input type="button" class="btn-login" value="註冊/登入" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </header>
    <transition name="fade">
      <div class="folder" v-if="extendMenu">
        <img class="right-bg" src="/official_web/images/nav/right-bg.png" />
        <img class="left-bg" src="/official_web/images/nav/left-bg.png" />
        <div class="flex-wrap">
          <div class="m-pos-link" @click=" toLink('/store')">
            <img src="/official_web/images/nav/store.png" />
            <div class="text1">店老闆享有服務</div>
            <div class="text2">安安安安安</div>
          </div>
          <div class="m-pos-link" @click=" toLink('/store/m-pos')">
            <img src="/official_web/images/nav/M-POS.png" />
            <div class="text1">M-POS 餐飲收銀</div>
            <div class="text2">安安安安安</div>
          </div>
          <div class="m-pos-link">
            <img src="/official_web/images/nav/charge.png" />
            <div class="text1">收費與服務說明</div>
            <div class="text2">安安安安安</div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" v-if="extendMenu" @click="collapeMenu"></div>
    </transition>
    <div class="navigation-items2" v-if="showNav">
      <ul class="nav-list">
        <li
          class="nav-item"
          :class="{'nav-active':navActive === '1'}"
          @click="navActive='1'; toLink('/about')"
        >
          <nuxt-link to="/about">關於我們</nuxt-link>
        </li>
        <li
          class="nav-item"
          :class="{'nav-active':navActive === '2'}"
          @click="navActive='2'; toLink('/news')"
        >
          <a>最新消息</a>
        </li>
        <li
          class="nav-item"
          :class="{'nav-active':navActive === '3'}"
          @click="showExtend();navActive='3';"
        >
          <a>店家中心</a>
        </li>
        <li
          class="nav-item"
          :class="{'nav-active':navActive === '4'}"
          @click="navActive='4'; toLink('/join-us')"
        >
          <a>加入我們</a>
        </li>
        <li
          class="nav-item"
          :class="{'nav-active':navActive === '5'}"
          @click="navActive='5' ; toLink('/download')"
        >
          <a>下載</a>
        </li>
        <li
          class="nav-item"
          :class="{'nav-active':navActive === '6'}"
          @click="navActive='6'; toLink('/service')"
        >
          <a>企業服務</a>
        </li>
        <li class="nav-item">
          <nuxt-link to="/admin">
            <input type="button" class="btn-login" value="註冊/登入" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  components: {},
  data() {
    return {
      extendMenu: false,
      navActive: "0",
      showNav: false
    };
  },
  methods: {
    showExtend() {
      this.showNav = false;
      this.extendMenu = !this.extendMenu;
    },
    collapeMenu() {
      this.extendMenu = false;
    },
    toLink(path) {
      console.log("path");
      this.extendMenu = false;
      this.showNav = false;
      this.$router.push(path);
    },

    sidenavToggle() {
      this.showNav = !this.showNav;
    }
  },
  mounted() {
    switch (this.$route.path) {
      case "/home":
        this.navActive = "0";
        break;
      case "/home":
        this.navActive = "1";
        break;
      case "/about":
        this.navActive = "2";
        break;
      case "/news":
        this.navActive = "3";
        break;
      case "/join-us":
        this.navActive = "4";
        break;
      case "/download":
        this.navActive = "5";
        break;
      case "/service":
        this.navActive = "6";
        break;
      default:
      // code block
    }
  }
};
</script>


<style scoped lang="scss">
$device-list: 320px 360px 400px 440px 480px 520px 560px 600px 640px 800px 900px;
@each $current-device in $device-list {
  @media screen and (min-width: $current-device) {
    body,
    html {
      font-size: $current-device * 0.015;
      // font-size: 18px;
    }
  }
}
$base-font-size: 16px !default;
@function rem($target, $context: $base-font-size) {
  @if $target == 0 {
    @return 0;
  }
  @return ($target / $context) + 0rem;
}

.m-pos-link {
  width: 25%;
  min-width: 150px;
  cursor: pointer;
  img {
    width: 100%;
    // height: 124px;
  }
}
.flex-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 60%;
  margin: 0 auto;

  .text1 {
    font-weight: bold;
    font-size: rem(33px);
  }
}

.left-bg {
  bottom: 0%;
  width: 10%;
  position: absolute;
}

.right-bg {
  width: 10%;
  position: absolute;
  right: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.folder-wrap {
  height: 100%;
  width: 100%;
}
.mask {
  height: 100%;
  width: 500%;
  opacity: 0.5;
  background: #000;
  position: fixed;
  z-index: 67;
}
.folder {
  height: 240px;
  width: 100%;
  position: fixed;
  top: 60px;
  background: #fff;
  z-index: 77;
}
/* .header-container {
  height: 60px;
} */

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: black; */
  background-color: #fff;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  color: black;
}

.head-logo {
  width: 176px;
  cursor: pointer;
}

.btn-login {
  color: #fff;
  background-color: #f8b62d;
  width: 126px;
  height: 34px;
  border: none;
  border-radius: 5px;
  // padding: 0 3%;
}

.nav-item {
  cursor: pointer;
  display: inline-block;
  margin: 0 10px;
  a {
    margin: auto;
    display: inline-block;
    // height: 100%;
  }
}

.nav-active {
  border-bottom: 3px solid #ffb219;
}

a:visited {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: none;
  color: black;
}
a:focus {
  text-decoration: none;
  color: black;
}
a:hover,
a:active {
  text-decoration: none;
  color: black;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
    height: 100%;
  }

  .folder {
    .flex-wrap {
      width: 80%;
    }
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;
}

.nav-item {
  margin: 0 10px;
  display: flex;
  justify-content: center;
}

.nav-item a {
  text-decoration: none;
  /* color: white; */
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  // color: red;
}

// @media screen and (min-width: 100px) and (max-width: 850px) {
//   .navigation-items{

//   }
// }

.navigation-items2 {
  z-index: 88;
  position: absolute;
  background-color: #fff;
  height: 100vh;
  top: 60px;
  width: 100%;

  .nav-list {
    display: flex;
    flex-direction: column;

    .nav-item {
      padding: 10px 0;
      border-bottom: 1px solid #c7c7c7;
    }
  }
}

@media screen and (min-width: 600px) and (max-width: 800px) {
  .flex-wrap {
    width: 80%;
  }
}

@media screen and (min-width: 100px) and (max-width: 600px) {
  .folder {
    height: 70vh;
  }
  .flex-wrap {
    flex-direction: column;
  }
  .m-pos-link {
    width: 70%;
  }
}
</style>
