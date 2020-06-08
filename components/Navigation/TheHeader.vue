<template>
  <!-- <div class="header-container">
   
  </div>-->
  <div :key="$route.path">
    <header class="the-header">
      <TheSideNavToggle class="TheSideNavToggle" @toggle="$emit('sidenavToggle')" />
      <div class="logo" @click="navActive='0'">
        <nuxt-link to="/">
          <img class="head-logo" src="@/assets/images/header_icon.png" />
        </nuxt-link>
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
            <!-- <nuxt-link to="/store">店家中心</nuxt-link>。 -->
            <a>店家中心</a>
          </li>
          <li
            class="nav-item"
            :class="{'nav-active':navActive === '4'}"
            @click="navActive='4'; toLink('/join-us')"
          >
            <nuxt-link to="/join-us">加入我們</nuxt-link>
          </li>
          <!-- <li class="nav-item">
            <nuxt-link to="/store">下載</nuxt-link>
          </li>-->
          <li class="nav-item" :class="{'nav-active':navActive === '5'}" @click="navActive='5'">
            <nuxt-link to="/download">下載</nuxt-link>
          </li>
          <li class="nav-item" :class="{'nav-active':navActive === '6'}" @click="navActive='6'">
            <nuxt-link to="/service">企業服務</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/admin">
              <input type="button" class="btn-login" value="註冊/登入" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </header>
    <transition name="fade">
      <div class="folder" v-if="extendMenu">
        <img class="right-bg" src="/images/nav/right-bg.png" />
        <img class="left-bg" src="/images/nav/left-bg.png" />
        <div class="flex-wrap">
          <div class="m-pos-link" @click=" toLink('/store')">
            <img src="/images/nav/store.png" />
            <div class="text1">店老闆享有服務</div>
            <div class="text2">安安安安安</div>
          </div>
          <div class="m-pos-link" @click=" toLink('/store/m-pos')">
            <img src="/images/nav/M-POS.png" />
            <div class="text1">M-POS 餐飲收銀</div>
            <div class="text2">安安安安安</div>
          </div>
          <div class="m-pos-link">
            <img src="/images/nav/charge.png" />
            <div class="text1">收費與服務說明</div>
            <div class="text2">安安安安安</div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" v-if="extendMenu" @click="collapeMenu"></div>
    </transition>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  },
  data() {
    return {
      extendMenu: false,
      navActive: "0"
    };
  },
  methods: {
    showExtend() {
      this.extendMenu = !this.extendMenu;
    },
    collapeMenu() {
      this.extendMenu = false;
    },
    toLink(path) {
      this.extendMenu = false;
      this.$router.push(path);
    }
  },
  mounted() {
    console.error(this.$route.path);

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
$base-font-size: 16px !default;
@function rem($target, $context: $base-font-size) {
  @if $target == 0 {
    @return 0;
  }
  @return ($target / $context) + 0rem;
}

.m-pos-link {
  cursor: pointer;
  img {
    width: 200px;
    height: 124px;
  }
}
.flex-wrap {
  display: flex;
  justify-content: space-between;
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
</style>
